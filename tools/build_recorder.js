#!/usr/bin/env node
/*
 * Generates tools/recorder.html — a self-contained page for recording the app's
 * pronunciation clips in your own voice.
 *
 *   node tools/build_recorder.js && open tools/recorder.html
 *
 * The word list is inlined rather than fetched, because a page opened over
 * file:// cannot fetch a sibling JSON (CORS), and requiring a server just to
 * read words aloud is friction that stops the recording ever happening.
 *
 * Recordings live in IndexedDB, so the tab can be closed and reopened mid-way.
 * "Export" downloads one JSON of base64 blobs which tools/import_recordings.js
 * turns into audio/<id>.mp3 — the same filenames the app already looks for.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const entries = JSON.parse(
  fs.readFileSync(path.join(__dirname, "tigre_strings.json"), "utf8")
);

// Record in the order the app needs them, not alphabetically: the alphabet is
// the pedagogical core and the shortest list, so it comes first and can be
// finished in one sitting.
const GROUPS = [
  ["alpha", "Alphabet — 25 consonants x 7 vowels"],
  ["level", "Level words — the learning path"],
  ["dict", "Dictionary"],
  ["grammar", "Grammar forms & examples"],
];

const seen = new Set();
const items = [];
for (const [group, label] of GROUPS) {
  for (const e of entries) {
    if (seen.has(e.id) || !e.sources.includes(group)) continue;
    seen.add(e.id);
    items.push({ id: e.id, text: e.text, say: e.say, group, groupLabel: label });
  }
}

const counts = Object.fromEntries(
  GROUPS.map(([g]) => [g, items.filter((i) => i.group === g).length])
);

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Record Tigre pronunciation</title>
<style>
 :root{--bg:#faf6f1;--surface:#fff;--pri:#d4451a;--ok:#1a7a4a;--soft:#9b8f84;--border:#ede5da;--text:#1a1a2e}
 *{box-sizing:border-box;margin:0;padding:0}
 body{font:16px/1.5 system-ui,sans-serif;background:var(--bg);color:var(--text);
      max-width:760px;margin:0 auto;padding:16px}
 h1{font-size:1.25rem;margin-bottom:2px}
 .sub{color:var(--soft);font-size:.85rem;margin-bottom:14px}
 .bar{height:8px;background:var(--border);border-radius:6px;overflow:hidden;margin:10px 0}
 .bar>i{display:block;height:100%;background:var(--ok);width:0;transition:width .2s}
 .card{background:var(--surface);border-radius:16px;padding:22px 18px;text-align:center;
       box-shadow:0 1px 8px rgba(0,0,0,.06);margin-bottom:12px}
 .grp{font-size:.72rem;text-transform:uppercase;letter-spacing:.6px;color:var(--soft);font-weight:800}
 .tg{font-size:3.6rem;font-weight:900;color:var(--pri);margin:10px 0;line-height:1.1;word-break:break-word}
 .say{font-size:.8rem;color:var(--soft);font-family:ui-monospace,monospace}
 .pos{font-size:.8rem;color:var(--soft);margin-top:6px}
 .btns{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:16px}
 button{font:inherit;font-weight:800;border:none;border-radius:12px;padding:12px 20px;
        cursor:pointer;background:var(--border);color:var(--text)}
 button:disabled{opacity:.4;cursor:default}
 .rec{background:var(--pri);color:#fff;min-width:190px}
 .rec.on{background:#c62828;animation:pulse 1s infinite}
 @keyframes pulse{50%{opacity:.65}}
 .done{color:var(--ok);font-weight:800;font-size:.85rem;min-height:1.2em;margin-top:10px}
 .hint{font-size:.78rem;color:var(--soft);text-align:center;margin-top:10px;line-height:1.7}
 kbd{background:var(--border);border-radius:5px;padding:1px 6px;font-size:.72rem;font-weight:700}
 .row{display:flex;gap:8px;align-items:center;justify-content:space-between;flex-wrap:wrap}
 .tools{background:var(--surface);border-radius:14px;padding:14px;box-shadow:0 1px 8px rgba(0,0,0,.06)}
 select{font:inherit;padding:8px;border-radius:10px;border:1px solid var(--border);background:#fff}
 .warn{background:#fff8e1;border:1px solid #e89b1c;border-radius:12px;padding:12px;font-size:.85rem;margin-bottom:12px}
</style></head><body>
<h1>Record Tigre pronunciation</h1>
<div class="sub">Speak each word once, clearly, in a quiet room. Progress is saved &mdash; you can stop and come back.</div>
<div class="warn" id="warn" hidden></div>
<div class="row">
  <select id="grp"></select>
  <span class="pos" id="stat"></span>
</div>
<div class="bar"><i id="prog"></i></div>
<div class="card">
  <div class="grp" id="glabel"></div>
  <div class="tg" id="tg">&mdash;</div>
  <div class="say" id="say"></div>
  <div class="pos" id="pos"></div>
  <div class="btns">
    <button id="prev">&lsaquo; Prev</button>
    <button id="rec" class="rec">Record</button>
    <button id="play" disabled>Play</button>
    <button id="next">Next &rsaquo;</button>
  </div>
  <div class="done" id="done"></div>
</div>
<div class="hint">
  <kbd>Space</kbd> start / stop recording &nbsp;&middot;&nbsp; <kbd>&rarr;</kbd> next &nbsp;&middot;&nbsp;
  <kbd>&larr;</kbd> previous &nbsp;&middot;&nbsp; <kbd>P</kbd> play back<br>
  Recording auto-advances to the next word. Re-record any word by going back to it.
</div>
<div class="tools" style="margin-top:14px">
  <div class="row">
    <div><b id="ndone">0</b> recorded of <b>${items.length}</b></div>
    <div style="display:flex;gap:8px">
      <button id="export">Export recordings</button>
      <button id="reset">Clear all</button>
    </div>
  </div>
  <div class="hint" style="text-align:left;margin-top:10px">
    Export downloads <code>tigre-recordings.json</code>. Put it in the project root and run
    <code>node tools/import_recordings.js tigre-recordings.json</code> to convert everything
    into <code>audio/</code>. You can export part-way through and again later &mdash; importing
    only adds or replaces what the file contains.
  </div>
</div>

<script>
const ITEMS = ${JSON.stringify(items)};
const COUNTS = ${JSON.stringify(counts)};
const GROUPS = ${JSON.stringify(GROUPS)};

/* ---------- storage: IndexedDB so a closed tab does not lose an hour ------- */
let db;
const openDB = () => new Promise((res, rej) => {
  const r = indexedDB.open("tigre-recordings", 1);
  r.onupgradeneeded = () => r.result.createObjectStore("clips");
  r.onsuccess = () => res(r.result);
  r.onerror = () => rej(r.error);
});
const put = (k, v) => new Promise((res, rej) => {
  const t = db.transaction("clips", "readwrite");
  t.objectStore("clips").put(v, k);
  t.oncomplete = res; t.onerror = () => rej(t.error);
});
const get = (k) => new Promise((res) => {
  const r = db.transaction("clips", "readonly").objectStore("clips").get(k);
  r.onsuccess = () => res(r.result); r.onerror = () => res(null);
});
const keys = () => new Promise((res) => {
  const r = db.transaction("clips", "readonly").objectStore("clips").getAllKeys();
  r.onsuccess = () => res(r.result || []); r.onerror = () => res([]);
});
const clearAll = () => new Promise((res) => {
  const t = db.transaction("clips", "readwrite");
  t.objectStore("clips").clear(); t.oncomplete = res;
});

