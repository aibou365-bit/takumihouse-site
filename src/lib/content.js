export const nav = {
  links: [
    { label: "Properties", href: "#properties" },
    { label: "Team", href: "#team" },
    { label: "How It Works", href: "#how" },
    { label: "Renovations", href: "#renovations" },
    { label: "Learn", href: "#learn" },
  ],
  cta: "Book a Call",
};

export const hero = {
  eyebrow: "Authentic Japanese Craftsmanship",
  line1: "Ancient homes,",
  line2: "reimagined",
  line3: "for the world.",
  desc: "We find, restore, and deliver Japan's finest kominka — traditional farmhouses built by master craftspeople — to global buyers. No Japanese required. No visit to Japan required.",
  primary: "Book a Free Discovery Call",
  ghost: "See Renovations",
  scroll: "Scroll",
  before: "Before",
  after: "After Renovation",
  badge: "Takumi Restoration",
};

export const stats = [
  { num: "100+", label: "Years of Craft Heritage" },
  { num: "¥0", label: "Acquisition Support Fee" },
  { num: "100%", label: "Remote-Ready Process" },
  { num: "3", label: "Experts. One Team." },
];

export const properties = {
  eyebrow: "Properties",
  title1: "Find your",
  title2: "kominka.",
  lead: "Browse our curated listings — or explore the regional akiya banks below. Found a property elsewhere? Send us the link. We handle everything from there.",
  curatedLabel: "Curated Listings — Takumi House Partner Properties",
  card: {
    tag: "Coming Soon · Yamanashi Prefecture",
    name: "Traditional Farmhouse · c.1890",
    desc: "280㎡ · Mountain setting · Structural survey complete. Full renovation scope available on request.",
    priceLabel: "Property price",
    price: "¥12M",
    enquire: "Enquire",
  },
  empty: "More listings coming soon",
  banksLabel: "Regional Akiya Banks — Our Coverage Area",
  banksLead:
    "We currently operate across Greater Tokyo, Yamanashi, and Shizuoka — the regions our licensed builder covers directly. Every property we take on receives an on-site inspection by our own team, never a subcontractor. Browse the official municipal akiya banks below, and send us the link to anything that catches your eye. We handle all Japanese communication, negotiation, site inspection, and purchase support.",
  bannerTitle: "Found a property on an akiya bank or another site?",
  bannerDesc: "Send us the link. We handle negotiation, inspection, purchase, and renovation — end to end.",
  bannerCta: "Send Us a Link",
};

/**
 * 空き家バンクへのリンク。
 * 各自治体の個別サイトはURL変更が多くリンク切れしやすいため、
 * 国土交通省「全国版 空き家・空き地バンク」のモデル事業である
 * LIFULL HOME'S 空き家バンクの都道府県ページに統一している。
 */
export const bankLinks = [
  {
    region: "Tokyo · Kanagawa",
    items: [
      { label: "Tokyo", url: "https://www.homes.co.jp/akiyabank/kanto/tokyo/" },
      { label: "Kanagawa", url: "https://www.homes.co.jp/akiyabank/kanto/kanagawa/" },
    ],
  },
  {
    region: "Saitama · Chiba",
    items: [
      { label: "Saitama", url: "https://www.homes.co.jp/akiyabank/kanto/saitama/" },
      { label: "Chiba", url: "https://www.homes.co.jp/akiyabank/kanto/chiba/" },
    ],
  },
  {
    region: "Northern Kanto",
    items: [
      { label: "Ibaraki", url: "https://www.homes.co.jp/akiyabank/kanto/ibaraki/" },
      { label: "Tochigi", url: "https://www.homes.co.jp/akiyabank/kanto/tochigi/" },
      { label: "Gunma", url: "https://www.homes.co.jp/akiyabank/kanto/gunma/" },
    ],
  },
  {
    region: "Yamanashi · Shizuoka",
    items: [
      { label: "Yamanashi", url: "https://www.homes.co.jp/akiyabank/hokuriku/yamanashi/" },
      { label: "Shizuoka", url: "https://www.homes.co.jp/akiyabank/tokai/shizuoka/" },
    ],
  },
];

export const team = {
  eyebrow: "The Team",
  title1: "Three experts.",
  title2: "One seamless process.",
  cards: [
    {
      role: "Digital · Marketing · Project Management",
      company: "AiBou",
      name: "Yuta Irisawa",
      desc: "Web engineer and digital marketer based in Japan. Handles all client-facing digital work — from SEO and content to project coordination and English documentation. The bridge between Japan and the world.",
    },
    {
      role: "Construction · Property · Quality",
      company: "NUMBER PLUS",
      name: "Ryuta Suzuki",
      desc: "A Japanese construction company holding a real estate brokerage licence, with certified transaction specialists on staff. Leads all site inspections, renovation work, and purchase documentation. The only platform with a licensed builder at its core.",
    },
    {
      role: "Client Relations · North America",
      company: "Century",
      name: "Chris Oates",
      desc: "Canada-based construction business owner with deep knowledge of the Vancouver luxury market. Leads all client conversations in English. Your direct point of contact from first call to handover.",
    },
  ],
};

export const craft = {
  text: '"Built to last a thousand years. Restored for the next."',
  kanji: "職人技",
};

