import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/showa-kinen-koyo";
const OG_IMAGE = "/showa-kinen-koyo/koyo-1.jpg";

export const metadata: Metadata = {
  title: "昭和紀念公園紅葉2026｜銀杏並木點燈・最佳時期✅實訪",
  description:
    "國營昭和紀念公園「秋の夜散歩2026」10/29〜11/29，銀杏並木16:30〜20:30點燈、入園大人¥450。西立川站徒步2分，11/14實際造訪的顏色與人潮。",
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
    title: "昭和紀念公園紅葉2026｜銀杏並木點燈・最佳時期",
    description: "106棵銀杏排成的黃色隧道＋噴水池，傍晚16:30開始點燈。門票、點燈時間、日本庭園夜楓票價一次整理。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "昭和紀念公園點燈後的銀杏並木，黃色的樹葉與藍色的天空" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "昭和紀念公園紅葉2026｜銀杏並木點燈",
    description: "立川的黃色銀杏隧道，傍晚點燈超好拍🍁",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "昭和紀念公園紅葉2026｜銀杏並木點燈・最佳時期【實際造訪】",
  description: "國營昭和紀念公園2026年秋天的銀杏與紅葉。カナール與かたらい兩條銀杏並木、日本庭園的楓葉、「秋の夜散歩2026」點燈時間與票價，以及11月14日實際造訪的顏色與人潮。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-17T00:00:00+09:00",
  dateModified: "2026-11-17T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "昭和紀念公園紅葉2026", item: PAGE_URL },
  ],
};

const photos = [
  { src: "/showa-kinen-koyo/koyo-1.jpg", alt: "點燈後的銀杏並木，從下往上看，黃色與綠色的銀杏葉被燈光照亮，後面是藍色的天空" },
  { src: "/showa-kinen-koyo/koyo-2.jpg", alt: "天黑後的カナール，噴水池在中間，兩側是一整排點燈的黃色銀杏，盡頭是建築物" },
  { src: "/showa-kinen-koyo/koyo-3.jpg", alt: "傍晚的カナール水池，兩側黃色銀杏倒映在水面，噴水池旁走著很多遊客" },
  { src: "/showa-kinen-koyo/koyo-4.jpg", alt: "昭和紀念公園花壇前的日期看板寫著2026年11月14日，後面是銀杏並木與人潮" },
  { src: "/showa-kinen-koyo/koyo-5.jpg", alt: "已經轉成金黃色的銀杏樹枝，後面是傍晚的天空" },
  { src: "/showa-kinen-koyo/koyo-6.jpg", alt: "還帶點黃綠色的大銀杏樹，樹下的步道擠滿了遊客" },
  { src: "/showa-kinen-koyo/koyo-7.jpg", alt: "黃綠色的銀杏葉近拍，葉子還沒有完全轉黃" },
];

const spots = [
  { name: "カナールの銀杏並木", detail: "106棵・約200m・噴水池兩側", peak: "11月上旬〜中旬", gate: "立川口 約300m" },
  { name: "かたらいの銀杏並木", detail: "98棵・300m・自然樹形", peak: "11月中旬〜下旬", gate: "西立川口 約730m" },
  { name: "日本庭園的楓葉", detail: "約300棵楓樹", peak: "11月上旬〜下旬", gate: "夜間要另外買票" },
];

const relatedLinks = [
  { href: "/showa-kinen-park", label: "🌿 昭和紀念公園門票¥450｜立川景點・四季花海", desc: "春櫻・夏向日葵・冬燈光秀，四季的玩法都在這篇" },
  { href: "/koyo", label: "🍁 東京紅葉2026｜神宮外苑銀杏並木", desc: "都心的銀杏大道，跟昭和紀念公園比一比" },
  { href: "/kyu-furukawa-garden", label: "🌹 舊古河庭園｜洋館與玫瑰・入園¥150", desc: "康德設計的洋館＋玫瑰＋日本庭園，也是東京的秋天散步好去處" },
];

