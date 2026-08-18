import { MetadataRoute } from "next";

const BASE_URL = "https://www.japantrippicks.com";
const LAST_UPDATED = new Date("2026-08-12");

const ARTICLE_ROUTES: { slug: string; priority?: number }[] = [
  // Gourmet
  { slug: "ramen", priority: 0.9 },
  { slug: "kansai-ramen", priority: 0.85 },
  { slug: "shibuya-yakiniku", priority: 0.8 },
  { slug: "tokyo-yakiniku", priority: 0.85 },
  { slug: "osaka-gourmet", priority: 0.8 },
  { slug: "conrad-osaka", priority: 0.85 },
  { slug: "nishinomiya-gardens", priority: 0.8 },
  { slug: "sanda-soba", priority: 0.8 },
  { slug: "ginza-apollo", priority: 0.8 },
  { slug: "futakotamagawa", priority: 0.8 },
  { slug: "steak-zen", priority: 0.8 },
  { slug: "shin-okubo", priority: 0.8 },
  { slug: "utsunomiya-gyoza", priority: 0.8 },
  // Snacks
  { slug: "mister-donut", priority: 0.8 },
  { slug: "tokyo-cookies", priority: 0.8 },
  { slug: "takeout-cake", priority: 0.85 },
  // Cafés
  { slug: "cafe", priority: 0.9 },
  { slug: "kiyosumi-cafe", priority: 0.8 },
  { slug: "ikejiri-cafe", priority: 0.8 },
  { slug: "shibuya-cafe", priority: 0.8 },
  { slug: "bolt-uehara", priority: 0.8 },
  { slug: "daikanyama-cafe", priority: 0.8 },
  { slug: "nakameguro-cafe", priority: 0.8 },
  { slug: "shimokitazawa-cafe", priority: 0.8 },
  { slug: "kobe-cafe", priority: 0.8 },
  { slug: "shukugawa", priority: 0.8 },
  { slug: "isehara-gelato", priority: 0.8 },
  // Spots
  { slug: "spot", priority: 0.9 },
  { slug: "ajisai", priority: 0.85 },
  { slug: "tokyo-tower", priority: 0.85 },
  { slug: "skytree", priority: 0.85 },
  { slug: "tokyo-disney-around", priority: 0.85 },
  { slug: "ueno-zoo", priority: 0.8 },
  { slug: "showa-kinen-park", priority: 0.8 },
  { slug: "artbar-tokyo", priority: 0.8 },
  { slug: "koyo", priority: 0.8 },
  { slug: "museum", priority: 0.8 },
  { slug: "hakone", priority: 0.9 },
  { slug: "hokkaido", priority: 0.9 },
  { slug: "hikone", priority: 0.8 },
  { slug: "utsunomiya", priority: 0.8 },
  { slug: "kagawa", priority: 0.85 },
  { slug: "kochi", priority: 0.85 },
  { slug: "kamikochi", priority: 0.85 },
  { slug: "ine", priority: 0.85 },
  { slug: "rokko-arima", priority: 0.85 },
  { slug: "kobe-herb-garden", priority: 0.85 },
  { slug: "katsunuma", priority: 0.85 },
  { slug: "shirahama", priority: 0.85 },
  { slug: "chigasaki", priority: 0.85 },
  // Travel Prep
  { slug: "japan-esim", priority: 0.85 },
  { slug: "tokyo-subway-ticket", priority: 0.85 },
  { slug: "narita-airport-access", priority: 0.85 },
  { slug: "haneda-airport-access", priority: 0.85 },
];

const STATIC_ROUTES: { slug: string; priority?: number; changeFrequency?: "monthly" | "yearly" }[] = [
  { slug: "about", priority: 0.6, changeFrequency: "monthly" },
  { slug: "contact", priority: 0.5, changeFrequency: "yearly" },
  { slug: "privacy", priority: 0.4, changeFrequency: "yearly" },
  { slug: "promotion", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...ARTICLE_ROUTES.map((r) => ({
      url: `${BASE_URL}/${r.slug}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: r.priority ?? 0.8,
    })),
    ...STATIC_ROUTES.map((r) => ({
      url: `${BASE_URL}/${r.slug}`,
      lastModified: LAST_UPDATED,
      changeFrequency: r.changeFrequency ?? ("monthly" as const),
      priority: r.priority ?? 0.5,
    })),
  ];
}
