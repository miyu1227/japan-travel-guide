import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const KLOOK_TORETORE =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339829&k_site=https%3A%2F%2Fwww.klook.com%2Fja%2Factivity%2F153493-conan-themed-niche-wakayama-one-day-tour-takashi-station-toretore";

const PAGE_URL = "https://www.japantrippicks.com/shirahama";
const OG_IMAGE = "/shirahama/cover.jpg";

export const metadata: Metadata = {
  title: "和歌山白浜景點推薦4選｜熊貓樂園・海邊露營・海景咖啡・海鮮BBQ【實際造訪】｜Japan Trip Picks",
  description:
    "和歌山白浜必去景點推薦：可近距離看熊貓的「Adventure World冒險大世界」、國立公園海岸的「In the Outdoor白浜志原海岸」豪華露營、海景名店「Kagerou Café」、超新鮮「とれとれ市場」海鮮BBQ。附交通・料金・營業時間。台灣・香港旅客關西自由行必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "和歌山白浜景點推薦4選｜熊貓樂園・海邊露營・海景咖啡・海鮮BBQ",
    description: "和歌山白浜必去4選！冒險大世界看熊貓・志原海岸豪華露營・海景咖啡・とれとれ市場海鮮BBQ。附交通・料金。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "和歌山白浜景點推薦・海邊露營與海景" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "和歌山白浜景點推薦4選｜熊貓・海邊露營・海鮮BBQ",
    description: "和歌山白浜必去4選！看熊貓・海邊豪華露營・海景咖啡・海鮮BBQ🐼🌊",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "和歌山白浜景點推薦4選｜熊貓樂園・海邊露營・海景咖啡・海鮮BBQ【實際造訪】",
  description: "和歌山白浜必去景點：Adventure World冒險大世界、In the Outdoor白浜志原海岸、Kagerou Café、とれとれ市場海鮮BBQ。",
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
    { "@type": "ListItem", position: 2, name: "和歌山白浜景點推薦", item: PAGE_URL },
  ],
};

const adventurePhotos = [
  "/shirahama/adventure-1.jpg",
  "/shirahama/adventure-2.jpg",
  "/shirahama/adventure-3.jpg",
  "/shirahama/adventure-4.jpg",
];
const outdoorPhotos = [
  "/shirahama/outdoor-1.jpg",
  "/shirahama/outdoor-2.jpg",
  "/shirahama/outdoor-3.jpg",
  "/shirahama/outdoor-4.jpg",
];
const kagerouPhotos = ["/shirahama/kagerou-1.jpg", "/shirahama/kagerou-2.jpg"];
const toretorePhotos = ["/shirahama/toretore-1.jpg", "/shirahama/toretore-2.jpg"];

const relatedLinks = [
  { href: "/ine", label: "🏘️ 京都伊根町觀光推薦｜舟屋村絕景・咖啡＆住宿", desc: "日本最美村落・INE CAFE" },
  { href: "/rokko-arima", label: "🏔️ 六甲山健行推薦｜神戶登山＆有馬溫泉一日遊", desc: "登山＋纜車＋溫泉完美行程" },
  { href: "/artbar-tokyo", label: "🎨 東京畫畫體驗推薦｜Artbar Tokyo・喝酒作畫", desc: "初學者也OK的Paint & Sip體驗" },
];

