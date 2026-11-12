import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/akasaka-chungsol";
const OG_IMAGE = "/akasaka-chungsol/chungsol-1.jpg";

export const metadata: Metadata = {
  title: "青松 赤坂｜24小時營業的韓國料理 百名店✅實吃",
  description:
    "青松（チョンソル）赤坂店：赤坂站徒步3分，24小時・全年無休的韓國料理。泡菜小菜免費續，烤五花肉¥1,650、午餐¥1,100起，可刷卡。食べログ亞洲・異國料理百名店2026。",
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
    title: "青松 赤坂｜24小時營業的韓國料理，小菜吃到飽",
    description: "赤坂站走3分鐘。半夜、清晨都開著的韓國料理店🇰🇷",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "青松 赤坂店的石鍋湯、白飯和整排銅碗小菜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "青松 赤坂｜24小時營業的韓國料理，小菜吃到飽",
    description: "赤坂站走3分鐘的24小時韓國料理🇰🇷",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "青松 赤坂｜24小時營業的韓國料理・小菜免費續【實際造訪】",
  description: "青松（チョンソル）赤坂店：24小時・全年無休的韓國料理店。菜單與價錢、午餐定食、付款方式、交通。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-12T00:00:00+09:00",
  dateModified: "2026-11-12T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "赤坂美食｜青松 韓國料理", item: PAGE_URL },
  ],
};

const P = "/akasaka-chungsol";

const photos = [
  { src: `${P}/chungsol-1.jpg`, alt: "青松 赤坂店的石鍋湯，旁邊是白飯、白蘿蔔、泡菜、涼拌青菜等一整排銅碗小菜" },
  { src: `${P}/chungsol-2.jpg`, alt: "青松的店名招牌和桌上的傳單，寫著 24時間営業、アジア・エスニック百名店2026、宴会コース ¥5,500（含稅）" },
  { src: `${P}/chungsol-3.jpg`, alt: "青松 赤坂店免費附上的小菜：白菜泡菜、涼拌青菜、辣炒小菜，裝在韓國風的銅碗裡" },
];

// ホットペッパーの料理・ランチページ（税込・2024/11更新）
const menuGroups = [
  { title: "🥓 烤肉（晚餐）", items: "烤五花肉サムギョプサル（2人起點）¥1,650／豬五花カンナ豚三段バラ ¥1,650／豬排骨 ¥1,980／牛五花チャドルバギ ¥1,870／上等牛舌 ¥2,970" },
  { title: "🍲 鍋・湯", items: "部隊鍋プテチゲ ¥4,180／一隻雞タッハンマリ ¥4,510／人蔘雞湯サムゲタン ¥3,300／辣牛肉湯ユッケジャン ¥1,650／泡菜鍋 ¥1,650" },
  { title: "🥞 煎餅・一品", items: "海鮮煎餅チヂミ ¥1,980／韭菜・泡菜煎餅 ¥1,430／韓式炒冬粉チャプチェ ¥1,430／辣炒年糕トッポキ ¥1,980／菜包肉ボッサム ¥4,180" },
  { title: "🦀 海鮮", items: "醬油醃蟹ケジャン ¥3,300／辣醃蟹 ¥1,650／活章魚 ¥3,300" },
  { title: "🍜 麵", items: "冷麵 ¥1,650／拌冷麵ビビン麺 ¥1,650／生魚片冷麵 ¥1,980" },
];

const lunchItems = "石鍋拌飯 ¥1,320・拌飯 ¥1,100・烤五花肉定食 ¥1,320・牛五花ロース／カルビ定食 ¥1,430・純豆腐鍋 ¥1,210・雞湯麵 ¥1,320・冷麵 ¥1,320";

