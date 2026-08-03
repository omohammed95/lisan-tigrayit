#!/usr/bin/env node
/*
 * Collects every distinct Tigre string the app can display and writes the
 * worklist that generate_audio.py synthesizes from.
 *
 *   node tools/extract_tigre.js  ->  tools/tigre_strings.json
 *
 * Sources: ALPHA syllables, LEVELS[].words[].tg, DICTIONARY[].tg, and any
 * nested `tg` under GRAMMAR (items + worked examples).
 */

const fs = require("fs");
const path = require("path");
const { tgNormalize, tgAudioId } = require("./tigre_audio.js");

const ROOT = path.join(__dirname, "..");
const GEEZ = /[ሀ-፿]/;

function loadData() {
  const src = fs.readFileSync(path.join(ROOT, "data.js"), "utf8");
  const mod = { exports: {} };
  new Function(
    "module",
    "exports",
    src + "\n;module.exports={ALPHA,LEVELS,GRAMMAR,DICTIONARY};"
  )(mod, mod.exports);
  return mod.exports;
}

const { ALPHA, LEVELS, GRAMMAR, DICTIONARY } = loadData();

// id -> {id, text, say, sources:Set}
const found = new Map();

/*
 * What gets displayed is not always one utterance. `text` stays the exact
 * displayed string (it is what the app hashes to find the clip); `say` is what
 * the model is actually asked to read.
 */
function speakable(text) {
  let say = text;
  // Tatweel marks a bound suffix ("ـኦም" = "-om"); the model has no glyph for it.
  say = say.replace(/ـ/g, "");
  // "ሐዘነ/ገሀ" and "ላሃ / ሎሃ" are synonym lists — voice the primary form only,
  // otherwise the clip either reads the slash or slurs the variants together.
  say = say.split("/")[0];
  say = say.replace(/…/g, "");
  return tgNormalize(say);
}

function add(raw, source) {
  if (typeof raw !== "string") return;
  const text = tgNormalize(raw);
  // "—" placeholders and rows still awaiting their Tigre are skipped, as are
  // pedagogical arrows like "ገብእ → ይገብእ" that are two words, not one utterance.
  if (!text || !GEEZ.test(text) || text.includes("→")) return;
  const say = speakable(text);
  if (!say || !GEEZ.test(say)) return;
  const id = tgAudioId(text);
  if (!found.has(id)) found.set(id, { id, text, say, sources: new Set() });
  found.get(id).sources.add(source);
}

ALPHA.forEach((a) => a.g.forEach((ch) => add(ch, "alpha")));
LEVELS.forEach((l) => (l.words || []).forEach((w) => add(w.tg, "level")));
DICTIONARY.forEach((d) => add(d.tg, "dict"));

// GRAMMAR nests tg at sections[].items[].tg and sections[].examples[].tg;
// walking generically keeps this working if the shape gains another level.
(function walk(node) {
  if (Array.isArray(node)) return node.forEach(walk);
  if (!node || typeof node !== "object") return;
  for (const [k, v] of Object.entries(node)) {
    if (k === "tg") add(v, "grammar");
    else walk(v);
  }
})(GRAMMAR);

const entries = [...found.values()]
  .map((e) => ({ id: e.id, text: e.text, say: e.say, sources: [...e.sources].sort() }))
  .sort((a, b) => a.text.localeCompare(b.text));

// A collision would make two words share one clip — louder to fail here.
const byId = new Map();
for (const e of entries) {
  if (byId.has(e.id)) {
    console.error(
      `FATAL: hash collision ${e.id}: ${JSON.stringify(byId.get(e.id))} vs ${JSON.stringify(e.text)}`
    );
    process.exit(1);
  }
  byId.set(e.id, e.text);
}

const out = path.join(__dirname, "tigre_strings.json");
fs.writeFileSync(out, JSON.stringify(entries, null, 2) + "\n");

const bySource = {};
for (const e of entries) for (const s of e.sources) bySource[s] = (bySource[s] || 0) + 1;
console.log(`${entries.length} unique Tigre strings -> ${path.relative(ROOT, out)}`);
console.log("  by source:", bySource);
