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

const PAGE_URL = "https://www.japantrippicks.com/shimokitazawa-gohan";
const OG_IMAGE = "/shimokitazawa-gohan/vegebase-1.jpg";

export const metadata: Metadata = {
  title: "CACCIA CACCIA・Vegetable base｜下北澤美食2間✅實吃",
  description:
    "下北澤站徒步2分的Vegetable base（無麩質沙拉¥1,150起・巴西莓果碗¥1,500）、BONUS TRACK新開的佛卡夏＆葡萄酒店CACCIA CACCIA。附營業時間與付款方式。",
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
    title: "下北澤美食2間｜CACCIA CACCIA、Vegetable base TOKYO",
    description: "BONUS TRACK的佛卡夏＆葡萄酒新店，和車站旁的無麩質沙拉・巴西莓果碗。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Vegetable base TOKYO 下北澤的巴西莓果碗與鮭魚沙拉碗" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "下北澤美食2間｜CACCIA CACCIA・Vegetable base",
    description: "佛卡夏＆葡萄酒的新店，和無麩質沙拉・巴西莓果碗🥗🍷",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "下北澤美食2間｜CACCIA CACCIA、Vegetable base TOKYO 下北澤【實際造訪】",
  description: "下北澤BONUS TRACK的佛卡夏＆葡萄酒店CACCIA CACCIA，與下北澤站徒步2分的無麩質沙拉店Vegetable base TOKYO。附價格、營業時間、點餐方式與付款方式。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-10T00:00:00+09:00",
  dateModified: "2026-11-10T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "下北澤美食", item: PAGE_URL },
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

const P = "/shimokitazawa-gohan";

// Vegetable base TOKYO の公式メニュー（全店共通）
const vegeMenu = [
  { zh: "招牌蔬菜沙拉", jp: "ベジタブルベース", price: "R ¥1,250／S ¥1,150" },
  { zh: "雞肉凱薩沙拉", jp: "チキンシーザー", price: "R ¥1,400／S ¥1,200" },
  { zh: "鮭魚酪梨沙拉", jp: "サーモンアボカド", price: "R ¥1,700／S ¥1,450" },
  { zh: "羅勒鮭魚沙拉（含藜麥）", jp: "バジルサーモン", price: "R ¥1,750／S ¥1,500" },
  { zh: "巴西莓果碗（3種口味）", jp: "アサイーボウル", price: "¥1,500" },
  { zh: "無麩質紅蘿蔔蛋糕", jp: "グルテンフリー キャロットケーキ", price: "¥500" },
  { zh: "咖啡・紅茶・自家製檸檬水", jp: "ドリンク", price: "各 ¥500" },
];

const spots: Spot[] = [
  {
    name: "CACCIA CACCIA",
    sub: "カッチャカッチャ（Caccia Caccia／kaccha kaccha）",
    photos: [
      { src: `${P}/caccia-1.jpg`, alt: "CACCIA CACCIA 的烤白花椰菜淋醬、蒜香炒青菜，與印著店名的葡萄酒杯" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          <strong>CACCIA CACCIA（カッチャカッチャ）</strong>是2026年秋天在下北澤的複合設施<strong>BONUS TRACK</strong>開幕的新店，主打<strong>自家製佛卡夏（Focaccia）×葡萄酒</strong>🍷 它是學藝大學人氣店「TUTU」的姊妹店，店名來自日文形容熱鬧聲的「かちゃかちゃ」，加上 Focaccia 的「caccia」。
        </p>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          招牌是<strong>隔夜發酵的佛卡夏</strong>，夾水牛莫札瑞拉起司（芝士）、水果番茄、生火腿等做成三明治；另外也有拿坡里街頭小吃<strong>炸物拼盤（Fritto Misto）</strong>。葡萄酒是老闆親自跑到產地挑的，也有其他酒類和義式濃縮咖啡。店面大片窗戶對著綠色步道，戶外也有座位。
        </p>
      </>
    ),
    reasonTitle: "✨ 實際點的（實吃）",
    reason: (
      <>
        這次點了兩道蔬菜小盤：<strong>烤到邊緣焦香的白花椰菜</strong>，上面淋著一層濃稠的米色醬汁；和<strong>蒜片一起炒的青菜</strong>，油亮亮地堆滿一盤🥦 飲料是印著店名的葡萄酒杯，配上一罐義大利的 <strong>San Pellegrino 檸檬氣泡飲</strong>。<br />
        BONUS TRACK 本身就是散步的好地方，<strong>逛完小店、坐下來喝一杯配小盤</strong>，很有下北澤的步調。
      </>
    ),
    tags: ["🍞 自家製佛卡夏", "🍷 葡萄酒", "🥦 蔬菜小盤", "🌿 BONUS TRACK 1樓", "🆕 2026年秋開幕"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">東京都世田谷區代田2-36-15 BONUS TRACK 中央棟 1F</p>
        <p className="text-xs text-stone-600 ib ib-train">小田急線「世田谷代田」駅 徒步約1分／「下北澤」駅 徒步約5分</p>
        <p className="text-xs text-stone-600 ib ib-clock">11:00〜15:00、17:30〜22:00（週日・假日到20:00）／不定休</p>
        <p className="text-xs text-stone-600">📅 訂位：未公開，請透過官方 Instagram 確認</p>
        <p className="text-xs text-stone-600">💳 付款方式未公開，建議帶日幣現金備用</p>
        <p className="text-xs text-stone-600">⏱️ 建議預留約1小時</p>
      </>
    ),
    tip: (
      <><strong>不定休</strong>，而且午餐和晚餐之間（15:00〜17:30）沒有營業。出發前先看官方 Instagram 的最新公告比較保險</>
    ),
    links: [
      { href: "https://www.instagram.com/caccia_caccia_/", label: "📷 CACCIA CACCIA 官方 Instagram" },
      { href: "https://www.google.com/maps/search/?api=1&query=CACCIA+CACCIA+BONUS+TRACK+%E4%B8%8B%E5%8C%97%E6%B2%A2", label: "🗺️ Google 地圖" },
    ],
  },
  {
    name: "Vegetable base TOKYO 下北澤",
    sub: "ベジタブルベース トウキョウ 下北沢",
    photos: [
      { src: `${P}/vegebase-2.jpg`, alt: "Vegetable base TOKYO 下北澤的巴西莓果碗，與後方的鮭魚酪梨沙拉碗" },
      { src: `${P}/vegebase-1.jpg`, alt: "Vegetable base TOKYO 的巴西莓果碗 - 香蕉、葡萄、藍莓、柳橙、格蘭諾拉麥片、椰子片與可可碎粒" },
      { src: `${P}/vegebase-3.jpg`, alt: "Vegetable base TOKYO 下北澤店內牆上的店名招牌" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          <strong>Vegetable base TOKYO（ベジタブルベース）</strong>是在神樂坂・下北澤・惠比壽開店的沙拉專門店🥗 三個原則是<strong>完全無麩質（Gluten free）、無添加・不用化學調味料、全部手作</strong>，一碗沙拉用上<strong>30種以上的食材</strong>。下北澤店是<strong>2025年5月1日</strong>開幕，離下北澤站只要走2分鐘。
        </p>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          除了份量很足的沙拉碗，還有<strong>巴西莓果碗（アサイーボウル）</strong>、自家製湯、無麩質蛋糕。可以內用也可以外帶，店內是小小的、安靜的空間。
        </p>
      </>
    ),
    reasonTitle: "✨ 實際點的（實吃）",
    reason: (
      <>
        <strong>巴西莓果碗 ¥1,500</strong>裝在木碗裡，紫色的巴西莓上排滿<strong>撒了奇亞籽的香蕉、綠葡萄、藍莓、柳橙</strong>，再加上<strong>格蘭諾拉麥片、烤椰子片和可可碎粒</strong>，顏色漂亮到捨不得下手🫐<br />
        另一碗是<strong>鮭魚酪梨的沙拉碗</strong>：漬鮭魚、酪梨、毛豆、羽衣甘藍、紅蘿蔔絲、紫高麗菜、小番茄，再加一大坨<strong>雜穀米</strong>和杏仁、南瓜子、帕瑪森起司，醬汁另外用小鋼杯裝。吃完是正餐的飽足感。
      </>
    ),
    tags: ["🥗 沙拉 ¥1,150起", "🫐 巴西莓果碗 ¥1,500", "🌾 完全無麩質", "🚃 下北澤站徒步2分", "🥡 可外帶"],
    extra: (
      <>
        <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
          <p className="text-xs font-bold text-green-700 mb-2">🧾 怎麼點（點餐方式）</p>
          <ol className="text-xs text-stone-600 space-y-1.5 list-decimal list-inside">
            <li>進門走到<strong>店內最裡面的收銀台</strong>點餐</li>
            <li>選沙拉，再選大小：<strong>R（一般）或 S（小份）</strong></li>
            <li>免費配料可加<strong>雜穀米（雑穀米）・帕瑪森起司・杏仁・南瓜子</strong></li>
            <li>想加料再點：水煮蛋 ¥150、雞肉／酪梨 ¥250、漬鮭魚 ¥300 等</li>
            <li>從約10種醬汁裡選一種（芝麻・巴薩米克醋・柚子胡椒柚子醋・蜂蜜檸檬等）</li>
          </ol>
          <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-green-200">
            ※ 免費配料與醬汁種類是2025年開幕時的資訊，可能調整。
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
          <p className="text-xs font-bold text-amber-700 mb-2">🍽️ Vegetable base 的菜單與價錢（一部分）</p>
          <ul className="text-xs text-stone-600 space-y-1.5">
            {vegeMenu.map((m) => (
              <li key={m.jp}>
                <strong>{m.zh}</strong>
                <span className="text-stone-400">（{m.jp}）</span>
                <span className="ml-1 font-bold text-stone-700">{m.price}</span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
            ※ 官網刊載的全店共通價格，可能調整，請以店頭菜單為準。另有每月更換的「今月のサラダ（本月沙拉）」2種。
          </p>
        </div>
      </>
    ),
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">東京都世田谷區北澤2-12-15</p>
        <p className="text-xs text-stone-600 ib ib-train">小田急線・京王井之頭線「下北澤」駅 徒步約2分</p>
        <p className="text-xs text-stone-600 ib ib-clock">週一〜五 11:00〜15:00、17:00〜20:30／週末・假日 11:00〜20:30／不定休（年末年始休）</p>
        <p className="text-xs text-stone-600 ib ib-yen">一人約 ¥1,200〜¥2,500</p>
        <p className="text-xs text-stone-600">💳 官網寫明可用日幣現金或信用卡</p>
        <p className="text-xs text-stone-600">🌐 官網有英文・中文頁面</p>
        <p className="text-xs text-stone-600">🪑 內用約4張桌子，人多時可改外帶</p>
        <p className="text-xs text-stone-600">⏱️ 建議預留約30分〜1小時</p>
        <p className="text-xs text-stone-600">📞 03-6453-4612</p>
      </>
    ),
    tip: (
      <>內用只有<strong>約4張桌子</strong>，午餐尖峰容易滿。平日<strong>15:00〜17:00 中間休息</strong>，下午茶時段想吃巴西莓果碗的話排在週末比較從容</>
    ),
    links: [
      { href: "https://vegetablebase-tokyo.foodsolutions.jp/", label: "🔗 Vegetable base TOKYO 官方網站" },
      { href: "https://www.instagram.com/vegetablebase_tokyo/", label: "📷 官方 Instagram" },
      { href: "https://www.google.com/maps/search/?api=1&query=Vegetable+base+TOKYO+%E4%B8%8B%E5%8C%97%E6%B2%A2", label: "🗺️ Google 地圖" },
    ],
  },
];

const relatedLinks = [
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤咖啡廳4選｜純素烘焙・起司蛋糕・BONUS TRACK", desc: "吃完正餐，甜點和咖啡接著排" },
  { href: "/bolt-uehara", label: "🐶 代代木上原 BOLT｜寵物友善咖啡廳", desc: "小田急線往新宿方向2站" },
  { href: "/shibuya-gohan", label: "🍲 Soup Stock Tokyo 澀谷｜站直結的湯專賣店", desc: "一個人也好吃的一餐，從下北澤搭井之頭線4分" },
];

const faqItems = [
  {
    q: "CACCIA CACCIA 是什麼店？",
    a: "2026年秋天在下北澤 BONUS TRACK 開幕的自家製佛卡夏（Focaccia）×葡萄酒店，日文唸「カッチャカッチャ（kaccha kaccha）」。是學藝大學人氣店TUTU的姊妹店，有佛卡夏三明治、炸物拼盤、蔬菜小盤和葡萄酒。",
  },
  {
    q: "CACCIA CACCIA 幾點開？",
    a: "11:00〜15:00、17:30〜22:00（週日・假日到20:00），不定休。中間15:00〜17:30沒有營業，休假日請看官方 Instagram。",
  },
  {
    q: "Vegetable base TOKYO 是什麼？",
    a: "在神樂坂・下北澤・惠比壽開店的沙拉專門店，完全無麩質、無添加、不用化學調味料，一碗用30種以上的食材。也有巴西莓果碗和無麩質蛋糕。",
  },
  {
    q: "Vegetable base 怎麼點？價錢多少？",
    a: "到店內最裡面的收銀台點餐，選沙拉和大小（R／S），沙拉 S ¥1,150〜R ¥1,750，巴西莓果碗 ¥1,500，飲料各 ¥500。可加免費的雜穀米等配料，再從約10種醬汁選一種。",
  },
  {
    q: "Vegetable base 可以刷卡嗎？",
    a: "官網寫明可以用日幣現金或信用卡付款。",
  },
  {
    q: "兩間店離多遠？怎麼排行程？",
    a: "Vegetable base 在下北澤站旁（徒步2分），CACCIA CACCIA 在 BONUS TRACK（下北澤站徒步約5分、世田谷代田站徒步約1分）。午餐吃 Vegetable base，逛完下北澤的二手衣店後，傍晚到 BONUS TRACK 喝一杯，是很順的走法。",
  },
];

export default function ShimokitazawaGohanPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">下北澤美食</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食（必食）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・下北澤</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          下北澤美食2間<br />CACCIA CACCIA・Vegetable base TOKYO🥗
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-10</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">二手衣、劇場之外，下北澤的蔬菜系一餐</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>下北澤</strong>從新宿搭小田急線約8分、從澀谷搭京王井之頭線約4分，是二手衣店、唱片行和小劇場聚集的街區🚃 吃的選擇多到眼花，這次挑了兩間<strong>蔬菜吃得很多</strong>的店。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇推薦（推介）實際去過的2間：BONUS TRACK 新開的佛卡夏＆葡萄酒店<strong>「CACCIA CACCIA」</strong>，以及下北澤站旁的無麩質沙拉店<strong>「Vegetable base TOKYO」</strong>。兩間走路約5〜10分，可以排在同一天。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">2間店怎麼選</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">CACCIA CACCIA（BONUS TRACK）→ 午餐・傍晚喝一杯</p>
                <p className="text-xs text-stone-500 leading-relaxed">自家製佛卡夏＋葡萄酒＋蔬菜小盤。15:00〜17:30休息、不定休</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Vegetable base TOKYO（下北澤站旁）→ 健康午餐・巴西莓果碗</p>
                <p className="text-xs text-stone-500 leading-relaxed">站徒步2分。沙拉 ¥1,150起、巴西莓果碗 ¥1,500，可刷卡・可外帶</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">下北澤美食推薦（必食推介）・2間</h2>

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
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">下北澤小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 下北澤從<strong>新宿約8分</strong>（小田急線）、<strong>澀谷約4分</strong>（京王井之頭線）</li>
            <li>✅ 兩間店都是<strong>午餐和晚餐之間會休息</strong>（平日15:00左右起），下午去之前先確認時間</li>
            <li>✅ CACCIA CACCIA 在 <strong>BONUS TRACK</strong>，離「世田谷代田」站更近，可以從這站下車慢慢走回下北澤🚶</li>
            <li>✅ 兩間都是<strong>不定休</strong>，出發前看一眼官方 Instagram</li>
            <li>✅ 吃得清爽，下午還有胃口去咖啡廳吃甜點☕</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一間是綠蔭步道旁的佛卡夏＆葡萄酒，一間是站前滿滿蔬菜的沙拉碗✨<br />
            旅行中吃膩了拉麵和燒肉的時候，下北澤剛好可以讓身體休息一下。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「巴西莓果碗擺得太漂亮，拍了好久才開動🫐」</p>
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

        <RelatedArticles slug="shimokitazawa-gohan" exclude={["/shimokitazawa-cafe", "/bolt-uehara", "/shibuya-gohan"]} />

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
