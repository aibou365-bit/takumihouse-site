<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## ローカルビルドの注意

prebuild の翻訳スクリプトは content.ja.json（日本語ミラー）を再生成する。
ANTHROPIC_API_KEY が読めないと翻訳をスキップするが、
ビルドはエラーにならず成功するため気づきにくい。
その場合 content.ja.json が古い訳と新しい英語が混ざった状態で上書きされる。

ビルド後は git diff で content.ja.json を確認すること。
