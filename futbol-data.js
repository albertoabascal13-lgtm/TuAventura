/* ══════════════════════════════════════
   BASE DE DATOS — ~100 PLANTILLAS
   Fuente: bdfutbol.com | 1980-81 → 2025-26
   sp (def): 'cb' | 'lb'    sp (del): 'dc' | 'ext'
══════════════════════════════════════ */
const PLANTILLAS = [

/* ══ REAL MADRID ══ */
{ id:'rma-8586', eq:'Real Madrid', t:'1985-86', j:[
  {n:'Miguel Ángel',  pos:'pt', v:82},
  {n:'Agustín',       pos:'pt', v:76},
  {n:'Chendo',        pos:'def',sp:'lb',v:76},{n:'Sanchís',       pos:'def',sp:'cb',v:83},
  {n:'Camacho',       pos:'def',sp:'cb',v:85},{n:'Gordillo',      pos:'def',sp:'lb',v:80},
  {n:'Salguero',      pos:'def',sp:'cb',v:71},
  {n:'Martín Vázquez',pos:'med',v:82},{n:'Michel',         pos:'med',v:83},{n:'Gallego',pos:'med',v:75},
  {n:'Juanito',       pos:'del',sp:'ext',v:80},{n:'Santillana',    pos:'del',sp:'dc', v:82},
  {n:'Butragueño',    pos:'del',sp:'dc', v:88},{n:'Hugo Sánchez',  pos:'del',sp:'dc', v:93},
]},
{ id:'rma-8990', eq:'Real Madrid', t:'1989-90', j:[
  {n:'Buyo',          pos:'pt', v:84},
  {n:'Chendo',        pos:'def',sp:'lb',v:77},{n:'Sanchís',       pos:'def',sp:'cb',v:85},
  {n:'Hierro',        pos:'def',sp:'cb',v:86},{n:'Camacho',       pos:'def',sp:'cb',v:82},
  {n:'Aldana',        pos:'def',sp:'lb',v:72},
  {n:'Martín Vázquez',pos:'med',v:83},{n:'Michel',         pos:'med',v:85},{n:'Gordillo',pos:'med',v:76},
  {n:'Butragueño',    pos:'del',sp:'dc', v:87},{n:'Hugo Sánchez',  pos:'del',sp:'dc', v:92},
  {n:'Pardeza',       pos:'del',sp:'ext',v:75},
]},
{ id:'rma-9495', eq:'Real Madrid', t:'1994-95', j:[
  {n:'Buyo',          pos:'pt', v:81},
  {n:'Chendo',        pos:'def',sp:'lb',v:74},{n:'Sanchís',       pos:'def',sp:'cb',v:82},
  {n:'Hierro',        pos:'def',sp:'cb',v:86},{n:'Míchel Salgado',pos:'def',sp:'lb',v:80},
  {n:'Michel',        pos:'med',v:80},{n:'Redondo',        pos:'med',v:87},{n:'Laudrup',pos:'med',v:88},
  {n:'Zamorano',      pos:'del',sp:'dc', v:85},{n:'Raúl',          pos:'del',sp:'dc', v:85},
  {n:'Amavisca',      pos:'del',sp:'ext',v:77},
]},
{ id:'rma-9798', eq:'Real Madrid', t:'1997-98', j:[
  {n:'Illgner',       pos:'pt', v:86},
  {n:'Sanchís',       pos:'def',sp:'cb',v:80},{n:'Hierro',        pos:'def',sp:'cb',v:87},
  {n:'Roberto Carlos',pos:'def',sp:'lb',v:91},{n:'Panucci',       pos:'def',sp:'lb',v:77},
  {n:'Redondo',       pos:'med',v:88},{n:'Seedorf',        pos:'med',v:87},{n:'Karembeu',pos:'med',v:80},{n:'Laudrup',pos:'med',v:88},
  {n:'Raúl',          pos:'del',sp:'dc', v:89},{n:'Morientes',     pos:'del',sp:'dc', v:83},
  {n:'Mijatovic',     pos:'del',sp:'dc', v:83},{n:'Suker',         pos:'del',sp:'dc', v:85},
]},
{ id:'rma-0102', eq:'Real Madrid', t:'2001-02', j:[
  {n:'Casillas',      pos:'pt', v:91},
  {n:'Sanchís',       pos:'def',sp:'cb',v:77},{n:'Hierro',        pos:'def',sp:'cb',v:85},
  {n:'Roberto Carlos',pos:'def',sp:'lb',v:90},{n:'Helguera',      pos:'def',sp:'cb',v:80},
  {n:'Makélélé',      pos:'med',v:87},{n:'Zidane',         pos:'med',v:97},{n:'Figo',   pos:'med',v:93},
  {n:'Guti',          pos:'med',v:80},{n:'Solari',         pos:'med',v:74},
  {n:'Raúl',          pos:'del',sp:'dc', v:90},{n:'Morientes',     pos:'del',sp:'dc', v:84},
  {n:'McManaman',     pos:'del',sp:'ext',v:78},
]},
{ id:'rma-0304', eq:'Real Madrid', t:'2003-04', j:[
  {n:'Casillas',      pos:'pt', v:92},
  {n:'Salgado',       pos:'def',sp:'lb',v:74},{n:'Helguera',      pos:'def',sp:'cb',v:79},
  {n:'Roberto Carlos',pos:'def',sp:'lb',v:88},{n:'Hierro',        pos:'def',sp:'cb',v:82},
  {n:'Zidane',        pos:'med',v:97},{n:'Beckham',        pos:'med',v:86},{n:'Figo',   pos:'med',v:89},
  {n:'Guti',          pos:'med',v:79},{n:'Cambiasso',      pos:'med',v:82},
  {n:'Ronaldo',       pos:'del',sp:'dc', v:96},{n:'Raúl',          pos:'del',sp:'dc', v:88},
  {n:'Owen',          pos:'del',sp:'dc', v:84},
]},
{ id:'rma-0607', eq:'Real Madrid', t:'2006-07', j:[
  {n:'Casillas',      pos:'pt', v:92},
  {n:'Salgado',       pos:'def',sp:'lb',v:72},{n:'Cannavaro',     pos:'def',sp:'cb',v:88},
  {n:'Pepe',          pos:'def',sp:'cb',v:82},{n:'Marcelo',       pos:'def',sp:'lb',v:83},
  {n:'Emerson',       pos:'med',v:81},{n:'Diarra',         pos:'med',v:80},{n:'Sneijder',pos:'med',v:85},
  {n:'Robben',        pos:'del',sp:'ext',v:88},{n:'Van Nistelrooy',pos:'del',sp:'dc', v:87},
  {n:'Higuaín',       pos:'del',sp:'dc', v:81},{n:'Guti',          pos:'med',v:79},
]},
{ id:'rma-1112', eq:'Real Madrid', t:'2011-12', j:[
  {n:'Casillas',      pos:'pt', v:93},
  {n:'Ramos',         pos:'def',sp:'cb',v:89},{n:'Pepe',          pos:'def',sp:'cb',v:84},
  {n:'Marcelo',       pos:'def',sp:'lb',v:87},{n:'Arbeloa',       pos:'def',sp:'lb',v:76},
  {n:'Varane',        pos:'def',sp:'cb',v:82},{n:'Coentrao',      pos:'def',sp:'lb',v:80},
  {n:'Xabi Alonso',   pos:'med',v:89},{n:'Khedira',        pos:'med',v:83},{n:'Özil',   pos:'med',v:88},
  {n:'Di María',      pos:'del',sp:'ext',v:86},{n:'Benzema',       pos:'del',sp:'dc', v:88},
  {n:'Cristiano Ronaldo',pos:'del',sp:'ext',v:99},{n:'Higuaín',   pos:'del',sp:'dc', v:84},
]},
{ id:'rma-1516', eq:'Real Madrid', t:'2015-16', j:[
  {n:'Navas',         pos:'pt', v:87},
  {n:'Ramos',         pos:'def',sp:'cb',v:91},{n:'Pepe',          pos:'def',sp:'cb',v:84},
  {n:'Varane',        pos:'def',sp:'cb',v:87},{n:'Marcelo',       pos:'def',sp:'lb',v:87},
  {n:'Carvajal',      pos:'def',sp:'lb',v:82},
  {n:'Casemiro',      pos:'med',v:87},{n:'Kroos',          pos:'med',v:91},{n:'Modric',pos:'med',v:92},
  {n:'James',         pos:'med',v:84},{n:'Isco',           pos:'med',v:83},
  {n:'Benzema',       pos:'del',sp:'dc', v:90},{n:'Cristiano Ronaldo',pos:'del',sp:'ext',v:99},
  {n:'Bale',          pos:'del',sp:'ext',v:88},{n:'Jesé',          pos:'del',sp:'ext',v:75},
]},
{ id:'rma-2122', eq:'Real Madrid', t:'2021-22', j:[
  {n:'Courtois',      pos:'pt', v:93},
  {n:'Carvajal',      pos:'def',sp:'lb',v:83},{n:'Militao',       pos:'def',sp:'cb',v:87},
  {n:'Alaba',         pos:'def',sp:'cb',v:87},{n:'Mendy',         pos:'def',sp:'lb',v:82},
  {n:'Nacho',         pos:'def',sp:'cb',v:78},
  {n:'Casemiro',      pos:'med',v:89},{n:'Kroos',          pos:'med',v:90},{n:'Modric',pos:'med',v:92},
  {n:'Valverde',      pos:'med',v:87},{n:'Camavinga',      pos:'med',v:83},
  {n:'Vinicius Jr',   pos:'del',sp:'ext',v:91},{n:'Benzema',       pos:'del',sp:'dc', v:96},
  {n:'Asensio',       pos:'del',sp:'ext',v:81},
]},
{ id:'rma-2425', eq:'Real Madrid', t:'2024-25', j:[
  {n:'Courtois',      pos:'pt', v:93},{n:'Lunin',          pos:'pt', v:80},
  {n:'Carvajal',      pos:'def',sp:'lb',v:83},{n:'Militao',       pos:'def',sp:'cb',v:88},
  {n:'Alaba',         pos:'def',sp:'cb',v:85},{n:'Mendy',         pos:'def',sp:'lb',v:83},
  {n:'Tchouameni',    pos:'med',v:84},{n:'Camavinga',      pos:'med',v:86},{n:'Valverde',pos:'med',v:90},
  {n:'Modric',        pos:'med',v:88},{n:'Bellingham',     pos:'med',v:93},{n:'Güler',  pos:'med',v:80},
  {n:'Vinicius Jr',   pos:'del',sp:'ext',v:94},{n:'Mbappé',        pos:'del',sp:'dc', v:96},
  {n:'Rodrygo',       pos:'del',sp:'ext',v:87},{n:'Brahim',        pos:'del',sp:'ext',v:79},
]},

/* ══ FC BARCELONA ══ */
{ id:'fcb-8485', eq:'FC Barcelona', t:'1984-85', j:[
  {n:'Urruti',        pos:'pt', v:80},
  {n:'Alexanco',      pos:'def',sp:'cb',v:78},{n:'Migueli',       pos:'def',sp:'cb',v:82},
  {n:'Julio Alberto', pos:'def',sp:'lb',v:76},{n:'Gerardo',       pos:'def',sp:'lb',v:73},
  {n:'Schuster',      pos:'med',v:91},{n:'Marcos',         pos:'med',v:75},{n:'Lobo Carrasco',pos:'med',v:77},
  {n:'Calderé',       pos:'del',sp:'ext',v:78},{n:'Víctor',        pos:'del',sp:'dc', v:80},
  {n:'Archibald',     pos:'del',sp:'dc', v:78},{n:'Pichi Alonso',  pos:'del',sp:'dc', v:76},
]},
{ id:'fcb-9192', eq:'FC Barcelona', t:'1991-92', j:[
  {n:'Zubizarreta',   pos:'pt', v:88},
  {n:'Ferrer',        pos:'def',sp:'lb',v:80},{n:'Koeman',        pos:'def',sp:'cb',v:87},
  {n:'Nadal',         pos:'def',sp:'cb',v:79},{n:'Goikoetxea',    pos:'def',sp:'lb',v:80},
  {n:'Guardiola',     pos:'med',v:85},{n:'Bakero',         pos:'med',v:82},{n:'Eusebio',pos:'med',v:79},
  {n:'Laudrup',       pos:'del',sp:'ext',v:91},{n:'Stoichkov',     pos:'del',sp:'ext',v:92},
  {n:'Salinas',       pos:'del',sp:'dc', v:82},{n:'Begiristain',   pos:'del',sp:'ext',v:81},
]},
{ id:'fcb-9495', eq:'FC Barcelona', t:'1994-95', j:[
  {n:'Zubizarreta',   pos:'pt', v:86},
  {n:'Ferrer',        pos:'def',sp:'lb',v:81},{n:'Koeman',        pos:'def',sp:'cb',v:85},
  {n:'Nadal',         pos:'def',sp:'cb',v:80},{n:'Sergi',         pos:'def',sp:'lb',v:77},
  {n:'Guardiola',     pos:'med',v:86},{n:'Bakero',         pos:'med',v:80},{n:'Begiristain',pos:'med',v:78},
  {n:'Romario',       pos:'del',sp:'dc', v:96},{n:'Stoichkov',     pos:'del',sp:'ext',v:92},
  {n:'Amor',          pos:'med',v:77},{n:'Eusebio',        pos:'med',v:78},
]},
{ id:'fcb-9899', eq:'FC Barcelona', t:'1998-99', j:[
  {n:'Hesp',          pos:'pt', v:76},
  {n:'Reiziger',      pos:'def',sp:'lb',v:80},{n:'Puyol',         pos:'def',sp:'cb',v:84},
  {n:'Sergi',         pos:'def',sp:'lb',v:77},{n:'Bogarde',       pos:'def',sp:'cb',v:72},
  {n:'Guardiola',     pos:'med',v:85},{n:'Cocu',           pos:'med',v:82},{n:'Xavi',   pos:'med',v:85},
  {n:'Figo',          pos:'del',sp:'ext',v:92},{n:'Rivaldo',       pos:'del',sp:'ext',v:94},
  {n:'Kluivert',      pos:'del',sp:'dc', v:86},{n:'Luis Enrique',  pos:'del',sp:'dc', v:84},
]},
{ id:'fcb-0405', eq:'FC Barcelona', t:'2004-05', j:[
  {n:'Valdés',        pos:'pt', v:85},
  {n:'Oleguer',       pos:'def',sp:'lb',v:74},{n:'Puyol',         pos:'def',sp:'cb',v:89},
  {n:'Márquez',       pos:'def',sp:'cb',v:82},{n:'Van Bronckhorst',pos:'def',sp:'lb',v:79},
  {n:'Belletti',      pos:'def',sp:'lb',v:76},{n:'Edmilson',      pos:'med',v:80},
  {n:'Xavi',          pos:'med',v:90},{n:'Deco',           pos:'med',v:87},{n:'Iniesta',pos:'med',v:89},
  {n:'Ronaldinho',    pos:'del',sp:'ext',v:97},{n:'Etoo',          pos:'del',sp:'dc', v:92},
  {n:'Larsson',       pos:'del',sp:'dc', v:84},{n:'Giuly',         pos:'del',sp:'ext',v:78},
]},
{ id:'fcb-0809', eq:'FC Barcelona', t:'2008-09', j:[
  {n:'Valdés',        pos:'pt', v:86},
  {n:'Alves',         pos:'def',sp:'lb',v:88},{n:'Puyol',         pos:'def',sp:'cb',v:89},
  {n:'Piqué',         pos:'def',sp:'cb',v:87},{n:'Abidal',        pos:'def',sp:'lb',v:83},
  {n:'Touré Yaya',    pos:'def',sp:'cb',v:84},
  {n:'Busquets',      pos:'med',v:87},{n:'Xavi',           pos:'med',v:94},{n:'Iniesta',pos:'med',v:93},
  {n:'Keita',         pos:'med',v:78},
  {n:'Messi',         pos:'del',sp:'ext',v:97},{n:"Eto'o",         pos:'del',sp:'dc', v:91},
  {n:'Henry',         pos:'del',sp:'ext',v:87},
]},
{ id:'fcb-1011', eq:'FC Barcelona', t:'2010-11', j:[
  {n:'Valdés',        pos:'pt', v:87},
  {n:'Alves',         pos:'def',sp:'lb',v:89},{n:'Puyol',         pos:'def',sp:'cb',v:88},
  {n:'Piqué',         pos:'def',sp:'cb',v:88},{n:'Abidal',        pos:'def',sp:'lb',v:83},
  {n:'Mascherano',    pos:'def',sp:'cb',v:84},{n:'Maxwell',       pos:'def',sp:'lb',v:78},
  {n:'Busquets',      pos:'med',v:89},{n:'Xavi',           pos:'med',v:95},{n:'Iniesta',pos:'med',v:94},
  {n:'Keita',         pos:'med',v:79},
  {n:'Messi',         pos:'del',sp:'ext',v:99},{n:'Villa',         pos:'del',sp:'dc', v:90},
  {n:'Pedro',         pos:'del',sp:'ext',v:84},
]},
{ id:'fcb-1213', eq:'FC Barcelona', t:'2012-13', j:[
  {n:'Valdés',        pos:'pt', v:86},
  {n:'Alves',         pos:'def',sp:'lb',v:87},{n:'Puyol',         pos:'def',sp:'cb',v:85},
  {n:'Piqué',         pos:'def',sp:'cb',v:88},{n:'Alba',          pos:'def',sp:'lb',v:86},
  {n:'Mascherano',    pos:'def',sp:'cb',v:84},{n:'Bartra',        pos:'def',sp:'cb',v:76},
  {n:'Busquets',      pos:'med',v:90},{n:'Xavi',           pos:'med',v:92},{n:'Iniesta',pos:'med',v:94},
  {n:'Messi',         pos:'del',sp:'ext',v:99},{n:'Villa',         pos:'del',sp:'dc', v:87},
  {n:'Pedro',         pos:'del',sp:'ext',v:82},{n:'Alexis',        pos:'del',sp:'ext',v:84},
]},
{ id:'fcb-1415', eq:'FC Barcelona', t:'2014-15', j:[
  {n:'Bravo',         pos:'pt', v:83},{n:'Ter Stegen',     pos:'pt', v:85},
  {n:'Alves',         pos:'def',sp:'lb',v:86},{n:'Piqué',         pos:'def',sp:'cb',v:87},
  {n:'Mascherano',    pos:'def',sp:'cb',v:85},{n:'Alba',          pos:'def',sp:'lb',v:86},
  {n:'Busquets',      pos:'med',v:90},{n:'Xavi',           pos:'med',v:90},{n:'Iniesta',pos:'med',v:92},
  {n:'Rakitic',       pos:'med',v:84},
  {n:'Messi',         pos:'del',sp:'ext',v:99},{n:'Suárez',        pos:'del',sp:'dc', v:95},
  {n:'Neymar',        pos:'del',sp:'ext',v:93},{n:'Pedro',         pos:'del',sp:'ext',v:82},
]},
{ id:'fcb-1617', eq:'FC Barcelona', t:'2016-17', j:[
  {n:'Ter Stegen',    pos:'pt', v:87},
  {n:'Vidal',         pos:'def',sp:'lb',v:83},{n:'Piqué',         pos:'def',sp:'cb',v:88},
  {n:'Umtiti',        pos:'def',sp:'cb',v:85},{n:'Alba',          pos:'def',sp:'lb',v:86},
  {n:'Mascherano',    pos:'def',sp:'cb',v:82},
  {n:'Busquets',      pos:'med',v:90},{n:'Iniesta',        pos:'med',v:91},{n:'Rakitic',pos:'med',v:84},
  {n:'Messi',         pos:'del',sp:'ext',v:99},{n:'Suárez',        pos:'del',sp:'dc', v:93},
  {n:'Neymar',        pos:'del',sp:'ext',v:94},{n:'Dembélé',       pos:'del',sp:'ext',v:82},
]},
{ id:'fcb-2324', eq:'FC Barcelona', t:'2023-24', j:[
  {n:'Ter Stegen',    pos:'pt', v:89},
  {n:'Cancelo',       pos:'def',sp:'lb',v:84},{n:'Koundé',        pos:'def',sp:'lb',v:86},
  {n:'Cubarsí',       pos:'def',sp:'cb',v:82},{n:'Balde',         pos:'def',sp:'lb',v:83},
  {n:'Araujo',        pos:'def',sp:'cb',v:86},{n:'Iñigo Martínez',pos:'def',sp:'cb',v:82},
  {n:'De Jong',       pos:'med',v:87},{n:'Pedri',          pos:'med',v:90},{n:'Gavi',   pos:'med',v:89},
  {n:'Fermín',        pos:'med',v:80},
  {n:'Lamine Yamal',  pos:'del',sp:'ext',v:91},{n:'Lewandowski',   pos:'del',sp:'dc', v:92},
  {n:'Raphinha',      pos:'del',sp:'ext',v:87},
]},

/* ══ ATLÉTICO DE MADRID ══ */
{ id:'atm-8788', eq:'Atlético de Madrid', t:'1987-88', j:[
  {n:'Abel',          pos:'pt', v:82},
  {n:'Tomás',         pos:'def',sp:'lb',v:75},{n:'Arteche',       pos:'def',sp:'cb',v:80},
  {n:'Ruiz',          pos:'def',sp:'cb',v:74},{n:'Landáburu',     pos:'def',sp:'lb',v:76},
  {n:'Setién',        pos:'med',v:75},{n:'Julio Prieto',   pos:'med',v:74},{n:'Mínguez',pos:'med',v:73},
  {n:'Paulo Futre',   pos:'del',sp:'ext',v:89},{n:'Baltazar',      pos:'del',sp:'dc', v:85},
  {n:'Da Silva',      pos:'del',sp:'dc', v:78},{n:'Quique',        pos:'del',sp:'ext',v:74},
]},
{ id:'atm-9596', eq:'Atlético de Madrid', t:'1995-96', j:[
  {n:'Molina',        pos:'pt', v:85},
  {n:'Solozábal',     pos:'def',sp:'cb',v:78},{n:'Geli',          pos:'def',sp:'cb',v:77},
  {n:'Toni',          pos:'def',sp:'lb',v:79},{n:'Vizcaíno',      pos:'def',sp:'lb',v:73},
  {n:'Simeone',       pos:'med',v:86},{n:'Pirri',          pos:'med',v:76},{n:'Caminero',pos:'med',v:84},
  {n:'Kiko',          pos:'del',sp:'ext',v:82},{n:'Pantic',        pos:'del',sp:'dc', v:83},
  {n:'Futre',         pos:'del',sp:'ext',v:83},{n:'Penev',         pos:'del',sp:'dc', v:80},
]},
{ id:'atm-0506', eq:'Atlético de Madrid', t:'2005-06', j:[
  {n:'Leo Franco',    pos:'pt', v:79},
  {n:'Perea',         pos:'def',sp:'cb',v:77},{n:'Agüero Luis',   pos:'def',sp:'cb',v:74},
  {n:'Domínguez',     pos:'def',sp:'lb',v:75},{n:'Antonio López', pos:'def',sp:'lb',v:76},
  {n:'Maxi Rodríguez',pos:'med',v:83},{n:'Prats',          pos:'med',v:74},{n:'Luis García',pos:'med',v:80},
  {n:'Simão',         pos:'del',sp:'ext',v:82},{n:'Fernando Torres',pos:'del',sp:'dc',v:90},
  {n:'Forlán',        pos:'del',sp:'dc', v:86},{n:'Luccin',        pos:'med',v:78},
]},
{ id:'atm-1314', eq:'Atlético de Madrid', t:'2013-14', j:[
  {n:'Courtois',      pos:'pt', v:90},
  {n:'Juanfran',      pos:'def',sp:'lb',v:82},{n:'Godín',         pos:'def',sp:'cb',v:90},
  {n:'Miranda',       pos:'def',sp:'cb',v:83},{n:'Filipe Luís',   pos:'def',sp:'lb',v:86},
  {n:'Gabi',          pos:'med',v:83},{n:'Tiago',          pos:'med',v:82},{n:'Koke',   pos:'med',v:85},
  {n:'Arda Turan',    pos:'del',sp:'ext',v:85},{n:'Diego Costa',   pos:'del',sp:'dc', v:90},
  {n:'Villa',         pos:'del',sp:'dc', v:87},{n:'Raúl García',   pos:'med',v:81},
  {n:'Mario Suárez',  pos:'med',v:77},
]},
{ id:'atm-1516', eq:'Atlético de Madrid', t:'2015-16', j:[
  {n:'Oblak',         pos:'pt', v:92},
  {n:'Juanfran',      pos:'def',sp:'lb',v:81},{n:'Godín',         pos:'def',sp:'cb',v:90},
  {n:'Savic',         pos:'def',sp:'cb',v:85},{n:'Filipe Luís',   pos:'def',sp:'lb',v:85},
  {n:'Gabi',          pos:'med',v:82},{n:'Tiago',          pos:'med',v:80},{n:'Koke',   pos:'med',v:85},
  {n:'Griezmann',     pos:'del',sp:'ext',v:90},{n:'Fernando Torres',pos:'del',sp:'dc',v:83},
  {n:'Carrasco',      pos:'del',sp:'ext',v:81},{n:'Saúl',          pos:'med',v:81},
]},
{ id:'atm-2021', eq:'Atlético de Madrid', t:'2020-21', j:[
  {n:'Oblak',         pos:'pt', v:94},
  {n:'Trippier',      pos:'def',sp:'lb',v:82},{n:'Savic',         pos:'def',sp:'cb',v:86},
  {n:'Felipe',        pos:'def',sp:'cb',v:81},{n:'Hermoso',       pos:'def',sp:'cb',v:80},
  {n:'Giménez',       pos:'def',sp:'cb',v:85},{n:'Vrsaljko',      pos:'def',sp:'lb',v:78},
  {n:'Koke',          pos:'med',v:84},{n:'Saúl',           pos:'med',v:82},{n:'Llorente',pos:'med',v:83},
  {n:'Joao Félix',    pos:'del',sp:'ext',v:87},{n:'Suárez',        pos:'del',sp:'dc', v:90},
  {n:'Correa',        pos:'del',sp:'ext',v:80},{n:'Carrasco',      pos:'del',sp:'ext',v:82},
]},

/* ══ VALENCIA CF ══ */
{ id:'val-9900', eq:'Valencia CF', t:'1999-00', j:[
  {n:'Cañizares',     pos:'pt', v:87},
  {n:'Angloma',       pos:'def',sp:'lb',v:79},{n:'Pellegrino',    pos:'def',sp:'cb',v:80},
  {n:'Djukic',        pos:'def',sp:'cb',v:77},{n:'Carboni',       pos:'def',sp:'lb',v:78},
  {n:'Baraja',        pos:'med',v:82},{n:'Mendieta',       pos:'med',v:88},{n:'Zahović',pos:'med',v:82},
  {n:'Claudio López', pos:'del',sp:'ext',v:83},{n:'Carew',         pos:'del',sp:'dc', v:80},
  {n:'Angulo',        pos:'del',sp:'ext',v:78},{n:'Kily González', pos:'del',sp:'ext',v:80},
]},
{ id:'val-0102', eq:'Valencia CF', t:'2001-02', j:[
  {n:'Cañizares',     pos:'pt', v:88},
  {n:'Ayala',         pos:'def',sp:'cb',v:84},{n:'Pellegrino',    pos:'def',sp:'cb',v:81},
  {n:'Marchena',      pos:'def',sp:'cb',v:80},{n:'Carboni',       pos:'def',sp:'lb',v:77},
  {n:'Angloma',       pos:'def',sp:'lb',v:77},
  {n:'Albelda',       pos:'med',v:84},{n:'Baraja',         pos:'med',v:83},{n:'Vicente',pos:'med',v:83},
  {n:'Aimar',         pos:'del',sp:'ext',v:87},{n:'Mista',         pos:'del',sp:'dc', v:80},
  {n:'Angulo',        pos:'del',sp:'ext',v:79},{n:'Rufete',        pos:'del',sp:'ext',v:77},
]},
{ id:'val-0304', eq:'Valencia CF', t:'2003-04', j:[
  {n:'Cañizares',     pos:'pt', v:87},
  {n:'Ayala',         pos:'def',sp:'cb',v:83},{n:'Marchena',      pos:'def',sp:'cb',v:81},
  {n:'Albiol',        pos:'def',sp:'cb',v:78},{n:'Carboni',       pos:'def',sp:'lb',v:76},
  {n:'Angloma',       pos:'def',sp:'lb',v:75},
  {n:'Albelda',       pos:'med',v:84},{n:'Baraja',         pos:'med',v:84},{n:'Vicente',pos:'med',v:83},
  {n:'Aimar',         pos:'del',sp:'ext',v:86},{n:'Mista',         pos:'del',sp:'dc', v:81},
  {n:'Villa',         pos:'del',sp:'dc', v:82},{n:'Angulo',        pos:'del',sp:'ext',v:78},
]},
{ id:'val-1920', eq:'Valencia CF', t:'2019-20', j:[
  {n:'Cillessen',     pos:'pt', v:83},
  {n:'Wass',          pos:'def',sp:'lb',v:80},{n:'Diakhaby',      pos:'def',sp:'cb',v:79},
  {n:'Garay',         pos:'def',sp:'cb',v:80},{n:'Gayà',          pos:'def',sp:'lb',v:84},
  {n:'Kondogbia',     pos:'med',v:82},{n:'Parejo',         pos:'med',v:87},{n:'Soler',  pos:'med',v:82},
  {n:'Ferran Torres', pos:'del',sp:'ext',v:83},{n:'Rodrigo',       pos:'del',sp:'dc', v:85},
  {n:'Gameiro',       pos:'del',sp:'dc', v:81},{n:'Guedes',        pos:'del',sp:'ext',v:82},
]},

/* ══ SEVILLA FC ══ */
{ id:'sev-0506', eq:'Sevilla FC', t:'2005-06', j:[
  {n:'Palop',         pos:'pt', v:82},
  {n:'Alves',         pos:'def',sp:'lb',v:86},{n:'Escudé',        pos:'def',sp:'cb',v:80},
  {n:'Dragutinovic',  pos:'def',sp:'cb',v:78},{n:'Adriano',       pos:'def',sp:'lb',v:80},
  {n:'Maresca',       pos:'med',v:81},{n:'Poulsen',        pos:'med',v:79},{n:'Renato',pos:'med',v:77},
  {n:'Saviola',       pos:'del',sp:'ext',v:82},{n:'Kanoute',       pos:'del',sp:'dc', v:85},
  {n:'Navas',         pos:'del',sp:'ext',v:83},{n:'Luis Fabiano',  pos:'del',sp:'dc', v:84},
]},
{ id:'sev-0910', eq:'Sevilla FC', t:'2009-10', j:[
  {n:'Palop',         pos:'pt', v:82},
  {n:'Konko',         pos:'def',sp:'lb',v:76},{n:'Squillaci',     pos:'def',sp:'cb',v:79},
  {n:'Lolo',          pos:'def',sp:'cb',v:76},{n:'Adriano',       pos:'def',sp:'lb',v:80},
  {n:'Zokora',        pos:'med',v:79},{n:'Romaric',        pos:'med',v:77},{n:'Capel',  pos:'med',v:78},
  {n:'Jesús Navas',   pos:'del',sp:'ext',v:84},{n:'Luis Fabiano',  pos:'del',sp:'dc', v:86},
  {n:'Negredo',       pos:'del',sp:'dc', v:83},{n:'Kanoute',       pos:'del',sp:'dc', v:83},
]},
{ id:'sev-1516', eq:'Sevilla FC', t:'2015-16', j:[
  {n:'Sergio Rico',   pos:'pt', v:79},
  {n:'Coke',          pos:'def',sp:'lb',v:76},{n:'Rami',          pos:'def',sp:'cb',v:79},
  {n:'Carriço',       pos:'def',sp:'cb',v:78},{n:'Tremoulinas',   pos:'def',sp:'lb',v:76},
  {n:'Krychowiak',    pos:'med',v:83},{n:'Banega',         pos:'med',v:84},{n:"N'Zonzi",pos:'med',v:82},
  {n:'Vitolo',        pos:'del',sp:'ext',v:83},{n:'Gameiro',       pos:'del',sp:'dc', v:84},
  {n:'Reyes',         pos:'del',sp:'ext',v:79},{n:'Mariano',       pos:'del',sp:'dc', v:76},
]},
{ id:'sev-2021', eq:'Sevilla FC', t:'2020-21', j:[
  {n:'Bono',          pos:'pt', v:85},
  {n:'Jesús Navas',   pos:'def',sp:'lb',v:79},{n:'Diego Carlos',  pos:'def',sp:'cb',v:83},
  {n:'Koundé',        pos:'def',sp:'cb',v:87},{n:'Acuña',         pos:'def',sp:'lb',v:82},
  {n:'Fernando',      pos:'med',v:82},{n:'Joan Jordán',    pos:'med',v:79},{n:'Rakitic',pos:'med',v:83},
  {n:'Suso',          pos:'del',sp:'ext',v:79},{n:"En-Nesyri",     pos:'del',sp:'dc', v:82},
  {n:'Ocampos',       pos:'del',sp:'ext',v:83},{n:'De Jong Luuk',  pos:'del',sp:'dc', v:79},
]},

/* ══ ATHLETIC CLUB ══ */
{ id:'ath-8384', eq:'Athletic Club', t:'1983-84', j:[
  {n:'Zubizarreta',   pos:'pt', v:89},
  {n:'Urquiaga',      pos:'def',sp:'lb',v:76},{n:'Andrinua',      pos:'def',sp:'cb',v:78},
  {n:'Liceranzu',     pos:'def',sp:'cb',v:75},{n:'De Andrés',     pos:'def',sp:'lb',v:74},
  {n:'Txetxu Rojo',   pos:'def',sp:'cb',v:77},
  {n:'Dani',          pos:'med',v:80},{n:'Rojo I',         pos:'med',v:82},{n:'Sarabia',pos:'med',v:79},
  {n:'Endika',        pos:'del',sp:'ext',v:80},{n:'Sola',          pos:'del',sp:'dc', v:83},
  {n:'Goikoetxea',    pos:'del',sp:'dc', v:85},{n:'Rojo II',       pos:'del',sp:'ext',v:76},
]},
{ id:'ath-0102', eq:'Athletic Club', t:'2001-02', j:[
  {n:'Lafuente',      pos:'pt', v:77},
  {n:'Larrazábal',    pos:'def',sp:'lb',v:75},{n:'Gurpegi',       pos:'def',sp:'cb',v:78},
  {n:'Del Solar',     pos:'def',sp:'cb',v:74},{n:'Iraola',        pos:'def',sp:'lb',v:79},
  {n:'Orbaiz',        pos:'med',v:76},{n:'Alonso',         pos:'med',v:80},{n:'San José',pos:'med',v:76},
  {n:'Etxeberria',    pos:'del',sp:'ext',v:82},{n:'Yeste',         pos:'del',sp:'ext',v:79},
  {n:'Urzaiz',        pos:'del',sp:'dc', v:82},{n:'Aduriz',        pos:'del',sp:'dc', v:80},
]},
{ id:'ath-1213', eq:'Athletic Club', t:'2012-13', j:[
  {n:'Iraizoz',       pos:'pt', v:80},
  {n:'De Marcos',     pos:'def',sp:'lb',v:79},{n:'Gurpegi',       pos:'def',sp:'cb',v:78},
  {n:'Laporte',       pos:'def',sp:'cb',v:84},{n:'Aurtenetxe',    pos:'def',sp:'lb',v:76},
  {n:'Iturraspe',     pos:'med',v:79},{n:'Ander Herrera',  pos:'med',v:83},{n:'Javi Martínez',pos:'med',v:85},
  {n:'Muniain',       pos:'del',sp:'ext',v:82},{n:'Llorente',      pos:'del',sp:'dc', v:86},
  {n:'Susaeta',       pos:'del',sp:'ext',v:79},{n:'Toquero',       pos:'del',sp:'ext',v:76},
]},
{ id:'ath-2324', eq:'Athletic Club', t:'2023-24', j:[
  {n:'Agirrezabala',  pos:'pt', v:79},
  {n:'De Marcos',     pos:'def',sp:'lb',v:78},{n:'Vivian',        pos:'def',sp:'cb',v:80},
  {n:'Paredes',       pos:'def',sp:'cb',v:79},{n:'Berchiche',     pos:'def',sp:'lb',v:78},
  {n:'Vesga',         pos:'med',v:79},{n:'Prados',         pos:'med',v:80},{n:'Unai Gómez',pos:'med',v:77},
  {n:'Sancet',        pos:'del',sp:'ext',v:82},{n:'Williams Iñaki',pos:'del',sp:'ext',v:85},
  {n:'Williams Nico', pos:'del',sp:'ext',v:84},{n:'Guruzeta',      pos:'del',sp:'dc', v:80},
]},

/* ══ REAL SOCIEDAD ══ */
{ id:'rso-8182', eq:'Real Sociedad', t:'1981-82', j:[
  {n:'Arconada',      pos:'pt', v:90},
  {n:'Murillo',       pos:'def',sp:'lb',v:76},{n:'Górriz',        pos:'def',sp:'cb',v:79},
  {n:'Olaizola',      pos:'def',sp:'cb',v:76},{n:'Lasa',          pos:'def',sp:'lb',v:74},
  {n:'Zamora',        pos:'med',v:79},{n:'Kortabarría',    pos:'med',v:77},{n:'Alonso', pos:'med',v:81},
  {n:'Satrústegui',   pos:'del',sp:'dc', v:84},{n:'Uralde',        pos:'del',sp:'dc', v:79},
  {n:'Celayeta',      pos:'del',sp:'ext',v:77},{n:'Txiki',         pos:'del',sp:'ext',v:75},
]},
{ id:'rso-0203', eq:'Real Sociedad', t:'2002-03', j:[
  {n:'Aranzubia',     pos:'pt', v:79},
  {n:'Aramburu',      pos:'def',sp:'lb',v:76},{n:'Schürrer',      pos:'def',sp:'cb',v:78},
  {n:'Jauregi',       pos:'def',sp:'cb',v:75},{n:'Larrañaga',     pos:'def',sp:'lb',v:74},
  {n:'Xabi Alonso',   pos:'med',v:90},{n:'De Pedro',       pos:'med',v:79},{n:'Gabilondo',pos:'med',v:76},
  {n:'Karpin',        pos:'del',sp:'ext',v:82},{n:'Nihat',         pos:'del',sp:'dc', v:85},
  {n:'Kovacevic',     pos:'del',sp:'dc', v:83},{n:'Arteaga',       pos:'del',sp:'ext',v:77},
]},
{ id:'rso-1314', eq:'Real Sociedad', t:'2013-14', j:[
  {n:'Bravo',         pos:'pt', v:84},
  {n:'Carlos Martínez',pos:'def',sp:'lb',v:76},{n:'Mikel González',pos:'def',sp:'cb',v:78},
  {n:'Ansotegi',      pos:'def',sp:'cb',v:76},{n:'De la Bella',   pos:'def',sp:'lb',v:77},
  {n:'Zurutuza',      pos:'med',v:77},{n:'Granero',        pos:'med',v:79},{n:'Markel Bergara',pos:'med',v:76},
  {n:'Griezmann',     pos:'del',sp:'ext',v:85},{n:'Vela',          pos:'del',sp:'ext',v:83},
  {n:'Agirretxe',     pos:'del',sp:'dc', v:78},{n:'Prieto',        pos:'med',v:75},
]},
{ id:'rso-2223', eq:'Real Sociedad', t:'2022-23', j:[
  {n:'Remiro',        pos:'pt', v:83},
  {n:'Gorosabel',     pos:'def',sp:'lb',v:78},{n:'Le Normand',    pos:'def',sp:'cb',v:83},
  {n:'Zubeldia',      pos:'def',sp:'cb',v:79},{n:'Monreal',       pos:'def',sp:'lb',v:77},
  {n:'Zubimendi',     pos:'med',v:84},{n:'Merino',         pos:'med',v:83},{n:'Silva D.',pos:'med',v:87},
  {n:'Oyarzabal',     pos:'del',sp:'ext',v:85},{n:'Sørloth',       pos:'del',sp:'dc', v:82},
  {n:'Kubo',          pos:'del',sp:'ext',v:82},{n:'Brais Méndez',  pos:'del',sp:'ext',v:80},
]},

/* ══ DEPORTIVO LA CORUÑA ══ */
{ id:'dep-9900', eq:'Deportivo La Coruña', t:'1999-00', j:[
  {n:'Molina',        pos:'pt', v:86},
  {n:'Manuel Pablo',  pos:'def',sp:'lb',v:80},{n:'Naybet',        pos:'def',sp:'cb',v:83},
  {n:'Donato',        pos:'def',sp:'cb',v:80},{n:'Capdevila',     pos:'def',sp:'lb',v:81},
  {n:'Jorge Andrade', pos:'def',sp:'cb',v:81},{n:'Scaloni',       pos:'def',sp:'lb',v:75},
  {n:'Mauro Silva',   pos:'med',v:82},{n:'Fran',           pos:'med',v:82},{n:'Djalminha',pos:'med',v:87},
  {n:'Emerson',       pos:'med',v:83},
  {n:'Makaay',        pos:'del',sp:'dc', v:88},{n:'Tristán',       pos:'del',sp:'dc', v:84},
  {n:'Bebeto',        pos:'del',sp:'dc', v:87},{n:'Víctor',        pos:'del',sp:'dc', v:82},
]},
{ id:'dep-0001', eq:'Deportivo La Coruña', t:'2000-01', j:[
  {n:'Molina',        pos:'pt', v:87},
  {n:'Manuel Pablo',  pos:'def',sp:'lb',v:81},{n:'Naybet',        pos:'def',sp:'cb',v:84},
  {n:'Donato',        pos:'def',sp:'cb',v:79},{n:'Capdevila',     pos:'def',sp:'lb',v:82},
  {n:'Jorge Andrade', pos:'def',sp:'cb',v:81},
  {n:'Mauro Silva',   pos:'med',v:83},{n:'Fran',           pos:'med',v:83},{n:'Emerson',pos:'med',v:84},
  {n:'Djalminha',     pos:'med',v:86},
  {n:'Makaay',        pos:'del',sp:'dc', v:89},{n:'Tristán',       pos:'del',sp:'dc', v:85},
  {n:'Víctor',        pos:'del',sp:'dc', v:83},
]},
{ id:'dep-0304', eq:'Deportivo La Coruña', t:'2003-04', j:[
  {n:'Molina',        pos:'pt', v:85},
  {n:'Manuel Pablo',  pos:'def',sp:'lb',v:80},{n:'Naybet',        pos:'def',sp:'cb',v:82},
  {n:'Jorge Andrade', pos:'def',sp:'cb',v:82},{n:'Capdevila',     pos:'def',sp:'lb',v:81},
  {n:'Mauro Silva',   pos:'med',v:81},{n:'Valerón',        pos:'med',v:86},{n:'Sergio',pos:'med',v:78},
  {n:'Pandiani',      pos:'del',sp:'dc', v:81},{n:'Tristán',       pos:'del',sp:'dc', v:84},
  {n:'Albert Luque',  pos:'del',sp:'ext',v:79},{n:'Duscher',       pos:'med',v:78},
]},

/* ══ VILLARREAL CF ══ */
{ id:'vil-0506', eq:'Villarreal CF', t:'2005-06', j:[
  {n:'Barbosa',       pos:'pt', v:78},
  {n:'Belletti',      pos:'def',sp:'lb',v:78},{n:'Quique Álvarez',pos:'def',sp:'cb',v:77},
  {n:'Rodríguez',     pos:'def',sp:'cb',v:75},{n:'Sorin',         pos:'def',sp:'lb',v:80},
  {n:'Marcos Senna',  pos:'med',v:83},{n:'Josico',         pos:'med',v:78},{n:'Cazorla',pos:'med',v:85},
  {n:'Riquelme',      pos:'del',sp:'ext',v:90},{n:'Forlán',        pos:'del',sp:'dc', v:87},
  {n:'Pires',         pos:'del',sp:'ext',v:86},{n:'Figueroa',      pos:'del',sp:'ext',v:76},
]},
{ id:'vil-0809', eq:'Villarreal CF', t:'2008-09', j:[
  {n:'Viera',         pos:'pt', v:76},
  {n:'Godin',         pos:'def',sp:'cb',v:82},{n:'Quique Álvarez',pos:'def',sp:'cb',v:76},
  {n:'Capdevila',     pos:'def',sp:'lb',v:81},{n:'Armini',        pos:'def',sp:'lb',v:74},
  {n:'Marcos Senna',  pos:'med',v:82},{n:'Cazorla',        pos:'med',v:86},{n:'Cani',   pos:'med',v:78},
  {n:'Rossi',         pos:'del',sp:'dc', v:84},{n:'Nihat',         pos:'del',sp:'dc', v:82},
  {n:'Llorente',      pos:'del',sp:'dc', v:82},{n:'Senna',         pos:'med',v:82},
]},
{ id:'vil-2122', eq:'Villarreal CF', t:'2021-22', j:[
  {n:'Rulli',         pos:'pt', v:80},
  {n:'Foyth',         pos:'def',sp:'lb',v:78},{n:'Albiol',        pos:'def',sp:'cb',v:83},
  {n:'Pau Torres',    pos:'def',sp:'cb',v:84},{n:'Pedraza',       pos:'def',sp:'lb',v:79},
  {n:'Parejo',        pos:'med',v:85},{n:'Capoue',         pos:'med',v:80},{n:'Trigueros',pos:'med',v:78},
  {n:'Morales',       pos:'del',sp:'ext',v:80},{n:'Gerard Moreno', pos:'del',sp:'dc', v:87},
  {n:'Danjuma',       pos:'del',sp:'ext',v:82},{n:'Lo Celso',      pos:'med',v:80},
]},

/* ══ CELTA DE VIGO ══ */
{ id:'cel-9899', eq:'Celta de Vigo', t:'1998-99', j:[
  {n:'Pinto',         pos:'pt', v:79},
  {n:'Velasco',       pos:'def',sp:'lb',v:76},{n:'Berizzo',       pos:'def',sp:'cb',v:79},
  {n:'Míchel Salgado',pos:'def',sp:'lb',v:83},{n:'Juanfran',      pos:'def',sp:'lb',v:77},
  {n:'Revivo',        pos:'med',v:81},{n:'Luccin',         pos:'med',v:80},{n:'Edu Coudet',pos:'med',v:79},
  {n:'Mostovoi',      pos:'del',sp:'ext',v:85},{n:'Catanha',       pos:'del',sp:'dc', v:82},
  {n:'Karpin',        pos:'del',sp:'ext',v:83},{n:'Valerón',       pos:'del',sp:'ext',v:85},
]},
{ id:'cel-0001', eq:'Celta de Vigo', t:'2000-01', j:[
  {n:'Pinto',         pos:'pt', v:79},
  {n:'Velasco',       pos:'def',sp:'lb',v:76},{n:'Berizzo',       pos:'def',sp:'cb',v:79},
  {n:'Míchel Salgado',pos:'def',sp:'lb',v:83},{n:'Juanfran',      pos:'def',sp:'lb',v:77},
  {n:'Luccin',        pos:'med',v:80},{n:'Revivo',         pos:'med',v:81},{n:'Edu Coudet',pos:'med',v:79},
  {n:'Karpin',        pos:'del',sp:'ext',v:83},{n:'Mostovoi',      pos:'del',sp:'ext',v:85},
  {n:'Catanha',       pos:'del',sp:'dc', v:82},{n:'Valerón',       pos:'del',sp:'ext',v:86},
]},
{ id:'cel-1516', eq:'Celta de Vigo', t:'2015-16', j:[
  {n:'Sergio Álvarez',pos:'pt', v:78},
  {n:'Hugo Mallo',    pos:'def',sp:'lb',v:79},{n:'Roncaglia',     pos:'def',sp:'cb',v:77},
  {n:'Cabral',        pos:'def',sp:'cb',v:78},{n:'Jonny',         pos:'def',sp:'lb',v:79},
  {n:'Radoja',        pos:'med',v:77},{n:'Wass',           pos:'med',v:80},{n:'Bongonda',pos:'med',v:77},
  {n:'Nolito',        pos:'del',sp:'ext',v:84},{n:'Iago Aspas',    pos:'del',sp:'dc', v:88},
  {n:'Orellana',      pos:'del',sp:'ext',v:79},{n:'Sisto',         pos:'del',sp:'ext',v:78},
]},

/* ══ REAL BETIS ══ */
{ id:'bet-9495', eq:'Real Betis', t:'1994-95', j:[
  {n:'Lopetegui',     pos:'pt', v:76},
  {n:'Merino',        pos:'def',sp:'lb',v:76},{n:'Cañas',         pos:'def',sp:'cb',v:74},
  {n:'Vidaña',        pos:'def',sp:'cb',v:74},{n:'Espino',        pos:'def',sp:'lb',v:73},
  {n:'Poyet',         pos:'med',v:83},{n:'Finidi',         pos:'med',v:84},{n:'Alexis',pos:'med',v:80},
  {n:'Alfonso',       pos:'del',sp:'ext',v:82},{n:'Solano',        pos:'del',sp:'ext',v:79},
  {n:'Iza',           pos:'del',sp:'dc', v:77},{n:'Enguía',        pos:'del',sp:'dc', v:76},
]},
{ id:'bet-0405', eq:'Real Betis', t:'2004-05', j:[
  {n:'Toni Prats',    pos:'pt', v:78},
  {n:'Juanito',       pos:'def',sp:'lb',v:78},{n:'Assunção',      pos:'def',sp:'cb',v:79},
  {n:'Arzu',          pos:'def',sp:'cb',v:76},{n:'Rivas',         pos:'def',sp:'lb',v:75},
  {n:'Dani',          pos:'med',v:78},{n:'Oliveira',       pos:'med',v:82},{n:'Edu',    pos:'med',v:79},
  {n:'Joaquín',       pos:'del',sp:'ext',v:84},{n:'Varela',        pos:'del',sp:'dc', v:78},
  {n:'Fernando',      pos:'del',sp:'dc', v:77},{n:'Mark González', pos:'del',sp:'ext',v:77},
]},
{ id:'bet-2122', eq:'Real Betis', t:'2021-22', j:[
  {n:'Rui Silva',     pos:'pt', v:80},
  {n:'Bellerín',      pos:'def',sp:'lb',v:79},{n:'Víctor Ruiz',   pos:'def',sp:'cb',v:78},
  {n:'Bartra',        pos:'def',sp:'cb',v:79},{n:'Álex Moreno',   pos:'def',sp:'lb',v:80},
  {n:'Guardado',      pos:'med',v:80},{n:'Canales',        pos:'med',v:83},{n:'William Carvalho',pos:'med',v:82},
  {n:'Juanmi',        pos:'del',sp:'ext',v:79},{n:'Borja Iglesias',pos:'del',sp:'dc', v:82},
  {n:'Fekir',         pos:'del',sp:'ext',v:85},{n:'Joaquín',       pos:'del',sp:'ext',v:80},
]},

/* ══ MÁLAGA CF ══ */
{ id:'mal-1213', eq:'Málaga CF', t:'2012-13', j:[
  {n:'Caballero',     pos:'pt', v:82},
  {n:'Weligton',      pos:'def',sp:'cb',v:79},{n:'Demichelis',    pos:'def',sp:'cb',v:81},
  {n:'Álvaro Domínguez',pos:'def',sp:'cb',v:78},{n:'Monreal',     pos:'def',sp:'lb',v:82},
  {n:'Portillo',      pos:'med',v:77},{n:'Isco',           pos:'med',v:87},{n:'Baptista',pos:'med',v:78},
  {n:'Cazorla',       pos:'del',sp:'ext',v:88},{n:'Rondón',        pos:'del',sp:'dc', v:80},
  {n:'Santa Cruz',    pos:'del',sp:'dc', v:79},{n:'Buonanotte',    pos:'del',sp:'ext',v:77},
]},

/* ══ REAL ZARAGOZA ══ */
{ id:'zar-9495', eq:'Real Zaragoza', t:'1994-95', j:[
  {n:'Cedrún',        pos:'pt', v:80},
  {n:'Solana',        pos:'def',sp:'lb',v:76},{n:'Belsué',        pos:'def',sp:'cb',v:77},
  {n:'Aguado',        pos:'def',sp:'cb',v:75},{n:'Higuera',       pos:'def',sp:'lb',v:74},
  {n:'Nayim',         pos:'med',v:82},{n:'Poyet',          pos:'med',v:82},{n:'Cáceres',pos:'med',v:79},
  {n:'Esnáider',      pos:'del',sp:'dc', v:80},{n:'Pardeza',       pos:'del',sp:'dc', v:78},
  {n:'Aragón',        pos:'del',sp:'ext',v:76},{n:'Toni',          pos:'del',sp:'dc', v:77},
]},
{ id:'zar-0102', eq:'Real Zaragoza', t:'2001-02', j:[
  {n:'Doblas',        pos:'pt', v:76},
  {n:'Ólivier',       pos:'def',sp:'lb',v:74},{n:'Carlos Cuéllar', pos:'def',sp:'cb',v:78},
  {n:'Belsué',        pos:'def',sp:'cb',v:75},{n:'Yordi',         pos:'def',sp:'lb',v:73},
  {n:'Cani',          pos:'med',v:78},{n:'Dani Mallo',     pos:'med',v:76},{n:'Xavi Roca',pos:'med',v:75},
  {n:'Jamelli',       pos:'del',sp:'dc', v:78},{n:'Yordi Vidal',   pos:'del',sp:'dc', v:77},
  {n:'Movilla',       pos:'del',sp:'ext',v:76},{n:'Luciano',       pos:'med',v:74},
]},

/* ══ OSASUNA ══ */
{ id:'osa-0506', eq:'Osasuna', t:'2005-06', j:[
  {n:'Sanzol',        pos:'pt', v:77},
  {n:'Corrales',      pos:'def',sp:'lb',v:75},{n:'Javi García',   pos:'def',sp:'cb',v:79},
  {n:'Cruchaga',      pos:'def',sp:'cb',v:76},{n:'Ronan',         pos:'def',sp:'lb',v:74},
  {n:'Puñal',         pos:'med',v:79},{n:'Nekounam',       pos:'med',v:80},{n:'Losada',pos:'med',v:76},
  {n:'Pandiani',      pos:'del',sp:'dc', v:80},{n:'Milosevic',    pos:'del',sp:'dc', v:79},
  {n:'Juanfran',      pos:'del',sp:'ext',v:76},{n:'Valdo',        pos:'med',v:75},
]},
{ id:'osa-0708', eq:'Osasuna', t:'2007-08', j:[
  {n:'Sanzol',        pos:'pt', v:76},
  {n:'Corrales',      pos:'def',sp:'lb',v:75},{n:'Javi García',   pos:'def',sp:'cb',v:80},
  {n:'Cruchaga',      pos:'def',sp:'cb',v:76},{n:'Rolan',         pos:'def',sp:'lb',v:74},
  {n:'Puñal',         pos:'med',v:79},{n:'Nekounam',       pos:'med',v:81},{n:'Cano',   pos:'med',v:76},
  {n:'Pandiani',      pos:'del',sp:'dc', v:79},{n:'Milosevic',    pos:'del',sp:'dc', v:78},
  {n:'Aranda',        pos:'del',sp:'ext',v:76},{n:'Plasil',       pos:'med',v:77},
]},

/* ══ ESPANYOL ══ */
{ id:'esp-0607', eq:'RCD Espanyol', t:'2006-07', j:[
  {n:'Kameni',        pos:'pt', v:82},
  {n:'Pochettino',    pos:'def',sp:'cb',v:74},{n:'Jarque',        pos:'def',sp:'cb',v:77},
  {n:'Luis García',   pos:'def',sp:'lb',v:76},{n:'Zabaleta',      pos:'def',sp:'lb',v:80},
  {n:'De la Peña',    pos:'med',v:82},{n:'Rufete',         pos:'med',v:78},{n:'Jonatas',pos:'med',v:76},
  {n:'Tamudo',        pos:'del',sp:'dc', v:80},{n:'Pandiani',     pos:'del',sp:'dc', v:79},
  {n:'Ito',           pos:'del',sp:'ext',v:75},{n:'Seriaki',      pos:'med',v:74},
]},
{ id:'esp-2223', eq:'RCD Espanyol', t:'2022-23', j:[
  {n:'Lecomte',       pos:'pt', v:76},
  {n:'Cabrera',       pos:'def',sp:'cb',v:75},{n:'Sergi Gómez',   pos:'def',sp:'cb',v:76},
  {n:'Pedrosa',       pos:'def',sp:'lb',v:76},{n:'Óscar Gil',     pos:'def',sp:'lb',v:77},
  {n:'Edu Expósito',  pos:'med',v:77},{n:'Puado',          pos:'med',v:75},{n:'Darder', pos:'med',v:78},
  {n:'Joselu',        pos:'del',sp:'dc', v:79},{n:'Vinicius del',  pos:'del',sp:'ext',v:76},
  {n:'Braithwaite',   pos:'del',sp:'dc', v:78},{n:'Melamed',       pos:'del',sp:'ext',v:75},
]},

/* ══ RACING DE SANTANDER ══ */
{ id:'rac-0809', eq:'Racing de Santander', t:'2008-09', j:[
  {n:'Toño',          pos:'pt', v:79},
  {n:'Christian',     pos:'def',sp:'lb',v:76},{n:'Munitis',       pos:'def',sp:'lb',v:75},
  {n:'Braaten',       pos:'def',sp:'cb',v:75},{n:'Moisés',        pos:'def',sp:'cb',v:74},
  {n:'Serrano',       pos:'med',v:75},{n:'Colsa',          pos:'med',v:78},{n:'Tchité',pos:'med',v:77},
  {n:'Zigic',         pos:'del',sp:'dc', v:78},{n:'Tote',          pos:'del',sp:'dc', v:76},
  {n:'Xisco',         pos:'del',sp:'dc', v:75},{n:'Diego Pérez',   pos:'med',v:74},
]},

/* ══ TENERIFE ══ */
{ id:'ten-9394', eq:'Tenerife', t:'1993-94', j:[
  {n:'Ojeda',         pos:'pt', v:77},
  {n:'Del Solar',     pos:'def',sp:'cb',v:76},{n:'Bolaños',       pos:'def',sp:'cb',v:75},
  {n:'Toño',          pos:'def',sp:'lb',v:74},{n:'Gotor',         pos:'def',sp:'lb',v:73},
  {n:'Pizzi',         pos:'med',v:81},{n:'Fuentes',        pos:'med',v:76},{n:'Caminero',pos:'med',v:79},
  {n:'Arencibia',     pos:'del',sp:'dc', v:78},{n:'Herzog',        pos:'del',sp:'dc', v:79},
  {n:'Abel',          pos:'del',sp:'dc', v:77},{n:'Pašić',         pos:'del',sp:'ext',v:76},
]},
{ id:'ten-9596', eq:'Tenerife', t:'1995-96', j:[
  {n:'Ojeda',         pos:'pt', v:76},
  {n:'Del Solar',     pos:'def',sp:'cb',v:75},{n:'Bolaños',       pos:'def',sp:'cb',v:74},
  {n:'Toño',          pos:'def',sp:'lb',v:74},{n:'Gotor',         pos:'def',sp:'lb',v:73},
  {n:'Pizzi',         pos:'med',v:80},{n:'Caminero',       pos:'med',v:78},{n:'Fuentes',pos:'med',v:75},
  {n:'Arencibia',     pos:'del',sp:'dc', v:77},{n:'Abel',          pos:'del',sp:'dc', v:76},
  {n:'Aguilera',      pos:'del',sp:'ext',v:75},{n:'Llorente',      pos:'med',v:74},
]},

/* ══ SPORTING DE GIJÓN ══ */
{ id:'spo-8182', eq:'Sporting de Gijón', t:'1981-82', j:[
  {n:'Aranzana',      pos:'pt', v:75},
  {n:'Ablanedo',      pos:'def',sp:'cb',v:75},{n:'Ferreira',      pos:'def',sp:'cb',v:74},
  {n:'Maceda',        pos:'def',sp:'lb',v:76},{n:'Herrero',       pos:'def',sp:'lb',v:73},
  {n:'Ángel',         pos:'med',v:76},{n:'Ciriaco',        pos:'med',v:75},{n:'Martínez',pos:'med',v:74},
  {n:'Quini',         pos:'del',sp:'dc', v:88},{n:'Castro',        pos:'del',sp:'dc', v:76},
  {n:'Cundi',         pos:'del',sp:'ext',v:74},{n:'Pola',          pos:'med',v:73},
]},
{ id:'spo-0809', eq:'Sporting de Gijón', t:'2008-09', j:[
  {n:'Juan Pablo',    pos:'pt', v:77},
  {n:'Lora',          pos:'def',sp:'lb',v:75},{n:'Carmelo',       pos:'def',sp:'cb',v:74},
  {n:'Ónega',         pos:'def',sp:'cb',v:76},{n:'Diego Camacho', pos:'def',sp:'lb',v:74},
  {n:'Jony',          pos:'med',v:75},{n:'Mandía',         pos:'med',v:76},{n:'Bilic',  pos:'med',v:77},
  {n:'Diego Castro',  pos:'del',sp:'ext',v:79},{n:'Peleteiro',    pos:'del',sp:'dc', v:76},
  {n:'Lolo',          pos:'del',sp:'dc', v:75},{n:'Jordi González',pos:'med',v:74},
]},

/* ══ GIRONA FC ══ */
{ id:'gir-2223', eq:'Girona FC', t:'2022-23', j:[
  {n:'Juan Carlos',   pos:'pt', v:79},
  {n:'Arnau Martínez',pos:'def',sp:'lb',v:79},{n:'David López',   pos:'def',sp:'cb',v:79},
  {n:'Santi Bueno',   pos:'def',sp:'cb',v:77},{n:'Miguel Gutiérrez',pos:'def',sp:'lb',v:80},
  {n:'Aleix García',  pos:'med',v:82},{n:'Yangel Herrera', pos:'med',v:80},{n:'Romeu',  pos:'med',v:78},
  {n:'Savio',         pos:'del',sp:'ext',v:82},{n:'Stuani',        pos:'del',sp:'dc', v:80},
  {n:'Taty Castellanos',pos:'del',sp:'dc',v:83},{n:'Tsygankov',    pos:'del',sp:'ext',v:79},
]},

/* ══ GETAFE CF ══ */
{ id:'get-0708', eq:'Getafe CF', t:'2007-08', j:[
  {n:'Codina',        pos:'pt', v:76},
  {n:'Contra',        pos:'def',sp:'lb',v:77},{n:'Belenguer',     pos:'def',sp:'cb',v:75},
  {n:'Licht',         pos:'def',sp:'cb',v:74},{n:'De la Red',     pos:'def',sp:'lb',v:76},
  {n:'Casquero',      pos:'med',v:77},{n:'Celestini',      pos:'med',v:78},{n:'Albín',  pos:'med',v:77},
  {n:'Pachón',        pos:'del',sp:'ext',v:76},{n:'Uche',          pos:'del',sp:'dc', v:78},
  {n:'Güiza',         pos:'del',sp:'dc', v:82},{n:'Gavilán',       pos:'med',v:75},
]},

/* ══ RAYO VALLECANO ══ */
{ id:'ray-0102', eq:'Rayo Vallecano', t:'2001-02', j:[
  {n:'Óscar',         pos:'pt', v:74},
  {n:'Míchel',        pos:'def',sp:'lb',v:73},{n:'Trujillo',      pos:'def',sp:'cb',v:74},
  {n:'Nacho',         pos:'def',sp:'cb',v:73},{n:'Amaya',         pos:'def',sp:'lb',v:73},
  {n:'Iraola',        pos:'med',v:74},{n:'Galán',          pos:'med',v:74},{n:'Rubén Gil',pos:'med',v:73},
  {n:'Alberto',       pos:'del',sp:'dc', v:76},{n:'Bolo',          pos:'del',sp:'dc', v:75},
  {n:'Tamayo',        pos:'del',sp:'ext',v:74},{n:'Quique de Lucas',pos:'med',v:73},
]},

/* ══ LAS PALMAS ══ */
{ id:'lpa-8485', eq:'Las Palmas', t:'1984-85', j:[
  {n:'Abellana',      pos:'pt', v:74},
  {n:'Tonono',        pos:'def',sp:'lb',v:74},{n:'Déniz',         pos:'def',sp:'cb',v:75},
  {n:'Oviedo',        pos:'def',sp:'cb',v:74},{n:'Planas',        pos:'def',sp:'lb',v:73},
  {n:'Roberto Fernández',pos:'med',v:78},{n:'Martínez',      pos:'med',v:74},{n:'Rodríguez',pos:'med',v:73},
  {n:'Macizo',        pos:'del',sp:'dc', v:76},{n:'Páez',          pos:'del',sp:'dc', v:75},
  {n:'Trujillo',      pos:'del',sp:'ext',v:74},{n:'López Ufarte',  pos:'del',sp:'ext',v:76},
]},

/* ══ LEVANTE UD ══ */
{ id:'lev-1112', eq:'Levante UD', t:'2011-12', j:[
  {n:'Munúa',         pos:'pt', v:78},
  {n:'Juanfran',      pos:'def',sp:'lb',v:76},{n:'Ballesteros',   pos:'def',sp:'cb',v:77},
  {n:'Martí',         pos:'def',sp:'cb',v:75},{n:'Míchel',        pos:'def',sp:'lb',v:74},
  {n:'Rubén García',  pos:'med',v:76},{n:'Caicedo',        pos:'med',v:77},{n:'Juanlu',pos:'med',v:75},
  {n:'Obafemi Martins',pos:'del',sp:'dc',v:81},{n:'Barkero',       pos:'del',sp:'ext',v:76},
  {n:'Acquafresca',   pos:'del',sp:'dc', v:77},{n:'Valdo',         pos:'del',sp:'ext',v:75},
]},

/* ══ RECREATIVO HUELVA ══ */
{ id:'rec-0607', eq:'Recreativo de Huelva', t:'2006-07', j:[
  {n:'Notario',       pos:'pt', v:75},
  {n:'Aitor Ocio',    pos:'def',sp:'lb',v:74},{n:'Colotto',       pos:'def',sp:'cb',v:75},
  {n:'Sergio Sánchez',pos:'def',sp:'cb',v:74},{n:'Nacho González',pos:'def',sp:'lb',v:73},
  {n:'Sergio Rodríguez',pos:'med',v:75},{n:'Capi',           pos:'med',v:76},{n:'Cortés',pos:'med',v:74},
  {n:'Portillo',      pos:'del',sp:'ext',v:77},{n:'Ikechukwu Uche',pos:'del',sp:'dc',v:76},
  {n:'Diego Mainz',   pos:'del',sp:'dc', v:74},{n:'Nacho',         pos:'med',v:73},
]},

/* ══ VALLADOLID ══ */
{ id:'val_d-9899', eq:'Real Valladolid', t:'1998-99', j:[
  {n:'Aranzubía',     pos:'pt', v:76},
  {n:'Movilla',       pos:'def',sp:'lb',v:75},{n:'González',      pos:'def',sp:'cb',v:74},
  {n:'De la Viuda',   pos:'def',sp:'cb',v:74},{n:'Herrero',       pos:'def',sp:'lb',v:73},
  {n:'Iván Pérez',    pos:'med',v:75},{n:'Marcos Vales',   pos:'med',v:74},{n:'Sancho', pos:'med',v:75},
  {n:'Víctor',        pos:'del',sp:'dc', v:77},{n:'Caminero',      pos:'del',sp:'dc', v:79},
  {n:'Darko',         pos:'del',sp:'ext',v:75},{n:'José Emilio',   pos:'med',v:73},
]},

/* ══ 30 PLANTILLAS ADICIONALES ══ */

/* Real Madrid */
{ id:'rma-9394', eq:'Real Madrid', t:'1993-94', j:[
  {n:'Buyo',          pos:'pt', v:80},
  {n:'Chendo',        pos:'def',sp:'lb',v:73},{n:'Sanchís',       pos:'def',sp:'cb',v:82},
  {n:'Hierro',        pos:'def',sp:'cb',v:86},{n:'Míchel Salgado',pos:'def',sp:'lb',v:79},
  {n:'Redondo',       pos:'med',v:87},{n:'Laudrup',        pos:'med',v:89},{n:'Michel',pos:'med',v:77},
  {n:'Zamorano',      pos:'del',sp:'dc', v:86},{n:'Raúl',          pos:'del',sp:'dc', v:82},
  {n:'Amavisca',      pos:'del',sp:'ext',v:77},{n:'Camacho',       pos:'def',sp:'cb',v:79},
]},
{ id:'rma-9900', eq:'Real Madrid', t:'1999-00', j:[
  {n:'Casillas',      pos:'pt', v:87},{n:'Illgner',        pos:'pt', v:83},
  {n:'Sanchís',       pos:'def',sp:'cb',v:78},{n:'Hierro',        pos:'def',sp:'cb',v:85},
  {n:'Roberto Carlos',pos:'def',sp:'lb',v:91},{n:'Panucci',       pos:'def',sp:'lb',v:75},
  {n:'Redondo',       pos:'med',v:88},{n:'Savio',          pos:'med',v:82},{n:'McManaman',pos:'med',v:79},
  {n:'Raúl',          pos:'del',sp:'dc', v:90},{n:'Morientes',     pos:'del',sp:'dc', v:84},
  {n:'Anelka',        pos:'del',sp:'dc', v:83},{n:'Karembeu',      pos:'med',v:79},
]},

/* FC Barcelona */
{ id:'fcb-9697', eq:'FC Barcelona', t:'1996-97', j:[
  {n:'Vítor Baía',    pos:'pt', v:86},
  {n:'Ferrer',        pos:'def',sp:'lb',v:80},{n:'Popescu',       pos:'def',sp:'cb',v:81},
  {n:'Blanc',         pos:'def',sp:'cb',v:84},{n:'Sergi',         pos:'def',sp:'lb',v:77},
  {n:'Cocu',          pos:'med',v:81},{n:'Luis Enrique',   pos:'med',v:85},{n:'Giovanni',pos:'med',v:80},
  {n:'Ronaldo',       pos:'del',sp:'dc', v:98},{n:'Figo',          pos:'del',sp:'ext',v:91},
  {n:'Stoichkov',     pos:'del',sp:'ext',v:88},{n:'Pizzi',         pos:'del',sp:'ext',v:79},
]},
{ id:'fcb-0001', eq:'FC Barcelona', t:'2000-01', j:[
  {n:'Reina',         pos:'pt', v:78},
  {n:'Puyol',         pos:'def',sp:'cb',v:85},{n:'Cocu',          pos:'def',sp:'cb',v:80},
  {n:'Christanval',   pos:'def',sp:'cb',v:77},{n:'Reiziger',      pos:'def',sp:'lb',v:79},
  {n:'Guardiola',     pos:'med',v:84},{n:'Overmars',       pos:'med',v:86},{n:'Luis Enrique',pos:'med',v:84},
  {n:'Rivaldo',       pos:'del',sp:'ext',v:95},{n:'Kluivert',      pos:'del',sp:'dc', v:86},
  {n:'Saviola',       pos:'del',sp:'ext',v:83},{n:'De la Peña',    pos:'med',v:78},
]},
{ id:'fcb-0607', eq:'FC Barcelona', t:'2006-07', j:[
  {n:'Valdés',        pos:'pt', v:85},
  {n:'Oleguer',       pos:'def',sp:'lb',v:74},{n:'Puyol',         pos:'def',sp:'cb',v:88},
  {n:'Márquez',       pos:'def',sp:'cb',v:83},{n:'Van Bronckhorst',pos:'def',sp:'lb',v:78},
  {n:'Edmilson',      pos:'med',v:79},{n:'Xavi',           pos:'med',v:91},{n:'Deco',   pos:'med',v:86},
  {n:'Iniesta',       pos:'med',v:88},
  {n:'Ronaldinho',    pos:'del',sp:'ext',v:94},{n:"Eto'o",         pos:'del',sp:'dc', v:90},
  {n:'Messi',         pos:'del',sp:'ext',v:91},{n:'Saviola',       pos:'del',sp:'ext',v:80},
]},

/* Atlético de Madrid */
{ id:'atm-1011', eq:'Atlético de Madrid', t:'2010-11', j:[
  {n:'De Gea',        pos:'pt', v:82},
  {n:'Ujfalusi',      pos:'def',sp:'cb',v:78},{n:'Perea',         pos:'def',sp:'cb',v:76},
  {n:'Antonio López', pos:'def',sp:'lb',v:76},{n:'Filipe Luís',   pos:'def',sp:'lb',v:84},
  {n:'Mario',         pos:'med',v:78},{n:'Raúl García',    pos:'med',v:81},{n:'Simão',  pos:'med',v:82},
  {n:'Agüero',        pos:'del',sp:'dc', v:91},{n:'Forlán',        pos:'del',sp:'dc', v:88},
  {n:'Salvio',        pos:'del',sp:'ext',v:79},{n:'Camacho Josema',pos:'med',v:74},
]},
{ id:'atm-1819', eq:'Atlético de Madrid', t:'2018-19', j:[
  {n:'Oblak',         pos:'pt', v:94},
  {n:'Juanfran',      pos:'def',sp:'lb',v:79},{n:'Godín',         pos:'def',sp:'cb',v:89},
  {n:'Giménez',       pos:'def',sp:'cb',v:84},{n:'Filipe Luís',   pos:'def',sp:'lb',v:82},
  {n:'Thomas',        pos:'med',v:84},{n:'Koke',           pos:'med',v:84},{n:'Lemar',  pos:'med',v:79},
  {n:'Griezmann',     pos:'del',sp:'ext',v:93},{n:'Morata',        pos:'del',sp:'dc', v:83},
  {n:'Correa',        pos:'del',sp:'ext',v:79},{n:'Rodrigo',       pos:'med',v:85},
]},

/* Valencia CF */
{ id:'val-0708', eq:'Valencia CF', t:'2007-08', j:[
  {n:'Cañizares',     pos:'pt', v:84},
  {n:'Moretti',       pos:'def',sp:'lb',v:78},{n:'Marchena',      pos:'def',sp:'cb',v:81},
  {n:'Albiol',        pos:'def',sp:'cb',v:82},{n:'Angulo',        pos:'def',sp:'lb',v:76},
  {n:'Albelda',       pos:'med',v:82},{n:'Baraja',         pos:'med',v:81},{n:'Silva', pos:'med',v:86},
  {n:'Villa',         pos:'del',sp:'dc', v:90},{n:'Morientes',     pos:'del',sp:'dc', v:81},
  {n:'Joaquín',       pos:'del',sp:'ext',v:82},{n:'Edu',           pos:'med',v:76},
]},

/* Sevilla FC */
{ id:'sev-0708', eq:'Sevilla FC', t:'2007-08', j:[
  {n:'Palop',         pos:'pt', v:83},
  {n:'Alves',         pos:'def',sp:'lb',v:87},{n:'Escudé',        pos:'def',sp:'cb',v:81},
  {n:'Dragutinovic',  pos:'def',sp:'cb',v:78},{n:'Adriano',       pos:'def',sp:'lb',v:81},
  {n:'Poulsen',       pos:'med',v:79},{n:'Renato',         pos:'med',v:79},{n:'Capel', pos:'med',v:79},
  {n:'Jesús Navas',   pos:'del',sp:'ext',v:84},{n:'Kanoute',       pos:'del',sp:'dc', v:86},
  {n:'Luis Fabiano',  pos:'del',sp:'dc', v:85},{n:'Maresca',       pos:'med',v:80},
]},

/* Athletic Club */
{ id:'ath-9495', eq:'Athletic Club', t:'1994-95', j:[
  {n:'Esnaola',       pos:'pt', v:79},
  {n:'Larrazábal',    pos:'def',sp:'lb',v:75},{n:'Karanka',       pos:'def',sp:'cb',v:78},
  {n:'Alkiza',        pos:'def',sp:'cb',v:76},{n:'Urrutia',       pos:'def',sp:'lb',v:74},
  {n:'Dani',          pos:'med',v:79},{n:'Suances',        pos:'med',v:75},{n:'Eskurza',pos:'med',v:77},
  {n:'Julen Guerrero',pos:'del',sp:'ext',v:85},{n:'Ziganda',       pos:'del',sp:'dc', v:82},
  {n:'Goikoetxea',    pos:'del',sp:'dc', v:80},{n:'Bikandi',       pos:'med',v:74},
]},
{ id:'ath-1516', eq:'Athletic Club', t:'2015-16', j:[
  {n:'Iraizoz',       pos:'pt', v:80},
  {n:'De Marcos',     pos:'def',sp:'lb',v:79},{n:'Laporte',       pos:'def',sp:'cb',v:86},
  {n:'San José',      pos:'def',sp:'cb',v:80},{n:'Balenziaga',    pos:'def',sp:'lb',v:78},
  {n:'Iturraspe',     pos:'med',v:78},{n:'Raúl García',    pos:'med',v:83},{n:'Beñat', pos:'med',v:79},
  {n:'Muniain',       pos:'del',sp:'ext',v:83},{n:'Aduriz',        pos:'del',sp:'dc', v:87},
  {n:'Williams Iñaki',pos:'del',sp:'ext',v:82},{n:'Susaeta',       pos:'del',sp:'ext',v:79},
]},

/* Real Sociedad */
{ id:'rso-0304', eq:'Real Sociedad', t:'2003-04', j:[
  {n:'Aranzubia',     pos:'pt', v:79},
  {n:'Aramburu',      pos:'def',sp:'lb',v:76},{n:'Schürrer',      pos:'def',sp:'cb',v:78},
  {n:'Jauregi',       pos:'def',sp:'cb',v:75},{n:'De la Bella',   pos:'def',sp:'lb',v:76},
  {n:'Xabi Alonso',   pos:'med',v:91},{n:'Gabilondo',      pos:'med',v:76},{n:'Prieto',pos:'med',v:75},
  {n:'Karpin',        pos:'del',sp:'ext',v:81},{n:'Nihat',         pos:'del',sp:'dc', v:83},
  {n:'Agirretxe',     pos:'del',sp:'dc', v:77},{n:'De Pedro',      pos:'med',v:79},
]},

/* Deportivo La Coruña */
{ id:'dep-0102', eq:'Deportivo La Coruña', t:'2001-02', j:[
  {n:'Molina',        pos:'pt', v:87},
  {n:'Manuel Pablo',  pos:'def',sp:'lb',v:81},{n:'Naybet',        pos:'def',sp:'cb',v:84},
  {n:'Jorge Andrade', pos:'def',sp:'cb',v:83},{n:'Capdevila',     pos:'def',sp:'lb',v:82},
  {n:'Mauro Silva',   pos:'med',v:83},{n:'Valerón',        pos:'med',v:88},{n:'Duscher',pos:'med',v:80},
  {n:'Makaay',        pos:'del',sp:'dc', v:89},{n:'Tristán',       pos:'del',sp:'dc', v:86},
  {n:'Víctor',        pos:'del',sp:'dc', v:83},{n:'Sergio',        pos:'med',v:79},
]},

/* Villarreal CF */
{ id:'vil-1011', eq:'Villarreal CF', t:'2010-11', j:[
  {n:'Diego López',   pos:'pt', v:80},
  {n:'Capdevila',     pos:'def',sp:'lb',v:80},{n:'Godín',         pos:'def',sp:'cb',v:85},
  {n:'Marchena',      pos:'def',sp:'cb',v:79},{n:'Musacchio',     pos:'def',sp:'cb',v:77},
  {n:'Marcos Senna',  pos:'med',v:81},{n:'Cazorla',        pos:'med',v:87},{n:'Cani',  pos:'med',v:78},
  {n:'Rossi',         pos:'del',sp:'dc', v:86},{n:'Nilmar',        pos:'del',sp:'dc', v:82},
  {n:'Chetquita',     pos:'del',sp:'ext',v:76},{n:'Ruben',         pos:'def',sp:'lb',v:77},
]},

/* Real Betis */
{ id:'bet-9697', eq:'Real Betis', t:'1996-97', j:[
  {n:'Toni Prats',    pos:'pt', v:77},
  {n:'Merino',        pos:'def',sp:'lb',v:75},{n:'Cañas',         pos:'def',sp:'cb',v:75},
  {n:'Vidaña',        pos:'def',sp:'cb',v:74},{n:'Tomás',         pos:'def',sp:'lb',v:73},
  {n:'Jarni',         pos:'med',v:82},{n:'Finidi',         pos:'med',v:84},{n:'Alexis',pos:'med',v:80},
  {n:'Alfonso',       pos:'del',sp:'ext',v:83},{n:'Denilson',      pos:'del',sp:'ext',v:86},
  {n:'Solano',        pos:'del',sp:'ext',v:79},{n:'Espino',        pos:'def',sp:'lb',v:73},
]},
{ id:'bet-1415', eq:'Real Betis', t:'2014-15', j:[
  {n:'Adán',          pos:'pt', v:78},
  {n:'Varela',        pos:'def',sp:'lb',v:76},{n:'Duarte',        pos:'def',sp:'cb',v:77},
  {n:'Cedric',        pos:'def',sp:'lb',v:77},{n:'Musonda',       pos:'def',sp:'cb',v:75},
  {n:'Guardado',      pos:'med',v:80},{n:'Petros',         pos:'med',v:76},{n:'Rubén Castro',pos:'med',v:78},
  {n:'Joaquín',       pos:'del',sp:'ext',v:82},{n:'Castro',        pos:'del',sp:'dc', v:79},
  {n:'Moreno',        pos:'del',sp:'ext',v:76},{n:'Nono',          pos:'def',sp:'cb',v:75},
]},

/* Espanyol */
{ id:'esp-0405', eq:'RCD Espanyol', t:'2004-05', j:[
  {n:'Kameni',        pos:'pt', v:80},
  {n:'Jarque',        pos:'def',sp:'cb',v:77},{n:'Pochettino',    pos:'def',sp:'cb',v:74},
  {n:'Luis García',   pos:'def',sp:'lb',v:76},{n:'Zabaleta',      pos:'def',sp:'lb',v:79},
  {n:'De la Peña',    pos:'med',v:82},{n:'Rufete',         pos:'med',v:78},{n:'Jonatas',pos:'med',v:76},
  {n:'Tamudo',        pos:'del',sp:'dc', v:81},{n:'Pandiani',      pos:'del',sp:'dc', v:79},
  {n:'Ito',           pos:'del',sp:'ext',v:74},{n:'Riera',         pos:'med',v:75},
]},

/* Tenerife */
{ id:'ten-9192', eq:'Tenerife', t:'1991-92', j:[
  {n:'Ojeda',         pos:'pt', v:77},
  {n:'Del Solar',     pos:'def',sp:'cb',v:76},{n:'Bolaños',       pos:'def',sp:'cb',v:75},
  {n:'Fuentes',       pos:'def',sp:'lb',v:76},{n:'Gotor',         pos:'def',sp:'lb',v:74},
  {n:'Pizzi',         pos:'med',v:82},{n:'Caminero',       pos:'med',v:80},{n:'Rafa Paz',pos:'med',v:75},
  {n:'Arencibia',     pos:'del',sp:'dc', v:79},{n:'Abel',          pos:'del',sp:'dc', v:78},
  {n:'López Ufarte',  pos:'del',sp:'ext',v:77},{n:'Alfonso',       pos:'del',sp:'ext',v:76},
]},

/* Sporting de Gijón */
{ id:'spo-8586', eq:'Sporting de Gijón', t:'1985-86', j:[
  {n:'Ablanedo',      pos:'pt', v:77},
  {n:'Maceda',        pos:'def',sp:'cb',v:79},{n:'Ferreira',      pos:'def',sp:'cb',v:76},
  {n:'Herrero',       pos:'def',sp:'lb',v:74},{n:'Ciriaco',       pos:'def',sp:'lb',v:74},
  {n:'Martínez',      pos:'med',v:76},{n:'Ángel',          pos:'med',v:77},{n:'Cantillo',pos:'med',v:76},
  {n:'Quini',         pos:'del',sp:'dc', v:85},{n:'Arsenio',       pos:'del',sp:'dc', v:77},
  {n:'Vidal',         pos:'del',sp:'ext',v:75},{n:'Castro',        pos:'med',v:74},
]},

/* Rayo Vallecano */
{ id:'ray-1112', eq:'Rayo Vallecano', t:'2011-12', j:[
  {n:'Cobeno',        pos:'pt', v:76},
  {n:'Tito',          pos:'def',sp:'lb',v:75},{n:'Navarro',       pos:'def',sp:'cb',v:74},
  {n:'Mané',          pos:'def',sp:'cb',v:74},{n:'Trashorras',    pos:'def',sp:'lb',v:73},
  {n:'Trejo',         pos:'med',v:78},{n:'Piti',           pos:'med',v:77},{n:'Buonanotte',pos:'med',v:78},
  {n:'Michu',         pos:'del',sp:'dc', v:82},{n:'Bautista',      pos:'del',sp:'dc', v:76},
  {n:'Alejandro Alfaro',pos:'del',sp:'ext',v:75},{n:'Coke',        pos:'med',v:74},
]},

/* Getafe CF */
{ id:'get-1112', eq:'Getafe CF', t:'2011-12', j:[
  {n:'Codina',        pos:'pt', v:76},
  {n:'Alexis',        pos:'def',sp:'lb',v:75},{n:'Cata Díaz',     pos:'def',sp:'cb',v:77},
  {n:'Licht',         pos:'def',sp:'cb',v:74},{n:'Cosmin Contra', pos:'def',sp:'lb',v:75},
  {n:'Casquero',      pos:'med',v:77},{n:'Medhi Lacen',    pos:'med',v:77},{n:'Michel Salgado',pos:'med',v:74},
  {n:'Miku',          pos:'del',sp:'dc', v:80},{n:'Lafita',        pos:'del',sp:'ext',v:78},
  {n:'Arizmendi',     pos:'del',sp:'ext',v:75},{n:'Pedro León',    pos:'med',v:78},
]},

/* Las Palmas */
{ id:'lpa-1617', eq:'Las Palmas', t:'2016-17', j:[
  {n:'Leandro',       pos:'pt', v:77},
  {n:'Bigas',         pos:'def',sp:'cb',v:76},{n:'Aythami',       pos:'def',sp:'cb',v:75},
  {n:'Dani Castellano',pos:'def',sp:'lb',v:75},{n:'Valentín',     pos:'def',sp:'lb',v:74},
  {n:'Roque Mesa',    pos:'med',v:82},{n:'Momo',           pos:'med',v:79},{n:'Hernán',pos:'med',v:76},
  {n:'Tana',          pos:'del',sp:'ext',v:79},{n:'Calleri',       pos:'del',sp:'dc', v:79},
  {n:'Halilovic',     pos:'del',sp:'ext',v:78},{n:'Viera',         pos:'med',v:80},
]},

/* Osasuna */
{ id:'osa-1112', eq:'Osasuna', t:'2011-12', j:[
  {n:'Andrés Fernández',pos:'pt',v:79},
  {n:'Flano',         pos:'def',sp:'lb',v:76},{n:'Javi García',   pos:'def',sp:'cb',v:81},
  {n:'Álvaro Cejudo', pos:'def',sp:'cb',v:75},{n:'Íñigo',         pos:'def',sp:'lb',v:74},
  {n:'Puñal',         pos:'med',v:78},{n:'Nekounam',       pos:'med',v:80},{n:'Raúl García',pos:'med',v:83},
  {n:'Aranda',        pos:'del',sp:'ext',v:77},{n:'Pandiani',      pos:'del',sp:'dc', v:78},
  {n:'Vadócz',        pos:'del',sp:'ext',v:75},{n:'Oriol Riera',   pos:'del',sp:'dc', v:76},
]},

/* Athletic Club */
{ id:'ath-0708', eq:'Athletic Club', t:'2007-08', j:[
  {n:'Iraizoz',       pos:'pt', v:78},
  {n:'De Marcos',     pos:'def',sp:'lb',v:77},{n:'Gurpegi',       pos:'def',sp:'cb',v:78},
  {n:'Laporte',       pos:'def',sp:'cb',v:75},{n:'Amorebieta',    pos:'def',sp:'cb',v:75},
  {n:'Javi Martínez', pos:'med',v:83},{n:'Orbaiz',         pos:'med',v:76},{n:'Ander Herrera',pos:'med',v:79},
  {n:'Etxeberria',    pos:'del',sp:'ext',v:80},{n:'Llorente',      pos:'del',sp:'dc', v:84},
  {n:'Susaeta',       pos:'del',sp:'ext',v:78},{n:'Toquero',       pos:'del',sp:'ext',v:76},
]},

/* Numancia */
{ id:'num-0809', eq:'CD Numancia', t:'2008-09', j:[
  {n:'Sergio Aragoneses',pos:'pt',v:75},
  {n:'Llorente',      pos:'def',sp:'lb',v:74},{n:'Colsa',         pos:'def',sp:'cb',v:75},
  {n:'Nacho González',pos:'def',sp:'cb',v:74},{n:'Dimas',         pos:'def',sp:'lb',v:73},
  {n:'Alfaro',        pos:'med',v:75},{n:'Del Moral',      pos:'med',v:77},{n:'Aitor Sanz',pos:'med',v:74},
  {n:'Soldado',       pos:'del',sp:'dc', v:79},{n:'Villa',         pos:'del',sp:'dc', v:76},
  {n:'Urreta',        pos:'del',sp:'ext',v:74},{n:'Calero',        pos:'med',v:73},
]},

/* Celta de Vigo */
{ id:'cel-0304', eq:'Celta de Vigo', t:'2003-04', j:[
  {n:'Pinto',         pos:'pt', v:78},
  {n:'Velasco',       pos:'def',sp:'lb',v:75},{n:'Contreras',     pos:'def',sp:'cb',v:77},
  {n:'Sergio',        pos:'def',sp:'cb',v:76},{n:'Míchel Salgado',pos:'def',sp:'lb',v:81},
  {n:'Edu Coudet',    pos:'med',v:78},{n:'Jesuli',         pos:'med',v:79},{n:'Nené',  pos:'med',v:78},
  {n:'Mostovoi',      pos:'del',sp:'ext',v:82},{n:'Iago',          pos:'del',sp:'dc', v:79},
  {n:'Canobbio',      pos:'del',sp:'dc', v:76},{n:'Luccin',        pos:'med',v:79},
]},

/* CD Logroñés */
{ id:'log-9192', eq:'CD Logroñés', t:'1991-92', j:[
  {n:'Javier Rueda',  pos:'pt', v:73},
  {n:'Goñi',          pos:'def',sp:'lb',v:72},{n:'Rojo',          pos:'def',sp:'cb',v:73},
  {n:'Preciado',      pos:'def',sp:'cb',v:74},{n:'Benito',        pos:'def',sp:'lb',v:72},
  {n:'Esnaola',       pos:'med',v:73},{n:'Arana',          pos:'med',v:73},{n:'Santisteban',pos:'med',v:72},
  {n:'Quique de Lucas',pos:'del',sp:'ext',v:76},{n:'Dukic',        pos:'del',sp:'dc', v:75},
  {n:'Gely',          pos:'del',sp:'dc', v:73},{n:'Llorente',      pos:'med',v:72},
]},

/* Albacete */
{ id:'alb-9293', eq:'Albacete Balompié', t:'1992-93', j:[
  {n:'Carlos',        pos:'pt', v:74},
  {n:'Kike',          pos:'def',sp:'lb',v:73},{n:'Ramos',         pos:'def',sp:'cb',v:74},
  {n:'Jiménez',       pos:'def',sp:'cb',v:73},{n:'Mena',          pos:'def',sp:'lb',v:73},
  {n:'Navarro',       pos:'med',v:74},{n:'Cifuentes',      pos:'med',v:73},{n:'Serna',  pos:'med',v:74},
  {n:'Kiko',          pos:'del',sp:'dc', v:79},{n:'Pier Luigi Casiraghi',pos:'del',sp:'dc',v:78},
  {n:'Óscar',         pos:'del',sp:'ext',v:74},{n:'Evaristo',      pos:'med',v:72},
]},

/* Real Oviedo */
{ id:'ovd-9091', eq:'Real Oviedo', t:'1990-91', j:[
  {n:'Duda',          pos:'pt', v:74},
  {n:'Nando',         pos:'def',sp:'lb',v:73},{n:'Torrecilla',    pos:'def',sp:'cb',v:74},
  {n:'Pedrín',        pos:'def',sp:'cb',v:73},{n:'Tomas',         pos:'def',sp:'lb',v:73},
  {n:'Quique',        pos:'med',v:74},{n:'Oñate',          pos:'med',v:73},{n:'Eloy',  pos:'med',v:74},
  {n:'Duda fwd',      pos:'del',sp:'dc', v:76},{n:'Aldana',        pos:'del',sp:'dc', v:77},
  {n:'Carlos Salvador',pos:'del',sp:'ext',v:74},{n:'Óscar',        pos:'med',v:73},
]},

];

const PLANTILLAS_MAP = {};
PLANTILLAS.forEach(p => { PLANTILLAS_MAP[p.id] = p; });