/* ---------- recording ----------------------------------------------------- */
let stream, recorder, chunks = [], recording = false, mime = "";
let idx = 0, filter = "all", recorded = new Set();

const $ = (id) => document.getElementById(id);
const view = () => filter === "all" ? ITEMS : ITEMS.filter(i => i.group === filter);

function pickMime() {
  for (const m of ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"])
    if (MediaRecorder.isTypeSupported(m)) return m;
  return "";
}

async function ensureMic() {
  if (stream) return true;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { channelCount: 1, echoCancellation: false, noiseSuppression: true, autoGainControl: true }
    });
    mime = pickMime();
    return true;
  } catch (e) {
    $("warn").hidden = false;
    $("warn").textContent = "Microphone unavailable: " + e.message +
      ". If this page was opened from a file:// path and your browser blocks it, run "
      + "python3 -m http.server 8900 in the project and open http://localhost:8900/tools/recorder.html instead.";
    return false;
  }
}

async function toggleRecord() {
  if (recording) { recorder.stop(); return; }
  if (!await ensureMic()) return;
  chunks = [];
  recorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
  recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  recorder.onstop = async () => {
    recording = false;
    $("rec").classList.remove("on"); $("rec").textContent = "Record";
    const blob = new Blob(chunks, { type: mime || "audio/webm" });
    const item = view()[idx];
    await put(item.id, { blob, mime: blob.type, text: item.text, say: item.say });
    recorded.add(item.id);
    $("done").textContent = "\\u2713 saved";
    $("play").disabled = false;
    render();
    setTimeout(() => { if (idx < view().length - 1) { idx++; render(); } }, 320);
  };
  recorder.start();
  recording = true;
  $("rec").classList.add("on"); $("rec").textContent = "Stop (recording\\u2026)";
  $("done").textContent = "";
}

