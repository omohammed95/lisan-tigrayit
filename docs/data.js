/*
 * ════════════════════════════════════════════════════════════════
 *  ትግራይት — LISAN TIGRAYIT · LANGUAGE DATA FILE
 *  Multilingual: English, Arabic, French, German
 *
 *  Sources: Raz, "Tigre Grammar and Texts" 1983
 *           Littmann & Höfner, "Wörterbuch der Tigrê-Sprache" 1962
 *           Beurmann & Merx, "Vocabulary of the Tigre Language" 1868
 * ════════════════════════════════════════════════════════════════
 */

const VORDERS = ["ä", "u", "i", "a", "e", "ə", "o"];

const ALPHA = [
  { c: "h", ipa: "h", g: ["ሀ", "ሁ", "ሂ", "ሃ", "ሄ", "ህ", "ሆ"] },
  { c: "l", ipa: "l", g: ["ለ", "ሉ", "ሊ", "ላ", "ሌ", "ል", "ሎ"] },
  { c: "ḥ", ipa: "ħ", g: ["ሐ", "ሑ", "ሒ", "ሓ", "ሔ", "ሕ", "ሖ"] },
  { c: "m", ipa: "m", g: ["መ", "ሙ", "ሚ", "ማ", "ሜ", "ም", "ሞ"] },
  { c: "r", ipa: "r", g: ["ረ", "ሩ", "ሪ", "ራ", "ሬ", "ር", "ሮ"] },
  { c: "s", ipa: "s", g: ["ሰ", "ሱ", "ሲ", "ሳ", "ሴ", "ስ", "ሶ"] },
  { c: "š", ipa: "ʃ", g: ["ሸ", "ሹ", "ሺ", "ሻ", "ሼ", "ሽ", "ሾ"] },
  { c: "q", ipa: "kʼ", g: ["ቀ", "ቁ", "ቂ", "ቃ", "ቄ", "ቅ", "ቆ"] },
  { c: "b", ipa: "b", g: ["በ", "ቡ", "ቢ", "ባ", "ቤ", "ብ", "ቦ"] },
  { c: "t", ipa: "t", g: ["ተ", "ቱ", "ቲ", "ታ", "ቴ", "ት", "ቶ"] },
  { c: "č", ipa: "tʃ", g: ["ቸ", "ቹ", "ቺ", "ቻ", "ቼ", "ች", "ቾ"] },
  { c: "n", ipa: "n", g: ["ነ", "ኑ", "ኒ", "ና", "ኔ", "ን", "ኖ"] },
  { c: "ʼ", ipa: "ʔ", g: ["አ", "ኡ", "ኢ", "ኣ", "ኤ", "እ", "ኦ"] },
  { c: "k", ipa: "k", g: ["ከ", "ኩ", "ኪ", "ካ", "ኬ", "ክ", "ኮ"] },
  { c: "w", ipa: "w", g: ["ወ", "ዉ", "ዊ", "ዋ", "ዌ", "ው", "ዎ"] },
  { c: "z", ipa: "z", g: ["ዘ", "ዙ", "ዚ", "ዛ", "ዜ", "ዝ", "ዞ"] },
  { c: "y", ipa: "j", g: ["የ", "ዩ", "ዪ", "ያ", "ዬ", "ይ", "ዮ"] },
  { c: "d", ipa: "d", g: ["ደ", "ዱ", "ዲ", "ዳ", "ዴ", "ድ", "ዶ"] },
  { c: "j", ipa: "dʒ", g: ["ጀ", "ጁ", "ጂ", "ጃ", "ጄ", "ጅ", "ጆ"] },
  { c: "g", ipa: "g", g: ["ገ", "ጉ", "ጊ", "ጋ", "ጌ", "ግ", "ጎ"] },
  { c: "ṭ", ipa: "tʼ", g: ["ጠ", "ጡ", "ጢ", "ጣ", "ጤ", "ጥ", "ጦ"] },
  { c: "č'", ipa: "tʃʼ", g: ["ጨ", "ጩ", "ጪ", "ጫ", "ጬ", "ጭ", "ጮ"] },
  { c: "ṣ", ipa: "sʼ", g: ["ጸ", "ጹ", "ጺ", "ጻ", "ጼ", "ጽ", "ጾ"] },
  { c: "f", ipa: "f", g: ["ፈ", "ፉ", "ፊ", "ፋ", "ፌ", "ፍ", "ፎ"] },
  { c: "p", ipa: "p", g: ["ፐ", "ፑ", "ፒ", "ፓ", "ፔ", "ፕ", "ፖ"] },
];

// ─── VOCABULARY LEVELS (Multilingual) ────────────────────────────
const LEVELS = [
  {
    id: 1,
    name: { en: "Hello! 👋", de: "Hallo! 👋", fr: "Bonjour ! 👋", ar: "!مرحبا 👋" },
    desc: { en: "Greetings & Numbers", de: "Begrüßungen & Zahlen", fr: "Salutations & Nombres", ar: "تحيات وأرقام" },
    icon: "👋", color: "#E8985E",
    words: [
      { en: "peace / hello", de: "Frieden / Hallo", fr: "paix / bonjour", ar: "سلام", tg: "ሰላም", em: "👋" },
      { en: "welcome", de: "Willkommen", fr: "bienvenue", ar: "أهلاً", tg: "መርሐባ", em: "🤗" },
      { en: "how are you? (m)", de: "Wie geht es dir? (m.)", fr: "comment vas-tu ? (m.)", ar: "كيف حالك؟ (ذ)", tg: "ኣንኮሁ ሃሊኪ?", em: "❓" },
      { en: "how are you? (f)", de: "Wie geht es dir? (w.)", fr: "comment vas-tu ? (f.)", ar: "كيف حالكِ؟ (ث)", tg: "ኣንኮሁ ሃሊኪ?", em: "❓" },
      { en: "I am fine", de: "Mir geht es gut", fr: "je vais bien", ar: "أنا بخير", tg: "ሰኒ ሐሊኮ", em: "😊" },
      { en: "thank you", de: "Danke", fr: "merci", ar: "شكراً", tg: "ሹክራን", em: "🙏" },
      { en: "yes", de: "Ja", fr: "oui", ar: "نعم", tg: "ኣይዋ", em: "✅" },
      { en: "no", de: "Nein", fr: "non", ar: "لا", tg: "ላ", em: "❌" },
      { en: "goodbye", de: "Auf Wiedersehen", fr: "au revoir", ar: "مع السلامة", tg: "ደሓን ተትሊካ", em: "👋" },
      { en: "one", de: "Eins", fr: "un", ar: "واحد", tg: "ሓቴ", em: "1️⃣" },
      { en: "two", de: "Zwei", fr: "deux", ar: "اثنان", tg: "ካሌ", em: "2️⃣" },
      { en: "three", de: "Drei", fr: "trois", ar: "ثلاثة", tg: "ሰለስ", em: "3️⃣" },
      { en: "four", de: "Vier", fr: "quatre", ar: "أربعة", tg: "ዓርባዕ", em: "4️⃣" },
      { en: "five", de: "Fünf", fr: "cinq", ar: "خمسة", tg: "ሓምስ", em: "5️⃣" },
      { en: "six", de: "Sechs", fr: "six", ar: "ستة", tg: "ሱስ", em: "6️⃣" },
      { en: "seven", de: "Sieben", fr: "sept", ar: "سبعة", tg: "ሰብዓ", em: "7️⃣" },
      { en: "eight", de: "Acht", fr: "huit", ar: "ثمانية", tg: "ሳማን", em: "8️⃣" },
      { en: "nine", de: "Neun", fr: "neuf", ar: "تسعة", tg: "ቲስዓ", em: "9️⃣" },
      { en: "ten", de: "Zehn", fr: "dix", ar: "عشرة", tg: "ዓሱር", em: "🔟" },
    ]
  },
  {
    id: 2,
    name: { en: "My Family 👨‍👩‍👧", de: "Meine Familie 👨‍👩‍👧", fr: "Ma Famille 👨‍👩‍👧", ar: "عائلتي 👨‍👩‍👧" },
    desc: { en: "Family & People", de: "Familie & Menschen", fr: "Famille & Gens", ar: "العائلة والناس" },
    icon: "👨‍👩‍👧", color: "#C47B5E",
    words: [
      { en: "father", de: "Vater", fr: "père", ar: "أب", tg: "ኣብ", em: "👨" },
      { en: "mother", de: "Mutter", fr: "mère", ar: "أم", tg: "ኣም", em: "👩" },
      { en: "son", de: "Sohn", fr: "fils", ar: "ابن", tg: "ዋድ", em: "👦" },
      { en: "daughter", de: "Tochter", fr: "fille", ar: "بنت", tg: "ወለት", em: "👧" },
      { en: "brother", de: "Bruder", fr: "frère", ar: "أخ", tg: "ሑ", em: "👦" },
      { en: "sister", de: "Schwester", fr: "sœur", ar: "أخت", tg: "ሓት", em: "👧" },
      { en: "boy, child (m)", de: "Junge, Kind (m.)", fr: "garçon, enfant (m.)", ar: "ولد، طفل", tg: "ሂታን", em: "👶" },
      { en: "girl, child (f)", de: "Mädchen, Kind (w.)", fr: "fille, enfant (f.)", ar: "بنت، طفلة", tg: "ዋለት ኒስህ", em: "👶" },
      { en: "man", de: "Mann", fr: "homme", ar: "رجل", tg: "ኣናስ", em: "🧑" },
      { en: "woman", de: "Frau", fr: "femme", ar: "امرأة", tg: "ኣሲት", em: "👩" },
      { en: "grandfather", de: "Großvater", fr: "grand-père", ar: "جد", tg: "ኣብ ኣቡ", em: "👴" },
      { en: "old person", de: "alter Mensch", fr: "personne âgée", ar: "مسن", tg: "ኣቡር", em: "🧓" },
      { en: "people, men", de: "Leute, Männer", fr: "gens, hommes", ar: "ناس، رجال", tg: "ሰብ", em: "👥" },
      { en: "individual, person", de: "Individuum, Person", fr: "individu, personne", ar: "فرد، شخص", tg: "ናፋር", em: "🧍" },
      { en: "crowd, people", de: "Menschenmenge", fr: "foule, gens", ar: "حشد، ناس", tg: "ዓዳም", em: "👥" },
    ]
  },
  {
    id: 3,
    name: { en: "My Body 🫀", de: "Mein Körper 🫀", fr: "Mon Corps 🫀", ar: "جسمي 🫀" },
    desc: { en: "Parts of the body", de: "Körperteile", fr: "Parties du corps", ar: "أجزاء الجسم" },
    icon: "🫀", color: "#D4756B",
    words: [
      { en: "head", de: "Kopf", fr: "tête", ar: "رأس", tg: "ራእስ", em: "🗣️" },
      { en: "eye", de: "Auge", fr: "œil", ar: "عين", tg: "ዓይን", em: "👁️" },
      { en: "ear", de: "Ohr", fr: "oreille", ar: "أذن", tg: "ኣዝን", em: "👂" },
      { en: "mouth", de: "Mund", fr: "bouche", ar: "فم", tg: "ኣፍ", em: "👄" },
      { en: "nose", de: "Nase", fr: "nez", ar: "أنف", tg: "ኣናፍ", em: "👃" },
      { en: "tongue", de: "Zunge", fr: "langue", ar: "لسان", tg: "ለሳን", em: "👅" },
      { en: "tooth", de: "Zahn", fr: "dent", ar: "سن", tg: "ስን", em: "🦷" },
      { en: "hand", de: "Hand", fr: "main", ar: "يد", tg: "እደ", em: "✋" },
      { en: "foot, leg", de: "Fuß, Bein", fr: "pied, jambe", ar: "قدم، رجل", tg: "ዓገር", em: "🦶" },
      { en: "heart", de: "Herz", fr: "cœur", ar: "قلب", tg: "ልብ", em: "❤️" },
      { en: "belly, stomach", de: "Bauch, Magen", fr: "ventre, estomac", ar: "بطن، معدة", tg: "ከርስ", em: "🫄" },
      { en: "back", de: "Rücken", fr: "dos", ar: "ظهر", tg: "ድሕር/ ሂታት", em: "🔙" },
      { en: "blood", de: "Blut", fr: "sang", ar: "دم", tg: "ደም", em: "🩸" },
      { en: "bone", de: "Knochen", fr: "os", ar: "عظم", tg: "ዓጽም", em: "🦴" },
      { en: "skin", de: "Haut", fr: "peau", ar: "جلد", tg: "ጊልድ", em: "🤚" },
      { en: "forehead", de: "Stirn", fr: "front", ar: "جبين", tg: "ብሶት", em: "🤔" },
    ]
  },
  {
    id: 4,
    name: { en: "Animals 🐪", de: "Tiere 🐪", fr: "Animaux 🐪", ar: "حيوانات 🐪" },
    desc: { en: "Creatures big & small", de: "Große & kleine Tiere", fr: "Créatures grandes & petites", ar: "مخلوقات كبيرة وصغيرة" },
    icon: "🐪", color: "#A67B5B",
    words: [
      { en: "cow", de: "Kuh", fr: "vache", ar: "بقرة", tg: "ዋዓት", em: "🐄" },
      { en: "camel", de: "Kamel", fr: "chameau", ar: "جمل", tg: "ገመል", em: "🐪" },
      { en: "horse", de: "Pferd", fr: "cheval", ar: "حصان", tg: "ፈረስ", em: "🐴" },
      { en: "donkey", de: "Esel", fr: "âne", ar: "حمار", tg: "ኣደግ", em: "🫏" },
      { en: "dog", de: "Hund", fr: "chien", ar: "كلب", tg: "ከልብ", em: "🐕" },
      { en: "cat", de: "Katze", fr: "chat", ar: "قطة", tg: "ድሞ", em: "🐈" },
      { en: "sheep", de: "Schaf", fr: "mouton", ar: "خروف", tg: "ባግዕ", em: "🐑" },
      { en: "goat (f)", de: "Ziege (w.)", fr: "chèvre (f.)", ar: "عنزة", tg: "ጣሊት", em: "🐐" },
      { en: "chicken, hen", de: "Huhn, Henne", fr: "poulet, poule", ar: "دجاجة", tg: "ድርሆ", em: "🐔" },
      { en: "monkey", de: "Affe", fr: "singe", ar: "قرد", tg: "ሃበይ", em: "🐒" },
      { en: "lion", de: "Löwe", fr: "lion", ar: "أسد", tg: "ሃየት", em: "🦁" },
      { en: "snake", de: "Schlange", fr: "serpent", ar: "أفعى", tg: "ኣርዌ", em: "🐍" },
      { en: "bird", de: "Vogel", fr: "oiseau", ar: "طائر", tg: "ዖፍ", em: "🐦" },
      { en: "fish", de: "Fisch", fr: "poisson", ar: "سمكة", tg: "ዓሳ", em: "🐟" },
      { en: "hyena", de: "Hyäne", fr: "hyène", ar: "ضبع", tg: "ካረጭ", em: "🦊" },
      { en: "mouse", de: "Maus", fr: "souris", ar: "فأر", tg: "ኣንሳይ/ዋላት በት", em: "🐁" },
    ]
  },
  {
    id: 5,
    name: { en: "Nature 🌍", de: "Natur 🌍", fr: "Nature 🌍", ar: "الطبيعة 🌍" },
    desc: { en: "Sky, earth & weather", de: "Himmel, Erde & Wetter", fr: "Ciel, terre & météo", ar: "السماء والأرض والطقس" },
    icon: "🌍", color: "#6B8E6B",
    words: [
      { en: "sun", de: "Sonne", fr: "soleil", ar: "شمس", tg: "ጸሓይ", em: "☀️" },
      { en: "moon", de: "Mond", fr: "lune", ar: "قمر", tg: "ወርሕ", em: "🌙" },
      { en: "star", de: "Stern", fr: "étoile", ar: "نجمة", tg: "ኮከብ", em: "⭐" },
      { en: "sky", de: "Himmel", fr: "ciel", ar: "سماء", tg: "ሰማይ", em: "🌤️" },
      { en: "earth, land", de: "Erde, Land", fr: "terre", ar: "أرض", tg: "ምድር", em: "🌍" },
      { en: "water", de: "Wasser", fr: "eau", ar: "ماء", tg: "ማይ", em: "💧" },
      { en: "rain", de: "Regen", fr: "pluie", ar: "مطر", tg: "ዘላም", em: "🌧️" },
      { en: "fire", de: "Feuer", fr: "feu", ar: "نار", tg: "ኣሳት", em: "🔥" },
      { en: "wind", de: "Wind", fr: "vent", ar: "رياح", tg: "ነፋስ/ስማል", em: "💨" },
      { en: "tree, wood", de: "Baum, Holz", fr: "arbre, bois", ar: "شجرة", tg: "ዓጸይ", em: "🌳" },
      { en: "stone, rock", de: "Stein, Fels", fr: "pierre, roche", ar: "حجر", tg: "ዓባን", em: "🪨" },
      { en: "mountain", de: "Berg", fr: "montagne", ar: "جبل", tg: "ደብር", em: "⛰️" },
      { en: "night", de: "Nacht", fr: "nuit", ar: "ليل", tg: "ላሊ", em: "🌙" },
      { en: "day, daytime", de: "Tag", fr: "jour", ar: "يوم", tg: "ዮም", em: "🌞" },
      { en: "sea", de: "Meer", fr: "mer", ar: "بحر", tg: "በሐረ", em: "🌊" },
      { en: "river", de: "Fluss", fr: "rivière", ar: "نهر", tg: "ማሓዝ", em: "🏞️" },
    ]
  },
  {
    id: 6,
    name: { en: "Yummy! ☕", de: "Lecker! ☕", fr: "Miam ! ☕", ar: "!لذيذ ☕" },
    desc: { en: "Food & drink", de: "Essen & Trinken", fr: "Nourriture & boissons", ar: "طعام وشراب" },
    icon: "☕", color: "#8B6B4E",
    words: [
      { en: "to eat (food)", de: "essen", fr: "manger", ar: "أكل", tg: "በልዐ", em: "🍽️" },
      { en: "milk", de: "Milch", fr: "lait", ar: "حليب", tg: "ሐሊብ", em: "🥛" },
      { en: "bread", de: "Brot", fr: "pain", ar: "خبز", tg: "እንገራ", em: "🍞" },
      { en: "meat, flesh", de: "Fleisch", fr: "viande", ar: "لحم", tg: "ስጋ", em: "🥩" },
      { en: "butter", de: "Butter", fr: "beurre", ar: "زبدة", tg: "ዝብደት", em: "🧈" },
      { en: "honey", de: "Honig", fr: "miel", ar: "عسل", tg: "ማዓር", em: "🍯" },
      { en: "salt", de: "Salz", fr: "sel", ar: "ملح", tg: "ጨው", em: "🧂" },
      { en: "coffee", de: "Kaffee", fr: "café", ar: "قهوة", tg: "ቡን", em: "☕" },
      { en: "sugar", de: "Zucker", fr: "sucre", ar: "سكر", tg: "ሱኳር", em: "🍬" },
      { en: "egg", de: "Ei", fr: "œuf", ar: "بيضة", tg: "ኣንቆቕሆ", em: "🥚" },
      { en: "pepper", de: "Pfeffer", fr: "poivre", ar: "فلفل", tg: "በርበረ", em: "🌶️" },
      { en: "bean", de: "Bohne", fr: "haricot", ar: "فول", tg: "ፉል", em: "🫘" },
      { en: "leavened bread", de: "Sauerteigbrot", fr: "pain levé", ar: "خبز مخمر", tg: "ሕሙስ", em: "🫓" },
      { en: "dates (dry)", de: "Datteln", fr: "dattes", ar: "تمر", tg: "ተመር", em: "🌴" },
    ]
  },
  {
    id: 7,
    name: { en: "Colors 🎨", de: "Farben 🎨", fr: "Couleurs 🎨", ar: "ألوان 🎨" },
    desc: { en: "Colors & descriptions", de: "Farben & Beschreibungen", fr: "Couleurs & descriptions", ar: "ألوان وأوصاف" },
    icon: "🎨", color: "#7B6B9E",
    words: [
      { en: "white", de: "Weiß", fr: "blanc", ar: "أبيض", tg: "ሳዕዳ", em: "⬜" },
      { en: "black", de: "Schwarz", fr: "noir", ar: "أسود", tg: "ጸሊም", em: "⬛" },
      { en: "red", de: "Rot", fr: "rouge", ar: "أحمر", tg: "ቀይሕ", em: "🟥" },
      { en: "green", de: "Grün", fr: "vert", ar: "أخضر", tg: "ኣኽደር", em: "🟩" },
      { en: "big, large", de: "Groß", fr: "grand", ar: "كبير", tg: "ዓቢ", em: "📐" },
      { en: "small, little", de: "Klein", fr: "petit", ar: "صغير", tg: "ንኡሽ", em: "🤏" },
      { en: "tall, long", de: "Groß, lang", fr: "grand, long", ar: "طويل", tg: "ረይም", em: "📏" },
      { en: "short", de: "Kurz", fr: "court", ar: "قصير", tg: "ሃቺር", em: "📏" },
      { en: "good", de: "Gut", fr: "bon", ar: "جيد", tg: "ሳኒ", em: "👍" },
      { en: "bad", de: "Schlecht", fr: "mauvais", ar: "سيء", tg: "ኩፉ", em: "👎" },
      { en: "new", de: "Neu", fr: "nouveau", ar: "جديد", tg: "ሓዲስ", em: "✨" },
      { en: "old (aged)", de: "Alt", fr: "vieux", ar: "قديم", tg: "ጋዲም", em: "🕰️" },
      { en: "near", de: "Nah", fr: "proche", ar: "قريب", tg: "ቃሩብ", em: "📍" },
      { en: "many, much", de: "Viel", fr: "beaucoup", ar: "كثير", tg: "ባዙሕ", em: "📊" },
      { en: "pretty, handsome", de: "Hübsch", fr: "beau", ar: "جميل", tg: "ግሩም", em: "🌸" },
      { en: "strong", de: "Stark", fr: "fort", ar: "قوي", tg: "ደጉብ", em: "💪" },
      { en: "brave", de: "Mutig", fr: "courageux", ar: "شجاع", tg: "ፋዳብ", em: "🦁" },
    ]
  },
  {
    id: 8,
    name: { en: "My World 🏠", de: "Meine Welt 🏠", fr: "Mon Monde 🏠", ar: "عالمي 🏠" },
    desc: { en: "Things & places", de: "Dinge & Orte", fr: "Choses & lieux", ar: "أشياء وأماكن" },
    icon: "🏠", color: "#5E8EA8",
    words: [
      { en: "house", de: "Haus", fr: "maison", ar: "بيت", tg: "ቤት", em: "🏠" },
      { en: "door, gate", de: "Tür, Tor", fr: "porte", ar: "باب", tg: "ባብ", em: "🚪" },
      { en: "road, way", de: "Straße, Weg", fr: "route, chemin", ar: "طريق", tg: "ገባይ", em: "🛣️" },
      { en: "name", de: "Name", fr: "nom", ar: "اسم", tg: "ስም", em: "📛" },
      { en: "clothes", de: "Kleidung", fr: "vêtements", ar: "ملابس", tg: "ለባስ", em: "👕" },
      { en: "knife", de: "Messer", fr: "couteau", ar: "سكين", tg: "ሰኪን", em: "🔪" },
      { en: "book", de: "Buch", fr: "livre", ar: "كتاب", tg: "ካታብ", em: "📖" },
      { en: "sword", de: "Schwert", fr: "épée", ar: "سيف", tg: "ሰያፍ", em: "⚔️" },
      { en: "gold", de: "Gold", fr: "or", ar: "ذهب", tg: "ወርቅ", em: "🥇" },
      { en: "window", de: "Fenster", fr: "fenêtre", ar: "نافذة", tg: "ርምስኮት", em: "🪟" },
      { en: "village, tribe", de: "Dorf, Stamm", fr: "village, tribu", ar: "قرية، قبيلة", tg: "ዓድ", em: "🏘️" },
      { en: "place", de: "Ort", fr: "lieu", ar: "مكان", tg: "ኣካን", em: "📍" },
      { en: "bed", de: "Bett", fr: "lit", ar: "سرير", tg: "ዓርቃይ", em: "🛏️" },
      { en: "work", de: "Arbeit", fr: "travail", ar: "عمل", tg: "ዋራት/ሹኩለ", em: "⚒️" },
      { en: "year", de: "Jahr", fr: "année", ar: "سنة", tg: "ሳናት", em: "📅" },
      { en: "money", de: "Geld", fr: "argent", ar: "مال", tg: "ግርሸ", em: "💰" },
    ]
  },
  {
    id: 9,
    name: { en: "Let's Do! 🏃", de: "Los geht's! 🏃", fr: "Allons-y ! 🏃", ar: "!هيا نفعل 🏃" },
    desc: { en: "Common verbs", de: "Häufige Verben", fr: "Verbes courants", ar: "أفعال شائعة" },
    icon: "🏃", color: "#5B7E6B",
    words: [
      { en: "to drink", de: "trinken", fr: "boire", ar: "شرب", tg: "ሰተ", em: "🥤" },
      { en: "to go", de: "gehen", fr: "aller", ar: "ذهب", tg: "ገሳ", em: "🚶" },
      { en: "to come", de: "kommen", fr: "venir", ar: "جاء", tg: "መጽእ", em: "🏃" },
      { en: "to see", de: "sehen", fr: "voir", ar: "رأى", tg: "ርኤ", em: "👀" },
      { en: "to hear", de: "hören", fr: "entendre", ar: "سمع", tg: "ሰምዐ", em: "👂" },
      { en: "to say, speak", de: "sagen, sprechen", fr: "dire, parler", ar: "قال، تكلم", tg: "በለ", em: "🗣️" },
      { en: "to give", de: "geben", fr: "donner", ar: "أعطى", tg: "ሀበ", em: "🤲" },
      { en: "to sleep", de: "schlafen", fr: "dormir", ar: "نام", tg: "ስካብ", em: "😴" },
      { en: "to know", de: "wissen", fr: "savoir", ar: "عرف", tg: "ኣመረ", em: "🧠" },
      { en: "to read", de: "lesen", fr: "lire", ar: "قرأ", tg: "ቀርኤ", em: "📖" },
      { en: "to write", de: "schreiben", fr: "écrire", ar: "كتب", tg: "ከትበ", em: "✍️" },
      { en: "to sit (down)", de: "sich setzen", fr: "s'asseoir", ar: "جلس", tg: "ተጋሰ", em: "🪑" },
      { en: "to do, make", de: "tun, machen", fr: "faire", ar: "فعل", tg: "ዋደ", em: "🔨" },
      { en: "to kill", de: "töten", fr: "tuer", ar: "قتل", tg: "ቀትለ", em: "⚔️" },
      { en: "to die", de: "sterben", fr: "mourir", ar: "مات", tg: "ሞተ", em: "🖤" },
    ]
  },
  {
    id: 10,
    name: { en: "Talk! 💬", de: "Sprich! 💬", fr: "Parle ! 💬", ar: "!تكلم 💬" },
    desc: { en: "Useful phrases", de: "Nützliche Sätze", fr: "Phrases utiles", ar: "عبارات مفيدة" },
    icon: "💬", color: "#6B5E8E",
    words: [
      { en: "What is your name?", de: "Wie heißt du?", fr: "Comment t'appelles-tu ?", ar: "ما اسمك؟", tg: "መን ስምካ?", em: "❓" },
      { en: "My name is…", de: "Mein Name ist…", fr: "Mon nom est…", ar: "اسمي…", tg: "ስምየ…", em: "📛" },
      { en: "I know", de: "Ich weiß", fr: "Je sais", ar: "أعرف", tg: "ኣምር", em: "✅" },
      { en: "I don't know", de: "Ich weiß nicht", fr: "Je ne sais pas", ar: "لا أعرف", tg: "ኢ ኣምር", em: "❌" },
      { en: "please (m)", de: "Bitte (m.)", fr: "s'il te plaît (m.)", ar: "من فضلك (ذ)", tg: "በጃኻ", em: "🙏" },
      { en: "come here!", de: "Komm her!", fr: "viens ici !", ar: "تعال هنا!", tg: "ናዓ", em: "👈" },
      { en: "I am hungry", de: "Ich bin hungrig", fr: "j'ai faim", ar: "أنا جائع", tg: "ሳፍርኮ", em: "😋" },
      { en: "how much?", de: "Wie viel?", fr: "combien ?", ar: "كم؟", tg: "ካም?", em: "💰" },
      { en: "where?", de: "Wo?", fr: "où ?", ar: "أين؟", tg: "ኣታያ?", em: "📍" },
      { en: "today", de: "Heute", fr: "aujourd'hui", ar: "اليوم", tg: "ዮም", em: "📅" },
      { en: "tomorrow", de: "Morgen", fr: "demain", ar: "غداً", tg: "ገዘም", em: "📆" },
      { en: "there is / exists", de: "Es gibt", fr: "il y a", ar: "يوجد", tg: "ሃላ", em: "✔️" },
      { en: "there is not", de: "Es gibt nicht", fr: "il n'y a pas", ar: "لا يوجد", tg: "ኣልቡ", em: "✖️" },
      { en: "goodbye", de: "Auf Wiedersehen", fr: "au revoir", ar: "مع السلامة", tg: "ደሓን ተትሊካ", em: "🤲" },
    ]
  },
  {
    id: 11,
    name: { en: "I & You 🫵", de: "Ich & Du 🫵", fr: "Moi & Toi 🫵", ar: "أنا وأنت 🫵" },
    desc: { en: "Pronouns & grammar words", de: "Pronomen & Grammatikwörter", fr: "Pronoms & mots grammaticaux", ar: "ضمائر وكلمات نحوية" },
    icon: "🫵", color: "#4E7B8B",
    words: [
      { en: "I", de: "ich", fr: "je", ar: "أنا", tg: "ኣነ", em: "🙋" },
      { en: "you (m)", de: "du (m.)", fr: "tu (m.)", ar: "أنتَ", tg: "ኣንተ", em: "🫵" },
      { en: "you (f)", de: "du (w.)", fr: "tu (f.)", ar: "أنتِ", tg: "ኣንቲ", em: "🫵" },
      { en: "he", de: "er", fr: "il", ar: "هو", tg: "ሁቱ", em: "👨" },
      { en: "she", de: "sie", fr: "elle", ar: "هي", tg: "ሁታ", em: "👩" },
      { en: "we", de: "wir", fr: "nous", ar: "نحن", tg: "ሁነ", em: "👥" },
      { en: "they (m)", de: "sie (m. Pl.)", fr: "ils", ar: "هم", tg: "ሁቶም", em: "👬" },
      { en: "they (f)", de: "sie (w. Pl.)", fr: "elles", ar: "هن", tg: "ሁታን", em: "👭" },
      { en: "this (m)", de: "dieser (m.)", fr: "ce (m.)", ar: "هذا", tg: "ዕሊ", em: "👈" },
      { en: "this (f)", de: "diese (w.)", fr: "cette (f.)", ar: "هذه", tg: "ዕላ", em: "👉" },
      { en: "what?", de: "was?", fr: "quoi ?", ar: "ماذا؟", tg: "ሚ", em: "❓" },
      { en: "who?", de: "wer?", fr: "qui ?", ar: "من؟", tg: "መን", em: "🤷" },
      { en: "someone (m)", de: "jemand (m.)", fr: "quelqu'un (m.)", ar: "شخص ما", tg: "ዎሮ", em: "🧑" },
      { en: "nobody", de: "niemand", fr: "personne", ar: "لا أحد", tg: "መንማ", em: "🚫" },
      { en: "something", de: "etwas", fr: "quelque chose", ar: "شيء ما", tg: "ጋሌ", em: "📦" },
      { en: "nothing", de: "nichts", fr: "rien", ar: "لا شيء", tg: "ሰማ", em: "🕳️" },
      { en: "all, every", de: "alles, jeder", fr: "tout", ar: "كل", tg: "ኵሉ", em: "🌐" },
      { en: "self", de: "selbst", fr: "soi-même", ar: "نفس", tg: "ኖስ", em: "🪞" },
    ]
  },
  {
    id: 12,
    name: { en: "Time ⏰", de: "Zeit ⏰", fr: "Temps ⏰", ar: "الوقت ⏰" },
    desc: { en: "Time, numbers & seasons", de: "Zeit, Zahlen & Jahreszeiten", fr: "Temps, nombres & saisons", ar: "وقت وأرقام ومواسم" },
    icon: "⏰", color: "#8E6B5E",
    words: [
      { en: "yesterday", de: "gestern", fr: "hier", ar: "أمس", tg: "ማሌ", em: "⏪" },
      { en: "twenty", de: "zwanzig", fr: "vingt", ar: "عشرون", tg: "ዕስራ", em: "2️⃣0️⃣" },
      { en: "thirty", de: "dreißig", fr: "trente", ar: "ثلاثون", tg: "ሰላሳ", em: "3️⃣0️⃣" },
      { en: "forty", de: "vierzig", fr: "quarante", ar: "أربعون", tg: "ዓርብዓ", em: "4️⃣0️⃣" },
      { en: "fifty", de: "fünfzig", fr: "cinquante", ar: "خمسون", tg: "ሓምሳ", em: "5️⃣0️⃣" },
      { en: "sixty", de: "sechzig", fr: "soixante", ar: "ستون", tg: "ሱስትሳ", em: "6️⃣0️⃣" },
      { en: "hundred", de: "hundert", fr: "cent", ar: "مئة", tg: "ምዓት", em: "💯" },
      { en: "number, quantity", de: "Zahl, Menge", fr: "nombre", ar: "عدد", tg: "ዓዳድ", em: "#️⃣" },
      { en: "first", de: "erster", fr: "premier", ar: "أول", tg: "ኣዋላይ", em: "🥇" },
      { en: "second", de: "zweiter", fr: "deuxième", ar: "ثاني", tg: "ካላይ", em: "🥈" },
      { en: "third", de: "dritter", fr: "troisième", ar: "ثالث", tg: "ሰለሳይ", em: "🥉" },
    ]
  },
  {
    id: 13,
    name: { en: "Connect 🔗", de: "Verbindung 🔗", fr: "Relier 🔗", ar: "ربط 🔗" },
    desc: { en: "Prepositions & conjunctions", de: "Präpositionen & Konjunktionen", fr: "Prépositions & conjonctions", ar: "حروف جر وعطف" },
    icon: "🔗", color: "#5E6B8E",
    words: [
      { en: "in, at, to", de: "in, an, zu", fr: "dans, à, en", ar: "في", tg: "ዓት", em: "📌" },
      { en: "from", de: "von, aus", fr: "de, depuis", ar: "من", tg: "ሙን", em: "↗️" },
      { en: "with, by", de: "mit, durch", fr: "avec, par", ar: "مع", tg: "ዓብ", em: "🤝" },
      { en: "for, to", de: "für, zu", fr: "à, pour", ar: "لـ", tg: "ዓጋሌ", em: "🎯" },
      { en: "after, behind", de: "nach, hinter", fr: "après", ar: "بعد", tg: "ሃቆ", em: "⏩" },
      { en: "like, as", de: "wie, als", fr: "comme", ar: "مثل", tg: "ካምሳሌ", em: "⚖️" },
      { en: "without", de: "ohne", fr: "sans", ar: "بدون", tg: "ዓምባሌ", em: "🚫" },
      { en: "and", de: "und", fr: "et", ar: "و", tg: "ዋ", em: "➕" },
      { en: "or", de: "oder", fr: "ou", ar: "أو", tg: "ማ", em: "↔️" },
      { en: "but", de: "aber", fr: "mais", ar: "لكن", tg: "ዳዓም", em: "🔄" },
      { en: "when", de: "als, wenn", fr: "quand", ar: "عندما", tg: "ዲብ", em: "🕐" },
      { en: "because", de: "weil", fr: "parce que", ar: "لأن", tg: "ዓቢ ሊ", em: "💡" },
      { en: "although", de: "obwohl", fr: "bien que", ar: "رغم أن", tg: "ሙንሜ", em: "🤔" },
      { en: "of, belonging to", de: "von, gehörend zu", fr: "de, appartenant à", ar: "ملك", tg: "ናይ", em: "🏷️" },
      { en: "he is (copula)", de: "er ist", fr: "il est", ar: "هو (رابطة)", tg: "ቱ", em: "▶️" },
      { en: "is not", de: "ist nicht", fr: "n'est pas", ar: "ليس", tg: "ኢኮን", em: "⛔" },
    ]
  },
];


