#!/usr/bin/env node
/*
 * Builds tools/audition-mms/compare.html — the same words rendered by each
 * engine, side by side, with the audio inlined so the file can be opened
 * straight from disk.
 *
 *   node tools/build_compare.js
 */

const fs = require("fs");
const path = require("path");
const { tgAudioId } = require("./tigre_audio.js");

const ROOT = path.join(__dirname, "..");
const MMS = path.join(__dirname, "audition-mms");
const meta = JSON.parse(fs.readFileSync(path.join(MMS, "meta.json"), "utf8"));

const ENGINES = [
  ["tigre", "Tigre model (tuned)", "BeitTigreAI/tigre-vits — the one you have been hearing"],
  ["mms-tir", "Tigrinya", "facebook/mms-tts-tir — closest living relative of Tigre"],
  ["mms-amh", "Amharic", "facebook/mms-tts-amh — best-resourced of the three"],
];

const b64 = (f) => (fs.existsSync(f) ? fs.readFileSync(f).toString("base64") : null);

function clipFor(engine, w) {
  if (engine === "tigre") return b64(path.join(ROOT, "audio", tgAudioId(w.tg) + ".mp3"));
  return b64(path.join(MMS, engine, w.slug + ".mp3"));
}

const rows = meta.words.map((w) => {
  const cells = ENGINES.map(([id]) => {
    const data = clipFor(id, w);
    return data
      ? `<td><audio controls preload="none" src="data:audio/mpeg;base64,${data}"></audio></td>`
      : `<td class="none">no clip</td>`;
  }).join("");
  return `<tr><th><div class="tg">${w.tg}</div><div class="rom">${w.roman}</div></th>${cells}</tr>`;
}).join("\n");

const html = `<!doctype html><meta charset="utf-8">
<title>Tigre / Tigrinya / Amharic voice comparison</title>
<style>
 body{font:16px/1.6 system-ui,sans-serif;max-width:1000px;margin:2rem auto;padding:0 1rem;
      background:#faf6f1;color:#1a1a2e}
 h1{font-size:1.5rem;margin-bottom:.25rem}
 .sub{color:#5a5a6e;margin-bottom:1.5rem}
 table{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;
       box-shadow:0 1px 8px rgba(0,0,0,.06)}
 th,td{padding:10px 12px;border-bottom:1px solid #ede5da;text-align:left;vertical-align:middle}
 thead th{background:#d4451a;color:#fff;font-size:.85rem}
 thead th small{display:block;font-weight:400;opacity:.85;font-size:.72rem;line-height:1.3}
 tbody th{width:190px}
 .tg{font-size:1.35rem;font-weight:800;color:#d4451a}
 .rom{font-size:.75rem;color:#9b8f84;font-family:ui-monospace,monospace}
 audio{width:100%;min-width:180px}
 .none{color:#9b8f84;font-size:.8rem}
 .q{background:#fff8e1;border:1px solid #e89b1c;border-radius:12px;padding:14px 16px;margin:1.5rem 0}
</style>
<h1>Which voice reads your Tigre best?</h1>
<div class="sub">Same words, three models. All Ge'ez-script languages.</div>
<div class="q"><b>Note on the romanization column.</b> The Tigrinya and Amharic
models do not read Ge'ez — they take Latin text, so each word is romanized first
(that is the grey text). If a word sounds wrong, check the romanization: a bad
transliteration is fixable, a bad voice is not. The first three rows are single
alphabet letters, which is most of what the app needs.</div>
<table>
<thead><tr><th>Word</th>${ENGINES.map(([, n, d]) => `<th>${n}<small>${d}</small></th>`).join("")}</tr></thead>
<tbody>
${rows}
</tbody></table>
`;

const out = path.join(MMS, "compare.html");
fs.writeFileSync(out, html);
console.log(`Wrote ${path.relative(ROOT, out)} (${(fs.statSync(out).size / 1024) | 0} kB)`);
