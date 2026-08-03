# ትግራይት — Tigrayit Kids

A children's learning app for the Tigre (Tigrayit) language of Eritrea.

## Features
- **Ge'ez Alphabet** — Learn all 25 consonants × 7 vowel orders
- **150+ vocabulary words** across 10 themed levels
- **Pronunciation** — Tap 🔊 (or any alphabet cell) to hear the word spoken
- **Audio recording** — Record your own pronunciation for each word
- **Level-based progression** — Must score 80% to unlock next level
- **3 exercise types** — Match, multiple choice, and write transliteration
- **Progress tracking** — Stars, percentages, persistent storage
- **Child-friendly design** — Warm colors, emoji icons, bouncy animations

## Levels
1. Hello! 👋 — Greetings & Numbers
2. My Family 👨‍👩‍👧 — Family & People
3. My Body 🫀 — Body parts
4. Animals 🐪 — Creatures
5. Nature 🌍 — Sky, earth & weather
6. Yummy! ☕ — Food & drink
7. Colors 🎨 — Colors & descriptions
8. My World 🏠 — Things & places
9. Let's Do! 🏃 — Common verbs
10. Talk! 💬 — Useful phrases

## Sources
- Moritz von Beurmann, "Vocabulary of the Tigré Language" (1868) — via speaktigre.com
- Shlomo Raz, "Tigre Grammar and Texts" (1983)
- Tigre Ge'ez alphabet chart — omniglot.com/writing/tigre.htm
- speaktigre.com resources

## Deployment
Simply open `index.html` in any modern browser. No server needed.
For production, serve the file from any static host (Netlify, Vercel, GitHub Pages, etc.)

## Pronunciation Audio
Clips in `audio/` are pre-rendered offline from the `BeitTigreAI/tigre-vits`
model, so the site stays fully static — GitHub Pages serves them like any other
file and no TTS server is involved. Regenerate after editing `data.js` with
`./tools/render.sh`; see [tools/README.md](tools/README.md).

## Audio Recording
Uses the browser's MediaRecorder API. Requires microphone permission.
Recorded audio is stored in localStorage as base64 data URLs.
Works best on Chrome, Safari, Firefox.
