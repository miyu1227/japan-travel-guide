import { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { HUBS, hubMembers } from "@/lib/hubs";

const BASE_URL = "https://www.japantrippicks.com";

/** 記事ごとの優先度（未指定は 0.8） */
const PRIORITY: Record<string, number> = {
  "ramen": 0.9,
  "kansai-ramen": 0.85,
  "shibuya-yakiniku": 0.8,
  "tokyo-yakiniku": 0.85,
  "noge": 0.85,
  "osaka-gourmet": 0.8,
  "conrad-osaka": 0.85,
  "nishinomiya-gardens": 0.8,
  "sanda-soba": 0.8,
  "ginza-apollo": 0.8,
  "futakotamagawa": 0.8,
  "steak-zen": 0.8,
  "shin-okubo": 0.8,
  "utsunomiya-gyoza": 0.8,
  "mister-donut": 0.8,
  "tokyo-cookies": 0.8,
  "takeout-cake": 0.85,
  "cafe": 0.9,
  "kiyosumi-cafe": 0.8,
  "ikejiri-cafe": 0.8,
  "shibuya-cafe": 0.8,
  "bolt-uehara": 0.8,
  "daikanyama-cafe": 0.8,
  "nakameguro-cafe": 0.8,
  "shimokitazawa-cafe": 0.8,
  "kobe-cafe": 0.8,
  "shukugawa": 0.8,
  "isehara-gelato": 0.8,
  "spot": 0.9,
  "ajisai": 0.85,
  "tokyo-tower": 0.85,
  "skytree": 0.85,
  "tokyo-disney-around": 0.85,
  "ueno-zoo": 0.8,
  "showa-kinen-park": 0.8,
  "artbar-tokyo": 0.8,
  "koyo": 0.8,
  "museum": 0.8,
  "hakone": 0.9,
  "hokkaido": 0.9,
  "hikone": 0.8,
  "utsunomiya": 0.8,
  "kagawa": 0.85,
  "kochi": 0.85,
  "kamikochi": 0.85,
  "ine": 0.85,
  "rokko-arima": 0.85,
  "kobe-herb-garden": 0.85,
  "katsunuma": 0.85,
  "shirahama": 0.85,
  "chigasaki": 0.85,
  "taiwan-japan-guide": 0.9,
  "hongkong-japan-guide": 0.9,
  "japan-esim": 0.85,
  "tokyo-subway-ticket": 0.85,
  "narita-airport-access": 0.85,
  "haneda-airport-access": 0.85,
};

const STATIC_ROUTES: { slug: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { slug: "about", priority: 0.6, changeFrequency: "monthly" },
  { slug: "contact", priority: 0.5, changeFrequency: "yearly" },
  { slug: "privacy", priority: 0.4, changeFrequency: "yearly" },
  { slug: "promotion", priority: 0.4, changeFrequency: "yearly" },
];

const latestUpdate = ARTICLES.reduce(
  (latest, a) => (a.updated > latest ? a.updated : latest),
  ARTICLES[0].updated
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(latestUpdate),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // 主題ハブ（カテゴリの受け皿）
    ...HUBS.map((h) => ({
      url: `${BASE_URL}/${h.slug}`,
      lastModified: new Date(
        hubMembers(h).reduce((latest, a) => (a.updated > latest ? a.updated : latest), "2026-01-01")
      ),
      changeFrequency: "weekly" as const,
      priority: 0.95,
    })),
    // lastModified は記事ごとの実更新日を使う（一括固定日にしない）
    ...ARTICLES.map((a) => ({
      url: `${BASE_URL}/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: "monthly" as const,
      priority: PRIORITY[a.slug] ?? 0.8,
    })),
    ...STATIC_ROUTES.map((r) => ({
      url: `${BASE_URL}/${r.slug}`,
      lastModified: new Date(latestUpdate),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
  ];
}