const faqItems = [
  {
    q: "昭和紀念公園的銀杏・紅葉什麼時候最好看？",
    a: "官方的目安是：噴水池旁的カナール銀杏並木11月上旬〜中旬、かたらいの銀杏並木11月中旬〜下旬、日本庭園的楓葉11月上旬〜下旬，カナール會先黃，接著才是かたらい。產經新聞11月14日的報導說銀杏已經到了最佳時期，可以看到23日左右。我們11月14日去的時候，カナール大部分已經黃了，但還有一些樹帶著黃綠色。",
  },
  {
    q: "「秋の夜散歩2026」點燈是幾點？要另外付錢嗎？",
    a: "2026年10月29日〜11月29日，每天16:30〜20:30點燈（最後入園20:30、21:00閉園）。點燈地點是かたらいの銀杏並木、日本庭園和カナール。銀杏並木和カナール只要付入園費（大人¥450、65歲以上¥210、中學生以下免費）就能看；日本庭園16:30以後要另外買「日本庭園ライトアップ觀賞券」。",
  },
  {
    q: "日本庭園的夜間點燈票多少錢？",
    a: "事前購買大人・65歲以上¥1,200、中小學生¥600；當天在「こもれびの家」窗口買是大人・65歲以上¥1,300、中小學生¥700（16:00〜20:00，只收現金）。也有含入園費的套票，事前購買大人¥1,600、65歲以上¥1,410。白天看日本庭園只要入園費，但要在16:00前先出園一次。",
  },
  {
    q: "晚上要從哪個門進去？從新宿怎麼去？",
    a: "點燈期間16:30以後只開「西立川口」和「立川口」。想先看かたらいの銀杏並木的話，JR青梅線「西立川」站公園口走約2分就是西立川口，從入口到並木約730m；想先看カナール的話，JR中央線「立川」站北口走約18分到立川口，入口到カナール約300m。從新宿搭JR中央線到立川，再轉青梅線1站就是西立川。",
  },
  {
    q: "週末人多嗎？幾點去比較好？",
    a: "很多。我們11月14日（週六）16:30左右到カナール，剛好是點燈開始的時間，噴水池周邊和步道都是人，拍照要等空檔。官方在11月14日也公告了夜間かたらいの銀杏並木改成單向通行。想拍人少的照片，建議平日或白天早一點去；想看點燈，就抓16:30前後天色還有點藍的時候。",
  },
  {
    q: "晚上可以騎腳踏車逛嗎？",
    a: "不行。16:30以後園內禁止騎自行車。晚上可以搭園內移動巴士（眺めのテラス⇔日本庭園前，17:30〜20:30，單程大人¥400、中小學生¥200，只能用電子支付）。白天的租借自行車是大人3小時¥600。",
  },
  {
    q: "園內有秋天限定的食物嗎？",
    a: "點燈期間有，官方列出的有ふれあい広場レストラン的「秋のもみじソフト」（楓葉霜淇淋，15:30〜）、ぎんなん茶屋的蘑菇披薩和熱紅酒、レイクサイドレストハウス的「秋の彩り豚汁」、渓流広場レストラン的「大學芋霜淇淋」等，都賣到20:30。",
  },
];

