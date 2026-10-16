import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/yoyogi-park-cafe";
const OG_IMAGE = "/yoyogi-park-cafe/nephew-1.jpg";

export const metadata: Metadata = {
  title: "VERVE COFFEE＆nephew｜代代木公園咖啡廳2選✅實訪",
  description:
    "代代木公園站徒步2〜3分的2間。VERVE COFFEE 7:00開門、狗狗可進店；nephew 8:00開門、秋季布丁芭菲與手作蛋糕¥600，只收電子支付。",
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
    title: "代代木公園咖啡廳2選｜VERVE COFFEE＆nephew",
    description: "代代木公園站徒步2〜3分。狗狗可進店的加州咖啡VERVE，和蛋糕擺滿吧台的nephew。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "nephew 代代木公園的手作蛋糕吧台" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VERVE COFFEE＆nephew｜代代木公園咖啡廳2選",
    description: "代代木公園站徒步2〜3分・早上就開的2間咖啡廳☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "代代木公園咖啡廳2選｜VERVE COFFEE ROASTERS＆nephew【實際造訪】",
  description: "代代木公園站旁的VERVE COFFEE ROASTERS YOYOGI PARK與nephew。交通、營業時間、付款方式、寵物、甜點價格與座位。",
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
    { "@type": "ListItem", position: 2, name: "代代木公園咖啡廳", item: PAGE_URL },
  ],
};

const vervePhotos = [
  { src: "/yoyogi-park-cafe/verve-1.jpg", alt: "VERVE COFFEE ROASTERS 代代木公園店的吧台 - 濃縮咖啡機、磨豆機與一排手沖玻璃壺" },
  { src: "/yoyogi-park-cafe/verve-2.jpg", alt: "VERVE COFFEE ROASTERS 代代木公園店的外觀 - 白牆上的VERVE標誌與玻璃門" },
  { src: "/yoyogi-park-cafe/verve-3.jpg", alt: "VERVE COFFEE ROASTERS 代代木公園店的熱咖啡與巧克力蛋糕，裝在灰綠色陶杯與陶盤" },
  { src: "/yoyogi-park-cafe/verve-4.jpg", alt: "VERVE COFFEE ROASTERS 代代木公園店的甜點櫃 - 柳橙蛋糕等磅蛋糕一片¥880，旁邊是咖啡豆貨架" },
];

const nephewPhotos = [
  { src: "/yoyogi-park-cafe/nephew-1.jpg", alt: "nephew 代代木公園的吧台 - 南瓜焦糖蛋糕¥600、栗子莓果蛋糕等手作蛋糕擺滿一整桌，旁邊是AUTUMN DAYS秋季菜單" },
  { src: "/yoyogi-park-cafe/nephew-2.jpg", alt: "nephew 的秋季芭菲 - 玻璃杯上放一整顆布丁和地瓜片，旁邊是冰拿鐵" },
  { src: "/yoyogi-park-cafe/nephew-3.jpg", alt: "nephew 的熱拿鐵（深藍色杯子）、冰拿鐵和一片栗子蛋糕，放在白色磁磚桌上" },
  { src: "/yoyogi-park-cafe/nephew-4.jpg", alt: "nephew 吧台上的整顆蛋糕、布朗尼和馬芬，背景是藍色磁磚牆" },
  { src: "/yoyogi-park-cafe/nephew-5.jpg", alt: "nephew 的藍色店門與看板 - Cafe & Bistro bar，Morning 8am-11am、Cafe 11am-5pm、Bistro & Bar 7pm-0am" },
];

const relatedLinks = [
  { href: "/spot", label: "🌿 東京野餐3選｜新宿御苑・代代木・日比谷", desc: "代代木公園免費入園，咖啡外帶進公園坐草皮" },
  { href: "/bolt-uehara", label: "☕ 代代木上原 BOLT｜寵物友善人氣咖啡廳", desc: "小田急線一站之隔，也是可以帶狗的店" },
  { href: "/roppongi-cafe", label: "☕ VERVE COFFEE 六本木｜兩層樓玻璃屋", desc: "同一個品牌的六本木店，露台座＋2樓座位" },
];

