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
 *  Sources: Raz, "Tigre Grammar and Texts" 1983 (primary)
 *           Littmann & Höfner, "Wörterbuch der Tigrê-Sprache" 1962
 *           Beurmann & Merx, "Vocabulary of the Tigre Language" 1868
 * ════════════════════════════════════════════════════════════════
 */

// ─── GE'EZ ALPHABET ──────────────────────────────────────────────
// Each row: consonant letter (c), IPA value (ipa), and 7 vowel forms (g)
// Vowel order: ä  u  i  a  e  ə  o
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


// ─── VOCABULARY LEVELS ───────────────────────────────────────────
// Verified against: Raz 1983 (primary), Littmann & Höfner 1962, Beurmann 1868
const LEVELS = [
  // ── Level 1 ── Greetings & Numbers
  {
    id: 1, name: "Hello! 👋", desc: "Greetings & Numbers", icon: "👋", color: "#E8985E", words: [
      { en: "peace / hello", tg: "ሰላም", tr: "salām", em: "👋" },
      { en: "welcome", tg: "መርሐባ", tr: "märḥaba", em: "🤗" },
      { en: "how are you? (m)", tg: "እንቆሆ ሐሊኻ?", tr: "ʾənkoho ḥalika?", em: "❓" },
      { en: "how are you? (f)", tg: "እንቆሆ ሐሊኺ?", tr: "ʾənkoho ḥaliki?", em: "❓" },
      { en: "I am fine", tg: "ሰኒ ሐሊኮ", tr: "sänni ḥaliko", em: "😊" },
      { en: "thank you", tg: "ሹክራን", tr: "šukrān", em: "🙏" },
      { en: "yes", tg: "ኣይዋ", tr: "aywa", em: "✅" },
      { en: "no", tg: "ላ", tr: "la", em: "❌" },
      { en: "goodbye (m)", tg: "ደሓን ኩን", tr: "däḥan kun", em: "👋" },
      { en: "one", tg: "ሓቴ", tr: "ḥate", em: "1️⃣" },
      { en: "two", tg: "ካሌ", tr: "kəle", em: "2️⃣" },
      { en: "three", tg: "ሰለስ", tr: "salas", em: "3️⃣" },
      { en: "four", tg: "ዓርባዕ", tr: "ʿarbaʿ", em: "4️⃣" },
      { en: "five", tg: "ሓምስ", tr: "ḥams", em: "5️⃣" },
      { en: "six", tg: "ሱስ", tr: "sus", em: "6️⃣" },
      { en: "seven", tg: "ሰብዓ", tr: "sabəʿ", em: "7️⃣" },
      { en: "eight", tg: "ሳማን", tr: "saman", em: "8️⃣" },
      { en: "nine", tg: "ቲስዓ", tr: "tisəʿ", em: "9️⃣" },
      { en: "ten", tg: "ዓሱር", tr: "ʿasur", em: "🔟" },
    ]
  },

  // ── Level 2 ── Family & People
  {
    id: 2, name: "My Family 👨‍👩‍👧", desc: "Family & People", icon: "👨‍👩‍👧", color: "#C47B5E", words: [
      { en: "father", tg: "ኣብ", tr: "ʾab", em: "👨" },
      { en: "mother", tg: "ኣም", tr: "ʾam", em: "👩" },
      { en: "son", tg: "ዋድ", tr: "wad", em: "👦" },
      { en: "daughter", tg: "ወለት", tr: "walat", em: "👧" },
      { en: "brother", tg: "ሑ", tr: "ḥu", em: "👦" },
      { en: "sister", tg: "ሓት", tr: "ḥat", em: "👧" },
      { en: "boy, child (m)", tg: "ሓሰን", tr: "ḥäsän", em: "👶" },
      { en: "girl, child (f)", tg: "ወለት ንኡሽ", tr: "walat nəʿuš", em: "👶" },
      { en: "man", tg: "ኣናስ", tr: "ʾanas", em: "🧑" },
      { en: "woman", tg: "ኣሲት", tr: "ʾassit", em: "👩" },
      { en: "grandfather", tg: "ኣብ ኣቡ", tr: "ʾab ʾabu", em: "👴" },
      { en: "old person", tg: "ኣቡር", tr: "ʾabur", em: "🧓" },
      { en: "people, men", tg: "ሰብ", tr: "sab", em: "👥" },
      { en: "crowd, people", tg: "ዓዳም", tr: "ʿaddam", em: "👥" },
      { en: "individual, person", tg: "ናፋር", tr: "nafar", em: "🧍" },
    ]
  },

  // ── Level 3 ── Parts of the Body
  {
    id: 3, name: "My Body 🫀", desc: "Parts of the body", icon: "🫀", color: "#D4756B", words: [
      { en: "head", tg: "ራእስ", tr: "ra'as", em: "🗣️" },
      { en: "eye", tg: "ዓይን", tr: "ʿayn", em: "👁️" },
      { en: "ear", tg: "ኣዝን", tr: "ʾazn", em: "👂" },
      { en: "mouth", tg: "ኣፍ", tr: "ʾaf", em: "👄" },
      { en: "nose", tg: "ኣናፍ", tr: "ʾanaf", em: "👃" },
      { en: "tongue", tg: "ለሳን", tr: "lässan", em: "👅" },
      { en: "tooth", tg: "ስን", tr: "sən", em: "🦷" },
      { en: "hand", tg: "እደ", tr: "ʾəde", em: "✋" },
      { en: "foot, leg", tg: "ዓገር", tr: "ʾagar", em: "🦶" },
      { en: "heart", tg: "ልብ", tr: "ləb", em: "❤️" },
      { en: "belly, stomach", tg: "ከርስ", tr: "kärs", em: "🫄" },
      { en: "back", tg: "ድሕር", tr: "dəḥr", em: "🔙" },
      { en: "blood", tg: "ደም", tr: "dam", em: "🩸" },
      { en: "bone", tg: "ዓጽም", tr: "ʿaṣm", em: "🦴" },
      { en: "skin", tg: "ጊልድ", tr: "gəld", em: "🤚" },
      { en: "forehead", tg: "ብሶት", tr: "bəsot", em: "🤔" },
    ]
  },

  // ── Level 4 ── Animals
  {
    id: 4, name: "Animals 🐪", desc: "Creatures big & small", icon: "🐪", color: "#A67B5B", words: [
      { en: "cow", tg: "ዋዓት", tr: "wa'at", em: "🐄" },
      { en: "camel", tg: "ገመል", tr: "gamal", em: "🐪" },
      { en: "horse", tg: "ፈረስ", tr: "faras", em: "🐴" },
      { en: "donkey", tg: "ኣደግ", tr: "adag", em: "🫏" },
      { en: "dog", tg: "ከልብ", tr: "kelb", em: "🐕" },
      { en: "cat", tg: "ድሞ", tr: "dimmo", em: "🐈" },
      { en: "sheep", tg: "ባግዕ", tr: "baggəʿ", em: "🐑" },
      { en: "goat (f)", tg: "ጣሊት", tr: "talit", em: "🐐" },
      { en: "chicken, hen", tg: "ድርሆ", tr: "dirho", em: "🐔" },
      { en: "monkey", tg: "ሃበይ", tr: "habay", em: "🐒" },
      { en: "mouse", tg: "ዓንሻይ", tr: "ʿansay", em: "🐁" },
      { en: "snake", tg: "ኣርዌ", tr: "ʾarwe", em: "🐍" },
      { en: "hyena", tg: "ካረጭ", tr: "karäč", em: "🦊" },
      { en: "lion", tg: "ሃየት", tr: "hayat", em: "🦁" },
      { en: "bird", tg: "ዖፍ", tr: "ʿof", em: "🐦" },
      { en: "fish", tg: "ዓሳ", tr: "ʿasa", em: "🐟" },
    ]
  },

  // ── Level 5 ── Nature
  {
    id: 5, name: "Nature 🌍", desc: "Sky, earth & weather", icon: "🌍", color: "#6B8E6B", words: [
      { en: "sun", tg: "ጸሓይ", tr: "ṣəḥay", em: "☀️" },
      { en: "moon", tg: "ወርሕ", tr: "wärḥ", em: "🌙" },
      { en: "star", tg: "ኮከብ", tr: "kokab", em: "⭐" },
      { en: "sky", tg: "ሰማይ", tr: "sämay", em: "🌤️" },
      { en: "earth, land", tg: "ምድር", tr: "mədər", em: "🌍" },
      { en: "water", tg: "ማይ", tr: "may", em: "💧" },
      { en: "rain", tg: "ዘላም", tr: "zalam", em: "🌧️" },
      { en: "fire", tg: "ኣሳት", tr: "ʾəsat", em: "🔥" },
      { en: "wind", tg: "ነፋስ", tr: "näfas", em: "💨" },
      { en: "tree, wood", tg: "ዓጸይ", tr: "ʿacay", em: "🌳" },
      { en: "stone, rock", tg: "ዓባን", tr: "ʿabban", em: "🪨" },
      { en: "mountain", tg: "ደብር", tr: "dabər", em: "⛰️" },
      { en: "night", tg: "ላሊ", tr: "lali", em: "🌙" },
      { en: "day, daytime", tg: "ዮም", tr: "yom", em: "🌞" },
      { en: "sea", tg: "ባሕር", tr: "baḥər", em: "🌊" },
      { en: "river", tg: "ማሓዝ", tr: "mahaz", em: "🏞️" },
    ]
  },

  // ── Level 6 ── Food & Drink
  {
    id: 6, name: "Yummy! ☕", desc: "Food & drink", icon: "☕", color: "#8B6B4E", words: [
      { en: "to eat (food)", tg: "በልዐ", tr: "bal'a", em: "🍽️" },
      { en: "milk", tg: "ሐሊብ", tr: "ḥalib", em: "🥛" },
      { en: "bread", tg: "እንገራ", tr: "ʾəngära", em: "🍞" },
      { en: "meat, flesh", tg: "ስጋ", tr: "səga", em: "🥩" },
      { en: "butter", tg: "ዝብደት", tr: "zibdät", em: "🧈" },
      { en: "honey", tg: "ማዓር", tr: "maʿar", em: "🍯" },
      { en: "salt", tg: "ጨው", tr: "čäw", em: "🧂" },
      { en: "coffee", tg: "ቡን", tr: "bun", em: "☕" },
      { en: "sugar", tg: "ሱኳር", tr: "sukkar", em: "🍬" },
      { en: "egg", tg: "ኣንቆቕሆ", tr: "anqoqho", em: "🥚" },
      { en: "pepper", tg: "በርበረ", tr: "bärbäre", em: "🌶️" },
      { en: "bean", tg: "ፉል", tr: "ful", em: "🫘" },
      { en: "leavened bread", tg: "ሕሙስ", tr: "ḥəmus", em: "🫓" },
      { en: "dates (dry)", tg: "ተመር", tr: "tämär", em: "🌴" },
    ]
  },

  // ── Level 7 ── Colors & Descriptions
  {
    id: 7, name: "Colors 🎨", desc: "Colors & descriptions", icon: "🎨", color: "#7B6B9E", words: [
      { en: "white", tg: "ሳዕዳ", tr: "saʿda", em: "⬜" },
      { en: "black", tg: "ጸሊም", tr: "ṣəlim", em: "⬛" },
      { en: "red", tg: "ቀይሕ", tr: "qayəḥ", em: "🟥" },
      { en: "green", tg: "ኣኽደር", tr: "ʾaxdär", em: "🟩" },
      { en: "big, large", tg: "ዓቢ", tr: "ʿabi", em: "📐" },
      { en: "small, little", tg: "ንኡሽ", tr: "nəʿuš", em: "🤏" },
      { en: "tall, long", tg: "ረይም", tr: "räyəm", em: "📏" },
      { en: "short", tg: "ሃቺር", tr: "hačir", em: "📏" },
      { en: "good", tg: "ሳኒ", tr: "sanni", em: "👍" },
      { en: "bad", tg: "ኩፉ", tr: "kufu", em: "👎" },
      { en: "new", tg: "ሓዲስ", tr: "haddis", em: "✨" },
      { en: "old (aged)", tg: "ቃዳም", tr: "qadam", em: "🕰️" },
      { en: "near", tg: "ቃሩብ", tr: "qarub", em: "📍" },
      { en: "many, much", tg: "ባዙሕ", tr: "bazuḥ", em: "📊" },
      { en: "pretty, handsome", tg: "ግሩም", tr: "gərum", em: "🌸" },
      { en: "strong", tg: "ደጉብ", tr: "dagub", em: "💪" },
      { en: "brave", tg: "ፋዳብ", tr: "fadab", em: "🦁" },
    ]
  },

  // ── Level 8 ── Things & Places
  {
    id: 8, name: "My World 🏠", desc: "Things & places", icon: "🏠", color: "#5E8EA8", words: [
      { en: "house", tg: "ቤት", tr: "bet", em: "🏠" },
      { en: "door, gate", tg: "ባብ", tr: "bab", em: "🚪" },
      { en: "road, way", tg: "ገባይ", tr: "gabay", em: "🛣️" },
      { en: "name", tg: "ስም", tr: "səm", em: "📛" },
      { en: "clothes", tg: "ለባስ", tr: "läbas", em: "👕" },
      { en: "knife", tg: "ሰኪን", tr: "säkin", em: "🔪" },
      { en: "book", tg: "ካታብ", tr: "katab", em: "📖" },
      { en: "sword", tg: "ሰያፍ", tr: "sayaf", em: "⚔️" },
      { en: "gold", tg: "ወርቅ", tr: "warq", em: "🥇" },
      { en: "window", tg: "ርምስኮት", tr: "rəmskot", em: "🪟" },
      { en: "village, tribe", tg: "ዓድ", tr: "ʿad", em: "🏘️" },
      { en: "place", tg: "ኣካን", tr: "ʾakan", em: "📍" },
      { en: "bed", tg: "ዓርቃይ", tr: "ʿarqay", em: "🛏️" },
      { en: "work", tg: "ዋራት", tr: "warat", em: "⚒️" },
      { en: "year", tg: "ዓማት", tr: "ʿamat", em: "📅" },
      { en: "money", tg: "ገንዘብ", tr: "gänzäb", em: "💰" },
    ]
  },

  // ── Level 9 ── Common Verbs
  {
    id: 9, name: "Let's Do! 🏃", desc: "Common verbs", icon: "🏃", color: "#5B7E6B", words: [
      { en: "to eat", tg: "በልዐ", tr: "bal'a", em: "🍽️" },
      { en: "to drink", tg: "ሰተ", tr: "sete", em: "🥤" },
      { en: "to go", tg: "ገሳ", tr: "gesa", em: "🚶" },
      { en: "to come", tg: "መጽእ", tr: "mäṣʾa", em: "🏃" },
      { en: "to see", tg: "ርኤ", tr: "ra'a", em: "👀" },
      { en: "to hear", tg: "ሰምዐ", tr: "sam'a", em: "👂" },
      { en: "to say, speak", tg: "በለ", tr: "bela", em: "🗣️" },
      { en: "to give", tg: "ሀበ", tr: "haba", em: "🤲" },
      { en: "to sleep", tg: "ስካብ", tr: "skab", em: "😴" },
      { en: "to know", tg: "ኣመረ", tr: "amara", em: "🧠" },
      { en: "to read", tg: "ቀርኤ", tr: "qar'a", em: "📖" },
      { en: "to write", tg: "ከትበ", tr: "katba", em: "✍️" },
      { en: "to kill", tg: "ቀትለ", tr: "qatla", em: "⚔️" },
      { en: "to die", tg: "ሞተ", tr: "mota", em: "💀" },
      { en: "to sit (down)", tg: "ተጋሰ", tr: "tägassa", em: "🪑" },
      { en: "to do, make", tg: "ዋደ", tr: "wada", em: "🔨" },
    ]
  },

  // ── Level 10 ── Useful Phrases
  {
    id: 10, name: "Talk! 💬", desc: "Useful phrases", icon: "💬", color: "#6B5E8E", words: [
      { en: "What is your name?", tg: "መን ስምካ?", tr: "man samka?", em: "❓" },
      { en: "My name is…", tg: "ስምየ…", tr: "sämye…", em: "📛" },
      { en: "I know", tg: "ኣምር", tr: "ʾamər", em: "✅" },
      { en: "I don't know", tg: "ኢ ኣምር", tr: "ʾi-ʾamər", em: "❌" },
      { en: "please (m)", tg: "በጃኻ", tr: "bäjaka", em: "🙏" },
      { en: "good morning", tg: "ደሓንዶ ሐዲርኻ?", tr: "däḥando ḥadirka?", em: "🌅" },
      { en: "come here!", tg: "ናዓ", tr: "naʿa", em: "👈" },
      { en: "I am hungry", tg: "ኣነ ግዩዕ", tr: "ʾana gəyuʿ", em: "😋" },
      { en: "water please", tg: "ማይ በጃኻ", tr: "may bäjaka", em: "💧" },
      { en: "how much?", tg: "ካም?", tr: "kam?", em: "💰" },
      { en: "where?", tg: "ኣታያ?", tr: "ʾattaya?", em: "📍" },
      { en: "today", tg: "ዮም", tr: "yom", em: "📅" },
      { en: "tomorrow", tg: "ገዘም", tr: "gäzäm", em: "📆" },
      { en: "there is / exists", tg: "ሃላ", tr: "halla", em: "✔️" },
      { en: "there is not", tg: "ኣልቡ", tr: "ʾalabu", em: "✖️" },
      { en: "goodbye (peace)", tg: "ደሓን ኩኒ", tr: "däḥan kuni", em: "🤲" },
    ]
  },

];