export default function ShowaKinenKoyoPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">昭和紀念公園紅葉2026</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 border border-orange-300 text-xs font-semibold px-3 py-1 rounded-full">🍁 紅葉（景點・好去處）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・立川</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          昭和紀念公園紅葉2026｜銀杏並木點燈<br />最佳時期・門票・夜間怎麼逛🍁
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-17</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">噴水池兩側的黃色銀杏，傍晚開始點燈</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            東京立川的<strong>國營昭和紀念公園（しょうわきねんこうえん／Showa Kinen Park）</strong>，秋天最有名的是兩條<strong>銀杏並木</strong>🍂 一條是噴水池兩側的<strong>カナール</strong>，一條是自然樹形的<strong>かたらいの銀杏並木</strong>，再加上日本庭園約300棵楓樹。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            2026年的「<strong>黃葉・紅葉まつり＆秋の夜散歩2026</strong>」是<strong>10月29日〜11月29日</strong>，每天<strong>16:30〜20:30點燈</strong>，銀杏並木只要付<strong>入園費大人¥450</strong>就能看。我們在<strong>11月14日（週六）</strong>傍晚去了カナール，把顏色、人潮、點燈時間和票價整理成這篇。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 3地點 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">紅葉3個地點・什麼時候最美？</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-stone-600">
              <thead>
                <tr className="text-left text-stone-500 border-b border-stone-100">
                  <th className="py-2 pr-3">地點</th>
                  <th className="py-2 pr-3">規模</th>
                  <th className="py-2 pr-3">最佳時期（官方）</th>
                  <th className="py-2">離入口</th>
                </tr>
              </thead>
              <tbody>
                {spots.map((s) => (
                  <tr key={s.name} className="border-b border-stone-50 last:border-0">
                    <td className="py-2 pr-3 font-bold whitespace-nowrap">{s.name}</td>
                    <td className="py-2 pr-3">{s.detail}</td>
                    <td className="py-2 pr-3 whitespace-nowrap">{s.peak}</td>
                    <td className="py-2">{s.gate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-stone-500 leading-relaxed mt-2">※ 官方說明是カナール先黃，接著才是かたらい。11月中旬以後去的話，兩條都能看到。</p>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">昭和紀念公園的秋天（紅葉好去處）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="flex flex-col gap-[2px]">
            {/* 縦写真4枚は、PCは1行に並べて高さを抑え、スマホは2×2にして小さくしすぎない */}
            {[photos.slice(0, 3), photos.slice(3)].map((row, r) => (
              <div key={r} className="photo-strip" style={row.length === 4 ? { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" } : undefined}>
                {row.map((photo, i) => (
                  <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                    <Image src={photo.src} alt={photo.alt} fill sizes={row.length === 4 ? "(min-width: 640px) 25vw, 50vw" : "33vw"} className="object-cover" {...(r === 0 && i === 0 ? { priority: true } : {})} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">國營昭和紀念公園</h3>
                <span className="text-xs text-stone-400">こくえいしょうわきねんこうえん／Showa Kinen Park</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              公園的玄關口「<strong>カナール</strong>」是一條長長的水池，中間有噴水池，兩側種著<strong>106棵銀杏</strong>。點燈之後，黃色的樹排成兩道牆，倒映在水面上，是這座公園秋天最代表性的畫面✨ 另一條「<strong>かたらいの銀杏並木</strong>」有<strong>98棵、300公尺</strong>，不修剪、讓樹自然長開，樹冠比較寬，走在下面像一條黃色隧道。
            </p>

            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-orange-700 mb-1">✨ 這次實際看到的（實訪・11月14日 週六 16:30〜17:00）</p>
              <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li>🍂 <strong>顏色</strong>：カナール的銀杏<strong>大部分已經轉黃</strong>，但也有幾棵還是<strong>黃綠色</strong>，近看葉子還沒全黃</li>
                <li>⛲ <strong>噴水池＋點燈</strong>：16:30過後燈一亮，天空還有點藍的時候最好拍，黃色的樹和藍天的對比很漂亮</li>
                <li>👥 <strong>人潮</strong>：週六傍晚剛好是點燈開始，噴水池周邊和步道都是人，拍照要等空檔</li>
                <li>📅 <strong>日期看板</strong>：花壇前放著「Today&apos;s Date」看板，可以拍下造訪日期當紀念</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍁 10/29〜11/29 點燈", "🌙 16:30〜20:30", "🍂 銀杏204棵", "💴 入園¥450", "🚃 西立川站徒步2分"].map((t) => (
                <span key={t} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都立川市綠町3173</p>
              <p className="text-xs text-stone-600 ib ib-train">JR青梅線「西立川」站公園口 徒步約2分（西立川口）／JR中央線「立川」站北口 徒步約18分（立川口）</p>
              <p className="text-xs text-stone-600 ib ib-clock">點燈期間 有料區域9:30〜21:00（點燈16:30〜20:30，16:30以後只開西立川口・立川口）</p>
              <p className="text-xs text-stone-600 ib ib-yen">入園 大人¥450／65歲以上¥210／中學生以下免費（當天可再入園）</p>
              <p className="text-xs text-stone-600">🏯 日本庭園夜間點燈票：事前¥1,200（中小學生¥600）／當天窗口¥1,300（¥700・只收現金）</p>
              <p className="text-xs text-stone-600">💳 入園費・停車費・部分餐廳可用電子支付；夜間園內巴士只能電子支付</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約2小時（白天看顏色＋傍晚看點燈）</p>
              <p className="text-xs text-stone-600">🅿️ 普通車¥900／天（夜間只能用立川口・西立川口停車場）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">想白天看黃葉、晚上看點燈的話，<strong>15:30左右入園</strong>最剛好：先逛カナール，天黑前走到かたらいの銀杏並木。<strong>16:30以後不能騎自行車</strong>，園區很大，晚上用走的要抓好時間。11月的傍晚很冷，記得帶外套🧥</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://www.showakinen-koen.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
              <a href="https://www.showakinen-koen.jp/autumn-night-walk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🌙 秋の夜散歩2026（官方）
              </a>
              <a href="https://www.instagram.com/showakinenpark/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📷 Instagram
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=国営昭和記念公園+西立川口" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>

        {/* 夜の楽しみ方 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">晚上的秋季限定美食🍠</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">點燈期間園內的餐廳和小店會賣秋天限定的東西（官方公布，都賣到20:30）：</p>
          <ul className="space-y-1.5 text-sm text-stone-600">
            <li>🍦 <strong>秋のもみじソフト</strong>（楓葉霜淇淋）：ふれあい広場レストラン，15:30〜</li>
            <li>🍷 <strong>熱紅酒・蘑菇披薩</strong>：ぎんなん茶屋</li>
            <li>🍲 <strong>秋の彩り豚汁・巧克力蒙布朗</strong>：レイクサイドレストハウス売店</li>
            <li>🍠 <strong>大學芋霜淇淋</strong>：渓流広場レストラン，16:00〜</li>
            <li>☕ <strong>熱可可・白抹茶拿鐵</strong>：立川口売店</li>
          </ul>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">昭和紀念公園賞楓小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 2026年銀杏的最佳時期是<strong>11月中旬〜23日左右</strong>，點燈到<strong>11月29日</strong></li>
            <li>✅ 想看かたらいの銀杏並木就從<strong>西立川口</strong>進（西立川站走2分）</li>
            <li>✅ 銀杏並木和カナールの點燈<strong>只要入園費</strong>，日本庭園晚上才要另外買票</li>
            <li>✅ 日本庭園的當天窗口票<strong>只收現金</strong>，先準備好零錢💴</li>
            <li>✅ <strong>週末傍晚人非常多</strong>，想拍空景就選平日</li>
            <li>✅ 晚上不能騎自行車，走不動的話搭<strong>園內巴士</strong>（只能電子支付）</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            噴水池兩邊排滿黃色的銀杏，燈一亮整條カナール都變成金色✨<br />
            從新宿搭電車不到1小時，就能看到這麼大片的秋天。<br />
            11月底前來立川，白天看黃葉、晚上看點燈，一次享受兩種風景🍁
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「燈亮起來的那一瞬間，大家都同時拿出手機了🍂」</p>
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

        <RelatedArticles slug="showa-kinen-koyo" exclude={["/showa-kinen-park", "/koyo", "/kyu-furukawa-garden"]} />

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
