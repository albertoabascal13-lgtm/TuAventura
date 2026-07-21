/* ══════════════════════════════════════
   COMARCA DATA
══════════════════════════════════════ */
const COMARCAS = {
  /* ── NORTE ── */
  'sanabria': {
    num: '01', name: 'Sanabria', capital: 'Puebla de Sanabria',
    leyendas: [
      { titulo: 'Un Asesinato, Un Santo, Un Licántropo', url: 'https://www.instagram.com/alberto_hdez13/reel/DUtJT12iIbd/' },
      { titulo: 'El Lobishome',                          url: 'https://www.instagram.com/alberto_hdez13/reel/DVJ3ldIiCBf/' }
    ]
  },
  'carballeda': {
    num: '02', name: 'La Carballeda', capital: 'Hermisende',
    leyendas: []
  },
  'benavente': {
    num: '03', name: 'Benavente y Los Valles', capital: 'Benavente',
    leyendas: [
      { titulo: 'La Cueva de los Moros',   url: 'https://www.instagram.com/alberto_hdez13/reel/DWjwkZ6CHXa/' },
      { titulo: 'El Cambio de Malgrad',    url: 'https://www.instagram.com/alberto_hdez13/reel/DW11c8diLGb/' },
      { titulo: 'El Toro Enmaromado',      url: 'https://www.instagram.com/alberto_hdez13/reel/DZNxXQ_IZMy/' }
    ]
  },
  'tierra-campos': {
    num: '04', name: 'Tierra de Campos', capital: 'Villalpando',
    leyendas: [
      { titulo: 'Los 14 de San Martín', url: 'https://www.instagram.com/alberto_hdez13/reel/DZDdBLyRCwi/' }
    ]
  },
  /* ── CENTRO ── */
  'aliste': {
    num: '05', name: 'Aliste', capital: 'Alcañices',
    leyendas: [
      { titulo: 'La Noche de Ánimas', url: 'https://www.instagram.com/alberto_hdez13/reel/DaTYxWnxoYk/' }
    ]
  },
  'tabara': {
    num: '06', name: 'Tierra de Tábara', capital: 'Tábara',
    leyendas: [
      { titulo: 'La Cabeza Parlante', url: 'https://www.instagram.com/alberto_hdez13/reel/DYAdFRIIPB5/' }
    ]
  },
  'alba': {
    num: '07', name: 'Tierra de Alba', capital: 'Alba de Aliste',
    leyendas: [
      { titulo: 'La Virgen que sobrevivió al Fuego', url: 'https://www.instagram.com/alberto_hdez13/reel/DaBLFr7oFbl/' }
    ]
  },
  'tierra-pan': {
    num: '08', name: 'Tierra del Pan', capital: 'Zamora',
    leyendas: [
      { titulo: 'Vampiros en Zamora',             url: 'https://www.instagram.com/alberto_hdez13/reel/DUYXaOaiHMQ/' },
      { titulo: 'La Mujer que murió dos veces',   url: 'https://www.instagram.com/alberto_hdez13/reel/DUixbnviLsc/' },
      { titulo: 'El Misterio de la Calle Balborraz', url: 'https://www.instagram.com/alberto_hdez13/reel/DUoD0HIiMXl/' },
      { titulo: 'El Portillo de la Traición',     url: 'https://www.instagram.com/alberto_hdez13/reel/DU3mHYMCC_A/' },
      { titulo: 'Palacio de los Momos',           url: 'https://www.instagram.com/alberto_hdez13/reel/DVEpAXxCOj7/' },
      { titulo: 'La Virgen de la Concha',         url: 'https://www.instagram.com/alberto_hdez13/reel/DVRfIclCO_M/' },
      { titulo: 'La Virgen de la Hiniesta',       url: 'https://www.instagram.com/alberto_hdez13/reel/DVZLeGiiDtO/' },
      { titulo: 'El Anillo de San Atilano',       url: 'https://www.instagram.com/alberto_hdez13/reel/DVmGdQWiAVY/' },
      { titulo: 'La Campana de la Muerte',        url: 'https://www.instagram.com/alberto_hdez13/reel/DVy91dPiFXn/' },
      { titulo: 'Los Santos Barqueros',           url: 'https://www.instagram.com/alberto_hdez13/reel/DV6zNP0CDws/' },
      { titulo: 'La Cruz de Carne',               url: 'https://www.instagram.com/alberto_hdez13/reel/DWMrzHUiItw/' },
      { titulo: 'El Cristo de las Injurias',      url: 'https://www.instagram.com/alberto_hdez13/reel/DWrfEyECDOw/' },
      { titulo: 'El Cristo de la Colada',         url: 'https://www.instagram.com/alberto_hdez13/reel/DXCt2X-CGog/' },
      { titulo: 'El Obispo Tumbado',              url: 'https://www.instagram.com/alberto_hdez13/reel/DXr28d1CBgk/' },
      { titulo: 'La Virgen de la Guía',           url: 'https://www.instagram.com/alberto_hdez13/reel/DX5GaKco118/' },
      { titulo: 'Un Camino Mágico',              url: 'https://www.instagram.com/alberto_hdez13/reel/DYz57NxICIx/' }
    ]
  },
  'toro': {
    num: '09', name: 'Alfoz de Toro', capital: 'Toro',
    leyendas: [
      { titulo: 'El Guerrero sin Brazos', url: 'https://www.instagram.com/alberto_hdez13/reel/DU81qkTCNRU/' },
      { titulo: 'La Reja Dorada',         url: 'https://www.instagram.com/alberto_hdez13/reel/DVtwt5_CGK0/' },
      { titulo: 'La Virgen de la Cuesta', url: 'https://www.instagram.com/alberto_hdez13/reel/DWemq-gCM8o/' },
      { titulo: 'El Cagalentejas',        url: 'https://www.instagram.com/alberto_hdez13/reel/DWwmfspiC06/' },
      { titulo: 'La Empajada',            url: 'https://www.instagram.com/alberto_hdez13/reel/DW69TPIiBPk/' },
      { titulo: 'El Baile del Niño',      url: 'https://www.instagram.com/alberto_hdez13/reel/DXch6EvCA9P/' },
      { titulo: 'Un Castillo de Hollywood', url: 'https://www.instagram.com/alberto_hdez13/reel/DYSj11jI3_H/' },
      { titulo: '3 Templos, 1 Pueblo',      url: 'https://www.instagram.com/alberto_hdez13/reel/DYiB9VgoXVs/' },
      { titulo: 'Pintura y Tradición',                          url: 'https://www.instagram.com/alberto_hdez13/reel/DZdPdLlxarW/' },
      { titulo: 'El Castillo Derrotado pero Jamás Vencido',   url: 'https://www.instagram.com/alberto_hdez13/reel/DZ5cvyyokNV/' }
    ]
  },
  /* ── SUR ── */
  'sayago': {
    num: '10', name: 'Sayago', capital: 'Bermillo de Sayago',
    leyendas: [
      { titulo: 'La Serpiente Mamadora', url: 'https://www.instagram.com/alberto_hdez13/reel/DWCjHr0iARl/' },
      { titulo: 'El Cristo del Pino',    url: 'https://www.instagram.com/alberto_hdez13/reel/DWUdTKEiPrk/' }
    ]
  },
  'tierra-vino': {
    num: '11', name: 'Tierra del Vino', capital: 'Corrales del Vino',
    leyendas: [
      { titulo: 'La Virgen del Viso',      url: 'https://www.instagram.com/alberto_hdez13/reel/DVeWknOiNQg/' },
      { titulo: 'El Enigma de Entrala',    url: 'https://www.instagram.com/alberto_hdez13/reel/DXKcYgziBEk/' },
      { titulo: 'El Cristo de Morales',    url: 'https://www.instagram.com/alberto_hdez13/reel/DXSVDquCAy-/' },
      { titulo: 'Peleas de Arriba llama', url: 'https://www.instagram.com/alberto_hdez13/reel/DavhSzJo4Hw/' }
    ]
  },
  'guarena': {
    num: '12', name: 'La Guareña', capital: 'Fuentesaúco',
    leyendas: [
      { titulo: 'La Reina Cautiva',   url: 'https://www.instagram.com/alberto_hdez13/reel/DYbmA5tIfhw/' },
      { titulo: '8 Días de Infierno', url: 'https://www.instagram.com/alberto_hdez13/reel/DZvQ8mBo7u5/' },
      { titulo: 'La Pega',            url: 'https://www.instagram.com/alberto_hdez13/reel/DagKk8-IKE7/' }
    ]
  }
};

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */

/* Banco completo — se eligen 5 al azar en cada partida */
const QUIZ_POOL = [
  {
    q: '¿De qué se dice que está hecha la argamasa del Arco del Reloj de Toro según la leyenda?',
    opts: ['Agua del Río Duero', 'Vino de las Bodegas de Toro', 'Ceniza Volcánica', 'Leche de Cabra'],
    ans: 1
  },
  {
    q: '¿De dónde procede el nombre de la calle Balborraz de Zamora?',
    opts: ['De un antiguo barrio judío llamado "Bar Borrás"', 'Del árabe "bab al ras", que significa "puerta de la cabeza"', 'De una leyenda sobre un barbero llamado Borraz', 'De un topónimo celta que significa "colina roja"'],
    ans: 1
  },
  {
    q: '¿A quién espantaba la cabeza parlante según la leyenda de Tábara?',
    opts: ['A los caballeros cristianos', 'A los judíos que entraban en la villa', 'A los pastores que se acercaban de noche', 'A los soldados moros'],
    ans: 1
  },
  {
    q: '¿Qué película se rodó en el castillo de Villalonso y protagonizaron Sean Connery y Audrey Hepburn?',
    opts: ['El Cid', 'Robin y Marian', 'Los Tres Mosqueteros', 'El nombre de la rosa'],
    ans: 1
  },
  {
    q: '¿Qué le ocurre según la leyenda a quien visita Zamora y no ve al Obispo Tumbado de Santa María Magdalena?',
    opts: ['Sufrirá una desgracia en el camino de vuelta', 'Perderá la memoria de su visita', 'Tendrá siete años de mala suerte', 'No se casará'],
    ans: 3
  },
  {
    q: '¿Qué es lo más característico del Baile del Niño de Venialbo?',
    opts: ['Se baila solo por hombres vestidos de monjes', 'Los danzantes avanzan siempre de espaldas para no dar la espalda al Niño', 'Se celebra solo en la noche de San Juan', 'Se realiza en el monte'],
    ans: 1
  },
  {
    q: '¿Qué representa la figura del Cagalentejas de Toro en la Semana Santa?',
    opts: ['Un mozo de viñas que celebra el vino con bailes por las calles', 'Un cofrade que hace voto de silencio y pide limosna para la cofradía', 'Un soldado que conmemora la Reconquista de la ciudad', 'Un músico que acompaña las procesiones con tambores'],
    ans: 1
  },
  {
    q: '¿Por qué se dice que sonaba la campana de San Vicente Ferrer?',
    opts: ['Para celebrar las fiestas patronales', 'Para llamar a los toreros cuando empezaba la lidia', 'Para avisar que alguien en el convento moriría', 'Para anunciar la llegada de peregrinos del Camino de Santiago'],
    ans: 2
  }
];