// ─── TIGRE GRAMMAR (Based on Shlomo Raz, "Tigre Grammar and Texts", 1983) ────
// ─── GRAMMAR ─────────────────────────────────────────────────────────────────
//  Topics are ordered as a learning path: sentence basics → nouns → verbs.
//
//  Topic  : { id, icon, color, title, desc, sections[] }
//  Section: { heading, rule?, items?, examples? }
//    rule     — the plain-language explanation, shown in a highlighted box
//    items    — form table        : { label, tg, note? }
//    examples — sample phrases    : { label, tg, lit? }
//
//  tg: "" means the Tigre form is still to be filled in. The app shows a dash
//  for it, and the grammar quiz simply skips it until a form is added.
const GRAMMAR = [
  {
    id: "word-order", icon: "🧩", color: "#6C3483",
    title: { en: "Sentence Basics", ar: "أساسيات الجملة", fr: "Bases de la Phrase", de: "Satzbau-Grundlagen" },
    desc: { en: "How a Tigre sentence is put together", ar: "كيف تُبنى الجملة التقروية", fr: "Comment se construit une phrase tigré", de: "Wie ein Tigre-Satz gebaut wird" },
    sections: [
      {
        heading: { en: "Rule 1 — The verb comes last", ar: "القاعدة ١ — الفعل في آخر الجملة", fr: "Règle 1 — Le verbe vient en dernier", de: "Regel 1 — Das Verb steht am Ende" },
        rule: {
          en: "A Tigre sentence runs Subject → Object → Verb. English puts the verb in the middle (\"I drink water\"); Tigre puts it at the end (\"I water drink\"). Whatever else the sentence contains, the verb closes it.",
          ar: "ترتيب الجملة التقروية: فاعل ← مفعول ← فعل. الإنجليزية تضع الفعل في الوسط («أنا أشرب الماء»)، والتقري تضعه في النهاية («أنا الماء أشرب»). الفعل يُغلق الجملة دائماً.",
          fr: "Une phrase tigré suit l'ordre Sujet → Objet → Verbe. L'anglais place le verbe au milieu (« je bois de l'eau ») ; le tigré le place à la fin (« je eau bois »). Le verbe termine toujours la phrase.",
          de: "Ein Tigre-Satz folgt der Ordnung Subjekt → Objekt → Verb. Englisch stellt das Verb in die Mitte („ich trinke Wasser“), Tigre ans Ende („ich Wasser trinke“). Das Verb schließt den Satz immer ab."
        },
        examples: [
          { label: { en: "I drink water.", ar: "أنا أشرب الماء.", fr: "Je bois de l'eau.", de: "Ich trinke Wasser." }, tg: "", lit: { en: "word by word: I — water — drink", ar: "كلمة بكلمة: أنا — ماء — أشرب", fr: "mot à mot : je — eau — bois", de: "Wort für Wort: ich — Wasser — trinke" } },
          { label: { en: "The boy sees the dog.", ar: "الولد يرى الكلب.", fr: "Le garçon voit le chien.", de: "Der Junge sieht den Hund." }, tg: "", lit: { en: "word by word: the boy — the dog — sees", ar: "كلمة بكلمة: الولد — الكلب — يرى", fr: "mot à mot : le garçon — le chien — voit", de: "Wort für Wort: der Junge — der Hund — sieht" } },
          { label: { en: "Mother cooked the food.", ar: "الأم طبخت الطعام.", fr: "La mère a cuisiné le repas.", de: "Die Mutter kochte das Essen." }, tg: "", lit: { en: "word by word: mother — the food — cooked", ar: "كلمة بكلمة: الأم — الطعام — طبخت", fr: "mot à mot : la mère — le repas — a cuisiné", de: "Wort für Wort: die Mutter — das Essen — kochte" } },
        ]
      },
      {
        heading: { en: "Rule 2 — Describing words go in front", ar: "القاعدة ٢ — الوصف يتقدّم الاسم", fr: "Règle 2 — Les mots qui décrivent précèdent", de: "Regel 2 — Beschreibende Wörter stehen davor" },
        rule: {
          en: "Anything that describes a noun stands before it: adjectives, numbers, \"this / that\", and the definite marker. So you say \"good man\", never \"man good\".",
          ar: "كل ما يصف الاسم يتقدّم عليه: الصفة، والعدد، وأسماء الإشارة، وأداة التعريف. فتقول «جيد رجل» ولا تقول «رجل جيد».",
          fr: "Tout ce qui décrit un nom se place avant lui : adjectifs, nombres, démonstratifs et marque du défini. On dit donc « bon homme », jamais « homme bon ».",
          de: "Alles, was ein Nomen beschreibt, steht davor: Adjektive, Zahlen, „dieser/jener“ und der Bestimmtheitsmarker. Man sagt also „guter Mann“, nie „Mann guter“."
        },
        examples: [
          { label: { en: "a good man", ar: "رجل جيد", fr: "un homme bon", de: "ein guter Mann" }, tg: "ሳኒ ዓናስ", lit: { en: "good — man", ar: "جيد — رجل", fr: "bon — homme", de: "gut — Mann" } },
          { label: { en: "the big house", ar: "البيت الكبير", fr: "la grande maison", de: "das große Haus" }, tg: "", lit: { en: "the — big — house", ar: "الـ — كبير — بيت", fr: "le — grand — maison", de: "das — groß — Haus" } },
          { label: { en: "three children", ar: "ثلاثة أطفال", fr: "trois enfants", de: "drei Kinder" }, tg: "", lit: { en: "three — child", ar: "ثلاثة — طفل", fr: "trois — enfant", de: "drei — Kind" } },
        ]
      },
      {
        heading: { en: "Rule 3 — Little words become endings", ar: "القاعدة ٣ — الكلمات الصغيرة تصبح لواحق", fr: "Règle 3 — Les petits mots deviennent des terminaisons", de: "Regel 3 — Kleine Wörter werden Endungen" },
        rule: {
          en: "Tigre has no separate words for \"my\", \"your\", \"him\", \"her\". They are short endings glued onto the end of the noun or the verb. The two topics Possessive Endings and Object Endings cover them in full.",
          ar: "لا توجد في التقري كلمات مستقلة لـ «ـي، ـك، ـه، ـها»؛ بل لواحق قصيرة تُلصق بآخر الاسم أو الفعل. راجع درسي «لواحق الملكية» و«لواحق المفعول».",
          fr: "Le tigré n'a pas de mots séparés pour « mon », « ton », « le », « la » : ce sont de courtes terminaisons collées à la fin du nom ou du verbe. Voir les leçons Suffixes possessifs et Suffixes d'objet.",
          de: "Tigre hat keine eigenen Wörter für „mein“, „dein“, „ihn“, „sie“. Es sind kurze Endungen, die an Nomen oder Verb angehängt werden. Die Lektionen Possessivendungen und Objektendungen zeigen alle Formen."
        },
        examples: [
          { label: { en: "house", ar: "بيت", fr: "maison", de: "Haus" }, tg: "ቤት" },
          { label: { en: "my house", ar: "بيتي", fr: "ma maison", de: "mein Haus" }, tg: "ቤትየ", lit: { en: "house + my", ar: "بيت + ـي", fr: "maison + mon", de: "Haus + mein" } },
          { label: { en: "his house", ar: "بيته", fr: "sa maison (à lui)", de: "sein Haus" }, tg: "ቤቱ", lit: { en: "house + his", ar: "بيت + ـه", fr: "maison + son", de: "Haus + sein" } },
        ]
      },
    ]
  },
  {
    id: "pronouns", icon: "👤", color: "#E8541A",
    title: { en: "Personal Pronouns", ar: "الضمائر الشخصية", fr: "Pronoms Personnels", de: "Personalpronomen" },
    desc: { en: "I, you, he, she, we, they", ar: "أنا، أنت، هو، هي، نحن، هم", fr: "Je, tu, il, elle, nous, ils", de: "Ich, du, er, sie, wir, sie" },
    sections: [
      {
        heading: { en: "One person (singular)", ar: "المفرد", fr: "Une personne (singulier)", de: "Eine Person (Singular)" },
        rule: {
          en: "There is one word for \"I\", used by men and women alike. But \"you\" splits by gender: one form when you speak to a man, another when you speak to a woman. \"He\" and \"she\" are likewise two different words.",
          ar: "لـ«أنا» كلمة واحدة يستخدمها الرجال والنساء. أما «أنت» فتختلف بحسب الجنس: صيغة للمذكر وأخرى للمؤنث. وكذلك «هو» و«هي» كلمتان مختلفتان.",
          fr: "Il n'y a qu'un mot pour « je », employé par les hommes comme par les femmes. Mais « tu » distingue le genre : une forme pour un homme, une autre pour une femme. « Il » et « elle » sont aussi deux mots distincts.",
          de: "Für „ich“ gibt es nur ein Wort, das Männer und Frauen gleich benutzen. „Du“ unterscheidet aber das Geschlecht: eine Form für einen Mann, eine andere für eine Frau. Auch „er“ und „sie“ sind zwei verschiedene Wörter."
        },
        items: [
          { label: { en: "I (m. & f.)", ar: "أنا (مذكر ومؤنث)", fr: "je (m. et f.)", de: "ich (m. & w.)" }, tg: "ኣነ" },
          { label: { en: "you — to a man", ar: "أنتَ", fr: "tu — à un homme", de: "du — zu einem Mann" }, tg: "ኣንተ" },
          { label: { en: "you — to a woman", ar: "أنتِ", fr: "tu — à une femme", de: "du — zu einer Frau" }, tg: "ኣንቲ" },
          { label: { en: "he", ar: "هو", fr: "il", de: "er" }, tg: "ሁቱ" },
          { label: { en: "she", ar: "هي", fr: "elle", de: "sie" }, tg: "ሁታ" },
        ]
      },
      {
        heading: { en: "More than one (plural)", ar: "الجمع", fr: "Plusieurs (pluriel)", de: "Mehrere (Plural)" },
        rule: {
          en: "The plural splits by gender too: one set for groups of men (or mixed groups), another for groups of women only. \"We\" has a single form, like \"I\".",
          ar: "الجمع أيضاً يتبع الجنس: صيغة لجماعة الرجال (أو المختلطة) وأخرى لجماعة النساء فقط. أما «نحن» فلها صيغة واحدة مثل «أنا».",
          fr: "Le pluriel distingue aussi le genre : une série pour les groupes d'hommes (ou mixtes), une autre pour les groupes de femmes seulement. « Nous » n'a qu'une forme, comme « je ».",
          de: "Auch der Plural unterscheidet das Geschlecht: eine Reihe für Männergruppen (oder gemischte), eine andere für rein weibliche Gruppen. „Wir“ hat wie „ich“ nur eine Form."
        },
        items: [
          { label: { en: "we (m. & f.)", ar: "نحن", fr: "nous (m. et f.)", de: "wir (m. & w.)" }, tg: "ሁነ" },
          { label: { en: "you all — men / mixed", ar: "أنتم", fr: "vous — hommes / mixte", de: "ihr — Männer / gemischt" }, tg: "ኣንቱም" },
          { label: { en: "you all — women", ar: "أنتن", fr: "vous — femmes", de: "ihr — Frauen" }, tg: "ኣንታን" },
          { label: { en: "they — men / mixed", ar: "هم", fr: "ils — hommes / mixte", de: "sie — Männer / gemischt" }, tg: "ሁቶም" },
          { label: { en: "they — women", ar: "هن", fr: "elles — femmes", de: "sie — Frauen" }, tg: "ሁታን" },
        ]
      },
      {
        heading: { en: "Good to know", ar: "معلومات مفيدة", fr: "Bon à savoir", de: "Gut zu wissen" },
        rule: {
          en: "Use the plural \"you\" to address one person politely — exactly like French vous or German Sie. And because the verb already shows who is acting, the pronoun is often left out; you add it for emphasis or contrast.",
          ar: "استخدم صيغة الجمع للمخاطب عند التأدّب مع شخص واحد، تماماً كما في الفرنسية. ولأن الفعل يبيّن الفاعل أصلاً، كثيراً ما يُحذف الضمير ولا يُذكر إلا للتوكيد أو المقابلة.",
          fr: "Employez le « vous » pluriel pour s'adresser poliment à une seule personne, comme en français. Et comme le verbe indique déjà qui agit, le pronom est souvent omis : on l'ajoute pour insister ou opposer.",
          de: "Der Plural von „du“ dient als höfliche Anrede für eine Person — genau wie das deutsche „Sie“. Und da das Verb schon zeigt, wer handelt, wird das Pronomen oft weggelassen; man setzt es zur Betonung oder zum Kontrast."
        },
        items: [
          { label: { en: "polite \"you\" (to one person)", ar: "صيغة التأدّب للمخاطب الواحد", fr: "« vous » de politesse (une personne)", de: "höfliches „Sie“ (eine Person)" }, tg: "ኣንቱም" },
          { label: { en: "polite \"he / she\" (about one person)", ar: "صيغة التأدّب للغائب الواحد", fr: "« il / elle » de politesse", de: "höfliches „er / sie“" }, tg: "ሁቶም" },
        ]
      },
    ]
  },
  {
    id: "copula", icon: "🔵", color: "#2980B9",
    title: { en: "Is, There Is, Have", ar: "الكينونة والوجود والملك", fr: "Être, Il y a, Avoir", de: "Sein, Es gibt, Haben" },
    desc: { en: "Saying what exists and what you own", ar: "التعبير عن الوجود والملكية", fr: "Dire ce qui existe et ce qu'on possède", de: "Ausdrücken, was existiert und was man hat" },
    sections: [
      {
        heading: { en: "\"There is\" — right now", ar: "«يوجد» في الحاضر", fr: "« Il y a » — au présent", de: "„Es gibt“ — jetzt" },
        rule: {
          en: "One word carries the meaning \"there is / there are / exists\" in the present. It takes personal endings like an ordinary verb, so it can also mean \"I am (present, here)\".",
          ar: "كلمة واحدة تؤدي معنى «يوجد / يوجدون» في الحاضر، وتأخذ لواحق الأشخاص كأي فعل، فتفيد أيضاً «أنا موجود».",
          fr: "Un seul mot exprime « il y a / il existe » au présent. Il prend les terminaisons personnelles comme un verbe ordinaire et peut donc aussi signifier « je suis là ».",
          de: "Ein Wort trägt die Bedeutung „es gibt / es existiert“ in der Gegenwart. Es nimmt Personalendungen wie ein normales Verb und kann daher auch „ich bin da“ heißen."
        },
        items: [
          { label: { en: "there is / there are", ar: "يوجد / هناك", fr: "il y a", de: "es gibt" }, tg: "ሃላ" },
        ]
      },
      {
        heading: { en: "\"There was\" — in the past", ar: "«كان يوجد» في الماضي", fr: "« Il y avait » — au passé", de: "„Es gab“ — Vergangenheit" },
        rule: {
          en: "For past time, swap in the past existence word. Same job, earlier time.",
          ar: "للماضي تُستبدل بكلمة الوجود في الماضي؛ الوظيفة نفسها والزمن أسبق.",
          fr: "Pour le passé, on utilise le mot d'existence au passé : même rôle, temps antérieur.",
          de: "Für die Vergangenheit nimmt man das Existenzwort der Vergangenheit — gleiche Funktion, früherer Zeitpunkt."
        },
        items: [
          { label: { en: "there was / there were", ar: "كان / كان يوجد", fr: "il y avait", de: "es gab" }, tg: "ዓለ / ዓለው" },
        ]
      },
      {
        heading: { en: "How to say \"I have\"", ar: "كيف تقول «عندي»", fr: "Comment dire « j'ai »", de: "Wie man „ich habe“ sagt" },
        rule: {
          en: "Tigre has no verb \"to have\". You say \"there is to me\": the existence word plus the ending for \"to me / to you / to him\". So \"I have a house\" is literally \"a house there-is to-me\".",
          ar: "لا يوجد في التقري فعل «يملك». تقول «يوجد لي»: كلمة الوجود مع لاحقة «لي / لك / له». فـ«عندي بيت» حرفياً «بيت يوجد لي».",
          fr: "Le tigré n'a pas de verbe « avoir ». On dit « il y a à moi » : le mot d'existence plus la terminaison « à moi / à toi / à lui ». Ainsi « j'ai une maison » est littéralement « une maison il-y-a à-moi ».",
          de: "Tigre hat kein Verb „haben“. Man sagt „es gibt mir“: das Existenzwort plus die Endung „mir / dir / ihm“. „Ich habe ein Haus“ heißt wörtlich „ein Haus es-gibt mir“."
        },
        items: [
          { label: { en: "I have", ar: "عندي", fr: "j'ai", de: "ich habe" }, tg: "ሃሌኩ ዓልዬ" },
        ],
        examples: [
          { label: { en: "I have a house.", ar: "عندي بيت.", fr: "J'ai une maison.", de: "Ich habe ein Haus." }, tg: "", lit: { en: "a house — there is — to me", ar: "بيت — يوجد — لي", fr: "une maison — il y a — à moi", de: "ein Haus — es gibt — mir" } },
          { label: { en: "Do you have water?", ar: "عندك ماء؟", fr: "As-tu de l'eau ?", de: "Hast du Wasser?" }, tg: "", lit: { en: "water — there is — to you?", ar: "ماء — يوجد — لك؟", fr: "eau — il y a — à toi ?", de: "Wasser — es gibt — dir?" } },
        ]
      },
      {
        heading: { en: "Saying \"A is B\"", ar: "التعبير عن «س هو ص»", fr: "Dire « A est B »", de: "„A ist B“ sagen" },
        rule: {
          en: "In the present there is no separate verb \"to be\" in a sentence like \"I am a teacher\". For the 1st and 2nd person the pronoun itself does the linking work; the 3rd person uses a short linking form of its own.",
          ar: "في الحاضر لا فعل مستقل للكينونة في جملة مثل «أنا مدرس»: يقوم الضمير نفسه بدور الرابط في المتكلم والمخاطب، وللغائب صيغة رابطة قصيرة خاصة.",
          fr: "Au présent, il n'y a pas de verbe « être » séparé dans une phrase comme « je suis enseignant » : à la 1re et 2e personne, le pronom lui-même fait le lien ; la 3e personne a sa propre forme courte.",
          de: "In der Gegenwart gibt es in einem Satz wie „ich bin Lehrer“ kein eigenes Verb „sein“: In der 1. und 2. Person übernimmt das Pronomen selbst die Verbindung; die 3. Person hat eine eigene kurze Form."
        },
        examples: [
          { label: { en: "I am a teacher.", ar: "أنا مدرس.", fr: "Je suis enseignant.", de: "Ich bin Lehrer." }, tg: "", lit: { en: "I — teacher (no verb needed)", ar: "أنا — مدرس (بلا فعل)", fr: "je — enseignant (sans verbe)", de: "ich — Lehrer (ohne Verb)" } },
          { label: { en: "He is my brother.", ar: "هو أخي.", fr: "Il est mon frère.", de: "Er ist mein Bruder." }, tg: "" },
        ]
      },
      {
        heading: { en: "\"There is not\"", ar: "«لا يوجد»", fr: "« Il n'y a pas »", de: "„Es gibt nicht“" },
        rule: {
          en: "Existence has its own negative word — you do not add the usual negative prefix to it.",
          ar: "للوجود كلمة نفي خاصة، فلا تُضاف إليه بادئة النفي المعتادة.",
          fr: "L'existence a son propre mot négatif : on ne lui ajoute pas le préfixe négatif habituel.",
          de: "Die Existenz hat ein eigenes Negationswort — das übliche Negationspräfix wird hier nicht angehängt."
        },
        items: [
          { label: { en: "there is not / there is none", ar: "لا يوجد", fr: "il n'y a pas", de: "es gibt nicht" }, tg: "ኣልቡ" },
        ]
      },
    ]
  },
  {
    id: "gender", icon: "⚥", color: "#9B59B6",
    title: { en: "Noun Gender", ar: "جنس الاسم", fr: "Genre des Noms", de: "Genus der Nomen" },
    desc: { en: "Every noun is masculine or feminine", ar: "كل اسم مذكر أو مؤنث", fr: "Chaque nom est masculin ou féminin", de: "Jedes Nomen ist männlich oder weiblich" },
    sections: [
      {
        heading: { en: "The rule", ar: "القاعدة", fr: "La règle", de: "Die Regel" },
        rule: {
          en: "Nouns for male beings are masculine and nouns for female beings are feminine. For everything else, gender is simply part of the word and no ending reliably tells you which — so learn each noun together with its gender.",
          ar: "أسماء الكائنات المذكّرة مذكّرة، وأسماء المؤنّثة مؤنّثة. وما عدا ذلك فجنسه جزء من الكلمة ولا تدلّ عليه لاحقة مؤكدة، فتعلّم كل اسم مع جنسه.",
          fr: "Les noms d'êtres masculins sont masculins, ceux d'êtres féminins sont féminins. Pour le reste, le genre fait partie du mot et aucune terminaison ne le signale à coup sûr : apprenez chaque nom avec son genre.",
          de: "Nomen für männliche Wesen sind maskulin, für weibliche feminin. Bei allem anderen gehört das Genus einfach zum Wort und keine Endung verrät es sicher — lerne jedes Nomen mit seinem Genus."
        },
      },
      {
        heading: { en: "Masculine examples", ar: "أمثلة المذكر", fr: "Exemples masculins", de: "Maskuline Beispiele" },
        items: [
          { label: { en: "book", ar: "كتاب", fr: "livre", de: "Buch" }, tg: "ካታብ" },
          { label: { en: "man", ar: "رجل", fr: "homme", de: "Mann" }, tg: "ኣናስ" },
          { label: { en: "son", ar: "ابن", fr: "fils", de: "Sohn" }, tg: "ዋድ" },
        ]
      },
      {
        heading: { en: "Feminine examples", ar: "أمثلة المؤنث", fr: "Exemples féminins", de: "Feminine Beispiele" },
        items: [
          { label: { en: "woman", ar: "امرأة", fr: "femme", de: "Frau" }, tg: "ዓሲት" },
          { label: { en: "road", ar: "طريق", fr: "route", de: "Straße" }, tg: "ጋባይ" },
          { label: { en: "bracelet", ar: "سوار", fr: "bracelet", de: "Armband" }, tg: "ዋኒቻ" },
        ]
      },
      {
        heading: { en: "Why gender matters", ar: "لماذا يهمّ الجنس", fr: "Pourquoi le genre compte", de: "Warum das Genus zählt" },
        rule: {
          en: "Words that go with the noun must match it: adjectives, \"this / that\", and the verb all agree with the noun's gender. One useful shortcut: plural nouns for lifeless things behave like a masculine singular.",
          ar: "الكلمات المرتبطة بالاسم تطابقه: الصفة، وأسماء الإشارة، والفعل، كلها تطابق جنس الاسم. ومن المفيد أن جمع غير العاقل يُعامل معاملة المفرد المذكر.",
          fr: "Les mots qui accompagnent le nom doivent s'accorder avec lui : adjectifs, démonstratifs et verbe suivent son genre. Astuce utile : les pluriels de choses inanimées se comportent comme un masculin singulier.",
          de: "Wörter, die zum Nomen gehören, müssen mit ihm übereinstimmen: Adjektive, „dieser/jener“ und das Verb folgen seinem Genus. Nützlich: Plurale unbelebter Dinge verhalten sich wie ein maskulines Singular."
        },
      },
    ]
  },
  {
    id: "noun-number", icon: "🧮", color: "#16A085",
    title: { en: "Singular & Plural", ar: "المفرد والجمع", fr: "Singulier & Pluriel", de: "Singular & Plural" },
    desc: { en: "Three ways Tigre counts nouns", ar: "ثلاث طرق للعدد في التقري", fr: "Trois façons de compter les noms", de: "Drei Arten, Nomen zu zählen" },
    sections: [
      {
        heading: { en: "Way 1 — Add the plural ending", ar: "الطريقة ١ — إضافة لاحقة الجمع", fr: "Voie 1 — Ajouter la terminaison du pluriel", de: "Weg 1 — Pluralendung anhängen" },
        rule: {
          en: "The commonest plural simply adds an ending to the singular, the way English adds -s. Nothing inside the word changes.",
          ar: "أشهر الجمع يكتفي بإضافة لاحقة إلى المفرد، كما تضيف الإنجليزية ‎-s‎، دون تغيير داخل الكلمة.",
          fr: "Le pluriel le plus courant ajoute simplement une terminaison au singulier, comme le -s anglais. Rien ne change à l'intérieur du mot.",
          de: "Der häufigste Plural hängt einfach eine Endung an den Singular, wie das englische -s. Im Wortinneren ändert sich nichts."
        },
        items: [
          { label: { en: "plural ending (most common)", ar: "لاحقة الجمع الأكثر شيوعاً", fr: "terminaison du pluriel (la plus courante)", de: "häufigste Pluralendung" }, tg: "ـኣት" },
        ],
        examples: [
          { label: { en: "house → houses", ar: "بيت ← بيوت", fr: "maison → maisons", de: "Haus → Häuser" }, tg: "" },
        ]
      },
      {
        heading: { en: "Way 2 — Change the word inside", ar: "الطريقة ٢ — تغيير داخل الكلمة", fr: "Voie 2 — Changer l'intérieur du mot", de: "Weg 2 — Das Wortinnere ändern" },
        rule: {
          en: "Many nouns form their plural by reshaping the vowels inside the word instead of adding an ending — like English \"foot → feet\". These are called broken plurals and have to be learned one by one.",
          ar: "كثير من الأسماء تُجمع بتغيير الصوائت داخل الكلمة بدل إضافة لاحقة، مثل «foot → feet» في الإنجليزية. وهذا جمع التكسير، ويُحفظ كلمةً كلمة.",
          fr: "Beaucoup de noms forment leur pluriel en remodelant les voyelles internes au lieu d'ajouter une terminaison, comme « foot → feet » en anglais. Ce sont les pluriels brisés, à apprendre un par un.",
          de: "Viele Nomen bilden den Plural, indem sie die Vokale im Wortinneren umformen statt eine Endung anzuhängen — wie englisch „foot → feet“. Diese gebrochenen Plurale lernt man einzeln."
        },
        items: [
          { label: { en: "book → books", ar: "كتاب ← كتب", fr: "livre → livres", de: "Buch → Bücher" }, tg: "ካታብ → ኣካትባት" },
        ]
      },
      {
        heading: { en: "Way 3 — Group words and \"one of them\"", ar: "الطريقة ٣ — الجمعي و«واحدة منه»", fr: "Voie 3 — Collectifs et « un exemplaire »", de: "Weg 3 — Sammelwörter und „eines davon“" },
        rule: {
          en: "Some nouns name a whole group as a single mass — \"leaves\", \"people\". To talk about one item out of that mass, add the feminine ending: that gives a singulative, \"one leaf\" out of \"leaves\".",
          ar: "بعض الأسماء تدلّ على المجموعة ككتلة واحدة مثل «أوراق» و«ناس». وللحديث عن واحدة منها تُضاف لاحقة التأنيث فتحصل على «المفرد الجمعي»: «ورقة» من «أوراق».",
          fr: "Certains noms désignent un ensemble comme une masse unique : « feuilles », « gens ». Pour parler d'un seul élément, on ajoute la terminaison féminine : c'est le singulatif, « une feuille » tirée de « feuilles ».",
          de: "Manche Nomen bezeichnen eine ganze Gruppe als eine Masse — „Blätter“, „Leute“. Für ein einzelnes Stück daraus hängt man die feminine Endung an: das ergibt den Singulativ, „ein Blatt“ aus „Blätter“."
        },
        items: [
          { label: { en: "leaves (as one mass)", ar: "أوراق شجر (ككتلة)", fr: "feuillage (masse)", de: "Blätter (als Masse)" }, tg: "ቃታፍ" },
          { label: { en: "one leaf", ar: "ورقة واحدة", fr: "une feuille", de: "ein Blatt" }, tg: "ቃትፋት" },
          { label: { en: "people, tribe (as one group)", ar: "قبيلة، شعب (كمجموعة)", fr: "peuple, tribu (groupe)", de: "Volk, Stamm (als Gruppe)" }, tg: "ጋቢሌ" },
        ]
      },
    ]
  },
  {
    id: "def-article", icon: "📌", color: "#C0392B",
    title: { en: "Saying \"the\"", ar: "أداة التعريف", fr: "Dire « le / la »", de: "„Der / die / das“ sagen" },
    desc: { en: "One little marker, never changes", ar: "أداة واحدة لا تتغيّر", fr: "Une petite marque, toujours la même", de: "Ein kleiner Marker, immer gleich" },
    sections: [
      {
        heading: { en: "How to make a noun definite", ar: "كيف تُعرّف الاسم", fr: "Rendre un nom défini", de: "Ein Nomen bestimmt machen" },
        rule: {
          en: "Put the marker in front of the noun. It never changes — the same form for masculine, feminine, singular and plural. There is no word for \"a / an\": a bare noun is already indefinite.",
          ar: "ضع الأداة قبل الاسم؛ وهي لا تتغيّر أبداً: صيغة واحدة للمذكر والمؤنث والمفرد والجمع. ولا توجد أداة للتنكير، فالاسم المجرد نكرة بذاته.",
          fr: "Placez la marque devant le nom. Elle ne change jamais : même forme au masculin, au féminin, au singulier et au pluriel. Il n'existe pas d'article « un / une » : un nom nu est déjà indéfini.",
          de: "Setze den Marker vor das Nomen. Er ändert sich nie — dieselbe Form für Maskulin, Feminin, Singular und Plural. Ein Wort für „ein/eine“ gibt es nicht: ein bloßes Nomen ist schon unbestimmt."
        },
        items: [
          { label: { en: "the (all genders & numbers)", ar: "الـ (لكل الأجناس والأعداد)", fr: "le / la / les (invariable)", de: "der/die/das (unveränderlich)" }, tg: "ላ" },
        ],
        examples: [
          { label: { en: "a house → the house", ar: "بيت ← البيت", fr: "une maison → la maison", de: "ein Haus → das Haus" }, tg: "" },
          { label: { en: "the big house", ar: "البيت الكبير", fr: "la grande maison", de: "das große Haus" }, tg: "", lit: { en: "the — big — house", ar: "الـ — كبير — بيت", fr: "le — grand — maison", de: "das — groß — Haus" } },
        ]
      },
      {
        heading: { en: "The same marker means \"who / which\"", ar: "الأداة نفسها تفيد «الذي»", fr: "La même marque signifie « qui / que »", de: "Derselbe Marker heißt „der / welcher“" },
        rule: {
          en: "Placed before a verb instead of a noun, the very same little word starts a relative clause: \"the man WHO came\", \"the book WHICH I read\". One word, two jobs.",
          ar: "إذا وُضعت الأداة نفسها قبل فعل بدل الاسم صارت أداة وصل: «الرجل الذي جاء»، «الكتاب الذي قرأته». كلمة واحدة بوظيفتين.",
          fr: "Placée devant un verbe et non un nom, cette même petite marque introduit une relative : « l'homme QUI est venu », « le livre QUE j'ai lu ». Un mot, deux rôles.",
          de: "Steht dasselbe Wörtchen vor einem Verb statt vor einem Nomen, beginnt es einen Relativsatz: „der Mann, DER kam“, „das Buch, DAS ich las“. Ein Wort, zwei Aufgaben."
        },
        examples: [
          { label: { en: "the man who came", ar: "الرجل الذي جاء", fr: "l'homme qui est venu", de: "der Mann, der kam" }, tg: "" },
          { label: { en: "the food which I ate", ar: "الطعام الذي أكلته", fr: "la nourriture que j'ai mangée", de: "das Essen, das ich aß" }, tg: "" },
        ]
      },
    ]
  },
  {
    id: "pron-noun", icon: "🏠", color: "#1A7A4A",
    title: { en: "Possessive Endings", ar: "لواحق الملكية", fr: "Suffixes Possessifs", de: "Possessivendungen" },
    desc: { en: "my, your, his … attached to the noun", ar: "ـي، ـك، ـه … تُلحق بالاسم", fr: "mon, ton, son … collés au nom", de: "mein, dein, sein … am Nomen" },
    sections: [
      {
        heading: { en: "How it works", ar: "كيف تعمل", fr: "Comment ça marche", de: "So funktioniert es" },
        rule: {
          en: "There is no separate word for \"my\". Take the noun and add an ending: house + my = \"my house\". The ending shows the person, gender and number of the OWNER, not of the thing owned — and the noun itself does not change.",
          ar: "لا كلمة مستقلة لـ«ـي»: خُذ الاسم وأضف اللاحقة، فبيت + ـي = «بيتي». واللاحقة تدلّ على شخص المالك وجنسه وعدده، لا على الشيء المملوك، والاسم نفسه لا يتغيّر.",
          fr: "Il n'y a pas de mot séparé pour « mon » : prenez le nom et ajoutez une terminaison — maison + mon = « ma maison ». La terminaison indique la personne, le genre et le nombre du POSSESSEUR, pas de l'objet, et le nom lui-même ne change pas.",
          de: "Es gibt kein eigenes Wort für „mein“: Nimm das Nomen und hänge eine Endung an — Haus + mein = „mein Haus“. Die Endung zeigt Person, Genus und Numerus des BESITZERS, nicht des Besitzes, und das Nomen selbst bleibt unverändert."
        },
      },
      {
        heading: { en: "The endings", ar: "جدول اللواحق", fr: "Les terminaisons", de: "Die Endungen" },
        rule: {
          en: "Where two forms are listed, the first is used after a consonant and the second after a vowel — you simply pick whichever is easier to pronounce.",
          ar: "حيث تُذكر صيغتان، تُستخدم الأولى بعد صامت والثانية بعد صائت، فاختر الأسهل نطقاً.",
          fr: "Lorsque deux formes sont indiquées, la première suit une consonne et la seconde une voyelle : on choisit celle qui se prononce le plus facilement.",
          de: "Wo zwei Formen stehen, folgt die erste auf einen Konsonanten, die zweite auf einen Vokal — man nimmt die leichter aussprechbare."
        },
        items: [
          { label: { en: "my", ar: "ـي", fr: "mon / ma", de: "mein" }, tg: "ـየ" },
          { label: { en: "your — to a man", ar: "ـكَ", fr: "ton (à un homme)", de: "dein (m.)" }, tg: "ـካ" },
          { label: { en: "your — to a woman", ar: "ـكِ", fr: "ton (à une femme)", de: "dein (w.)" }, tg: "ـኪ" },
          { label: { en: "his", ar: "ـه", fr: "son (à lui)", de: "sein" }, tg: "ـኡ / ሁ" },
          { label: { en: "her", ar: "ـها", fr: "son (à elle)", de: "ihr" }, tg: "ـኣ / ሃ" },
          { label: { en: "our", ar: "ـنا", fr: "notre", de: "unser" }, tg: "ـና" },
          { label: { en: "your — to men / mixed", ar: "ـكم", fr: "votre (m. pl.)", de: "euer (m.)" }, tg: "ـኩም" },
          { label: { en: "your — to women", ar: "ـكن", fr: "votre (f. pl.)", de: "euer (w.)" }, tg: "ـከን" },
          { label: { en: "their — men / mixed", ar: "ـهم", fr: "leur (m.)", de: "ihr (m. Pl.)" }, tg: "ـኦም / ሆም" },
          { label: { en: "their — women", ar: "ـهن", fr: "leur (f.)", de: "ihr (w. Pl.)" }, tg: "ـኣን / ሃን" },
        ]
      },
      {
        heading: { en: "Worked example — \"house\"", ar: "مثال كامل — «بيت»", fr: "Exemple complet — « maison »", de: "Beispiel komplett — „Haus“" },
        rule: {
          en: "Notice how only the tail of the word moves. Learn this one noun with all its endings and you can do the same with any other noun.",
          ar: "لاحظ أن الذي يتغيّر هو آخر الكلمة فقط. احفظ هذا الاسم بكل لواحقه وستقيس عليه أي اسم آخر.",
          fr: "Remarquez que seule la fin du mot bouge. Apprenez ce nom avec toutes ses terminaisons et vous pourrez faire de même avec n'importe quel autre.",
          de: "Beachte: nur das Wortende verändert sich. Lerne dieses eine Nomen mit allen Endungen — dann kannst du es mit jedem anderen genauso machen."
        },
        items: [
          { label: { en: "house", ar: "بيت", fr: "maison", de: "Haus" }, tg: "ቤት" },
          { label: { en: "my house", ar: "بيتي", fr: "ma maison", de: "mein Haus" }, tg: "ቤትየ" },
          { label: { en: "your (m.) house", ar: "بيتك", fr: "ta maison", de: "dein Haus (m.)" }, tg: "ቤትካ" },
          { label: { en: "his house", ar: "بيته", fr: "sa maison (à lui)", de: "sein Haus" }, tg: "ቤቱ" },
          { label: { en: "her house", ar: "بيتها", fr: "sa maison (à elle)", de: "ihr Haus" }, tg: "ቤትሃ" },
          { label: { en: "our house", ar: "بيتنا", fr: "notre maison", de: "unser Haus" }, tg: "ቤትና" },
        ]
      },
    ]
  },
  {
    id: "demonstratives", icon: "👆", color: "#7B5CE7",
    title: { en: "This & That", ar: "أسماء الإشارة", fr: "Ce & Celui-là", de: "Dieser & Jener" },
    desc: { en: "Pointing at things near and far", ar: "الإشارة إلى القريب والبعيد", fr: "Montrer ce qui est proche ou loin", de: "Auf Nahes und Fernes zeigen" },
    sections: [
      {
        heading: { en: "Near — this, these", ar: "للقريب — هذا، هؤلاء", fr: "Proche — ce, ces", de: "Nah — dieser, diese" },
        rule: {
          en: "Use the near set for something close to you. Like an adjective it must match its noun in gender and number, and it stands in front of the noun.",
          ar: "استخدم صيغ القريب لما هو قريب منك. وهي كالصفة تطابق الاسم في الجنس والعدد وتتقدّم عليه.",
          fr: "Employez la série du proche pour ce qui est près de vous. Comme un adjectif, elle s'accorde en genre et en nombre et précède le nom.",
          de: "Nimm die Nah-Reihe für etwas in deiner Nähe. Wie ein Adjektiv stimmt sie in Genus und Numerus überein und steht vor dem Nomen."
        },
        items: [
          { label: { en: "this (m.)", ar: "هذا", fr: "ce (m.)", de: "dieser (m.)" }, tg: "ዕሊ" },
          { label: { en: "this (f.)", ar: "هذه", fr: "cette (f.)", de: "diese (w.)" }, tg: "ዕላ" },
          { label: { en: "these (m. / mixed)", ar: "هؤلاء (م.)", fr: "ces (m.)", de: "diese (m. Pl.)" }, tg: "ዕሎም" },
          { label: { en: "these (f.)", ar: "هؤلاء (ث.)", fr: "ces (f.)", de: "diese (w. Pl.)" }, tg: "ዕላን" },
        ]
      },
      {
        heading: { en: "Far — that, those", ar: "للبعيد — ذلك، أولئك", fr: "Loin — celui-là, ceux-là", de: "Fern — jener, jene" },
        rule: {
          en: "Use the far set for something at a distance. Two spellings of each form are in use and both are correct.",
          ar: "استخدم صيغ البعيد لما هو بعيد. ولكل صيغة نطقان مستعملان وكلاهما صحيح.",
          fr: "Employez la série du lointain pour ce qui est éloigné. Deux variantes de chaque forme existent et sont toutes deux correctes.",
          de: "Nimm die Fern-Reihe für Entferntes. Von jeder Form sind zwei Varianten in Gebrauch, beide korrekt."
        },
        items: [
          { label: { en: "that (m.)", ar: "ذلك", fr: "celui-là (m.)", de: "jener (m.)" }, tg: "ላሃይ / ሎሃይ" },
          { label: { en: "that (f.)", ar: "تلك", fr: "celle-là (f.)", de: "jene (w.)" }, tg: "ላሃ / ሎሃ" },
          { label: { en: "those (m. / mixed)", ar: "أولئك (م.)", fr: "ceux-là (m.)", de: "jene (m. Pl.)" }, tg: "ላሆም / ሎሆም" },
          { label: { en: "those (f.)", ar: "أولئك (ث.)", fr: "celles-là (f.)", de: "jene (w. Pl.)" }, tg: "" },
        ]
      },
      {
        heading: { en: "Using them in a phrase", ar: "استخدامها في العبارة", fr: "Dans une phrase", de: "Im Satz verwenden" },
        rule: {
          en: "A demonstrative goes before its noun, exactly like an adjective: \"this house\", never \"house this\". It can also stand alone as \"this one\".",
          ar: "اسم الإشارة يتقدّم الاسم كالصفة تماماً: «هذا بيت» ولا «بيت هذا». ويمكن أن يأتي وحده بمعنى «هذا».",
          fr: "Le démonstratif précède son nom, comme un adjectif : « cette maison », jamais « maison cette ». Il peut aussi s'employer seul : « celui-ci ».",
          de: "Ein Demonstrativ steht vor dem Nomen, genau wie ein Adjektiv: „dieses Haus“, nie „Haus dieses“. Es kann auch allein stehen: „dieses hier“."
        },
        examples: [
          { label: { en: "this house", ar: "هذا البيت", fr: "cette maison", de: "dieses Haus" }, tg: "" },
          { label: { en: "those men", ar: "أولئك الرجال", fr: "ces hommes-là", de: "jene Männer" }, tg: "" },
        ]
      },
    ]
  },
  {
    id: "adjectives", icon: "🎨", color: "#8E44AD",
    title: { en: "Adjectives", ar: "الصفات", fr: "Adjectifs", de: "Adjektive" },
    desc: { en: "Describing words and how they agree", ar: "الصفات وكيف تطابق", fr: "Les mots qui décrivent et leur accord", de: "Beschreibende Wörter und ihre Kongruenz" },
    sections: [
      {
        heading: { en: "Where the adjective goes", ar: "موضع الصفة", fr: "Place de l'adjectif", de: "Stellung des Adjektivs" },
        rule: {
          en: "The adjective comes BEFORE the noun, as in English: \"good man\". If the phrase is definite, the definite marker comes first of all, then the adjective, then the noun.",
          ar: "الصفة تتقدّم الاسم كما في الإنجليزية: «جيد رجل». وإذا كانت العبارة معرفة فتأتي أداة التعريف أولاً ثم الصفة ثم الاسم.",
          fr: "L'adjectif se place AVANT le nom, comme en anglais : « bon homme ». Si le groupe est défini, la marque du défini vient d'abord, puis l'adjectif, puis le nom.",
          de: "Das Adjektiv steht VOR dem Nomen, wie im Englischen: „guter Mann“. Ist die Gruppe bestimmt, kommt zuerst der Bestimmtheitsmarker, dann das Adjektiv, dann das Nomen."
        },
        examples: [
          { label: { en: "a good man", ar: "رجل جيد", fr: "un homme bon", de: "ein guter Mann" }, tg: "ሳኒ ዓናስ" },
          { label: { en: "the good man", ar: "الرجل الجيد", fr: "le bon homme", de: "der gute Mann" }, tg: "", lit: { en: "the — good — man", ar: "الـ — جيد — رجل", fr: "le — bon — homme", de: "der — gut — Mann" } },
        ]
      },
      {
        heading: { en: "Agreement", ar: "المطابقة", fr: "L'accord", de: "Die Kongruenz" },
        rule: {
          en: "An adjective takes a feminine form with a feminine noun and a plural form with a plural noun. Many adjectives mark the feminine with an extra ending, so learn each adjective as a pair.",
          ar: "تأخذ الصفة صيغة المؤنث مع الاسم المؤنث، وصيغة الجمع مع الجمع. وكثير من الصفات تُعلَّم بالتأنيث بلاحقة زائدة، فاحفظ كل صفة كزوج.",
          fr: "L'adjectif prend une forme féminine avec un nom féminin et une forme plurielle avec un pluriel. Beaucoup d'adjectifs marquent le féminin par une terminaison : apprenez-les par paires.",
          de: "Ein Adjektiv nimmt bei femininem Nomen eine feminine Form und bei Plural eine Pluralform. Viele Adjektive markieren das Femininum mit einer Endung — lerne sie als Paar."
        },
        items: [
          { label: { en: "good (m. / f.)", ar: "جيد (م. / ث.)", fr: "bon (m. / f.)", de: "gut (m. / w.)" }, tg: "ሳኒ / ሳኔት" },
          { label: { en: "new (m. / f.)", ar: "جديد (م. / ث.)", fr: "nouveau (m. / f.)", de: "neu (m. / w.)" }, tg: "ሃዲስ / ሃዳስ" },
          { label: { en: "brave (m. / f.)", ar: "شجاع (م. / ث.)", fr: "courageux (m. / f.)", de: "mutig (m. / w.)" }, tg: "ፋዳብ / ፋዳቢት" },
        ]
      },
      {
        heading: { en: "Everyday adjectives", ar: "صفات شائعة", fr: "Adjectifs courants", de: "Alltägliche Adjektive" },
        items: [
          { label: { en: "big", ar: "كبير", fr: "grand", de: "groß" }, tg: "ዓቢ" },
          { label: { en: "small", ar: "صغير", fr: "petit", de: "klein" }, tg: "ንኡሽ" },
          { label: { en: "new", ar: "جديد", fr: "nouveau", de: "neu" }, tg: "ሓዲስ" },
          { label: { en: "old (aged)", ar: "قديم", fr: "vieux", de: "alt" }, tg: "ጋዲም" },
          { label: { en: "white", ar: "أبيض", fr: "blanc", de: "weiß" }, tg: "ሳዕዳ" },
          { label: { en: "black", ar: "أسود", fr: "noir", de: "schwarz" }, tg: "ጸሊም" },
        ]
      },
    ]
  },
  {
    id: "numbers", icon: "🔢", color: "#3498DB",
    title: { en: "Numbers", ar: "الأرقام", fr: "Nombres", de: "Zahlen" },
    desc: { en: "Counting and putting things in order", ar: "العدّ والترتيب", fr: "Compter et classer", de: "Zählen und ordnen" },
    sections: [
      {
        heading: { en: "One to ten", ar: "من ١ إلى ١٠", fr: "De un à dix", de: "Eins bis zehn" },
        items: [
          { label: { en: "1", ar: "١", fr: "1", de: "1" }, tg: "ሓቴ" },
          { label: { en: "2", ar: "٢", fr: "2", de: "2" }, tg: "ካሌ" },
          { label: { en: "3", ar: "٣", fr: "3", de: "3" }, tg: "ሰለስ" },
          { label: { en: "4", ar: "٤", fr: "4", de: "4" }, tg: "ዓርባዕ" },
          { label: { en: "5", ar: "٥", fr: "5", de: "5" }, tg: "ሓምስ" },
          { label: { en: "6", ar: "٦", fr: "6", de: "6" }, tg: "ሱስ" },
          { label: { en: "7", ar: "٧", fr: "7", de: "7" }, tg: "ሰብዓ" },
          { label: { en: "8", ar: "٨", fr: "8", de: "8" }, tg: "ሳማን" },
          { label: { en: "9", ar: "٩", fr: "9", de: "9" }, tg: "ቲስዓ" },
          { label: { en: "10", ar: "١٠", fr: "10", de: "10" }, tg: "ዓሱር" },
        ]
      },
      {
        heading: { en: "Tens and hundreds", ar: "العشرات والمئات", fr: "Dizaines et centaines", de: "Zehner und Hunderter" },
        items: [
          { label: { en: "20", ar: "٢٠", fr: "20", de: "20" }, tg: "ዕስራ" },
          { label: { en: "30", ar: "٣٠", fr: "30", de: "30" }, tg: "ሰላሳ" },
          { label: { en: "40", ar: "٤٠", fr: "40", de: "40" }, tg: "ዓርብዓ" },
          { label: { en: "50", ar: "٥٠", fr: "50", de: "50" }, tg: "ሓምሳ" },
          { label: { en: "100", ar: "١٠٠", fr: "100", de: "100" }, tg: "ምዓት" },
        ]
      },
      {
        heading: { en: "Counting things", ar: "عدّ الأشياء", fr: "Compter des choses", de: "Dinge zählen" },
        rule: {
          en: "The number stands before the noun it counts. After a number the noun often stays in the singular, so word for word you say \"three book\" rather than \"three books\".",
          ar: "يتقدّم العدد على المعدود. وبعد العدد يبقى الاسم مفرداً في الغالب، فتقول حرفياً «ثلاثة كتاب» لا «ثلاثة كتب».",
          fr: "Le nombre précède le nom compté. Après un nombre, le nom reste souvent au singulier : mot à mot on dit « trois livre » et non « trois livres ».",
          de: "Die Zahl steht vor dem gezählten Nomen. Nach einer Zahl bleibt das Nomen oft im Singular — wörtlich sagt man „drei Buch“ statt „drei Bücher“."
        },
        examples: [
          { label: { en: "three books", ar: "ثلاثة كتب", fr: "trois livres", de: "drei Bücher" }, tg: "", lit: { en: "three — book", ar: "ثلاثة — كتاب", fr: "trois — livre", de: "drei — Buch" } },
          { label: { en: "five children", ar: "خمسة أطفال", fr: "cinq enfants", de: "fünf Kinder" }, tg: "" },
        ]
      },
      {
        heading: { en: "First, second, third", ar: "الأعداد الترتيبية", fr: "Premier, deuxième, troisième", de: "Erster, zweiter, dritter" },
        rule: {
          en: "Ordinals are built from the cardinal number with an extra ending, and then behave like adjectives: they agree with the noun and stand before it.",
          ar: "تُبنى الأعداد الترتيبية من الأصلية بلاحقة زائدة، ثم تُعامل معاملة الصفة: تطابق الاسم وتتقدّم عليه.",
          fr: "Les ordinaux se forment à partir du cardinal avec une terminaison, puis se comportent comme des adjectifs : ils s'accordent et précèdent le nom.",
          de: "Ordinalzahlen entstehen aus der Grundzahl mit einer Endung und verhalten sich dann wie Adjektive: Sie stimmen überein und stehen vor dem Nomen."
        },
        items: [
          { label: { en: "first", ar: "أول", fr: "premier", de: "erster" }, tg: "ኣዋላይ" },
          { label: { en: "second", ar: "ثانٍ", fr: "deuxième", de: "zweiter" }, tg: "ካላይ" },
          { label: { en: "third", ar: "ثالث", fr: "troisième", de: "dritter" }, tg: "ሰለሳይ" },
        ],
        examples: [
          { label: { en: "the first day", ar: "اليوم الأول", fr: "le premier jour", de: "der erste Tag" }, tg: "" },
        ]
      },
    ]
  },
  {
    id: "questions", icon: "❓", color: "#1B5EA8",
    title: { en: "Asking Questions", ar: "طرح الأسئلة", fr: "Poser des Questions", de: "Fragen stellen" },
    desc: { en: "who, what, where — and yes/no questions", ar: "من، ماذا، أين — وأسئلة نعم/لا", fr: "qui, quoi, où — et questions oui/non", de: "wer, was, wo — und Ja/Nein-Fragen" },
    sections: [
      {
        heading: { en: "Question words", ar: "أدوات الاستفهام", fr: "Mots interrogatifs", de: "Fragewörter" },
        rule: {
          en: "The question word normally opens the sentence, and the rest of the sentence keeps its usual shape — so the verb still comes last.",
          ar: "تتصدّر أداة الاستفهام الجملة عادةً، ويبقى باقي الجملة على ترتيبه المعتاد، فالفعل في النهاية.",
          fr: "Le mot interrogatif ouvre normalement la phrase, et le reste garde son ordre habituel : le verbe reste donc en dernier.",
          de: "Das Fragewort steht normalerweise am Satzanfang, der Rest behält seine gewohnte Ordnung — das Verb bleibt also am Ende."
        },
        items: [
          { label: { en: "what?", ar: "ماذا؟", fr: "quoi ?", de: "was?" }, tg: "ሚ" },
          { label: { en: "who? whose?", ar: "من؟ لمن؟", fr: "qui ? de qui ?", de: "wer? wessen?" }, tg: "መን" },
          { label: { en: "which? (m.)", ar: "أيّ؟", fr: "quel ?", de: "welcher?" }, tg: "ኣዪ" },
          { label: { en: "which? (f.)", ar: "أيّة؟", fr: "quelle ?", de: "welche?" }, tg: "ኣያ" },
          { label: { en: "where?", ar: "أين؟", fr: "où ?", de: "wo?" }, tg: "ኣታያ?" },
          { label: { en: "how much? how many?", ar: "كم؟", fr: "combien ?", de: "wie viel?" }, tg: "ካም?" },
          { label: { en: "when?", ar: "متى؟", fr: "quand ?", de: "wann?" }, tg: "" },
          { label: { en: "why?", ar: "لماذا؟", fr: "pourquoi ?", de: "warum?" }, tg: "" },
          { label: { en: "how?", ar: "كيف؟", fr: "comment ?", de: "wie?" }, tg: "" },
        ],
        examples: [
          { label: { en: "What is your name?", ar: "ما اسمك؟", fr: "Comment t'appelles-tu ?", de: "Wie heißt du?" }, tg: "መን ሰምካ?", lit: { en: "who — your name?", ar: "من — اسمك؟", fr: "qui — ton nom ?", de: "wer — dein Name?" } },
        ]
      },
      {
        heading: { en: "Yes / no questions", ar: "أسئلة نعم/لا", fr: "Questions oui / non", de: "Ja/Nein-Fragen" },
        rule: {
          en: "Nothing is added and nothing moves: keep the word order of a statement and simply raise your voice at the end. English needs \"do you…?\"; Tigre does not.",
          ar: "لا تُضاف كلمة ولا يتغيّر ترتيب: احفظ ترتيب الجملة الخبرية وارفع نبرة صوتك في النهاية. الإنجليزية تحتاج «do you…؟» والتقري لا.",
          fr: "On n'ajoute rien et on ne déplace rien : gardez l'ordre de la phrase déclarative et montez simplement la voix à la fin. L'anglais a besoin de « do you…? », le tigré non.",
          de: "Nichts wird hinzugefügt, nichts verschoben: behalte die Wortstellung des Aussagesatzes und hebe am Ende einfach die Stimme. Englisch braucht „do you…?“, Tigre nicht."
        },
        examples: [
          { label: { en: "You are going. → Are you going?", ar: "أنت تذهب. ← هل تذهب؟", fr: "Tu y vas. → Y vas-tu ?", de: "Du gehst. → Gehst du?" }, tg: "" },
        ]
      },
      {
        heading: { en: "Someone, something, nobody", ar: "أحد، شيء، لا أحد", fr: "Quelqu'un, quelque chose, personne", de: "Jemand, etwas, niemand" },
        rule: {
          en: "These are the vague words you reach for when you cannot name the person or thing. Two of them are negatives and need a negative verb with them, just like English \"I did NOT see ANYbody\".",
          ar: "هذه ألفاظ الإبهام تُستخدم حين لا تُعيّن الشخص أو الشيء. واثنتان منها للنفي وتحتاجان فعلاً منفياً معهما، كما في «لم أرَ أحداً».",
          fr: "Ce sont les mots vagues employés quand on ne peut nommer la personne ou la chose. Deux d'entre eux sont négatifs et exigent un verbe négatif, comme « je n'ai vu personne ».",
          de: "Das sind die unbestimmten Wörter für Fälle, in denen man Person oder Sache nicht benennen kann. Zwei davon sind negativ und verlangen ein negiertes Verb, wie „ich sah niemanden“."
        },
        items: [
          { label: { en: "someone", ar: "أحد، شخص ما", fr: "quelqu'un", de: "jemand" }, tg: "ዎሮ" },
          { label: { en: "something", ar: "شيء ما", fr: "quelque chose", de: "etwas" }, tg: "ጋሌ" },
          { label: { en: "nobody", ar: "لا أحد", fr: "personne", de: "niemand" }, tg: "መንማ" },
          { label: { en: "nothing", ar: "لا شيء", fr: "rien", de: "nichts" }, tg: "ሰማ" },
        ]
      },
    ]
  },
  {
    id: "verb-types", icon: "🏃", color: "#C0392B",
    title: { en: "Verb Families A B C D", ar: "عائلات الفعل أ ب ج د", fr: "Familles de Verbes A B C D", de: "Verbfamilien A B C D" },
    desc: { en: "Four shapes built on the same root", ar: "أربع صيغ من الجذر نفسه", fr: "Quatre formes bâties sur la même racine", de: "Vier Formen auf derselben Wurzel" },
    sections: [
      {
        heading: { en: "The idea", ar: "الفكرة", fr: "L'idée", de: "Die Idee" },
        rule: {
          en: "Every Tigre verb is built on a root of (usually) three consonants that carries the core meaning. Four patterns can be laid over that root, and the pattern shifts the meaning in a predictable way. Recognising the pattern is what lets you guess a new verb's meaning.",
          ar: "كل فعل تقروي مبني على جذر من ثلاثة صوامت غالباً يحمل المعنى الأساسي. وتُصبّ على الجذر أربع صيغ، وكل صيغة تُحوّل المعنى تحويلاً منتظماً. ومعرفة الصيغة هي ما يمكّنك من تخمين معنى فعل جديد.",
          fr: "Chaque verbe tigré repose sur une racine de trois consonnes (le plus souvent) qui porte le sens de base. Quatre schémas peuvent s'y appliquer, et chacun modifie le sens de façon prévisible. Reconnaître le schéma permet de devinner le sens d'un verbe nouveau.",
          de: "Jedes Tigre-Verb ruht auf einer Wurzel aus meist drei Konsonanten, die die Grundbedeutung trägt. Über diese Wurzel legen sich vier Muster, und jedes verschiebt die Bedeutung regelmäßig. Wer das Muster erkennt, kann die Bedeutung neuer Verben erraten."
        },
      },
      {
        heading: { en: "Type A — the plain pattern", ar: "النوع أ — الصيغة البسيطة", fr: "Type A — le schéma simple", de: "Typ A — das einfache Muster" },
        rule: {
          en: "The basic, unmarked form. Most everyday verbs belong here, and they can be transitive (\"kill something\") or intransitive (\"go\").",
          ar: "الصيغة الأساسية غير الموسومة، وإليها ينتمي معظم أفعال الحياة اليومية، وقد تكون متعدية («يقتل شيئاً») أو لازمة («يذهب»).",
          fr: "La forme de base, non marquée. La plupart des verbes courants y appartiennent, transitifs (« tuer quelque chose ») ou intransitifs (« aller »).",
          de: "Die unmarkierte Grundform. Die meisten Alltagsverben gehören hierher und können transitiv („etwas töten“) oder intransitiv („gehen“) sein."
        },
        items: [
          { label: { en: "to kill", ar: "يقتل", fr: "tuer", de: "töten" }, tg: "ቃትላ" },
          { label: { en: "to do", ar: "يفعل", fr: "faire", de: "tun" }, tg: "ዋዳ" },
        ]
      },
      {
        heading: { en: "Type B — doubled middle consonant", ar: "النوع ب — تضعيف الحرف الأوسط", fr: "Type B — consonne médiane doublée", de: "Typ B — verdoppelter Mittelkonsonant" },
        rule: {
          en: "The middle consonant of the root is doubled. Type B often makes the action stronger, or makes an intransitive verb take an object.",
          ar: "يُضعَّف الحرف الأوسط من الجذر. والنوع ب يقوّي الحدث غالباً، أو يجعل الفعل اللازم متعدياً.",
          fr: "La consonne médiane de la racine est doublée. Le type B renforce souvent l'action, ou rend transitif un verbe intransitif.",
          de: "Der Mittelkonsonant der Wurzel wird verdoppelt. Typ B verstärkt oft die Handlung oder macht ein intransitives Verb transitiv."
        },
        items: [
          { label: { en: "to kill (intensive)", ar: "يقتل (مبالغة)", fr: "tuer (intensif)", de: "töten (intensiv)" }, tg: "ቃታላ" },
          { label: { en: "to tell, to recount", ar: "يروي، يخبر", fr: "raconter", de: "erzählen" }, tg: "ዳጋሜ" },
        ]
      },
      {
        heading: { en: "Type C — long vowel", ar: "النوع ج — الصائت الطويل", fr: "Type C — voyelle longue", de: "Typ C — langer Vokal" },
        rule: {
          en: "A long vowel is inserted after the first consonant. Type C typically expresses effort or an attempt, or an action aimed at somebody.",
          ar: "يُدخل صائت طويل بعد الحرف الأول. والنوع ج يعبّر غالباً عن المحاولة والجهد، أو عن حدث موجّه إلى شخص.",
          fr: "Une voyelle longue est insérée après la première consonne. Le type C exprime typiquement l'effort ou la tentative, ou une action dirigée vers quelqu'un.",
          de: "Nach dem ersten Konsonanten wird ein langer Vokal eingefügt. Typ C drückt typischerweise Anstrengung oder Versuch aus oder eine auf jemanden gerichtete Handlung."
        },
        items: [
          { label: { en: "to try to kill, to fight", ar: "يحاول القتل، يقاتل", fr: "chercher à tuer, combattre", de: "zu töten versuchen, kämpfen" }, tg: "ቃታለ" },
        ]
      },
      {
        heading: { en: "Type D — repeated middle consonant", ar: "النوع د — تكرار الحرف الأوسط", fr: "Type D — consonne médiane répétée", de: "Typ D — wiederholter Mittelkonsonant" },
        rule: {
          en: "The middle consonant is repeated with a vowel between. Type D means the action happens again and again, or bit by bit.",
          ar: "يُكرَّر الحرف الأوسط بصائت بينهما. والنوع د يفيد تكرار الحدث مرة بعد مرة أو حدوثه تدريجياً.",
          fr: "La consonne médiane est répétée avec une voyelle entre les deux. Le type D indique une action répétée ou progressive.",
          de: "Der Mittelkonsonant wird mit einem Vokal dazwischen wiederholt. Typ D bedeutet, dass die Handlung sich wiederholt oder schrittweise abläuft."
        },
        items: [
          { label: { en: "to kill one after another", ar: "يقتل واحداً بعد آخر", fr: "tuer l'un après l'autre", de: "einen nach dem anderen töten" }, tg: "ቃታታለ" },
        ]
      },
    ]
  },
  {
    id: "tense", icon: "⏱️", color: "#1ABC9C",
    title: { en: "Past, Present & Commands", ar: "الماضي والمضارع والأمر", fr: "Passé, Présent & Ordres", de: "Vergangenheit, Gegenwart & Befehle" },
    desc: { en: "The three verb forms you need", ar: "صيغ الفعل الثلاث التي تحتاجها", fr: "Les trois formes verbales essentielles", de: "Die drei Verbformen, die du brauchst" },
    sections: [
      {
        heading: { en: "Three forms, three jobs", ar: "ثلاث صيغ وثلاث وظائف", fr: "Trois formes, trois emplois", de: "Drei Formen, drei Aufgaben" },
        rule: {
          en: "Tigre does not have a long list of tenses. There is a FINISHED form for actions that are over (the past), an UNFINISHED form for everything not yet complete (present and future), and a WISH form used for \"let me…\", \"let's…\", and after certain particles.",
          ar: "ليس في التقري قائمة طويلة من الأزمنة: هناك صيغة تامّة للحدث المنتهي (الماضي)، وصيغة غير تامّة لما لم ينتهِ بعد (الحاضر والمستقبل)، وصيغة طلبية تُستخدم لـ«لِأفعل» و«لنفعل» وبعد أدوات معيّنة.",
          fr: "Le tigré n'a pas une longue liste de temps : une forme ACCOMPLIE pour l'action terminée (le passé), une forme INACCOMPLIE pour tout ce qui n'est pas achevé (présent et futur), et une forme de SOUHAIT pour « que je… », « allons… » et après certaines particules.",
          de: "Tigre hat keine lange Tempusliste: eine VOLLENDETE Form für abgeschlossene Handlungen (Vergangenheit), eine UNVOLLENDETE für alles Unfertige (Gegenwart und Zukunft) und eine WUNSCH-Form für „lass mich…“, „lasst uns…“ und nach bestimmten Partikeln."
        },
        items: [
          { label: { en: "finished form — past", ar: "الصيغة التامّة — الماضي", fr: "forme accomplie — passé", de: "vollendete Form — Vergangenheit" }, tg: "ካትለ / ቃንሳ" },
          { label: { en: "unfinished form — present & future", ar: "الصيغة غير التامّة — الحاضر والمستقبل", fr: "forme inaccomplie — présent et futur", de: "unvollendete Form — Gegenwart & Zukunft" }, tg: "ዓቃናስ" },
          { label: { en: "wish form — let me / let's", ar: "الصيغة الطلبية — لِأفعل / لنفعل", fr: "forme de souhait — que je / allons", de: "Wunschform — lass mich / lasst uns" }, tg: "" },
        ]
      },
      {
        heading: { en: "Who does it is built into the verb", ar: "الفاعل مدمج في الفعل", fr: "Le sujet est intégré au verbe", de: "Wer handelt, steckt im Verb" },
        rule: {
          en: "Prefixes and endings on the verb show the person, so a single word can mean \"I went\". That is why the pronoun is usually dropped — you only add it for emphasis.",
          ar: "تدلّ البادئات واللواحق على الشخص، فتؤدي كلمة واحدة معنى «ذهبتُ». ولهذا يُحذف الضمير عادةً ولا يُذكر إلا للتوكيد.",
          fr: "Les préfixes et terminaisons du verbe indiquent la personne : un seul mot peut signifier « je suis allé ». C'est pourquoi le pronom est généralement omis, sauf pour insister.",
          de: "Präfixe und Endungen am Verb zeigen die Person, sodass ein einziges Wort „ich ging“ bedeuten kann. Darum lässt man das Pronomen meist weg — nur zur Betonung setzt man es."
        },
        examples: [
          { label: { en: "I went.", ar: "ذهبتُ.", fr: "Je suis allé.", de: "Ich ging." }, tg: "" },
          { label: { en: "He goes / he will go.", ar: "يذهب / سيذهب.", fr: "Il va / il ira.", de: "Er geht / er wird gehen." }, tg: "" },
        ]
      },
      {
        heading: { en: "Giving a command", ar: "صيغة الأمر", fr: "Donner un ordre", de: "Einen Befehl geben" },
        rule: {
          en: "The command is the wish form used for \"you\". Like the pronoun \"you\", it has separate forms for a man, a woman and a group — so choose the one that fits the person in front of you.",
          ar: "الأمر هو الصيغة الطلبية للمخاطب. وكضمير المخاطب له صيغ مختلفة للرجل والمرأة والجماعة، فاختر ما يناسب من تخاطبه.",
          fr: "L'ordre est la forme de souhait employée pour « tu ». Comme le pronom « tu », il a des formes distinctes pour un homme, une femme et un groupe : choisissez celle qui convient.",
          de: "Der Befehl ist die Wunschform für „du“. Wie das Pronomen „du“ hat er eigene Formen für Mann, Frau und Gruppe — wähle die passende."
        },
        items: [
          { label: { en: "command form (to \"you\")", ar: "صيغة الأمر للمخاطب", fr: "forme d'ordre (à « tu »)", de: "Befehlsform (an „du“)" }, tg: "ቃናስ!" },
          { label: { en: "come here!", ar: "تعال هنا!", fr: "viens ici !", de: "komm her!" }, tg: "ናዓ" },
        ]
      },
    ]
  },
  {
    id: "negation", icon: "🚫", color: "#E74C3C",
    title: { en: "Saying \"Not\"", ar: "النفي", fr: "Dire « ne… pas »", de: "„Nicht“ sagen" },
    desc: { en: "One prefix negates any verb", ar: "بادئة واحدة تنفي أي فعل", fr: "Un préfixe nie n'importe quel verbe", de: "Ein Präfix negiert jedes Verb" },
    sections: [
      {
        heading: { en: "The negative prefix", ar: "بادئة النفي", fr: "Le préfixe négatif", de: "Das Negationspräfix" },
        rule: {
          en: "Put the negative prefix in front of the verb and you are done. It works with every tense and every person, and nothing else in the sentence changes — much simpler than English, which has to add \"do / does / did\".",
          ar: "ضع بادئة النفي قبل الفعل وانتهى الأمر. تعمل مع كل الأزمنة وكل الأشخاص ولا يتغيّر شيء آخر في الجملة — أبسط من الإنجليزية التي تحتاج «do / does / did».",
          fr: "Placez le préfixe négatif devant le verbe, et c'est tout. Il fonctionne à tous les temps et à toutes les personnes, et rien d'autre ne change dans la phrase — bien plus simple que l'anglais avec ses « do / does / did ».",
          de: "Setze das Negationspräfix vor das Verb — fertig. Es gilt für alle Tempora und Personen, und sonst ändert sich nichts im Satz — viel einfacher als das englische „do / does / did“."
        },
        items: [
          { label: { en: "not (prefix on the verb)", ar: "بادئة النفي على الفعل", fr: "ne… pas (préfixe verbal)", de: "nicht (Verbpräfix)" }, tg: "ኢ ـ" },
        ],
        examples: [
          { label: { en: "I did not go.", ar: "لم أذهب.", fr: "Je ne suis pas allé.", de: "Ich ging nicht." }, tg: "ኢጋሳን" },
          { label: { en: "I do not know.", ar: "لا أعرف.", fr: "Je ne sais pas.", de: "Ich weiß nicht." }, tg: "ኢኣምር" },
        ]
      },
      {
        heading: { en: "\"There is not\" is different", ar: "«لا يوجد» تختلف", fr: "« Il n'y a pas » est différent", de: "„Es gibt nicht“ ist anders" },
        rule: {
          en: "Existence is not negated with the prefix — it has a word of its own. Use it for \"there is none\" and for \"I don't have\".",
          ar: "لا يُنفى الوجود بالبادئة، بل له كلمة خاصة تُستخدم لـ«لا يوجد» ولـ«ليس عندي».",
          fr: "L'existence ne se nie pas avec le préfixe : elle a son propre mot, employé pour « il n'y en a pas » et « je n'ai pas ».",
          de: "Existenz wird nicht mit dem Präfix negiert — sie hat ihr eigenes Wort, auch für „ich habe nicht“."
        },
        items: [
          { label: { en: "there is not", ar: "لا يوجد", fr: "il n'y a pas", de: "es gibt nicht" }, tg: "ኣልቡ" },
        ]
      },
      {
        heading: { en: "Telling someone NOT to do something", ar: "النهي", fr: "Interdire quelque chose", de: "Etwas verbieten" },
        rule: {
          en: "A prohibition is not the plain command with a \"not\" in front. Instead the negative prefix is attached to the wish form: literally \"may you not go\".",
          ar: "النهي ليس صيغة الأمر مع النفي، بل تُضاف بادئة النفي إلى الصيغة الطلبية: حرفياً «لا تذهبْ».",
          fr: "L'interdiction n'est pas l'impératif avec une négation devant : le préfixe négatif se fixe sur la forme de souhait, littéralement « que tu n'y ailles pas ».",
          de: "Ein Verbot ist nicht der einfache Befehl mit „nicht“ davor: Das Negationspräfix tritt an die Wunschform — wörtlich „mögest du nicht gehen“."
        },
        examples: [
          { label: { en: "Don't go!", ar: "لا تذهب!", fr: "N'y va pas !", de: "Geh nicht!" }, tg: "" },
        ]
      },
    ]
  },
  {
    id: "pron-verb", icon: "🔗", color: "#2E86AB",
    title: { en: "Object Endings on Verbs", ar: "لواحق المفعول على الفعل", fr: "Suffixes d'Objet", de: "Objektendungen am Verb" },
    desc: { en: "me, you, him, her … attached to the verb", ar: "ـني، ـك، ـه … تُلحق بالفعل", fr: "me, te, le, la … collés au verbe", de: "mich, dich, ihn, sie … am Verb" },
    sections: [
      {
        heading: { en: "How it works", ar: "كيف تعمل", fr: "Comment ça marche", de: "So funktioniert es" },
        rule: {
          en: "\"He saw ME\" is one word in Tigre: the verb keeps its own person ending, then the object ending is added after it. It is the same trick as the possessive endings on nouns, applied to verbs.",
          ar: "«رآني» كلمة واحدة في التقري: يحفظ الفعل لاحقته الدالة على فاعله ثم تُضاف لاحقة المفعول بعدها. وهي الحيلة نفسها المستخدمة في لواحق الملكية على الأسماء.",
          fr: "« Il M'a vu » est un seul mot en tigré : le verbe garde sa terminaison de personne, puis la terminaison d'objet s'ajoute après. C'est le même procédé que les possessifs sur les noms.",
          de: "„Er sah MICH“ ist im Tigre ein Wort: Das Verb behält seine Personenendung, danach kommt die Objektendung. Es ist derselbe Trick wie bei den Possessivendungen am Nomen."
        },
      },
      {
        heading: { en: "The endings", ar: "جدول اللواحق", fr: "Les terminaisons", de: "Die Endungen" },
        rule: {
          en: "Several variants are listed for some endings: the shape depends on the sound the verb ends with. Learn one variant first and copy what you hear for the rest.",
          ar: "تُذكر لبعض اللواحق صيغ متعددة، لأن شكلها يتبع الصوت الذي ينتهي به الفعل. احفظ واحدة أولاً ثم اقتبس الباقي بالسماع.",
          fr: "Plusieurs variantes sont indiquées pour certaines terminaisons : la forme dépend du son final du verbe. Apprenez-en une d'abord, puis imitez ce que vous entendez.",
          de: "Für manche Endungen sind mehrere Varianten angegeben: Die Form hängt vom Endlaut des Verbs ab. Lerne zuerst eine und übernimm den Rest nach Gehör."
        },
        items: [
          { label: { en: "me", ar: "ـني", fr: "me", de: "mich" }, tg: "ـኒ / ኒ" },
          { label: { en: "you — to a man", ar: "ـكَ", fr: "te (m.)", de: "dich (m.)" }, tg: "ـካ / ካ" },
          { label: { en: "him", ar: "ـه", fr: "le", de: "ihn" }, tg: "ـኦ / ዎ / ዮ / ሁ / ዩ" },
          { label: { en: "her", ar: "ـها", fr: "la", de: "sie (Akk.)" }, tg: "ـኣ / ዋ / ያ / ሃ" },
          { label: { en: "us", ar: "ـنا", fr: "nous", de: "uns" }, tg: "ـና / ና" },
          { label: { en: "them — men / mixed", ar: "ـهم", fr: "les (m.)", de: "sie (Pl.)" }, tg: "ـኦም / ዎም / ዮም / ሆም" },
        ]
      },
      {
        heading: { en: "Examples", ar: "أمثلة", fr: "Exemples", de: "Beispiele" },
        items: [
          { label: { en: "he overpowered me", ar: "غلبني", fr: "il m'a vaincu", de: "er überwältigte mich" }, tg: "አውዳቀኒ" },
          { label: { en: "give her! (to a group)", ar: "أعطوها!", fr: "donnez-la-lui !", de: "gebt ihr!" }, tg: "ሃቡሃ" },
        ]
      },
    ]
  },
  {
    id: "prepositions", icon: "🔀", color: "#F39C12",
    title: { en: "Prepositions", ar: "حروف الجر", fr: "Prépositions", de: "Präpositionen" },
    desc: { en: "in, from, with, to, after", ar: "في، من، مع، إلى، بعد", fr: "dans, de, avec, à, après", de: "in, von, mit, zu, nach" },
    sections: [
      {
        heading: { en: "The main ones", ar: "الأساسية", fr: "Les principales", de: "Die wichtigsten" },
        rule: {
          en: "Prepositions come before the noun, exactly as in English. They are short words and are often pronounced together with the noun that follows them.",
          ar: "تتقدّم حروف الجر على الاسم كما في الإنجليزية. وهي كلمات قصيرة تُلفظ غالباً موصولة بالاسم الذي بعدها.",
          fr: "Les prépositions précèdent le nom, comme en anglais. Ce sont des mots courts, souvent prononcés d'un trait avec le nom qui suit.",
          de: "Präpositionen stehen vor dem Nomen, genau wie im Englischen. Sie sind kurz und werden oft mit dem folgenden Nomen zusammen gesprochen."
        },
        items: [
          { label: { en: "in, at, to (a place)", ar: "في، عند، إلى", fr: "dans, à, en", de: "in, an, zu (Ort)" }, tg: "ዓት" },
          { label: { en: "from, out of", ar: "من", fr: "de, depuis", de: "von, aus" }, tg: "ሙን" },
          { label: { en: "with, by means of", ar: "مع، بواسطة", fr: "avec, au moyen de", de: "mit, mittels" }, tg: "ዓብ" },
          { label: { en: "to, for (a person)", ar: "لـ، إلى (شخص)", fr: "à, pour (une personne)", de: "zu, für (Person)" }, tg: "ዓጋሌ" },
          { label: { en: "after", ar: "بعد", fr: "après", de: "nach" }, tg: "ሃቆ" },
          { label: { en: "like, as", ar: "مثل، كـ", fr: "comme", de: "wie" }, tg: "ካምሳሌ" },
        ],
        examples: [
          { label: { en: "in the house", ar: "في البيت", fr: "dans la maison", de: "im Haus" }, tg: "" },
          { label: { en: "from the market", ar: "من السوق", fr: "du marché", de: "vom Markt" }, tg: "" },
          { label: { en: "with my father", ar: "مع أبي", fr: "avec mon père", de: "mit meinem Vater" }, tg: "" },
        ]
      },
      {
        heading: { en: "Useful little words", ar: "كلمات صغيرة مفيدة", fr: "Petits mots utiles", de: "Nützliche kleine Wörter" },
        rule: {
          en: "These are not prepositions but they behave the same way — they sit in front of the noun.",
          ar: "هذه ليست حروف جر لكنها تسلك سلوكها: تتقدّم الاسم.",
          fr: "Ce ne sont pas des prépositions, mais elles se comportent de même : elles précèdent le nom.",
          de: "Das sind keine Präpositionen, aber sie verhalten sich gleich — sie stehen vor dem Nomen."
        },
        items: [
          { label: { en: "all, every", ar: "كل", fr: "tout, chaque", de: "alle, jeder" }, tg: "ካሌ" },
        ]
      },
    ]
  },
  {
    id: "conjunctions", icon: "➕", color: "#5E6B8E",
    title: { en: "Joining Words & Sentences", ar: "أدوات الربط", fr: "Relier Mots & Phrases", de: "Wörter & Sätze verbinden" },
    desc: { en: "and, or, but, if, because", ar: "و، أو، لكن، إذا، لأن", fr: "et, ou, mais, si, parce que", de: "und, oder, aber, wenn, weil" },
    sections: [
      {
        heading: { en: "And, or, but", ar: "و، أو، لكن", fr: "Et, ou, mais", de: "Und, oder, aber" },
        rule: {
          en: "These join two words or two whole sentences, and they stand between the parts they join — just like English.",
          ar: "تربط هذه الأدوات كلمتين أو جملتين كاملتين، وتقع بين ما تربطه، كما في الإنجليزية.",
          fr: "Ces mots relient deux mots ou deux phrases entières et se placent entre les éléments joints, comme en anglais.",
          de: "Diese verbinden zwei Wörter oder zwei ganze Sätze und stehen zwischen den verbundenen Teilen — wie im Englischen."
        },
        items: [
          { label: { en: "and", ar: "و", fr: "et", de: "und" }, tg: "ዋ" },
          { label: { en: "or", ar: "أو", fr: "ou", de: "oder" }, tg: "ማ" },
          { label: { en: "but", ar: "لكن", fr: "mais", de: "aber" }, tg: "ዳዓም" },
        ],
        examples: [
          { label: { en: "bread and milk", ar: "خبز وحليب", fr: "du pain et du lait", de: "Brot und Milch" }, tg: "" },
        ]
      },
      {
        heading: { en: "If, because, although", ar: "إذا، لأن، رغم أن", fr: "Si, parce que, bien que", de: "Wenn, weil, obwohl" },
        rule: {
          en: "These open a dependent clause. That clause normally comes FIRST, before the main clause — and remember each clause still ends with its own verb.",
          ar: "تفتح هذه الأدوات جملة تابعة، وتأتي هذه الجملة في المقدّمة قبل الجملة الرئيسة عادةً — وتذكّر أن كل جملة تنتهي بفعلها.",
          fr: "Ces mots ouvrent une subordonnée, qui se place normalement AVANT la principale — et rappelez-vous que chaque proposition finit par son verbe.",
          de: "Diese eröffnen einen Nebensatz, der normalerweise VOR dem Hauptsatz steht — und jeder Satz endet weiterhin mit seinem Verb."
        },
        items: [
          { label: { en: "if", ar: "إذا", fr: "si", de: "wenn" }, tg: "ሙን" },
          { label: { en: "because, since", ar: "لأن", fr: "parce que", de: "weil, da" }, tg: "ዓቢ ሊ" },
          { label: { en: "although", ar: "رغم أن", fr: "bien que", de: "obwohl" }, tg: "ሙንሜ" },
        ],
        examples: [
          { label: { en: "If it rains, I will not go.", ar: "إذا أمطرت فلن أذهب.", fr: "S'il pleut, je n'irai pas.", de: "Wenn es regnet, gehe ich nicht." }, tg: "", lit: { en: "if — rain — falls, I — not-go", ar: "إذا — مطر — نزل، أنا — لا أذهب", fr: "si — pluie — tombe, je — ne vais pas", de: "wenn — Regen — fällt, ich — gehe nicht" } },
        ]
      },
    ]
  },
];


