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
    leyendas: []
  },
  'tabara': {
    num: '06', name: 'Tierra de Tábara', capital: 'Tábara',
    leyendas: [
      { titulo: 'La Cabeza Parlante', url: 'https://www.instagram.com/alberto_hdez13/reel/DYAdFRIIPB5/' }
    ]
  },
  'alba': {
    num: '07', name: 'Tierra de Alba', capital: 'Alba de Aliste',
    leyendas: []
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
      { titulo: '3 Templos, 1 Pueblo',      url: 'https://www.instagram.com/alberto_hdez13/reel/DYiB9VgoXVs/' }
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
      { titulo: 'El Cristo de Morales',    url: 'https://www.instagram.com/alberto_hdez13/reel/DXSVDquCAy-/' }
    ]
  },
  'guarena': {
    num: '12', name: 'La Guareña', capital: 'Fuentesaúco',
    leyendas: [
      { titulo: 'La Reina Cautiva', url: 'https://www.instagram.com/alberto_hdez13/reel/DYbmA5tIfhw/' }
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
