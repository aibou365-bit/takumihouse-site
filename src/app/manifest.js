export default function manifest() {
  return {
    name: "Takumi House — Authentic Japanese Craftsmanship",
    short_name: "Takumi House",
    description:
      "Japan's finest kominka — found, restored, and delivered. Fully remote, fully in English.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1208",
    theme_color: "#1a1208",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