async function playBack() {
  const item = view()[idx];
  const rec = await get(item.id);
  if (!rec) return;
  const a = new Audio(URL.createObjectURL(rec.blob));
  a.play().catch(() => {});
}

/* ---------- export -------------------------------------------------------- */
const blobToB64 = (blob) => new Promise((res) => {
  const r = new FileReader();
  r.onload = () => res(String(r.result).split(",")[1]);
  r.readAsDataURL(blob);
});

async function exportAll() {
  const ks = await keys();
  if (!ks.length) return alert("Nothing recorded yet.");
  $("export").textContent = "Exporting\\u2026";
  const out = { created: new Date().toISOString(), clips: {} };
  for (const k of ks) {
    const rec = await get(k);
    out.clips[k] = { mime: rec.mime, text: rec.text, say: rec.say, data: await blobToB64(rec.blob) };
  }
  const url = URL.createObjectURL(new Blob([JSON.stringify(out)], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url; a.download = "tigre-recordings.json";
  // The anchor has to be in the document: a detached element's click() is
  // ignored for downloads in several browsers.
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  $("export").textContent = "Export recordings";
}

/* ---------- render -------------------------------------------------------- */
function render() {
  const list = view();
  if (idx >= list.length) idx = Math.max(0, list.length - 1);
  const item = list[idx];
  if (!item) return;
  $("glabel").textContent = item.groupLabel;
  $("tg").textContent = item.text;
  $("say").textContent = item.say !== item.text ? "spoken as: " + item.say : "";
  $("pos").textContent = (idx + 1) + " of " + list.length;
  $("done").textContent = recorded.has(item.id) ? "\\u2713 recorded" : "";
  $("play").disabled = !recorded.has(item.id);
  $("prev").disabled = idx === 0;
  $("next").disabled = idx >= list.length - 1;
  const n = list.filter(i => recorded.has(i.id)).length;
  $("prog").style.width = (list.length ? (n / list.length) * 100 : 0) + "%";
  $("stat").textContent = n + " / " + list.length + " done in this group";
  $("ndone").textContent = recorded.size;
}

(async () => {
  db = await openDB();
  recorded = new Set(await keys());
  const sel = $("grp");
  sel.innerHTML = '<option value="all">Everything (' + ITEMS.length + ')</option>' +
    GROUPS.map(([g, l]) => '<option value="' + g + '">' + l + ' (' + (COUNTS[g] || 0) + ')</option>').join("");
  sel.value = "alpha"; filter = "alpha";   // start where the value is
  sel.onchange = () => { filter = sel.value; idx = 0; render(); };
  $("rec").onclick = toggleRecord;
  $("play").onclick = playBack;
  $("next").onclick = () => { if (idx < view().length - 1) { idx++; render(); } };
  $("prev").onclick = () => { if (idx > 0) { idx--; render(); } };
  $("export").onclick = exportAll;
  $("reset").onclick = async () => {
    if (!confirm("Delete every recording stored in this browser?")) return;
    await clearAll(); recorded = new Set(); render();
  };
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "SELECT") return;
    if (e.code === "Space") { e.preventDefault(); toggleRecord(); }
    else if (e.code === "ArrowRight") { if (idx < view().length - 1) { idx++; render(); } }
    else if (e.code === "ArrowLeft") { if (idx > 0) { idx--; render(); } }
    else if (e.key.toLowerCase() === "p") playBack();
  });
  render();
})();
</script></body></html>
`;

const out = path.join(__dirname, "recorder.html");
fs.writeFileSync(out, html);
console.log(`Wrote ${path.relative(ROOT, out)} — ${items.length} items`);
console.log("  by group:", counts);