const faqItems = [
  {
    q: "青松（チョンソル）是什麼店？中文怎麼念？",
    a: "是赤坂的韓國鄉土料理店。漢字寫「青松」，日文念「チョンソル（Chungsol／Cheongsol）」，就是韓文「청솔」的發音。店裡的傳單寫著「アジア・エスニック百名店 2026」，是食べログ選出的東京亞洲・異國料理百名店。",
  },
  {
    q: "真的24小時營業嗎？",
    a: "是的。ホットペッパー上本館寫的是早上7點到隔天早上7點、全年無休（年中無休）；但對面的別館只開11:00〜23:30。半夜去的話會被帶到本館。",
  },
  {
    q: "青松的價錢多少？",
    a: "ホットペッパー寫的預算是午餐約¥1,000、晚餐¥3,000〜4,000。午餐的拌飯¥1,100起，定食¥1,210〜¥1,430；晚上的烤五花肉一人份¥1,650（2人起點）。所有料理都附泡菜、蘿蔔泡菜和小菜，而且可以免費續（價格為2024年11月更新的資料，以店內菜單為準）。",
  },
  {
    q: "幾點去比較不用排隊？要預約嗎？",
    a: "ホットペッパー的評論（2026年10月）寫「很多人，建議早一點去」；部落客也寫晚上要先預約。週末晚上本館和別館幾乎都會坐滿，晚餐建議在ホットペッパー上網路預約（要3天前）。24小時營業，想不排隊就錯開晚餐時間，深夜或清晨去。",
  },
  {
    q: "可以刷卡嗎？可以用電子支付嗎？",
    a: "可以刷卡（VISA・Master・JCB・Diners）。ホットペッパー上寫不能用電子錢包和QR碼支付，記得帶卡或現金。",
  },
  {
    q: "有中文菜單嗎？",
    a: "我們查到的資料裡沒有寫到中文或英文菜單，桌上的傳單是日文和韓文。可以用手機翻譯拍菜單，或直接指著照片點。",
  },
];

const relatedLinks = [
  { href: "/shin-okubo", label: "🇰🇷 新大久保美食推薦｜韓國料理・咖啡・甜點", desc: "想吃更多韓國料理，就去東京的韓國城" },
  { href: "/tokyo-yakiniku", label: "🥩 東京燒肉推薦", desc: "比起韓式烤五花，想吃日式燒肉的話" },
  { href: "/ginza-apollo", label: "🍽️ THE APOLLO 銀座｜希臘・義大利料理", desc: "從赤坂搭銀座線幾站就到的異國料理" },
];