export default function ShirahamaPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">和歌山白浜景點推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">📍 景點</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 和歌山・白浜</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          和歌山白浜景點推薦4選｜熊貓・<br />海邊露營・海景咖啡・海鮮BBQ🐼🌊
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">白浜，是關西最療癒的海邊度假勝地</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>白浜（Shirahama）</strong>位於和歌山縣南部，是關西人氣的海濱度假地🌊 這裡有雪白的沙灘、溫泉、超好吃的海鮮，還有可以近距離看到<strong>熊貓</strong>的主題樂園，從大阪開車約2小時就能抵達，非常適合安排一趟兩天一夜的小旅行。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇整理了實際造訪過、白浜最推薦的<strong>4個景點</strong>——看熊貓的<strong>Adventure World</strong>、海邊豪華露營<strong>In the Outdoor白浜志原海岸</strong>、海景名店<strong>Kagerou Café</strong>，還有海鮮BBQ天堂<strong>とれとれ市場</strong>，一次玩遍白浜的自然、美食與住宿✨
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Adventure World → 熊貓・海陸動物主題樂園</p>
                <p className="text-xs text-stone-500 leading-relaxed">約120種1600隻動物，還有遊樂園，親子必去</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">In the Outdoor白浜志原海岸 → 海邊豪華露營</p>
                <p className="text-xs text-stone-500 leading-relaxed">國立公園海岸旁的Glamping，BBQ・三溫暖・篝火</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Kagerou Café → 海景咖啡・白浜名產かげろう</p>
                <p className="text-xs text-stone-500 leading-relaxed">露台看海，招牌生かげろう一個只要120円</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">とれとれ市場 → 超新鮮海鮮BBQ</p>
                <p className="text-xs text-stone-500 leading-relaxed">漁協直營市場，買了現烤，海鮮控天堂</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">和歌山白浜景點推薦・4選</h2>

        {/* Spot 1: Adventure World */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {adventurePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="Adventure World 冒險大世界 - 和歌山白浜景點推薦"
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Adventure World（冒險大世界）</h3>
                <span className="text-xs text-stone-400">アドベンチャーワールド</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              集動物園、水族館與遊樂園於一體的複合主題樂園，飼養約<strong>120種、1600隻動物</strong>🐼 分為可近距離觀察陸地動物的<strong>Safari World</strong>、有海豚表演的<strong>Marine World</strong>，以及有遊樂設施的<strong>Enjoy World</strong>。這裡最大的明星就是超人氣的<strong>熊貓家族</strong>，是全日本少數能親眼看到熊貓的地方之一。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                能一次看到熊貓、餵食動物、看海豚表演，親子・情侶都超適合🐬 也可以搭乘專車近距離觀賞獅子、老虎的「LIVE！THE Safari」導覽。園區很大，建議<strong>安排一整天</strong>慢慢玩，並事先在官網購票，就能不用排隊直接入園。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🐼 看得到熊貓", "🐬 海豚表演", "🦁 Safari導覽", "🎡 遊樂園", "👨‍👩‍👧 親子必去"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 和歌山縣西牟婁郡白浜町堅田2399</p>
              <p className="text-xs text-stone-600">🚉 JR「白浜」駅 搭巴士約10分／南紀白浜IC 車程約5分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜17:00（依季節變動・不定休，詳見官網）</p>
              <p className="text-xs text-stone-600">💴 1日票 大人¥5,300／中人（12〜17歲）¥4,300／小人（4〜11歲）¥3,300</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">建議<strong>事先在官網購買電子票</strong>，不用排隊還能預約體驗項目</p>
            </div>

            <a
              href="https://www.aws-s.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 2: In the Outdoor */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {outdoorPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="In the Outdoor 白浜志原海岸 - 和歌山白浜豪華露營"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">In the Outdoor 白浜志原海岸</h3>
                <span className="text-xs text-stone-400">In the Outdoor Shirahama Shihara Coast</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              就位在<strong>國立公園「志原海岸」</strong>旁的豪華露營（Glamping）設施🏕️ 有小木屋、拖車屋、露營帳篷等多種房型，每個房間都附柴火與焚火台。是最靠近巨大洞窟「鳥毛洞窟」的住宿地點，能一邊聽著海浪聲、一邊享受被大自然包圍的夜晚。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                完全不用準備、食材都幫你切好，用<strong>瓦斯烤爐輕鬆享受正宗BBQ</strong>🔥 還有芬蘭式木造<strong>三溫暖</strong>、焚火、看星星、海水浴，怎麼放鬆都可以。情侶、女子旅、家庭、三代同遊甚至<strong>帶寵物</strong>都OK，是想體驗白浜大自然的最佳選擇。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏕️ 豪華露營Glamping", "🔥 免準備BBQ", "🧖 芬蘭式三溫暖", "🌊 國立公園海岸", "🐶 寵物友善"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 和歌山縣白浜町日置1875</p>
              <p className="text-xs text-stone-600">🚉 紀勢自動車道交流道 車程約5分</p>
              <p className="text-xs text-stone-600">⏰ Check-in 16:00／Check-out 10:00（電話受理 9:00〜19:00）</p>
              <p className="text-xs text-stone-600">💴 依房型與方案而異（詳見官網預約）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">熱門房型很快就會被訂滿，建議<strong>提早在官網預約</strong>，並留意當日天氣</p>
            </div>

            <a
              href="https://intheoutdoor.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 3: Kagerou Café */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {kagerouPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="Kagerou Café かげろうカフェ - 和歌山白浜海景咖啡"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Kagerou Café（かげろうカフェ）</h3>
                <span className="text-xs text-stone-400">福菱 Kagerou Café</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              白浜名產「<strong>かげろう</strong>」的老店「福菱」直營的海景咖啡廳☕ 露台座位可以一邊看海一邊享用甜點，店內外約有50個座位。招牌是本店限定的<strong>「生かげろう」</strong>——入口即化的鬆軟蛋糕夾心，一個只要120円，便宜又好吃。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                能一邊看海一邊吃白浜名產，還能<strong>買伴手禮</strong>🎁 除了甜點，手沖咖啡、招牌炸豬排三明治、蓬鬆歐姆蛋三明治也很受歡迎。逛完景點來這裡看海休息剛剛好，也支援刷卡・行動支付與英文服務，對旅客很友善。
            </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌊 海景露台", "🍰 名產生かげろう", "☕ 手沖咖啡", "🥪 炸豬排三明治", "🎁 可買伴手禮"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 和歌山縣西牟婁郡白浜町1279-3</p>
              <p className="text-xs text-stone-600">🚉 JR「白浜」駅 車程約10分／巴士「白浜桟橋」下車 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 8:00〜18:00（Cafe &amp; Bar 18:00〜20:00・無休，臨時休業另計）</p>
              <p className="text-xs text-stone-600">💴 生かげろう ¥120〜／午餐 ¥650〜¥1,200 左右</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">生かげろう為本店限定，喜歡的話建議當場多買幾個當伴手禮🎁</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://fukubishi.co.jp/kagerou_cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.instagram.com/fukubishi/?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Spot 4: とれとれ市場 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {toretorePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="とれとれ市場 - 和歌山白浜海鮮BBQ"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div>
                <h3 className="text-base font-black text-stone-800">とれとれ市場（Toretore Market）</h3>
                <span className="text-xs text-stone-400">とれとれ市場 南紀白浜</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於「とれとれパーク」內的漁協直營大型海鮮市場🐟 有活魚區、鹽干區、熟食區與在地肉品蔬菜的「故鄉村」，是西日本最大級的觀光市場之一。最推薦的玩法是——在市場買好新鮮食材，直接到旁邊的<strong>BBQ區現烤現吃</strong>！2024年3月更翻新成兩層樓，環境更舒適。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                自己挑最新鮮的海鮮、現場豪邁地烤來吃，海鮮控絕對會失心瘋🦐🔥 BBQ入場含飲料吧，還能事先預約肉類或海鮮套餐。就算不BBQ，逛市場買伴手禮、吃現切生魚片也很過癮，是白浜行程中CP值超高的一站。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🐟 漁協直營市場", "🔥 買了現烤BBQ", "🦐 超新鮮海鮮", "🥤 附飲料吧", "🎁 伴手禮天堂"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 和歌山縣西牟婁郡白浜町堅田2521（とれとれパーク内）</p>
              <p className="text-xs text-stone-600">🚉 JR「白浜」駅 車程約5分</p>
              <p className="text-xs text-stone-600">⏰ BBQ 平日11:00〜16:30／假日10:00〜17:00 左右最終入場</p>
              <p className="text-xs text-stone-600">💴 BBQ入場 大人¥1,000／兒童¥700／幼兒¥300（含飲料吧・另購食材）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">套餐採預約制（使用日4天前17時前），假日很熱門建議早點到場</p>
            </div>

            <a
              href="https://toretore.com/ichiba/bbq.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>

            {/* Klookバナー */}
            <a
              href={KLOOK_TORETORE}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-5 block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🐟</span>
              <span className="absolute bottom-4 left-4 text-base opacity-40 select-none">✨</span>

              <div className="relative flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                  🎫 Travel Tips
                </span>
                <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">和歌山一日遊行程</span>
              </div>

              <div className="relative flex items-center gap-3 mb-4">
                <div className="relative w-20 h-20 shrink-0">
                  <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                  <Image
                    src="/poyapiyo-flag.png"
                    alt="ぽやぴよ"
                    fill
                    sizes="80px"
                    className="object-contain p-1 relative -rotate-[4deg]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-black text-stone-800 leading-tight mb-1">
                    想順路排とれとれ市場？
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    有<strong>柯南主題</strong>的和歌山一日遊行程可以一次逛「高階車站」＋「とれとれ市場」，交通不用自己安排。有興趣的話出發前可以先看看行程內容。
                  </p>
                </div>
              </div>

              <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
                🎫 查看和歌山柯南主題一日遊 →
              </div>
              <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">白浜旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 白浜景點分散，<strong>自駕</strong>最方便，從大阪開車約2小時🚗</li>
            <li>✅ 很適合安排<strong>兩天一夜</strong>：白天玩Adventure World、晚上住海邊Glamping</li>
            <li>✅ Adventure World與Glamping都建議<strong>提前上官網預約購票</strong>🎟️</li>
            <li>✅ 海鮮控別錯過とれとれ市場，かげろう則是必買伴手禮🎁</li>
            <li>✅ 白浜也有溫泉與白沙灘，行程有餘裕可以順遊放鬆♨️</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            看熊貓、住海邊、吃海鮮、看海喝咖啡——白浜把度假該有的元素通通集合在一起🌊<br />
            關西自由行想找個能好好放鬆的地方，白浜真的非常值得安排一趟！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「白天看熊貓、晚上在海邊烤肉看星星，這就是最幸福的假期🐼🔥」</p>
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
