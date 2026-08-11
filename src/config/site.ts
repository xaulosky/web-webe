// Fuente única de verdad para datos del sitio. Cambiar aquí y se propaga
// a header, footer, SEO y formulario.
export const site = {
  name: 'WEBE',
  tagline: 'we create, be yourself.',
  // TODO: copy SEO definitivo (150-160 caracteres).
  description: 'Equipamiento integral para oficinas.',
  // Dominio final en cPanel. Se usa para canonical y Open Graph.
  // TODO: dominio definitivo.
  url: 'https://webe.cl',
  email: 'hola@webe.cl',
  // TODO: teléfono (el diseño no lo muestra).
  phone: '+56 9 0000 0000',
  direccion: ['Av. del Valle Norte 937 Oficina 454', 'Huechuraba — Ciudad Empresarial', 'Santiago, Chile'],
  address: 'Av. del Valle Norte 937 Oficina 454, Huechuraba, Santiago, Chile',
  creditos: { texto: 'the—concept.studio', url: 'https://the-concept.studio/' },
  // TODO: URLs reales de los perfiles.
  social: [
    { red: 'linkedin' as const, url: '#', nombre: 'LinkedIn' },
    { red: 'instagram' as const, url: '#', nombre: 'Instagram' },
  ],
} as const;

// Cada ítem se parte en dos: la primera palabra va en medium y la segunda en
// light, como en el diseño del menú.
export const nav = [
  { fuerte: 'we', suave: 'are', label: 'We are', href: '/nosotros' },
  { fuerte: 'be', suave: 'partner', label: 'Be partner', href: '/be-partner' },
  { fuerte: 'our', suave: 'brands', label: 'Our brands', href: '/marcas' },
  { fuerte: 'we', suave: 'work', label: 'We work', href: '/proyectos' },
] as const;

// Frases de la marquesina que separa secciones. Mismo patrón de la marca:
// primera palabra en medium, el resto en light.
// TODO: confirmar la segunda frase — en la referencia sólo se lee "be c…".
export const marquesina = [
  { fuerte: 'we', suave: 'collaborate.' },
  { fuerte: 'be', suave: 'creative.' },
] as const;

export const marquesinaContacto = [
  { fuerte: 'we', suave: 'connect.' },
  { fuerte: 'be', suave: 'together.' },
] as const;

// Carrusel de proceso dentro de "be partner".
// TODO: faltan el copy y las imágenes de los pasos 2 y 3; hoy repiten la del 1
// sólo para que se vea el mecanismo.
export const proceso = [
  {
    titulo: 'Entendemos.',
    texto:
      'Cada proyecto comienza escuchando. Analizamos los requerimientos, objetivos y particularidades de cada espacio para comprender qué necesita realmente el proyecto y cuáles son las soluciones más adecuadas para abordarlo.',
    imagen: '/proceso/entendemos.png',
    alt: 'Plano isométrico acotado de una planta de oficinas',
  },
  // Títulos y textos de relleno para poder ver la transición; NO son copy final.
  {
    titulo: 'Proponemos.',
    texto:
      'Traducimos ese diagnóstico en una propuesta concreta: distribución, mobiliario y materialidades. Presentamos alternativas para que la decisión se tome sobre opciones claras y comparables.',
    imagen: '/proceso/paso-2.svg',
    alt: 'Imagen pendiente del paso 2',
  },
  {
    titulo: 'Ejecutamos.',
    texto:
      'Coordinamos fabricación, plazos y montaje en obra. Acompañamos la instalación hasta la entrega para que el resultado sea el mismo que se proyectó.',
    imagen: '/proceso/paso-3.svg',
    alt: 'Imagen pendiente del paso 3',
  },
] as const;

// Textos de alcance tal como los envió el cliente, en Title Case y con punto
// final. Son cinco variantes que se repiten entre proyectos.
const alcanceCompleto =
  'Equipamiento de Mobiliario para Bench, Privados, Salas de Reunión y Áreas Colaborativas. Sillería.';
const alcanceSinSilleria =
  'Equipamiento de Mobiliario para Bench, Privados, Salas de Reunión y Áreas Colaborativas.';
