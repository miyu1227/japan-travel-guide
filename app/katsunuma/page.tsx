import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import PrepBannerCompact from "../components/PrepBannerCompact";

const PAGE_URL = "https://www.japantrippicks.com/katsunuma";
const OG_IMAGE = "/katsunuma/cover.jpg";

export const metadata: Metadata = {
  title: "山梨勝沼一日遊｜葡萄鄉美食＆シャトー・メルシャン酒莊之旅🍇【實際造訪】",
  description:
    "東京近郊小旅行！搭中央線到「勝沼ぶどう郷」，走進日本葡萄酒的故鄉山梨勝沼。在地食堂「銀月食堂」的煮干支那麵＆生薑燒定食，以及シャトー・メルシャン酒莊的品酒導覽（Discovery Tour）完整體驗。附交通・營業時間・預約資訊，台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "山梨勝沼一日遊｜葡萄鄉美食＆シャトー・メルシャン酒莊之旅",
    description: "東京近郊！勝沼ぶどう郷葡萄鄉一日遊。在地食堂「銀月食堂」＆シャトー・メルシャン酒莊品酒導覽完整指南。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "山梨勝沼一日遊・葡萄鄉之旅" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "山梨勝沼一日遊｜葡萄鄉美食＆酒莊之旅",
    description: "東京近郊葡萄酒故鄉！在地食堂＆シャトー・メルシャン酒莊品酒導覽🍇🍷",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "山梨勝沼一日遊｜葡萄鄉美食＆シャトー・メルシャン酒莊之旅【實際造訪】",
  description: "東京近郊勝沼ぶどう郷葡萄鄉一日遊：在地食堂「銀月食堂」與シャトー・メルシャン酒莊品酒導覽。",
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
    { "@type": "ListItem", position: 2, name: "山梨勝沼一日遊", item: PAGE_URL },
  ],
};

const gingetsuPhotos = [
  "/katsunuma/gingetsu-1.jpg",
  "/katsunuma/gingetsu-2.jpg",
  "/katsunuma/gingetsu-3.jpg",
  "/katsunuma/gingetsu-4.jpg",
  "/katsunuma/gingetsu-5.jpg",
];
const mercianPhotos = [
  "/katsunuma/mercian-1.jpg",
  "/katsunuma/mercian-2.jpg",
  "/katsunuma/mercian-3.jpg",
  "/katsunuma/mercian-4.jpg",
];

const relatedLinks = [
  { href: "/kamikochi", label: "🏔️ 上高地＆奧飛騨旅行推薦4選", desc: "日本阿爾卑斯絕景・河童橋・溫泉療癒之旅" },
  { href: "/hikone", label: "🏯 彥根城觀光推薦", desc: "日本國寶城・吉祥物彥根貓・江戶城下町散步" },
  { href: "/utsunomiya", label: "🎋 宇都宮觀光推薦3選", desc: "夢幻竹林・餃子・神社，東京近郊一日遊隱藏寶地" },
];

