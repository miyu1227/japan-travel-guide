import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/atsugi-ebina";
const OG_IMAGE = "/atsugi-ebina/atsugicoffee-1.jpg";

export const metadata: Metadata = {
  title: "ATSUGI COFFEE・楊國福麻辣燙｜本厚木海老名3間✅實訪",
  description:
    "本厚木站徒步5分的ATSUGI COFFEE（布丁¥600）、北口的楊國福麻辣燙（100g¥400）、海老名LaLaport的Aloha Table。小田急沿線3間，附營業時間與付款方式。",
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
    title: "本厚木・海老名美食3間｜ATSUGI COFFEE、Aloha Table、楊國福麻辣燙",
    description: "小田急線上、新宿出發約1小時。自家農園咖啡與布丁、夏威夷料理、秤重的麻辣燙。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ATSUGI COFFEE 的經典布丁與咖啡" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "本厚木・海老名美食3間｜ATSUGI COFFEE・楊國福麻辣燙",
    description: "自家農園咖啡與布丁、夏威夷料理、秤重的麻辣燙☕🌺🍜",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "本厚木・海老名美食3間｜ATSUGI COFFEE、Aloha Table LaLaport海老名、楊國福麻辣燙 本厚木店【實際造訪】",
  description: "小田急線本厚木・海老名的3間店。ATSUGI COFFEE 的布丁與咖啡、Aloha Table 的夏威夷料理、楊國福麻辣燙的秤重點法，附價格、營業時間與付款方式。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-10-02T00:00:00+09:00",
  dateModified: "2026-10-02T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "本厚木・海老名美食", item: PAGE_URL },
  ],
};

type Photo = { src: string; alt: string };
type Spot = {
  name: string;
  sub: string;
  photos: Photo[];
  body: ReactNode;
  reasonTitle: string;
  reason: ReactNode;
  tags: string[];
  extra?: ReactNode;
  info: ReactNode;
  tip: ReactNode;
  links: { href: string; label: string }[];
};

const P = "/atsugi-ebina";

// Aloha Table ららぽーと海老名のメニュー（グルメサイト掲載の価格）
const alohaMenu = [
  { zh: "Premium Loco Moco（1肉排×1蛋）", jp: "プレミアム・ロコモコ", price: "¥1,280" },
  { zh: "威基基風 Loco Moco（2肉排×2蛋）", jp: "ワイキキスタイル プレミアム・ロコモコ", price: "¥1,980" },
  { zh: "北岸蒜味蝦飯", jp: "ノースショア・ガーリックシュリンプ プレート", price: "¥1,580" },
  { zh: "鮪魚酪梨 Poke 丼", jp: "マグロとアボカドのポキ丼", price: "¥1,380" },
  { zh: "百香果奶油鬆餅", jp: "リリコイバター パンケーキ", price: "¥825" },
  { zh: "巴西莓果碗（莓果）", jp: "アサイーボウル ベリーベリー", price: "¥1,080" },
  { zh: "兒童 Loco Moco", jp: "キッズ・ロコモコ", price: "¥550" },
];

