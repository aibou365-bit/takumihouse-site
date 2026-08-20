import * as en from "./content";
import ja from "./content.ja.json";

/** content.js の全エクスポートを1つのオブジェクトにまとめる */
function collect() {
  const out = {};
  for (const [k, v] of Object.entries(en)) {
    if (k === "default") continue;
    out[k] = v;
  }
  return out;
}

/** 翻訳辞書（"nav.links.0.label" 形式のキー）を当てながら再帰的に複製する */
function apply(node, prefix, dict) {
  if (typeof node === "string") {
    const key = prefix.join(".");
    return dict[key] ?? node;
  }
  if (Array.isArray(node)) {
    return node.map((v, i) => apply(v, [...prefix, String(i)], dict));
  }
  if (node && typeof node === "object") {
    const out = {};
    for (const [k, v] of Object.entries(node)) {
      out[k] = apply(v, [...prefix, k], dict);
    }
    return out;
  }
  return node;
}

/** 英語版のコンテンツ */
export function getContentEn() {
  return collect();
}

/**
 * 日本語版のコンテンツ。
 * content.ja.json に翻訳がある項目だけ差し替え、
 * 未翻訳の項目は英語のままフォールバックする。
 */
export function getContentJa() {
  return apply(collect(), [], ja);
}
