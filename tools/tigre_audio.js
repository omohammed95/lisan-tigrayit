/*
 * Single source of truth for turning a Tigre string into its audio clip id.
 *
 * Both the offline generator (tools/) and the browser use these two functions.
 * build_manifest.js embeds them into audio-manifest.js via Function.prototype
 * .toString(), so the app can never drift out of sync with the generated files.
 */

// Whitespace is the only thing worth folding: the same word indented
// differently in data.js must not produce two clips. Punctuation stays —
// VITS uses it for prosody, and "ከፎ ህሌከ?" should sound like a question.
function tgNormalize(s) {
  return String(s).replace(/\s+/g, " ").trim();
}

// FNV-1a, 32 bit. Not cryptographic — just a short stable filename.
// build_manifest.js hard-fails on a collision, so 8 hex chars is enough.
function tgAudioId(s) {
  let h = 0x811c9dc5;
  const str = tgNormalize(s);
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

if (typeof module !== "undefined") module.exports = { tgNormalize, tgAudioId };
