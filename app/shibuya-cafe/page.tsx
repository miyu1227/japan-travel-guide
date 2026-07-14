import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";

const PAGE_URL = "https://www.japantrippicks.com/shibuya-cafe";
const OG_IMAGE = "/shibuya-cafe/recoco-1.jpg";

export const metadata: Metadata = {
  title: "澀谷咖啡廳推薦｜RECOCO レココ・黑膠唱片試聽咖啡【實際造訪】｜Japan Trip Picks",
  description:
    "澀谷必去的特色咖啡廳推薦：可以親手試聽黑膠唱片的音樂體驗咖啡「RECOCO（レココ）渋谷」。約300張唱片聽到飽，全席電源・Wi-Fi完備，附交通方式・營業時間・推薦菜單。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "澀谷咖啡廳推薦｜RECOCO レココ・黑膠唱片試聽咖啡",
    description: "澀谷必去！可親手試聽黑膠唱片的音樂體驗咖啡。約300張唱片聽到飽，附交通・菜單・營業時間。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "澀谷咖啡廳推薦・RECOCO レココ渋谷" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "澀谷咖啡廳推薦｜RECOCO レココ・黑膠唱片咖啡",
    description: "澀谷必去！可親手試聽黑膠唱片的音樂體驗咖啡，約300張唱片聽到飽！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "澀谷咖啡廳推薦｜RECOCO レココ・黑膠唱片試聽咖啡【實際造訪】",
  description: "澀谷必去特色咖啡廳：可親手試聽黑膠唱片的音樂體驗咖啡「RECOCO（レココ）渋谷」。約300張唱片聽到飽。",
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
    { "@type": "ListItem", position: 2, name: "澀谷咖啡廳推薦", item: PAGE_URL },
  ],
};

const recocoPhotos = [
  "/shibuya-cafe/recoco-1.jpg",
  "/shibuya-cafe/recoco-2.jpg",
  "/shibuya-cafe/recoco-3.jpg",
  "/shibuya-cafe/recoco-4.jpg",
];

const relatedLinks = [
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊", desc: "全世界6間之一・隈研吾設計建築" },
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤咖啡廳推薦4選｜東京必去人氣甜點", desc: "純素烘焙・起司蛋糕・自家焙煎" },
  { href: "/bolt-uehara", label: "☕ 代代木上原咖啡廳推薦｜BOLT・寵物友善人氣店", desc: "手沖咖啡＆自家烘焙甜點" },
];

export default function ShibuyaCafePage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">澀谷咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・澀谷</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          澀谷咖啡廳推薦｜RECOCO レココ<br />可以親手試聽黑膠唱片的音樂咖啡🎵
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">在澀谷，找到一間「用耳朵享受」的咖啡廳</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            澀谷的咖啡廳多到數不清，但這間<strong>「RECOCO（レココ）渋谷」</strong>非常特別——它是一間可以<strong>親手拿起黑膠唱片、放上唱盤試聽</strong>的音樂體驗型咖啡廳🎵 就算你從沒碰過黑膠唱片，也能在這裡輕鬆體驗那種類比音樂獨有的溫暖音色。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            店內收藏約<strong>300張唱片</strong>，從洋樂經典、R&B 到 J-POP、K-POP 都有，一邊喝著飲料一邊挑選喜歡的唱片，是澀谷購物逛街之餘最療癒的休息方式。全席有電源與 Wi-Fi，也很適合當作旅途中的作業咖啡☕
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">澀谷咖啡廳推薦・黑膠唱片咖啡</h2>

        {/* Spot 1: RECOCO */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {recocoPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="RECOCO レココ渋谷 - 澀谷黑膠唱片咖啡廳推薦"
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">RECOCO（レココ）渋谷</h3>
                <span className="text-xs text-stone-400">Record Cafe RECOCO Shibuya</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以<strong>「就算第一次接觸黑膠也能盡情享受」</strong>為理念的唱片試聽咖啡廳。店內牆面整齊排列著滿滿的唱片，氛圍簡約明亮🎶 你可以自由挑選喜歡的專輯，親手放上唱盤，享受黑膠特有的溫潤音色，連唱片封套的藝術設計與歌詞卡都能細細欣賞。從 Teen 世代到昭和世代，各年齡層都能找到熟悉的一張。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                這是一種在別的地方很難體驗到的「日本感」——在音樂之都澀谷，用最類比的方式享受音樂🎵 採<strong>入場費＋飲料制</strong>，還有唱片聽到飽的方案，點一杯<strong>哈密瓜蘇打（メロンクリームソーダ）</strong>配上店家自製的年輪蛋糕，邊聽唱片邊放空，是逛累澀谷後最完美的充電站。全席禁菸、電源與 Wi-Fi 完備，一個人來也很自在。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🎵 黑膠唱片試聽", "🎧 約300張收藏", "🍈 哈密瓜蘇打", "🔌 全席電源・Wi-Fi", "📸 IG拍照熱點"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都渋谷區渋谷3-1-10 IRIE FIRST PLAZA 1F</p>
              <p className="text-xs text-stone-600">🚉 澀谷駅 徒歩約6分（C1出口徒歩約4分）／表參道駅 徒歩約11分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜21:00（L.O. 20:30・無定休，年末年始休）</p>
              <p className="text-xs text-stone-600">💴 入場費＋1飲料制（唱片聽到飽方案 平日約¥1,320／假日約¥1,650）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">全店<strong>只收電子支付（現金不可）</strong>，記得備好信用卡或行動支付；混雜時段可能有90分鐘的時間限制</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://recoco.cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.instagram.com/recoco.cafe/"
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
          <h2 className="text-base font-black text-stone-800 mb-3">澀谷咖啡廳造訪小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從澀谷駅走過來約6分鐘，位於<strong>金王八幡宮</strong>附近的八幡通沿線，逛街途中很好安排🚶</li>
            <li>✅ 店內<strong>只收電子支付</strong>，出發前確認信用卡或行動支付能正常使用💳</li>
            <li>✅ 想慢慢挑唱片的話，建議<strong>避開午後尖峰</strong>，混雜時可能有90分鐘限制</li>
            <li>✅ 自備的唱片基於防盜考量無法帶入試聽，安心體驗店內收藏就好🎵</li>
            <li>✅ 全席電源＋Wi-Fi，逛累澀谷想坐下來整理照片・規劃行程也很適合</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            在什麼都講求快速的澀谷，這間咖啡廳讓人願意放慢腳步、用耳朵好好享受一張唱片的時間🎧<br />
            喜歡音樂、或想找個和別人不一樣的澀谷體驗，RECOCO 非常值得排進行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「親手放下唱針的那一刻，整個澀谷好像都安靜了下來🎵」</p>
            </div>
          </div>
        </div>

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