/* Selección aleatoria de 5 preguntas para cada partida */
let QUIZ = [];

/* Fuente: https://ociozamora.com/romerias-zamora/ */
const ROMERIAS = [
  /* FEBRERO */
  { day:'4',  monthNum:2, month:'FEB', name:'Virgen de la Velilla',           lugar:'Villalobos',                    ermita:'Ermita de la Virgen de la Velilla' },
  /* MARZO */
  { day:'21', monthNum:3, month:'MAR', name:'Santo Cristo',                   lugar:'San Vitero',                    ermita:'Ermita del Cristo del Campo' },
  /* ABRIL */
  { day:'5',  monthNum:4, month:'ABR', name:'Santa Catalina',                 lugar:'Palazuelo de Sayago',           ermita:'Ermita de Santa Catalina' },
  { day:'5',  monthNum:4, month:'ABR', name:'Virgen de Gracia',               lugar:'Villamor de Cadozos',           ermita:'Ermita de Gracia' },
  { day:'6',  monthNum:4, month:'ABR', name:'Santa Bárbara',                  lugar:'Escuadro / Alfaraz / Viñuela',  ermita:'Ermita de Santa Bárbara' },
  { day:'6',  monthNum:4, month:'ABR', name:'Virgen de la Asunción',          lugar:'Muga de Sayago',                ermita:'Ermita de Fernandiel' },
  { day:'6',  monthNum:4, month:'ABR', name:'San Mamés y San Blas',           lugar:'Tábara',                        ermita:'Ermita de San Mamés' },
  { day:'6',  monthNum:4, month:'ABR', name:'Cristo de San Esteban',          lugar:'Muelas del Pan',                ermita:'Ermita de San Esteban' },
  { day:'7',  monthNum:4, month:'ABR', name:'San Albín',                      lugar:'Fermoselle',                    ermita:'Ermita de Nuestra Señora de la Merced' },
  { day:'11', monthNum:4, month:'ABR', name:'Virgen de Gracia',               lugar:'Pasariegos',                    ermita:'Ermita de la Virgen de Gracia' },
  { day:'12', monthNum:4, month:'ABR', name:'Cristo de Valderrey',            lugar:'Zamora',                        ermita:'Ermita de Valderrey' },
  { day:'13', monthNum:4, month:'ABR', name:'Lunes de Aguas',                 lugar:'Bóveda de Toro',                ermita:'Monte Contadero' },
  { day:'13', monthNum:4, month:'ABR', name:'Virgen de los Montes Negros',    lugar:'Bretó de la Ribeira',           ermita:'Ermita de la Pedrera' },
  { day:'19', monthNum:4, month:'ABR', name:'Virgen del Olmo',                lugar:'Villaescusa',                   ermita:'Ermita de la Virgen' },
  { day:'25', monthNum:4, month:'ABR', name:'San Marcos',                     lugar:'Granja de Moreruela',           ermita:'Ermita de la Pedrera' },
  { day:'25', monthNum:4, month:'ABR', name:'Virgen de Gracia',               lugar:'Almeida',                       ermita:'Ermita de Gracia' },
  { day:'25', monthNum:4, month:'ABR', name:'San Marcos',                     lugar:'Gamones',                       ermita:'Ermita de Santa Olalla' },
  { day:'26', monthNum:4, month:'ABR', name:'Bajada de la Virgen del Socastro', lugar:'Villamayor de Campos',        ermita:'Ermita del Teso de las Bodegas' },
  { day:'26', monthNum:4, month:'ABR', name:'Virgen de la Luz',               lugar:'Moveros de Aliste',             ermita:'Ermita de la Luz' },
  /* MAYO */
  { day:'1',  monthNum:5, month:'MAY', name:'La Rogativa',                    lugar:'Prado',                         ermita:'Quintanilla de Olmo' },
  { day:'1',  monthNum:5, month:'MAY', name:'La Rogativa',                    lugar:'Quintanilla de Olmo',           ermita:'Prado' },
  { day:'2',  monthNum:5, month:'MAY', name:'Virgen del Puerto',              lugar:'Losacio de Alba',               ermita:'Ermita de la Virgen del Puerto' },
  { day:'2',  monthNum:5, month:'MAY', name:'San Juan de los Huevos',         lugar:'Bermillo de Sayago',            ermita:'Ermita de Gracia' },
  { day:'2',  monthNum:5, month:'MAY', name:'San Esteban',                    lugar:'Brime de Urz',                  ermita:'Ermita de San Esteban' },
  { day:'2',  monthNum:5, month:'MAY', name:'Virgen del Templo',              lugar:'Villalba de la Lampreana',      ermita:'Ermita del Templo' },
  { day:'3',  monthNum:5, month:'MAY', name:'Cristo del Humilladero',         lugar:'Vadillo de la Guareña',         ermita:'Ermita del Humilladero' },
  { day:'3',  monthNum:5, month:'MAY', name:'Santa Cruz',                     lugar:'Argusino',                      ermita:'Ermita Nueva' },
  { day:'3',  monthNum:5, month:'MAY', name:'Virgen de la Soledad',           lugar:'Múltiples localidades',         ermita:'Ermita de la Virgen de la Soledad' },
  { day:'8',  monthNum:5, month:'MAY', name:'Virgen del Templo',              lugar:'Villarrín de Campos',           ermita:'Ermita del Templo' },
  { day:'9',  monthNum:5, month:'MAY', name:'San Gregorio Nacianceno',        lugar:'Peleagonzalo',                  ermita:'Pradera de la Fuente del Soto' },
  { day:'9',  monthNum:5, month:'MAY', name:'Cristo de Morales',              lugar:'Morales del Vino',              ermita:'Ermita del Cristo' },
  { day:'10', monthNum:5, month:'MAY', name:'Virgen del Valle',               lugar:'San Román del Valle',           ermita:'Convento' },
  { day:'10', monthNum:5, month:'MAY', name:'Virgen de Gracia',               lugar:'Villar del Buey',               ermita:'Ermita de Gracia' },
  { day:'10', monthNum:5, month:'MAY', name:'Virgen de Fátima',               lugar:'Fradellos',                     ermita:'Ermita de Fátima' },
  { day:'10', monthNum:5, month:'MAY', name:'Virgen de Fátima',               lugar:'Villarino de Manzanas',         ermita:'Altar junto al Río Manzanas' },
  { day:'15', monthNum:5, month:'MAY', name:'San Isidro',                     lugar:'Corrales',                      ermita:'Parque El Plantío' },
  { day:'16', monthNum:5, month:'MAY', name:'Virgen del Templo',              lugar:'Arquillinos',                   ermita:'Ermita del Templo' },
  { day:'23', monthNum:5, month:'MAY', name:'Romería de Junciel',             lugar:'Manganeses de la Lampreana',    ermita:'Paraje de Junciel' },
  { day:'24', monthNum:5, month:'MAY', name:'Virgen de Cantimbriana',         lugar:'Fuentes de Ropel',              ermita:'Praderas del río' },
  { day:'25', monthNum:5, month:'MAY', name:'Virgen de la Hiniesta',          lugar:'La Hiniesta · Zamora',          ermita:'La Hiniesta' },
  { day:'25', monthNum:5, month:'MAY', name:'Virgen del Viso',                lugar:'Múltiples localidades',         ermita:'Pradera del Viso' },
  { day:'25', monthNum:5, month:'MAY', name:'Cristo de las Batallas',         lugar:'Toro',                          ermita:'Ermita del Cristo de las Batallas' },
  { day:'25', monthNum:5, month:'MAY', name:'Virgen de Valdehunco',           lugar:'Villanueva del Campo',          ermita:'Ermita de la Virgen de Valdehunco' },
  { day:'25', monthNum:5, month:'MAY', name:'Santa Cruz',                     lugar:'Fermoselle',                    ermita:'Ermita del Cristo del Pino' },
  { day:'30', monthNum:5, month:'MAY', name:'Virgen de la Torre',             lugar:'San Miguel del Valle',          ermita:'Paraje El Plantío' },
  { day:'30', monthNum:5, month:'MAY', name:'Romería de San Fernando',        lugar:'Peleas de Arriba',              ermita:'Valparaíso' },
  { day:'31', monthNum:5, month:'MAY', name:'Virgen de la Trinidad',          lugar:'Camarzana de Tera',             ermita:'Ermita de la Trinidad' },
  { day:'31', monthNum:5, month:'MAY', name:'La Riberiña',                    lugar:'San Martín del Pedroso',        ermita:'Ermita de la Riberiña (Portugal)' },
  /* JUNIO */
  { day:'7',  monthNum:6, month:'JUN', name:'Virgen del Castillo',            lugar:'Múltiples localidades',         ermita:'Ermita del Castillo (Fariza)' },
  { day:'13', monthNum:6, month:'JUN', name:'San Antonio de Padua',           lugar:'Gamones',                       ermita:'Ermita de Santa Olaya' },
  { day:'14', monthNum:6, month:'JUN', name:'Subida de la Virgen del Socastro', lugar:'Villamayor de Campos',        ermita:'Ermita del Teso de las Bodegas' },
  { day:'27', monthNum:6, month:'JUN', name:'San Juan Bautista',              lugar:'Samir de los Caños',            ermita:'Paraje de La Era' },
  /* JULIO */
  { day:'2',  monthNum:7, month:'JUL', name:'Virgen de la Salud',             lugar:'Alcañices',                     ermita:'Iglesia del Antiguo Convento' },
  { day:'30', monthNum:7, month:'JUL', name:'Virgen del Templo',              lugar:'Manganeses de la Lampreana',    ermita:'Ermita del Templo' },
  /* AGOSTO */
  { day:'5',  monthNum:8, month:'AGO', name:'Virgen de las Nieves',           lugar:'San Pedro de Ceque',            ermita:'Ermita de la Virgen de las Nieves' },
  { day:'5',  monthNum:8, month:'AGO', name:'Virgen de la Tuiza',             lugar:'Múltiples localidades',         ermita:'Santuario de la Tuiza' },
  { day:'7',  monthNum:8, month:'AGO', name:'San Mamés',                      lugar:'Ayoó de Vidriales',             ermita:'Ermita de San Mamés' },
  { day:'16', monthNum:8, month:'AGO', name:'Virgen de la Ribera',            lugar:'Sejas de Sanabria',             ermita:'Ermita de la Ribera' },
  { day:'29', monthNum:8, month:'AGO', name:'Virgen del Campo',               lugar:'Rosinos de Vidriales',          ermita:'Santuario de la Virgen del Campo' },
  { day:'30', monthNum:8, month:'AGO', name:'Virgen de las Encinas',          lugar:'Abraveses de Tera',             ermita:'Ermita de las Encinas' },
  /* SEPTIEMBRE */
  { day:'6',  monthNum:9, month:'SEP', name:'Virgen de la Peregrina',         lugar:'Donado',                        ermita:'Santuario de la Peregrina' },
  { day:'7',  monthNum:9, month:'SEP', name:'Virgen de la Vega',              lugar:'Vecilla de Trasmonte',          ermita:'Ermita de la Vega' },
  { day:'8',  monthNum:9, month:'SEP', name:'Virgen de la Alcobilla',         lugar:'Múltiples localidades',         ermita:'Ermita de la Alcobilla' },
  { day:'8',  monthNum:9, month:'SEP', name:'Virgen de la Bandera',           lugar:'Fermoselle',                    ermita:'Iglesia del Convento' },
  { day:'8',  monthNum:9, month:'SEP', name:'Nuestra Señora de los Árboles',  lugar:'Carbajales de Alba',            ermita:'Iglesia parroquial' },
  { day:'9',  monthNum:9, month:'SEP', name:'Ofertorio a la Virgen de Gracia', lugar:'Múltiples localidades',        ermita:'Ermita de Gracia' },
  { day:'11', monthNum:9, month:'SEP', name:'Virgen de la Encarnación',       lugar:'Villalcampo',                   ermita:'Ermita de Valverde' },
  { day:'12', monthNum:9, month:'SEP', name:'Virgen del Tovar',               lugar:'Malva',                         ermita:'Ermita del Tovar' },
  { day:'12', monthNum:9, month:'SEP', name:'Virgen de Covadonga',            lugar:'Valdescorriel',                 ermita:'Monte Escorriel' },
  { day:'12', monthNum:9, month:'SEP', name:'Virgen del Agabanzal',           lugar:'Olleros de Tera',               ermita:'Ermita de Nuestra Señora de Agabanzal' },
  { day:'12', monthNum:9, month:'SEP', name:'Santo Cristo Juan',              lugar:'San Vitero',                    ermita:'Ermita del Cristo del Campo' },
  { day:'20', monthNum:9, month:'SEP', name:'Virgen de la Carballeda',        lugar:'Rionegro del Puente',           ermita:'Santuario de Nuestra Señora de la Carballeda' },
  { day:'20', monthNum:9, month:'SEP', name:'Virgen del Carmen',              lugar:'Navianos de Valverde',          ermita:'Ermita del Carmen' },
  { day:'27', monthNum:9, month:'SEP', name:'Virgen de la Tuiza',             lugar:'Lubián',                        ermita:'Santuario de la Tuiza' },
  /* OCTUBRE */
  { day:'4',  monthNum:10, month:'OCT', name:'Virgen de los Remedios',        lugar:'Otero de Sanabria',             ermita:'Santuario de los Remedios' },
];

