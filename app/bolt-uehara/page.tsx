import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/bolt-uehara";
const OG_IMAGE = "/bolt-uehara/bolt-1.jpg";

export const metadata: Metadata = {
  title: "代代木上原咖啡廳｜BOLT・寵物友善名店✅實訪",
  description:
    "代代木上原咖啡廳推薦「BOLT」！東京寵物友善（可帶狗）的時尚咖啡店，位於代代木上原住宅區。手沖咖啡・自家烘焙甜點，附交通方式・店舖資訊。台灣・香港旅客必看東京散步推薦！",
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
    title: "代代木上原咖啡廳推薦｜BOLT・寵物友善人氣咖啡店",
    description: "代代木上原必去咖啡店！可帶狗的時尚咖啡空間，手沖咖啡＆自家烘焙甜點☕",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "代代木上原咖啡廳推薦・BOLT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "代代木上原咖啡廳推薦｜BOLT",
    description: "代代木上原必去咖啡店！可帶狗的時尚咖啡空間☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "代代木上原咖啡廳推薦｜BOLT・寵物友善人氣咖啡店【實際造訪】",
  description: "代代木上原必去咖啡店「BOLT」。寵物友善的時尚咖啡空間。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
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
    { "@type": "ListItem", position: 2, name: "代代木上原咖啡廳推薦", item: PAGE_URL },
  ],
};

const photos = ["/bolt-uehara/bolt-1.jpg", "/bolt-uehara/bolt-2.jpg", "/bolt-uehara/bolt-3.jpg"];

const relatedLinks = [
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊", desc: "全世界6間之一・隈研吾設計建築" },
  { href: "/daikanyama-cafe", label: "☕ 代官山咖啡廳推薦2選｜義式烘焙＆高級甜點", desc: "米蘭義式烘焙PRINCI＆星級甜點DOLCE TACUBO" },
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤咖啡廳推薦4選｜東京必去人氣甜點", desc: "純素烘焙・起司蛋糕・自家焙煎" },
];

export default function BoltUeharaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">代代木上原咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-600 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・代代木上原</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          代代木上原咖啡廳推薦｜<br />BOLT・寵物友善人氣店☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">代代木上原・東京最有品味的住宅區散步</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>代代木上原</strong>是東京最具品味的住宅區之一🌿 距離澀谷、表參道只有一站，卻保有安靜悠閒的氛圍。街上散布著時尚咖啡店、麵包店、選物店，是當地人最愛的散步路線。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）的<strong>「BOLT」</strong>是代代木上原超人氣<strong>寵物友善咖啡店</strong>🐕 不只咖啡好喝、空間時尚，還能帶上愛犬一起享受悠閒時光，是代代木上原必訪的人氣店！
          </p>
        </section>

        <PrepBannerCompact />

        {/* Shop */}
        <h2 className="text-lg font-black text-stone-800 mb-4">代代木上原咖啡廳推薦</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="BOLT 代代木上原 - 代代木上原咖啡廳推薦"
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">BOLT</h3>
                <span className="text-xs text-stone-400">BOLT Uehara</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於代代木上原住宅區的<strong>寵物友善咖啡店</strong>🐕 店內裝潢採用木質暖色調＋極簡風格，氣氛溫馨舒適。最大的特色是<strong>可以帶愛犬一起入店</strong>——對於旅日帶寵物或喜歡狗狗的人來說，是難得的好去處。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                代代木上原是當地人才知道的<strong>「隱藏好區」</strong>，遊客不多、氣氛悠閒🌿 BOLT就在這樣的住宅區裡，可以體驗最道地的東京生活感。手沖咖啡＆自家製甜點（甜品）都很有水準，是<strong>放慢腳步、認真感受東京</strong>的最佳場所。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🐕 寵物友善", "☕ 手沖咖啡", "🌿 住宅區氛圍", "📸 IG拍照好看"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都渋谷区上原（代代木上原）</p>
              <p className="text-xs text-stone-600">🚃 小田急線・地下鉄千代田線「代代木上原」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">🐕 寵物友善（可帶狗入店）</p>
              <p className="text-xs text-stone-600">⏰ 詳細營業時間請查官方Instagram</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">店面不大，假日中午容易客滿；建議錯峰前往，或留意Instagram的最新公告</p>
            </div>

            <a href="https://www.instagram.com/bolt_uehara/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方Instagram
            </a>
          </div>
        </section>

        {/* 代代木上原地區介紹 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">關於代代木上原（Yoyogi-Uehara）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            代代木上原位於<strong>澀谷區</strong>西側，是東京都心少有的<strong>綠意豐富＆步調悠閒</strong>的高級住宅區🌿 從新宿搭東京メトロ千代田線約6分、澀谷約8分，交通便利卻不喧鬧，深受日本文青、藝人、外國僑民喜愛。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這裡沒有澀谷・原宿那種年輕流行感，也不像青山・表參道那麼刻意設計，反而以<strong>「大人が本当に住みたい街」（大人真正想住的街）</strong>的口碑聞名——藏著許多獨立咖啡廳、精品麵包店、精品選物店，適合喜歡緩慢生活的旅客散步一整個下午。
          </p>
        </section>

        {/* 順路推薦 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">順路推薦：代代木上原附近</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">東京Camii（土耳其清真寺／徒歩約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">日本最大的清真寺，建築超美，可以免費參觀（女性需頭巾）。是代代木上原的隱藏景點。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">代代木八幡宮（電車1站）</p>
                <p className="text-xs text-stone-500 leading-relaxed">東京稀有的都心森林神社，可拍到「東京鐵塔＋鳥居」的絕景構圖。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">下北澤（電車約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">從代代木上原搭小田急線1站到下北澤。喜歡文青氛圍的話兩個地區可以合併安排。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">常見問題 FAQ</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 沒有預約可以直接進去嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                獨立咖啡廳大多不接受預約，先到先得。假日的午餐時段常需排隊，推薦<strong>平日下午or週末早上</strong>比較容易入店。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 有Wi-Fi嗎？可以工作嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                代代木上原的咖啡廳文化偏「享受咖啡」，不是筆電工作型。有些店禁止長時間佔位，短時間拍照＆放鬆最合適。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 交通最方便的路線？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                最方便是<strong>東京メトロ千代田線「代々木上原」駅</strong>。JR新宿駅→搭千代田線約6分。<strong>小田急線</strong>也有代代木上原停靠。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">代代木上原旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>代代木上原</strong>距離澀谷只有1站，從新宿也很近，交通方便</li>
            <li>✅ 街上有許多時尚麵包店、選物店，<strong>適合慢慢散步</strong>逛半天</li>
            <li>✅ 寵物友善咖啡店在日本相對少，<strong>帶狗旅行</strong>的人務必收藏</li>
            <li>✅ 平日比假日更悠閒，<strong>建議週間造訪</strong></li>
            <li>✅ 想了解最新菜單與營業狀況，請追蹤<strong>官方Instagram</strong></li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            代代木上原的安靜街道、可以帶狗的溫馨咖啡店——這就是東京最有生活感的一面🐕<br />
            想離開觀光客的喧囂，認真感受東京的人絕對要排進行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「能和狗狗一起喝咖啡的店，本身就是一種療癒☕🐕」</p>
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

        <RelatedArticles slug="bolt-uehara" exclude={["/daikanyama-cafe", "/nakameguro-cafe", "/shimokitazawa-cafe"]} />

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