export const howItWorks = {
  eyebrow: "Process",
  title1: "From first call",
  title2: "to handover.",
  desc: "A fully guided journey — from finding the right property to receiving the keys. No Japanese required. No visit to Japan required. We handle everything.",
  cta: "Start with a Free Call",
  steps: [
    {
      title: "Free Discovery Call",
      body: "30–45 minutes. We learn your goals, budget, and vision. We also explain how Takumi House works: this is a turnkey service covering acquisition, design, and renovation as one package. No obligation.",
    },
    {
      title: "Property Search",
      body: "Browse our curated listings or explore the regional akiya banks. Found something elsewhere? Send us the link — we handle all Japanese communication, negotiation, and legal checks. You just choose.",
    },
    {
      title: "Property Report",
      body: "NUMBER PLUS conducts a full on-site inspection. We deliver a detailed English report covering legal checks, structural assessment, cost estimates, renovation direction, and ROI projection — before you commit to purchase.",
      note: "¥150,000 – ¥300,000 (paid upfront via Stripe)",
    },
    {
      title: "Purchase & Contract",
      body: "We handle all purchase documentation. Fully remote via DocuSign. No visit to Japan required. The statutory brokerage commission (3% + ¥60,000 + tax, capped at ¥330,000 for properties under ¥8M) is paid to NUMBER PLUS. We charge no separate acquisition support fee — our brokerage licence is held within the partnership, so the statutory commission is the only acquisition cost you pay.",
      note: "Acquisition support fee: ¥0",
    },
    {
      title: "Design & Renovation",
      body: "The design agreement is signed alongside the purchase agreement. Master craftspeople restore your kominka. You receive design drawings, specifications, and a VR walkthrough of the completed space — before construction begins.",
      note: "Design fee ¥500,000 · Turnkey renovation from ¥44,000,000",
    },
    {
      title: "Handover",
      body: "Your fully restored kominka is handed over. For those who want Airbnb management support, we offer that as an optional service.",
    },
  ],
};

export const renovations = {
  eyebrow: "Portfolio",
  title1: "Restorations by",
  title2: "NUMBER PLUS",
  cards: [
    {
      tag: "Yamanashi · Farmhouse",
      title: "The Tanaka Kominka",
      price: "Property: ¥12M / Renovation: ¥44M",
      meta: "Built 1887 · 280㎡ · 5 months",
    },
    {
      tag: "Yamanashi · Mountain Retreat",
      title: "Fuji Farmhouse",
      price: "Property: ¥8M / Renovation: ¥44M",
      meta: "Built 1923 · 190㎡ · 4 months",
    },
    {
      tag: "Shizuoka · Estate Conversion",
      title: "Izu Residence",
      price: "Property: ¥21M / Renovation: ¥44M",
      meta: "Built 1901 · 420㎡ · 7 months",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why Takumi House",
  title1: "Everything your competitors",
  title2: "can't offer.",
  cards: [
    {
      icon: "license",
      title: "Licensed Builder On Your Team",
      body: "Every competitor outsources renovation to unknown contractors. We have NUMBER PLUS — a licensed Japanese builder — at the core of every project. Same team, every time.",
    },
    {
      icon: "no-extra-fee",
      title: "No Separate Acquisition Fee",
      body: "Other services charge a facilitation fee on top of the brokerage commission, because their brokerage is a third party. Ours is held within the partnership. You pay the statutory commission, and nothing more.",
    },
    {
      icon: "vr",
      title: "VR Walkthrough Before Construction",
      body: "Every project includes a VR walkthrough of the completed space, delivered alongside design drawings — before a single nail is hammered. See exactly what you're getting.",
    },
    {
      icon: "three-experts",
      title: "One Point of Contact. Three Experts.",
      body: "You talk to Chris in English. Behind the scenes, a digital marketer, a licensed builder, and a North America market expert are coordinating every detail. Nothing falls through the cracks.",
    },
  ],
};

export const learn = {
  eyebrow: "Knowledge",
  title1: "Learn before",
  title2: "you commit.",
  featured: {
    tag: "Complete Guide",
    title: "How to Buy a Kominka in Japan: The Definitive Guide for Foreign Buyers",
    body: "Everything you need to know — legal requirements, costs, renovation process, and what to expect at each step. Updated 2026.",
    cta: "Read Guide",
  },
  cards: [
    {
      tag: "Legal",
      title: "Japan Property Law for Non-Residents",
      body: "Foreign ownership rights, visa requirements, and e-contract rules explained clearly.",
      cta: "Read",
    },
    {
      tag: "Tool",
      title: "ROI Calculator",
      body: "Enter property price, renovation budget, and your goals. Get an estimated return instantly.",
      cta: "Open Calculator",
    },
  ],
};

export const cta = {
  eyebrow: "Get Started",
  title1: "Your ",
  em: "kominka",
  title2: "is waiting.",
  sub: "Start with a free 30-minute Discovery Call. No pressure, no commitment — just an honest conversation about what's possible.",
  placeholder: "Your email address",
  button: "Book Free Call",
  note: "Or email us directly at hello@takumihouse.jp",
};

export const footer = {
  tagline: "Authentic Japanese kominka — found, restored, and delivered to global buyers.",
  cols: [
    {
      heading: "Services",
      links: [
        { label: "Browse Properties", href: "#properties" },
        { label: "How It Works", href: "#how" },
        { label: "Property Report", href: "#how" },
        { label: "Renovation Portfolio", href: "#renovations" },
        { label: "Airbnb Management (Optional)", href: "#how" },
      ],
    },
    {
      heading: "Learn",
      links: [
        { label: "Buyer's Guide", href: "#learn" },
        { label: "Legal Guide", href: "#learn" },
        { label: "ROI Calculator", href: "#learn" },
        { label: "Market Reports", href: "#learn" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "The Team", href: "#team" },
        { label: "NUMBER PLUS", href: "#team" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  copy: "© 2026 Takumi House · AiBou · All rights reserved.",
  privacy: "Privacy",
  terms: "Terms",
};
