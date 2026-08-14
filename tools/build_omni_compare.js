#!/usr/bin/env node
/*
 * Builds tools/omni-audition/compare.html — OmniVoice's adult voices against
 * the old tigre-vits clip for the same word, audio inlined so the file opens
 * straight from disk.
 *
 *   node tools/build_omni_compare.js
 */

const fs = require("fs");
const path = require("path");
const { tgAudioId } = require("./tigre_audio.js");

const ROOT = path.join(__dirname, "..");
const DIR = path.join(__dirname, "omni-audition");
const meta = JSON.parse(fs.readFileSync(path.join(DIR, "meta.json"), "utf8"));

const b64 = (f) => (fs.existsSync(f) ? fs.readFileSync(f).toString("base64") : null);
const cell = (data) => data
  ? `<td><audio controls preload="none" src="data:audio/mpeg;base64,${data}"></audio></td>`
  : `<td class="none">—</td>`;

const voiceKeys = Object.keys(meta.voices);
const head = ["Old model"].concat(voiceKeys.map((k) => meta.voices[k]));

const rows = meta.words.map((w) => {
  const old = b64(path.join(ROOT, "audio", tgAudioId(w.tg) + ".mp3"));
  const cells = [cell(old)].concat(
    voiceKeys.map((k) => cell(b64(path.join(DIR, k, w.slug + ".mp3"))))
  ).join("");
  return `<tr><th><div class="tg">${w.tg}</div></th>${cells}</tr>`;
}).join("\n");

fs.writeFileSync(path.join(DIR, "compare.html"), `<!doctype html><meta charset="utf-8">
<title>OmniVoice vs tigre-vits</title>
<style>
 body{font:16px/1.6 system-ui,sans-serif;max-width:1150px;margin:2rem auto;padding:0 1rem;
      background:#faf6f1;color:#1a1a2e}
 h1{font-size:1.5rem;margin-bottom:.25rem}
 .sub{color:#5a5a6e;margin-bottom:1.25rem}
 table{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;
       box-shadow:0 1px 8px rgba(0,0,0,.06)}
 th,td{padding:9px 10px;border-bottom:1px solid #ede5da;text-align:left;vertical-align:middle}
 thead th{background:#d4451a;color:#fff;font-size:.8rem;font-weight:700}
 thead th:first-child{background:#8a2f11}
 tbody th{width:150px}
 .tg{font-size:1.4rem;font-weight:800;color:#d4451a}
 audio{width:100%;min-width:165px}
 .none{color:#9b8f84}
 .q{background:#fff8e1;border:1px solid #e89b1c;border-radius:12px;padding:14px 16px;margin:1.25rem 0}
</style>
<h1>OmniVoice vs the old model</h1>
<div class="sub">Same words. First column is what you already rejected, for reference.</div>
<div class="q"><b>The first four rows are single alphabet letters</b> — 175 of the
761 clips, and where every previous attempt failed. If those are clear, the app
works. Judge the letters before the sentence.</div>
<table>
<thead><tr><th>Word</th>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
<tbody>
${rows}
</tbody></table>
`);
console.log("Wrote tools/omni-audition/compare.html");
