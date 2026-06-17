import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";

const PAGE_URL = "https://www.japantrippicks.com/ine";
const OG_IMAGE = "/ine/town-1.jpg";

export const metadata: Metadata = {
  title: "京都伊根町觀光推薦｜舟屋村絕景・推薦咖啡＆住宿【實際造訪】",
  description:
    "京都伊根町完整旅遊指南！日本三大舟屋村之一的夢幻海邊聚落，被選為「日本最美村落」。推薦的舟屋咖啡「INE CAFE」與當地住宿「仁風荘」，從京都市區一日遊或慢遊兩日遊都剛剛好。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "京都伊根町觀光推薦｜舟屋村絕景・推薦咖啡＆住宿",
    description: "日本最美村落「伊根舟屋」！附INE CAFE咖啡＆仁風荘住宿。京都隱藏絕景。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "伊根町舟屋・京都隱藏絕景" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "京都伊根町觀光推薦｜舟屋村絕景・推薦咖啡＆住宿",
    description: "日本最美村落「伊根舟屋」！INE CAFE＆仁風荘🏘️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "京都伊根町觀光推薦｜舟屋村絕景・推薦咖啡＆住宿【實際造訪】",
  description: "京都伊根町完整旅遊指南。舟屋村、INE CAFE、仁風荘。",
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
    { "@type": "ListItem", position: 2, name: "伊根町觀光推薦", item: PAGE_URL },
  ],
};

const townPhotos = ["/ine/town-1.jpg", "/ine/town-2.jpg"];
const cafePhotos = ["/ine/cafe-1.jpg", "/ine/cafe-2.jpg"];
const jinpusoPhotos = ["/ine/jinpuso-1.jpg"];

const relatedLinks = [
  { href: "/hikone", label: "🏯 彥根城觀光推薦｜滋賀必去國寶城・吉祥物彥根貓", desc: "日本國寶＋彥根貓＋江戶城下町" },
  { href: "/kobe-cafe", label: "☕ 神戶咖啡推薦｜フロインドリーブ＆異人館咖啡", desc: "教堂改建咖啡廳・北野洋館咖啡" },
  { href: "/kamikochi", label: "🏔️ 上高地＆奧飛騨旅行推薦4選", desc: "河童橋・新穂高纜車・奧飛騨溫泉" },
];

