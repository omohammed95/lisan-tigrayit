#!/usr/bin/env node
/*
 * How much of the app's vocabulary is actually spoken somewhere in the
 * BeitTigreAI/tigre-tts-training corpus?
 *
 *   node tools/corpus_coverage.js <path-to-dataset.jsonl>
 *
 * Decides whether extracting real human audio is worth building. Three tiers,
 * in descending order of usefulness:
 *
 *   exact     the whole utterance IS the word — usable as-is, no alignment
 *   word      the word appears as a whitespace-delimited token in some
 *             utterance — needs forced alignment to cut out
 *   none      absent from the corpus; would have to be recorded
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const jsonlPath = process.argv[2];
if (!jsonlPath) {
  console.error("usage: node tools/corpus_coverage.js <dataset.jsonl>");
  process.exit(1);
}

const entries = JSON.parse(
  fs.readFileSync(path.join(__dirname, "tigre_strings.json"), "utf8")
);

// utterance text -> {n, speakers:Set}; and token -> [row indices]
const rows = [];
const byToken = new Map();
const byExact = new Map();

for (const line of fs.readFileSync(jsonlPath, "utf8").split("\n")) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  const text = (r.text || "").replace(/\s+/g, " ").trim();
  const i = rows.length;
  rows.push({ text, speaker: r.speaker, audio: r.audio_path });

  if (!byExact.has(text)) byExact.set(text, []);
  byExact.get(text).push(i);

  for (const tok of text.split(" ")) {
    // Ge'ez punctuation clings to words; strip it for matching.
    const t = tok.replace(/[።፡፣፤፦!?"'“”‘’…]/g, "");
    if (!t) continue;
    if (!byToken.has(t)) byToken.set(t, []);
    byToken.get(t).push(i);
  }
}

const speakers = new Set(rows.map((r) => r.speaker));
const totalWords = rows.reduce((a, r) => a + r.text.split(" ").length, 0);
console.log(`Corpus: ${rows.length} utterances, ${speakers.size} speakers, ` +
            `${totalWords} word tokens, ${byToken.size} distinct word types\n`);

const tiers = { exact: [], word: [], none: [] };
for (const e of entries) {
  const say = e.say;
  if (byExact.has(say)) tiers.exact.push({ ...e, hits: byExact.get(say) });
  else if (byToken.has(say)) tiers.word.push({ ...e, hits: byToken.get(say) });
  else tiers.none.push(e);
}

const bySource = (list) => {
  const c = {};
  for (const e of list) for (const s of e.sources) c[s] = (c[s] || 0) + 1;
  return c;
};

const pct = (n) => ((n / entries.length) * 100).toFixed(1) + "%";
console.log(`Of ${entries.length} strings the app can display:`);
console.log(`  exact utterance match : ${String(tiers.exact.length).padStart(4)}  ${pct(tiers.exact.length)}  (usable as-is)`);
console.log(`  appears as a word     : ${String(tiers.word.length).padStart(4)}  ${pct(tiers.word.length)}  (needs forced alignment)`);
console.log(`  absent                : ${String(tiers.none.length).padStart(4)}  ${pct(tiers.none.length)}  (must be recorded)\n`);

for (const [name, list] of Object.entries(tiers)) {
  console.log(`${name} by source:`, bySource(list));
}

// The alphabet is the pedagogical core and the part TTS handled worst — call
// it out separately rather than letting it hide inside the totals.
const alpha = entries.filter((e) => e.sources.includes("alpha"));
const alphaCovered = alpha.filter((e) => byExact.has(e.say) || byToken.has(e.say));
console.log(`\nAlphabet syllables: ${alphaCovered.length}/${alpha.length} present as standalone words`);

// How many distinct speakers can each covered word be had from? A single
// consistent voice across the app matters more than raw coverage.
const spk = new Map();
for (const r of rows) spk.set(r.speaker, (spk.get(r.speaker) || 0) + 1);
const top = [...spk.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
console.log("\nTop speakers by utterance count:", top.map(([s, n]) => `${s}:${n}`).join(" "));

const covered = [...tiers.exact, ...tiers.word];
const singleSpeakerBest = top.map(([s]) => {
  const idx = new Set(rows.map((r, i) => (r.speaker === s ? i : -1)).filter((i) => i >= 0));
  return [s, covered.filter((e) => e.hits.some((h) => idx.has(h))).length];
}).sort((a, b) => b[1] - a[1]);
console.log("Coverage if restricted to ONE speaker:",
  singleSpeakerBest.slice(0, 5).map(([s, n]) => `${s}:${n}`).join(" "));

fs.writeFileSync(
  path.join(__dirname, "corpus_coverage.json"),
  JSON.stringify({
    corpus: { utterances: rows.length, speakers: speakers.size },
    exact: tiers.exact.map((e) => ({ id: e.id, text: e.text, say: e.say, hits: e.hits.slice(0, 5) })),
    word: tiers.word.map((e) => ({ id: e.id, text: e.text, say: e.say, hits: e.hits.slice(0, 5) })),
    none: tiers.none.map((e) => ({ id: e.id, text: e.text, say: e.say, sources: e.sources })),
  }, null, 2) + "\n"
);
console.log("\nWrote tools/corpus_coverage.json");