const alcanceReuniones =
  'Equipamiento de Mobiliario para Bench, Privados, Salas de Reunión.';
const alcanceBenchSalas = 'Equipamiento de Mobiliario para Bench y Salas de Reunión.';
const alcanceBenchRegulable =
  'Equipamiento de Mobiliario para Bench (Estaciones de trabajo con regulación altura).';

// Proyectos destacados. `ano` no se muestra en la ficha: alimenta el
// superíndice de la nube, que en el diseño son los dos últimos dígitos.
// TODO: falta el dato de `marcas` de todos los proyectos.
export const proyectos = [
  {
    nombre: 'Howden Chile',
    superficie: '1.200 m²',
    puestos: '100',
    alcance: alcanceCompleto,
    marcas: '',
    ano: '2026',
  },
  {
    nombre: 'Deportes Sparta',
    superficie: '1.100 m²',
    puestos: '130',
    alcance: alcanceCompleto,
    marcas: '',
    ano: '2026',
  },
  {
    nombre: 'Siemens Energy',
    superficie: '1.000 m²',
    puestos: '65',
    alcance: alcanceBenchRegulable,
    marcas: '',
    ano: '2026',
  },
  {
    nombre: 'Colliers',
    superficie: '2.250 m²',
    puestos: '180',
    alcance: alcanceBenchSalas,
    marcas: '',
    ano: '2026',
  },
  {
    nombre: 'The Andes Brand (Lippi)',
    superficie: '2.100 m²',
    puestos: '200',
    alcance: alcanceSinSilleria,
    marcas: '',
    ano: '2026',
  },
  {
    nombre: 'Empresas Torre',
    superficie: '1.100 m²',
    puestos: '70',
    alcance: alcanceCompleto,
    marcas: '',
    ano: '2026',
  },
  {
    nombre: 'MetLife',
    superficie: '1.300 m²',
    puestos: '120',
    alcance: alcanceCompleto,
    marcas: '',
    ano: '2026',
  },
  {
    nombre: 'CCU',
    superficie: '4.500 m²',
    puestos: '400',
    alcance: alcanceCompleto,
    marcas: '',
    ano: '2025',
  },
  {
    nombre: 'Transbank',
    superficie: '2.500 m²',
    puestos: '230',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2025',
  },
  {
    nombre: 'Servicio de Evaluación Ambiental (SEA)',
    superficie: '3.500 m²',
    puestos: '230',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2025',
  },
  {
    nombre: 'OCA Global',
    superficie: '1.900 m²',
    puestos: '240',
    alcance: alcanceCompleto,
    marcas: '',
    ano: '2025',
  },
  {
    nombre: 'BNP Paribas',
    superficie: '2.500 m²',
    puestos: '200',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2025',
  },
  {
    nombre: 'ENEL',
    superficie: '15.000 m²',
    puestos: '800',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2024',
  },
  {
    nombre: 'OnNet',
    superficie: '1.500 m²',
    puestos: '185',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2024',
  },
  {
    nombre: 'Mathiesen',
    superficie: '1.500 m²',
    puestos: '100',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2024',
  },
  {
    nombre: 'Everest Chile',
    superficie: '800 m²',
    puestos: '60',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2024',
  },
  {
    nombre: 'ABB Chile',
    superficie: '2.000 m²',
    puestos: '120',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2023',
  },
  {
    nombre: 'BUK',
    superficie: '1.500 m²',
    puestos: '160',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2023',
  },
  {
    nombre: 'EMIN',
    superficie: '1.000 m²',
    puestos: '80',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2023',
  },
  {
    nombre: 'Subsecretaría de la Niñez y la Adolescencia',
    superficie: '5.000 m²',
    puestos: '450',
    alcance: alcanceReuniones,
    marcas: '',
    ano: '2023',
  },
] as const;

// Cifras de la página "we are".
export const cifras = [
  '+6 años',
  '+6.500 m² equipados',
  '+18 proyectos',
  '+480 puestos de trabajo',
  '+12 marcas',
] as const;

