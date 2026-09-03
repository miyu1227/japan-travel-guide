import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/gakugeidaigaku-cafe";
const OG_IMAGE = "/gakugeidaigaku-cafe/bubbles-1.jpg";

export const metadata: Metadata = {
  title: "學藝大學咖啡廳推薦｜Bubbles Chill✅實訪",
  description:
    "學藝大學站徒步4分的極簡咖啡廳「Bubbles Chill」。招牌是酪梨鮮蝦開放式吐司與精品咖啡，早上8點就開門。附交通・營業時間・價位。",
  alternates: {
    canonical: PAGE_URL,
    // 台湾・香港の両方を対象にする（同一URLで両地域を明示）
    languages: {
      "zh-Hant": PAGE_URL,
      "zh-TW": PAGE_URL,
      "zh-HK": PAGE_URL,
      "zh-MO": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "學藝大學咖啡廳推薦｜Bubbles Chill・酪梨鮮蝦開放式吐司",
    description: "東急東橫線上的隱藏咖啡廳！酪梨鮮蝦開放式吐司與精品咖啡，早上8點開門。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "學藝大學咖啡廳推薦・Bubbles Chill的酪梨鮮蝦開放式吐司" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "學藝大學咖啡廳推薦｜Bubbles Chill",
    description: "酪梨鮮蝦開放式吐司與精品咖啡，東急東橫線上的極簡咖啡廳☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "學藝大學咖啡廳推薦｜Bubbles Chill・酪梨鮮蝦開放式吐司與精品咖啡【實際造訪】",
  description: "學藝大學必去咖啡廳「Bubbles Chill」完整介紹。酪梨鮮蝦開放式吐司、精品咖啡，早上8點開門的極簡空間。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-09-03T00:00:00+09:00",
  dateModified: "2026-09-03T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "學藝大學咖啡廳推薦", item: PAGE_URL },
  ],
};

const photos = [
  "/gakugeidaigaku-cafe/bubbles-1.jpg",
  "/gakugeidaigaku-cafe/bubbles-2.jpg",
];

const relatedLinks = [
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦2選｜星巴克臻選・世界冠軍拉花", desc: "隈研吾建築・拉花世界冠軍的STREAMER" },
  { href: "/daikanyama-cafe", label: "☕ 代官山咖啡廳推薦3選｜義式烘焙・高級甜點・法式可頌", desc: "PRINCI・DOLCE TACUBO・Doré" },
  { href: "/ikejiri-cafe", label: "🍓 池尻大橋咖啡廳推薦｜UN LIVRE・法式甜點名店", desc: "當季水果蛋糕＆寵物友善露台座位" },
];

const faqItems = [
  { q: "從澀谷過去要多久？", a: "東急東橫線從澀谷搭急行到「學藝大學」駅約6〜7分鐘（各停約10分鐘），出站後徒步約4分。是很好插進東京行程的一站。" },
  { q: "早餐時段可以去嗎？", a: "可以。平日早上8點、週末早上9點就開門，是這一帶少見的早開咖啡廳。想安靜吃早餐的話，平日開店後的時段最舒服。" },
  { q: "一個人大概要花多少？", a: "整體預算約¥1,000〜¥2,000。開放式吐司約¥900起，再加一杯咖啡差不多就是這個範圍。" },
  { q: "有什麼必點的？", a: "開放式吐司（オープンサンド）。我們點了酪梨鮮蝦與鮮蝦奶油起司兩種，麵包烤得酥脆、料鋪得很滿，配上蒔蘿與粉紅胡椒，賣相和味道都很好。" },
  { q: "晚上也有營業嗎？", a: "有，平日到22點、週末到23點，晚上也供應酒精飲料。白天是咖啡廳、晚上轉成小酒館的用法。營業時間可能調整，出發前建議先看官方IG。" },
];

export default function GakugeidaigakuCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">學藝大學咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳（咖啡店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・學藝大學</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          學藝大學咖啡廳推薦｜Bubbles Chill<br />酪梨鮮蝦開放式吐司・早餐咖啡☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-03</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">學藝大學——東急東橫線上的在地生活感小站</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>學藝大學</strong>（学芸大学）是東急東橫線上、位在澀谷與自由之丘中間的小站🚃 這裡沒有大型商場，取而代之的是一整條商店街、麵包店、二手書店和一間間個人經營的小咖啡廳，是東京人真正在過日子的街區。從澀谷搭急行只要6〜7分鐘，卻幾乎看不到觀光客。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）的是車站徒步4分鐘的<strong>「Bubbles Chill」</strong>——一間玻璃帷幕、灰白極簡的咖啡廳，招牌是<strong>開放式吐司（オープンサンド）</strong>與精品咖啡。早上8點就開門，是這一帶少見可以好好吃早餐的店☕
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">學藝大學咖啡廳推薦（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="Bubbles Chill - 學藝大學咖啡廳推薦"
                  fill
                  sizes="50vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Bubbles Chill</h3>
                <span className="text-xs text-stone-400">バブルズチル</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              整面落地玻璃、灰白色調、幾乎沒有多餘裝飾——<strong>Bubbles Chill</strong> 是那種一走過就會回頭看一眼的極簡咖啡廳🤍 招牌上只有簡單的襯線字體店名，低調到很容易錯過。這裡主打<strong>開放式吐司（オープンサンド）</strong>與店主嚴選的<strong>精品咖啡</strong>，白天是咖啡廳，晚上也供應酒精飲料。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>開放式吐司的完成度很高</strong>。我們點了<strong>酪梨鮮蝦</strong>與<strong>鮮蝦奶油起司</strong>兩種：麵包是烤到邊緣酥脆的鄉村麵包，酪梨切成大塊、拌上店家自製醬汁，鮮蝦鋪得毫不手軟，最後撒上蒔蘿與粉紅胡椒🍤 賣相好看，份量也扎實，配一杯咖啡就是很完整的一餐。<strong>平日早上8點就開門</strong>，很適合排進「早起去在地街區吃早餐」的行程——這在東京其實不好找。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥑 酪梨鮮蝦吐司", "🍤 鮮蝦奶油起司", "☕ 精品咖啡", "🌅 早上8點開門", "🤍 極簡空間"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍽️ 這樣點最順</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>早餐・早午餐</strong>：開放式吐司＋咖啡，約¥1,500〜¥2,000</li>
                <li><strong>下午茶</strong>：咖啡或抹茶拿鐵，配起司蛋糕、法式吐司</li>
                <li><strong>晚上</strong>：也供應酒精飲料，可以當小酒館用</li>
                <li>開放式吐司約 ¥900 起（價格以店頭菜單為準）</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都目黑區中央町2-37-2 クーカイ・テラス学芸大学 1F</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線「學藝大學」駅 徒步約4分</p>
              <p className="text-xs text-stone-600">⏰ 平日 8:00〜22:00／週末 9:00〜23:00（時間可能調整，請以官方IG為準）</p>
              <p className="text-xs text-stone-600">💴 一人約 ¥1,000〜¥2,000</p>
              <p className="text-xs text-stone-600">📞 03-6303-1824</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">店面低調、招牌只有店名，走過頭很正常——認落地玻璃上的白色 <strong>Bubbles Chill</strong> 字樣</p>
            </div>

            <a
              href="https://www.instagram.com/bubbleschill_official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              📷 官方 Instagram
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">學藝大學咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 東急東橫線<strong>急行有停</strong>學藝大學，從澀谷約6〜7分鐘</li>
            <li>✅ 平日8點開門，很適合當作一天的第一站，吃完再往澀谷或自由之丘</li>
            <li>✅ 車站兩側是長長的商店街，吃完可以順著逛麵包店與雜貨小店🛍️</li>
            <li>✅ 同一條東橫線上的<strong>中目黑・代官山</strong>都在幾站內，可以串成一日咖啡路線</li>
            <li>✅ 店面很低調，用地圖導航到「クーカイ・テラス学芸大学」比較不會迷路</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            沒有觀光客、沒有排隊，只有一條在地商店街和一間安靜的咖啡廳✨<br />
            想看看東京人平常怎麼過日子，學藝大學是個剛剛好的選擇。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「早上8點的開放式吐司，是我在東京最喜歡的一種早餐🥑」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

        <AuthorCard />
        <PrepBanner />

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

        <RelatedArticles slug="gakugeidaigaku-cafe" exclude={["/nakameguro-cafe", "/daikanyama-cafe", "/ikejiri-cafe"]} />

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