// ─── DICTIONARY (Littmann & Höfner, "Wörterbuch der Tigrê-Sprache", 1962) ────
const DICTIONARY = [
  { tg: "ሰላም", en: "peace, hello", de: "Friede, Hallo", fr: "paix, bonjour", ar: "سلام" },
  { tg: "መርሐባ", en: "welcome", de: "Willkommen", fr: "bienvenue", ar: "مرحبا" },
  { tg: "ኣንኮሁ ሃሊኪ?", en: "how are you? (m)", de: "Wie geht es dir? (m)", fr: "comment vas-tu? (m)", ar: "كيف حالك؟" },
  { tg: "ኣንኮሁ ሃሊኪ?", en: "how are you? (f)", de: "Wie geht es dir? (f)", fr: "comment vas-tu? (f)", ar: "كيف حالكِ؟" },
  { tg: "ሰኒ ሐሊኮ", en: "I am well", de: "Mir geht es gut", fr: "je vais bien", ar: "أنا بخير" },
  { tg: "ሹክራን", en: "thank you", de: "Danke", fr: "merci", ar: "شكراً" },
  { tg: "ኣይዋ", en: "yes", de: "Ja", fr: "oui", ar: "نعم" },
  { tg: "ላ", en: "no", de: "Nein", fr: "non", ar: "لا" },
  { tg: "ደሓን ተትሊካ", en: "goodbye", de: "Auf Wiedersehen", fr: "au revoir", ar: "مع السلامة" },
  { tg: "ሓቴ", en: "one", de: "eins", fr: "un", ar: "واحد" },
  { tg: "ካሌ", en: "two", de: "zwei", fr: "deux", ar: "اثنان" },
  { tg: "ሰለስ", en: "three", de: "drei", fr: "trois", ar: "ثلاثة" },
  { tg: "ዓርባዕ", en: "four", de: "vier", fr: "quatre", ar: "أربعة" },
  { tg: "ሓምስ", en: "five", de: "fünf", fr: "cinq", ar: "خمسة" },
  { tg: "ሱስ", en: "six", de: "sechs", fr: "six", ar: "ستة" },
  { tg: "ሰብዓ", en: "seven", de: "sieben", fr: "sept", ar: "سبعة" },
  { tg: "ሳማን", en: "eight", de: "acht", fr: "huit", ar: "ثمانية" },
  { tg: "ቲስዓ", en: "nine", de: "neun", fr: "neuf", ar: "تسعة" },
  { tg: "ዓሱር", en: "ten", de: "zehn", fr: "dix", ar: "عشرة" },
  { tg: "ኣብ", en: "father", de: "Vater", fr: "père", ar: "أب" },
  { tg: "ኣም", en: "mother", de: "Mutter", fr: "mère", ar: "أم" },
  { tg: "ዋድ", en: "son", de: "Sohn", fr: "fils", ar: "ابن" },
  { tg: "ወለት", en: "daughter", de: "Tochter", fr: "fille", ar: "ابنة" },
  { tg: "ሑ", en: "brother", de: "Bruder", fr: "frère", ar: "أخ" },
  { tg: "ሓት", en: "sister", de: "Schwester", fr: "sœur", ar: "أخت" },
  { tg: "ሂታን", en: "boy, child (m)", de: "Junge, Kind (m)", fr: "garçon, enfant (m)", ar: "ولد" },
  { tg: "ዋለት ኒስህ", en: "girl, child (f)", de: "Mädchen, Kind (f)", fr: "fille, enfant (f)", ar: "بنت" },
  { tg: "ኣናስ", en: "man", de: "Mann", fr: "homme", ar: "رجل" },
  { tg: "ኣሲት", en: "woman", de: "Frau", fr: "femme", ar: "امرأة" },
  { tg: "ኣብ ኣቡ", en: "grandfather", de: "Großvater", fr: "grand-père", ar: "جد" },
  { tg: "ኣቡር", en: "elder", de: "alter Mensch", fr: "personne âgée", ar: "كبير في السن" },
  { tg: "ሰብ", en: "people, men", de: "Leute, Männer", fr: "gens, hommes", ar: "ناس" },
  { tg: "ዓዳም", en: "crowd, people", de: "Menge, Volk", fr: "foule, peuple", ar: "حشد" },
  { tg: "ናፋር", en: "individual, person", de: "Einzelperson", fr: "individu, personne", ar: "فرد" },
  { tg: "ራእስ", en: "head", de: "Kopf", fr: "tête", ar: "رأس" },
  { tg: "ዓይን", en: "eye", de: "Auge", fr: "œil", ar: "عين" },
  { tg: "ኣዝን", en: "ear", de: "Ohr", fr: "oreille", ar: "أذن" },
  { tg: "ኣፍ", en: "mouth", de: "Mund", fr: "bouche", ar: "فم" },
  { tg: "ኣናፍ", en: "nose", de: "Nase", fr: "nez", ar: "أنف" },
  { tg: "ለሳን", en: "tongue", de: "Zunge", fr: "langue", ar: "لسان" },
  { tg: "ስን", en: "tooth", de: "Zahn", fr: "dent", ar: "سن" },
  { tg: "እደ", en: "hand", de: "Hand", fr: "main", ar: "يد" },
  { tg: "ዓገር", en: "foot, leg", de: "Fuß, Bein", fr: "pied, jambe", ar: "قدم" },
  { tg: "ልብ", en: "heart", de: "Herz", fr: "cœur", ar: "قلب" },
  { tg: "ከርስ", en: "belly, stomach", de: "Bauch, Magen", fr: "ventre, estomac", ar: "بطن" },
  { tg: "ድሕር/ ሂታት", en: "back", de: "Rücken", fr: "dos", ar: "ظهر" },
  { tg: "ደም", en: "blood", de: "Blut", fr: "sang", ar: "دم" },
  { tg: "ዓጽም", en: "bone", de: "Knochen", fr: "os", ar: "عظم" },
  { tg: "ጊልድ", en: "skin", de: "Haut", fr: "peau", ar: "جلد" },
  { tg: "ብሶት", en: "forehead", de: "Stirn", fr: "front", ar: "جبين" },
  { tg: "ዋዓት", en: "cow", de: "Kuh", fr: "vache", ar: "بقرة" },
  { tg: "ገመል", en: "camel", de: "Kamel", fr: "chameau", ar: "جمل" },
  { tg: "ፈረስ", en: "horse", de: "Pferd", fr: "cheval", ar: "حصان" },
  { tg: "ኣደግ", en: "donkey", de: "Esel", fr: "âne", ar: "حمار" },
  { tg: "ከልብ", en: "dog", de: "Hund", fr: "chien", ar: "كلب" },
  { tg: "ድሞ", en: "cat", de: "Katze", fr: "chat", ar: "قطة" },
  { tg: "ባግዕ", en: "sheep", de: "Schaf", fr: "mouton", ar: "خروف" },
  { tg: "ጣሊት", en: "goat (f)", de: "Ziege (f)", fr: "chèvre (f)", ar: "عنزة" },
  { tg: "ድርሆ", en: "chicken, hen", de: "Huhn, Henne", fr: "poule, poulet", ar: "دجاجة" },
  { tg: "ሃበይ", en: "monkey", de: "Affe", fr: "singe", ar: "قرد" },
  { tg: "ኣንሳይ/ዋላት በት", en: "mouse", de: "Maus", fr: "souris", ar: "فأر" },
  { tg: "ኣርዌ", en: "snake", de: "Schlange", fr: "serpent", ar: "أفعى" },
  { tg: "ካረጭ", en: "hyena", de: "Hyäne", fr: "hyène", ar: "ضبع" },
  { tg: "ሃየት", en: "lion", de: "Löwe", fr: "lion", ar: "أسد" },
  { tg: "ዖፍ", en: "bird", de: "Vogel", fr: "oiseau", ar: "طائر" },
  { tg: "ዓሳ", en: "fish", de: "Fisch", fr: "poisson", ar: "سمكة" },
  { tg: "ጸሓይ", en: "sun", de: "Sonne", fr: "soleil", ar: "شمس" },
  { tg: "ወርሕ", en: "moon", de: "Mond", fr: "lune", ar: "قمر" },
  { tg: "ኮከብ", en: "star", de: "Stern", fr: "étoile", ar: "نجمة" },
  { tg: "ሰማይ", en: "sky", de: "Himmel", fr: "ciel", ar: "سماء" },
  { tg: "ምድር", en: "earth, land", de: "Erde, Land", fr: "terre, pays", ar: "أرض" },
  { tg: "ማይ", en: "water", de: "Wasser", fr: "eau", ar: "ماء" },
  { tg: "ዘላም", en: "rain", de: "Regen", fr: "pluie", ar: "مطر" },
  { tg: "ኣሳት", en: "fire", de: "Feuer", fr: "feu", ar: "نار" },
  { tg: "ነፋስ/ስማል", en: "wind", de: "Wind", fr: "vent", ar: "ريح" },
  { tg: "ዓጸይ", en: "tree, wood", de: "Baum, Holz", fr: "arbre, bois", ar: "شجرة" },
  { tg: "ዓባን", en: "stone, rock", de: "Stein, Felsen", fr: "pierre, roche", ar: "حجر" },
  { tg: "ደብር", en: "mountain", de: "Berg", fr: "montagne", ar: "جبل" },
  { tg: "ላሊ", en: "night", de: "Nacht", fr: "nuit", ar: "ليل" },
  { tg: "ዮም", en: "day", de: "Tag", fr: "jour", ar: "يوم" },
  { tg: "በሐረ", en: "sea", de: "Meer", fr: "mer", ar: "بحر" },
  { tg: "ማሓዝ", en: "river", de: "Fluss", fr: "rivière", ar: "نهر" },
  { tg: "በልዐ", en: "to eat", de: "essen", fr: "manger", ar: "أكل" },
  { tg: "ሐሊብ", en: "milk", de: "Milch", fr: "lait", ar: "حليب" },
  { tg: "እንገራ", en: "bread", de: "Brot", fr: "pain", ar: "خبز" },
  { tg: "ስጋ", en: "meat", de: "Fleisch", fr: "viande", ar: "لحم" },
  { tg: "ዝብደት", en: "butter", de: "Butter", fr: "beurre", ar: "زبدة" },
  { tg: "ማዓር", en: "honey", de: "Honig", fr: "miel", ar: "عسل" },
  { tg: "ጨው", en: "salt", de: "Salz", fr: "sel", ar: "ملح" },
  { tg: "ቡን", en: "coffee", de: "Kaffee", fr: "café", ar: "قهوة" },
  { tg: "ሱኳር", en: "sugar", de: "Zucker", fr: "sucre", ar: "سكر" },
  { tg: "ኣንቆቕሆ", en: "egg", de: "Ei", fr: "œuf", ar: "بيضة" },
  { tg: "በርበረ", en: "pepper", de: "Pfeffer", fr: "piment", ar: "فلفل" },
  { tg: "ፉል", en: "bean", de: "Bohne", fr: "haricot", ar: "فول" },
  { tg: "ሕሙስ", en: "sourdough bread", de: "Sauerteigbrot", fr: "pain levé", ar: "خبز مخمر" },
  { tg: "ተመር", en: "dates (dried)", de: "Datteln (getrocknet)", fr: "dattes (sèches)", ar: "تمر" },
  { tg: "ሳዕዳ", en: "white", de: "weiß", fr: "blanc", ar: "أبيض" },
  { tg: "ጸሊም", en: "black", de: "schwarz", fr: "noir", ar: "أسود" },
  { tg: "ቀይሕ", en: "red", de: "rot", fr: "rouge", ar: "أحمر" },
  { tg: "ኣኽደር", en: "green", de: "grün", fr: "vert", ar: "أخضر" },
  { tg: "ዓቢ", en: "big", de: "groß", fr: "grand", ar: "كبير" },
  { tg: "ንኡሽ", en: "small", de: "klein", fr: "petit", ar: "صغير" },
  { tg: "ረይም", en: "long, tall", de: "lang, hoch", fr: "long, grand (taille)", ar: "طويل" },
  { tg: "ሃቺር", en: "short", de: "kurz", fr: "court", ar: "قصير" },
  { tg: "ሳኒ", en: "good", de: "gut", fr: "bon", ar: "جيد" },
  { tg: "ኩፉ", en: "bad", de: "schlecht", fr: "mauvais", ar: "سيء" },
  { tg: "ሓዲስ", en: "new", de: "neu", fr: "nouveau", ar: "جديد" },
  { tg: "ጋዲም", en: "old, first", de: "alt, erster", fr: "ancien, premier", ar: "قديم" },
  { tg: "ቃሩብ", en: "near", de: "nah", fr: "proche", ar: "قريب" },
  { tg: "ባዙሕ", en: "much, many", de: "viel", fr: "beaucoup", ar: "كثير" },
  { tg: "ግሩም", en: "beautiful", de: "hübsch, schön", fr: "joli, beau", ar: "جميل" },
  { tg: "ደጉብ", en: "strong", de: "stark", fr: "fort", ar: "قوي" },
  { tg: "ፋዳብ", en: "brave", de: "tapfer, mutig", fr: "brave, courageux", ar: "شجاع" },
  { tg: "ቤት", en: "house", de: "Haus", fr: "maison", ar: "بيت" },
  { tg: "ባብ", en: "door", de: "Tür, Tor", fr: "porte", ar: "باب" },
  { tg: "ገባይ", en: "road, path", de: "Straße, Weg", fr: "route, chemin", ar: "طريق" },
  { tg: "ስም", en: "name", de: "Name", fr: "nom", ar: "اسم" },
  { tg: "ለባስ", en: "clothing", de: "Kleidung", fr: "vêtements", ar: "ملابس" },
  { tg: "ሰኪን", en: "knife", de: "Messer", fr: "couteau", ar: "سكين" },
  { tg: "ካታብ", en: "book", de: "Buch", fr: "livre", ar: "كتاب" },
  { tg: "ሰያፍ", en: "sword", de: "Schwert", fr: "épée", ar: "سيف" },
  { tg: "ወርቅ", en: "gold", de: "Gold", fr: "or", ar: "ذهب" },
  { tg: "ርምስኮት", en: "window", de: "Fenster", fr: "fenêtre", ar: "نافذة" },
  { tg: "ዓድ", en: "village, tribe", de: "Dorf, Stamm", fr: "village, tribu", ar: "قرية" },
  { tg: "ኣካን", en: "place", de: "Ort, Platz", fr: "lieu, place", ar: "مكان" },
  { tg: "ዓርቃይ", en: "bed", de: "Bett", fr: "lit", ar: "سرير" },
  { tg: "ዋራት/ሹኩለ", en: "work", de: "Arbeit", fr: "travail", ar: "عمل" },
  { tg: "ሳናት", en: "year", de: "Jahr", fr: "année", ar: "سنة" },
  { tg: "ግርሸ", en: "money", de: "Geld", fr: "argent", ar: "مال" },
  { tg: "ሰተ", en: "to drink", de: "trinken", fr: "boire", ar: "شرب" },
  { tg: "ገሳ", en: "to go", de: "gehen", fr: "aller", ar: "ذهب" },
  { tg: "መጽእ", en: "to come", de: "kommen", fr: "venir", ar: "جاء" },
  { tg: "ርኤ", en: "to see", de: "sehen", fr: "voir", ar: "رأى" },
  { tg: "ሰምዐ", en: "to hear", de: "hören", fr: "entendre", ar: "سمع" },
  { tg: "በለ", en: "to say, speak", de: "sagen, sprechen", fr: "dire, parler", ar: "قال" },
  { tg: "ሀበ", en: "to give", de: "geben", fr: "donner", ar: "أعطى" },
  { tg: "ስካብ", en: "to sleep", de: "schlafen", fr: "dormir", ar: "نام" },
  { tg: "ኣመረ", en: "to know", de: "wissen, kennen", fr: "savoir, connaître", ar: "عرف" },
  { tg: "ቀርኤ", en: "to read", de: "lesen", fr: "lire", ar: "قرأ" },
  { tg: "ከትበ", en: "to write", de: "schreiben", fr: "écrire", ar: "كتب" },
  { tg: "ቀትለ", en: "to kill", de: "töten", fr: "tuer", ar: "قتل" },
  { tg: "ሞተ", en: "to die", de: "sterben", fr: "mourir", ar: "مات" },
  { tg: "ተጋሰ", en: "to sit down", de: "sich setzen", fr: "s'asseoir", ar: "جلس" },
  { tg: "ዋደ", en: "to do, make", de: "tun, machen", fr: "faire", ar: "فعل" },
  { tg: "መን ስምካ?", en: "what is your name?", de: "Wie heißt du?", fr: "comment t'appelles-tu?", ar: "ما اسمك؟" },
  { tg: "ስምየ…", en: "my name is…", de: "Mein Name ist…", fr: "je m'appelle…", ar: "اسمي…" },
  { tg: "ኣምር", en: "I know", de: "Ich weiß", fr: "je sais", ar: "أعرف" },
  { tg: "ኢ ኣምር", en: "I don't know", de: "Ich weiß nicht", fr: "je ne sais pas", ar: "لا أعرف" },
  { tg: "በጃኻ", en: "please (m)", de: "bitte (m)", fr: "s'il te plaît (m)", ar: "من فضلك" },
  { tg: "ናዓ", en: "come here!", de: "Komm her!", fr: "viens ici!", ar: "تعال!" },
  { tg: "ሳፍርኮ", en: "I am hungry", de: "Ich habe Hunger", fr: "j'ai faim", ar: "أنا جائع" },
  { tg: "ካም?", en: "how much?", de: "Wie viel?", fr: "combien?", ar: "كم؟" },
  { tg: "ኣታያ?", en: "where?", de: "Wo?", fr: "où?", ar: "أين؟" },
  { tg: "ገዘም", en: "tomorrow", de: "morgen", fr: "demain", ar: "غداً" },
  { tg: "ሃላ", en: "there is / exists", de: "es gibt / vorhanden", fr: "il y a / existe", ar: "يوجد" },
  { tg: "ኣልቡ", en: "there is not", de: "es gibt nicht", fr: "il n'y a pas", ar: "لا يوجد" },
  { tg: "ደሓን ተትሊካ", en: "goodbye", de: "Auf Wiedersehen", fr: "au revoir", ar: "مع السلامة" },
  { tg: "ኣነ", en: "I", de: "ich", fr: "je", ar: "أنا" },
  { tg: "ኣንተ", en: "you (m)", de: "du (m.)", fr: "tu (m.)", ar: "أنتَ" },
  { tg: "ኣንቲ", en: "you (f)", de: "du (f.)", fr: "tu (f.)", ar: "أنتِ" },
  { tg: "ሁቱ", en: "he", de: "er", fr: "il", ar: "هو" },
  { tg: "ሁታ", en: "she", de: "sie", fr: "elle", ar: "هي" },
  { tg: "ሁነ", en: "we", de: "wir", fr: "nous", ar: "نحن" },
  { tg: "ኣንቱም", en: "you (m.pl)", de: "ihr (m.)", fr: "vous (m.)", ar: "أنتم" },
  { tg: "ኣንታን", en: "you (f.pl)", de: "ihr (f.)", fr: "vous (f.)", ar: "أنتن" },
  { tg: "ሁቶም", en: "they (m)", de: "sie (m. Pl.)", fr: "ils", ar: "هم" },
  { tg: "ሁታን", en: "they (f)", de: "sie (f. Pl.)", fr: "elles", ar: "هن" },
  { tg: "ሚ", en: "what?", de: "was?", fr: "quoi?", ar: "ماذا؟" },
  { tg: "መን", en: "who?", de: "wer?", fr: "qui?", ar: "من؟" },
  { tg: "ኣዪ", en: "which? (m)", de: "welcher? (m.)", fr: "quel? (m.)", ar: "أي؟" },
  { tg: "ኣያ", en: "which? (f)", de: "welche? (f.)", fr: "quelle? (f.)", ar: "أية؟" },
  { tg: "ዎሮ", en: "someone (m)", de: "jemand (m.)", fr: "quelqu'un (m.)", ar: "شخص ما" },
  { tg: "መንማ", en: "nobody", de: "niemand", fr: "personne", ar: "لا أحد" },
  { tg: "ጋሌ", en: "something", de: "etwas", fr: "quelque chose", ar: "شيء ما" },
  { tg: "ሰማ", en: "nothing", de: "nichts", fr: "rien", ar: "لا شيء" },
  { tg: "ዕሊ", en: "this (m)", de: "dieser (m.)", fr: "ce (m.)", ar: "هذا" },
  { tg: "ዕላ", en: "this (f)", de: "diese (f.)", fr: "cette (f.)", ar: "هذه" },
  { tg: "ዕሎም", en: "these (m.pl)", de: "diese (m. Pl.)", fr: "ces (m. pl.)", ar: "هؤلاء" },
  { tg: "ዕላን", en: "these (f.pl)", de: "diese (f. Pl.)", fr: "ces (f. pl.)", ar: "هؤلاء" },
  { tg: "ቱ", en: "he is (copula)", de: "er ist", fr: "il est", ar: "هو (رابطة)" },
  { tg: "ታ", en: "she is (copula)", de: "sie ist", fr: "elle est", ar: "هي (رابطة)" },
  { tg: "ቶም", en: "they are (m.pl)", de: "sie sind (m. Pl.)", fr: "ils sont", ar: "هم" },
  { tg: "ታን", en: "they are (f.pl)", de: "sie sind (f. Pl.)", fr: "elles sont", ar: "هن" },
  { tg: "ኢኮን", en: "is not (negation)", de: "ist nicht", fr: "n'est pas", ar: "ليس" },
  { tg: "ዕስራ", en: "twenty", de: "zwanzig", fr: "vingt", ar: "عشرون" },
  { tg: "ሰላሳ", en: "thirty", de: "dreißig", fr: "trente", ar: "ثلاثون" },
  { tg: "ዓርብዓ", en: "forty", de: "vierzig", fr: "quarante", ar: "أربعون" },
  { tg: "ሓምሳ", en: "fifty", de: "fünfzig", fr: "cinquante", ar: "خمسون" },
  { tg: "ሱስትሳ", en: "sixty", de: "sechzig", fr: "soixante", ar: "ستون" },
  { tg: "ምዓት", en: "hundred", de: "hundert", fr: "cent", ar: "مئة" },
  { tg: "ዓዳድ", en: "number, quantity", de: "Zahl, Menge", fr: "nombre, quantité", ar: "عدد" },
  { tg: "ኣዋላይ", en: "first", de: "erster", fr: "premier", ar: "أول" },
  { tg: "ካላይ", en: "second", de: "zweiter", fr: "deuxième", ar: "ثاني" },
  { tg: "ሰለሳይ", en: "third", de: "dritter", fr: "troisième", ar: "ثالث" },
  { tg: "ቃትላ", en: "to kill (Type A)", de: "töten (Typ A)", fr: "tuer (Type A)", ar: "قتل" },
  { tg: "ፋጋ", en: "to go out (Type A)", de: "hinausgehen (Typ A)", fr: "sortir (Type A)", ar: "خرج" },
  { tg: "ዋዳ", en: "to do (Type A)", de: "tun (Typ A)", fr: "faire (Type A)", ar: "فعل" },
  { tg: "ሳቢሬ", en: "to break (Type C)", de: "zerbrechen (Typ C)", fr: "briser (Type C)", ar: "كسر" },
  { tg: "ሃቤሬ", en: "to join (Type C)", de: "verbinden (Typ C)", fr: "assembler (Type C)", ar: "جمع" },
  { tg: "ኢኣምር", en: "I don't know", de: "ich weiß nicht", fr: "je ne sais pas", ar: "لا أعرف" },
  { tg: "ኢኣነ", en: "I am not", de: "ich bin nicht", fr: "je ne suis pas", ar: "لست" },
  { tg: "ዓት", en: "in, at, to", de: "in, an, zu", fr: "dans, à, en", ar: "في" },
  { tg: "ሙን", en: "from", de: "von, aus", fr: "de, depuis", ar: "من" },
  { tg: "ዓብ", en: "with, by", de: "mit, durch", fr: "avec, par", ar: "مع" },
  { tg: "ዓጋሌ", en: "for, to", de: "für, zu", fr: "à, pour", ar: "لـ" },
  { tg: "ሃቆ", en: "after, behind", de: "nach, hinter", fr: "après", ar: "بعد" },
  { tg: "ካምሳሌ", en: "like, as", de: "wie, als", fr: "comme", ar: "مثل" },
  { tg: "ዓምባሌ", en: "without", de: "ohne", fr: "sans", ar: "بدون" },
  { tg: "ዋ", en: "and", de: "und", fr: "et", ar: "و" },
  { tg: "ማ", en: "or", de: "oder", fr: "ou", ar: "أو" },
  { tg: "ዳዓም", en: "but", de: "aber", fr: "mais", ar: "لكن" },
  { tg: "ዲብ", en: "when", de: "als, wenn", fr: "quand, lorsque", ar: "عندما" },
  { tg: "ዓቢ ሊ", en: "because", de: "weil, da", fr: "parce que", ar: "لأن" },
  { tg: "ሙንሜ", en: "although", de: "obwohl", fr: "bien que", ar: "رغم أن" },
  { tg: "ሃንጋሌ", en: "brain", de: "Gehirn", fr: "cerveau", ar: "دماغ" },
  { tg: "ዓዋን", en: "time", de: "Zeit", fr: "temps", ar: "وقت" },
  { tg: "ጋቢሌ", en: "tribe, people", de: "Volk, Stamm", fr: "peuple, tribu", ar: "قبيلة" },
  { tg: "ሃሲን", en: "iron", de: "Eisen", fr: "fer", ar: "حديد" },
  { tg: "ኃል", en: "maternal uncle", de: "Onkel mütterlicherseits", fr: "oncle maternel", ar: "خال" },
  { tg: "ኃልት", en: "maternal aunt", de: "Tante mütterlicherseits", fr: "tante maternelle", ar: "خالة" },
  { tg: "ሐም", en: "father-in-law", de: "Schwiegervater", fr: "beau-père", ar: "حمو" },
  { tg: "ናልት", en: "sister-in-law", de: "Schwägerin", fr: "belle-sœur", ar: "كنة" },
  { tg: "ዘመድ", en: "relative", de: "Verwandter", fr: "parent", ar: "قريب" },
  { tg: "ኀው", en: "brother", de: "Bruder", fr: "frère", ar: "أخ" },
  { tg: "ሐውል", en: "year", de: "Jahr", fr: "année", ar: "سنة" },
  { tg: "ሐዲስ", en: "new", de: "neu", fr: "nouveau", ar: "جديد" },
  { tg: "ሒደት", en: "gift", de: "Geschenk", fr: "cadeau", ar: "هدية" },
  { tg: "ሕለብ", en: "milk cow", de: "Milchkuh", fr: "vache à lait", ar: "بقرة حلوب" },
  { tg: "ሖበዚት", en: "bread (baked)", de: "Brot (gebacken)", fr: "pain (cuit au four)", ar: "خبز مخبوز" },
  { tg: "ሜስ", en: "mead, hydromel", de: "Met", fr: "hydromel", ar: "عسل مخمر" },
  { tg: "ማዜ", en: "honey water", de: "Honigwasser", fr: "eau miellée", ar: "ماء بعسل" },
  { tg: "ማደ", en: "roast meat (on stones)", de: "Grillfleisch (auf Steinen)", fr: "viande rôtie sur pierres", ar: "لحم مشوي" },
  { tg: "ሐሪጽ", en: "flour", de: "Mehl", fr: "farine", ar: "طحين" },
  { tg: "ሎምን", en: "lemon", de: "Zitrone", fr: "citron", ar: "ليمون" },
  { tg: "ሹኩር", en: "sugar", de: "Zucker", fr: "sucre", ar: "سكر" },
  { tg: "ማሸላ", en: "sorghum", de: "Sorghum", fr: "dourra", ar: "ذرة رفيعة" },
  { tg: "ፀሓይ", en: "sun, light", de: "Sonne, Licht", fr: "soleil, lumière", ar: "شمس" },
  { tg: "ዘነመ", en: "to rain", de: "regnen", fr: "pleuvoir", ar: "أمطر" },
  { tg: "ሐምዳ", en: "dew", de: "Tau", fr: "rosée", ar: "ندى" },
  { tg: "ሖጻ", en: "sand", de: "Sand", fr: "sable", ar: "رمل" },
  { tg: "ሐፍረ", en: "to dig", de: "graben", fr: "creuser", ar: "حفر" },
  { tg: "ደመና", en: "cloud", de: "Wolke", fr: "nuage", ar: "سحابة" },
  { tg: "ሑሙም", en: "leopard", de: "Leopard", fr: "léopard", ar: "نمر" },
  { tg: "ሐሺል", en: "jackal", de: "Schakal", fr: "chacal", ar: "ابن آوى" },
  { tg: "ሐርመስ", en: "elephant", de: "Elefant", fr: "éléphant", ar: "فيل" },
  { tg: "ኅሪሽ", en: "rhinoceros", de: "Nashorn", fr: "rhinocéros", ar: "وحيد القرن" },
  { tg: "ሐራዊጀ", en: "wild boar", de: "Wildschwein", fr: "sanglier", ar: "خنزير بري" },
  { tg: "ሐበይ", en: "monkey", de: "Affe", fr: "singe", ar: "قرد" },
  { tg: "ኒሂብ", en: "bee", de: "Biene", fr: "abeille", ar: "نحلة" },
  { tg: "ሊሎ", en: "eagle", de: "Adler", fr: "aigle", ar: "نسر" },
  { tg: "ሹከን", en: "gazelle", de: "Gazelle", fr: "gazelle", ar: "غزال" },
  { tg: "ሰገን", en: "ostrich", de: "Strauß", fr: "autruche", ar: "نعامة" },
  { tg: "ቶክላ", en: "wolf", de: "Wolf", fr: "loup", ar: "ذئب" },
  { tg: "ደቤላ", en: "billy goat", de: "Ziegenbock", fr: "bouc", ar: "تيس" },
  { tg: "ለጋ", en: "male calf", de: "männliches Kalb", fr: "veau mâle", ar: "عجل" },
  { tg: "መንተሌ", en: "hare", de: "Hase", fr: "lièvre", ar: "أرنب" },
  { tg: "ሀለ", en: "to be, to exist", de: "sein, sich befinden", fr: "y être, se trouver", ar: "يكون" },
  { tg: "ሐለመ", en: "to dream", de: "träumen", fr: "rêver", ar: "حلم" },
  { tg: "ሐለበ", en: "to milk", de: "melken", fr: "traire", ar: "حلب" },
  { tg: "ሐለነ", en: "to think", de: "denken", fr: "penser", ar: "فكر" },
  { tg: "ኀልፈ", en: "to pass", de: "vorbeigehen", fr: "passer", ar: "مرّ" },
  { tg: "ሐመመ", en: "to fall ill", de: "erkranken", fr: "tomber malade", ar: "مرض" },
  { tg: "ሐሰበ", en: "to calculate", de: "berechnen", fr: "calculer", ar: "حسب" },
  { tg: "ሐሰወ", en: "to lie", de: "lügen", fr: "mentir", ar: "كذب" },
  { tg: "ሐርሰ", en: "to plough", de: "pflügen", fr: "labourer", ar: "حرث" },
  { tg: "ሐረ", en: "to burn", de: "verbrennen", fr: "se brûler", ar: "احترق" },
  { tg: "ሐረረ", en: "to walk fast", de: "schnell gehen", fr: "marcher vite", ar: "مشى بسرعة" },
  { tg: "ሐርበ", en: "to escape", de: "entfliehen", fr: "s'échapper", ar: "هرب" },
  { tg: "ኀረየ", en: "to choose", de: "wählen", fr: "choisir", ar: "اختار" },
  { tg: "ኀረደ", en: "to slaughter", de: "schlachten", fr: "égorger", ar: "ذبح" },
  { tg: "ሐንቀ", en: "to strangle", de: "erdrosseln", fr: "étrangler", ar: "خنق" },
  { tg: "ሐነተ", en: "to conceive", de: "empfangen", fr: "concevoir", ar: "حبلت" },
  { tg: "ሓከከ", en: "to rub, scratch", de: "reiben, kratzen", fr: "frotter, gratter", ar: "حكّ" },
  { tg: "ሐዘ", en: "to want, desire", de: "wollen, wünschen", fr: "vouloir, désirer", ar: "أراد" },
  { tg: "ሐዘነ", en: "to grieve", de: "trauern", fr: "s'attrister", ar: "حزن" },
  { tg: "ሐየ", en: "to ignite, heal", de: "entzünden, heilen", fr: "s'allumer, guérir", ar: "أشعل" },
  { tg: "ሐደ", en: "to marry", de: "heiraten", fr: "se marier", ar: "تزوج" },
  { tg: "ሐድገ", en: "to abandon, divorce", de: "verlassen, scheiden", fr: "laisser, divorcer", ar: "ترك" },
  { tg: "ሐጽረ", en: "to shorten", de: "kürzen", fr: "devenir court", ar: "قصر" },
  { tg: "ሐፅበ", en: "to wash", de: "waschen", fr: "laver", ar: "غسل" },
  { tg: "ሐፈረ", en: "to be ashamed", de: "sich schämen", fr: "avoir honte", ar: "خجل" },
  { tg: "ለህሰ", en: "to lick", de: "lecken", fr: "lécher", ar: "لعق" },
  { tg: "ለመደ", en: "to get used to", de: "sich gewöhnen", fr: "s'habituer", ar: "تعوّد" },
  { tg: "ለቅሰ", en: "to lament", de: "klagen", fr: "se lamenter", ar: "ندب" },
  { tg: "ለበሰ", en: "to dress", de: "sich ankleiden", fr: "s'habiller", ar: "لبس" },
  { tg: "ላከ", en: "to send", de: "senden", fr: "envoyer", ar: "أرسل" },
  { tg: "ለወጠ", en: "to exchange", de: "tauschen", fr: "échanger", ar: "بادل" },
  { tg: "ለፍቀ", en: "to sew", de: "nähen", fr: "coudre", ar: "خاط" },
  { tg: "መሐለ", en: "to swear", de: "schwören", fr: "jurer", ar: "أقسم" },
  { tg: "መሕረ", en: "to have mercy", de: "Mitleid haben", fr: "avoir pitié", ar: "رحم" },
  { tg: "መልአ", en: "to fill", de: "füllen", fr: "remplir", ar: "ملأ" },
  { tg: "መለከ", en: "to rule", de: "herrschen", fr: "dominer", ar: "حكم" },
  { tg: "መርሐ", en: "to guide", de: "führen", fr: "guider", ar: "قاد" },
  { tg: "መረረ", en: "to be bitter", de: "bitter werden", fr: "être amer", ar: "أصبح مرّاً" },
  { tg: "መጸአ", en: "to come", de: "kommen", fr: "venir", ar: "أتى" },
  { tg: "መወነ", en: "to nourish", de: "ernähren", fr: "nourrir", ar: "غذّى" },
  { tg: "ማሌ", en: "yesterday", de: "gestern", fr: "hier", ar: "أمس" },
  { tg: "ሠሐቀ", en: "to laugh", de: "lachen", fr: "rire", ar: "ضحك" },
  { tg: "ሰለመ", en: "to be saved", de: "gerettet werden", fr: "se sauver", ar: "نجا" },
  { tg: "ሠለሥት", en: "three", de: "drei", fr: "trois", ar: "ثلاثة" },
  { tg: "ሰመየ", en: "to name", de: "benennen", fr: "nommer", ar: "سمّى" },
  { tg: "ሠርሐ", en: "to work, build", de: "arbeiten, bauen", fr: "travailler, bâtir", ar: "عمل" },
  { tg: "ሰበረ", en: "to break", de: "zerbrechen", fr: "briser", ar: "كسر" },
  { tg: "ሰተየ", en: "to drink", de: "trinken", fr: "boire", ar: "شرب" },
  { tg: "ሰፍረ", en: "to be hungry", de: "Hunger haben", fr: "avoir faim", ar: "جاع" },
  { tg: "ሸክረ", en: "to get drunk", de: "betrunken werden", fr: "s'enivrer", ar: "سكر" },
  { tg: "ሰገደ", en: "to pray", de: "beten", fr: "prier", ar: "صلّى" },
  { tg: "ሠሠ", en: "to dance", de: "tanzen", fr: "danser", ar: "رقص" },
  { tg: "ሰይፍ", en: "sword", de: "Schwert", fr: "épée", ar: "سيف" },
  { tg: "ሣር", en: "grass", de: "Gras", fr: "herbe", ar: "عشب" },
  { tg: "ተለ", en: "to follow", de: "folgen", fr: "suivre", ar: "تبع" },
  { tg: "ተመ", en: "to be fulfilled", de: "erfüllt werden", fr: "s'accomplir", ar: "اكتمل" },
  { tg: "ተስፋ", en: "hope", de: "Hoffnung", fr: "espérance", ar: "أمل" },
  { tg: "ተርገመ", en: "to translate", de: "übersetzen", fr: "traduire", ar: "ترجم" },
  { tg: "ተክለ", en: "to plant", de: "pflanzen", fr: "planter", ar: "زرع" },
  { tg: "ደህነ", en: "to be saved", de: "sich retten", fr: "se sauver", ar: "نجا" },
  { tg: "ደልሔ", en: "to play", de: "spielen", fr: "jouer", ar: "لعب" },
  { tg: "ደረረ", en: "to dine", de: "zu Abend essen", fr: "dîner", ar: "تعشّى" },
  { tg: "ደከመ", en: "to get tired", de: "müde werden", fr: "se fatiguer", ar: "تعب" },
  { tg: "ደግመ", en: "to repeat", de: "wiederholen", fr: "répéter", ar: "كرّر" },
  { tg: "ዳፍነ", en: "to bury", de: "begraben", fr: "enterrer", ar: "دفن" },
  { tg: "ነበረ", en: "to stay, live", de: "bleiben, wohnen", fr: "rester, demeurer", ar: "بقي" },
  { tg: "ነብዐ", en: "to cry", de: "weinen", fr: "pleurer", ar: "بكى" },
  { tg: "ነገረ", en: "to speak", de: "sprechen", fr: "parler", ar: "تكلّم" },
  { tg: "ነግደ", en: "to trade", de: "handeln", fr: "commercer", ar: "تاجر" },
  { tg: "ነጽሐ", en: "to be pure", de: "rein sein", fr: "être pur", ar: "طهر" },
  { tg: "ነፅረ", en: "to look", de: "schauen", fr: "regarder", ar: "نظر" },
  { tg: "ነፍስ", en: "soul", de: "Seele", fr: "âme", ar: "نفس" },
  { tg: "ነፈዐ", en: "to be useful", de: "nützlich sein", fr: "se rendre utile", ar: "نفع" },
  { tg: "ኵሉ", en: "all, every", de: "alles, jeder", fr: "tout", ar: "كل" },
  { tg: "ካላ", en: "very big, giant", de: "sehr groß, Riese", fr: "très grand, géant", ar: "عملاق" },
  { tg: "ኵሌ", en: "two", de: "zwei", fr: "deux", ar: "اثنان" },
  { tg: "ካበሮ", en: "drum", de: "Trommel", fr: "tambour", ar: "طبل" },
  { tg: "ካትባ", en: "to write", de: "schreiben", fr: "écrire", ar: "كتب" },
  { tg: "ወልደ", en: "to give birth", de: "gebären", fr: "accoucher", ar: "ولد" },
  { tg: "ወርሰ", en: "to inherit", de: "erben", fr: "hériter", ar: "ورث" },
  { tg: "ወደቀ", en: "to fall", de: "fallen", fr: "tomber", ar: "سقط" },
  { tg: "ወጥነ", en: "to try", de: "versuchen", fr: "tenter", ar: "حاول" },
  { tg: "ጎሀ", en: "to think", de: "nachdenken", fr: "réfléchir", ar: "تأمل" },
  { tg: "ገብረ", en: "to do", de: "tun", fr: "faire", ar: "فعل" },
  { tg: "ጋንሀ", en: "to see", de: "sehen", fr: "voir", ar: "رأى" },
  { tg: "ገዛ", en: "to conquer", de: "erobern", fr: "conquérir", ar: "غزا" },
  { tg: "ጊሰ", en: "to go", de: "gehen", fr: "aller", ar: "ذهب" },
  { tg: "ፈህመ", en: "to understand", de: "verstehen", fr: "comprendre", ar: "فهم" },
  { tg: "ፋልሀ", en: "to boil", de: "kochen", fr: "bouillir", ar: "غلى" },
  { tg: "ፋርሀ", en: "to fear", de: "sich fürchten", fr: "avoir peur", ar: "خاف" },
  { tg: "ፈረ", en: "to bear fruit", de: "Frucht tragen", fr: "fructifier", ar: "أثمر" },
  { tg: "ፋትሀ", en: "to open", de: "öffnen", fr: "ouvrir", ar: "فتح" },
  { tg: "ፈተ", en: "to love", de: "lieben", fr: "aimer", ar: "أحبّ" },
  { tg: "ፈደ", en: "to pay", de: "bezahlen", fr: "payer", ar: "دفع" },
  { tg: "ፋትረ", en: "to create", de: "erschaffen", fr: "créer", ar: "خلق" },
  { tg: "ጻህፈ", en: "to write", de: "schreiben", fr: "écrire", ar: "كتب" },
  { tg: "ጸልመ", en: "to darken", de: "dunkel werden", fr: "s'obscurcir", ar: "أظلم" },
  { tg: "ጸልአ", en: "to hate", de: "hassen", fr: "haïr", ar: "كره" },
  { tg: "ጸምአ", en: "to be thirsty", de: "Durst haben", fr: "avoir soif", ar: "عطش" },
  { tg: "ጾመ", en: "to fast", de: "fasten", fr: "jeûner", ar: "صام" },
  { tg: "ጾረ", en: "to carry", de: "tragen", fr: "porter", ar: "حمل" },
  { tg: "ጻደ", en: "white", de: "weiß", fr: "blanc", ar: "أبيض" },
  { tg: "ጻበት", en: "finger", de: "Finger", fr: "doigt", ar: "إصبع" },
  { tg: "ሕልቀም", en: "throat, voice", de: "Kehle, Stimme", fr: "gorge, voix", ar: "حلق" },
  { tg: "ሐሚት", en: "top of the head", de: "oberer Teil des Kopfes", fr: "partie supérieure de la tête", ar: "قمة الرأس" },
  { tg: "ሐርቱምያ", en: "forearm", de: "Unterarm", fr: "avant-bras", ar: "ساعد" },
  { tg: "ሖበት", en: "armpit", de: "Achselhöhle", fr: "aisselle", ar: "إبط" },
  { tg: "ሐንበርት", en: "navel", de: "Nabel", fr: "nombril", ar: "سرّة" },
  { tg: "ሓንገል", en: "brain", de: "Gehirn", fr: "cerveau", ar: "دماغ" },
  { tg: "ካንፈር", en: "lip", de: "Lippe", fr: "lèvre", ar: "شفة" },
  { tg: "ከበድ", en: "belly, stomach", de: "Bauch, Magen", fr: "ventre, estomac", ar: "بطن" },
  { tg: "ኪብደት", en: "liver", de: "Leber", fr: "foie", ar: "كبد" },
  { tg: "ካታፍ", en: "leg", de: "Bein", fr: "jambe", ar: "ساق" },
  { tg: "መልተኅ", en: "cheek", de: "Wange", fr: "joue", ar: "خد" },
  { tg: "መርከብ", en: "shoulder", de: "Schulter", fr: "épaule", ar: "كتف" },
  { tg: "ጉርበት", en: "the back", de: "der Rücken", fr: "le dos", ar: "الظهر" },
  { tg: "ገጽ", en: "face", de: "Gesicht", fr: "visage", ar: "وجه" },
  { tg: "ጹሁም", en: "beard, chin", de: "Bart, Kinn", fr: "barbe, menton", ar: "لحية" },
  { tg: "ጻጉር", en: "hair", de: "Haare", fr: "cheveux", ar: "شعر" },
  { tg: "ጺፍር", en: "nail", de: "Nagel", fr: "ongle", ar: "ظفر" },
  { tg: "ጦት", en: "nerve", de: "Nerv", fr: "nerf", ar: "عصب" },
  { tg: "ሼጀ", en: "gum (mouth)", de: "Zahnfleisch", fr: "gencive", ar: "لثة" },
  { tg: "ሾክም", en: "chin", de: "Kinn", fr: "menton", ar: "ذقن" },
  { tg: "ሞጋብ", en: "thigh", de: "Oberschenkel", fr: "cuisse", ar: "فخذ" },
  { tg: "ሞግተት", en: "spine", de: "Wirbelsäule", fr: "épine dorsale", ar: "عمود فقري" },
  { tg: "ደንበር", en: "wing, feather", de: "Flügel, Feder", fr: "aile, plume", ar: "جناح" },
  { tg: "ሐማም", en: "illness", de: "Krankheit", fr: "maladie", ar: "مرض" },
  { tg: "ሐድ", en: "fever", de: "Fieber", fr: "fièvre", ar: "حمّى" },
  { tg: "ሐሺሸት", en: "flu", de: "Grippe", fr: "grippe", ar: "إنفلونزا" },
  { tg: "ሕፃን", en: "boy, child", de: "Junge, Kind", fr: "garçon, enfant", ar: "طفل" },
  { tg: "ሐጺን", en: "iron", de: "Eisen", fr: "fer", ar: "حديد" },
  { tg: "ሐቂቀት", en: "truth", de: "Wahrheit", fr: "vérité", ar: "حقيقة" },
  { tg: "ናሀበይ", en: "blacksmith", de: "Schmied", fr: "forgeron", ar: "حداد" },
  { tg: "ሸማግሌ", en: "elder, judge", de: "Ältester, Richter", fr: "vieux, juge", ar: "شيخ" },
  { tg: "ሀልያይ", en: "singer", de: "Sänger", fr: "chanteur", ar: "مغني" },
  { tg: "ሞራ", en: "shepherd's stick", de: "Hirtenstab", fr: "bâton de berger", ar: "عصا الراعي" },
  { tg: "ጉደብ", en: "axe", de: "Axt", fr: "hache", ar: "فأس" },
  { tg: "መሻር", en: "axe", de: "Axt", fr: "hache", ar: "فأس" },
  { tg: "ማንቃ", en: "wooden spoon", de: "Holzlöffel", fr: "cuillère de bois", ar: "ملعقة خشبية" },
  { tg: "ሹቅ", en: "market", de: "Markt", fr: "marché", ar: "سوق" },
  { tg: "መርፌ", en: "needle", de: "Nadel", fr: "aiguille", ar: "إبرة" },
  { tg: "ሚድር", en: "earth, ground", de: "Erde, Boden", fr: "terre, terrain", ar: "أرض" },
  { tg: "ማሬት", en: "terrain", de: "Gelände", fr: "terrain", ar: "أرض" },
  { tg: "ደቂ", en: "village", de: "Dorf", fr: "village", ar: "قرية" },
  { tg: "ኬደን", en: "desert", de: "Wüste", fr: "désert", ar: "صحراء" },
  { tg: "ካር", en: "hunger", de: "Hunger", fr: "la faim", ar: "جوع" },
  { tg: "ሐራም", en: "forbidden, crime", de: "verboten, Verbrechen", fr: "illicite, crime", ar: "حرام" },
  { tg: "ዘርአ", en: "to sow", de: "säen", fr: "semer", ar: "زرع" },
  { tg: "ሑል", en: "bamboo", de: "Bambus", fr: "bambou", ar: "خيزران" },
  { tg: "ሐምሐም", en: "pumpkin", de: "Kürbis", fr: "citrouille", ar: "قرع" },
  { tg: "ኣዳንሶንያ", en: "baobab tree", de: "Affenbrotbaum", fr: "Adansonia digitata", ar: "شجرة الباوباب" },
  { tg: "ጻብር", en: "aloe", de: "Aloe", fr: "aloès", ar: "صبّار" },
  { tg: "ተማሌ", en: "yesterday", de: "gestern", fr: "hier", ar: "البارحة" },
  { tg: "ፋንጎህ", en: "tomorrow", de: "morgen", fr: "demain", ar: "غداً" },
  { tg: "ጡህር", en: "noon", de: "Mittag", fr: "midi", ar: "ظهر" },
  { tg: "ከረም", en: "rainy season", de: "Regenzeit", fr: "saison des pluies", ar: "موسم الأمطار" },
  { tg: "ሄጋ", en: "word, speech", de: "Wort, Rede", fr: "parole, discours", ar: "كلام" },
  { tg: "ሊሳን", en: "tongue, language", de: "Zunge, Sprache", fr: "langue", ar: "لسان" },
  { tg: "ሓመድ", en: "ash", de: "Asche", fr: "cendre", ar: "رماد" },
  { tg: "ኀበረ", en: "to mix, join", de: "mischen, vereinen", fr: "mêler, rejoindre", ar: "خلط" },
  { tg: "ሐቅፈ", en: "to embrace", de: "umarmen", fr: "embrasser", ar: "احتضن" },
  { tg: "ሐይሰ", en: "to improve", de: "verbessern", fr: "s'améliorer", ar: "تحسّن" },
  { tg: "ኃብን", en: "honour, glory", de: "Ehre, Ruhm", fr: "honneur, gloire", ar: "شرف" },
  { tg: "ሱሪ", en: "pants", de: "Hose", fr: "pantalon", ar: "بنطال" },
  { tg: "ጎፍ", en: "heart, character", de: "Herz, Charakter", fr: "cœur, caractère", ar: "قلب" },
  { tg: "ዳውል", en: "bell", de: "Glocke", fr: "cloche", ar: "جرس" },
  { tg: "ዱንያ", en: "world", de: "Welt", fr: "monde", ar: "دنيا" },
  { tg: "ናይ", en: "of, belonging to", de: "von, gehörend zu", fr: "de, appartenant à", ar: "ملك" },
  { tg: "ኖስ", en: "self", de: "selbst", fr: "soi-même", ar: "نفس" },
  { tg: "ናፍስ", en: "soul (literary)", de: "Seele (literarisch)", fr: "âme (littéraire)", ar: "نفس" },
  { tg: "ሁድ", en: "each other (two)", de: "einander (zwei)", fr: "l'un l'autre (deux)", ar: "بعضهما" },
  { tg: "ኖስኖስ", en: "each other (many)", de: "einander (viele)", fr: "les uns les autres", ar: "بعضهم البعض" },
];