const spots: Spot[] = [
  {
    name: "ATSUGI COFFEE",
    sub: "アツギコーヒー（厚木珈琲的第一間咖啡廳）",
    photos: [{ src: `${P}/atsugicoffee-1.jpg`, alt: "ATSUGI COFFEE 的經典布丁（頂著鮮奶油）與手繪杯裝的咖啡" }],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          <strong>ATSUGI COFFEE</strong> 是厚木在地的咖啡烘焙品牌「厚木珈琲」開的<strong>第一間咖啡廳</strong>，<strong>2026年5月22日</strong>才開幕☕ 這個品牌在<strong>瓜地馬拉有自己的農園</strong>，從種植到烘焙一路自己做，口號是「只有來這裡才喝得到的咖啡」。店在本厚木站走5分鐘的大樓1樓，<strong>早上8點就開門</strong>。
        </p>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          店內有幾張桌子和面向玻璃窗的<strong>吧台座</strong>，吧台有<strong>插座</strong>、全店有<strong>Wi-Fi</strong>。除了咖啡，也有熱壓三明治、果汁和酒類；櫃檯旁可以直接買咖啡豆和掛耳包（濾掛咖啡）當伴手禮（手信）。
        </p>
      </>
    ),
    reasonTitle: "✨ 實際點的（實吃）",
    reason: (
      <>
        點了<strong>經典布丁（クラシックプリン ¥600）</strong>和<strong>咖啡（¥550）</strong>。布丁是日本老派喫茶店那種<strong>偏硬的口感</strong>，裝在銀色高腳杯裡，焦糖在杯底積成一圈，上面頂著一大球鮮奶油、撒上肉桂粉🍮 咖啡用的是<strong>手繪小鳥與花朵圖案的陶杯</strong>，每一杯都有點不一樣，光是杯子就很想拍。
      </>
    ),
    tags: ["🍮 經典布丁 ¥600", "☕ 咖啡 ¥550", "🌅 早上8點開門", "🔌 吧台有插座・Wi-Fi", "🇬🇹 瓜地馬拉自家農園"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">神奈川縣厚木市中町3-3-9 アーバンプラザ 1F</p>
        <p className="text-xs text-stone-600 ib ib-train">小田急線「本厚木」駅 徒步約5分</p>
        <p className="text-xs text-stone-600 ib ib-clock">8:00〜20:00／公休：週一</p>
        <p className="text-xs text-stone-600 ib ib-yen">一人約 ¥600〜¥1,500</p>
        <p className="text-xs text-stone-600">⏱️ 建議預留約30分〜1小時</p>
      </>
    ),
    tip: (
      <>公休是<strong>週一</strong>。營業資訊與新品會先發在官方Instagram，出發前看一眼比較保險</>
    ),
    links: [
      { href: "https://atsugicoffee.com/", label: "🔗 ATSUGI COFFEE 官方網站" },
      { href: "https://www.instagram.com/atsugicoffee_cafe/", label: "📷 官方 Instagram" },
      { href: "https://www.google.com/maps/search/?api=1&query=ATSUGI+COFFEE+%E5%8E%9A%E6%9C%A8%E5%B8%82%E4%B8%AD%E7%94%BA3-3-9", label: "🗺️ Google 地圖" },
    ],
  },
  {
    name: "Aloha Table LaLaport海老名",
    sub: "アロハテーブル ららぽーと海老名",
    photos: [{ src: `${P}/aloha-1.jpg`, alt: "Aloha Table LaLaport海老名的店內 - 吊扇、椰子樹與整排窗戶" }],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          海老名站旁的大型購物中心<strong>LaLaport海老名（ららぽーと海老名）</strong>4樓，有一間夏威夷料理餐廳<strong>「Aloha Table」</strong>🌺 木百葉窗、天花板的吊扇、椰子樹，柱子上畫著「ALOHA!!」「Kailua weekend」的手繪插畫，一進門就是度假的氣氛。位置在高樓層，<strong>一整排窗戶看得到海老名的街景</strong>。
        </p>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          招牌是夏威夷的國民料理<strong>Loco Moco（ロコモコ）</strong>——白飯上放漢堡排和半熟蛋、淋上肉汁。另外還有蒜味蝦飯、Poke 丼、鬆餅和巴西莓果碗，也有<strong>兒童餐</strong>，逛街逛到一半全家一起吃很方便。
        </p>
      </>
    ),
    reasonTitle: "✨ 推薦給旅客的理由",
    reason: (
      <>
        LaLaport 本身就是很好逛的商場，<strong>買完東西直接上4樓吃飯</strong>最省事。店內空間寬、桌距大，帶小孩或提著購物袋都坐得舒服；而且<strong>可以先在網路上訂位</strong>，週末不用在門口乾等。
      </>
    ),
    tags: ["🌺 夏威夷料理", "🍳 Loco Moco ¥1,280起", "🥞 鬆餅・巴西莓果碗", "👶 有兒童餐", "🛍️ LaLaport 4樓"],
    extra: (
      <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
        <p className="text-xs font-bold text-amber-700 mb-2">🍽️ Aloha Table 的菜單與價錢（一部分）</p>
        <ul className="text-xs text-stone-600 space-y-1.5">
          {alohaMenu.map((m) => (
            <li key={m.jp}>
              <strong>{m.zh}</strong>
              <span className="text-stone-400">（{m.jp}）</span>
              <span className="ml-1 font-bold text-stone-700">{m.price}</span>
            </li>
          ))}
        </ul>
        <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
          ※ 餐廳資訊網站刊載的價格，可能調整，請以店頭菜單為準。
        </p>
      </div>
    ),
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">神奈川縣海老名市扇町13-1 LaLaport海老名 4F</p>
        <p className="text-xs text-stone-600 ib ib-train">小田急線・相鐵線・JR相模線「海老名」駅 徒步約5分</p>
        <p className="text-xs text-stone-600 ib ib-clock">平日 11:00〜21:00／週末・假日 11:00〜22:00／無休</p>
        <p className="text-xs text-stone-600 ib ib-yen">一人約 ¥1,300〜¥2,500</p>
        <p className="text-xs text-stone-600">📅 可訂位（官網・TableCheck）</p>
        <p className="text-xs text-stone-600">💳 官網列出可用 PayPay・樂天Pay・d払い・au PAY・メルペイ</p>
        <p className="text-xs text-stone-600">📞 046-206-6675</p>
      </>
    ),
    tip: (
      <>平日和週末的<strong>打烊時間不一樣</strong>（平日21點、週末假日22點）。想吃晚一點的話排在週末比較從容</>
    ),
    links: [
      { href: "https://lalaport-ebina.alohatable.com/", label: "🔗 Aloha Table LaLaport海老名 官方網站" },
      { href: "https://www.hotpepper.jp/strJ001133812/food/", label: "🍴 Hot Pepper（菜單）" },
      { href: "https://www.google.com/maps/search/?api=1&query=%E3%82%A2%E3%83%AD%E3%83%8F%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB+%E3%82%89%E3%82%89%E3%81%BD%E3%83%BC%E3%81%A8%E6%B5%B7%E8%80%81%E5%90%8D", label: "🗺️ Google 地圖" },
    ],
  },
  {
    name: "楊國福麻辣燙 本厚木店",
    sub: "楊国福マーラータン 本厚木店（YANGGUOFU）",
    photos: [
      { src: `${P}/yangguofu-1.jpg`, alt: "楊國福麻辣燙 本厚木店 - 橘色大碗裡的麻辣燙，有餃子、魚丸、章魚、青菜與寬粉" },
      { src: `${P}/yangguofu-2.jpg`, alt: "楊國福麻辣燙 本厚木店 - 麻辣燙與旁邊的芝麻醬小碗" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          <strong>楊國福麻辣燙（YANGGUOFU／楊国福マーラータン）</strong>是2003年在中國創業、全球超過7,000間店的麻辣燙連鎖，香港朋友應該不陌生🍜 日本這兩年正流行<strong>「マーラータン（麻辣燙）」</strong>，本厚木店是<strong>2026年5月30日</strong>新開的，就在本厚木站北口旁邊。
        </p>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          點法和台灣的滷味、香港的車仔麵有點像：拿一個盆和夾子，從冷藏櫃裡<strong>自己夾想吃的料</strong>——青菜、菇類、丸子、餃子、豆皮、海鮮、各種麵和粉——拿到櫃檯<strong>秤重計價，100g ¥400</strong>。接著選湯底（牛骨湯、麻辣湯、番茄湯等）和辣度，店員煮好再端給你。
        </p>
      </>
    ),
    reasonTitle: "✨ 實際點的（實吃）",
    reason: (
      <>
        我們這碗夾了<strong>餃子、魚丸、小章魚、鴻喜菇、青江菜、花椰菜、豆皮和寬粉</strong>，湯是橘紅色、帶奶白的濃湯底，裝在印著 <strong>YANGGUOFU 楊國福</strong> 的橘色大碗裡。旁邊自助區可以調沾醬，我們裝了一小碗<strong>芝麻醬</strong>，把料撈起來沾著吃，或是倒一點進湯裡，味道會變得更濃👍 想吃多少夾多少，一個人也很好點。
      </>
    ),
    tags: ["⚖️ 秤重 100g ¥400", "🌶️ 辣度可選", "🥢 自己夾料", "🚃 北口徒步約3分", "🆕 2026年5月開幕"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">神奈川縣厚木市中町2-1-18 TRUNK本厚木 1F</p>
        <p className="text-xs text-stone-600 ib ib-train">小田急線「本厚木」駅 北口 徒步約3分</p>
        <p className="text-xs text-stone-600 ib ib-clock">11:00〜21:30</p>
        <p className="text-xs text-stone-600 ib ib-yen">一人約 ¥1,000〜¥2,000（夾約300〜450g的情況）</p>
        <p className="text-xs text-stone-600">📅 不接受訂位</p>
        <p className="text-xs text-stone-600">💳 餐廳資訊網站刊載：不可刷卡・可用PayPay，建議帶現金</p>
      </>
    ),
    tip: (
      <>料是<strong>秤重</strong>算錢，丸子、年糕、吸了水的豆製品都很重，不知不覺就超過預算——第一次先夾少一點，看到金額再決定下次的量</>
    ),
    links: [
      { href: "https://www.daitengen-jp.com/%E6%A5%8A%E5%9B%BD%E7%A6%8F%E9%BA%BB%E8%BE%A3%E6%B9%AF/", label: "🔗 楊國福麻辣燙（日本營運公司官網）" },
      { href: "https://tabelog.com/kanagawa/A1408/A140802/14103745/", label: "🍴 食べログ" },
      { href: "https://www.google.com/maps/search/?api=1&query=%E6%A5%8A%E5%9B%BD%E7%A6%8F%E3%83%9E%E3%83%BC%E3%83%A9%E3%83%BC%E3%82%BF%E3%83%B3+%E6%9C%AC%E5%8E%9A%E6%9C%A8%E5%BA%97", label: "🗺️ Google 地圖" },
    ],
  },
];

