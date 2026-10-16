import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/meiji-jingu";
const OG_IMAGE = "/meiji-jingu/meiji-1.jpg";

export const metadata: Metadata = {
  title: "明治神宮攻略｜台灣檜木大鳥居・御朱印・開門時間✅實訪",
  description:
    "原宿站旁的明治神宮，免費參拜。大鳥居用的是樹齡1500年的台灣檜木。開門時間每月不同（10月5:40〜16:40），御朱印9:00起，附逛法與交通。",
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
    title: "明治神宮攻略｜台灣檜木大鳥居・御朱印・酒樽牆",
    description: "原宿站旁、70萬平方公尺的森林神社。免費參拜，御朱印、酒樽牆與每月不同的開門時間一次整理。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "明治神宮參道上的木造鳥居與森林" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "明治神宮攻略｜台灣檜木大鳥居・御朱印・開門時間",
    description: "原宿站旁的森林神社・免費參拜⛩️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "明治神宮攻略｜台灣檜木大鳥居・御朱印・酒樽牆・開門時間【實際造訪】",
  description: "明治神宮完整介紹。免費參拜、每月開閉門時間、御朱印、酒樽牆、台灣檜木大鳥居、參拜方式與交通。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-10-16T00:00:00+09:00",
  dateModified: "2026-10-16T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "明治神宮攻略", item: PAGE_URL },
  ],
};

const meijiPhotos = [
  { src: "/meiji-jingu/meiji-1.jpg", alt: "明治神宮參道上的木造鳥居，上面有三個金色菊花紋，後面是整片森林" },
  { src: "/meiji-jingu/meiji-2.jpg", alt: "明治神宮的木造樓門，兩側是迴廊，前面有大樹的枝葉" },
  { src: "/meiji-jingu/meiji-3.jpg", alt: "明治神宮參道旁堆成一整面牆的酒樽，上面寫著各地酒藏的酒名" },
  { src: "/meiji-jingu/meiji-4.jpg", alt: "明治神宮森林裡的小溪，石頭與倒木之間有清水流過" },
  { src: "/meiji-jingu/meiji-5.jpg", alt: "明治神宮的御朱印，寫著奉拜 明治神宮、皇紀二千六百八十六年、令和八年十月十二日" },
];

// 公式サイトの開閉門時間（毎月変わる）
const gateTimes = [
  ["1月", "6:40", "16:20"], ["2月", "6:20", "16:50"], ["3月", "5:40", "17:20"],
  ["4月", "5:10", "17:50"], ["5月", "5:00", "18:10"], ["6月", "5:00", "18:30"],
  ["7月", "5:00", "18:20"], ["8月", "5:00", "18:00"], ["9月", "5:20", "17:20"],
  ["10月", "5:40", "16:40"], ["11月", "6:10", "16:10"], ["12月", "6:40", "16:00"],
];

const relatedLinks = [
  { href: "/yoyogi-park-cafe", label: "☕ 代代木公園咖啡廳2選｜VERVE COFFEE＆nephew", desc: "明治神宮隔壁就是代代木公園，參拜完喝一杯" },
  { href: "/spot", label: "🌿 東京野餐3選｜新宿御苑・代代木・日比谷", desc: "代代木公園和明治神宮相鄰，可以排在同一天" },
  { href: "/shibuya-cafe", label: "☕ 澀谷咖啡廳推薦2選｜RECOCO＆歐舒丹咖啡廳", desc: "原宿往南走就是澀谷" },
];

const faqItems = [
  {
    q: "明治神宮是什麼？",
    a: "供奉明治天皇與昭憲皇太后的神社，日文寫作「明治神宮（めいじじんぐう／Meiji Jingu）」。1920年（大正9年）11月1日創建，位在原宿站旁，周圍約70萬平方公尺的森林，是由全國各地捐獻的約10萬棵樹種出來的人造林。",
  },
  {
    q: "明治神宮要門票嗎？",
    a: "參拜不用門票，免費進入。御朱印、御守等需要另外付初穗料（費用），金額請看授與所現場的標示。",
  },
  {
    q: "明治神宮幾點開？幾點關門？",
    a: "配合日出日落，每個月的開門時間都不一樣。例如10月是5:40〜16:40、11月是6:10〜16:10、12月是6:40〜16:00。傍晚就關門，請不要排在晚上。",
  },
  {
    q: "御朱印在哪裡拿？幾點開始？",
    a: "官方網站寫的是在神樂殿前的授與所「長殿」，受理時間9:00〜閉門。有時候受理地點會依日期調整，現場看指示牌就好。明治神宮的御朱印會寫上「皇紀」紀年，是它的特色。",
  },
  {
    q: "明治神宮怎麼去？從原宿站要走多久？",
    a: "JR山手線「原宿」站表參道口出來，右手邊就是神宮橋與入口（原宿口）。官方說明從各入口走到本殿都要約10分鐘。地址：東京都澀谷區代々木神園町1-1。",
  },
  {
    q: "明治神宮值得去嗎？要逛多久？",
    a: "值得。就在原宿站旁、免費，走進參道馬上安靜下來，跟一出站就是人潮的竹下通完全是兩個世界。只參拜的話來回約30〜40分鐘，加上拍照、拿御朱印抓1小時剛好。",
  },
];