export default function InePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">伊根町觀光推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🏘️ 隱藏村落</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 京都・伊根町</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          京都伊根町觀光推薦｜舟屋村<br />絕景・咖啡＆住宿完整指南🏘️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">京都隱藏的秘境——「日本最美村落」伊根町</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>伊根町（伊根の舟屋）</strong>位於京都府北部，是<strong>日本最美村落聯盟</strong>認定的夢幻海邊聚落🌊 230棟<strong>舟屋（funaya）</strong>沿著伊根灣排列，1樓是船庫、2樓是住家，形成全世界都罕見的獨特街景。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            因為交通較不便，反而保留了純樸的漁村風情，被譽為<strong>「京都的小威尼斯」</strong>🚤 這次推薦伊根町觀光的<strong>3個要素</strong>——舟屋村絕景＋舟屋咖啡<strong>「INE CAFE」</strong>＋當地住宿<strong>「仁風荘」</strong>，安排一日遊或慢遊兩日都很棒✨
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">伊根町觀光推薦・3要素</h2>

        {/* Spot 1: 伊根町 舟屋 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {townPhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image src={src} alt="伊根町舟屋村 - 京都觀光推薦" fill sizes="50vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div><h3 className="text-base font-black text-stone-800">伊根町 舟屋村</h3><span className="text-xs text-stone-400">Ine Funaya Village</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              沿著<strong>伊根灣</strong>排列的<strong>230棟舟屋</strong>，是日本唯一的<strong>「重要傳統建築物群保存地區」</strong>類型🏘️ 舟屋特色是1樓直接面海作為船庫，2樓為住家，可以從家裡直接出船捕魚。漫步在舟屋小道、搭船遊覽海面、品嚐當地海鮮，都是經典體驗。
            </p>
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                與京都市中心完全不同的<strong>純樸海邊風情</strong>，是台灣・香港旅客最容易感動的隱藏秘境📸 推薦<strong>「伊根灣めぐり」遊覧船</strong>（25分鐘・¥1,200）從海上欣賞舟屋全景，或租電動腳踏車環島散步。早晨的霧氣景色和傍晚的夕陽特別夢幻。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🏘️ 230棟舟屋", "🌊 京都的小威尼斯", "🚤 遊覽船體驗", "📸 IG絕景"].map((t) => (<span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 京都府與謝郡伊根町</p>
              <p className="text-xs text-stone-600">🚃 京都站搭特急到「天橋立」約2小時→巴士約60分到「伊根」</p>
              <p className="text-xs text-stone-600">🚤 伊根灣遊覽船：每30分一班・¥1,200（大人）</p>
              <p className="text-xs text-stone-600">🚲 電動腳踏車租借 ¥1,000〜／日</p>
            </div>
            <a href="https://www.ine-kankou.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方觀光網站</a>
          </div>
        </section>

        {/* Spot 2: INE CAFE */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {cafePhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image src={src} alt="INE CAFE - 伊根町咖啡推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div><h3 className="text-base font-black text-stone-800">INE CAFE</h3><span className="text-xs text-stone-400">Ine Cafe / 舟屋咖啡廳</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              由<strong>舟屋改建</strong>的人氣咖啡廳☕ 1樓是船庫＆露台座位，可以一邊喝咖啡一邊看著海水拍打船庫的迷人景色🌊 提供當地新鮮素材製作的咖啡、甜點、輕食，是伊根散步途中休息的最佳選擇。
            </p>
            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                坐在<strong>露台座位</strong>就能直接看到海面與舟屋並列的絕景📸 招牌的<strong>「伊根のブルー」拿鐵</strong>用蝶豆花做出夢幻藍色，呼應伊根灣的海洋意象。也有<strong>當地特產「鰤魚海鮮丼」</strong>，能一次品嚐伊根灣的鮮味。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["☕ 舟屋改建", "🌊 海景露台", "💙 伊根藍拿鐵", "🐟 鰤魚海鮮丼"].map((t) => (<span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 京都府與謝郡伊根町平田593-1</p>
              <p className="text-xs text-stone-600">🚃 伊根バス停 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜17:00（不定休）</p>
              <p className="text-xs text-stone-600">💴 飲品 ¥600〜／海鮮丼 ¥1,800〜</p>
            </div>
            <a href="https://funayabiyori.com/food/#cafe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 店家資訊</a>
          </div>
        </section>

        {/* Spot 3: 仁風荘 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src={jinpusoPhotos[0]} alt="仁風荘 - 伊根町住宿推薦" fill sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div><h3 className="text-base font-black text-stone-800">仁風荘（Jinpuso）</h3><span className="text-xs text-stone-400">Ine Inn Jinpuso</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              由<strong>舟屋改建的人氣民宿</strong>🏨 1樓直接面海，從房間就能看到伊根灣的絕景。提供當地新鮮捕獲的<strong>鰤魚會席料理</strong>，特別是<strong>「鰤魚しゃぶしゃぶ」</strong>用伊根灣特產「<strong>寒鰤</strong>」做的火鍋，是冬季限定的絕品。
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                住在舟屋裡的<strong>難得體驗</strong>，早上醒來看到海面拍打船庫的景象超浪漫💕 老闆親切又會說一些英文，可以體驗最道地的漁村生活。<strong>冬季的寒鰤しゃぶしゃぶ會席</strong>是必嚐的奢侈料理。房間數有限，建議<strong>提前1〜2個月預約</strong>。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🏨 舟屋住宿體驗", "🐟 寒鰤しゃぶしゃぶ", "🌊 海景客房", "💑 浪漫推薦"].map((t) => (<span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 京都府與謝郡伊根町平田151</p>
              <p className="text-xs text-stone-600">🚃 伊根バス停 徒歩約5分</p>
              <p className="text-xs text-stone-600">💴 一泊二食 ¥15,000〜（冬季寒鰤プラン ¥20,000〜）</p>
              <p className="text-xs text-stone-600">🛏️ 房間數有限，建議提前預約</p>
            </div>
            <a href="https://www.jinpuso.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方網站</a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">伊根町旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從<strong>京都市區</strong>到伊根町約<strong>3小時</strong>（搭特急＋巴士），建議<strong>住一晚</strong>慢遊</li>
            <li>✅ 可順遊<strong>「日本三景」天橋立</strong>（從伊根往南60分巴士）</li>
            <li>✅ 冬季的<strong>寒鰤（11〜2月）</strong>是伊根的旬味，住宿用餐絕對要選這時期</li>
            <li>✅ 巴士班次不多，<strong>查好時刻表</strong>很重要⏰</li>
            <li>✅ 自駕也方便，可以更彈性安排行程🚗</li>
            <li>✅ 早晨的霧氣景色＆傍晚夕陽是攝影的黃金時段📸</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            京都不只有清水寺＆嵐山——伊根町這個隱藏絕景才是真正讓人感動的地方✨<br />
            慢慢呼吸海風、品嚐鰤魚、住一晚舟屋，是來日本旅遊最特別的體驗！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「住舟屋早上醒來看到海的瞬間，覺得這趟旅行值得了🏘️」</p>
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