// ─── TIGRE GRAMMAR (Based on Shlomo Raz, "Tigre Grammar and Texts", 1983) ────
const GRAMMAR = [

  // ── 1. Personal Pronouns (Raz §4.1) ──
  {
    id: "pronouns", icon: "👤", color: "#E8541A",
    title: { en: "Personal Pronouns", ar: "الضمائر الشخصية", fr: "Pronoms Personnels" },
    desc: { en: "I, you, he, she, we, they", ar: "أنا، أنت، هو، هي، نحن، هم", fr: "Je, tu, il, elle, nous, ils" },
    sections: [
      {
        heading: { en: "Singular", ar: "المفرد", fr: "Singulier" },
        items: [
          { label: { en: "I (1st common)", ar: "أنا", fr: "je" }, tg: "ኣነ", tr: "ʾana" },
          { label: { en: "you (2nd m.)", ar: "أنتَ", fr: "tu (m.)" }, tg: "ኣንተ", tr: "ʾənta" },
          { label: { en: "you (2nd f.)", ar: "أنتِ", fr: "tu (f.)" }, tg: "ኣንቲ", tr: "ʾənti" },
          { label: { en: "he (3rd m.)", ar: "هو", fr: "il" }, tg: "ሁቱ", tr: "hətu" },
          { label: { en: "she (3rd f.)", ar: "هي", fr: "elle" }, tg: "ሁታ", tr: "həta" },
        ]
      },
      {
        heading: { en: "Plural", ar: "الجمع", fr: "Pluriel" },
        items: [
          { label: { en: "we (1st common)", ar: "نحن", fr: "nous" }, tg: "ሁነ", tr: "həna" },
          { label: { en: "you (2nd m. pl.)", ar: "أنتم", fr: "vous (m.)" }, tg: "ኣንቱም", tr: "ʾəntum" },
          { label: { en: "you (2nd f. pl.)", ar: "أنتن", fr: "vous (f.)" }, tg: "ኣንታን", tr: "ʾəntan" },
          { label: { en: "they (3rd m.)", ar: "هم", fr: "ils" }, tg: "ሁቶም", tr: "hətom" },
          { label: { en: "they (3rd f.)", ar: "هن", fr: "elles" }, tg: "ሁታን", tr: "hətan" },
        ]
      },
      {
        heading: { en: "Notes", ar: "ملاحظات", fr: "Notes" },
        items: [
          { label: { en: "2nd pl. = polite address form", ar: "الجمع للمخاطب المحترم", fr: "Le pluriel est la forme de politesse" }, tg: "ኣንቱም / ሁቶም", tr: "ʾəntum / hətom" },
          { label: { en: "Copula: 1st & 2nd persons use the pronoun itself", ar: "الرابط: شخص ١ و٢ = الضمير نفسه", fr: "Copule: 1e et 2e pers. = pronom seul" }, tg: "ኣነ — ሁቱ", tr: "ʾana — hətu" },
        ]
      },
    ]
  },

  // ── 2. Pronominal Suffixes — Nouns & Particles (Raz §4.2) ──
  {
    id: "pron-noun", icon: "🏠", color: "#1A7A4A",
    title: { en: "Possessive Suffixes (Nouns)", ar: "ضمائر الملكية", fr: "Suffixes Possessifs" },
    desc: { en: "my, your, his … attached to nouns", ar: "ـي، ـك، ـه … تُلحق بالأسماء", fr: "mon, ton, son … attachés aux noms" },
    sections: [
      {
        heading: { en: "Suffix table", ar: "جدول اللواحق", fr: "Tableau des suffixes" },
        items: [
          { label: { en: "my (1st sg.)", ar: "ـي", fr: "-ye/-ya" }, tg: "ـየ", tr: "-ye (after C) / -ya (after V)" },
          { label: { en: "your (2nd m. sg.)", ar: "ـكَ", fr: "-ka" }, tg: "ـካ", tr: "-ka" },
          { label: { en: "your (2nd f. sg.)", ar: "ـكِ", fr: "-ki" }, tg: "ـኪ", tr: "-ki" },
          { label: { en: "his (3rd m. sg.)", ar: "ـه", fr: "-u/-hu" }, tg: "ـኡ / ሁ", tr: "-u / -hu" },
          { label: { en: "her (3rd f. sg.)", ar: "ـها", fr: "-a/-ha" }, tg: "ـኣ / ሃ", tr: "-a / -ha" },
          { label: { en: "our (1st pl.)", ar: "ـنا", fr: "-na" }, tg: "ـና", tr: "-na" },
          { label: { en: "your (2nd m. pl.)", ar: "ـكم", fr: "-kum" }, tg: "ـኩም", tr: "-kum" },
          { label: { en: "your (2nd f. pl.)", ar: "ـكن", fr: "-kən" }, tg: "ـከን", tr: "-kən" },
          { label: { en: "their (3rd m.)", ar: "ـهم", fr: "-om/-hom" }, tg: "ـኦም / ሆም", tr: "-om / -hom" },
          { label: { en: "their (3rd f.)", ar: "ـهن", fr: "-an/-han" }, tg: "ـኣን / ሃን", tr: "-an / -han" },
        ]
      },
      {
        heading: { en: "Example: bet 'house'", ar: "مثال: بيت", fr: "Exemple: bet 'maison'" },
        items: [
          { label: { en: "my house", ar: "بيتي", fr: "ma maison" }, tg: "ቤትየ", tr: "betye" },
          { label: { en: "your (m.) house", ar: "بيتك", fr: "ta maison" }, tg: "ቤትካ", tr: "betka" },
          { label: { en: "his house", ar: "بيته", fr: "sa maison" }, tg: "ቤቱ", tr: "betu" },
          { label: { en: "her house", ar: "بيتها", fr: "sa maison" }, tg: "ቤትሃ", tr: "betha" },
          { label: { en: "our house", ar: "بيتنا", fr: "notre maison" }, tg: "ቤትና", tr: "betna" },
        ]
      },
      {
        heading: { en: "Key phonological rules (Raz §4.2)", ar: "قواعد صوتية مهمة", fr: "Règles phonologiques" },
        items: [
          { label: { en: "Nouns ending in dental/alveolar C: palatalize before -ye (1st sg.)", ar: "انقلاب الحروف السنية قبل ياء المتكلم", fr: "Palatalisation avant -ye" }, tg: "ዓድ → ዓጌ 'my village'", tr: "ʿad → ʿagge" },
          { label: { en: "Nouns ending in vowel: add -h- before vowel-initial suffix", ar: "إضافة ـه ـ بعد اسم ينتهي بصائت", fr: "Ajout de -h- après voyelle finale" }, tg: "ሁ 'brother' → ሁሁ 'his brother'", tr: "hu → huhu" },
          { label: { en: "CVC monosyllables: final C geminated before 3rd person suffix", ar: "مضاعفة الحرف الأخير للمقطع الأحادي", fr: "Géminée du C final des monosyllabes" }, tg: "ዓድ → ዓዱ 'his village'", tr: "ʿad → ʿaddu" },
        ]
      },
    ]
  },

  // ── 3. Pronominal Suffixes — Verbs (Raz §4.3) ──
  {
    id: "pron-verb", icon: "🔗", color: "#2E86AB",
    title: { en: "Object Suffixes (Verbs)", ar: "ضمائر المفعول به", fr: "Suffixes d'objet (Verbes)" },
    desc: { en: "me, you, him, her, us, them — attached to verbs", ar: "ـني، ـك، ـه … تُلحق بالأفعال", fr: "me, te, le … attachés aux verbes" },
    sections: [
      {
        heading: { en: "Suffix table (Type A verbs)", ar: "جدول اللواحق للأفعال", fr: "Tableau suffixes verbaux" },
        items: [
          { label: { en: "me (1st sg.)", ar: "ـني", fr: "me" }, tg: "ـኒ / ኒ", tr: "-ni / -nni" },
          { label: { en: "you (2nd m. sg.)", ar: "ـكَ", fr: "te (m.)" }, tg: "ـካ / ካ", tr: "-ka / -kka" },
          { label: { en: "you (2nd f. sg.)", ar: "ـكِ", fr: "te (f.)" }, tg: "ـኪ / ኪ", tr: "-ki / -kki" },
          { label: { en: "him (3rd m. sg.)", ar: "ـه", fr: "le" }, tg: "ـኦ / ዎ / ዮ / ሁ / ዩ", tr: "-o/-wo/-yo/-hu/-yu" },
          { label: { en: "her (3rd f. sg.)", ar: "ـها", fr: "la" }, tg: "ـኣ / ዋ / ያ / ሃ", tr: "-a/-wa/-ya/-ha" },
          { label: { en: "us (1st pl.)", ar: "ـنا", fr: "nous" }, tg: "ـና / ና", tr: "-na / -nna" },
          { label: { en: "you (2nd m. pl.)", ar: "ـكم", fr: "vous (m.)" }, tg: "ـኩም / ኩም", tr: "-kum / -kkum" },
          { label: { en: "you (2nd f. pl.)", ar: "ـكن", fr: "vous (f.)" }, tg: "ـከን / ከን", tr: "-kən / -kkən" },
          { label: { en: "them (3rd m.)", ar: "ـهم", fr: "les (m.)" }, tg: "ـኦም / ዎም / ዮም / ሆም", tr: "-om/-wom/-yom/-hom" },
          { label: { en: "them (3rd f.)", ar: "ـهن", fr: "les (f.)" }, tg: "ـኣን / ዋን / ያን / ሃን", tr: "-an/-wan/-yan/-han" },
        ]
      },
      {
        heading: { en: "Examples", ar: "أمثلة", fr: "Exemples" },
        items: [
          { label: { en: "he overpowered me", ar: "غلبني", fr: "il m'a vaincu" }, tg: "አውዳቀኒ", tr: "ʾawdaqenni" },
          { label: { en: "give (m. pl.) her", ar: "أعطوها", fr: "donnez-la lui" }, tg: "ሃቡሃ", tr: "habwha" },
          { label: { en: "they (m.) met them (m.)", ar: "لقوهم", fr: "ils les ont rencontrés" }, tg: "ተቀበቱዎም", tr: "təqabbatuwom" },
        ]
      },
    ]
  },

  // ── 4. Special Pronouns (Raz §4.4–4.6) ──
  {
    id: "special-pron", icon: "🔄", color: "#8B4513",
    title: { en: "Reflexive, Reciprocal & Possessive", ar: "الضمائر الانعكاسية والتبادلية والملكية", fr: "Réfléchi, Réciproque & Possessif" },
    desc: { en: "oneself, each other, own/of", ar: "نفسه، بعضهم البعض، ملكية", fr: "soi-même, l'un l'autre, appartenance" },
    sections: [
      {
        heading: { en: "Reflexive: nos / nafs / raʾas (§4.4)", ar: "الضمير الانعكاسي", fr: "Réfléchi" },
        items: [
          { label: { en: "self, oneself", ar: "نفس", fr: "soi-même" }, tg: "ኖስ", tr: "nos" },
          { label: { en: "soul (literary)", ar: "نفس (أدبي)", fr: "âme (littéraire)" }, tg: "ናፍስ", tr: "nafs" },
          { label: { en: "head → himself/herself", ar: "رأس → نفسه / نفسها", fr: "tête → lui-même" }, tg: "ራዓስ", tr: "raʾas" },
          { label: { en: "she hanged herself", ar: "شنقت نفسها", fr: "elle s'est pendue" }, tg: "ተሻናቃት", tr: "təšannaqat" },
        ]
      },
      {
        heading: { en: "Reciprocal: həd / nosnos (§4.5)", ar: "الضمير التبادلي", fr: "Réciproque" },
        items: [
          { label: { en: "each other (two)", ar: "بعضهم (اثنان)", fr: "l'un l'autre (deux)" }, tg: "ሁድ", tr: "həd" },
          { label: { en: "one another (many)", ar: "بعضهم (جمع)", fr: "les uns les autres (pl.)" }, tg: "ኖስኖስ", tr: "nosnos" },
          { label: { en: "they fought each other", ar: "تقاتلوا", fr: "ils se sont battus" }, tg: "ኣደሁ ተዓለቀው", tr: "ʾad həd taʿalagaw" },
        ]
      },
      {
        heading: { en: "Possessive Particle: nāy (§4.6)", ar: "أداة الملكية نَي", fr: "Particule possessive nāy" },
        items: [
          { label: { en: "of, from (possession)", ar: "لـ / ملك", fr: "de, appartenant à" }, tg: "ናይ", tr: "nāy" },
          { label: { en: "Is this house yours?", ar: "هل هذا البيت لك؟", fr: "Est-ce ta maison?" }, tg: "ዕሊ ቤት ናይካ ቱ?", tr: "ʾəlli bet nāyka tu?" },
          { label: { en: "It is not mine", ar: "إنها ليست لي", fr: "ce n'est pas le mien" }, tg: "ናዬ ኢኮን", tr: "nāye ʾikon" },
        ]
      },
    ]
  },

  // ── 5. Interrogative & Indefinite Pronouns (Raz §4.7, 4.9) ──
  {
    id: "questions", icon: "❓", color: "#1B5EA8",
    title: { en: "Interrogative & Indefinite", ar: "الاستفهام والإبهام", fr: "Interrogatifs & Indéfinis" },
    desc: { en: "who, what, which, someone, nobody", ar: "من، ماذا، أي، أحد، لا أحد", fr: "qui, quoi, quel, quelqu'un, personne" },
    sections: [
      {
        heading: { en: "Interrogative Pronouns (§4.7)", ar: "ضمائر الاستفهام", fr: "Pronoms interrogatifs" },
        items: [
          { label: { en: "what? (thing)", ar: "ماذا؟", fr: "quoi?" }, tg: "ሚ", tr: "mi" },
          { label: { en: "who? whose? (person)", ar: "من؟", fr: "qui?" }, tg: "መን", tr: "man" },
          { label: { en: "which? what sort? (m.)", ar: "أي؟", fr: "quel?" }, tg: "ኣዪ", tr: "ʾayi" },
          { label: { en: "which? (f.)", ar: "أية؟", fr: "quelle?" }, tg: "ኣያ", tr: "ʾaya" },
          { label: { en: "which? (m. pl.)", ar: "أيّ؟ (جمع م.)", fr: "quels?" }, tg: "ኣዮም", tr: "ʾayom" },
          { label: { en: "which? (f. pl.)", ar: "أيّ؟ (جمع م.)", fr: "quelles?" }, tg: "ኣያን", tr: "ʾayan" },
          { label: { en: "what is your name?", ar: "ما اسمك؟", fr: "comment t'appelles-tu?" }, tg: "መን ሰምካ?", tr: "man samka?" },
        ]
      },
      {
        heading: { en: "Indefinite Pronouns (§4.9)", ar: "ضمائر الإبهام", fr: "Pronoms indéfinis" },
        items: [
          { label: { en: "someone, a person (m.)", ar: "شخص ما (م.)", fr: "quelqu'un (m.)" }, tg: "ዎሮ", tr: "woro" },
          { label: { en: "someone (f.)", ar: "شخص ما (م.)", fr: "quelqu'un (f.)" }, tg: "ሃቴ", tr: "hatte" },
          { label: { en: "no one, nobody", ar: "لا أحد", fr: "personne" }, tg: "መንማ", tr: "manma" },
          { label: { en: "something, some", ar: "شيء ما", fr: "quelque chose" }, tg: "ጋሌ", tr: "gale" },
          { label: { en: "whoever, whatever", ar: "مهما / مَن كان", fr: "quiconque" }, tg: "ዋዳ ሻ ልቅባ", tr: "laga·a ləgbaʾ" },
          { label: { en: "such and such (persons)", ar: "فلان", fr: "un tel" }, tg: "ኣጋሌ", tr: "ʾagale" },
          { label: { en: "such and such (things)", ar: "فلان الشيء", fr: "tel ou tel" }, tg: "ፉላን", tr: "fulan" },
          { label: { en: "nothing (negative)", ar: "لا شيء", fr: "rien (négatif)" }, tg: "ሰማ", tr: "sema" },
        ]
      },
    ]
  },

  // ── 6. Demonstratives (Raz §4.10) ──
  {
    id: "demonstratives", icon: "👆", color: "#7B5CE7",
    title: { en: "Demonstratives", ar: "أسماء الإشارة", fr: "Démonstratifs" },
    desc: { en: "this, that, these, those — near and distant", ar: "هذا وذلك قريب وبعيد", fr: "ce/cet, ce…-là — proche et lointain" },
    sections: [
      {
        heading: { en: "Near objects (this/these)", ar: "للقريب", fr: "Objets proches" },
        items: [
          { label: { en: "this (m. sg.)", ar: "هذا", fr: "ce (m.)" }, tg: "ዕሊ", tr: "ʾəlli" },
          { label: { en: "this (f. sg.)", ar: "هذه", fr: "cette (f.)" }, tg: "ዕላ", tr: "ʾəlla" },
          { label: { en: "these (m. pl.)", ar: "هؤلاء (م.)", fr: "ces (m.)" }, tg: "ዕሎም", tr: "ʾəllom" },
          { label: { en: "these (f. pl.)", ar: "هؤلاء (م.)", fr: "ces (f.)" }, tg: "ዕላን", tr: "ʾəllan" },
        ]
      },
      {
        heading: { en: "Distant / absent objects (that/those)", ar: "للبعيد", fr: "Objets lointains" },
        items: [
          { label: { en: "that (m. sg.)", ar: "ذلك", fr: "celui-là" }, tg: "ላሃይ / ሎሃይ / ሌሃይ", tr: "lahay / lohay / lehay" },
          { label: { en: "that (f. sg.)", ar: "تلك", fr: "celle-là" }, tg: "ላሃ / ሎሃ / ሌሃ", tr: "laha / loha / leha" },
          { label: { en: "those (m. pl.)", ar: "أولئك (م.)", fr: "ceux-là" }, tg: "ላሆም / ሎሆም / ሌሆም", tr: "lahom / lohom / lehom" },
          { label: { en: "those (f. pl.)", ar: "أولئك (م.)", fr: "celles-là" }, tg: "ላሃን / ሎሃን / ሌሃን", tr: "lahan / lohan / lehan" },
        ]
      },
      {
        heading: { en: "Word order", ar: "ترتيب الكلمات", fr: "Ordre des mots" },
        items: [
          { label: { en: "Near: demonstrative PRECEDES the noun", ar: "القريب: اسم الإشارة قبل الاسم", fr: "Proche: démonstratif AVANT le nom" }, tg: "ዕሊ ቤት 'this house'", tr: "ʾəlli bet" },
          { label: { en: "Distant: noun PRECEDES the demonstrative", ar: "البعيد: الاسم قبل اسم الإشارة", fr: "Lointain: nom AVANT le démonstratif" }, tg: "ቤት ላሃይ 'that house'", tr: "bet lahay" },
        ]
      },
    ]
  },

  // ── 7. The Definite Article la (Raz §3.8) ──
  {
    id: "def-article", icon: "📌", color: "#C0392B",
    title: { en: "The Definite Article la", ar: "أداة التعريف لَ", fr: "L'Article Défini la" },
    desc: { en: "The invariable particle la marks definiteness", ar: "الأداة الثابتة لَ تدل على التعريف", fr: "La particule invariable la marque le défini" },
    sections: [
      {
        heading: { en: "Form & Use", ar: "الشكل والاستخدام", fr: "Forme et usage" },
        items: [
          { label: { en: "la is invariable (no gender/number change)", ar: "لَ لا يتغيّر", fr: "la est invariable" }, tg: "ላ", tr: "la" },
          { label: { en: "Absence of la may signal indefiniteness", ar: "غياب لَ قد يدل على التنكير", fr: "L'absence de la peut indiquer l'indéfini" }, tg: "ቤት 'a house' ← ዕሊ ቤት 'this house'", tr: "bet / la-bet" },
          { label: { en: "la is also the relative pronoun (§4.8)", ar: "لَ تُستخدم أيضاً للوصل", fr: "la sert aussi de pronom relatif" }, tg: "ላ ቀቴለ 'who killed'", tr: "la qatela" },
        ]
      },
      {
        heading: { en: "Placement rules", ar: "قواعد الموضع", fr: "Règles de placement" },
        items: [
          { label: { en: "la precedes the entire noun phrase (qualified noun first)", ar: "تسبق الاسم المضاف إليه", fr: "la précède tout le syntagme nominal" }, tg: "ላቀዳም ዓናስ 'the old man'", tr: "lagəndab ʾanas" },
          { label: { en: "Proper nouns generally take no article", ar: "الأعلام لا تأخذ الأداة عادة", fr: "Les noms propres n'ont pas d'article" }, tg: "ዓስማርሰ / ኤሬ ትራ", tr: "ʾAsmara / ʾEritrea" },
          { label: { en: "With pronominal suffixes la is prefixed to the noun", ar: "مع الضمائر المتصلة تُضاف لَ للاسم", fr: "Avec suffixes pronominaux la se préfixe" }, tg: "ላቸቼ 'my letter'", tr: "lawaraqačče" },
        ]
      },
    ]
  },

  // ── 8. Noun Gender (Raz §3.1) ──
  {
    id: "gender", icon: "⚥", color: "#9B59B6",
    title: { en: "Noun Gender", ar: "جنس الاسم", fr: "Genre des Noms" },
    desc: { en: "Masculine and feminine; animate vs. inanimate", ar: "المذكر والمؤنث؛ العاقل وغير العاقل", fr: "Masculin et féminin; animé et inanimé" },
    sections: [
      {
        heading: { en: "General Rules (§3.1)", ar: "القواعد العامة", fr: "Règles générales" },
        items: [
          { label: { en: "Gender is lexically stated for singular nouns", ar: "الجنس يُحدد في المفرد معجمياً", fr: "Le genre est lexical au singulier" }, tg: "ካታብ (m.) / ዋንቻ (f.)", tr: "katāb / wānča" },
          { label: { en: "Animate nouns: plural usually has plural concord + same gender as singular", ar: "العاقل: الجمع يطابق المفرد جنساً", fr: "Animé: le pluriel concorde au même genre" }, tg: "ዓሲት (f. sg.) → ዕሊ ዓሲት (f. sg. concord)", tr: "ʾassit → animate plural" },
          { label: { en: "Inanimate nouns: plural has masculine singular concord", ar: "غير العاقل: الجمع يطابق المفرد المذكر", fr: "Inanimé: le pluriel concorde au m. sg." }, tg: "ዕሊ ኣቀርባት (m. sg. concord)", tr: "inanimate concord" },
        ]
      },
      {
        heading: { en: "Masculine examples (§3.1a)", ar: "أمثلة المذكر", fr: "Exemples masculins" },
        items: [
          { label: { en: "book", ar: "كتاب", fr: "livre" }, tg: "ካታብ", tr: "katāb" },
          { label: { en: "brain", ar: "دماغ", fr: "cerveau" }, tg: "ሃንጋሌ", tr: "hangal" },
          { label: { en: "hammer", ar: "مطرقة", fr: "marteau" }, tg: "ማዶሻ", tr: "madosa" },
          { label: { en: "man", ar: "إنسان", fr: "homme" }, tg: "ኣናስ", tr: "ʾanas" },
          { label: { en: "son", ar: "ابن", fr: "fils" }, tg: "ዋድ", tr: "wad" },
        ]
      },
      {
        heading: { en: "Feminine examples (§3.1a)", ar: "أمثلة المؤنث", fr: "Exemples féminins" },
        items: [
          { label: { en: "bracelet", ar: "سوار", fr: "bracelet" }, tg: "ዋኒቻ", tr: "wānča" },
          { label: { en: "road", ar: "طريق", fr: "route" }, tg: "ጋባይ", tr: "gabay" },
          { label: { en: "time", ar: "وقت", fr: "temps" }, tg: "ዓዋን", tr: "ʾawān" },
          { label: { en: "mouse", ar: "فأر", fr: "souris" }, tg: "ዓንሻይ", tr: "ʿansay" },
          { label: { en: "woman", ar: "امرأة", fr: "femme" }, tg: "ዓሲት", tr: "ʾassit" },
        ]
      },
    ]
  },

  // ── 9. Noun Number System (Raz §3.2) ──
  {
    id: "noun-number", icon: "🔢", color: "#16A085",
    title: { en: "Noun Number: Collective, Singulative & Plural", ar: "العدد: الجمعي والمفرد والجمع", fr: "Nombre: Collectif, Singulatif & Pluriel" },
    desc: { en: "Tigre nouns have three number categories", ar: "للأسماء التقروية ثلاث فئات عددية", fr: "Les noms Tigré ont trois catégories de nombre" },
    sections: [
      {
        heading: { en: "The Collective (§3.2.1) — uncountable group", ar: "الجمعي: المجموعة غير المعدودة", fr: "Le Collectif: groupe indénombrable" },
        items: [
          { label: { en: "people, tribes, nation", ar: "قبائل / شعب", fr: "peuple, tribu" }, tg: "ጋቢሌ", tr: "gabil" },
          { label: { en: "leaves (collective)", ar: "أوراق شجر", fr: "feuilles (collectif)" }, tg: "ቃታፍ", tr: "qataf" },
          { label: { en: "iron (substance)", ar: "حديد", fr: "fer (substance)" }, tg: "ሃሲን", tr: "hasin" },
          { label: { en: "Concord: masculine singular", ar: "المطابقة: مذكر مفرد", fr: "Concorde: masculin singulier" }, tg: "ዕሊ ጋቢሌ ሁቱ", tr: "ʾəlli gabil hətu" },
        ]
      },
      {
        heading: { en: "The Singulative (§3.2.2) — 'one item'", ar: "المفرد الجمعي: شيء واحد", fr: "Le Singulatif: 'un exemplaire'" },
        items: [
          { label: { en: "suffix -at (f.) = one item from collective", ar: "لاحقة ـات للمؤنث = وحدة من الجمعي", fr: "suffixe -at (f.) = un item du collectif" }, tg: "ـኣት", tr: "-at" },
          { label: { en: "a leaf (from qataf 'leaves')", ar: "ورقة", fr: "une feuille" }, tg: "ቃትፋት", tr: "qatfat" },
          { label: { en: "a piece of iron (from hasin)", ar: "قطعة حديد", fr: "un morceau de fer" }, tg: "ሃሲናይ", tr: "hasinay" },
          { label: { en: "suffix -āy (m.) = one person from tribal collective", ar: "لاحقة ـاي للمذكر = فرد من القبيلة", fr: "suffixe -āy (m.) = membre de tribu" }, tg: "ـኣይ", tr: "-āy" },
          { label: { en: "a Christian (from kastān)", ar: "مسيحي", fr: "un chrétien" }, tg: "ካስቴናይ", tr: "kəstenāy" },
        ]
      },
      {
        heading: { en: "Plural Formation overview (§3.2.3)", ar: "تشكيل الجمع", fr: "Formation du pluriel" },
        items: [
          { label: { en: "Suffixed plurals: -āt (most common)", ar: "جمع بزيادة ـات", fr: "Pluriels suffixés: -āt" }, tg: "ÄT ـ", tr: "-āt" },
          { label: { en: "Suffixed plurals: -otāt (replaces -at of singular)", ar: "ـوتات", fr: "-otāt" }, tg: "ÄT ÄT ـ", tr: "-otāt" },
          { label: { en: "Suffixed plurals: -ot, -āč, -am (rare)", ar: "ـوت، ـاتش، ـام (نادر)", fr: "-ot, -āč, -am (rare)" }, tg: "ـኦት / ቻ / ኣም", tr: "-ot/-āč/-am" },
          { label: { en: "Broken plurals: internal vowel change", ar: "جمع تكسير: تغيير الصوائت الداخلية", fr: "Pluriels brisés: changement vocalique interne" }, tg: "ካታብ → ኣካትባት", tr: "katāb → ʾakətbat" },
        ]
      },
      {
        heading: { en: "Nouns with numerals (§3.1.2)", ar: "الأسماء مع الأعداد", fr: "Noms avec les numéraux" },
        items: [
          { label: { en: "Numeral + noun = SINGULAR form used", ar: "العدد + اسم = صيغة المفرد", fr: "Numéral + nom = SINGULIER" }, tg: "ካሌ ዋዓት 'two cows'", tr: "kəle waʿat (sing.)" },
          { label: { en: "Collective nouns NEVER occur with numerals", ar: "الجمعي لا يستخدم مع الأعداد أبداً", fr: "Collectifs JAMAIS avec numéraux" }, tg: "ሰላስ ሃሎታት '3 maternal uncles'", tr: "salas hālotāt" },
        ]
      },
    ]
  },

  // ── 10. Noun Derivatives (Raz §3.3) ──
  {
    id: "noun-derivs", icon: "🔧", color: "#E67E22",
    title: { en: "Noun Derivatives", ar: "مشتقات الاسم", fr: "Dérivés nominaux" },
    desc: { en: "Diminutives, paucatives, pejoratives, augmentatives", ar: "التصغير، القليل، التحقير، التعظيم", fr: "Diminutifs, paucatifs, péjoratifs, augmentatifs" },
    sections: [
      {
        heading: { en: "Diminutives (§3.3.1) — 'small / nice little'", ar: "التصغير: صغير / لطيف صغير", fr: "Diminutifs: petit / petit gentil" },
        items: [
          { label: { en: "masc. suffix -āy (stem vowel a/ā → e)", ar: "م. ـاي (مع تبديل الصائت)", fr: "m. -āy (changement vocalique)" }, tg: "ባብ → ቤባይ 'little door'", tr: "bāb → bebāy" },
          { label: { en: "fem. suffix -at", ar: "م. ـات", fr: "f. -at" }, tg: "ባብ → ቤቤት 'little door (f.)'", tr: "bāb → bebāt" },
          { label: { en: "suffix -it (after -at feminine ending)", ar: "ـيت بعد صيغة المؤنث ـات", fr: "-it après terminaison -at" }, tg: "ጋልባት → ጋልባቲት 'little ship'", tr: "galbat → galbatit" },
          { label: { en: "little boy", ar: "ولد صغير", fr: "petit garçon" }, tg: "ሓሳናይ", tr: "həsanāy" },
          { label: { en: "little house", ar: "بيت صغير", fr: "petite maison" }, tg: "ቤታቲት", tr: "betatit" },
        ]
      },
      {
        heading: { en: "Paucatives (§3.3.2) — 'a few'", ar: "القليل: بضعة", fr: "Paucatifs: quelques" },
        items: [
          { label: { en: "masc. suffix -ām", ar: "م. ـام", fr: "m. -ām" }, tg: "ሃቤያም 'a few monkeys (m.)'", tr: "habbeyām" },
          { label: { en: "fem. suffix -āt", ar: "م. ـات", fr: "f. -āt" }, tg: "ሃቤያት 'a few monkeys (f.)'", tr: "habbeyāt" },
          { label: { en: "a few cows", ar: "بضعة أبقار", fr: "quelques vaches" }, tg: "ዋዓት 'a few cows'", tr: "waʿāt" },
        ]
      },
      {
        heading: { en: "Pejoratives (§3.3.3) — 'poor, bad'", ar: "التحقير: رديء", fr: "Péjoratifs: mauvais" },
        items: [
          { label: { en: "Pejorative has OPPOSITE gender to countable singular", ar: "التحقير: جنس مخالف للمفرد", fr: "Péjoratif: genre opposé au singulier" }, tg: "ጋርሃት (f.) → ጋርሃታይ (m.) 'poor field'", tr: "garhat → garhetāy" },
          { label: { en: "bad girl", ar: "بنت سيئة", fr: "mauvaise fille" }, tg: "ወለት → ዋሌታይ 'bad girl'", tr: "walat → waletāy" },
          { label: { en: "worthless man", ar: "رجل لا قيمة له", fr: "homme sans valeur" }, tg: "ኣናስ → ኣነሳት 'worthless man'", tr: "ʾanas → ʾanesat" },
        ]
      },
      {
        heading: { en: "Augmentatives (§3.3.5) — 'big, large'", ar: "التعظيم: كبير", fr: "Augmentatifs: grand, large" },
        items: [
          { label: { en: "From nouns ending in -at: -at → -āy", ar: "من الأسماء المنتهية بـ ات: ات → اي", fr: "De noms en -at: -at → -āy" }, tg: "ባዓት 'cave' → ባዓይ 'large cave'", tr: "baʿat → baʿāy" },
          { label: { en: "large field", ar: "حقل كبير", fr: "grand champ" }, tg: "ጋርሃይ", tr: "garhāy" },
          { label: { en: "big stone / rock", ar: "صخرة كبيرة", fr: "grand rocher" }, tg: "ዓባናይ", tr: "ʾabbanāy" },
        ]
      },
    ]
  },

  // ── 11. The Adjective (Raz §3.7) ──
  {
    id: "adjectives", icon: "🎨", color: "#8E44AD",
    title: { en: "Adjectives", ar: "الصفات", fr: "Adjectifs" },
    desc: { en: "Form, placement, gender & plural agreement", ar: "الشكل والموضع وتطابق الجنس والعدد", fr: "Forme, position, genre et accord en nombre" },
    sections: [
      {
        heading: { en: "Position (§3.7)", ar: "موضع الصفة", fr: "Position de l'adjectif" },
        items: [
          { label: { en: "Adjective usually PRECEDES the noun", ar: "الصفة عادة قبل الاسم", fr: "L'adjectif précède généralement le nom" }, tg: "ላባብ ዓቢ 'the big gate'", tr: "labāb ʿabi" },
          { label: { en: "Adjective may also FOLLOW the noun", ar: "الصفة قد تأتي بعد الاسم أيضاً", fr: "L'adjectif peut aussi suivre le nom" }, tg: "ኣናስ ላሳጉብ 'the rich man'", tr: "ʾanas lasagub" },
        ]
      },
      {
        heading: { en: "Gender agreement — suffixed plurals (§3.7.1)", ar: "تطابق الجنس ـ جمع الملحقات", fr: "Accord de genre — pluriels suffixés" },
        items: [
          { label: { en: "CəCuC pattern (passive participle Type A)", ar: "نمط CəCuC (المفعول ب النوع أ)", fr: "CəCuC (participe passif Type A)" }, tg: "ሰቡር 'broken' → ሰቡራም (m.pl.) / ሰቡራት (f.pl.)", tr: "səbur → səburām / səburāt" },
          { label: { en: "m. pl. suffix -ām, f. pl. suffix -āt", ar: "م.ج. ـام، ؤ.ج. ـات", fr: "m. pl. -ām, f. pl. -āt" }, tg: "ናፍዓ 'useful' → ናፍዓም / ናፍዓት", tr: "nāfəʿ → nāfəʿam / nāfəʿat" },
          { label: { en: "CaCāC: f. sg. takes -it, pl. -yām/-yāt", ar: "CaCāC: م. ـيت، ج. ـيام/يات", fr: "CaCāC: f. sg. -it, pl. -yām/-yāt" }, tg: "ቃዳም 'former' → ቃዳሚት (f.) → ቃዳምያም / ቃዳምያት", tr: "qadam → qadamit / qadamyām / qadamyāt" },
        ]
      },
      {
        heading: { en: "Frequent adjectives", ar: "صفات شائعة", fr: "Adjectifs fréquents" },
        items: [
          { label: { en: "good", ar: "جيد", fr: "bon" }, tg: "ሳኒ / ሳኔት", tr: "sanni / sannet" },
          { label: { en: "big", ar: "كبير", fr: "grand" }, tg: "ዓቢ / ዓቢ", tr: "ʿabi" },
          { label: { en: "short", ar: "قصير", fr: "court" }, tg: "ሃቺር", tr: "hačir" },
          { label: { en: "new", ar: "جديد", fr: "nouveau" }, tg: "ሃዲስ / ሃዳስ", tr: "haddis / haddās (f.)" },
          { label: { en: "brave", ar: "شجاع", fr: "courageux" }, tg: "ፋዳብ / ፋዳቢት", tr: "fadab / fadābit (f.)" },
          { label: { en: "grey", ar: "رمادي", fr: "gris" }, tg: "ሃምባላይ / ሃምባላይት", tr: "hambalāy / hambalāyt (f.)" },
        ]
      },
    ]
  },

  // ── 12. The Copula & Existence (Raz §5) ──
  {
    id: "copula", icon: "🔵", color: "#2980B9",
    title: { en: "Copula: 'To Be' & Existence", ar: "الرابط: الكينونة والوجود", fr: "Copule: 'Être' et Existence" },
    desc: { en: "halla (present), ʿala (past), negation, copula forms", ar: "ሃላ للحاضر، ዓላ للماضي، والنفي", fr: "halla (présent), ʿala (passé), négation" },
    sections: [
      {
        heading: { en: "Independent Copula (§5.1) — personal pronoun", ar: "الرابط المستقل: الضمير الشخصي", fr: "Copule indépendante: pronom personnel" },
        items: [
          { label: { en: "I am (1st)", ar: "أنا", fr: "je suis" }, tg: "ኣነ", tr: "ʾana" },
          { label: { en: "you are (2m.)", ar: "أنتَ", fr: "tu (m.) es" }, tg: "ኣንተ", tr: "ʾənta" },
          { label: { en: "you are (2f.)", ar: "أنتِ", fr: "tu (f.) es" }, tg: "ኣንቲ", tr: "ʾənti" },
          { label: { en: "he is (3m.)", ar: "هو", fr: "il est" }, tg: "ቱ", tr: "tu" },
          { label: { en: "she is (3f.)", ar: "هي", fr: "elle est" }, tg: "ታ", tr: "ta" },
          { label: { en: "we are", ar: "نحن", fr: "nous sommes" }, tg: "ሁነ", tr: "həna" },
          { label: { en: "they (m.) are", ar: "هم", fr: "ils sont" }, tg: "ቶም", tr: "tom" },
          { label: { en: "they (f.) are", ar: "هن", fr: "elles sont" }, tg: "ታን", tr: "tan (→ han)" },
        ]
      },
      {
        heading: { en: "halla — verb of existence, PRESENT (§5.2)", ar: "ሃላ: فعل الوجود في الحاضر", fr: "halla: verbe d'existence au PRÉSENT" },
        items: [
          { label: { en: "there is / exists (present)", ar: "يوجد / هناك", fr: "il y a / existe (présent)" }, tg: "ሃላ", tr: "halla" },
          { label: { en: "God exists", ar: "الله موجود", fr: "Dieu existe" }, tg: "ራቢ ሃላ", tr: "rabbi halla" },
          { label: { en: "where is Abel?", ar: "أين هابيل؟", fr: "où est Abel?" }, tg: "ኣቤሌ ሁካ ኣታያ ሃላ?", tr: "ʾabel həka ʾattaya halla?" },
          { label: { en: "I have (lit. there is to me)", ar: "عندي", fr: "j'ai (litt. il y a à moi)" }, tg: "ሃሌኩ ዓልዬ", tr: "halleku ʾəlye" },
        ]
      },
      {
        heading: { en: "ʿala — existence in the PAST (§5.2.1)", ar: "ዓላ: فعل الوجود في الماضي", fr: "ʿala: existence au PASSÉ" },
        items: [
          { label: { en: "there was (past)", ar: "كان / كان يوجد", fr: "il y avait (passé)" }, tg: "ዓለ / ዓለው", tr: "ʿala / ʿalaw" },
          { label: { en: "he was a brave man", ar: "كان رجلاً شجاعاً", fr: "il était un homme brave" }, tg: "ሁቱ ፋዳብ ዓናስ ዓለ", tr: "hətu fadab ʾanas ʾala" },
        ]
      },
      {
        heading: { en: "Negation of halla / ʿala (§5.2.3)", ar: "نفي ሃላ / ዓላ", fr: "Négation de halla / ʿala" },
        items: [
          { label: { en: "there is not (personal)", ar: "لا يوجد (شخصي)", fr: "il n'y a pas (personnel)" }, tg: "ኢሃላ / ኢሃሌ…", tr: "ʾi-halla / ʾi-halle…" },
          { label: { en: "there is no (impersonal)", ar: "لا يوجد (غير شخصي)", fr: "il n'y a pas (impersonnel)" }, tg: "ኣልቡ", tr: "ʾalabu" },
          { label: { en: "no one was there to fight him", ar: "لم يكن أحد ليقاتله", fr: "personne n'était là pour le combattre" }, tg: "ዓሊ ባታር ዓልቡ", tr: "ʿali battar ʾalabu" },
        ]
      },
      {
        heading: { en: "Explicative copula tu / tatu (§5.1.1-5.1.2)", ar: "الرابط التفسيري ቱ / ታቱ", fr: "Copule explicative tu / tatu" },
        items: [
          { label: { en: "tu = 'since, because, so' (explicative)", ar: "ቱ = 'لأن / لذا' (تفسيري)", fr: "tu = 'car, donc' (explicatif)" }, tg: "ቱ", tr: "tu" },
          { label: { en: "tatu = both copula and connective", ar: "ታቱ = رابط ووصلة في آن واحد", fr: "tatu = copule et connecteur simultanés" }, tg: "ታቱ", tr: "tatu" },
        ]
      },
    ]
  },

  // ── 13. Possession & Necessity (Raz §5.3–5.4) ──
  {
    id: "possession", icon: "💼", color: "#27AE60",
    title: { en: "Possession & Necessity", ar: "الملكية والضرورة", fr: "Possession et Nécessité" },
    desc: { en: "to have, to own; must / have to", ar: "يملك؛ يجب / لازم", fr: "avoir; devoir / il faut" },
    sections: [
      {
        heading: { en: "Expressing possession (§5.3)", ar: "التعبير عن الملكية", fr: "Expression de la possession" },
        items: [
          { label: { en: "bu / bədibu = 'has' (particle, all persons)", ar: "بو / بديبو = يملك (للجميع)", fr: "bu / bədibu = 'a' (toutes personnes)" }, tg: "ቡ / ቡዲቡ", tr: "bu / bədibu" },
          { label: { en: "she has a large family", ar: "لديها عائلة كبيرة", fr: "elle a une grande famille" }, tg: "ሁታ ዓቢ ሱዋቤ ቡ", tr: "həta ʿabbāy sewabet bu" },
          { label: { en: "halla + ʾəl (all persons) = present 'have'", ar: "ሃሌ + አሌ = يوجد لـ", fr: "halla + ʾəl = j'ai (présent)" }, tg: "ሃሌ…ዓልዬ", tr: "halle ʾəlye" },
          { label: { en: "I have a good camera", ar: "عندي كاميرا جيدة", fr: "j'ai un bon appareil photo" }, tg: "ኣነ ሳኒ ካሜራ ሃሌ ዓልዬ", tr: "ʾana sanni mas·alit hallet ʾəlye" },
        ]
      },
      {
        heading: { en: "Possession in the past (§5.3.2)", ar: "الملكية في الماضي", fr: "Possession au passé" },
        items: [
          { label: { en: "ʿala + ʾəl = 'had' (past)", ar: "ዓላ + አሌ = كان عنده", fr: "ʿala + ʾəl = 'avait' (passé)" }, tg: "ዓለ ዓሎም", tr: "ʿala ʾəlom" },
          { label: { en: "they had a dark she-camel", ar: "كانت عندهم ناقة سوداء", fr: "ils avaient une chamelle noire" }, tg: "ሳሌም ዓለ ዓሎም", tr: "sallām ʿalat ʾəlom" },
        ]
      },
      {
        heading: { en: "Necessity: halla + ʾəl = must / have to (§5.4)", ar: "الضرورة: يجب / لازم", fr: "Nécessité: devoir / falloir" },
        items: [
          { label: { en: "halla + ʾəl = must, have to", ar: "لازم / يجب", fr: "devoir, il faut" }, tg: "ሃሌ ዓልዬ", tr: "halla ʾəlye" },
          { label: { en: "I have to go", ar: "يجب أن أذهب", fr: "je dois partir" }, tg: "ዓጋሌ ዪጊስ ሃሌ ዓልዬ", tr: "ʾəgəl ʾigis halla ʾəlye" },
          { label: { en: "I don't have to go home now", ar: "لا يجب أن أذهب للبيت الآن", fr: "je n'ai pas besoin de rentrer maintenant" }, tg: "ዓጋሌ ዪጊስ ኢሃሌ ዓልዬ", tr: "ʾəgəl ʾigis ʾi-halla ʾəlye" },
          { label: { en: "Negation: ʾi- prefix + halla", ar: "النفي: إضافة ئ للفعل", fr: "Négation: ʾi- + halla" }, tg: "ኢሃሌ…", tr: "ʾi-halle…" },
        ]
      },
    ]
  },

  // ── 14. Verb: The Four Types A B C D (Raz §6.1) ──
  {
    id: "verb-types", icon: "🏃", color: "#C0392B",
    title: { en: "Verb: Four Types A B C D", ar: "الفعل: أنواع أ ب ج د", fr: "Verbe: Quatre Types A B C D" },
    desc: { en: "The basis of all Tigre verb morphology", ar: "أساس صرف الفعل التقروي", fr: "La base de toute la morphologie verbale Tigré" },
    sections: [
      {
        heading: { en: "Type A — simple stem (§6.1.1)", ar: "النوع أ: الجذع البسيط", fr: "Type A: radical simple" },
        items: [
          { label: { en: "Unmarked; can be transitive or intransitive", ar: "غير موسوم؛ متعدٍ أو لازم", fr: "Non-marqué; transitif ou intransitif" }, tg: "ቃትላ 'to kill'", tr: "qatla" },
          { label: { en: "to throw", ar: "يرمي", fr: "jeter" }, tg: "ላካ", tr: "lakfa" },
          { label: { en: "to go out", ar: "يخرج", fr: "sortir" }, tg: "ፋጋ", tr: "fagra" },
          { label: { en: "to do", ar: "يفعل", fr: "faire" }, tg: "ዋዳ", tr: "wada" },
          { label: { en: "to be late", ar: "يتأخر", fr: "être en retard" }, tg: "ዳንጋሬ", tr: "dangara" },
        ]
      },
      {
        heading: { en: "Type B — medial radical geminated (§6.1.1)", ar: "النوع ب: مضاعفة الحرف الأوسط", fr: "Type B: géminée médiale" },
        items: [
          { label: { en: "Medial radical doubled throughout; often lexically distinct from A", ar: "تضعيف الحرف الأوسط؛ غالباً يختلف عن أ معجمياً", fr: "Radical médial doublé; souvent lexicalement distinct de A" }, tg: "ቃታላ 'to do some killing'", tr: "qattala" },
          { label: { en: "to weigh (v.t.)", ar: "يزن", fr: "peser (v.t.)" }, tg: "ማዛና", tr: "mazzana" },
          { label: { en: "to tell", ar: "يروي / يخبر", fr: "raconter" }, tg: "ዳጋሜ", tr: "daggama" },
          { label: { en: "to invite", ar: "يدعو", fr: "inviter" }, tg: "ዓዳሜ", tr: "ʿaddama" },
        ]
      },
      {
        heading: { en: "Type C — long penultimate vowel (§6.1.1)", ar: "النوع ج: إطالة الصائت قبل الأخير", fr: "Type C: voyelle pénultième longue" },
        items: [
          { label: { en: "Long vowel in stem; expresses intensity/conative aspect", ar: "صائت طويل؛ يعبّر عن الشدة", fr: "Voyelle longue; exprime l'intensité" }, tg: "ቃታለ 'to engage in killing'", tr: "qātala" },
          { label: { en: "to break into pieces", ar: "يحطم", fr: "briser en morceaux" }, tg: "ሳቢሬ", tr: "sābara" },
          { label: { en: "to vaccinate", ar: "يطعّم", fr: "vacciner" }, tg: "ካታቤ", tr: "kātaba" },
          { label: { en: "to join, put together", ar: "يجمع", fr: "assembler" }, tg: "ሃቤሬ", tr: "hābara" },
        ]
      },
      {
        heading: { en: "Type D — frequentative (§6.1.1)", ar: "النوع د: التكراري", fr: "Type D: fréquentatif" },
        items: [
          { label: { en: "Repetition of medial radical; frequentative/attenuative", ar: "تكرار الحرف الأوسط؛ تكراري/تخفيفي", fr: "Répétition du radical médial; fréquentatif" }, tg: "ቃታታለ / ባላለሰ", tr: "qatatala / balalasa" },
          { label: { en: "to answer repeatedly", ar: "يجيب مراراً", fr: "répondre de façon répétée" }, tg: "ባላሌሰ", tr: "balalasa" },
          { label: { en: "to work on and off", ar: "يعمل بشكل متقطع", fr: "travailler par intermittence" }, tg: "ካዳዳሜ", tr: "kadādama" },
        ]
      },
    ]
  },

  // ── 15. Verb: Prefixed Derivatives (Raz §6.1.2) ──
  {
    id: "verb-prefixes", icon: "⚙️", color: "#7F8C8D",
    title: { en: "Verb Prefixed Derivatives", ar: "المشتقات الفعلية المقدَّمة", fr: "Dérivés Verbaux Préfixés" },
    desc: { en: "tə- (passive), ʾa- (causative), ʾat-, ʾatta-", ar: "تـ (مبني للمجهول)، أ (تعدية)، أت، أتّـ", fr: "tə- (passif), ʾa- (causatif), ʾat-, ʾatta-" },
    sections: [
      {
        heading: { en: "Prefix tə- — passive & reciprocal (§6.1.2a)", ar: "البادئة تـ: المجهول والتبادل", fr: "Préfixe tə-: passif et réciproque" },
        items: [
          { label: { en: "Expresses passive of transitive A/B/C verbs; reciprocity with C/D", ar: "مجهول الأفعال المتعدية؛ تبادل مع ج/د", fr: "Passif des verbes transitifs A/B/C; réciprocité C/D" }, tg: "ቶ ـ", tr: "tə-" },
          { label: { en: "to be found (← to find)", ar: "يُوجد ← وجد", fr: "être trouvé (← trouver)" }, tg: "ተራካባ", tr: "tərakkaba" },
          { label: { en: "to fight each other", ar: "يتقاتل بعضهم", fr: "se battre mutuellement" }, tg: "ተጋዳቡ", tr: "təgadaba" },
          { label: { en: "to consult one another", ar: "يتشاور", fr: "se consulter" }, tg: "ተማራሜሬ", tr: "təmarāmara" },
        ]
      },
      {
        heading: { en: "Prefix ʾa- — causative (§6.1.2b)", ar: "البادئة أ: التعدية", fr: "Préfixe ʾa-: causatif" },
        items: [
          { label: { en: "Causative of transitive & intransitive verbs (types A/B/C)", ar: "مزيد التعدية للمتعدي واللازم", fr: "Causatif de verbes transitifs et intransitifs" }, tg: "ዓ ـ", tr: "ʾa-" },
          { label: { en: "to cause to raid", ar: "يجعله يغير", fr: "faire razzier" }, tg: "ዓዝሜተ", tr: "ʾazmata" },
          { label: { en: "to bring (← to come)", ar: "يجلب ← يجيء", fr: "amener (← venir)" }, tg: "ዓምሳዓ", tr: "ʾamsəʾa" },
          { label: { en: "to beautify", ar: "يجمّل", fr: "embellir" }, tg: "ዓጋሬሜ", tr: "ʾagarrama" },
        ]
      },
      {
        heading: { en: "Prefix ʾat- — causative of tə- (§6.1.2c)", ar: "البادئة أت: تعدية المجهول", fr: "Préfixe ʾat-: causatif de tə-" },
        items: [
          { label: { en: "Causative of intransitive tə- verbs; also laryngeal-initial verbs", ar: "تعدية أفعال تـ اللازمة", fr: "Causatif des verbes tə- intransitifs" }, tg: "ዓት ـ", tr: "ʾat-" },
          { label: { en: "to make sit (← to sit down)", ar: "يجلسه ← يجلس", fr: "faire asseoir (← s'asseoir)" }, tg: "ዓትጋሳ", tr: "ʾatgassa" },
          { label: { en: "to join together (v.t.) (← to join v.i.)", ar: "يضم ← ينضم", fr: "joindre (v.t.) ← se joindre (v.i.)" }, tg: "ዓትላሃሜ", tr: "ʾatlahama" },
          { label: { en: "to make leave (← to leave)", ar: "يرحّله ← يرحل", fr: "faire partir (← partir)" }, tg: "ዓትሃዲጋ", tr: "ʾathadaga" },
        ]
      },
      {
        heading: { en: "Prefix ʾatta- — double causative (§6.1.2d)", ar: "البادئة أتّـ: التعدية المضاعفة", fr: "Préfixe ʾatta-: double causatif" },
        items: [
          { label: { en: "Factitive / causative-via-agent (Type A only)", ar: "تعدية مضاعفة / بواسطة وكيل (النوع أ فقط)", fr: "Factitif / causatif par agent (Type A)" }, tg: "ዓቱ ـ", tr: "ʾatta-" },
          { label: { en: "to cause to be killed", ar: "يجعله يُقتل", fr: "faire tuer" }, tg: "ዓታቅታለ", tr: "ʾattaqtala" },
          { label: { en: "to cause to be brought", ar: "يجعله يُجلب", fr: "faire amener" }, tg: "ዓታምሳዓ", tr: "ʾattamsəʾa" },
          { label: { en: "to cause to go out / be brought out", ar: "يخرجه", fr: "faire sortir" }, tg: "ዓታፋጋ", tr: "ʾattafagra" },
        ]
      },
    ]
  },

  // ── 16. Verb Inflexion: Tense System (Raz §6.2.1, §6.3) ──
  {
    id: "tense", icon: "⏱️", color: "#1ABC9C",
    title: { en: "Verb: Tense & Mood System", ar: "نظام الزمن والصيغة الفعلية", fr: "Système Temps & Mode du Verbe" },
    desc: { en: "Perfect, imperfect, jussive, imperative", ar: "الماضي، المضارع، الطلبي، الأمر", fr: "Parfait, imparfait, jussif, impératif" },
    sections: [
      {
        heading: { en: "Three morphological categories (§6.3.1)", ar: "الفئات الصرفية الثلاث", fr: "Trois catégories morphologiques" },
        items: [
          { label: { en: "PERFECT = past (preterite)", ar: "الماضي: فعل ماضٍ", fr: "PARFAIT = passé (prétérit)" }, tg: "ካትለ / ቃንሳ", tr: "qatla / qansa" },
          { label: { en: "IMPERFECT = non-past (present / future)", ar: "المضارع: غير الماضي (حاضر/مستقبل)", fr: "IMPARFAIT = non-passé (présent/futur)" }, tg: "ዓቃናስ / ላቃናስ", tr: "ʾaqannəs / laqannəs" },
          { label: { en: "JUSSIVE = modal (subjunctive / imperative)", ar: "الطلبي: وجداني / أمري", fr: "JUSSIF = modal (subjonctif/impératif)" }, tg: "ዓቃናስ / ላቃናስ", tr: "ʾəqnas / ləqnas" },
          { label: { en: "IMPERATIVE = 2nd person jussive (no prefix)", ar: "الأمر = طلبي الشخص الثاني بلا بادئة", fr: "IMPÉRATIF = jussif 2e pers. sans préfixe" }, tg: "ቃናስ / ቃናሲ / ቃናሶ", tr: "qənas / qənasi / qənaso" },
        ]
      },
      {
        heading: { en: "Type A full inflexion: qansa 'to get up' (§6.2.1)", ar: "تصريف النوع أ: قانصَ 'يقوم'", fr: "Inflexion Type A: qansa 'se lever'" },
        items: [
          { label: { en: "Perfect (I → they)", ar: "الماضي", fr: "Parfait" }, tg: "ቃናስኮ، ቃናስካ، ቃናስኪ، ቃናስ، ቃናሳት…", tr: "qanasko, qanaska, qanaski, qansa, qansat…" },
          { label: { en: "Imperfect (I → they)", ar: "المضارع", fr: "Imparfait" }, tg: "ዓቃናስ، ታቃናስ، ታቃናሲ…", tr: "ʾaqannəs, təqannəs, təqansi…" },
          { label: { en: "Jussive (I → they)", ar: "الطلبي", fr: "Jussif" }, tg: "ዓቃናስ، ታቃናስ…", tr: "ʾəqnas, təqnas…" },
          { label: { en: "Imperative", ar: "الأمر", fr: "Impératif" }, tg: "ቃናስ! ቃናሲ! ቃናሶ! ቃናሳ!", tr: "qənas! qənasi! qənaso! qənasa!" },
        ]
      },
      {
        heading: { en: "Compound tenses (§6.3.1.4)", ar: "الأزمنة المركّبة", fr: "Temps composés" },
        items: [
          { label: { en: "Imperfect + halla = present progressive 'is doing'", ar: "مضارع + ሃላ = المضارع المستمر", fr: "Imparfait + halla = progressif présent" }, tg: "ዛቃ ሃሌና 'we are going'", tr: "…hallena" },
          { label: { en: "Imperfect + ʿala = past progressive 'was doing'", ar: "مضارع + ዓላ = الماضي المستمر", fr: "Imparfait + ʿala = progressif passé" }, tg: "ዛቃ ዓለ 'he was going'", tr: "…ʿala" },
          { label: { en: "ʾəgəl + Jussive (+ tu) = future / imminent", ar: "أجل + طلبي = المستقبل / القريب", fr: "ʾəgəl + Jussif (+ tu) = futur proche" }, tg: "ዓጋሌ ላቃናስ ቱ 'I am going to go'", tr: "ʾəgəl laqnas tu" },
          { label: { en: "Imperfect + nabra/sanha = habitual in life-span", ar: "مضارع + نبرا = العادة في العمر", fr: "Imparfait + nabra = habituel sur la durée" }, tg: "ናብሬ 'he used to live'", tr: "nabra" },
        ]
      },
      {
        heading: { en: "Perfect vs. Imperfect: semantic uses (§6.3.1.3)", ar: "الماضي مقابل المضارع: الاستخدامات", fr: "Parfait vs Imparfait: usages sémantiques" },
        items: [
          { label: { en: "Perfect = completed past action", ar: "الماضي = فعل منتهٍ", fr: "Parfait = action passée achevée" }, tg: "ሀዩ ሞቴ 'your son is dead (has died)'", tr: "walka mota" },
          { label: { en: "Imperfect = present state or action", ar: "المضارع = حالة أو فعل حاضر", fr: "Imparfait = état ou action présents" }, tg: "ዓጋያስ 'I go (to school)'", tr: "ʾagayas" },
          { label: { en: "Imperfect = future", ar: "المضارع = المستقبل", fr: "Imparfait = futur" }, tg: "ዓቃቤሌ 'I shall return'", tr: "ʾaqabbəl" },
          { label: { en: "Perfect = unreality in conditional clauses (wa + perf.)", ar: "الماضي = غير واقعي في الشرط", fr: "Parfait = irréel dans conditionnelles" }, tg: "ሃሌዬ ማኪናት ዋዛቤኮ 'if I had money, I'd buy a car'", tr: "halleye makinat wazzabeko" },
        ]
      },
    ]
  },

  // ── 17. Verb Negation (Raz §6.4) ──
  {
    id: "negation", icon: "🚫", color: "#E74C3C",
    title: { en: "Verb Negation", ar: "نفي الفعل", fr: "Négation du Verbe" },
    desc: { en: "Negative prefix ʾi- before all verb forms", ar: "البادئة السالبة ئ قبل كل صيغ الفعل", fr: "Préfixe négatif ʾi- devant toutes les formes" },
    sections: [
      {
        heading: { en: "Negative particle ʾi- (§6.4)", ar: "البادئة السالبة ئ", fr: "Particule négative ʾi-" },
        items: [
          { label: { en: "ʾi- is prefixed to the verb in all tenses and moods", ar: "ئ تُضاف لكل الأزمنة والصيغ", fr: "ʾi- se préfixe à tous les temps et modes" }, tg: "ኢ ـ", tr: "ʾi-" },
          { label: { en: "I did not go (perfect)", ar: "لم أذهب (ماضي)", fr: "je ne suis pas allé (parfait)" }, tg: "ኢጋሳን", tr: "ʾi-gasanku" },
          { label: { en: "I do not go (imperfect)", ar: "لا أذهب (مضارع)", fr: "je ne vais pas (imparfait)" }, tg: "ኢጋሰ", tr: "ʾi-ʾagannəs" },
          { label: { en: "Imperative negative: ʾi- + jussive form", ar: "نهي: ئ + الطلبي", fr: "Impératif négatif: ʾi- + jussif" }, tg: "ኢትቃናስ! 'don't get up!'", tr: "ʾi-təqnas!" },
        ]
      },
      {
        heading: { en: "Negation of existence and copula", ar: "نفي الوجود والرابط", fr: "Négation de l'existence et de la copule" },
        items: [
          { label: { en: "Negative of personal copula: ʾi- + pronoun", ar: "نفي الرابط الشخصي: ئ + ضمير", fr: "Négatif copule personnelle: ʾi- + pronom" }, tg: "ኢኣነ 'I am not'  / ኢኣንተ 'you are not'", tr: "ʾiʾana / ʾiʾənta" },
          { label: { en: "Negative of tu copula: ʾikon (fossilized)", ar: "نفي الرابط ቱ: إيكون (جامد)", fr: "Négatif de tu: ʾikon (forme figée)" }, tg: "ኢኮን", tr: "ʾikon" },
          { label: { en: "there is no (impersonal)", ar: "لا يوجد", fr: "il n'y a pas" }, tg: "ኣልቡ", tr: "ʾalabu" },
          { label: { en: "I don't know", ar: "لا أعرف", fr: "je ne sais pas" }, tg: "ኢኣምር", tr: "ʾi-ʾamər" },
          { label: { en: "there is no water", ar: "لا يوجد ماء", fr: "il n'y a pas d'eau" }, tg: "ማይ ኣልቡ", tr: "may ʾalabu" },
        ]
      },
    ]
  },

  // ── 18. Numbers: Cardinals & Ordinals (Raz §7) ──
  {
    id: "numbers", icon: "🔢", color: "#3498DB",
    title: { en: "Numbers", ar: "الأرقام", fr: "Nombres" },
    desc: { en: "Cardinals, ordinals, joint numbers (Raz §7)", ar: "الأعداد الأصلية والترتيبية والمركبة", fr: "Cardinaux, ordinaux, nombres composés" },
    sections: [
      {
        heading: { en: "Cardinal 1–10 (§7.1)", ar: "الأعداد الأصلية ١-١٠", fr: "Cardinaux 1–10" },
        items: [
          { label: { en: "1 (m.)", ar: "١", fr: "1 (m.)" }, tg: "ሓቴ", tr: "ḥate" },
          { label: { en: "1 (f.)", ar: "١ م", fr: "1 (f.)" }, tg: "ሃቴ", tr: "hatte" },
          { label: { en: "2", ar: "٢", fr: "2" }, tg: "ካሌ", tr: "kəle" },
          { label: { en: "3", ar: "٣", fr: "3" }, tg: "ሰለስ", tr: "salas" },
          { label: { en: "4", ar: "٤", fr: "4" }, tg: "ዓርባዕ", tr: "ʾarbaʿ" },
          { label: { en: "5", ar: "٥", fr: "5" }, tg: "ሓምስ", tr: "ḥams" },
          { label: { en: "6", ar: "٦", fr: "6" }, tg: "ሱስ", tr: "sus" },
          { label: { en: "7", ar: "٧", fr: "7" }, tg: "ሰቤዓ", tr: "sabəʿ" },
          { label: { en: "8", ar: "٨", fr: "8" }, tg: "ሳሜን", tr: "saman" },
          { label: { en: "9", ar: "٩", fr: "9" }, tg: "ቲሰዓ", tr: "tisəʿ" },
          { label: { en: "10", ar: "١٠", fr: "10" }, tg: "ዓሱር", tr: "ʿasur" },
        ]
      },
      {
        heading: { en: "Tens & Hundreds (§7.1)", ar: "العشرات والمئات", fr: "Dizaines et centaines" },
        items: [
          { label: { en: "20", ar: "٢٠", fr: "20" }, tg: "ዕስራ", tr: "ʿəsra" },
          { label: { en: "30", ar: "٣٠", fr: "30" }, tg: "ሰላሳ", tr: "salasa" },
          { label: { en: "40", ar: "٤٠", fr: "40" }, tg: "ዓርብዓ", tr: "ʾarbəʿa" },
          { label: { en: "50", ar: "٥٠", fr: "50" }, tg: "ሓምሳ", tr: "ḥamsa" },
          { label: { en: "60", ar: "٦٠", fr: "60" }, tg: "ሱሱ", tr: "sustu" },
          { label: { en: "100", ar: "١٠٠", fr: "100" }, tg: "ምዓት", tr: "məʾat" },
          { label: { en: "1000", ar: "١٠٠٠", fr: "1000" }, tg: "ዓሽሃት", tr: "ʾašhat" },
        ]
      },
      {
        heading: { en: "Joint numbers (§7.1.1)", ar: "الأعداد المركبة", fr: "Nombres composés" },
        items: [
          { label: { en: "11 = ten and one", ar: "أحد عشر", fr: "onze" }, tg: "ዓሱር ዋሓቴ", tr: "ʿasur wa-ḥate" },
          { label: { en: "21 = twenty and one", ar: "واحد وعشرون", fr: "vingt-et-un" }, tg: "ዕስራ ዋሓቴ", tr: "ʿəsra wa-ḥate" },
        ]
      },
      {
        heading: { en: "Special numerals: had, ʿadad, nafar (§7.1.4)", ar: "أعداد خاصة", fr: "Numéraux spéciaux" },
        items: [
          { label: { en: "had = 'one' (counting persons)", ar: "ሃድ = واحد (للأشخاص)", fr: "had = 'un' (personnes)" }, tg: "ሃድ", tr: "had" },
          { label: { en: "ʿadad = 'number, amount'", ar: "عدد = عدد / كمية", fr: "ʿadad = 'nombre, quantité'" }, tg: "ዓዳድ", tr: "ʿadad" },
          { label: { en: "nafar = 'person' (counting)", ar: "نفر = شخص (للعد)", fr: "nafar = 'personne' (comptage)" }, tg: "ናፋር", tr: "nafar" },
        ]
      },
      {
        heading: { en: "Ordinals (§7.2)", ar: "الأعداد الترتيبية", fr: "Ordinaux" },
        items: [
          { label: { en: "first (m.)", ar: "أول", fr: "premier" }, tg: "ቃዳም", tr: "qadam" },
          { label: { en: "second", ar: "ثان", fr: "deuxième" }, tg: "ካሌኛ", tr: "kəleñña" },
          { label: { en: "third", ar: "ثالث", fr: "troisième" }, tg: "ሰልሳዊ", tr: "salsaw" },
        ]
      },
    ]
  },

  // ── 19. Prepositions & Common Particles (Raz §8.1) ──
  {
    id: "prepositions", icon: "🔀", color: "#F39C12",
    title: { en: "Prepositions & Particles", ar: "حروف الجر والأدوات", fr: "Prépositions et Particules" },
    desc: { en: "in, on, from, with, to, for, by, about", ar: "في، على، من، مع، إلى، لـ، بـ، عن", fr: "dans, sur, de, avec, à, pour, par, sur" },
    sections: [
      {
        heading: { en: "Core prepositions (§8.1)", ar: "حروف الجر الأساسية", fr: "Prépositions de base" },
        items: [
          { label: { en: "in, at, to (place)", ar: "في / بـ / إلى (مكان)", fr: "dans, à, en (lieu)" }, tg: "ዓት", tr: "ʾat" },
          { label: { en: "from", ar: "من", fr: "de, depuis" }, tg: "ሙን", tr: "mən" },
          { label: { en: "with, by", ar: "مع / بـ", fr: "avec, par" }, tg: "ዓብ", tr: "ʾab" },
          { label: { en: "to, for (recipient)", ar: "لـ / إلى (مستقبِل)", fr: "à, pour (destinataire)" }, tg: "ዓጋሌ", tr: "ʾəgəl" },
          { label: { en: "after", ar: "بعد", fr: "après" }, tg: "ሃቆ", tr: "haqo" },
          { label: { en: "like, as", ar: "مثل / كـ", fr: "comme" }, tg: "ካምሳሌ", tr: "kəmsal" },
          { label: { en: "without, beside", ar: "بدون / بجانب", fr: "sans, à côté de" }, tg: "ዓምባሌ", tr: "ʾəmbal" },
          { label: { en: "all, every", ar: "كل", fr: "tout, chaque" }, tg: "ካሌ", tr: "kəl" },
          { label: { en: "to him/her/it", ar: "له / لها", fr: "à lui/elle" }, tg: "ዓሉ", tr: "ʾəlu" },
          { label: { en: "to them (m.)", ar: "لهم", fr: "à eux" }, tg: "ዓሎም", tr: "ʾəlom" },
        ]
      },
      {
        heading: { en: "Prepositions with pronominal suffixes", ar: "حروف الجر مع الضمائر", fr: "Prépositions avec suffixes pronominaux" },
        items: [
          { label: { en: "after him, afterwards", ar: "بعده / بعد ذلك", fr: "après lui, ensuite" }, tg: "ሃቆሁ", tr: "haqohu" },
          { label: { en: "with him", ar: "معه", fr: "avec lui" }, tg: "ሙስሉ", tr: "məslu" },
          { label: { en: "with you (m. sg.)", ar: "معك", fr: "avec toi" }, tg: "ሙሳልካ", tr: "məsalka" },
          { label: { en: "to me", ar: "لي / إليّ", fr: "à moi" }, tg: "ዓቼ", tr: "ʾəčče" },
          { label: { en: "from him", ar: "منه", fr: "de lui" }, tg: "ሙኑ", tr: "mənnu" },
          { label: { en: "from you (m.)", ar: "منك", fr: "de toi" }, tg: "ሙንካ", tr: "mənka" },
        ]
      },
    ]
  },

  // ── 20. Conjunctions & Word Order (Raz §8.3, §9.1) ──
  {
    id: "syntax", icon: "🔗", color: "#6C3483",
    title: { en: "Conjunctions & Word Order", ar: "حروف العطف وترتيب الكلمات", fr: "Conjonctions et Ordre des Mots" },
    desc: { en: "and, or, but, if, when; SOV order", ar: "و، أو، لكن، إن، عندما؛ ترتيب فعل-مفعول-فاعل", fr: "et, ou, mais, si, quand; ordre SOV" },
    sections: [
      {
        heading: { en: "Coordinating conjunctions (§8.3.1)", ar: "حروف العطف التساوي", fr: "Conjonctions de coordination" },
        items: [
          { label: { en: "and", ar: "و", fr: "et" }, tg: "ዋ", tr: "wa" },
          { label: { en: "or", ar: "أو", fr: "ou" }, tg: "ማ", tr: "ma" },
          { label: { en: "but", ar: "لكن", fr: "mais" }, tg: "ዳዓም", tr: "daʿam" },
          { label: { en: "also, even", ar: "أيضاً / حتى", fr: "aussi, même" }, tg: "ዋ…ዓፂ", tr: "wa-ʾesu" },
        ]
      },
      {
        heading: { en: "Subordinating conjunctions (§8.3.2)", ar: "حروف الربط التبعية", fr: "Conjonctions de subordination" },
        items: [
          { label: { en: "if (conditional)", ar: "إذا / إن (شرط)", fr: "si (conditionnel)" }, tg: "ሙን", tr: "mən" },
          { label: { en: "when, as (temporal)", ar: "عندما / حين", fr: "quand, lorsque" }, tg: "ዓት / ዲብ", tr: "ʾat / dib" },
          { label: { en: "so that, in order to", ar: "لكي / حتى", fr: "afin que, pour que" }, tg: "ዓጋሌ", tr: "ʾəgəl" },
          { label: { en: "because, since", ar: "لأن / بسبب", fr: "parce que, puisque" }, tg: "ዓቢ ሊ", tr: "ʾabballi" },
          { label: { en: "after (temporal)", ar: "بعد أن", fr: "après que" }, tg: "ሃቆ", tr: "haqo" },
          { label: { en: "although, even if", ar: "رغم أن / حتى لو", fr: "bien que, même si" }, tg: "ሙንሜ", tr: "mənma" },
        ]
      },
      {
        heading: { en: "Word order (§9.1)", ar: "ترتيب الكلمات", fr: "Ordre des mots" },
        items: [
          { label: { en: "Basic order: SUBJECT — OBJECT — VERB", ar: "الترتيب الأساسي: فاعل — مفعول — فعل", fr: "Ordre de base: SUJET — OBJET — VERBE" }, tg: "ዓናስ ካሌ ሙን ዓቃ 'a man rode on a donkey'", tr: "ʾanas … + verb final" },
          { label: { en: "Relative clause PRECEDES the noun it modifies", ar: "الجملة الوصفية قبل الموصوف", fr: "La relative PRÉCÈDE le nom modifié" }, tg: "ዓጋሌ ያምሙ ዓዲጎ 'the donkey he rode'", tr: "relative-clause + noun" },
          { label: { en: "Adjective usually precedes the noun", ar: "الصفة عادة قبل الاسم", fr: "L'adjectif précède généralement le nom" }, tg: "ሳኒ ዓናስ 'a good man'", tr: "sanni ʾanas" },
          { label: { en: "Definite article la may be attached to preceding word in rapid speech", ar: "لَ قد تُلحق بالكلمة السابقة في الكلام السريع", fr: "la peut s'attacher au mot précédent à l'oral" }, tg: "ናላ ሙዲርያት 'chieftains of the province'", tr: "nāy lamudiryat" },
        ]
      },
    ]
  },

];