export default function MeijiJinguPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">明治神宮攻略</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">⛩️ 神社（景點・好去處）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・原宿</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          明治神宮攻略<br />台灣檜木大鳥居・御朱印・酒樽牆⛩️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-10-16</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">原宿站出來走一分鐘，就是一整片森林</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            原宿＝竹下通、可麗餅、人潮……但車站的另一側，其實是東京最大片的<strong>森林神社</strong>🌳 一走進參道，路上的聲音一下子就消失了。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            <strong>明治神宮（めいじじんぐう／Meiji Jingu）</strong>供奉明治天皇與昭憲皇太后，<strong>免費參拜</strong>。對台灣旅客來說還有一個特別的地方：參道上的<strong>大鳥居，是用台灣的檜木做的</strong>。這次我們在10月造訪，拿了御朱印，也把開門時間、交通和逛法整理成這一篇。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">東京神社推薦（好去處推介）・明治神宮</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {meijiPhotos.map((photo, i) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="20vw" className="object-cover" {...(i === 0 ? { priority: true } : {})} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">明治神宮</h3>
                <span className="text-xs text-stone-400">めいじじんぐう／Meiji Jingu</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              1920年（大正9年）創建。神社周圍約<strong>70萬平方公尺</strong>的森林，是當年從全國各地捐獻約<strong>10萬棵樹</strong>種出來的<strong>人造林</strong>——100年後長成現在這片看不出是人種的森林🌿 參道很寬，兩側全是大樹，走在裡面夏天也涼。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              參道上有好幾座<strong>木造鳥居</strong>，橫木上釘著金色的菊花紋。其中位在南北參道交會處的<strong>大鳥居</strong>高12公尺、寬17.1公尺，現在這座是1975年重建的第二代，木材是在台灣丹大山找到、<strong>樹齡約1500年的台灣檜木</strong>（第一代用的是阿里山的檜木）。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 這次實際看到的（實訪）</p>
              <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li>⛩️ <strong>鳥居與參道</strong>：抬頭是一整片綠，陽光從樹葉間灑下來</li>
                <li>🍶 <strong>酒樽牆</strong>：參道旁堆成一整面牆的酒樽，每一個都寫著各地酒藏的酒名，很多人在這裡拍照。境內也有法國勃艮第（Bourgogne）酒莊奉納的<strong>葡萄酒樽</strong>，紀念喜歡西洋料理與法國葡萄酒的明治天皇</li>
                <li>🏯 <strong>樓門</strong>：本殿前的大型木造門，深色的木頭、兩側連著迴廊</li>
                <li>🌊 <strong>森林裡的小溪</strong>：參道旁往下看，石頭和倒木之間有清水流過</li>
                <li>📿 <strong>御朱印</strong>：寫著「奉拜 明治神宮」，日期旁邊是「<strong>皇紀二千六百八十六年</strong>」，用的是皇紀紀年</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費參拜", "🌳 70萬㎡森林", "🇹🇼 台灣檜木大鳥居", "📿 御朱印", "🍶 酒樽牆"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都澀谷區代々木神園町1-1</p>
              <p className="text-xs text-stone-600 ib ib-train">JR山手線「原宿」站表參道口出來，右手邊就是神宮橋・原宿口／小田急線「參宮橋」站也可以走到參宮橋口</p>
              <p className="text-xs text-stone-600 ib ib-clock">日出開門、日落關門（每月不同，見下表）</p>
              <p className="text-xs text-stone-600 ib ib-yen">參拜免費（御朱印・御守另付初穗料）</p>
              <p className="text-xs text-stone-600">🚶 各入口走到本殿約10分（官方說明）</p>
              <p className="text-xs text-stone-600">📿 御朱印：神樂殿前授與所「長殿」9:00〜閉門</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約1小時（參拜＋拍照＋御朱印）</p>
              <p className="text-xs text-stone-600">🚗 開車只能從代代木口進入，人多時可能無法入場，建議搭電車</p>
            </div>

            {/* 開門時間 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🕐 每月開門・關門時間（官方網站）</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-1 text-xs text-stone-600">
                {gateTimes.map(([m, open, close]) => (
                  <p key={m}><strong>{m}</strong> {open}〜{close}</p>
                ))}
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 冬天16點就關門。下午才要去的話，記得先看一下當月的關門時間。
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">參拜方式：先在手水舎洗手漱口，到本殿前投香油錢，<strong>二拜・二拍手・一拜</strong>。官方也提醒不要進入樹林裡、不要帶走境內的土和花草。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.meijijingu.or.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.meijijingu.or.jp/sanpai/2.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🕐 開門時間・御朱印（官方）
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=明治神宮"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">明治神宮參拜小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>早上去最安靜</strong>，開門時間很早（10月是5:40），竹下通的店開門前先來參拜剛好</li>
            <li>✅ 入口到本殿要走<strong>約10分鐘</strong>的碎石參道，穿好走的鞋👟</li>
            <li>✅ 經過大鳥居時抬頭看看——那是<strong>台灣檜木</strong>做的🇹🇼</li>
            <li>✅ 想收集御朱印的話，<strong>9:00以後</strong>才開始受理</li>
            <li>✅ 參拜完往旁邊走就是<strong>代代木公園</strong>，往南是表參道和澀谷，可以排成同一天的行程</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一百年前種下的10萬棵樹、台灣來的檜木鳥居、寫著皇紀的御朱印✨<br />
            原宿的熱鬧旁邊，藏著東京最安靜的一段路。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「出站才一分鐘，就從人潮走進森林了🌳」</p>
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

        <RelatedArticles slug="meiji-jingu" exclude={["/yoyogi-park-cafe", "/spot", "/shibuya-cafe"]} />

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