const faqItems = [
  {
    q: "VERVE COFFEE ROASTERS 是什麼？",
    a: "來自美國加州聖塔克魯茲（Santa Cruz）的精品咖啡品牌，日文寫作「ヴァーヴ コーヒー ロースターズ」。日本的咖啡豆在北鎌倉烘焙。代代木公園店的店名是「VERVE COFFEE ROASTERS YOYOGI PARK」（代々木公園／Yoyogi Koen）。",
  },
  {
    q: "VERVE COFFEE 代代木公園店怎麼去？",
    a: "東京Metro千代田線「代々木公園」駅3號出口徒步約3分；小田急線「代々木八幡」駅北口徒步約6分。從代代木公園的參宮橋門・西門走過來也是約3分。地址：東京都澀谷區代々木5-66-5 アルベリ代々木公園1F。",
  },
  {
    q: "可以帶狗嗎？",
    a: "可以。依店家資訊介紹網站的刊載，狗狗店內和露台座都OK。散步完公園直接帶進來很方便。",
  },
  {
    q: "幾點開？有公休日嗎？",
    a: "官方網站寫的是每天7:00〜21:00（Everyday）。早上7點就開，逛代代木公園前先來一杯剛好。",
  },
  {
    q: "可以刷卡嗎？有Wi-Fi和插座嗎？",
    a: "現金、信用卡、電子錢包、QR碼支付（PayPay等）都可以用。沒有Wi-Fi；插座只有店內座位有，露台座沒有。",
  },
  {
    q: "價錢多少？",
    a: "我們造訪當天，VERVE 甜點櫃裡的柳橙蛋糕（ORANGE CAKE）等磅蛋糕標示一片¥880；nephew 的季節限定南瓜焦糖蛋糕（Pumpkin Caramel Cake）標示¥600。咖啡的價格請以店內菜單為準。",
  },
  {
    q: "nephew 是什麼樣的店？",
    a: "代代木公園站旁、富ヶ谷的「Cafe & Bistro bar」，讀作「ネフュー（nephew）」。池尻大橋的人氣酒吧「LOBBY」的2號店，2021年4月開幕，由兩層樓的獨棟房子改裝。白天是咖啡廳，吧台上擺滿手作蛋糕；晚上7點以後變成餐酒館。",
  },
  {
    q: "nephew 幾點開？可以付現金嗎？",
    a: "店門口的看板寫的是：Morning 8:00〜11:00、Cafe 11:00〜17:00、Bistro & Bar 19:00〜24:00（17〜19點中間休息）。店內標示「CASHLESS ONLY」，只收電子支付，不收現金，請帶信用卡或手機支付。",
  },
  {
    q: "VERVE 和 nephew 要選哪一間？",
    a: "帶狗、想喝手沖或一保堂抹茶、需要插座 → VERVE COFFEE（7點就開）。想吃蛋糕、芭菲等甜點，或晚上想喝一杯 → nephew。兩間走路只差幾分鐘，排在同一天也可以。",
  },
  {
    q: "不喝咖啡也可以去嗎？",
    a: "可以。VERVE 有京都老字號「一保堂茶舗」的抹茶拿鐵、煎茶和玄米茶，牛奶可以免費換成低脂牛奶、豆漿或杏仁奶。nephew 造訪當天的季節飲料有焙茶拿鐵（Hojicha Latte）、焦糖栗子拿鐵、紫地瓜拿鐵。",
  },
];