const relatedLinks = [
  { href: "/isehara-gelato", label: "🍦 伊勢原義式冰淇淋｜石田牧場めぐり", desc: "同一條小田急線，從本厚木再往前兩站" },
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "同樣搭小田急，可以排在同一趟行程" },
  { href: "/enoshima-kamakura", label: "🌊 江之島・鎌倉一日遊｜江島神社到小町通7站", desc: "神奈川的海邊一日路線" },
];

const faqItems = [
  {
    q: "本厚木、海老名在哪裡？從東京怎麼去？",
    a: "兩站都在神奈川縣、小田急小田原線上。從新宿搭快速急行，到海老名約45分鐘、到本厚木約50分鐘，兩站之間只隔一站快速急行、約4分鐘。去箱根或伊勢原的路上會經過，可以順路下車吃一餐。",
  },
  {
    q: "ATSUGI COFFEE 幾點開？有什麼必點？",
    a: "8:00〜20:00，週一公休。必點是經典布丁（クラシックプリン ¥600）配咖啡（¥550）。本厚木站徒步約5分，吧台座有插座、店內有Wi-Fi。",
  },
  {
    q: "楊國福麻辣燙在日本怎麼點？價錢多少？",
    a: "自己用夾子把想吃的料夾進盆裡，拿到櫃檯秤重，100g ¥400。再選湯底和辣度，店員會幫你煮好。一般夾300〜450g，一個人大約¥1,000〜¥2,000。",
  },
  {
    q: "楊國福麻辣燙 本厚木店可以刷卡嗎？",
    a: "餐廳資訊網站上刊載的是不可刷卡、可以用PayPay。外國旅客多半沒有PayPay，建議準備現金再去。",
  },
  {
    q: "Aloha Table LaLaport海老名要訂位嗎？",
    a: "可以訂位，官網有線上訂位（TableCheck）。營業時間是平日11:00〜21:00、週末假日11:00〜22:00，全年無休。週末用餐時段人多，先訂比較保險。",
  },
  {
    q: "Loco Moco（ロコモコ）是什麼？",
    a: "夏威夷的家常料理：白飯上放漢堡排和半熟荷包蛋，淋上肉汁醬。Aloha Table 的 Premium Loco Moco 是¥1,280，肉排和蛋都加倍的威基基風是¥1,980。",
  },
];

