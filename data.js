/*
 * ════════════════════════════════════════════════════════════════
 *  ትግራይት — TIGRAYIT KIDS  ·  LANGUAGE DATA FILE
 *  Edit this file to correct any Tigre words, transliterations,
 *  or Ge'ez script.  The app loads this automatically.
 *
 *  Each word entry has four fields:
 *    en  — English meaning
 *    tg  — Tigre script (Ge'ez / Fidel)
 *    tr  — Transliteration (Latin alphabet)
 *    em  — Emoji shown on the card
 *
 *  Sources: Beurmann 1868 · Raz 1983 · speaktigre.com · omniglot.com
 * ════════════════════════════════════════════════════════════════
 */

// ─── GE'EZ ALPHABET ──────────────────────────────────────────────
// Each row: consonant letter (c), IPA value (ipa), and 7 vowel forms (g)
// Vowel order: ä  u  i  a  e  ə  o
const VORDERS = ["ä", "u", "i", "a", "e", "ə", "o"];

const ALPHA = [
  { c:"h",   ipa:"h",    g:["ሀ","ሁ","ሂ","ሃ","ሄ","ህ","ሆ"] },
  { c:"l",   ipa:"l",    g:["ለ","ሉ","ሊ","ላ","ሌ","ል","ሎ"] },
  { c:"ḥ",   ipa:"ħ",    g:["ሐ","ሑ","ሒ","ሓ","ሔ","ሕ","ሖ"] },
  { c:"m",   ipa:"m",    g:["መ","ሙ","ሚ","ማ","ሜ","ም","ሞ"] },
  { c:"r",   ipa:"r",    g:["ረ","ሩ","ሪ","ራ","ሬ","ር","ሮ"] },
  { c:"s",   ipa:"s",    g:["ሰ","ሱ","ሲ","ሳ","ሴ","ስ","ሶ"] },
  { c:"š",   ipa:"ʃ",    g:["ሸ","ሹ","ሺ","ሻ","ሼ","ሽ","ሾ"] },
  { c:"q",   ipa:"kʼ",   g:["ቀ","ቁ","ቂ","ቃ","ቄ","ቅ","ቆ"] },
  { c:"b",   ipa:"b",    g:["በ","ቡ","ቢ","ባ","ቤ","ብ","ቦ"] },
  { c:"t",   ipa:"t",    g:["ተ","ቱ","ቲ","ታ","ቴ","ት","ቶ"] },
  { c:"č",   ipa:"tʃ",   g:["ቸ","ቹ","ቺ","ቻ","ቼ","ች","ቾ"] },
  { c:"n",   ipa:"n",    g:["ነ","ኑ","ኒ","ና","ኔ","ን","ኖ"] },
  { c:"ʼ",   ipa:"ʔ",    g:["አ","ኡ","ኢ","ኣ","ኤ","እ","ኦ"] },
  { c:"k",   ipa:"k",    g:["ከ","ኩ","ኪ","ካ","ኬ","ክ","ኮ"] },
  { c:"w",   ipa:"w",    g:["ወ","ዉ","ዊ","ዋ","ዌ","ው","ዎ"] },
  { c:"z",   ipa:"z",    g:["ዘ","ዙ","ዚ","ዛ","ዜ","ዝ","ዞ"] },
  { c:"y",   ipa:"j",    g:["የ","ዩ","ዪ","ያ","ዬ","ይ","ዮ"] },
  { c:"d",   ipa:"d",    g:["ደ","ዱ","ዲ","ዳ","ዴ","ድ","ዶ"] },
  { c:"j",   ipa:"dʒ",   g:["ጀ","ጁ","ጂ","ጃ","ጄ","ጅ","ጆ"] },
  { c:"g",   ipa:"g",    g:["ገ","ጉ","ጊ","ጋ","ጌ","ግ","ጎ"] },
  { c:"ṭ",   ipa:"tʼ",   g:["ጠ","ጡ","ጢ","ጣ","ጤ","ጥ","ጦ"] },
  { c:"č'",  ipa:"tʃʼ",  g:["ጨ","ጩ","ጪ","ጫ","ጬ","ጭ","ጮ"] },
  { c:"ṣ",   ipa:"sʼ",   g:["ጸ","ጹ","ጺ","ጻ","ጼ","ጽ","ጾ"] },
  { c:"f",   ipa:"f",    g:["ፈ","ፉ","ፊ","ፋ","ፌ","ፍ","ፎ"] },
  { c:"p",   ipa:"p",    g:["ፐ","ፑ","ፒ","ፓ","ፔ","ፕ","ፖ"] },
];


