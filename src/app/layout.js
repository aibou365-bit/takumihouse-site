import "./globals.css";

const DESCRIPTION =
  "Japan's finest kominka — found, restored, and delivered. Fully remote, fully in English.";

export const metadata = {
  metadataBase: new URL("https://takumihouse.jp"),
  title: "Takumi House — Authentic Japanese Craftsmanship",
  description:
    "We find, restore, and deliver Japan's finest kominka — traditional farmhouses built by master craftspeople — to global buyers. No Japanese required. No visit to Japan required.",
  keywords: [
    "kominka",
    "Japanese traditional house",
    "akiya",
    "Japan property for foreigners",
    "kominka renovation",
    "buy a house in Japan",
  ],
  openGraph: {
    title: "Takumi House — Authentic Japanese Craftsmanship",
    description: DESCRIPTION,
    url: "https://takumihouse.jp",
    siteName: "Takumi House",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Takumi House — Ancient homes, reimagined for the world.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takumi House — Authentic Japanese Craftsmanship",
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "https://takumihouse.jp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Takumi House",
  url: "https://takumihouse.jp",
  email: "hello@takumihouse.jp",
  image: "https://takumihouse.jp/og.jpg",
  description:
    "Turnkey acquisition and renovation of Japanese kominka (traditional farmhouses) for international buyers. Fully remote, fully in English.",
  areaServed: "JP",
  availableLanguage: ["en"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Shippori+Mincho:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