export default function AtsugiEbinaPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">本厚木・海老名美食</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食（必食）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神奈川・本厚木・海老名</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          本厚木・海老名美食3間<br />ATSUGI COFFEE・Aloha Table・楊國福麻辣燙🍮
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-10-02</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">小田急線上、去箱根會經過的兩站</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>本厚木</strong>和<strong>海老名</strong>都在神奈川縣、從新宿搭<strong>小田急線</strong>約45〜50分鐘的地方🚃 觀光客通常只是搭車經過，但這兩站其實是當地人週末吃飯逛街的地方：海老名有大型商場 LaLaport，本厚木站前則是餐廳密集的商店街。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇推薦（推介）實際去過的3間：本厚木的咖啡廳<strong>「ATSUGI COFFEE」</strong>、海老名的夏威夷料理<strong>「Aloha Table」</strong>，以及本厚木站前新開的<strong>「楊國福麻辣燙」</strong>。兩站之間只要約4分鐘，去箱根、伊勢原的路上順路下車就能吃。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">3間店怎麼選</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">ATSUGI COFFEE（本厚木）→ 早餐・下午茶</p>
                <p className="text-xs text-stone-500 leading-relaxed">8點開門。經典布丁 ¥600、咖啡 ¥550，週一公休</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Aloha Table（海老名）→ 逛街中的午餐・晚餐</p>
                <p className="text-xs text-stone-500 leading-relaxed">LaLaport 4樓。Loco Moco ¥1,280起，可訂位、有兒童餐</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">楊國福麻辣燙（本厚木）→ 一個人也好點的一餐</p>
                <p className="text-xs text-stone-500 leading-relaxed">北口徒步約3分。自己夾料秤重 100g ¥400，建議帶現金</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">本厚木・海老名美食推薦（必食推介）・3間</h2>

        {spots.map((spot, idx) => (
          <section key={spot.name} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6 card-split">
            <div className="photo-strip">
              {spot.photos.map((photo, i) => (
                <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={spot.photos.length === 1 ? "100vw" : "50vw"}
                    className="object-cover"
                    {...(idx === 0 && i === 0 ? { priority: true } : {})}
                  />
                </div>
              ))}
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">{idx + 1}</div>
                <div>
                  <h3 className="text-base font-black text-stone-800">{spot.name}</h3>
                  <span className="text-xs text-stone-400">{spot.sub}</span>
                </div>
              </div>

              {spot.body}

              <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
                <p className="text-xs font-bold text-red-600 mb-1">{spot.reasonTitle}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{spot.reason}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {spot.tags.map((t) => (
                  <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>

              {spot.extra}

              <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                {spot.info}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
                <span className="text-sm shrink-0">💡</span>
                <p className="text-xs text-stone-600">{spot.tip}</p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {spot.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8 mt-2">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">本厚木・海老名小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 兩站都在<strong>小田急線</strong>上，新宿搭快速急行約45〜50分鐘，彼此只隔約4分鐘</li>
            <li>✅ 去<strong>箱根</strong>、<strong>伊勢原</strong>的路上會經過，可以順路下車吃一餐再繼續走🚃</li>
            <li>✅ ATSUGI COFFEE <strong>週一公休</strong>；楊國福麻辣燙<strong>不能刷卡</strong>，記得帶現金</li>
            <li>✅ 想逛街選海老名（LaLaport 就在站旁），想吃在地小店選本厚木</li>
            <li>✅ 麻辣燙吃完很飽，甜點和咖啡排在前面比較吃得下🍮</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            沒有觀光客、價格實在，三間的類型又完全不一樣✨<br />
            搭小田急往箱根的路上，多停一站就吃得到的在地日常。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「硬布丁配手繪杯的咖啡，在本厚木找到了想再去的店🍮」</p>
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

        <RelatedArticles slug="atsugi-ebina" exclude={["/isehara-gelato", "/hakone", "/enoshima-kamakura"]} />

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