/* ══════════════════════════════════════
   MASCARADAS
   Fuente: turismoenzamora.es / enfoquezamora.com
══════════════════════════════════════ */
const MASCARADAS = [
  /* ── DICIEMBRE ── */
  { day:'25', monthNum:12, month:'DIC', name:'Visparra · Talanqueira',               lugar:'San Martín de Castañeda', comarca:'Sanabria' },
  { day:'26', monthNum:12, month:'DIC', name:'El Zangarrón',                         lugar:'Sanzoles del Vino',       comarca:'Tierra del Vino' },
  { day:'26', monthNum:12, month:'DIC', name:'El Tafarrón · La Madama',              lugar:'Pozuelo de Tábara',       comarca:'Tierra de Tábara' },
  { day:'26', monthNum:12, month:'DIC', name:'La Filandorra · El Diablo · Los Guapos', lugar:'Ferreras de Arriba',   comarca:'Aliste' },
  { day:'26', monthNum:12, month:'DIC', name:'El Caballico · El Pajarico',           lugar:'Villarino tras la Sierra',comarca:'Aliste' },
  { day:'26', monthNum:12, month:'DIC', name:'La Visparra',                          lugar:'Vigo de Sanabria',        comarca:'Sanabria' },
  /* ── ENERO ── */
  { day:'1',  monthNum:1,  month:'ENE', name:'Los Carochos · La Madama · La Filandorra', lugar:'Riofrío de Aliste', comarca:'Aliste' },
  { day:'1',  monthNum:1,  month:'ENE', name:'Diablos · La Filandorra',              lugar:'Sarracín de Aliste',      comarca:'Aliste' },
  { day:'1',  monthNum:1,  month:'ENE', name:'El Cencerrón · La Filandorra',         lugar:'Abejera',                 comarca:'Aliste' },
  { day:'1',  monthNum:1,  month:'ENE', name:'Mascarada de Sesnández',               lugar:'Sesnández',               comarca:'Aliste' },
  { day:'1',  monthNum:1,  month:'ENE', name:'El Zangarrón',                         lugar:'Montamarta',              comarca:'Tierra del Pan' },
  { day:'1',  monthNum:1,  month:'ENE', name:'San Martín de Castañeda · Mascarada',  lugar:'San Martín de Castañeda', comarca:'Sanabria' },
  { day:'6',  monthNum:1,  month:'ENE', name:'El Zangarrón (Reyes)',                 lugar:'Montamarta',              comarca:'Tierra del Pan' },
  /* ── FEBRERO ── */
  { day:'2',  monthNum:2,  month:'FEB', name:'Las Candelas · Las mujeres corren el pan', lugar:'Varias localidades', comarca:'Provincia' },
  { day:'5',  monthNum:2,  month:'FEB', name:'Las Águedas',                          lugar:'Varias localidades',      comarca:'Provincia' },
  { day:'15', monthNum:2,  month:'FEB', name:'Diablos · Cencerrones (Carnaval)',     lugar:'Villanueva de Valrojo',   comarca:'Aliste' },
  { day:'15', monthNum:2,  month:'FEB', name:'La Vaca Bayona (Carnaval)',            lugar:'Almeida de Sayago',       comarca:'Sayago' },
  { day:'16', monthNum:2,  month:'FEB', name:'Carnaval tradicional',                 lugar:'Toro',                    comarca:'Alfoz de Toro' },
  { day:'17', monthNum:2,  month:'FEB', name:'Diablos · Cencerrones (Carnaval)',     lugar:'Villanueva de Valrojo',   comarca:'Aliste' },
  { day:'17', monthNum:2,  month:'FEB', name:'La Vaca Bayona (Carnaval)',            lugar:'Almeida de Sayago',       comarca:'Sayago' },
  { day:'17', monthNum:2,  month:'FEB', name:'Carnaval tradicional',                 lugar:'Toro',                    comarca:'Alfoz de Toro' },
  /* ── AGOSTO ── */
  { day:'11', monthNum:8,  month:'AGO', name:'El Atenazador · La Filandorra',        lugar:'San Vicente de la Cabeza',comarca:'Aliste' },
  { day:'15', monthNum:8,  month:'AGO', name:'La Obisparra (16 personajes)',         lugar:'Pobladura de Aliste',     comarca:'Aliste' },
];

