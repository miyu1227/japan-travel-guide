import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/chigasaki";
const OG_IMAGE = "/chigasaki/cover.jpg";

export const metadata: Metadata = {
  title: "茅崎湘南海灘野餐｜海邊咖啡tuckshop✅實訪",
  description:
    "東京近郊一小時的湘南海邊小旅行。在茅崎公園看烏帽子岩與江之島、鋪野餐墊吃早餐，再走2分鐘到清晨6點就開門的海邊咖啡tuckshop。附交通、停車場、營業時間。",
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
    title: "茅崎夏日推薦｜湘南海灘野餐＆海邊咖啡tuckshop",
    description: "東京近郊一小時的湘南海邊小旅行。海灘野餐看烏帽子岩＋清晨6點開門的海邊咖啡tuckshop🌊",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "茅崎海灘野餐 - 湘南夏日推薦" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "茅崎夏日推薦｜湘南海灘野餐＆海邊咖啡tuckshop",
    description: "海灘野餐看烏帽子岩＋清晨6點開門的海邊咖啡tuckshop🌊☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "茅崎夏日推薦｜湘南海灘野餐＆海邊咖啡tuckshop【實際造訪】",
  description:
    "東京近郊一小時的湘南海邊小旅行：茅崎公園（ヘッドランドビーチ）海灘野餐、看烏帽子岩與江之島，再到清晨6點開門的海邊咖啡tuckshop喝咖啡配司康。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-08-18T00:00:00+09:00",
  dateModified: "2026-08-18T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "茅崎夏日推薦", item: PAGE_URL },
  ],
};

const headlandPhotos = ["/chigasaki/headland-1.jpg", "/chigasaki/headland-2.jpg", "/chigasaki/headland-3.jpg"];
const tuckshopPhotos = [
  "/chigasaki/tuckshop-1.jpg",
  "/chigasaki/tuckshop-2.jpg",
  "/chigasaki/tuckshop-3.jpg",
  "/chigasaki/tuckshop-4.jpg",
  "/chigasaki/tuckshop-5.jpg",
];

const relatedLinks = [
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "美術館・足湯・神社・甜點" },
  { href: "/isehara-gelato", label: "🍦 伊勢原ジェラート｜石田牧場めぐり", desc: "牧場直送鮮牛奶的隱藏名店" },
  { href: "/spot", label: "📍 東京景點推薦懶人包", desc: "第一次來東京必去的人氣景點" },
];