// ─── VOCABULARY LEVELS ───────────────────────────────────────────
const LEVELS = [
  // ── Level 1 ── Greetings & Numbers
  { id:1, name:"Hello! 👋", desc:"Greetings & Numbers", icon:"👋", color:"#E8985E", words:[
    { en:"peace / hello",       tg:"ሰላም",           tr:"salām",              em:"👋" },
    { en:"welcome",             tg:"መርሐባ",          tr:"märḥaba",            em:"🤗" },
    { en:"how are you? (m)",    tg:"እንቆሆ ሐሊኻ?",     tr:"enkoho ḥalika?",      em:"❓" },
    { en:"how are you? (f)",    tg:"እንቆሆ ሐሊኺ?",     tr:"enkoho ḥaliki?",      em:"❓" },
    { en:"fine, well",          tg:"ሰኒ ሐሊኩ",           tr:"seni haliku",             em:"😊" },
    { en:"thank you",           tg:"ሹክራን",        tr:"shukran",        em:"🙏" },
    { en:"yes",                 tg:"አይዋ",            tr:"aywa",                em:"✅" },
    { en:"no",                  tg:"ላ ላ",             tr:"ʼla la",                 em:"❌" },
    { en:"goodbye",             tg:"ደሓን ተትሊካ",        tr:"dehan tetlika",          em:"👋" },
    { en:"one",                 tg:"ሓቴ",           tr:"haté",              em:"1️⃣" },
    { en:"two",                 tg:"ኪሌ",            tr:"killé",              em:"2️⃣" },
    { en:"three",               tg:"ጻለስ",           tr:"tsales",             em:"3️⃣" },
    { en:"four",                tg:"ኣርባዕ",          tr:"arba'",              em:"4️⃣" },
    { en:"five",                tg:"ሓሙስ",           tr:"hamus",             em:"5️⃣" },
    { en:"six",                 tg:"ሱስ",            tr:"suss",               em:"6️⃣" },
    { en:"seven",               tg:"ሰበዐ",           tr:"sebe'e",             em:"7️⃣" },
    { en:"eight",               tg:"ጻማን",           tr:"tsaman",             em:"8️⃣" },
    { en:"nine",                tg:"ቲሰዐ",           tr:"tisse'",             em:"9️⃣" },
    { en:"ten",                 tg:"ዐሱር",           tr:"'assur",             em:"🔟" },
  ]},

  // ── Level 2 ── Family & People
  { id:2, name:"My Family 👨‍👩‍👧", desc:"Family & People", icon:"👨‍👩‍👧", color:"#C47B5E", words:[
    { en:"father",              tg:"ኣበ",            tr:"ab",                em:"👨" },
    { en:"mother",              tg:"ኡም",           tr:"umm",               em:"👩" },
    { en:"son",                 tg:"ወል",            tr:"wal",               em:"👦" },
    { en:"daughter",            tg:"ወለት",           tr:"wolet",             em:"👧" },
    { en:"brother",             tg:"ሑሑ",            tr:"hu'u",               em:"👦" },
    { en:"sister",              tg:"ሐት",            tr:"het",            em:"👧" },
    { en:"child (m)",         tg:"ጄነታይ",         tr:"jenetay",           em:"👶" },
      { en:"child (f)",         tg:"ወለትት",         tr:"waletett",           em:"👶" },
    { en:"man",                 tg:"እነስ",           tr:"ennas",              em:"🧑" },
    { en:"woman",               tg:"እሲት",           tr:"essit",              em:"👩" },
    { en:"grandfather",         tg:"ኣቤ ኣቡ",         tr:"abe-bu",            em:"👴" },
    { en:"old person",          tg:"ኣቤር",           tr:"aber",               em:"🧓" },
    { en:"young boy",           tg:"ሕሳን",           tr:"hessan",             em:"👦" },
    { en:"people",              tg:"ዐዳም",           tr:"addam",              em:"👥" },
    { en:"friend",              tg:"ማትለይ",          tr:"matlei",             em:"🤝" },
  ]},

  // ── Level 3 ── Parts of the Body
  { id:3, name:"My Body 🫀", desc:"Parts of the body", icon:"🫀", color:"#D4756B", words:[
    { en:"head",                tg:"ራስ",            tr:"ras",                em:"🗣️" },
    { en:"eye",                 tg:"ዐይን",           tr:"aint",               em:"👁️" },
    { en:"ear",                 tg:"እዝን",           tr:"ezin",               em:"👂" },
    { en:"mouth",               tg:"ኣፍ",            tr:"af",                 em:"👄" },
    { en:"nose",                tg:"ኣኒፍ",           tr:"anif",               em:"👃" },
    { en:"tongue",              tg:"ለሳን",           tr:"lessan",             em:"👅" },
    { en:"tooth",               tg:"ኣይናብ",          tr:"ajnab",              em:"🦷" },
    { en:"hand",                tg:"እደ",            tr:"ide",                em:"✋" },
    { en:"foot, leg",           tg:"እግር",           tr:"iggir",              em:"🦶" },
    { en:"heart",               tg:"ልብ",            tr:"lub",                em:"❤️" },
    { en:"belly",               tg:"ጎፍ",            tr:"gof",                em:"🫄" },
    { en:"back",                tg:"ሕሳድ",           tr:"hesad",              em:"🔙" },
    { en:"blood",               tg:"ደም",            tr:"dem",                em:"🩸" },
    { en:"bone",                tg:"ዐፅም",           tr:"assem",              em:"🦴" },
    { en:"skin",                tg:"ጊልድ",           tr:"gilt",               em:"🤚" },
    { en:"hair",                tg:"ጽግር",           tr:"dschiggar",          em:"💇" },
  ]},

  // ── Level 4 ── Animals
  { id:4, name:"Animals 🐪", desc:"Creatures big & small", icon:"🐪", color:"#A67B5B", words:[
    { en:"cow, ox",             tg:"ባራይ",           tr:"barai",              em:"🐄" },
    { en:"camel",               tg:"ገምል",           tr:"geml",               em:"🐪" },
    { en:"horse",               tg:"ፈረስ",           tr:"faras",              em:"🐴" },
    { en:"donkey",              tg:"ኣዲግ",           tr:"adig",               em:"🫏" },
    { en:"dog",                 tg:"ከልብ",           tr:"kelb",               em:"🐕" },
    { en:"cat",                 tg:"ድሞ",            tr:"dimmo",              em:"🐈" },
    { en:"sheep",               tg:"በጋዕት",          tr:"begaet",             em:"🐑" },
    { en:"goat",                tg:"ጣሊት",           tr:"talit",              em:"🐐" },
    { en:"chicken, hen",        tg:"ድርሆ",           tr:"dirho",              em:"🐔" },
    { en:"bird",                tg:"ዐይፎት",          tr:"aifot",              em:"🐦" },
    { en:"fish",                tg:"ዓሳ",            tr:"assa",               em:"🐟" },
    { en:"lion",                tg:"ሃየት",           tr:"hajet",              em:"🦁" },
    { en:"elephant",            tg:"ሃሮማስ",          tr:"haromas",            em:"🐘" },
    { en:"snake",               tg:"ኣርዋኤ",          tr:"arwae",              em:"🐍" },
    { en:"hyena",               tg:"ካረጭ",           tr:"karetsch",           em:"🦊" },
    { en:"wolf",                tg:"ሓሺለ",           tr:"haschil",            em:"🐺" },
  ]},

  // ── Level 5 ── Nature
  { id:5, name:"Nature 🌍", desc:"Sky, earth & weather", icon:"🌍", color:"#6B8E6B", words:[
    { en:"sun",                 tg:"ጸሐይ",           tr:"tzachai",            em:"☀️" },
    { en:"moon",                tg:"ወርሕ",           tr:"wärḥ",               em:"🌙" },
    { en:"star",                tg:"ኮከብ",           tr:"kokeb",              em:"⭐" },
    { en:"sky",                 tg:"ሰማይ",           tr:"sämay",              em:"🌤️" },
    { en:"earth, land",         tg:"ምድር",           tr:"mədər",              em:"🌍" },
    { en:"water",               tg:"ማይ",            tr:"mai",                em:"💧" },
    { en:"rain",                tg:"ዝላም",           tr:"zelam",              em:"🌧️" },
    { en:"fire",                tg:"እሳት",           tr:"əsat",               em:"🔥" },
    { en:"wind",                tg:"ሻማል",           tr:"shamal",              em:"💨" },
    { en:"tree, wood",          tg:"ዐጸይ",           tr:"atschai",            em:"🌳" },
    { en:"stone, rock",         tg:"ኡባን",           tr:"uban",               em:"🪨" },
    { en:"mountain",            tg:"ደብር",           tr:"debər",              em:"⛰️" },
    { en:"night",               tg:"ላሊ",            tr:"lali",               em:"🌙" },
    { en:"day",                 tg:"ኣምሐል",          tr:"amhel",              em:"🌞" },
    { en:"sea",                 tg:"ባሕር",           tr:"baḥər",              em:"🌊" },
    { en:"river",               tg:"ማሓዝ",           tr:"mahaz",               em:"🏞️" },
  ]},

  // ── Level 6 ── Food & Drink
  { id:6, name:"Yummy! ☕", desc:"Food & drink", icon:"☕", color:"#8B6B4E", words:[
    { en:"food, eating",        tg:"በለህ",           tr:"belleh",             em:"🍽️" },
    { en:"milk",                tg:"ሐሊብ",           tr:"halib",              em:"🥛" },
    { en:"bread",               tg:"ሕሙስ",           tr:"hemus",              em:"🍞" },
    { en:"meat, flesh",         tg:"ሥጋ",            tr:"ssega",              em:"🥩" },
    { en:"butter",              tg:"ዝብደት",          tr:"zibdet",             em:"🧈" },
    { en:"honey",               tg:"ማዓር",           tr:"ma-ar",              em:"🍯" },
    { en:"salt",                tg:"ጨው",            tr:"tschaiwa",           em:"🧂" },
    { en:"coffee",              tg:"ቡን",           tr:"bun",             em:"☕" },
    { en:"sugar",               tg:"ሱኳር",           tr:"ssukhar",            em:"🍬" },
    { en:"egg",                 tg:"ቤት",            tr:"bet",                em:"🥚" },
    { en:"pepper",              tg:"በርበረህ",         tr:"berbereh",           em:"🌶️" },
    { en:"bean",                tg:"ፉል",            tr:"ful",                em:"🫘" },
    { en:"rice",                tg:"ሩስ",            tr:"rus",                em:"🍚" },
    { en:"wheat",               tg:"ሸንራይ",          tr:"schenrai",           em:"🌾" },
  ]},

  // ── Level 7 ── Colors & Descriptions
  { id:7, name:"Colors 🎨", desc:"Colors & descriptions", icon:"🎨", color:"#7B6B9E", words:[
    { en:"white",               tg:"ሳዕደ",           tr:"saade",              em:"⬜" },
    { en:"black",               tg:"ጻሊም",           tr:"tzalim",             em:"⬛" },
    { en:"red",                 tg:"ጋየች",           tr:"gajech",             em:"🟥" },
    { en:"green",               tg:"ኣኽደር",          tr:"achder",             em:"🟩" },
    { en:"yellow",              tg:"ሐመልሚል",         tr:"hamelmil",           em:"🟨" },
    { en:"tall",                tg:"ረዪም",           tr:"rei-im",              em:"📏" }, 
    { en:"short",               tg:"ኣጭር",           tr:"achir",              em:"📏" },
    { en:"small, little",       tg:"ንኡሽ",           tr:"neusch",             em:"🤏" },
    { en:"good",                tg:"ጎሩን",           tr:"gorun",              em:"👍" },
    { en:"bad",                 tg:"ኩፉ",            tr:"kufu",               em:"👎" },
    { en:"new",                 tg:"ሓዲስ",           tr:"haddis",             em:"✨" },
    { en:"old (aged)",          tg:"ኣቤር",           tr:"aber",               em:"🕰️" },
    { en:"sick",                tg:"ሖሙም",           tr:"homum",              em:"🤒" },
    { en:"hungry",              tg:"ግየዓን",          tr:"gjesan",             em:"😋" },
    { en:"happy",               tg:"ሳዒድ",           tr:"said",               em:"😄" },
    { en:"pretty",              tg:"ግሩም",           tr:"grun",               em:"🌸" },
    { en:"strong",              tg:"ደጉብ",           tr:"degub",              em:"💪" },
  ]},

  // ── Level 8 ── Things & Places
  { id:8, name:"My World 🏠", desc:"Things & places", icon:"🏠", color:"#5E8EA8", words:[
    { en:"house",               tg:"ቤት",            tr:"bet",                em:"🏠" },
    { en:"road, way",           tg:"ገባይ",           tr:"gabai",              em:"🛣️" },
    { en:"name",                tg:"ስሙ",            tr:"ssemu",              em:"📛" },
    { en:"clothes",             tg:"ለባስ",           tr:"lebas",              em:"👕" },
    { en:"knife",               tg:"ሰኪን",           tr:"sekin",              em:"🔪" },
    { en:"book",                tg:"ኪታብ",           tr:"kitab",              em:"📖" },
    { en:"letter",              tg:"ሳሐፍ",           tr:"sahaf",              em:"✉️" },
    { en:"gold",                tg:"ወርቅ",           tr:"worq",               em:"🥇" },
    { en:"door",                tg:"ማዕጾ",           tr:"ma'tso",             em:"🚪" },
    { en:"time",                tg:"ዘባን",           tr:"zeban",              em:"⏰" },
    { en:"month",               tg:"ዋሬ",            tr:"ware",               em:"📅" },
    { en:"place",               tg:"ኣካን",           tr:"akan",               em:"📍" },
    { en:"word",                tg:"ከልማ",           tr:"kelmet",              em:"💬" },
    { en:"work",                tg:"ሽጉል",           tr:"schogul",            em:"⚒️" },
    { en:"mosque",              tg:"ሚስኪድ",          tr:"miskid",             em:"🕌" },
    { en:"money",               tg:"ገንዘብ",          tr:"genzeb",             em:"💰" },
  ]},

  // ── Level 9 ── Common Verbs
  { id:9, name:"Let's Do! 🏃", desc:"Common verbs", icon:"🏃", color:"#5B7E6B", words:[
    { en:"to eat",              tg:"በልዐ",           tr:"bel'a",              em:"🍽️" },
    { en:"to drink",            tg:"ሰተ",            tr:"sete",               em:"🥤" },
    { en:"to go",               tg:"ገሳ",            tr:"gesa",               em:"🚶" },
    { en:"to come",             tg:"መጸእ",           tr:"mätsa",              em:"🏃" },
    { en:"to see",              tg:"ርኤ",            tr:"ra'a",               em:"👀" },
    { en:"to hear",             tg:"ሰምዐ",           tr:"sem'a",              em:"👂" },
    { en:"to say, speak",       tg:"በሂል",           tr:"bähil",              em:"🗣️" },
    { en:"to give",             tg:"ሀበ",            tr:"habe",               em:"🤲" },
    { en:"to sleep",            tg:"ስካብ",           tr:"skab",               em:"😴" },
    { en:"to know",             tg:"ኣምረ",           tr:"amara",              em:"🧠" },
    { en:"to read",             tg:"ቀርኤ",           tr:"qar'a",              em:"📖" },
    { en:"to write",            tg:"ከትበ",           tr:"katba",              em:"✍️" },
    { en:"to cook",             tg:"ባሽለ",           tr:"baschla",            em:"🍳" },
    { en:"to run",              tg:"ሳዔ",            tr:"ssae",               em:"🏃‍♂️" },
    { en:"to sit",              tg:"ጋሲ",            tr:"gassi",              em:"🪑" },
    { en:"to love",             tg:"ፈተወ",           tr:"fatawa",             em:"❤️" },
  ]},

  // ── Level 10 ── Useful Phrases
  { id:10, name:"Talk! 💬", desc:"Useful phrases", icon:"💬", color:"#6B5E8E", words:[
    { en:"What is your name?",  tg:"ስምካ መን?",       tr:"simka men?",         em:"❓" },
    { en:"My name is...",       tg:"ስምየ...",         tr:"simye...",           em:"📛" },
    { en:"I understand",        tg:"ኣምር",           tr:"amir",               em:"✅" },
    { en:"I don't understand",  tg:"ኢ ኣምር",         tr:"i-amir",             em:"❌" },
    { en:"please (m)",          tg:"በጃኻ",           tr:"bäjaka",             em:"🙏" },
    { en:"good morning",        tg:"ደሓንዶ ሐዲርኻ",    tr:"dähando hadirka",    em:"🌅" },
    { en:"good evening",        tg:"ሳዒም ዘኩም",       tr:"sa'im zekum",        em:"🌆" },
    { en:"come here!",          tg:"ና",             tr:"na",                 em:"👈" },
    { en:"bring it",            tg:"ሃምሲ",           tr:"hamsi",              em:"🤲" },
    { en:"I am hungry",         tg:"ግየዓን",          tr:"gjesan",             em:"😋" },
    { en:"water please",        tg:"ማይ በጃኻ",        tr:"mai bäjaka",         em:"💧" },
    { en:"how much?",           tg:"ካም?",           tr:"kam?",               em:"💰" },
    { en:"where?",              tg:"ኣቲ?",           tr:"etei?",              em:"📍" },
    { en:"today",               tg:"ኣሜል",           tr:"amel",               em:"📅" },
    { en:"tomorrow",            tg:"ገዘም",           tr:"gezem",              em:"📆" },
    { en:"farewell (God protect)", tg:"ፍምባላ",       tr:"fimbala",            em:"🤲" },
  ]},

];