/* ══════════════════════════════════════
   ESCRITOS DATA
══════════════════════════════════════ */
const ESCRITOS = [
  {
    id: 'zamora-la-vieja',
    eyebrow: 'RELATO · TIERRA DEL PAN',
    badge: null,
    title: 'Zamora la Vieja',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'No pretendo que me creáis, pero quiero dejar constancia de lo sucedido, es difícil escribir sobre ello pero he de hacerlo, paso a relatar a continuación lo que vivimos mi hermano y yo en este misterioso lugar.',
      'Era un día tan normal como cualquier otro, salvo con la excepción de que Jose y yo aprovecharíamos la mañana para visitar Castrotorafe, un lugar levantado allá por el Siglo XI y que Alfonso VII vio en su emplazamiento un lugar muy importante a nivel estratégico, debido a ello concedió al pueblo poder sobre varias localidades de los alrededores y más adelante pasó a manos de la Orden de caballería de Santiago, todo indica que en el año 1176.',
      'No me perderé con más datos, salvo un par de apuntes que son vitales en esta historia: el lugar fue quedando progresivamente despoblado debido a epidemias de peste y en el Siglo XVII ya se encontraba totalmente vacío. El segundo dato importante: la ermita mantuvo su esplendor hasta que en el Siglo XIX las tropas de Napoleón decidieron que sería una buena idea llevarse todo lo que pudieran de ella.',
      'Como en otras aventuras preparamos una mochila con todo lo indispensable: botellas de agua, barritas energéticas, linternas pequeñas, trípode para los teléfonos móviles y una hoja de ruta.',
      'Llegar hasta allí no fue complicado a pesar de que para llegar a la vieja Zamora haya que desviarse de la carretera y girar hacia un camino que por suerte se encuentra señalizado.',
      'Dejamos el coche en el margen derecho, por si alguien más quería visitar las ruinas de lo que antaño fue una ciudad fortificada con un puente que permitía la entrada de diversas mercancías, un puente que quedó sumergido en el embalse.',
      'Comenzamos a caminar y subimos una pequeña cuesta. Es difícil en la actualidad hacerse una idea de cómo pudo haber sido hace diez siglos: piedras por uno y otro lado, y una pared en pie. Eso que ahora es completamente vulgar había sido la vieja ermita alguna vez.',
      'Nos asomamos al embalse de Ricobayo y desde la lejanía pudimos contemplar la felicidad de la gente que iba allí a pasar el día. Eran ajenos a todo lo que estaba por llegar, a tan solo unos cientos de metros de allí.',
      'Seguimos nuestra expedición. El castillo se conserva relativamente bien, el tiempo le ha jugado una mala pasada pero han conseguido poner freno de momento a su caída. No nos lo pensamos dos veces cuando comprobamos que a pesar de la valla de seguridad se podía entrar; un gran agujero invita a todo aquel que quiera verlo desde cerca.',
      'Entramos y recorrimos cada rincón visitable, siempre con cuidado: una construcción con tantos siglos a sus espaldas puede jugar una mala pasada, cada paso fue calculado. Decidimos que sería una buena idea volver por la noche; estos lugares tan especiales engañan según a la hora que vayas.',
      'Llegó la oscuridad. La luna llena iluminaba desde lo alto y las estrellas asomaban. Qué placer estar lejos de la civilización para contemplar algo así.',
      'Cuando entramos en el terreno de la antigua ciudad notamos algo diferente. Se levantó aire frío cuando hacía tan solo unos segundos todo estaba en calma, las hojas comenzaron a mecerse y los ruidos de la noche fueron apareciendo poco a poco.',
      'Seguimos caminando con nuestras linternas encendidas, apuntando a cada rincón. Sentíamos que en cualquier momento un animal podría cruzarse ante nosotros o, quién sabe, quizás allí había otras personas visitando las ruinas. Aumentamos la precaución; nos comunicábamos prácticamente con susurros. Jose apuntaba hacia el frente y a la izquierda, mientras que yo lo hacía a la derecha, girándome también por si alguien nos seguía, y es que parecía que mil ojos nos acechaban.',
      'En más de una ocasión estuvimos a punto de irnos, pero nos convencíamos diciendo que todo eso era producto de la sugestión. Y así, entre dudas, llegamos hasta el castillo.',
      'Voces. Sí, voces. Débiles, apenas audibles, pero al fin y al cabo, voces. Procedían del interior. ¿Nos habrían adelantado durante el trayecto? En el camino no había más coches aparcados y tampoco los habíamos visto durante nuestra travesía.',
      'Algo se movió detrás de nosotros. Las pisadas fueron audibles: un correteo rápido, su sonido se perdió entre la maleza. Miré a mi hermano y nos entendimos; era peor desandar lo andado que entrar por el agujero del vallado. En el peor de los casos serían un grupo de amigos haciendo botellón.',
      'Dejamos una sola linterna encendida. La luna llena ofrecía algo de luz para no errar nuestros pasos; nos acercamos con sigilo y entramos en la edificación. Allí no había absolutamente nadie, pero se seguían escuchando voces que aumentaban su intensidad como si estuviéramos llegando al epicentro.',
      'Eran tantas que era complicado distinguir alguna palabra: se entremezclaban, venían del frente, de atrás, de la derecha, de la izquierda. Pero no había nadie. Y otra vez las pisadas; ahora no solo eran de una persona que correteaba, eran muchas más. Pasos cortos, pasos largos, lentos, agonizantes, veloces, estresantes…',
      'Y algo nos heló la sangre: suspiros y lamentos a nuestra espalda, tan cerca que eran ensordecedores. Incluso sentíamos cómo el aliento de aquello que estuviese ahí nos pegaba en el cuello.',
      'Echamos a correr. Una huida hacia adelante; la linterna se cayó al suelo y cada vez estábamos más cerca de llegar hasta el final del castillo, hasta su última pared. Nos detuvimos pensando cuál sería nuestro siguiente movimiento, mientras que ahora sí, voces en castellano antiguo y en francés se cernían sobre nosotros. Aquello era invisible, pero estaba ahí.',
      'Cerramos los ojos unos segundos y al abrirlos estábamos dentro del coche: Jose en el asiento del copiloto con la mochila sobre sus piernas y yo en el asiento del piloto. Nos miramos y sin decir ni una sola palabra emprendimos el camino de vuelta.',
      'A pesar de que han pasado unos meses, ha sido complicado escribir todo esto. Cuando llegamos a casa comprobamos que faltaba la linterna que se nos había caído y que la mochila había sido rasgada: un corte de arriba hasta abajo, profundo.',
      'Por más que hemos repasado en frío todo lo que vivimos aquella noche nos ha sido imposible encontrar una explicación. Para nosotros fue algo real, por muy increíble que pueda parecer; no encontramos sentido a lo ocurrido.',
      'Lo hemos mantenido en secreto hasta ahora. No podemos seguir así porque nos come por dentro. Sabemos que vamos a ser tomados por locos y que la única solución que aparece en el horizonte es volver a Zamora la Vieja.',
      'Nos inquieta, pero debemos regresar. Algo nos llama durante la noche, nos invita a volver…'
    ]
  },
  {
    id: 'cristo-batallas',
    eyebrow: 'LEYENDA PARA NIÑOS · ALFOZ DE TORO',
    badge: '✦ Versión para niños de «El Cristo de las Batallas»',
    title: 'El Cristo de las Batallas',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'Hace mucho tiempo, en el año 1476, las tierras de Toro estaban en guerra. Cerca del río Duero se iba a decidir el futuro de los reyes. Don Pedro, que era un guerrero valiente y muy fiel a su ciudad, estaba desesperado por unirse a sus compañeros en la batalla. Montó en su caballo, ajustó su armadura y salió galopando, pero al llegar a la orilla del río comprobó que bajaba tan bravo y tan lleno de agua que era imposible cruzarlo.',
      'Desde la distancia, Don Pedro veía el polvo de la batalla y escuchaba el chocar de las espadas. Se sentía fatal. Pensaba: «Mis amigos se están esforzando y yo estoy aquí parado por culpa de la corriente». Desesperado, se bajó del caballo, hincó las rodillas en el suelo y rezó con todas sus fuerzas al Cristo de las Batallas, el patrón de los toresanos.',
      'Pasó el tiempo y la batalla terminó. A la mañana siguiente, Don Pedro, sintiéndose un poco avergonzado por no haber podido pelear, fue a la ermita.',
      'Estaba solo, triste y confundido. De pronto, ocurrió algo increíble: la iglesia se llenó de una luz cegadora y una voz potente, pero muy tranquila, que le habló directamente:',
      '«Don Pedro, no estés triste. Vi que querías ayudar con todo tu corazón, así que yo mismo ocupé tu lugar. Tomé tu armadura, monté en tu caballo y luché por ti para que nadie pudiera decir que faltaste a tu deber.»',
      'Don Pedro se quedó de piedra. ¡El mismísimo Cristo le había sustituido para ayudarle porque su intención era noble! Al salir de la ermita, todavía estaba tan impresionado que caminaba dando tumbos, ¡casi no podía ni hablar del asombro!',
      'Desde aquel día, Don Pedro cambió su vida. Decidió que, si había recibido semejante milagro, dedicaría todo su esfuerzo a ayudar a los demás y a seguir a la reina Isabel. Y así lo hizo hasta el final de sus días, siempre acompañado por sus valientes compañeros de Toro.',
      'Y por eso, si alguna vez visitáis la ermita en Toro, recordad que allí se cuenta la historia de un caballero que, aunque no pudo cruzar el río, estuvo presente en la batalla gracias a un milagro que hoy, cientos de años después, seguimos recordando.'
    ]
  }
];

let currentStory = null;
let currentStorySource = 'escritos';