export default function KatsunumaPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">山梨勝沼一日遊</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-600 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">📍 景點</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">📍 山梨・勝沼</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          山梨勝沼一日遊｜葡萄鄉美食＆<br />シャトー・メルシャン酒莊之旅🍇
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">從東京出發！葡萄酒故鄉「勝沼」小旅行</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            從新宿搭中央線特急約1個多小時，就能抵達山梨縣的<strong>「勝沼ぶどう郷」</strong>車站🍇 這裡是<strong>日本葡萄酒的發源地</strong>，四周被葡萄園與酒莊環繞，是東京近郊很適合安排一日小旅行的地方。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次從「勝沼ぶどう郷」駅出發，造訪了車站旁的在地食堂<strong>「銀月食堂」</strong>，以及日本代表性酒莊<strong>「シャトー・メルシャン（Château Mercian）」</strong>，還參加了酒莊的品酒導覽行程。以下是實際造訪的完整紀錄✨
          </p>
        </section>

        {/* 到着 station photo */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 max-w-sm mx-auto">
          <div className="relative aspect-[16/9] bg-stone-100">
            <Image
              src="/katsunuma/station-1.jpg"
              alt="抵達勝沼ぶどう郷駅 - 山梨勝沼一日遊"
              fill
              sizes="(max-width: 384px) 100vw, 384px"
              className="object-cover"
              priority
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-stone-600 leading-relaxed">
              🚃 <strong>抵達「勝沼ぶどう郷」駅（CO36）</strong>。一走出月台，眼前就是被雲霧籠罩的山坡與整片葡萄園，空氣清新、瞬間切換成度假心情。旅程就從這裡開始！
            </p>
          </div>
        </section>

        <PrepBannerCompact />

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">銀月食堂 → 車站旁在地食堂</p>
                <p className="text-xs text-stone-500 leading-relaxed">走出車站徒步1分・煮干支那麵＆生薑燒定食・山梨名物ほうとう</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">シャトー・メルシャン → 日本代表酒莊</p>
                <p className="text-xs text-stone-500 leading-relaxed">品酒導覽（Discovery Tour）・百年酒窖・葡萄園散步・4款日本葡萄酒試飲</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">勝沼一日遊・造訪紀錄</h2>

        {/* Spot 1: 銀月食堂 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {gingetsuPhotos.slice(0, 3).map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="銀月食堂 - 勝沼在地食堂" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            {gingetsuPhotos.slice(3, 5).map((src, i) => (
              <div key={i} className="relative aspect-[3/2] bg-stone-100">
                <Image src={src} alt="銀月食堂 - 勝沼在地食堂料理" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">銀月食堂</h3>
                <span className="text-xs text-stone-400">Gingetsu Shokudo</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              就位在「勝沼ぶどう郷」駅<strong>徒步約1分</strong>的在地食堂，白色暖簾配上「營業中」小木牌，門口還擺著一整箱空酒瓶，滿滿的葡萄鄉氣息🍇 招牌是山梨名物<strong>ほうとう</strong>（放了約10種蔬菜的味噌燉煮麵），另外也有煮干高湯的<strong>支那麵（中華そば）</strong>，走的是懷舊、清爽的老派路線。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                一出車站就能吃到、完全不用花力氣找路！這次點了清爽的<strong>支那麵</strong>和份量十足的<strong>生薑燒定食</strong>（附荷包蛋、高麗菜絲、味噌湯與白飯），還有葡萄產地才有的濃郁<strong>葡萄汁</strong>🍇 價位親民、氛圍樸實，很適合抵達後先在這裡補充體力再出發。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🚃 車站徒步1分", "🍜 煮干支那麵", "🍚 定食豐盛", "🍇 葡萄鄉氛圍"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 山梨県甲州市勝沼町菱山2609</p>
              <p className="text-xs text-stone-600">🚃 JR中央線「勝沼ぶどう郷」駅 徒歩約1分</p>
              <p className="text-xs text-stone-600">⏰ 平日11:30〜14:00／17:00〜21:00・週六日假日11:30〜21:00（不定休）</p>
              <p className="text-xs text-stone-600">💴 麵類・定食（銅板價位）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">最招牌的是山梨名物「ほうとう」，天氣涼的時候很推薦來一碗暖呼呼的味噌燉煮麵</p>
            </div>

            <a
              href="https://www.instagram.com/gin_getu3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 Instagram
            </a>
          </div>
        </section>

        {/* Spot 2: シャトー・メルシャン */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {mercianPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="シャトー・メルシャン勝沼酒莊 - 品酒導覽" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">シャトー・メルシャン（勝沼酒莊）</h3>
                <span className="text-xs text-stone-400">Château Mercian Katsunuma Winery</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              勝沼最具代表性的酒莊之一，以「讓日本成為葡萄酒銘釀地」為理念，釀造細膩優雅（Finesse &amp; Elegance）的日本葡萄酒🍷 這次參加了約90分鐘的品酒導覽<strong>「Discovery Tour（ディスカバリーツアー）」</strong>，跟著導覽依序走過資料館、祝村葡萄園與釀造酒窖，最後進行品飲。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                走進昏暗的百年木造酒窖，一整排巨大橡木桶的畫面超有氣氛📷 導覽最後可以試飲<strong>紅白各2款、共4款</strong>葡萄酒（甲州きいろ香・北信Chardonnay・穂坂Muscat Bailey A・鹽尻Merlot），慢慢比較不同產地與品種的風味。品酒空間旁還有爬滿葡萄藤的露台庭園，即使下雨天也很療癒✨
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍷 品酒體驗", "🏛️ 百年酒窖", "🍇 葡萄園導覽", "📅 需事先預約"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 山梨県甲州市勝沼町下岩崎1425-1</p>
              <p className="text-xs text-stone-600">🚃 JR「勝沼ぶどう郷」駅搭計程車約8分</p>
              <p className="text-xs text-stone-600">⏰ 葡萄酒藝廊・商店 10:00〜16:30（年末年始休）</p>
              <p className="text-xs text-stone-600">💴 Discovery Tour ¥3,000（約90分・限額10名・需預約）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">導覽行程名額有限、需事先於官網預約，建議安排行程前先確認梯次與空位</p>
            </div>

            <a
              href="https://www.chateaumercian.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">勝沼小旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從新宿搭中央線特急（かいじ等）到「勝沼ぶどう郷」約1個多小時，當天來回沒問題</li>
            <li>✅ 車站到各酒莊有段距離，建議善用計程車或事先查好接駁方式🚕</li>
            <li>✅ 酒莊導覽多需事先預約，出發前務必上官網確認梯次</li>
            <li>✅ 要品酒的話別開車，搭電車前來最安心🍷</li>
            <li>✅ 葡萄產季（夏〜秋）造訪，還能順便體驗採葡萄的樂趣🍇</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            車站旁的樸實在地食堂，加上日本代表性酒莊的品酒導覽——一次就能感受到勝沼「葡萄與葡萄酒之鄉」的魅力🍇🍷<br />
            從東京出發的近郊小旅行，想遠離人潮、悠閒放鬆的話非常推薦！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「在葡萄園環繞的小鎮，喝一杯當地釀的葡萄酒，就是最幸福的小旅行🍷」</p>
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