export default function YoyogiParkCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">代代木公園咖啡廳</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳（咖啡店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・代代木公園</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          代代木公園咖啡廳2選<br />VERVE COFFEE ＆ nephew・早上就開的公園旁咖啡☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-10-16</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">逛代代木公園前後，先來這裡坐一下</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            代代木公園是東京市中心最大的公園之一，<strong>免費入園</strong>、草皮很大，週末很多人來散步、遛狗🐕 可是公園周邊能好好坐下來的咖啡廳意外地不多。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）兩間，都在千代田線<strong>「代々木公園」站走路2〜3分鐘</strong>的地方：狗狗店內也能進、早上7點開門的加州精品咖啡<strong>「VERVE COFFEE ROASTERS」</strong>，和吧台上擺滿手作蛋糕、晚上變成餐酒館的<strong>「nephew」</strong>。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 比較 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">2間怎麼選？一眼比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-stone-600">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500">
                  <th className="text-left py-2 pr-2 font-bold"></th>
                  <th className="text-left py-2 pr-2 font-bold">VERVE COFFEE</th>
                  <th className="text-left py-2 font-bold">nephew</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100"><td className="py-2 pr-2 font-bold">開門</td><td className="py-2 pr-2">7:00〜21:00</td><td className="py-2">8:00〜17:00／19:00〜24:00</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 pr-2 font-bold">強項</td><td className="py-2 pr-2">手沖咖啡・一保堂抹茶</td><td className="py-2">手作蛋糕・季節芭菲</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 pr-2 font-bold">付款</td><td className="py-2 pr-2">現金・刷卡・PayPay</td><td className="py-2"><strong>只收電子支付</strong></td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 pr-2 font-bold">狗狗</td><td className="py-2 pr-2">店內・露台OK</td><td className="py-2">現場確認</td></tr>
                <tr><td className="py-2 pr-2 font-bold">站前</td><td className="py-2 pr-2">3號出口 徒步3分</td><td className="py-2">徒步約2分</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">代代木公園咖啡廳推薦（咖啡店推介）・2選</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {vervePhotos.map((photo, i) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="25vw" className="object-cover" {...(i === 0 ? { priority: true } : {})} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">VERVE COFFEE ROASTERS YOYOGI PARK</h3>
                <span className="text-xs text-stone-400">ヴァーヴ コーヒー ロースターズ 代々木公園</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              白色牆面上一個黑色的 <strong>VERVE</strong> 標誌，大片玻璃窗讓店裡很明亮🌿 一進門就是長長的吧台：<strong>綠色大理石檯面</strong>上有濃縮咖啡機、大台的磨豆機，還有一排<strong>手沖濾杯和玻璃壺</strong>，每一壺前面立著豆卡。後面的木架上堆滿一袋袋 VERVE 的咖啡豆。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              咖啡之外，這間店也喝得到京都老字號<strong>「一保堂茶舗」的抹茶拿鐵、煎茶和玄米茶</strong>🍵 牛奶可以<strong>免費</strong>換成低脂牛奶、豆漿或杏仁奶，不喝咖啡的旅伴也能一起來。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 實際點的（實訪）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點了<strong>熱咖啡</strong>和一個<strong>巧克力蛋糕</strong>。咖啡裝在<strong>灰綠色的陶杯</strong>裡，杯子很大、份量很足☕ 蛋糕放在同色系的陶盤上，附叉子和濕紙巾。我們坐在店內的木頭桌，喝完再走去公園剛剛好。
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍰 甜點櫃（造訪當天）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li>・<strong>ORANGE CAKE</strong>（柳橙蛋糕）<span className="ml-1">¥880</span></li>
                <li>・<strong>BEURRE SALÉ</strong>（鹽味奶油蛋糕）<span className="ml-1">¥880</span></li>
                <li>・<strong>CHOCOLATE &amp; COFFEE</strong> 口味的蛋糕 <span className="ml-1">¥880</span></li>
                <li>・另外還有餅乾和馬芬類的烘焙點心</li>
              </ul>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 甜點的名牌是英文。品項會更換，現場以櫃內標示為準。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🐕 狗狗可進店", "🌅 早上7點開門", "🍵 一保堂抹茶拿鐵", "🌿 露台座", "💳 可刷卡・PayPay"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都澀谷區代々木5-66-5 アルベリ代々木公園1F</p>
              <p className="text-xs text-stone-600 ib ib-train">千代田線「代々木公園」駅3號出口 徒步約3分／小田急線「代々木八幡」駅北口 徒步約6分</p>
              <p className="text-xs text-stone-600 ib ib-clock">7:00〜21:00（官網標示每天營業）</p>
              <p className="text-xs text-stone-600 ib ib-yen">磅蛋糕一片¥880（店內標示）</p>
              <p className="text-xs text-stone-600">💳 現金・信用卡・電子錢包・QR碼支付（PayPay等）</p>
              <p className="text-xs text-stone-600">🐕 狗狗店內・露台都OK／全席禁菸</p>
              <p className="text-xs text-stone-600">🔌 店內座位有插座（露台沒有）／沒有Wi-Fi</p>
              <p className="text-xs text-stone-600">🌿 露台座約4〜5桌，冬天有暖爐</p>
              <p className="text-xs text-stone-600">📝 甜點名牌是英文，指著點就好</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約30分〜1小時</p>
              <p className="text-xs text-stone-600">📞 03-6416-8102</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">露台座<strong>上午</strong>日照最好，下午會被建築物擋住變陰涼。另外店內貨架有「<strong>A CUP for A BAG</strong>」：<strong>買1袋咖啡豆送1杯咖啡</strong>，想買豆子當伴手禮（手信）的人可以順便喝一杯🎁</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://vervecoffee.jp/pages/verve-coffee-roasters-yoyogi-park"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站（代代木公園店）
              </a>
              <a
                href="https://www.instagram.com/vervecoffeeroastersjapan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 官方 Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=VERVE+COFFEE+ROASTERS+YOYOGI+PARK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>

        {/* nephew */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {nephewPhotos.map((photo) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="20vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">nephew（Cafe &amp; Bistro bar）</h3>
                <span className="text-xs text-stone-400">ネフュー 代々木公園・富ヶ谷</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              藍色的店門、白色看板上寫著 <strong>nephew Cafe &amp; Bistro bar</strong>🍰 池尻大橋人氣酒吧<strong>「LOBBY」的2號店</strong>，2021年4月開幕，把兩層樓的獨棟房子改裝成店面。白天是咖啡廳，<strong>晚上7點以後變成餐酒館</strong>，一間店從早餐用到宵夜。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              一進門最先看到的是<strong>藍色磁磚吧台上擺滿的手作蛋糕</strong>：整顆的巧克力蛋糕、栗子莓果奶酥蛋糕、層層疊的鮮奶油蛋糕、布朗尼和馬芬，多到不知道從哪一個開始看。造訪當天是秋季菜單「<strong>AUTUMN DAYS!!</strong>」，季節限定的<strong>南瓜焦糖蛋糕（Pumpkin Caramel Cake）一片¥600</strong>。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 實際點的（實訪）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點了秋季的<strong>芭菲</strong>——玻璃杯最上面放了<strong>一整顆布丁</strong>，插著一片地瓜脆片和百里香🍮 下面一層一層疊著奶油和醬汁。另外還有一片<strong>放了整顆栗子的蛋糕</strong>，配上裝在深藍色大杯裡的<strong>熱拿鐵</strong>和<strong>冰拿鐵</strong>。白色磁磚的桌子，拍起來很好看。
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">☕ 造訪當天門口黑板上的季節飲料</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li>・<strong>Hojicha Latte</strong>（焙茶拿鐵）</li>
                <li>・<strong>Caramel Marron Latte</strong>（焦糖栗子拿鐵）</li>
                <li>・<strong>Purple Sweet Potato Latte</strong>（紫地瓜拿鐵）</li>
              </ul>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 飲料、甜點、三明治都可以外帶（Take Out OK）。牛奶可以加價換豆漿或燕麥奶。菜單是英文＋日文，蛋糕直接在吧台指著點就好。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍰 手作蛋糕擺滿吧台", "🍮 秋季布丁芭菲", "🌅 早上8點開門", "🍷 晚上是餐酒館", "📱 只收電子支付"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都澀谷區富ヶ谷1-7-2</p>
              <p className="text-xs text-stone-600 ib ib-train">千代田線「代々木公園」站 徒步約2分（走進小巷裡）</p>
              <p className="text-xs text-stone-600 ib ib-clock">Morning 8:00〜11:00／Cafe 11:00〜17:00／Bistro &amp; Bar 19:00〜24:00（店門口看板）</p>
              <p className="text-xs text-stone-600 ib ib-yen">季節蛋糕一片¥600（店內標示）</p>
              <p className="text-xs text-stone-600">💳 <strong>CASHLESS ONLY：只收電子支付，不收現金</strong></p>
              <p className="text-xs text-stone-600">🥡 飲料・甜點・三明治可外帶</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約45分〜1小時</p>
              <p className="text-xs text-stone-600">📞 03-5738-8908</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600"><strong>17:00〜19:00 中間休息</strong>，傍晚去會撲空。晚上的餐酒館時段以酒和餐點為主，想吃蛋糕請白天去。另外黑板上寫著<strong>買T恤送1杯飲料</strong>（T-shirt 1 Buy 1 free drink），店裡也賣自家的周邊商品👕</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.instagram.com/nephew_yoyogipark/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 官方 Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=nephew+富ヶ谷1-7-2"
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
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">代代木公園散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>早上7點開門</strong>，可以當作代代木公園散步的第一站</li>
            <li>✅ 店在公園的<strong>參宮橋門・西門</strong>這一側，不是原宿站那一側——從原宿過來的話要穿過整個公園</li>
            <li>✅ 搭千代田線坐到「<strong>代々木公園</strong>」駅最近；小田急線的「代々木八幡」駅也走得到</li>
            <li>✅ 帶狗旅行的人很少找得到<strong>店內也能進</strong>的咖啡廳，這裡是少數之一🐕</li>
            <li>✅ 想用電腦的話記得坐 VERVE 的<strong>店內</strong>，插座只有店內有，而且<strong>沒有Wi-Fi</strong></li>
            <li>✅ 去 nephew 前確認手機支付或信用卡能用——<strong>不收現金</strong>📱</li>
            <li>✅ 早上 VERVE 喝咖啡→公園散步→中午到 nephew 吃蛋糕，兩間走路只差幾分鐘🍰</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            早上在 VERVE 喝一杯大陶杯咖啡，散步完到 nephew 挑一塊蛋糕✨<br />
            代代木公園的一天，用這兩間店串起來剛剛好。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「nephew 的吧台蛋糕多到選不完，下次要空著肚子來🍰」</p>
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

        <RelatedArticles slug="yoyogi-park-cafe" exclude={["/spot", "/bolt-uehara", "/roppongi-cafe"]} />

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