// ─── DICTIONARY EXERCISE CATEGORIES ───────────────────────────────────────────
// Structured word groups drawn from the DICTIONARY for targeted tap-based quizzes.
// Each category picks words by their Tigre script key from DICTIONARY at runtime.
const DICT_CATEGORIES = [
  {
    id: "dc-greetings", icon: "👋", color: "#E8985E",
    name: { en: "Greetings & Basics", de: "Begrüßungen", fr: "Salutations", ar: "تحيات" },
    desc: { en: "Hello, goodbye & polite phrases", de: "Hallo, Tschüss & höfliche Sätze", fr: "Bonjour, au revoir & formules", ar: "مرحبا وعبارات" },
    keys: ["ሰላም", "መርሐባ", "ሹክራን", "ኣይዋ", "ላ", "ደሓን ተትሊካ", "በጃኻ", "ናዓ", "ካም?", "ኣታያ?", "ሃላ", "ኣልቡ"]
  },
  {
    id: "dc-family", icon: "👨‍👩‍👧", color: "#C47B5E",
    name: { en: "Family & People", de: "Familie & Menschen", fr: "Famille & Gens", ar: "عائلة وناس" },
    desc: { en: "Father, mother, brother…", de: "Vater, Mutter, Bruder…", fr: "Père, mère, frère…", ar: "أب، أم، أخ…" },
    keys: ["ኣብ", "ኣም", "ዋድ", "ወለት", "ሑ", "ሓት", "ሂታን", "ዋለት ኒስህ", "ኣናስ", "ኣሲት", "ኣብ ኣቡ", "ኣቡር", "ሰብ", "ናፋር", "ዓዳም", "ኃል", "ኃልት", "ሐም", "ናልት", "ዘመድ"]
  },
  {
    id: "dc-body", icon: "🫀", color: "#D4756B",
    name: { en: "Body Parts", de: "Körperteile", fr: "Corps", ar: "أجزاء الجسم" },
    desc: { en: "Head, eyes, hands…", de: "Kopf, Augen, Hände…", fr: "Tête, yeux, mains…", ar: "رأس، عيون، أيدي…" },
    keys: ["ራእስ", "ዓይን", "ኣዝን", "ኣፍ", "ኣናፍ", "ለሳን", "ስን", "እደ", "ዓገር", "ልብ", "ከርስ", "ድሕር/ ሂታት", "ደም", "ዓጽም", "ጊልድ", "ብሶት", "ሃንጋሌ"]
  },
  {
    id: "dc-animals", icon: "🐪", color: "#A67B5B",
    name: { en: "Animals", de: "Tiere", fr: "Animaux", ar: "حيوانات" },
    desc: { en: "Camel, lion, bird…", de: "Kamel, Löwe, Vogel…", fr: "Chameau, lion, oiseau…", ar: "جمل، أسد، طائر…" },
    keys: ["ዋዓት", "ገመል", "ፈረስ", "ኣደግ", "ከልብ", "ድሞ", "ባግዕ", "ጣሊት", "ድርሆ", "ሃበይ", "ኣንሳይ/ዋላት በት", "ኣርዌ", "ካረጭ", "ሃየት", "ዖፍ", "ዓሳ", "ሑሙም", "ሐርመስ", "ኒሂብ", "ሊሎ", "ሹከን", "ሰገን", "መንተሌ", "ለጋ"]
  },
  {
    id: "dc-nature", icon: "🌍", color: "#6B8E6B",
    name: { en: "Nature & Weather", de: "Natur & Wetter", fr: "Nature & Météo", ar: "طبيعة وطقس" },
    desc: { en: "Sun, rain, mountain…", de: "Sonne, Regen, Berg…", fr: "Soleil, pluie, montagne…", ar: "شمس، مطر، جبل…" },
    keys: ["ጸሓይ", "ወርሕ", "ኮከብ", "ሰማይ", "ምድር", "ማይ", "ዘላም", "ኣሳት", "ነፋስ", "ዓጸይ", "ዓባን", "ደብር", "ላሊ", "ዮም", "በሐረ", "ማሓዝ", "ደመና", "ሐምዳ", "ሖጻ"]
  },
  {
    id: "dc-food", icon: "☕", color: "#8B6B4E",
    name: { en: "Food & Drink", de: "Essen & Trinken", fr: "Nourriture", ar: "طعام وشراب" },
    desc: { en: "Bread, milk, coffee…", de: "Brot, Milch, Kaffee…", fr: "Pain, lait, café…", ar: "خبز، حليب، قهوة…" },
    keys: ["በልዐ", "ሰተ", "ሐሊብ", "እንገራ", "ስጋ", "ዝብደት", "ማዓር", "ጨው", "ቡን", "ሱኳር", "ኣንቆቕሆ", "በርበረ", "ፉል", "ተመር", "ሜስ", "ሐሪጽ", "ሎምን", "ማሸላ"]
  },
  {
    id: "dc-colors", icon: "🎨", color: "#7B6B9E",
    name: { en: "Colors & Descriptions", de: "Farben & Eigenschaften", fr: "Couleurs & Descriptions", ar: "ألوان وأوصاف" },
    desc: { en: "White, big, good…", de: "Weiß, groß, gut…", fr: "Blanc, grand, bon…", ar: "أبيض، كبير، جيد…" },
    keys: ["ሳዕዳ", "ጸሊም", "ቀይሕ", "ኣኽደር", "ዓቢ", "ንኡሽ", "ረይም", "ሃቺር", "ሳኒ", "ኩፉ", "ሓዲስ", "ጋዲም", "ቃሩብ", "ባዙሕ", "ግሩም", "ደጉብ", "ፋዳብ"]
  },
  {
    id: "dc-home", icon: "🏠", color: "#5E8EA8",
    name: { en: "Home & Objects", de: "Haus & Objekte", fr: "Maison & Objets", ar: "بيت وأشياء" },
    desc: { en: "House, door, book…", de: "Haus, Tür, Buch…", fr: "Maison, porte, livre…", ar: "بيت، باب، كتاب…" },
    keys: ["ቤት", "ባብ", "ገባይ", "ስም", "ለባስ", "ሰኪን", "ካታብ", "ሰያፍ", "ወርቅ", "ርምስኮት", "ዓድ", "ኣካን", "ዓርቃይ", "ዋራት/ሹኩለ", "ሳናት", "ግርሸ", "ሃሲን"]
  },
  {
    id: "dc-verbs", icon: "🏃", color: "#5B7E6B",
    name: { en: "Common Verbs", de: "Häufige Verben", fr: "Verbes Courants", ar: "أفعال شائعة" },
    desc: { en: "Go, eat, see, know…", de: "Gehen, essen, sehen…", fr: "Aller, manger, voir…", ar: "ذهب، أكل، رأى…" },
    keys: ["ገሳ", "መጽእ", "ርኤ", "ሰምዐ", "በለ", "ሀበ", "ስካብ", "ኣመረ", "ቀርኤ", "ከትበ", "ተጋሰ", "ዋደ", "ሐለመ", "ሐለነ", "ኀረየ", "ሐርበ", "ሐለበ", "ሐርሰ"]
  },
  {
    id: "dc-pronouns", icon: "🫵", color: "#4E7B8B",
    name: { en: "Pronouns & Words", de: "Pronomen & Wörter", fr: "Pronoms & Mots", ar: "ضمائر وكلمات" },
    desc: { en: "I, you, this, what…", de: "Ich, du, dies, was…", fr: "Je, tu, ce, quoi…", ar: "أنا، أنت، هذا…" },
    keys: ["ኣነ", "ኣንተ", "ኣንቲ", "ሁቱ", "ሁታ", "ሁነ", "ሁቶም", "ሁታን", "ዕሊ", "ዕላ", "ሚ", "መን", "ዎሮ", "መንማ", "ጋሌ", "ሰማ"]
  },
  {
    id: "dc-connect", icon: "🔗", color: "#5E6B8E",
    name: { en: "Connectors", de: "Verbindungswörter", fr: "Connecteurs", ar: "أدوات ربط" },
    desc: { en: "And, but, in, from…", de: "Und, aber, in, von…", fr: "Et, mais, dans, de…", ar: "و، لكن، في، من…" },
    keys: ["ዓት", "ሙን", "ዓብ", "ዓጋሌ", "ሃቆ", "ካምሳሌ", "ዓምባሌ", "ዋ", "ማ", "ዳዓም", "ዲብ", "ዓቢ ሊ", "ሙንሜ", "ናይ"]
  },
  {
    id: "dc-numbers", icon: "🔢", color: "#8E6B5E",
    name: { en: "Numbers", de: "Zahlen", fr: "Nombres", ar: "أرقام" },
    desc: { en: "One to hundred", de: "Eins bis hundert", fr: "Un à cent", ar: "واحد إلى مئة" },
    keys: ["ሓቴ", "ካሌ", "ሰለስ", "ዓርባዕ", "ሓምስ", "ሱስ", "ሰብዓ", "ሳማን", "ቲስዓ", "ዓሱር", "ዕስራ", "ሰላሳ", "ዓርብዓ", "ሓምሳ", "ሱስትሳ", "ምዓት", "ኣዋላይ", "ካላይ", "ሰለሳይ"]
  },
];


