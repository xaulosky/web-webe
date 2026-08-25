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
  // Dos líneas: la comuna y la ciudad van juntas, sin cortar entre ellas.
  direccion: ['Avenida Vitacura 3439, Oficina 203', 'Vitacura, Santiago, Chile'],
  address: 'Avenida Vitacura 3439, Oficina 203, Vitacura, Santiago, Chile',
  creditos: { texto: 'the—concept.studio', url: 'https://the-concept.studio/' },
  // TODO: URLs reales de los perfiles.
  social: [
    { red: 'linkedin' as const, url: '#', nombre: 'LinkedIn' },
    { red: 'instagram' as const, url: '#', nombre: 'Instagram' },
  ],
} as const;

// La marca con la que abre la sección de marcas y a la que apunta el menú: no
// hay pantalla de índice en el diseño, así que «Nuestras marcas» entra directo
// a la ficha y desde ahí se salta al resto con los logos de la portada.
export const MARCA_PORTADA = 'novara';

// Cada ítem se parte en dos: la primera palabra va en medium y la segunda en
// light. El PDF de ajustes los pasó a español.
export const nav = [
  { fuerte: 'Nuestro', suave: 'equipo', label: 'Nuestro equipo', href: '/nosotros' },
  { fuerte: 'Seamos', suave: 'partners', label: 'Seamos partners', href: '/be-partner' },
  {
    fuerte: 'Nuestras',
    suave: 'marcas',
    label: 'Nuestras marcas',
    href: `/marcas/${MARCA_PORTADA}`,
  },
  { fuerte: 'Proyectos', suave: 'destacados', label: 'Proyectos destacados', href: '/proyectos' },
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

// Carrusel de proceso. Las tres láminas isométricas muestran la progresión:
// planta vacía acotada, propuesta y resultado equipado.
export const proceso = [
  {
    titulo: 'Entendemos.',
    texto:
      'Cada proyecto comienza escuchando. Analizamos los requerimientos, objetivos y particularidades de cada espacio para comprender qué necesita realmente el proyecto y cuáles son las soluciones más adecuadas para abordarlo.',
    imagen: '/proceso/paso-1.webp',
    alt: 'Plano isométrico acotado de una planta de oficinas vacía',
  },
  {
    titulo: 'Proponemos.',
    texto:
      'A partir de ese análisis, desarrollamos una propuesta que equilibra funcionalidad, diseño, presupuesto y plazo. Seleccionamos los productos y soluciones que mejor responden a las necesidades del proyecto, respaldando cada decisión con experiencia y criterio.',
    imagen: '/proceso/paso-2.webp',
    alt: 'Plano isométrico de la planta con la propuesta de distribución',
  },
  {
    titulo: 'Implementamos.',
    texto:
      'Coordinamos la fabricación, importación, logística e instalación para asegurar que cada etapa se ejecute de acuerdo a lo planificado. Nos involucramos activamente en el proceso para garantizar una implementación eficiente y una correcta puesta en marcha.',
    imagen: '/proceso/paso-3.webp',
    alt: 'Plano isométrico de la planta equipada y terminada',
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
const alcanceBenchReuniones = 'Equipamiento de Mobiliario para Bench y Salas de Reunión.';
const alcanceBenchRegulable =
  'Equipamiento de Mobiliario para Bench (Estaciones de trabajo con regulación altura).';
// El casino de BTG no es una oficina y tiene el suyo propio.
const alcanceCasino =
  'Equipamiento de Mobiliario, Sillas, Taburetes y Soft Seating para Casino. Nubes acústicas 100% PET en el cielo del Casino.';

// Carpetas de fotos que existen hoy. Un proyecto publicado necesita sus tres
// láminas de 1920×900: son el fondo de la sección de la home y la galería de la
// página. Sin ellas el slider pinta negro y la ficha una caja vacía, así que el
// listado de abajo trae los veinte proyectos pero sólo salen los que las
// tienen. Sumar la carpeta y el slug aquí basta para publicar el suyo.
const conFotos = new Set([
  'siemens',
  'lippi',
  'metlife',
  'ccu',
  'transbank',
  'bnp',
  'enel',
  'onnet',
  'ninez',
  'btg',
  'lockton',
]);

const fotosDe = (slug: string) =>
  conFotos.has(slug) ? [1, 2, 3].map((n) => `/proyectos/fotos/${slug}-${n}.webp`) : [];

// Fichas de los proyectos, en el orden que mandó el cliente: del más nuevo al
// más antiguo. `ano` alimenta el superíndice de la nube con sus dos últimos
// dígitos.
//
// `ubicacion` y `arquitectura` todavía no se dibujan: la ficha muestra
// superficie, puestos y alcance. Quedan guardados para cuando se decida dónde
// van.
const fichas = [
  {
    nombre: 'Howden Chile',
    slug: 'howden',
    ubicacion: 'Avenida Apoquindo 4660, Oficina 301A',
    superficie: '1.200 m²',
    puestos: '100',
    alcance: alcanceCompleto,
    arquitectura: 'Lira Arquitectos',
    ano: '2026',
    fotos: fotosDe('howden'),
  },
  {
    nombre: 'Deportes Sparta',
    slug: 'sparta',
    ubicacion: 'Avenida Presidente Kennedy 5682, Oficina 1103',
    superficie: '1.100 m²',
    puestos: '130',
    alcance: alcanceCompleto,
    arquitectura: 'Equipo Deportes Sparta',
    ano: '2026',
    fotos: fotosDe('sparta'),
  },
  {
    nombre: 'Siemens Energy',
    slug: 'siemens',
    ubicacion: 'Avenida Presidente Riesco 5335, Piso 18',
    superficie: '1.000 m²',
    puestos: '65',
    alcance: alcanceBenchRegulable,
    arquitectura: 'Equipo Colliers',
    ano: '2026',
    fotos: fotosDe('siemens'),
  },
  {
    nombre: 'Colliers',
    slug: 'colliers',
    ubicacion: 'El Regidor 66, Oficinas 601, 701 y 801',
    superficie: '2.250 m²',
    puestos: '180',
    alcance: alcanceBenchReuniones,
    arquitectura: 'Equipo Colliers',
    ano: '2026',
    fotos: fotosDe('colliers'),
  },
  {
    nombre: 'The Andes Brand (Lippi)',
    slug: 'lippi',
    ubicacion: 'Avenida Vitacura 2939, Pisos 5 y 7',
    superficie: '2.100 m²',
    puestos: '200',
    alcance: alcanceSinSilleria,
    arquitectura: 'Virtual Studio',
    ano: '2026',
    fotos: fotosDe('lippi'),
  },
  {
    nombre: 'Empresas Torre',
    slug: 'torre',
    ubicacion: 'Parque Logístico, Avenida Eduardo Frei Montalva 8600',
    superficie: '1.100 m²',
    puestos: '70',
    alcance: alcanceCompleto,
    arquitectura: 'Equipo Empresas Torre',
    ano: '2026',
    fotos: fotosDe('torre'),
  },
  {
    nombre: 'MetLife',
    slug: 'metlife',
    ubicacion: 'Almirante Pastene 194, Piso 6',
    superficie: '1.300 m²',
    puestos: '120',
    alcance: alcanceCompleto,
    arquitectura: 'Equipo CentralCorp',
    ano: '2026',
    fotos: fotosDe('metlife'),
  },
  {
    nombre: 'CCU',
    slug: 'ccu',
    ubicacion: 'Vitacura 2670, Pisos 5, 6, 7, 8 y 19',
    superficie: '4.500 m²',
    puestos: '400',
    alcance: alcanceCompleto,
    arquitectura: 'Claro Arquitectos',
    ano: '2025',
    fotos: fotosDe('ccu'),
  },
  {
    nombre: 'Transbank',
    slug: 'transbank',
    ubicacion: 'Cerro El Plomo 5260, Torre A, Piso 16',
    superficie: '2.500 m²',
    puestos: '230',
    alcance: alcanceReuniones,
    arquitectura: 'Equipo Colliers',
    ano: '2025',
    fotos: fotosDe('transbank'),
  },
  {
    nombre: 'Servicio de Evaluación Ambiental (SEA)',
    slug: 'sea',
    ubicacion: 'Huérfanos 670, Pisos 13, 14, 15 y 16',
    superficie: '3.500 m²',
    puestos: '230',
    alcance: alcanceReuniones,
    arquitectura: 'Aforo',
    ano: '2025',
    fotos: fotosDe('sea'),
  },
  {
    nombre: 'OCA Global',
    slug: 'oca',
    ubicacion: 'El Gobernador 020',
    superficie: '1.900 m²',
    puestos: '240',
    alcance: alcanceCompleto,
    arquitectura: 'Arquitectura y Construcciones Buildpro',
    ano: '2025',
    fotos: fotosDe('oca'),
  },
  {
    nombre: 'BNP Paribas',
    slug: 'bnp',
    ubicacion: 'Avenida Vitacura 2670, Piso 9',
    superficie: '2.500 m²',
    puestos: '200',
    alcance: alcanceReuniones,
    arquitectura: 'Equipo CASBRO',
    ano: '2025',
    fotos: fotosDe('bnp'),
  },
  {
    nombre: 'ENEL',
    slug: 'enel',
    ubicacion: 'Roger de Flor 2725, Torre 2, MUT',
    superficie: '15.000 m²',
    puestos: '800',
    alcance: alcanceReuniones,
    arquitectura: 'CQ Arquitectos',
    ano: '2024',
    fotos: fotosDe('enel'),
  },
  {
    nombre: 'OnNet',
    slug: 'onnet',
    ubicacion: 'Alonso de Córdova 5870, Piso 4',
    superficie: '1.500 m²',
    puestos: '185',
    alcance: alcanceReuniones,
    arquitectura: 'Equipo Casbro',
    ano: '2024',
    fotos: fotosDe('onnet'),
  },
  {
    nombre: 'Mathiesen',
    slug: 'mathiesen',
    ubicacion: 'Avenida del Parque 4265, Piso 3',
    superficie: '1.500 m²',
    puestos: '100',
    alcance: alcanceReuniones,
    arquitectura: 'Equipo Casbro',
    ano: '2024',
    fotos: fotosDe('mathiesen'),
  },
  {
    nombre: 'Everest Chile',
    slug: 'everest',
    ubicacion: 'Isidora Goyenechea 2800, Piso 31',
    superficie: '800 m²',
    puestos: '60',
    alcance: alcanceReuniones,
    arquitectura: 'Equipo Contract',
    ano: '2024',
    fotos: fotosDe('everest'),
  },
  {
    nombre: 'ABB Chile',
    slug: 'abb',
    ubicacion: 'Avenida Andrés Bello 2447, Piso 11',
    superficie: '2.000 m²',
    puestos: '120',
    alcance: alcanceReuniones,
    arquitectura: 'Equipo Contract',
    ano: '2023',
    fotos: fotosDe('abb'),
  },
  {
    nombre: 'BUK',
    slug: 'buk',
    ubicacion: 'Roger de Flor 2775, Torre 3, Piso 16',
    superficie: '1.500 m²',
    puestos: '160',
    alcance: alcanceReuniones,
    arquitectura: 'Lira Arquitectos',
    ano: '2023',
    fotos: fotosDe('buk'),
  },
  {
    nombre: 'EMIN',
    slug: 'emin',
    ubicacion: 'Asturias 350, Piso 8',
    superficie: '1.000 m²',
    puestos: '80',
    alcance: alcanceReuniones,
    arquitectura: 'Equipo Contract',
    ano: '2023',
    fotos: fotosDe('emin'),
  },
  {
    nombre: 'Subsecretaría de la Niñez y la Adolescencia',
    slug: 'ninez',
    // TODO: el cliente mandó «Dirección» como marcador; falta la real.
    ubicacion: '',
    superficie: '5.000 m²',
    puestos: '450',
    alcance: alcanceReuniones,
    arquitectura: 'BV Arquitectos',
    ano: '2023',
    fotos: fotosDe('ninez'),
  },
  // Estos dos llegaron aparte, con la tanda de «proyectos destacados»: de ahí
  // salen su nombre completo y su ficha. Todavía sin año ni arquitectura.
  {
    nombre: 'Lockton Chile Corredores de Seguro',
    slug: 'lockton',
    ubicacion: '',
    superficie: '850 m²',
    puestos: '83',
    alcance: alcanceSinSilleria,
    arquitectura: '',
    ano: '',
    fotos: fotosDe('lockton'),
  },
  {
    nombre: 'BTG Pactual Casino',
    slug: 'btg',
    ubicacion: '',
    superficie: '220 m²',
    puestos: '35',
    alcance: alcanceCasino,
    arquitectura: '',
    ano: '',
    fotos: fotosDe('btg'),
  },
] as const;

// Los que se muestran: sólo los que tienen sus tres láminas.
export const proyectos = fichas.filter((ficha) => ficha.fotos.length > 0);

// Los que esperan fotos, a la vista mientras llegan.
export const proyectosSinFotos = fichas.filter((ficha) => ficha.fotos.length === 0);

// Logos de clientes, debajo de proyectos. Todos vienen en un lienzo de 300×200
// con fondo transparente, así que comparten caja y no necesitan escala propia.
// Se reparten en dos corridas de diez.
export const clientes = [
  { nombre: 'Howden', archivo: 'howden.webp' },
  { nombre: 'Deportes Sparta', archivo: 'sparta.webp' },
  { nombre: 'OCA Global', archivo: 'oca.webp' },
  { nombre: 'MetLife', archivo: 'metlife.webp' },
  { nombre: 'CCU', archivo: 'ccu.webp' },
  { nombre: 'Transbank', archivo: 'transbank.webp' },
  { nombre: 'BNP Paribas', archivo: 'bnp.webp' },
  { nombre: 'ENEL', archivo: 'enel.webp' },
  { nombre: 'OnNet', archivo: 'onnet.webp' },
  { nombre: 'Mathiesen', archivo: 'mathiesen.webp' },
  { nombre: 'ABB', archivo: 'abb.webp' },
  { nombre: 'BUK', archivo: 'buk.webp' },
  { nombre: 'EMIN', archivo: 'emin.webp' },
  { nombre: 'Lockton', archivo: 'lockton.webp' },
  { nombre: 'Empresas Torre', archivo: 'torre.webp' },
  { nombre: 'Ticketmaster', archivo: 'ticketmaster.webp' },
  { nombre: 'BTG', archivo: 'btg.webp' },
  { nombre: 'Capital', archivo: 'capital.webp' },
  { nombre: 'Linkes', archivo: 'linkes.webp' },
  { nombre: 'TAB', archivo: 'tab.webp' },
] as const;

// Cifras de la página "we are".
export const cifras = [
  '+6 años',
  '+18 proyectos',
  '+12 marcas',
  '+6.500 m² equipados',
  '+480 puestos de trabajo',
] as const;

// Acordeón de atributos. Copy definitivo.
export const atributos = [
  {
    titulo: 'Atención directa',
    texto:
      'Cada proyecto cuenta con la participación activa de los socios de WEBE. Esto permite tomar decisiones con mayor criterio, mantener una comunicación directa y asegurar un acompañamiento cercano desde la propuesta inicial hasta la postventa.',
  },
  {
    titulo: 'Experiencia',
    texto:
      'Años de experiencia en el equipamiento de oficinas permiten comprender las necesidades de arquitectos, empresas y equipos de proyecto. Esa experiencia se traduce en recomendaciones más acertadas, procesos más eficientes y soluciones mejor adaptadas a cada contexto.',
  },
  {
    titulo: 'Versatilidad',
    texto:
      'Contamos con una amplia variedad de marcas, líneas y soluciones que nos permiten responder a distintos requerimientos, escalas y presupuestos. Esta diversidad nos ayuda a construir propuestas equilibradas entre diseño, funcionalidad, plazo y costo según las necesidades de cada proyecto.',
  },
  {
    titulo: 'Showroom',
    texto:
      'Más que una exhibición de productos, el showroom es un espacio para conocer materiales, probar soluciones y visualizar distintas alternativas de equipamiento. Una instancia que facilita la toma de decisiones y aporta mayor seguridad durante el proceso.',
  },
  {
    titulo: 'Acompañamiento',
    texto:
      'webe participa en todo el proceso: selección de productos, desarrollo de propuestas, importación, logística, instalación y postventa. Un acompañamiento continuo que permite coordinar cada etapa bajo un mismo criterio y un único punto de contacto.',
  },
  {
    titulo: 'Continuidad',
    texto:
      'Nuestro compromiso no termina con la instalación. Acompañamos cada proyecto con respaldo postventa y trabajamos con marcas que nos permiten asegurar continuidad, reposición y garantía a lo largo del tiempo.',
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
// Cada carpeta trae dos formatos distintos y hay que respetarlos: una portada
// apaisada de 1920×650 para el hero de la ficha, y cinco fotos de 1200×960 para
// la galería. Convertirlas todas al formato de portada dejaba las de galería
// recortadas a una franja.
const fotosMarca = (slug: string) =>
  [1, 2, 3, 4, 5].map((n) => `/marcas/fotos/${slug}-${n}.webp`);

// La portada de cada ficha es su imagen 1, no la apaisada de la carpeta: es la
// que muestra el espacio completo y la que pide el diseño.
const portadaMarca = (slug: string) => `/marcas/fotos/${slug}-1.webp`;

export const marcas = [
  {
    nombre: 'Novara',
    slug: 'novara',
    // TODO: PDF del catálogo. Sin archivo el botón se dibuja inactivo.
    catalogo: { etiqueta: 'Catálogo Novara 2025-26', archivo: '' },
    fotos: fotosMarca('novara'),
    archivo: 'novara.svg',
    blanco: 'novara-blanco.svg',
    ancho: 222.48,
    alto: 47.66,
    escala: 5.9,
    foto: portadaMarca('novara'),
    descripcion:
      'Novara desarrolla soluciones de mobiliario corporativo que combinan funcionalidad, diseño y bienestar para crear ambientes de trabajo más humanos y productivos. Su portafolio contempla sistemas de trabajo, mesas, almacenamiento y soluciones colaborativas, con propuestas versátiles y personalizables que se adaptan a distintas configuraciones y necesidades. La marca integra además diseño y sostenibilidad como parte de una propuesta orientada a la calidad y durabilidad.',
    rotuloCategorias: 'Mobiliario',
    categorias: [
      'Escritorios',
      'Mesas de reunión',
      'Sistemas de trabajo',
      'Mobiliario colaborativo',
      'Almacenamiento',
      'Cabinas acústicas',
    ],
  },
  {
    nombre: 'Novus',
    slug: 'novus',
    catalogo: { etiqueta: 'Catálogo Novus 2025-26', archivo: '' },
    fotos: fotosMarca('novus'),
    archivo: 'novus.svg',
    blanco: 'novus-blanco.svg',
    ancho: 168.38,
    alto: 46.34,
    escala: 4.35,
    foto: portadaMarca('novus'),
    descripcion:
      'NOVUS desarrolla soluciones técnicas para optimizar y organizar los espacios de trabajo, combinando ingeniería alemana, funcionalidad y ergonomía. Su propuesta incluye sistemas de soporte para monitores, organización del puesto de trabajo y soluciones modulares que permiten liberar espacio, mejorar la flexibilidad y adaptar cada estación a sus necesidades. Productos de alta calidad y larga duración, pensados para integrar tecnología y equipamiento de manera ordenada y eficiente.',
    rotuloCategorias: 'Equipamiento',
    categorias: [
      'Brazos para monitor',
      'Soportes para notebook',
      'Organización de escritorio',
      'Paneles organizadores',
      'Iluminación',
      'Soportes técnicos',
    ],
  },
  {
    nombre: 'Trisoft',
    slug: 'trisoft',
    catalogo: { etiqueta: 'Catálogo Trisoft 2025-26', archivo: '' },
    fotos: fotosMarca('trisoft'),
    archivo: 'trisoft.svg',
    blanco: 'trisoft-blanco.svg',
    ancho: 184.52,
    alto: 58.5,
    escala: 3.95,
    foto: portadaMarca('trisoft'),
    descripcion:
      'Trisoft desarrolla soluciones acústicas y arquitectónicas que combinan diseño, confort y sostenibilidad para mejorar la experiencia de los espacios. Sus productos, fabricados a partir de PET reciclado, permiten controlar la reverberación y mejorar el confort sonoro mediante paneles, revestimientos, baffles, nubes y divisorias. Una propuesta versátil y personalizable, especialmente adecuada para oficinas y espacios corporativos donde la acústica forma parte integral del diseño.',
    rotuloCategorias: 'Equipamiento',
    categorias: [
      'Paneles acústicos',
      'Baffles',
      'Nubes acústicas',
      'Divisorias acústicas',
      'Biombos',
      'Cabinas acústicas',
    ],
  },
  {
    nombre: 'BK Contract',
    slug: 'bkcontract',
    catalogo: { etiqueta: 'Catálogo BK Contract 2025-26', archivo: '' },
    fotos: fotosMarca('bkcontract'),
    archivo: 'bkcontract.svg',
    blanco: 'bkcontract-blanco.svg',
    ancho: 223.09,
    alto: 52.34,
    escala: 5.2,
    foto: portadaMarca('bkcontract'),
    descripcion:
      'BK Contract desarrolla mobiliario contemporáneo para espacios profesionales, corporativos y de uso colectivo, combinando diseño, funcionalidad y personalización. Su propuesta se caracteriza por líneas puras y atemporales, calidad en materiales y acabados, y una alta capacidad de adaptación a las necesidades de cada proyecto. Con fabricación europea y una filosofía centrada en la simplicidad y la innovación, crea soluciones que integran diseño y funcionalidad con una mirada sofisticada y duradera.',
    rotuloCategorias: 'Mobiliario',
    categorias: [
      'Mesas',
      'Mesas de reunión',
      'Almacenamiento',
      'Recepciones',
      'Librerías',
      'Soft Meeting',
    ],
  },
  {
    nombre: 'Rossi',
    slug: 'rossi',
    catalogo: { etiqueta: 'Catálogo Rossi 2025-26', archivo: '' },
    fotos: fotosMarca('rossi'),
    archivo: 'rossi.svg',
    blanco: 'rossi-blanco.svg',
    ancho: 230.28,
    alto: 33.06,
    escala: 5.75,
    foto: portadaMarca('rossi'),
    descripcion:
      'Rossi es una marca argentina especializada en el diseño y fabricación de mobiliario para espacios de trabajo, con una trayectoria que se remonta a 1962. Su propuesta combina diseño, confort y ergonomía, desarrollando productos pensados para responder a distintas formas de trabajar y habitar la oficina. Su experiencia industrial, capacidad de desarrollo y variedad de configuraciones permiten ofrecer soluciones funcionales y versátiles para proyectos corporativos.',
    rotuloCategorias: 'Mobiliario',
    categorias: [
      'Sillas operativas',
      'Sillas ejecutivas',
      'Sillas gerenciales',
      'Sillas de reunión',
      'Escritorios',
      'Mesas',
    ],
  },
  {
    nombre: 'Belgotex',
    slug: 'belgotex',
    catalogo: { etiqueta: 'Catálogo Belgotex 2025-26', archivo: '' },
    fotos: fotosMarca('belgotex'),
    archivo: 'belgotex.svg',
    blanco: 'belgotex-blanco.svg',
    ancho: 223.79,
    alto: 54.32,
    escala: 5.1,
    foto: portadaMarca('belgotex'),
    descripcion:
      'Belgotex desarrolla soluciones de revestimiento que combinan diseño, confort y alto desempeño. Su amplio portafolio de alfombras y pisos permite resolver distintos espacios y necesidades, integrando variedad estética, resistencia y soluciones técnicas para proyectos comerciales y corporativos. Una propuesta pensada para crear superficies que no solo acompañan el diseño, sino que también responden al uso cotidiano de cada espacio.',
    rotuloCategorias: 'Equipamiento',
    categorias: [
      'Alfombras',
      'Alfombras modulares',
      'Alfombras muro a muro',
      'Pisos vinílicos',
      'Pisos vinílicos en rollo',
      'Pasto sintético',
    ],
  },
  {
    nombre: 'Frisokar',
    slug: 'frisokar',
    catalogo: { etiqueta: 'Catálogo Frisokar 2025-26', archivo: '' },
    fotos: fotosMarca('frisokar'),
    archivo: 'frisokar.svg',
    blanco: 'frisokar-blanco.svg',
    ancho: 209.59,
    alto: 45.61,
    escala: 5.4,
    foto: portadaMarca('frisokar'),
    descripcion:
      'Frisokar desarrolla sillas para espacios de trabajo que combinan ergonomía, confort y funcionalidad. Su propuesta contempla distintas soluciones para ambientes operativos, ejecutivos y corporativos, incorporando sistemas de ajuste y configuraciones pensadas para acompañar diferentes formas de trabajar. Una amplia variedad de modelos permite responder a distintos niveles de uso y necesidades, con una propuesta orientada al bienestar y al desempeño cotidiano.',
    rotuloCategorias: 'Mobiliario',
    categorias: [
      'Sillas operativas',
      'Sillas ejecutivas',
      'Sillas gerenciales',
      'Sillas para reunión',
      'Sillas multifuncionales',
      'Longarinas',
    ],
  },
] as const;
