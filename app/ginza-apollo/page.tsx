import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";

const PAGE_URL = "https://www.japantrippicks.com/ginza-apollo";
const OG_IMAGE = "/ginza-apollo/apollo-1.jpg";

export const metadata: Metadata = {
  title: "銀座美食推薦｜THE APOLLO・希臘料理人氣餐廳【實際造訪】",
  description:
    "銀座必吃美食「THE APOLLO」！東京最具話題的希臘料理餐廳，位於銀座Nouvo 11樓的時尚空間。招牌起司料理・地中海風味分享盤，附交通方式・推薦菜單・價格。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "銀座美食推薦｜THE APOLLO・希臘料理人氣餐廳",
    description: "銀座必吃！東京話題希臘料理餐廳，分享盤＆招牌起司料理。附交通・菜單・推薦。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "銀座美食推薦・THE APOLLO希臘料理" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "銀座美食推薦｜THE APOLLO・希臘料理",
    description: "銀座必吃！東京話題希臘料理餐廳，地中海風味分享盤🇬🇷",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "銀座美食推薦｜THE APOLLO・希臘料理人氣餐廳【實際造訪】",
  description: "銀座必吃美食「THE APOLLO」。東京最具話題的希臘料理餐廳。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-07-21T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "銀座美食推薦", item: PAGE_URL },
  ],
};

const photos = ["/ginza-apollo/apollo-1.jpg", "/ginza-apollo/apollo-2.jpg", "/ginza-apollo/apollo-3.jpg"];

const relatedLinks = [
  { href: "/futakotamagawa", label: "🍽️ 二子玉川美食推薦3選｜中華・甜點・韓國料理", desc: "蒸籠中華・蘋果派・韓式屋台" },
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵5選", desc: "濃厚魚介系つけ麺から家系まで" },
  { href: "/tokyo-cookies", label: "🍪 東京伴手禮推薦｜高級手工餅乾", desc: "奧地利認證大師的手工餅乾禮盒" },
];

export default function GinzaApolloPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">銀座美食推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・銀座</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          銀座美食推薦｜THE APOLLO<br />・希臘料理人氣餐廳🍽️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">在銀座感受地中海陽光！話題希臘料理</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            來東京旅遊，<strong>銀座</strong>是不可錯過的高級美食區🏙️ 從米其林星級壽司、和牛鐵板燒到世界各國料理應有盡有。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的<strong>「THE APOLLO」</strong>是來自<strong>澳洲雪梨的人氣希臘料理餐廳</strong>，2016年春天進駐銀座🇬🇷 位於銀座Nouvo大樓11樓的時尚空間，提供地中海風味的<strong>分享盤式料理</strong>，是銀座最具話題的多人聚餐勝地✨
          </p>
        </section>

        <PrepBannerCompact />

        {/* Shop */}
        <h2 className="text-lg font-black text-stone-800 mb-4">銀座美食推薦（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="THE APOLLO 銀座 - 銀座美食推薦"
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
                <h3 className="text-base font-black text-stone-800">THE APOLLO 銀座</h3>
                <span className="text-xs text-stone-400">Modern Greek Restaurant</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              來自澳洲雪梨的<strong>現代希臘料理餐廳</strong>，2016年春季在銀座開幕。位於<strong>銀座Nouvo 11樓</strong>，從窗外可以俯瞰銀座街景🏙️ 餐廳走時尚摩登路線，白色為基調搭配開放式廚房，氛圍輕鬆又有質感。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                招牌的<strong>「Saganaki Cheese」</strong>（烤起司淋蜂蜜）是必點🧀 烤得金黃酥脆的起司搭配蜂蜜與奧勒岡，鹹甜交融超級療癒。其他像<strong>烤龍蝦、和牛菲力</strong>、希臘風味沙拉等都是分享盤式料理，<strong>2〜4人聚餐</strong>最划算。在銀座難得能吃到正宗希臘料理，氛圍也超適合約會💕
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🇬🇷 希臘料理", "🧀 招牌烤起司", "🍷 分享盤式", "💕 約會推薦", "🏙️ 11樓景觀"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 推薦菜單 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍽️ 必點菜單</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・<strong>Saganaki Cheese</strong>（烤起司淋蜂蜜）—— 人氣No.1招牌</li>
                <li>・<strong>烤龍蝦</strong>—— 主菜推薦，份量十足</li>
                <li>・<strong>和牛菲力</strong>—— 用希臘風味烹調的高級和牛</li>
                <li>・<strong>希臘沙拉</strong>—— 經典菲達起司配橄欖</li>
                <li>・<strong>Pita麵包＆沾醬拼盤</strong></li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都中央區銀座5-2-1 銀座Nouvo 11F</p>
              <p className="text-xs text-stone-600">🚇 東京メトロ銀座線・丸之內線・日比谷線「銀座」駅 徒歩約2分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜22:00（時期變動）</p>
              <p className="text-xs text-stone-600">💴 午餐 ¥3,000〜／晚餐 ¥8,000〜／套餐 ¥15,000〜</p>
              <p className="text-xs text-stone-600">📞 03-3572-4200（建議預約）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">分享盤料理建議2〜4人前往，可以點各種料理一起品嚐！晚餐強烈建議提前預約</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://theapollo.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.instagram.com/theapolloginza/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 Instagram
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">銀座美食小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ THE APOLLO 是<strong>分享盤式料理</strong>，2人以上前往最划算</li>
            <li>✅ 晚餐熱門時段（19:00〜21:00）建議<strong>提前1〜2週預約</strong></li>
            <li>✅ <strong>午餐套餐</strong>CP值較高，¥3,000左右就能體驗</li>
            <li>✅ 服裝建議smart casual（餐廳氛圍較高級）</li>
            <li>✅ 銀座站徒步2分，吃完可以順遊GINZA SIX、和光等百貨🛍️</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            在銀座難得能吃到正宗希臘料理，氛圍時尚又有質感✨<br />
            想找一間特別的銀座聚餐餐廳，THE APOLLO絕對是首選！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「招牌烤起司淋蜂蜜真的會上癮，鹹甜交融的滋味太棒了🧀」</p>
            </div>
          </div>
        </div>

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