// ─── UI TRANSLATIONS ──────────────────────────────────────────────────────────
const UI_TEXT = {
  appTitle: { en: "ልሳን ትግራይት", ar: "ልሳን ትግራይት", fr: "ልሳን ትግራይት", de: "ልሳን ትግራይት" },
  appSubtitle: { en: "Master the Tigre Language", ar: "أتقن لغة التقري", fr: "Maîtrisez la Langue Tigré", de: "Die Tigre-Sprache meistern" },
  navHome: { en: "Home", ar: "الرئيسية", fr: "Accueil", de: "Start" },
  navScript: { en: "Script", ar: "الحروف", fr: "Alphabet", de: "Schrift" },
  navWords: { en: "Words", ar: "الكلمات", fr: "Mots", de: "Wörter" },
  navGrammar: { en: "Grammar", ar: "القواعد", fr: "Grammaire", de: "Grammatik" },
  navPractice: { en: "Practice", ar: "تدريب", fr: "Pratique", de: "Übung" },
  navDict: { en: "Dictionary", ar: "القاموس", fr: "Dictionnaire", de: "Wörterbuch" },
  yourProgress: { en: "Your Progress", ar: "تقدمك", fr: "Votre Progrès", de: "Dein Fortschritt" },
  words: { en: "words", ar: "كلمة", fr: "mots", de: "Wörter" },
  complete: { en: "complete", ar: "مكتمل", fr: "terminé", de: "abgeschlossen" },
  alphabet: { en: "Alphabet", ar: "الأبجدية", fr: "Alphabet", de: "Alphabet" },
  learnScript: { en: "Learn the script", ar: "تعلم الحروف", fr: "Apprendre l'écriture", de: "Schrift lernen" },
  flashcards: { en: "Flashcards", ar: "البطاقات", fr: "Cartes", de: "Lernkarten" },
  studyWords: { en: "Study words", ar: "دراسة الكلمات", fr: "Étudier les mots", de: "Wörter lernen" },
  grammar: { en: "Grammar", ar: "القواعد", fr: "Grammaire", de: "Grammatik" },
  learnRules: { en: "Learn the rules", ar: "تعلم القواعد", fr: "Apprendre les règles", de: "Regeln lernen" },
  practice: { en: "Practice", ar: "تدريب", fr: "Pratique", de: "Übung" },
  testYourself: { en: "Test yourself", ar: "اختبر نفسك", fr: "Testez-vous", de: "Teste dich" },
  dictionary: { en: "Dictionary", ar: "القاموس", fr: "Dictionnaire", de: "Wörterbuch" },
  browseDict: { en: "Browse entries", ar: "تصفح المفردات", fr: "Parcourir les entrées", de: "Einträge durchsuchen" },
  geezScript: { en: "Ge'ez Script", ar: "حروف الجعز", fr: "Écriture Ge'ez", de: "Ge'ez-Schrift" },
  eachConsonant: { en: "Each consonant has 7 vowel forms — tap any row to explore", ar: "لكل حرف 7 أشكال صوتية — اضغط للاستكشاف", fr: "Chaque consonne a 7 formes vocaliques", de: "Jeder Konsonant hat 7 Vokalformen — tippe eine Zeile an" },
  tapToReveal: { en: "tap to reveal Tigre", ar: "اضغط لإظهار الترجمة", fr: "appuyez pour révéler", de: "Tippen zum Aufdecken" },
  score80: { en: "Score 80% to unlock the next level!", ar: "احصل على 80% لفتح المستوى التالي!", fr: "Obtenez 80% pour débloquer!", de: "80% für das nächste Level!" },
  alphabetQuiz: { en: "Alphabet Quiz", ar: "اختبار الأبجدية", fr: "Quiz Alphabet", de: "Alphabet-Quiz" },
  identifyLetters: { en: "Identify letters & romanized forms", ar: "حدد الحروف وأشكالها", fr: "Identifier lettres et translittérations", de: "Buchstaben & Umschrift erkennen" },
  start: { en: "Start", ar: "ابدأ", fr: "Commencer", de: "Starten" },
  retry: { en: "Retry", ar: "إعادة", fr: "Réessayer", de: "Nochmal" },
  levels: { en: "Levels", ar: "المستويات", fr: "Niveaux", de: "Stufen" },
  next: { en: "Next", ar: "التالي", fr: "Suivant", de: "Weiter" },
  correct: { en: "Correct!", ar: "صحيح!", fr: "Correct!", de: "Richtig!" },
  answer: { en: "Answer", ar: "الإجابة", fr: "Réponse", de: "Antwort" },
  whatInTigre: { en: "What is this in Tigre?", ar: "ما هذا بالتقري؟", fr: "Comment dit-on en Tigré?", de: "Wie heißt das auf Tigre?" },
  whatMean: { en: "What does this mean?", ar: "ما معنى هذا؟", fr: "Que signifie ceci?", de: "Was bedeutet das?" },
  typeEnglish: { en: "Type the meaning…", ar: "اكتب المعنى…", fr: "Tapez la signification…", de: "Bedeutung eingeben…" },
  typePlaceholder: { en: "Type the meaning…", ar: "اكتب المعنى…", fr: "Tapez la signification…", de: "Bedeutung eingeben…" },
  whichConsonant: { en: "Which consonant does this letter belong to?", ar: "لأي حرف ينتمي؟", fr: "À quelle consonne appartient cette lettre?", de: "Zu welchem Konsonanten gehört dieser Buchstabe?" },
  whichRomanized: { en: "What is the romanized form?", ar: "ما الشكل اللاتيني؟", fr: "Quelle est la transcription?", de: "Wie lautet die Umschrift?" },
  levelComplete: { en: "Level Complete!", ar: "اكتمل المستوى!", fr: "Niveau Terminé!", de: "Level geschafft!" },
  keepGoing: { en: "Keep Going!", ar: "استمر!", fr: "Continuez!", de: "Weiter so!" },
  correctCount: { en: "correct", ar: "صحيح", fr: "correct", de: "richtig" },
  nextUnlocked: { en: "Next level unlocked!", ar: "تم فتح المستوى التالي!", fr: "Niveau suivant débloqué!", de: "Nächstes Level freigeschaltet!" },
  wordsLearned: { en: "words learned", ar: "كلمة تعلمتها", fr: "mots appris", de: "Wörter gelernt" },
  ofAllWords: { en: "of all words", ar: "من جميع الكلمات", fr: "de tous les mots", de: "aller Wörter" },
  resetProgress: { en: "Reset All Progress", ar: "إعادة تعيين التقدم", fr: "Réinitialiser", de: "Fortschritt zurücksetzen" },
  gramExamples: { en: "Examples", ar: "أمثلة", fr: "Exemples", de: "Beispiele" },
  grammarQuiz: { en: "Grammar Quiz", ar: "اختبار القواعد", fr: "Quiz Grammaire", de: "Grammatik-Quiz" },
  identifyGrammar: { en: "Test your grammar knowledge", ar: "اختبر معرفتك بالقواعد", fr: "Testez vos connaissances", de: "Teste dein Grammatikwissen" },
  searchPlaceholder: { en: "Search Tigre or meaning…", ar: "ابحث في التقري أو المعنى…", fr: "Chercher en Tigré ou traduction…", de: "Suche in Tigre oder Bedeutung…" },
  entries: { en: "entries", ar: "مدخل", fr: "entrées", de: "Einträge" },
  source: { en: "Source: Littmann & Höfner 1962", ar: "المصدر: ليتمان وهوفنر ١٩٦٢", fr: "Source: Littmann & Höfner 1962", de: "Quelle: Littmann & Höfner 1962" },
  back: { en: "Back", ar: "رجوع", fr: "Retour", de: "Zurück" },
  progress: { en: "Progress", ar: "التقدم", fr: "Progrès", de: "Fortschritt" },
  yourJourney: { en: "Your journey", ar: "رحلتك", fr: "Votre parcours", de: "Dein Lernweg" },
  // Gamification
  mascotGreeting: { en: "Hey there, learner! 🦉", ar: "!مرحباً أيها المتعلم 🦉", fr: "Salut, apprenant ! 🦉", de: "Hallo, Lernender! 🦉" },
  mascotTip: { en: "Quick 3-minute lessons every day build lasting memory!", ar: "دروس سريعة ٣ دقائق يومياً تبني ذاكرة قوية!", fr: "Des leçons de 3 min chaque jour renforcent la mémoire !", de: "Kurze 3-Minuten-Lektionen täglich stärken das Gedächtnis!" },
  xpLabel: { en: "XP", ar: "نقاط", fr: "XP", de: "XP" },
  streakLabel: { en: "Day Streak", ar: "أيام متتالية", fr: "Jours consécutifs", de: "Tage-Serie" },
  badgesLabel: { en: "Badges", ar: "شارات", fr: "Badges", de: "Abzeichen" },
  yourBadges: { en: "Your Badges", ar: "شاراتك", fr: "Vos Badges", de: "Deine Abzeichen" },
  badge_first_steps: { en: "First Steps", ar: "أولى الخطوات", fr: "Premiers Pas", de: "Erste Schritte" },
  badge_getting_going: { en: "Getting Going", ar: "بداية جيدة", fr: "Bon Début", de: "Guter Anfang" },
  badge_century: { en: "Century!", ar: "مئوية!", fr: "Centenaire!", de: "Jahrhundert!" },
  badge_scholar: { en: "Scholar", ar: "عالم", fr: "Érudit", de: "Gelehrter" },
  badge_on_fire: { en: "On Fire!", ar: "في الحماس!", fr: "En Feu!", de: "In Fahrt!" },
  badge_unstoppable: { en: "Unstoppable", ar: "لا يوقف", fr: "Inarrêtable", de: "Unaufhaltbar" },
  badge_legendary: { en: "Legendary", ar: "أسطوري", fr: "Légendaire", de: "Legendär" },
  // Dictionary exercises
  dictQuiz: { en: "Dictionary Quiz", ar: "اختبار القاموس", fr: "Quiz Dictionnaire", de: "Wörterbuch-Quiz" },
  dictQuizDesc: { en: "Practice words from the full dictionary", ar: "تدرب على كلمات من القاموس", fr: "Pratiquer les mots du dictionnaire", de: "Wörter aus dem Wörterbuch üben" },
  pickCategory: { en: "Pick a topic to practice", ar: "اختر موضوعاً للتدريب", fr: "Choisissez un sujet", de: "Wähle ein Thema zum Üben" },
  dictWordsCount: { en: "words", ar: "كلمة", fr: "mots", de: "Wörter" },
  matchTheMeaning: { en: "Match the Tigre word", ar: "طابق الكلمة", fr: "Associez le mot Tigré", de: "Ordne das Tigre-Wort zu" },
  backToTopics: { en: "Topics", ar: "المواضيع", fr: "Sujets", de: "Themen" },
  // Feedback
  feedbackTitle: { en: "Feedback", ar: "ملاحظات", fr: "Commentaires", de: "Feedback" },
  feedbackDesc: { en: "Help us improve! Send a suggestion or correction.", ar: "ساعدنا في التحسين! أرسل اقتراحاً أو تصحيحاً.", fr: "Aidez-nous à améliorer ! Envoyez une suggestion ou correction.", de: "Hilf uns zu verbessern! Sende einen Vorschlag oder eine Korrektur." },
  feedbackName: { en: "Your name (optional)", ar: "اسمك (اختياري)", fr: "Votre nom (optionnel)", de: "Dein Name (optional)" },
  feedbackType: { en: "Type", ar: "النوع", fr: "Type", de: "Art" },
  feedbackSuggestion: { en: "Suggestion", ar: "اقتراح", fr: "Suggestion", de: "Vorschlag" },
  feedbackCorrection: { en: "Correction", ar: "تصحيح", fr: "Correction", de: "Korrektur" },
  feedbackWord: { en: "Word (if correction)", ar: "الكلمة (إن وُجدت)", fr: "Mot (si correction)", de: "Wort (bei Korrektur)" },
  feedbackMessage: { en: "Your message", ar: "رسالتك", fr: "Votre message", de: "Deine Nachricht" },
  feedbackSend: { en: "Send Feedback", ar: "إرسال", fr: "Envoyer", de: "Senden" },
  feedbackThank: { en: "Thank you for your feedback!", ar: "شكراً على ملاحظاتك!", fr: "Merci pour vos commentaires !", de: "Danke für dein Feedback!" },
};