export default function ChigasakiPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">茅崎夏日推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🏖️ 景點</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神奈川・湘南</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          茅崎夏日推薦｜湘南海灘野餐<br />＆清晨6點開門的海邊咖啡🌊
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-18</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">從東京出發一小時，就能抵達的「湘南」海邊</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>茅崎（茅ヶ崎）</strong>位在神奈川縣的湘南海岸，從東京車站搭JR東海道線只要約1小時🚃 這裡是日本衝浪文化的發源地之一，整座城市都圍繞著大海生活——清晨5點就有人抱著衝浪板走向海邊，是和東京完全不同節奏的日本。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這篇介紹的是實際走過的兩個地方：可以鋪野餐墊、看著<strong>烏帽子岩</strong>與<strong>江之島</strong>吃早餐的<strong>「茅崎公園（ヘッドランドビーチ）」</strong>，以及走路2分鐘就到、<strong>清晨6點就開門</strong>的海邊咖啡<strong>「tuckshop」</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>已經去過東京市區、想安排半日〜一日近郊小旅行</strong>的台灣・香港旅人。<strong>你會知道</strong>：怎麼從茅崎車站過去、停車場行情、tuckshop的營業時間與必點，還有夏天在這片海邊玩水要注意什麼。
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">茅崎公園（ヘッドランドビーチ）→ 海灘野餐・看衝浪</p>
                <p className="text-xs text-stone-500 leading-relaxed">正面烏帽子岩、東邊江之島、天氣好還能看到富士山</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">tuckshop → 海邊咖啡站・司康與咖啡</p>
                <p className="text-xs text-stone-500 leading-relaxed">早上6點開門、寵物OK、可外帶到海灘吃</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            兩個地方走路只要約2分鐘，<strong>「先在tuckshop買早餐 → 走到海灘野餐」</strong>是最順的走法🥪
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">茅崎夏日推薦（推介）・2選</h2>

        {/* Spot 1: ヘッドランドビーチ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {headlandPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="茅崎公園 ヘッドランドビーチ - 湘南海灘野餐"
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">茅崎公園（ヘッドランドビーチ）</h3>
                <span className="text-xs text-stone-400">Chigasaki Park / Headland Beach</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              因為海中有一道<strong>T字型的人工突堤</strong>，當地人習慣叫它<strong>「Tバー（T-bar）」</strong>🌊 突堤讓海底地形變得適合造浪，是湘南知名的衝浪點，一年四季都能看到成排的衝浪客坐在浪頭上等浪。海灘正對著茅崎的象徵<strong>「烏帽子岩」</strong>，往東能看到<strong>江之島</strong>，冬天空氣清澈時往西還能望見<strong>富士山</strong>🗻
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                這裡不是那種擠滿陽傘的觀光海水浴場，而是<strong>當地人日常生活裡的海</strong>🏖️ 沙灘腹地很寬、又有整理過的木棧道，鋪一張野餐墊、帶三明治和飲料坐下來就是最棒的行程。我們去的那天就在沙灘上煎了熱壓吐司配水果，看著衝浪的人發呆一整個早上——這種「什麼都不做」的時間，才是湘南最值得體驗的東西✨
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏖️ 海灘野餐", "🏄 衝浪聖地", "🗻 遠眺富士山・江之島", "🌅 早晨最舒服", "📸 IG拍照熱點"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 神奈川縣茅ヶ崎市東海岸南（茅ヶ崎公園・ヘッドランド周邊）</p>
              <p className="text-xs text-stone-600">🚉 JR「茅ヶ崎」駅南口搭巴士至「ヘッドランド入口」下車 徒歩約3分／從車站走路約23分</p>
              <p className="text-xs text-stone-600">⏰ 全天開放（無入場費）</p>
              <p className="text-xs text-stone-600">🅿️ 周邊有多個停車場，平日約¥700／日起（7〜8月旺季會漲價）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                這裡<strong>沒有海水浴場的救生員與遮陽設施</strong>，突堤附近容易有離岸流，請以<strong>散步・野餐・看海</strong>為主，不要隨意下水游泳
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/qa7mneffUbRT4CAs9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🗺️ Google 地圖
            </a>
          </div>
        </section>

        {/* Spot 2: tuckshop */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {tuckshopPhotos.slice(0, 3).map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="tuckshop 茅崎 - 海邊咖啡站" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            {tuckshopPhotos.slice(3, 5).map((src, i) => (
              <div key={i} className="relative aspect-[3/2] bg-stone-100">
                <Image src={src} alt="tuckshop 茅崎 - 咖啡與司康" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">tuckshop</h3>
                <span className="text-xs text-stone-400">タックショップ</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              距離海灘走路只要2分鐘的<strong>海邊咖啡站</strong>☕ 位在一棟白色建築「GERMER」的1樓，樓上還有共享工作空間與租借教室，是茅崎在地人的<strong>第三場所（third place）</strong>。最厲害的是——<strong>早上6點就開門</strong>，衝浪客沖完澡就直接來這裡吃早餐，是只有海邊小鎮才有的日常風景🏄
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                櫃檯上的木製玻璃櫃裡擺著<strong>手作司康</strong>，招牌是<strong>「巧克力豆司康」（約¥380）</strong>，還有很日式的<strong>「紅豆奶油乳酪司康」（約¥500）</strong>🍪 我們點了司康配冰咖啡與咖啡歐蕾，端上來的餐巾紙上還手寫了「Thank You」和一隻小狗塗鴉，超級溫暖🥰 店內是站立式的吧台座位，戶外則有很大的木棧露台，<strong>可以帶狗狗一起坐</strong>，外帶到海灘吃也完全OK。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌅 早上6點開門", "🍪 手作司康", "☕ 咖啡・啤酒都有", "🐕 露台可帶寵物", "🥪 可外帶到海灘"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 神奈川縣茅ヶ崎市東海岸南6-4-76（GERMER 1F）</p>
              <p className="text-xs text-stone-600">🚉 JR「茅ヶ崎」駅 徒歩約23分／從ヘッドランドビーチ 徒歩約2分</p>
              <p className="text-xs text-stone-600">⏰ 6:00〜19:00（不定休・營業日以官方IG為準）</p>
              <p className="text-xs text-stone-600">💴 司康約¥380〜¥500、飲料約¥380〜（價格以店頭菜單為準）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                有些日子<strong>只營業早上時段</strong>，出發前務必先看Instagram的當月營業行事曆
              </p>
            </div>

            <a
              href="https://www.instagram.com/tuckshop_germer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              📷 Instagram
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">茅崎海邊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從東京車站搭<strong>JR東海道線</strong>到茅ヶ崎駅約1小時，不用轉車最輕鬆🚃</li>
            <li>✅ 車站到海邊走路約23分鐘，怕熱的話<strong>搭巴士或計程車（的士）</strong>比較舒服；夏天記得帶水與防曬</li>
            <li>✅ 想避開人潮又想拍好照片，<strong>清晨6〜9點</strong>是最舒服的時段（也剛好是tuckshop開門的時間）🌅</li>
            <li>✅ 沙灘上沒有遮陽處，<strong>建議自備野餐墊、遮陽帽與飲料</strong>；垃圾請自己帶走🚮</li>
            <li>✅ 突堤附近水流強，<strong>不建議下水游泳</strong>；想玩水請去有救生員的正規海水浴場</li>
            <li>✅ 開車來的話周邊停車場約¥700／日起，<strong>7〜8月旺季會漲價且很快客滿</strong>，建議早點到</li>
            <li>✅ 想順路多玩一點，可以再往東走到<strong>江之島・鎌倉</strong>，用一天串成湘南海岸線行程🚉</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            沒有排隊、沒有門票、也沒有必看的名勝——茅崎給的是另一種旅行體驗：坐在沙灘上吃早餐，看著烏帽子岩和一整排衝浪的人，時間就這樣過去了🌊<br />
            如果東京的行程已經排得太滿，把其中半天留給湘南的海吧！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「在海邊吃早餐的那個早上，是這趟旅行最放鬆的時間🌅」</p>
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

        <RelatedArticles slug="chigasaki" exclude={["/hakone", "/isehara-gelato", "/spot"]} />

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