/* ══════════════════════════════════════
   FOLKLORE DATA
══════════════════════════════════════ */
const FOLKLORE = [
  {
    id: 'peleas-de-arriba',
    eyebrow: 'GUIÓN · TIERRA DEL VINO',
    badge: null,
    title: 'Peleas de Arriba llama',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'Peleas de Arriba es un pequeño municipio de la comarca de la Tierra del Vino, en Zamora. En 1201, Berenguela de Castilla dio a luz, mientras acampaba en el monte camino de Zamora, a Fernando III el Santo, clave en la reconquista y en la unificación de los territorios de León y Castilla. Fernando siempre mantuvo un vínculo especial con su tierra. En el entorno de Peleas de Arriba, junto a la antigua Vía de la Plata, existía un albergue de peregrinos fundado por un religioso zamorano, Martín Cid. En el año 1232, Fernando III ordenó trasladar y ampliar ese núcleo hasta convertirlo en uno de los grandes monasterios cistercienses de España, el monasterio de Nuestra Señora de Valparaíso, que llegó a ser un centro de poder espiritual y económico.',
      'Pero con las desamortizaciones del siglo XIX quedó abandonado y desapareció. Hoy podemos ver una pequeña capilla en forma de torre, y algunas piedras también, que recuerdan que en este sitio nació el rey. En el pueblo, la iglesia principal es la de Nuestra Señora de la Asunción, una iglesia con raíces románicas. También se la conoce como la iglesia de San Fernando, en honor al rey santo. En su interior hay imágenes muy valiosas, como la Virgen del Consuelo, del siglo XVI, y la de San Fernando, que es el patrón de las fiestas de la localidad.',
      'Cerca, en el Quejigal de Valparaíso, se encuentra el mirador del Pico Pájaro a novecientos cinco metros de altitud. Desde allí se ve la fauna, el paisaje y los montes de Peleas. Es un punto ideal para hacer senderismo, respirar el aire puro de la comarca y para recordar cómo estos bosques fueron refugio de viajeros y peregrinos. Un monasterio, un rey, una iglesia y una montaña, todo en el mismo lugar. ¿Cuándo te vas a pasar a conocer la cuna de un rey y su mirador?'
    ]
  },
  {
    id: 'la-pega',
    eyebrow: 'GUIÓN · LA GUAREÑA',
    badge: null,
    title: 'La Pega',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'Hoy estamos en Argujillo, un pequeño pueblo con una gran historia que espera ser contada. En el centro de Argujillo se levanta la Iglesia de la Asunción, un templo del siglo XVI sencillo y elegante que tiene una sola nave completamente abovedada. Su esbelta torre se alza más de treinta metros sobre el pueblo y dentro se guarda el Cristo de la Oliva, una talla muy anterior al propio edificio. Durante siglos, aquí se han celebrado bautizos, bodas y despedidas. Esta iglesia es el corazón espiritual de Argujillo.',
      'Y precisamente aquí os voy a contar una de las leyendas más queridas de la comarca, la de la Pega. Cuenta la tradición que, estando el pueblo en procesión con la Virgen de la Salud, una urraca, atraída por el brillo, se lanzó y le arrebató el anillo a la imagen como una auténtica ladrona de joya. Desde entonces, cada 9 de febrero, Argujillo celebra la fiesta de la Pega con la Virgen de la Salud como centro de todo: eucaristía, procesión por las calles y la subasta de los brazos de las andas, donde se sube a los niños para recibir la bendición.',
      'Hasta el año 2015, esa subasta se hacía en celemín, la vieja medida del cereal, convirtiendo el grano en moneda simbólica de devoción. Hoy se paga en euros, pero el gesto conserva la misma fuerza de siempre. El frontón y esta vieja plaza de toros junto a la ribera completan ese paisaje de pueblo castellano donde todavía se escucha el eco de sus fiestas y de sus encierros.',
      'Y si queréis seguir conociendo la historia de nuestros pueblos, déjame un comentario para que el próximo vídeo sea sobre el que tú quieras.'
    ]
  },
  {
    id: 'la-noche-de-animas',
    eyebrow: 'GUIÓN · ALISTE',
    badge: null,
    title: 'La Noche de Ánimas',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'En Aliste hay una noche en la que la gente no piensa solo en los vivos, piensa también en los que ya no están entre nosotros. Y en Pobladura esa noche se vive con una intensidad que de verdad impresiona. Es la noche de ánimas. No es una fiesta cualquiera, no es una noche más. Es una antigua tradición en la que el pueblo se prepara para recordar a los difuntos, pero también para respetar algo que siempre ha dado miedo: la posibilidad de que los muertos sigan caminando entre nosotros, entre los vivos. Antiguamente, los mozos subían al monte para recoger leña y encender una gran hoguera, la carbonera, a la puerta de la iglesia.',
      'Ese fuego no era solo luz, era una forma de purificación, como si el pueblo abriera un camino a esas almas. Después, en las casas todo cambiaba. Se limpiaba la mesa, se cubría con un paño blanco y se dejaban alimentos para los difuntos: pan, embutido. Una mesa preparada, como si alguien que ya no está pudiera volver a entrar en casa. Porque en esa noche el recuerdo no se quedaba en la cabeza, salía de ella, se hacía tangible en esa mesa cubierta con un paño blanco de la que os he hablado.',
      'Cuando llegaba la hora, las campanas llamaban a todos. El pueblo salía en procesión rezando por las ánimas. Silencio, fuego y mantones negros en las mujeres. En la comarca aparecen también las capas pardas, pero no todas las localidades las usan igual. Una imagen que mezcla respeto, misterio y una sensación de nudo en el estómago, como si fuera la de estar viviendo algo que viene de hace mucho tiempo atrás y que es más grande que nosotros. Y junto a esa tradición aparece la parte más inquietante.',
      'Y eso es lo que hace tan potente esta tradición. No habla solo de miedo, habla de memoria, de respeto por los que ya no están y de una forma muy nuestra de entender que los muertos no desaparecen del todo mientras alguien siga nombrándolos. Y ahora te pregunto a ti: si esa noche escucharas campanas en mitad del silencio y supieras que en Pobladura de Aliste se encienden hogueras para las ánimas, ¿te atreverías a salir al camino o preferirías quedarte en casa?'
    ]
  },
  {
    id: 'virgen-sobrevivio-fuego',
    eyebrow: 'GUIÓN · TIERRA DE ALBA',
    badge: null,
    title: 'La Virgen que sobrevivió al Fuego',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'Hoy no te voy a enseñar ninguna villa de Zamora ni ningún castillo medieval. Te voy a hablar de un pueblo minúsculo de Zamora, en plena Tierra de Alba, donde una virgen medieval sobrevivió a un incendio y todavía protege hoy a sus vecinos. Perilla de Castro apenas llega a unos ciento cincuenta habitantes. Allí campos, silencio, pero dentro de su iglesia de San Martín se guarda una historia que muy poca gente conoce. En esta iglesia se venera a la Virgen de Roaces, un busto del siglo XIV que se salvó de las llamas cuando su antigua ermita, situada a las afueras del pueblo, quedó completamente destruida por un incendio.',
      'Piensa en esta escena: la ermita ardiendo, el techo cayendo y solo la imagen de la virgen salvada, llevada al interior de la iglesia para que el pueblo no perdiera su devoción. Hoy esa misma imagen preside un retablo lateral, siempre rodeada de flores, siempre rodeada de ofrendas, como si todo el pueblo estuviera recordando cada día que una vez el fuego lo arrasó todo. Todo menos su fe. Y mientras muchos de estos pueblos se vacían, la Virgen de Roaces sigue ahí, en Perilla de Castro, manteniendo viva una historia que casi nadie cuenta, en un rincón de Zamora que no vas a ver en los típicos vídeos de influencers.',
      'Si te gusta que te hable de más pequeños pueblos con historias reales como esta, quédate en mi perfil, porque la España vaciada, o mejor dicho, la Zamora vaciada, tiene mucha más vida de la que te imaginas.'
    ]
  },
  {
    id: 'castillo-derrotado-jamas-vencido',
    eyebrow: 'GUIÓN · ALFOZ DE TORO',
    badge: null,
    title: 'El Castillo Derrotado pero Jamás Vencido',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'Este castillo no se levantó solo para defenderse, sino también para demostrar poder. El castillo de Villalonso, cerca de Toro, en Zamora, se alza en una llanura donde ya hubo una fortaleza de órdenes militares durante la Edad Media. Lo que hoy vemos es una fortaleza señorial del siglo XV, con planta cuadrada, cubos en las esquinas y una torre del homenaje que domina su interior. La familia que lo hizo grande es la de los Ulloa. Juan de Ulloa, regidor y alcaide de Toro, apodado en los romances como el Trasquilado, se convirtió en señor de Villalonso.',
      'Junto a su esposa, María de Sarmiento, levantaron el castillo que conocemos, colocando sus escudos sobre la puerta como marca de su poder y de su linaje. En la guerra, por quién debía gobernar Castilla, los Ulloa se pusieron del lado de Juana, conocida como la Beltraneja, frente a los Reyes Católicos. Juan de Ulloa murió defendiendo este castillo. Su viuda continuó la resistencia, pero fue derrotada y tuvo que entregar Toro, Mota del Marqués y Villalonso a Isabel y Fernando.',
      'Su hijo, Diego de Ulloa, más tarde, unos cuantos años, se puso del lado de los comuneros, que se alzaron contra el rey Carlos I por los abusos de su gobierno. Tras la derrota de los comuneros, el rey lo condenó a muerte, pero Diego salvó la vida pagando una gran suma de dinero y recuperó sus bienes, incluido el castillo de Villalonso, de modo que la familia siguió siendo señora de estas tierras. Hoy el castillo es de propiedad privada y ahora mismo se puede visitar los domingos de doce de la mañana a dos de la tarde.',
      'Es una fortaleza medieval que sigue en pie, que está perfectamente conservada y que además nos recuerda quién fue y quién quiso mandar en esta tierra. Os invito a todos y todas a que visitéis Villalonso y su castillo, que además allí os explican la historia, la fascinante historia de este lugar.'
    ]
  },
  {
    id: '8-dias-de-infierno',
    eyebrow: 'GUIÓN · LA GUAREÑA',
    badge: null,
    title: '8 Días de Infierno',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'Imagina que tu pueblo arde ocho días seguidos. Ocho días viendo cómo tu casa se convierte en ceniza. Esto no es ninguna peli. Pasó de verdad a finales del siglo diecinueve en un pequeño pueblo de La Guareña llamado Guarrate, que tampoco es un nombre cualquiera, porque muchos creen que viene del árabe wadi ras, entre dos aguas, entre dos valles. Y mirando el mapa, la verdad es que sí que tiene sentido. Durante siglos, Guarrate fue un señorío, primero del marqués de Viesca de la Sierra. Su casa palacio del siglo quince todavía es hoy el ayuntamiento.',
      'En 1900 el pueblo ya pertenecía a los marqueses de Santa María de Silvela. Ese año el fuego se desató y no fue un susto solo de unas horas. El incendio duró ocho días. Ocho. Las llamas arrasaron buena parte de las casas de Guarrate. El pueblo quedó prácticamente en ruinas. Pero aquí viene lo que casi nadie cuenta. Los marqueses de Santa María de Silvela, propietarios del pueblo, regalaron a sus vecinos toda la madera necesaria para volver a levantar sus casas.',
      'Guarrate se reconstruyó desde las cenizas gracias a esa madera. De aquel incendio nació un pueblo nuevo, pero con las mismas calles, el mismo cerro. Eso sí, reconstruido tabla a tabla. Años después, ya en 1924, la propiedad se vendió a cinco vecinos de Fuentelsauco y el pueblo pasó por fin a manos de gente de la zona. Piensa un momento en tu barrio, en tu pueblo. ¿Te imaginas perderlo todo en ocho días y tener que empezar de cero?',
      '¿Y si tuvieras que reconstruir tu vida desde las cenizas? ¿Por dónde empezarías?'
    ]
  },
  {
    id: 'pintura-y-tradicion',
    eyebrow: 'GUIÓN · ALFOZ DE TORO',
    badge: null,
    title: 'Pintura y Tradición',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'Hoy en Toro os voy a enseñar algo muy curioso. Y no, no es el Toro de Piedra. Aquí aparece una figura que recuerda al universo de Deli Tejero, la artista toresana que hizo de sus brujas una de sus señas más reconocibles. Un guiño local y muy de Toro, la bruja Taruja. Momento de descubrir algunos elementos del folclore toresano, como por ejemplo, la pinta de Cristóbal Colón, que llevó vino de la ciudad en el descubrimiento de América en 1492. O atentos, atentas, esta mujer que está regando sus flores y que parece que nos mira desde la ventana.',
      'O el enfrentamiento entre dos poetas como Góngora y Quevedo, con esos versos dedicados a Toro y su vino. O esta niña que mira curiosa a través de la puerta. ¿Y a quién no le gusta el vino en Toro? A los religiosos les encanta, como son estos tres claros ejemplos. Cómo lo catan, ¿verdad? Y acabamos nuestro recorrido en un lugar mágico como es la ermita de Santa María de la Vega o la ermita del Cristo de las Batallas. Todas esas pinturas que habéis visto pertenecen a artistas toresanos.',
      'Os invito a venir a Toro y también a descubrir esas pinturas, porque hablan de la historia y de la identidad de todos los toresanos.'
    ]
  },
  {
    id: 'el-toro-enmaromado',
    eyebrow: 'GUIÓN · BENAVENTE Y LOS VALLES',
    badge: null,
    title: 'El Toro Enmaromado',
    author: 'Por Alberto Hernández',
    paragraphs: [
      '¿Sabías que una de las tradiciones más famosas de Benavente nació de una tragedia? Hoy te cuento una leyenda que mezcla historia, tragedia y tradición. Es la del toro enmaromado. Dicen que los condes de Benavente tenían un hijo que le gustaba salir a pasear por la ciudad y por los alrededores, aunque esto no fuese del todo seguro. En uno de esos paseos se acercó a una dehesa y se topó con un toro bravo que se había escapado de una ganadería cercana. El encuentro fue fatal para el chico. El toro lo embistió y lo mató en el acto.',
      'Cuando los condes se enteraron, ordenaron buscar al toro y matarlo. Pero la tristeza no fue lo único que quedó en palacio. La condesa, movida por el dolor y la venganza, mandó que cada año, en la víspera del Corpus Christi, la gente corriera por las calles un toro con una soga atada a los cuernos. Y el castigo, además, no terminaba ahí. Después del recorrido, el toro era sacrificado y su carne repartida entre todos los asistentes. Una tradición durísima que con el tiempo se fue transformando hasta convertirse en la celebración popular que hoy conocemos.',
      'En los archivos aparecen festejos taurinos en Benavente ya en 1434, mucho antes de que alguien escribiera sobre la condesa. En el siglo XVII, además, se habla de un buey enmaromado, ligado al Corpus, pagado por el Ayuntamiento o por el matadero, no por una noble, desesperada y movida por la venganza. Ahora que sabes que detrás de esta fiesta donde predomina el júbilo y las charangas, hay dolor, leyenda y también mucha historia, ¿tú con qué te quedas? ¿Con la condesa vengativa o con los viejos documentos del archivo?'
    ]
  },
  {
    id: 'los-14-de-san-martin',
    eyebrow: 'GUIÓN · TIERRA DE CAMPOS',
    badge: null,
    title: 'Los 14 de San Martín',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'En un pueblo diminuto, perdido en la estepa de Zamora, hubo hace dos siglos un árbol del que colgaron a catorce hombres. Y no eran bandidos, eran vecinos. Durante la Guerra de la Independencia, aquí se capturó a unos soldados franceses y los españoles fusilaron a uno de ellos. La respuesta fue brutal. El general francés Juniers ordenó incendiar el pueblo y colgar de las ramas de un único árbol a los hombres que encontraron a su paso. Catorce cuerpos balanceándose sobre la entrada del pueblo, catorce familias mirando hacia arriba sin poder hacer nada.',
      'A esos vecinos los acabaron enterrando dentro de la iglesia unos años más tarde, en 1824. Pero el árbol, el árbol se quedó grabado en la memoria. Durante mucho tiempo, cuando la gente entraba o salía del pueblo y pasaba por el lugar donde se decía que estuvo ese árbol, se paraba un momento y rezaba una oración en silencio. Nadie necesitaba una placa ni una cruz. Bastaba con mirar solo ese sitio y recordar. Y aquí es donde entra otra figura. Dentro de la iglesia de San Martín de Tours se guarda la imagen más querida del pueblo, el Cristo del Coro, un crucificado gótico al que llevan venerando siglos y al que dedican su fiesta más grande cada 20 de septiembre.',
      'Imagínate la escena. Fuera el lugar donde colgaron a catorce hombres. Dentro de la iglesia, un Cristo crucificado ante el que sus descendientes se arrodillan en el mismo templo donde están enterrados. En San Martín de Valderaduey quizá ya no esté el árbol de los ahorcados, pero hay pueblos donde la memoria pesa y pesa mucho. La pregunta es: si supieras exactamente dónde estuvo ese árbol, ¿te atreverías a pasar solo por ahí de noche? Por cierto, en San Martín hay muchas cruces en sus calles.',
      'Os reto a encontrarlas todas.'
    ]
  },
  {
    id: 'un-camino-magico',
    eyebrow: 'GUIÓN · TIERRA DEL PAN',
    badge: null,
    title: 'Un Camino Mágico',
    author: 'Por Alberto Hernández',
    paragraphs: [
      'Hay nombres que suenan bonitos y hay nombres como Roales del Pan, que está ahí atrás, que esconden siglos de frontera, repoblación y camino. Porque aquí no estamos hablando de un pueblo cualquiera. Estamos hablando de un enclave repoblado por los monarcas del Reino de León entre los siglos diez y doce, cuando esta tierra era frontera, avance y supervivencia. Durante siglos, Roales fue lugar de realengo dentro de la Tierra del Pan. Y eso significa que formó parte de una historia mucho mayor: la de los reyes, los caminos y la organización de un territorio que se estaba levantando desde cero.',
      'Y por si eso fuera poco, por el pueblo pasa la Vía de la Plata, una ruta histórica del Camino de Santiago. Todavía hoy se pueden ver peregrinos cruzando el núcleo urbano igual que lo hicieron hace siglos. De hecho, en la entrada y salida del pueblo aparecen antiguos miliarios, esas piedras que marcaban la ruta como si el pasado siguiera señalando el camino. Y en el centro de todo está la iglesia de Nuestra Señora de la Asunción, con raíces del siglo quince o XVI, portada original y piezas históricas en su interior, que recuerdan que este pueblo siempre tuvo algo más que nombre.',
      'Tuvo peso, paso e historia. Así que la próxima vez que escuches Roales del Pan, no pienses solo en pan, piensa en frontera medieval, en repoblación, en peregrinos y en un pueblo que lleva siglos vigilando el camino. Porque Roales del Pan se entiende mirando la historia.'
    ]
  }
];

