export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/ja", "/ja/"],
      },
    ],
    sitemap: "https://takumihouse.jp/sitemap.xml",
    host: "https://takumihouse.jp",
  };
}