export default function AkasakaChungsolPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">赤坂美食｜青松 韓國料理</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🇰🇷 韓國料理</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・赤坂</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際品嚐</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          青松 赤坂<br />24小時營業的韓國料理，小菜吃到飽🇰🇷
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-12</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">半夜、清晨都開著的赤坂韓國料理</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            赤坂是東京的商業區，但車站周邊其實藏著不少韓國料理店。其中最特別的是<strong>青松（チョンソル）</strong>——<strong>24小時營業・全年無休</strong>，深夜看完夜景、清晨趕早班飛機前，都能來吃一碗熱湯🍲
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            店裡的傳單寫著<strong>「アジア・エスニック百名店 2026」</strong>，是食べログ選出的東京亞洲・異國料理百名店。點任何一道菜都會送上<strong>泡菜和一整排小菜，而且可以免費續</strong>。這篇介紹（推介）實際去吃的感覺、菜單和價錢。
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">赤坂韓國料理推薦（必食推介）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6 card-split">
          {/* 1枚目を大きく、残り2枚を2段目に並べる */}
          <div className="flex flex-col gap-[2px]">
            {[photos.slice(0, 1), photos.slice(1)].map((row, r) => (
              <div key={r} className="photo-strip">
                {row.map((photo, i) => (
                  <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={r === 0 ? "100vw" : "50vw"}
                      className="object-cover"
                      {...(r === 0 && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">青松 赤坂店</h3>
                <span className="text-xs text-stone-400">チョンソル 赤坂／청솔／Chungsol Akasaka</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              一坐下，什麼都還沒點，桌上就先排滿了<strong>韓國風的銅碗</strong>：白菜泡菜、白蘿蔔、涼拌青菜、辣炒小菜⋯⋯這些都是<strong>免費的，吃完還可以再續</strong>，跟在首爾的韓國食堂一模一樣✨
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              店分成<strong>本館和對面的別館</strong>，總共100席，還有可以坐20人的包廂。部落客寫週末晚上兩邊幾乎都客滿、周圍有一半以上是韓國客人，<strong>像出國了一樣</strong>。晚上的烤五花肉會由店員幫忙烤，份量也很大。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-600 mb-1">✨ 實際吃的（實吃）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點了一碗裝在<strong>黑色石鍋</strong>裡、熱騰騰端上來的湯，配白飯。湯是清爽的白湯，裡面有<strong>白菜、冬粉、青蔥和紅蘿蔔</strong>，撒上黑胡椒，喝起來很溫和🍲 旁邊的小菜裡最推<strong>白菜泡菜</strong>，酸辣剛好，配飯一下就吃完了。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🕐 24小時營業", "📅 全年無休", "🥬 小菜免費續", "🏅 百名店2026", "💳 可刷卡", "🚃 赤坂站徒步3分"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* メニュー */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">📋 菜單與價錢（含稅・ホットペッパー）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {menuGroups.map((g) => (
                  <li key={g.title}>
                    <strong>{g.title}</strong>
                    <br />
                    <span>{g.items}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-bold text-amber-700 mt-3 mb-1">🍱 午餐（附泡菜・小菜・白飯，可續）</p>
              <p className="text-xs text-stone-600 leading-relaxed">{lunchItems}</p>
              <p className="text-xs font-bold text-amber-700 mt-3 mb-1">🎉 宴會套餐</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                烤肉＋8道菜 <strong>¥5,500（含稅）</strong>，8人起，+¥1,980可加2小時喝到飽（飲み放題）
              </p>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 料理・午餐價格為ホットペッパー2024年11月更新的資料，以店內菜單為準。
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都港區赤坂2丁目13-8 赤坂ロイヤルプラザ102</p>
              <p className="text-xs text-stone-600 ib ib-train">赤坂站（千代田線）徒步3分・赤坂見附站徒步6分</p>
              <p className="text-xs text-stone-600 ib ib-clock">本館 7:00〜隔天7:00（24小時）／別館 11:00〜23:30・全年無休</p>
              <p className="text-xs text-stone-600 ib ib-yen">午餐約¥1,000／晚餐¥3,000〜4,000</p>
              <p className="text-xs text-stone-600">💳 可刷卡（VISA・Master・JCB・Diners）・不能用電子錢包和QR碼</p>
              <p className="text-xs text-stone-600">📅 晚餐建議預約（ホットペッパー網路預約，3天前截止）</p>
              <p className="text-xs text-stone-600">🌐 沒有查到中文菜單的資訊，傳單是日文・韓文</p>
              <p className="text-xs text-stone-600">🚭 全席禁菸・可帶小孩・有Wi-Fi</p>
              <p className="text-xs text-stone-600">⏱️ 停留時間目安：午餐約45分鐘／晚上吃烤肉約1.5〜2小時</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                晚上來，兩個人點<strong>烤五花肉（サムギョプサル）</strong>再加一份<strong>海鮮煎餅</strong>就很飽了。份量大，部落客點的<strong>辣炒魷魚</strong>看起來像4〜5人份，人少的話先少點一點再追加。
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://www.hotpepper.jp/strJ000685993/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 青松 赤坂（ホットペッパー・可網路預約）</a>
              <a href="https://www.google.com/maps/search/?api=1&query=%E9%9D%92%E6%9D%BE+%E3%83%81%E3%83%A7%E3%83%B3%E3%82%BD%E3%83%AB+%E8%B5%A4%E5%9D%822-13-8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🗺️ Google 地圖</a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8 mt-2">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">赤坂吃韓國料理小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>24小時營業</strong>，深夜回飯店前、或清晨出發前都能吃到熱騰騰的湯</li>
            <li>✅ 泡菜和小菜<strong>可以免費續</strong>，吃完舉手跟店員說「おかわり（再一份）」就好</li>
            <li>✅ 烤五花肉等烤肉<strong>2人起點</strong>，一個人去的話選午餐定食或湯</li>
            <li>✅ <strong>不能用電子支付</strong>，記得帶信用卡或現金💳</li>
            <li>✅ 週末晚上很容易客滿，<strong>晚餐先在ホットペッパー預約</strong>比較保險</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            赤坂站走3分鐘，就有一間像首爾巷子裡的韓國食堂✨<br />
            不管幾點肚子餓，這裡的石鍋湯都在等你。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「小菜一直續，白飯一下就不夠了🍚」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

        <AuthorCard />
        <PrepBanner />

        {/* 延伸閱讀 */}
        <section>
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">📚 延伸閱讀</h2>
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

        <RelatedArticles slug="akasaka-chungsol" exclude={["/shin-okubo", "/tokyo-yakiniku", "/ginza-apollo"]} />

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