/* ══════════════════════════════════════
   ROUTER
══════════════════════════════════════ */
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');


function navigate(id) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  navLinks.forEach(a => {
    a.classList.toggle('active', a.dataset.page === id);
  });

  if (id === 'calendario')  renderCalendar();
  if (id === 'mascaradas')  renderMascaradas();
  if (id === 'escritos')    renderEscritos();
  if (id === 'folklore')    renderFolklore();
  if (id === 'story')       renderStory();
  if (id === 'juego')       { /* game initialises once via IIFE */ }
}

navLinks.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const page = el.dataset.page;
    if (page) {
      navigate(page);
      closeMobileMenu();
    }
  });
});

/* ══════════════════════════════════════
   NAV SCROLL EFFECT
══════════════════════════════════════ */
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ══════════════════════════════════════
   TEMA CLARO / OSCURO
══════════════════════════════════════ */
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem('leyendas-theme', theme);
  themeToggle.textContent  = theme === 'light' ? '☾' : '☀';
  themeToggle.title        = theme === 'light' ? 'Modo oscuro' : 'Modo claro';
  themeToggle.setAttribute('aria-label', theme === 'light' ? 'Modo oscuro' : 'Modo claro');
}

// Cargar preferencia guardada (por defecto: oscuro)
applyTheme(localStorage.getItem('leyendas-theme') || 'dark');

themeToggle.addEventListener('click', () => {
  applyTheme(htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ══════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════ */
const mobileMenu = document.getElementById('mobile-menu');
const navToggle = document.querySelector('.nav-toggle');

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  navToggle.classList.remove('open');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});



/* ══════════════════════════════════════
   CALENDAR
══════════════════════════════════════ */
let calendarInitialized = false;

function renderCalendar() {
  if (calendarInitialized) return;
  calendarInitialized = true;

  const list    = document.getElementById('calendar-list');
  const total   = document.getElementById('cal-total');
  const filter  = document.getElementById('month-filter');

  function buildList(monthNum) {
    list.innerHTML = '';
    const data = monthNum === 'all'
      ? ROMERIAS
      : ROMERIAS.filter(r => r.monthNum === monthNum);

    data.forEach(r => {
      const item = document.createElement('div');
      item.className = 'cal-item';
      item.innerHTML = `
        <div class="cal-date">
          <span class="cal-day">${r.day}</span>
          <span class="cal-month">${r.month}</span>
        </div>
        <div class="cal-body">
          <span class="cal-tag">ROMERÍA · ${r.lugar.toUpperCase()}</span>
          <div class="cal-title">${r.name}</div>
          <p class="cal-desc">${r.ermita}</p>
        </div>
      `;
      list.appendChild(item);
    });

    total.textContent = `${data.length} romería${data.length !== 1 ? 's' : ''} · Fuente: ociozamora.com`;
  }

  // Filtros
  filter.querySelectorAll('.month-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filter.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const m = btn.dataset.month;
      buildList(m === 'all' ? 'all' : parseInt(m));
    });
  });

  buildList('all');
}

/* ══════════════════════════════════════
   MASCARADAS RENDER
══════════════════════════════════════ */
let mascaradasInitialized = false;