// ─── UI TRANSLATIONS ──────────────────────────────────────────────────────────
const UI_TEXT = {
  // App title & tagline
  appTitle: { en: "ልሳን ትግራይት", ar: "ልሳን ትግራይት", fr: "ልሳን ትግራይት" },
  appSubtitle: { en: "Master the Tigre Language", ar: "أتقن لغة التقري", fr: "Maîtrisez la Langue Tigré" },

  // Navigation
  navHome: { en: "Home", ar: "الرئيسية", fr: "Accueil" },
  navScript: { en: "Script", ar: "الحروف", fr: "Alphabet" },
  navWords: { en: "Words", ar: "الكلمات", fr: "Mots" },
  navGrammar: { en: "Grammar", ar: "القواعد", fr: "Grammaire" },
  navPractice: { en: "Practice", ar: "تدريب", fr: "Pratique" },
  navProgress: { en: "Progress", ar: "التقدم", fr: "Progrès" },

  // Home screen
  yourProgress: { en: "Your Progress", ar: "تقدمك", fr: "Votre Progrès" },
  words: { en: "words", ar: "كلمة", fr: "mots" },
  complete: { en: "complete", ar: "مكتمل", fr: "terminé" },
  alphabet: { en: "Alphabet", ar: "الأبجدية", fr: "Alphabet" },
  learnScript: { en: "Learn the script", ar: "تعلم الحروف", fr: "Apprendre l'écriture" },
  flashcards: { en: "Flashcards", ar: "البطاقات", fr: "Cartes" },
  studyWords: { en: "Study words", ar: "دراسة الكلمات", fr: "Étudier les mots" },
  grammar: { en: "Grammar", ar: "القواعد", fr: "Grammaire" },
  learnRules: { en: "Learn the rules", ar: "تعلم القواعد", fr: "Apprendre les règles" },
  practice: { en: "Practice", ar: "تدريب", fr: "Pratique" },
  testYourself: { en: "Test yourself", ar: "اختبر نفسك", fr: "Testez-vous" },
  progress: { en: "Progress", ar: "التقدم", fr: "Progrès" },
  yourJourney: { en: "Your journey", ar: "رحلتك", fr: "Votre parcours" },

  // Alphabet screen
  geezScript: { en: "Ge'ez Script", ar: "حروف الجعز", fr: "Écriture Ge'ez" },
  eachConsonant: { en: "Each consonant has 7 vowel forms — tap any row to explore", ar: "لكل حرف 7 أشكال صوتية — اضغط للاستكشاف", fr: "Chaque consonne a 7 formes vocaliques — appuyez pour explorer" },

  // Flashcards screen
  tapToReveal: { en: "tap to reveal Tigre", ar: "اضغط لإظهار الترجمة", fr: "appuyez pour révéler" },
  play: { en: "Play", ar: "تشغيل", fr: "Jouer" },
  record: { en: "Record", ar: "تسجيل", fr: "Enregistrer" },
  stop: { en: "Stop", ar: "إيقاف", fr: "Arrêter" },

  // Exercise screen
  score80: { en: "Score 80% to unlock the next level!", ar: "احصل على 80% لفتح المستوى التالي!", fr: "Obtenez 80% pour débloquer le niveau suivant!" },
  alphabetQuiz: { en: "Alphabet Quiz", ar: "اختبار الأبجدية", fr: "Quiz Alphabet" },
  identifyLetters: { en: "Identify letters & romanized forms", ar: "حدد الحروف وأشكالها", fr: "Identifier les lettres et translittérations" },
  start: { en: "Start", ar: "ابدأ", fr: "Commencer" },
  retry: { en: "Retry", ar: "إعادة", fr: "Réessayer" },
  levels: { en: "Levels", ar: "المستويات", fr: "Niveaux" },
  next: { en: "Next", ar: "التالي", fr: "Suivant" },
  correct: { en: "Correct!", ar: "صحيح!", fr: "Correct!" },
  answer: { en: "Answer", ar: "الإجابة", fr: "Réponse" },

  // Questions
  whatInTigre: { en: "What is this in Tigre?", ar: "ما هذا بالتقري؟", fr: "Comment dit-on en Tigré?" },
  whatMean: { en: "What does this mean?", ar: "ما معنى هذا؟", fr: "Que signifie ceci?" },
  typeEnglish: { en: "What does this mean in English?", ar: "ما معناها بالإنجليزية؟", fr: "Que signifie ceci en anglais?" },
  typePlaceholder: { en: "Type the English meaning…", ar: "اكتب المعنى بالإنجليزية…", fr: "Tapez la signification en anglais…" },
  whichConsonant: { en: "Which consonant does this letter belong to?", ar: "لأي حرف ينتمي؟", fr: "À quelle consonne appartient cette lettre?" },
  whichRomanized: { en: "What is the romanized form of this letter?", ar: "ما الشكل اللاتيني لهذا الحرف؟", fr: "Quelle est la transcription de cette lettre?" },

  // Results
  levelComplete: { en: "Level Complete!", ar: "اكتمل المستوى!", fr: "Niveau Terminé!" },
  keepGoing: { en: "Keep Going!", ar: "استمر!", fr: "Continuez!" },
  correctCount: { en: "correct", ar: "صحيح", fr: "correct" },
  nextUnlocked: { en: "Next level unlocked!", ar: "تم فتح المستوى التالي!", fr: "Niveau suivant débloqué!" },

  // Progress screen
  wordsLearned: { en: "words learned", ar: "كلمة تعلمتها", fr: "mots appris" },
  ofAllWords: { en: "of all words", ar: "من جميع الكلمات", fr: "de tous les mots" },
  resetProgress: { en: "Reset All Progress", ar: "إعادة تعيين التقدم", fr: "Réinitialiser le Progrès" },

  // Grammar Quiz
  grammarQuiz: { en: "Grammar Quiz", ar: "اختبار القواعد", fr: "Quiz Grammaire" },
  identifyGrammar: { en: "Test your grammar knowledge", ar: "اختبر معرفتك بالقواعد", fr: "Testez vos connaissances grammaticales" },

  // Admin
  voiceAdmin: { en: "Voice Admin", ar: "إدارة الصوت", fr: "Admin Voix" },
  recordPronunciation: { en: "Record pronunciation for every word", ar: "سجل النطق لكل كلمة", fr: "Enregistrer la prononciation pour chaque mot" },
  audioCoverage: { en: "Audio coverage", ar: "تغطية الصوت", fr: "Couverture audio" },
  recorded: { en: "recorded", ar: "مسجل", fr: "enregistré" },
  back: { en: "Back", ar: "رجوع", fr: "Retour" },

  // Language names
  langEn: { en: "English", ar: "English", fr: "English" },
  langAr: { en: "العربية", ar: "العربية", fr: "العربية" },
  langFr: { en: "Français", ar: "Français", fr: "Français" },
};
