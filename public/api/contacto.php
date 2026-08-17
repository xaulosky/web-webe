<?php
/**
 * Receptor del formulario de contacto. Va en public_html/api/contacto.php.
 *
 * El sitio es HTML estático: esto es lo único que corre en el servidor. Manda
 * el mensaje por correo con mail() —disponible en cualquier cPanel— y responde
 * JSON al fetch del formulario, o redirige si llegó sin JavaScript.
 */

declare(strict_types=1);

// ---------------------------------------------------------------------------
// Configuración
// ---------------------------------------------------------------------------

/** Dónde llegan los mensajes. */
const DESTINO = 'hola@webe.cl';

/**
 * Remitente. Tiene que ser una cuenta del propio dominio: si se pone el correo
 * de quien escribe, el servidor de destino lo lee como suplantación y lo manda
 * a spam (SPF/DKIM no cuadran). El correo del visitante va en Reply-To.
 */
const REMITENTE = 'web@webe.cl';
const REMITENTE_NOMBRE = 'Web WEBE';

/** A dónde volver cuando el envío llega sin JavaScript. */
const VUELTA_OK = '/be-partner?enviado=1#postular';
const VUELTA_ERROR = '/be-partner?error=1#postular';

/** Segundos mínimos entre abrir la página y enviar: por debajo, es un bot. */
const MINIMO_SEGUNDOS = 3;

/** Envíos permitidos por IP en una hora. */
const TOPE_POR_HORA = 5;

// ---------------------------------------------------------------------------

$quiereJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

/**
 * Responde y termina. Con JSON para el fetch; con redirección para el envío
 * clásico, que es lo que ocurre si el JavaScript no cargó.
 */
function responder(bool $ok, string $mensaje, array $errores = [], int $codigo = 200): never
{
    global $quiereJson;

    if ($quiereJson) {
        http_response_code($codigo);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(
            ['ok' => $ok, 'message' => $mensaje, 'errors' => $errores],
            JSON_UNESCAPED_UNICODE
        );
    } else {
        header('Location: ' . ($ok ? VUELTA_OK : VUELTA_ERROR), true, 303);
    }

    exit;
}

// Sólo POST.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    responder(false, 'Método no permitido.', [], 405);
}

// --- Filtros anti-bot -------------------------------------------------------

// 1. Honeypot: campo invisible que sólo rellenan los bots. Se responde "ok"
//    a propósito, para no darle pistas de que fue descartado.
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    responder(true, 'Gracias por escribirnos.');
}

// 2. Velocidad: la marca de tiempo la pone el JavaScript al cargar la página,
//    en milisegundos. Sin ella (JS apagado) no se descarta a nadie.
$abierto = (int) ($_POST['abierto'] ?? 0);
if ($abierto > 0) {
    $transcurrido = (int) round((microtime(true) * 1000 - $abierto) / 1000);
    if ($transcurrido < MINIMO_SEGUNDOS) {
        responder(true, 'Gracias por escribirnos.');
    }
}

// 3. Tope por IP, con un archivo por hora en el directorio temporal. Evita que
//    alguien use el formulario como ametralladora.
$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'desconocida');
$registro = sys_get_temp_dir() . '/webe-contacto-' . date('YmdH') . '-' . md5($ip) . '.txt';
$envios = is_file($registro) ? (int) file_get_contents($registro) : 0;
if ($envios >= TOPE_POR_HORA) {
    responder(
        false,
        'Recibimos varios mensajes tuyos. Escríbenos directamente a ' . DESTINO . '.',
        [],
        429
    );
}

// --- Validación -------------------------------------------------------------

$limpiar = static function (string $clave, int $tope): string {
    $valor = (string) ($_POST[$clave] ?? '');
    // Sin saltos de línea ni retornos: son la vía para inyectar cabeceras.
    $valor = str_replace(["\r", "\n", "\0"], ' ', $valor);
    return mb_substr(trim($valor), 0, $tope);
};

$nombre   = $limpiar('nombre', 80);
$email    = $limpiar('email', 120);
$empresa  = $limpiar('empresa', 80);
$telefono = $limpiar('telefono', 30);
$perfil   = $limpiar('perfil', 40);
$origen   = $limpiar('origen', 40);

// El mensaje sí conserva los saltos: va en el cuerpo, no en una cabecera.
$mensaje = mb_substr(trim(str_replace("\0", '', (string) ($_POST['mensaje'] ?? ''))), 0, 2000);

$errores = [];

if (mb_strlen($nombre) < 2) {
    $errores['nombre'] = 'Necesitamos tu nombre para responderte.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errores['email'] = 'Revisa el correo: ahí te respondemos.';
}
if (mb_strlen($mensaje) < 10) {
    $errores['mensaje'] = 'Cuéntanos un poco más, aunque sea en una línea.';
}

if ($errores !== []) {
    responder(false, 'Revisa los campos marcados.', $errores, 422);
}

// --- Envío ------------------------------------------------------------------

$lineas = [
    'Nombre:   ' . $nombre,
    'Email:    ' . $email,
    'Empresa:  ' . ($empresa !== '' ? $empresa : '—'),
    'Teléfono: ' . ($telefono !== '' ? $telefono : '—'),
    'Perfil:   ' . ($perfil !== '' ? $perfil : '—'),
    '',
    'Mensaje:',
    $mensaje,
    '',
    str_repeat('-', 48),
    'Enviado desde: ' . ($origen !== '' ? $origen : 'web'),
    'Fecha: ' . date('d-m-Y H:i'),
    'IP: ' . $ip,
];

$cuerpo = implode("\n", $lineas);

// El asunto lleva el nombre para reconocerlo en la bandeja; codificado en
// base64 para que las tildes no lleguen partidas.
$asunto = '=?UTF-8?B?' . base64_encode('Contacto web — ' . $nombre) . '?=';

$deNombre = '=?UTF-8?B?' . base64_encode(REMITENTE_NOMBRE) . '?=';
$cabeceras = implode("\r\n", [
    'From: ' . $deNombre . ' <' . REMITENTE . '>',
    // Responder en el cliente de correo contesta directamente al visitante.
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . phpversion(),
]);

// -f fija el remitente del sobre; sin él muchos cPanel mandan el correo como
// el usuario del sistema y el destino lo marca como sospechoso.
$enviado = mail(DESTINO, $asunto, $cuerpo, $cabeceras, '-f' . REMITENTE);

if (!$enviado) {
    // Queda registro en el servidor para no perder el mensaje si mail() falla.
    error_log('[webe] mail() falló. Mensaje de ' . $email . ': ' . $cuerpo);
    responder(
        false,
        'No pudimos enviar el mensaje. Escríbenos a ' . DESTINO . ' y lo vemos.',
        [],
        500
    );
}

file_put_contents($registro, (string) ($envios + 1), LOCK_EX);

responder(true, 'Gracias. Recibimos tu mensaje y te respondemos a la brevedad.');