function renderMascaradas() {
  if (mascaradasInitialized) return;
  mascaradasInitialized = true;

  const list   = document.getElementById('mask-list');
  const total  = document.getElementById('mask-total');
  const filter = document.getElementById('mask-filter');

  function buildList(monthNum) {
    list.innerHTML = '';
    const data = monthNum === 'all'
      ? MASCARADAS
      : MASCARADAS.filter(m => m.monthNum === monthNum);

    data.forEach(m => {
      const item = document.createElement('div');
      item.className = 'cal-item mask-item';
      item.innerHTML = `
        <div class="cal-date">
          <span class="cal-day">${m.day}</span>
          <span class="cal-month">${m.month}</span>
        </div>
        <div class="cal-body">
          <span class="cal-tag mask-tag">MASCARADA · ${m.comarca.toUpperCase()}</span>
          <div class="cal-title">${m.name}</div>
          <p class="cal-desc">${m.lugar}</p>
        </div>
      `;
      list.appendChild(item);
    });

    total.textContent = `${data.length} mascarada${data.length !== 1 ? 's' : ''} · Fuente: turismoenzamora.es`;
  }

  filter.querySelectorAll('.month-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filter.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const m = btn.dataset.month;
      buildList(m === 'all' ? 'all' : parseInt(m));
    });
  });

  buildList('all');
}

/* ══════════════════════════════════════
   QUIZ
══════════════════════════════════════ */
let qIndex = 0;
let score = 0;
let answered = false;

const startScreen    = document.getElementById('quiz-start');
const questionScreen = document.getElementById('quiz-question');
const resultScreen   = document.getElementById('quiz-result');
const progressBar    = document.getElementById('quiz-progress-bar');
const counterEl      = document.getElementById('quiz-counter');
const questionEl     = document.getElementById('quiz-q');
const optionsEl      = document.getElementById('quiz-options');

document.getElementById('btn-start-quiz').addEventListener('click', startQuiz);
document.getElementById('btn-retry').addEventListener('click', startQuiz);

function startQuiz() {
  qIndex = 0; score = 0;
  // Barajar el banco y tomar 5 preguntas al azar
  QUIZ = [...QUIZ_POOL].sort(() => Math.random() - 0.5).slice(0, 5);
  showScreen('question');
  renderQuestion();
}

function showScreen(id) {
  [startScreen, questionScreen, resultScreen].forEach(s => s.classList.remove('active'));
  document.getElementById('quiz-' + id).classList.add('active');
}

