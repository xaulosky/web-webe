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
  direccion: ['Avenida Vitacura 3439, Oficina 203', 'Vitacura', 'Santiago, Chile'],
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
// (Colliers, pendiente de fotos, usaba «…para Bench y Salas de Reunión.»)
const alcanceBenchRegulable =
  'Equipamiento de Mobiliario para Bench (Estaciones de trabajo con regulación altura).';

// Proyectos destacados: los que tienen carpeta de fotos. Cada uno trae sus
// tres láminas de 1920×900 para el fondo de la sección. `ano` alimenta el
// superíndice de la nube (sus dos últimos dígitos).
// TODO: Colliers queda fuera hasta que lleguen sus fotos. BTG Pactual y
// Lockton no traen ficha (superficie/puestos/alcance) ni año todavía.
const fotosDe = (slug: string) =>
  [1, 2, 3].map((n) => `/proyectos/fotos/${slug}-${n}.webp`);

export const proyectos = [
  {
    nombre: 'Siemens Energy',
    slug: 'siemens',
    superficie: '1.000 m²',
    puestos: '65',
    alcance: alcanceBenchRegulable,
    ano: '2026',
    fotos: fotosDe('siemens'),
  },
  {
    nombre: 'The Andes Brand (Lippi)',
    slug: 'lippi',
    superficie: '2.100 m²',
    puestos: '200',
    alcance: alcanceSinSilleria,
    ano: '2026',
    fotos: fotosDe('lippi'),
  },
  {
    nombre: 'MetLife',
    slug: 'metlife',
    superficie: '1.300 m²',
    puestos: '120',
    alcance: alcanceCompleto,
    ano: '2026',
    fotos: fotosDe('metlife'),
  },
  {
    nombre: 'CCU',
    slug: 'ccu',
    superficie: '4.500 m²',
    puestos: '400',
    alcance: alcanceCompleto,
    ano: '2025',
    fotos: fotosDe('ccu'),
  },
  {
    nombre: 'Transbank',
    slug: 'transbank',
    superficie: '2.500 m²',
    puestos: '230',
    alcance: alcanceReuniones,
    ano: '2025',
    fotos: fotosDe('transbank'),
  },
  {
    nombre: 'BNP Paribas',
    slug: 'bnp',
    superficie: '2.500 m²',
    puestos: '200',
    alcance: alcanceReuniones,
    ano: '2025',
    fotos: fotosDe('bnp'),
  },
  {
    nombre: 'ENEL',
    slug: 'enel',
    superficie: '15.000 m²',
    puestos: '800',
    alcance: alcanceReuniones,
    ano: '2024',
    fotos: fotosDe('enel'),
  },
  {
    nombre: 'OnNet',
    slug: 'onnet',
    superficie: '1.500 m²',
    puestos: '185',
    alcance: alcanceReuniones,
    ano: '2024',
    fotos: fotosDe('onnet'),
  },
  {
    nombre: 'Subsecretaría de la Niñez y la Adolescencia',
    slug: 'ninez',
    superficie: '5.000 m²',
    puestos: '450',
    alcance: alcanceReuniones,
    ano: '2023',
    fotos: fotosDe('ninez'),
  },
  {
    nombre: 'BTG Pactual',
    slug: 'btg',
    superficie: '',
    puestos: '',
    alcance: '',
    ano: '',
    fotos: fotosDe('btg'),
  },
  {
    nombre: 'Lockton',
    slug: 'lockton',
    superficie: '',
    puestos: '',
    alcance: '',
    ano: '',
    fotos: fotosDe('lockton'),
  },
] as const;

// Logos de clientes, debajo de proyectos. Todos vienen en un lienzo de 300×200
// con fondo transparente, así que comparten caja y no necesitan escala propia.
// Se reparten en dos corridas de diez.
export const clientes = [
  { nombre: 'Howden', archivo: 'howden.webp' },
  { nombre: 'Deportes Sparta', archivo: 'sparta.webp' },
  { nombre: 'Colliers', archivo: 'oca.webp' },
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
// Seis fotos de 1920×650 por marca (Rossi pendiente).
const fotosMarca = (slug: string) =>
  [1, 2, 3, 4, 5, 6].map((n) => `/marcas/fotos/${slug}-${n}.webp`);

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
    foto: '/marcas/fotos/novara-1.webp',
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
    foto: '/marcas/fotos/novus-1.webp',
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
    foto: '/marcas/fotos/trisoft-1.webp',
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
    foto: '/marcas/fotos/bkcontract-1.webp',
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
    fotos: [],
    archivo: 'rossi.svg',
    blanco: 'rossi-blanco.svg',
    ancho: 230.28,
    alto: 33.06,
    escala: 5.75,
    foto: '',
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
    foto: '/marcas/fotos/belgotex-1.webp',
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
    foto: '/marcas/fotos/frisokar-1.webp',
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