// Acordeón "our attributes". Sólo el primero trae copy real en el diseño.
// TODO: textos de los cinco restantes.
export const atributos = [
  {
    titulo: 'Atención directa de socios',
    texto:
      'Cada proyecto cuenta con la participación activa de los socios de WEBE. Esto permite tomar decisiones con mayor criterio, mantener una comunicación directa y asegurar un acompañamiento cercano desde la propuesta inicial hasta la postventa.',
  },
  {
    titulo: 'Experiencia',
    texto:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonumy nibh euismod tincidunt ut laoreet…',
  },
  {
    titulo: 'Versatilidad',
    texto:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonumy nibh euismod tincidunt ut laoreet…',
  },
  {
    titulo: 'Showroom',
    texto:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonumy nibh euismod tincidunt ut laoreet…',
  },
  {
    titulo: 'Acompañamiento',
    texto:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonumy nibh euismod tincidunt ut laoreet…',
  },
  {
    titulo: 'Continuidad',
    texto:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonumy nibh euismod tincidunt ut laoreet…',
  },
] as const;

// Endpoint PHP que se sube a public_html/api/ en cPanel.
export const CONTACT_ENDPOINT = '/api/contacto.php';

// Marcas representadas, en la fila inferior del hero.
// `ancho`/`alto` son los del viewBox del SVG: fijan la proporción y evitan
// saltos de layout. `escala` es el ancho que ocupa cada logo en vw, tomado del
// diseño — los logos no comparten altura, están equilibrados ópticamente.
// TODO: falta el copy real de cada marca (el diseño trae lorem), y las fotos
// de todas menos Novara.
export const marcas = [
  {
    nombre: 'Novara',
    slug: 'novara',
    // TODO: PDF del catálogo. Sin archivo el botón se dibuja inactivo.
    catalogo: { etiqueta: 'Catálogo Novara 2025-26', archivo: '' },
    // TODO: faltan 3 fotos (el diseño muestra 4 puntos en el carrusel).
    fotos: ['/marcas/fotos/novara.webp'],
    archivo: 'novara.svg',
    ancho: 93.63,
    alto: 19.62,
    escala: 5.9,
    foto: '/marcas/fotos/novara.webp',
    descripcion:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
    categorias: ['Escritorios', 'Sillas', 'Sofás', 'Butacas', 'Libreros', 'Gabinetes'],
  },
  {
    nombre: 'Novus',
    slug: 'novus',
    catalogo: { etiqueta: 'Catálogo Novus 2025-26', archivo: '' },
    fotos: [],
    archivo: 'novus.svg',
    ancho: 70.06,
    alto: 21.45,
    escala: 4.35,
    foto: '',
    descripcion: '',
    categorias: [],
  },
  {
    nombre: 'Trisoft',
    slug: 'trisoft',
    catalogo: { etiqueta: 'Catálogo Trisoft 2025-26', archivo: '' },
    fotos: [],
    archivo: 'trisoft.svg',
    ancho: 76.46,
    alto: 24.24,
    escala: 3.95,
    foto: '',
    descripcion: '',
    categorias: [],
  },
  {
    nombre: 'BK Contract',
    slug: 'bkcontract',
    catalogo: { etiqueta: 'Catálogo BK Contract 2025-26', archivo: '' },
    fotos: [],
    archivo: 'bkcontract.svg',
    ancho: 92.59,
    alto: 20.81,
    escala: 5.2,
    foto: '',
    descripcion: '',
    categorias: [],
  },
  {
    nombre: 'Rossi',
    slug: 'rossi',
    catalogo: { etiqueta: 'Catálogo Rossi 2025-26', archivo: '' },
    fotos: [],
    archivo: 'rossi.svg',
    ancho: 106.96,
    alto: 15.35,
    escala: 5.75,
    foto: '',
    descripcion: '',
    categorias: [],
  },
  {
    nombre: 'Enea',
    slug: 'enea',
    catalogo: { etiqueta: 'Catálogo Enea 2025-26', archivo: '' },
    fotos: [],
    archivo: 'enea.svg',
    ancho: 73.06,
    alto: 18.32,
    escala: 4.05,
    foto: '',
    descripcion: '',
    categorias: [],
  },
] as const;