function renderQuestion() {
  answered = false;
  const q = QUIZ[qIndex];
  const pct = (qIndex / QUIZ.length) * 100;

  progressBar.style.width = pct + '%';
  counterEl.textContent = `${qIndex + 1} / ${QUIZ.length}`;
  questionEl.textContent = q.q;
  optionsEl.innerHTML = '';

  // Barajar opciones manteniendo rastro de la correcta
  const indices = q.opts.map((_, i) => i).sort(() => Math.random() - 0.5);
  const correctShuffled = indices.indexOf(q.ans);

  indices.forEach((origIdx, shuffledIdx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = q.opts[origIdx];
    btn.addEventListener('click', () => selectAnswer(shuffledIdx, btn, correctShuffled));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(i, btn, correctIdx) {
  if (answered) return;
  answered = true;

  const allBtns = optionsEl.querySelectorAll('.quiz-option');

  allBtns.forEach(b => b.disabled = true);
  allBtns[correctIdx].classList.add('correct');

  if (i === correctIdx) {
    score++;
  } else {
    btn.classList.add('wrong');
  }

  setTimeout(() => {
    qIndex++;
    if (qIndex < QUIZ.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 900);
}

function showResult() {
  progressBar.style.width = '100%';
  showScreen('result');

  const pct = score / QUIZ.length;
  const icon = document.getElementById('result-icon');
  const title = document.getElementById('result-title');
  const scoreEl = document.getElementById('result-score');
  const msg = document.getElementById('result-msg');

  scoreEl.textContent = `${score} / ${QUIZ.length}`;

  if (pct === 1) {
    icon.textContent = '⬛';
    title.textContent = 'Guardián de las Leyendas';
    msg.textContent = 'Las piedras te reconocen. Conoces esta ciudad mejor que la mayoría de sus vivos.';
  } else if (pct >= 0.6) {
    icon.textContent = '◻️';
    title.textContent = 'Caminante Nocturno';
    msg.textContent = 'Sabes más de lo que aparentas. El río te recuerda, aunque todavía tienes secretos por descubrir.';
  } else {
    icon.textContent = '◼';
    title.textContent = 'Forastero Curioso';
    msg.textContent = 'Las leyendas te esperan. Vuelve cuando la ciudad esté en silencio y escucha con más calma.';
  }
}

/* ══════════════════════════════════════
   BUZÓN FORM — Formspree
══════════════════════════════════════ */
document.getElementById('buzon-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const nombre  = this.nombre.value.trim();
  const email   = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();
  if (!nombre || !email || !mensaje) return;

  const btn      = this.querySelector('.btn-outline');
  const success  = document.getElementById('form-success');
  const errorMsg = document.getElementById('form-error');

  btn.textContent = 'ENVIANDO…';
  btn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/mnjwlkke', {
      method:  'POST',
      headers: { 'Accept': 'application/json' },
      body:    new FormData(this)
    });

    if (res.ok) {
      this.reset();
      success.classList.add('show');
      if (errorMsg) errorMsg.classList.remove('show');
      setTimeout(() => success.classList.remove('show'), 6000);
    } else {
      if (errorMsg) errorMsg.classList.add('show');
    }
  } catch {
    if (errorMsg) errorMsg.classList.add('show');
  } finally {
    btn.textContent = 'ENVIAR →';
    btn.disabled = false;
  }
});

/* ══════════════════════════════════════
   EXTRAS — navegación interna
══════════════════════════════════════ */
document.querySelectorAll('.extras-card, .escritos-back, .folklore-back').forEach(el => {
  el.addEventListener('click', () => {
    const dest = el.dataset.page;
    if (dest) navigate(dest);
  });
});

/* ══════════════════════════════════════
   ESCRITOS — índice y visor
══════════════════════════════════════ */
function buildStoryList(listEl, dataArray, source) {
  if (!listEl) return;
  listEl.innerHTML = '';
  dataArray.forEach(story => {
    const li = document.createElement('li');
    li.className = 'escritos-item';
    li.innerHTML = `
      <div class="escritos-item-info">
        <span class="escritos-item-eyebrow">${story.eyebrow}</span>
        ${story.badge ? `<span class="escritos-item-badge">${story.badge}</span>` : ''}
        <span class="escritos-item-title">${story.title}</span>
        <span class="escritos-item-author">${story.author}</span>
      </div>
      <span class="escritos-item-arrow">→</span>
    `;
    li.addEventListener('click', () => {
      currentStory = story.id;
      currentStorySource = source;
      navigate('story');
    });
    listEl.appendChild(li);
  });
}

function renderEscritos() {
  buildStoryList(document.getElementById('escritos-list'), ESCRITOS, 'escritos');
}

function renderFolklore() {
  buildStoryList(document.getElementById('folklore-list'), FOLKLORE, 'folklore');
}

function renderStory() {
  const pool = currentStorySource === 'folklore' ? FOLKLORE : ESCRITOS;
  const story = pool.find(s => s.id === currentStory);
  if (!story) return;

  const backBtn    = document.getElementById('story-back');
  const breadcrumb = document.getElementById('story-breadcrumb');
  const content    = document.getElementById('story-content');

  const backLabel = currentStorySource === 'folklore' ? '← FOLKLORE' : '← ESCRITOS';
  if (backBtn) { backBtn.dataset.page = currentStorySource; backBtn.textContent = backLabel; }
  if (breadcrumb) breadcrumb.textContent = currentStorySource.toUpperCase() + ' · ' + story.title.toUpperCase();
  if (!content) return;

  content.innerHTML = `
    <header class="relato-header">
      <span class="relato-eyebrow">${story.eyebrow}</span>
      ${story.badge ? `<span class="relato-badge">${story.badge}</span>` : ''}
      <h1 class="relato-title">${story.title}</h1>
      <p class="relato-meta">${story.author}</p>
    </header>
    <div class="relato-body">
      ${story.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
  `;
}

/* ══════════════════════════════════════
   EL GRAN EXPLORADOR — JUEGO
══════════════════════════════════════ */
const JUEGO_DATA = {
  sanabria: {
    nombre: 'SANABRIA',
    question: '¿Cómo se llama la criatura mitad hombre mitad lobo de la tradición sanabresa?',
    options: ['El Lobishome', 'El Hombre del Bosque', 'El Gasgón', 'El Ánima Perdida'],
    correct: 0,
    lore: 'El Lobishome es la versión zamorana del hombre lobo. Según la leyenda, el séptimo hijo varón consecutivo estaba condenado a transformarse cada viernes.'
  },
  benavente: {
    nombre: 'BENAVENTE Y LOS VALLES',
    question: '¿Qué le ataban al toro en la tradición del Toro Enmaromado de Benavente?',
    options: ['Una soga a los cuernos', 'Un lazo al cuello', 'Cintas de colores', 'Una campana al cuello'],
    correct: 0,
    lore: 'El Toro Enmaromado es una de las fiestas más antiguas de Benavente. La soga permite a los vecinos guiar al toro por las calles en un rito que mezcla valentía y tradición.'
  },
  'tierra-campos': {
    nombre: 'TIERRA DE CAMPOS',
    question: '¿A cuántos vecinos colgaron los franceses de un árbol en San Martín de Valderaduey?',
    options: ['Catorce', 'Siete', 'Veinte', 'Doce'],
    correct: 0,
    lore: 'Los 14 de San Martín son los mártires de la Guerra de la Independencia. Su historia es uno de los episodios más dolorosos y menos conocidos de la resistencia zamorana.'
  },
  aliste: {
    nombre: 'ALISTE',
    question: '¿Qué dejaban las familias de Aliste sobre la mesa en la Noche de Ánimas?',
    options: ['Alimentos para los difuntos', 'Una vela encendida', 'Ropa del fallecido', 'Una foto del muerto'],
    correct: 0,
    lore: 'En Pobladura de Aliste la Noche de Ánimas era sagrada: la mesa quedaba puesta con comida para los muertos que volvían a visitar el hogar familiar.'
  },
  tabara: {
    nombre: 'TIERRA DE TÁBARA',
    question: '¿A quiénes espantaba la cabeza parlante de Tábara según la leyenda?',
    options: ['A los judíos que entraban en la villa', 'A los peregrinos forasteros', 'A los soldados musulmanes', 'A los ladrones nocturnos'],
    correct: 0,
    lore: 'La Cabeza Parlante de Tábara es uno de los misterios medievales de Zamora. Se dice que la cabeza gritaba al detectar la presencia de quienes no debían entrar.'
  },
  alba: {
    nombre: 'TIERRA DE ALBA',
    question: '¿Qué imagen sobrevivió al incendio de la ermita en Perilla de Castro?',
    options: ['La Virgen de Roaces', 'La Virgen del Viso', 'La Virgen de la Vega', 'La Virgen del Canto'],
    correct: 0,
    lore: 'La Virgen de Roaces sobrevivió intacta al fuego que destruyó su ermita en Perilla de Castro. Los vecinos lo interpretaron como un milagro y reforzaron su devoción.'
  },
  'tierra-pan': {
    nombre: 'TIERRA DEL PAN',
    question: '¿Qué les ocurrió a los hermanos al cerrar los ojos en el castillo de Castrotorafe?',
    options: ['Aparecieron dentro de su coche', 'Desaparecieron durante horas', 'Vieron visiones del pasado', 'Escucharon voces medievales'],
    correct: 0,
    lore: 'Castrotorafe es uno de los castillos más misteriosos de Zamora. Sus ruinas junto al río Esla acumulan siglos de historias sobre apariciones y saltos en el tiempo.'
  },
  toro: {
    nombre: 'ALFOZ DE TORO',
    question: '¿Qué le impidió a Don Pedro cruzar para unirse a la Batalla de Toro en 1476?',
    options: ['El río Duero crecido', 'Un ejército enemigo', 'Una tormenta de nieve', 'La traición de sus aliados'],
    correct: 0,
    lore: 'La Batalla de Toro de 1476 fue decisiva para la historia de España. El Cristo de las Batallas, según la leyenda, intervino milagrosamente en su desenlace.'
  },
  sayago: {
    nombre: 'SAYAGO',
    question: '¿De qué se acusaba a la serpiente mamadora en la leyenda de Sayago?',
    options: ['De mamar de las vacas y mujeres dormidas', 'De envenenar los pozos', 'De robar niños en la noche', 'De destruir los cultivos'],
    correct: 0,
    lore: 'La serpiente mamadora es una criatura del folclore rural zamorano. Se decía que se introducía en los establos y casas para alimentarse de la leche de animales y personas.'
  },
  'tierra-vino': {
    nombre: 'TIERRA DEL VINO',
    question: '¿Cuántos días duró el incendio que devastó Guarrate?',
    options: ['Ocho días', 'Tres días', 'Dos semanas', 'Un día entero'],
    correct: 0,
    lore: 'El incendio de Guarrate en 1932 fue una tragedia que marcó a generaciones. Durante 8 días las llamas consumieron el pueblo mientras los vecinos luchaban por salvar lo que podían.'
  },
  guarena: {
    nombre: 'LA GUAREÑA',
    question: '¿Qué le arrebató la urraca a la imagen de la Virgen en Argujillo?',
    options: ['El anillo', 'La corona', 'El manto', 'El cetro'],
    correct: 0,
    lore: 'La Pega de Argujillo es una de las leyendas más singulares de La Guareña. Una urraca robó el anillo de la Virgen, y la imagen señaló al pájaro ladrón ante los atónitos vecinos.'
  }
};

(function initJuego() {
  const svg        = document.getElementById('juego-svg');
  if (!svg) return;

  const panelIdle      = document.getElementById('juego-idle');
  const panelChallenge = document.getElementById('juego-challenge');
  const panelResult    = document.getElementById('juego-result');
  const panelWin       = document.getElementById('juego-win');
  const foundEl        = document.getElementById('juego-found');
  const progFill       = document.getElementById('juego-prog-fill');
  const jcName         = document.getElementById('jc-name');
  const jcQuestion     = document.getElementById('jc-question');
  const jcOptions      = document.getElementById('jc-options');
  const jcIcon         = document.getElementById('jc-icon');
  const jcResultText   = document.getElementById('jc-result-text');
  const jcLore         = document.getElementById('jc-lore');
  const jcContinue     = document.getElementById('jc-continue');
  const jcRestart      = document.getElementById('jc-restart');

  const discovered   = new Set();
  const TOTAL        = 11;
  let   activeComarca = null;

  function showPanel(which) {
    [panelIdle, panelChallenge, panelResult, panelWin].forEach(p => {
      if (p) p.classList.toggle('juego-hidden', p !== which);
    });
  }

  function updateScore() {
    const n = discovered.size;
    if (foundEl)  foundEl.textContent = n;
    if (progFill) progFill.style.width = Math.round((n / TOTAL) * 100) + '%';
  }

  function markDiscovered(id) {
    const shape = svg.querySelector(`[data-id="${id}"]`);
    if (shape) shape.classList.add('jc-discovered');
    discovered.add(id);
    updateScore();
  }

  function openChallenge(id) {
    const data = JUEGO_DATA[id];
    if (!data) return;
    activeComarca = id;

    jcName.textContent     = data.nombre;
    jcQuestion.textContent = data.question;
    jcOptions.innerHTML    = '';

    const shuffled = data.options
      .map((opt, i) => ({ opt, i }))
      .sort(() => Math.random() - 0.5);

    shuffled.forEach(({ opt, i }) => {
      const btn = document.createElement('button');
      btn.className   = 'juego-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => onAnswer(i === data.correct, data));
      jcOptions.appendChild(btn);
    });

    showPanel(panelChallenge);
  }

  function onAnswer(correct, data) {
    if (correct) {
      markDiscovered(activeComarca);
      jcIcon.textContent        = '✓';
      jcIcon.className          = 'juego-result-icon juego-correct';
      jcResultText.textContent  = '¡Correcto! Has descubierto esta comarca.';
    } else {
      jcIcon.textContent        = '✗';
      jcIcon.className          = 'juego-result-icon juego-wrong';
      jcResultText.textContent  = 'No es esa. Podrás intentarlo de nuevo.';
    }
    jcLore.textContent = data.lore;
    showPanel(panelResult);
  }

  jcContinue && jcContinue.addEventListener('click', () => {
    if (discovered.size === TOTAL) {
      showPanel(panelWin);
    } else {
      showPanel(panelIdle);
    }
    activeComarca = null;
  });

  jcRestart && jcRestart.addEventListener('click', () => {
    discovered.clear();
    svg.querySelectorAll('.jc-shape').forEach(s => s.classList.remove('jc-discovered'));
    updateScore();
    showPanel(panelIdle);
  });

  svg.querySelectorAll('.jc-shape').forEach(shape => {
    const id = shape.dataset.id;
    shape.addEventListener('click', () => {
      if (id === 'carballeda') return;
      if (discovered.has(id)) return;
      openChallenge(id);
    });
  });

  updateScore();
})();

/* ══════════════════════════════════════
   COMARCA MAP INTERACTION
══════════════════════════════════════ */
(function initComarcaMap() {
  const svg        = document.getElementById('comarca-svg');
  const panel      = document.getElementById('comarca-panel');
  const btnClose   = document.getElementById('panel-close');
  const panelNum   = document.getElementById('panel-num');
  const panelTitle = document.getElementById('panel-title');
  const panelCap   = document.getElementById('panel-cap');
  const panelLeyendasList = document.getElementById('panel-leyendas-list');
  const panelEmpty        = document.getElementById('panel-empty');

  if (!svg) return;

  let activeShape = null;

  function getLabels(id) {
    return svg.querySelectorAll(`.c-label[data-id="${id}"]`);
  }

  function setLabelClass(id, cls, add) {
    getLabels(id).forEach(el => el.classList.toggle(cls, add));
  }

  function clearActive() {
    if (activeShape) {
      activeShape.classList.remove('c-active');
      setLabelClass(activeShape.dataset.id, 'c-label-active', false);
      activeShape = null;
    }
    panel.classList.remove('open');
  }

  function selectComarca(shape) {
    clearActive();
    activeShape = shape;
    shape.classList.add('c-active');
    setLabelClass(shape.dataset.id, 'c-label-active', true);

    const data = COMARCAS[shape.dataset.id];
    if (!data) return;

    panelNum.textContent   = data.num;
    panelTitle.textContent = data.name;
    panelCap.textContent   = 'Capital · ' + data.capital;

    // Render legend list
    panelLeyendasList.innerHTML = '';
    const leyendas = data.leyendas || [];
    if (leyendas.length > 0) {
      panelEmpty.classList.remove('show');
      leyendas.forEach(l => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${l.url}" target="_blank" rel="noopener">${l.titulo}</a>`;
        panelLeyendasList.appendChild(li);
      });
    } else {
      panelEmpty.classList.add('show');
    }

    panel.classList.add('open');
  }

  // Hover: brighten label
  svg.querySelectorAll('.c-shape').forEach(shape => {
    shape.addEventListener('mouseenter', () => {
      if (shape === activeShape) return;
      setLabelClass(shape.dataset.id, 'c-label-hover', true);
    });
    shape.addEventListener('mouseleave', () => {
      setLabelClass(shape.dataset.id, 'c-label-hover', false);
    });
    shape.addEventListener('click', () => {
      if (shape === activeShape) { clearActive(); return; }
      selectComarca(shape);
    });
  });

  // Close panel
  btnClose.addEventListener('click', clearActive);
})();

/* ══════════════════════════════════════
   INIT — siempre empieza en INICIO
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  navigate('inicio');

  /* ── Contadores del Buzón (dinámicos) ── */
  const totalLeyendas = Object.values(COMARCAS)
    .reduce((sum, c) => sum + c.leyendas.length, 0);
  const totalCostumbres = MASCARADAS.length;

  const elLey = document.getElementById('stat-leyendas');
  const elCos = document.getElementById('stat-costumbres');
  if (elLey) elLey.textContent = totalLeyendas;
  if (elCos) elCos.textContent = totalCostumbres;
});
