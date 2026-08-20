import SiteBody from "@/components/SiteBody";
import { getContentJa } from "@/lib/getContent";

/* 検索エンジンから完全に除外する（SEOへの影響をゼロにする） */
export const metadata = {
  title: "Takumi House — 社内確認用（日本語版）",
  description: "Takumi House 公式サイトの日本語ミラーです。社内およびパートナー確認用。",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {},
};

export default function JaPage() {
  return (
    <div lang="ja" className="lang-ja">
      <div className="ja-banner">
        このページは社内・パートナー確認用の日本語版です。公開サイトは
        <a href="/">英語版</a>
        のみです。
      </div>
      <SiteBody c={getContentJa()} />
    </div>
  );
}
