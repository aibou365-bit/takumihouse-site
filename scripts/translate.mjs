/**
 * Takumi House — 日本語ミラー自動翻訳スクリプト
 *
 * ビルド前(prebuild)に実行され、src/lib/content.js の英語テキストを
 * 走査して、前回から変更のあった項目だけを Claude API で翻訳する。
 *
 * 出力:
 *   src/lib/content.ja.json           翻訳結果（Git管理する）
 *   src/lib/.translation-cache.json   ハッシュキャッシュ（Git管理する）
 *
 * 手動で訳語を固定したい場合は src/lib/content.ja.override.json に
 * 同じキーで値を書けば、自動翻訳より優先される。
 */

import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const LIB = path.join(ROOT, "src", "lib");
const CONTENT_JS = path.join(LIB, "content.js");
const OUT_JSON = path.join(LIB, "content.ja.json");
const CACHE_JSON = path.join(LIB, ".translation-cache.json");
const OVERRIDE_JSON = path.join(LIB, "content.ja.override.json");

const MODEL = "claude-sonnet-4-5";
const API_URL = "https://api.anthropic.com/v1/messages";
const BATCH_SIZE = 25;

/* 翻訳しないキー（URL・記号・固有名詞など） */
const SKIP_KEYS = new Set(["url", "href", "icon", "num", "kanji", "em"]);

/* 訳語を固定したい用語 */
const GLOSSARY = `
- kominka → 古民家（「コミンカ」とカタカナにしない）
- akiya / akiya bank → 空き家 / 空き家バンク
- Takumi House / AiBou / NUMBER PLUS / Century → 訳さずそのまま
- Discovery Call → Discovery Call（訳さない）
- Property Report → Property Report（訳さない）
- Turnkey Renovation Package → ターンキー・リノベーションパッケージ
- brokerage commission → 仲介手数料
- acquisition support fee → 取得サポート費用
- design fee → 設計料
- licensed builder → 宅建業免許を持つ施工会社
- handover → 引き渡し
- craftspeople → 職人
`.trim();

function sha(str) {
  return crypto.createHash("sha256").update(str).digest("hex").slice(0, 16);
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    return fallback;
  }
}

/* content.js を再帰的に走査して "パス" → "英文" のフラットな辞書にする */
function flatten(node, prefix, out) {
  if (typeof node === "string") {
    const key = prefix[prefix.length - 1];
    if (SKIP_KEYS.has(key)) return;
    if (!node.trim()) return;
    // URL や記号だけの文字列は翻訳しない
    if (/^https?:\/\//.test(node)) return;
    if (!/[A-Za-z]/.test(node)) return;
    out[prefix.join(".")] = node;
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((v, i) => flatten(v, [...prefix, String(i)], out));
    return;
  }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      flatten(v, [...prefix, k], out);
    }
  }
}

async function translateBatch(entries, apiKey) {
  const payload = entries.map(([key, text]) => ({ key, text }));

  const system = `あなたは日本の不動産・建築事業に精通したプロの翻訳者です。
英語のWebサイトのテキストを、自然で読みやすい日本語に翻訳してください。

# 用語集（必ず従うこと）
${GLOSSARY}

# ルール
- 直訳ではなく、日本語として自然な表現にする
- 見出しは簡潔に、本文は丁寧語（です・ます）で
- 数値・金額・単位は原文のまま保持する
- 改行や記号（·、—、/ など）は原文の構造を維持する
- 出力は JSON のみ。前置き・後書き・マークダウンのコードブロックは一切含めない

# 出力形式
{"キー": "翻訳文", "キー": "翻訳文"}`;

  const user = `以下のJSONの各 text を日本語に翻訳し、key をそのまま維持したJSONオブジェクトで返してください。

${JSON.stringify(payload, null, 2)}`;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Claude API ${res.status}: ${body.slice(0, 400)}`);
  }

  const data = await res.json();
  const raw = data.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("")
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(raw);
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  /* content.js を動的import して全エクスポートを取得 */
  const mod = await import(pathToFileURL(CONTENT_JS).href);
  const source = {};
  for (const [k, v] of Object.entries(mod)) {
    if (k === "default") continue;
    source[k] = v;
  }

  const flat = {};
  flatten(source, [], flat);

  const cache = await readJson(CACHE_JSON, {});
  const existing = await readJson(OUT_JSON, {});
  const override = await readJson(OVERRIDE_JSON, {});

  /* 差分検出 */
  const todo = [];
  for (const [key, text] of Object.entries(flat)) {
    const hash = sha(text);
    if (cache[key] === hash && existing[key]) continue;
    todo.push([key, text]);
  }

  /* 削除された項目をクリーンアップ */
  const result = {};
  for (const key of Object.keys(flat)) {
    if (existing[key]) result[key] = existing[key];
  }

  if (todo.length === 0) {
    console.log("[translate] 変更なし。翻訳をスキップします。");
  } else if (!apiKey) {
    console.warn(
      `[translate] ANTHROPIC_API_KEY が未設定のため ${todo.length} 件の翻訳をスキップしました。既存の翻訳をそのまま使用します。`
    );
  } else {
    console.log(`[translate] ${todo.length} 件を翻訳します...`);
    for (let i = 0; i < todo.length; i += BATCH_SIZE) {
      const batch = todo.slice(i, i + BATCH_SIZE);
      const translated = await translateBatch(batch, apiKey);
      for (const [key, text] of batch) {
        if (translated[key]) {
          result[key] = translated[key];
          cache[key] = sha(text);
        }
      }
      console.log(
        `[translate]   ${Math.min(i + BATCH_SIZE, todo.length)}/${todo.length} 完了`
      );
    }
  }

  /* override を最優先で適用 */
  for (const [key, value] of Object.entries(override)) {
    result[key] = value;
  }

  await fs.writeFile(OUT_JSON, JSON.stringify(result, null, 2) + "\n", "utf8");
  await fs.writeFile(CACHE_JSON, JSON.stringify(cache, null, 2) + "\n", "utf8");

  console.log(`[translate] 完了。${Object.keys(result).length} 項目を書き出しました。`);
}

main().catch((err) => {
  console.error("[translate] エラー:", err.message);
  console.error("[translate] ビルドは継続します（既存の翻訳を使用）。");
  process.exit(0);
});
