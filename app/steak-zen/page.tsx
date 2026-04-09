import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/steak-zen";
const OG_IMAGE = "/steak-zen/zen-1.jpg";

export const metadata: Metadata = {
  title: "神戶牛推薦｜ステーキハウスZEN三宮店・鐵板燒名店【實際品嚐】",
  description:
    "神戶旅遊必吃神戶牛！「ステーキハウスZEN 三宮店」是當地人氣鐵板燒名店，A5等級神戶牛在主廚眼前現煎，肉質入口即化。附交通方式・推薦菜單・價格・預約方式。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "神戶牛推薦｜ステーキハウスZEN 三宮店・鐵板燒名店",
    description: "神戶牛A5鐵板燒名店「ステーキハウスZEN 三宮店」。主廚現煎・入口即化。附交通・菜單・預約。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "神戶牛推薦・ステーキハウスZEN 三宮店" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "神戶牛推薦｜ステーキハウスZEN 三宮店",
    description: "神戶必吃A5神戶牛鐵板燒名店！主廚現煎・入口即化。",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "神戶牛推薦｜ステーキハウスZEN 三宮店・鐵板燒名店【實際品嚐】",
  description: "神戶牛A5鐵板燒名店「ステーキハウスZEN 三宮店」實際品嚐心得。交通・菜單・預約方式。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Organization", name: "Japan Trip Picks" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "神戶牛推薦", item: PAGE_URL },
  ],
};

const photos = [
  "/steak-zen/zen-1.jpg",
  "/steak-zen/zen-2.jpg",
  "/steak-zen/zen-3.jpg",
  "/steak-zen/zen-4.jpg",
  "/steak-zen/zen-5.jpg",
  "/steak-zen/zen-6.jpg",
];

const relatedLinks = [
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵4選", desc: "濃厚魚介系つけ麺から家系まで" },
  { href: "/shukugawa", label: "☕ 夙川おすすめカフェ2選｜兵庫・神戸", desc: "ガレットランチ＆本格コーヒー" },
  { href: "/museum", label: "🎨 東京美術館推薦｜國立新美術館＆根津美術館", desc: "現代建築・日本庭園" },
];

export default function SteakZenPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">神戶牛推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🥩 神戶牛</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神戶・三宮</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際品嚐</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          神戶牛推薦｜ステーキハウスZEN<br />三宮店・A5鐵板燒名店🥩
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">來神戶旅遊，必吃的當然是「神戶牛」</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            來日本關西旅遊，<strong>神戶牛</strong>絕對是必吃名單第一名🥩 油花細緻、入口即化，是世界知名的和牛代表。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的是位於三宮的人氣鐵板燒名店<strong>「ステーキハウスZEN 三宮店」</strong>。由主廚在你眼前現場煎烤，從聲音到香氣都是一場饗宴✨ 是台灣・香港旅客造訪神戶時CP值很高的神戶牛體驗。
          </p>
        </section>

        {/* Spot: ZEN */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="ステーキハウスZEN 三宮店 - 神戶牛推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">ステーキハウスZEN 三宮店</h3>
                <span className="text-xs text-stone-400">Steak House ZEN Sannomiya</span>
              </div>
            </div>

            {/* 介紹 */}
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於三宮的人氣神戶牛專門店，主打<strong>A5等級神戶牛</strong>鐵板燒。坐在吧台前看著主廚現場切肉、煎烤，整個過程就像表演一樣✨ 環境高級但不會太拘謹，一個人也能輕鬆享用。
            </p>

            {/* 推薦理由 */}
            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                神戶牛油花分布超完美，入口即化、肉汁滿溢🤤 中午套餐CP值非常高，比晚上便宜很多，適合台灣・香港旅客當作神戶牛初體驗。主廚會用簡單英文解說，外國旅客也能放心。記得一定要事先預約！
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["🥩 A5神戶牛", "🔥 鐵板燒現煎", "💰 午餐CP值高", "🚉 三宮徒步", "🌍 外國旅客友善"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 推薦菜單 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍽️ 推薦菜單</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・神戶牛鐵板燒午餐套餐（含沙拉・蔬菜・飯・湯・甜點）</li>
                <li>・神戶牛菲力／沙朗（依季節時價）</li>
                <li>・神戶牛漢堡排（想輕鬆吃時的好選擇）</li>
              </ul>
            </div>

            {/* 基本資訊 */}
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市中央區（三宮駅周邊）</p>
              <p className="text-xs text-stone-600">🚉 JR・阪急・阪神「三宮」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 午餐 11:30〜／晚餐 17:30〜（詳見官網）</p>
              <p className="text-xs text-stone-600">💴 午餐 ¥5,000〜／晚餐 ¥10,000〜（依套餐）</p>
              <p className="text-xs text-stone-600">📞 建議事前預約</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">想CP值高的話強烈推薦「午餐時段」，同樣的神戶牛價格便宜很多</p>
            </div>

            <a
              href="https://steak-zen.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 神戶牛小知識 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">什麼是「神戶牛」？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            神戶牛是兵庫縣產<strong>但馬牛</strong>中，符合嚴格等級標準的頂級和牛品牌。油花細緻、肉質柔軟，世界知名度非常高，常被列為人生必吃清單之一。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            最推薦的吃法是<strong>鐵板燒</strong>——主廚現場煎烤，能完整品嚐到油脂香氣與肉汁🥩 通常會搭配蒜片、岩鹽、和風醬油等簡單調味，讓肉本身的味道發揮到極致。
          </p>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">吃神戶牛小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 一定要<strong>事前預約</strong>，特別是假日與晚餐時段</li>
            <li>✅ 想CP值高就選<strong>午餐套餐</strong>，價格比晚餐親民很多</li>
            <li>✅ 神戶牛建議點<strong>中等熟度（Medium）</strong>，最能感受油脂風味</li>
            <li>✅ 三宮駅周邊店家集中，吃完還能順遊舊居留地・元町</li>
            <li>✅ 多數高級店都接受信用卡，不必擔心帶大量現金</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            主廚在眼前現煎神戶牛，從香氣到口感都是完美的體驗✨<br />
            來神戶旅遊，請務必把ステーキハウスZEN排進行程，讓味蕾留下深刻的回憶🥩
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「神戶牛真的入口即化，來神戶絕對不能錯過！午餐時段去最划算🥩」</p>
            </div>
          </div>
        </div>

        {/* 延伸閱讀 */}
        <section>
          <h2 className="text-base font-black text-stone-800 mb-3">📚 延伸閱讀</h2>
          <div className="space-y-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center justify-between bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm hover:border-yellow-300 transition-colors">
                <div>
                  <p className="text-sm font-bold text-stone-800">{link.label}</p>
                  <p className="text-xs text-stone-400">{link.desc}</p>
                </div>
                <span className="text-stone-300 text-sm">›</span>
              </Link>
            ))}
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-yellow-100 mt-8 py-6 px-4 text-center text-xs text-stone-400">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-base">🐣</span>
          <span className="font-semibold text-stone-600">Japan Trip Picks</span>
        </div>
        <p>© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
