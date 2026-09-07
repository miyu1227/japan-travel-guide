import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/nakameguro-cafe";
const OG_IMAGE = "/nakameguro-cafe/starbucks-1.jpg";

export const metadata: Metadata = {
  title: "中目黑星巴克臻選烘焙工坊＆STREAMER｜中目黑咖啡廳推薦2選",
  description:
    "隈研吾設計的星巴克臻選烘焙工坊，加上拉花世界冠軍澤田洋史的STREAMER。兩間走路6分鐘，目黑川旁咖啡廳一次逛完。附交通・營業時間・價位。",
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
    title: "中目黑星巴克臻選烘焙工坊＆STREAMER｜中目黑咖啡廳推薦2選",
    description: "隈研吾建築的星巴克臻選，加上拉花世界冠軍的STREAMER。目黑川旁兩間必去咖啡廳。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "中目黑咖啡廳推薦・星巴克臻選東京烘焙工坊" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "中目黑星巴克臻選＆STREAMER｜中目黑咖啡廳推薦2選",
    description: "隈研吾建築的星巴克臻選＋拉花世界冠軍的STREAMER，走路6分鐘串一條☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "中目黑星巴克臻選烘焙工坊＆STREAMER COFFEE｜中目黑咖啡廳推薦2選【實際造訪】",
  description: "中目黑必去咖啡廳2間完整介紹。隈研吾設計的星巴克臻選烘焙工坊，與拉花世界冠軍澤田洋史的STREAMER COFFEE COMPANY。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-09-03T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "中目黑咖啡廳推薦2選", item: PAGE_URL },
  ],
};

const photos = [
  "/nakameguro-cafe/starbucks-1.jpg",
  "/nakameguro-cafe/starbucks-2.jpg",
  "/nakameguro-cafe/starbucks-3.jpg",
  "/nakameguro-cafe/starbucks-4.jpg",
];

const streamerPhotos = [
  "/nakameguro-cafe/streamer-1.jpg",
  "/nakameguro-cafe/streamer-2.jpg",
  "/nakameguro-cafe/streamer-3.jpg",
];

const relatedLinks = [
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤咖啡廳推薦4選｜東京必去人氣美食", desc: "純素烘焙・起司蛋糕・自家焙煎・BONUS TRACK" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
];

const faqItems = [
  { q: "星巴克臻選需要預約嗎？", a: "平常可以直接進去，但3月下旬〜4月上旬的櫻花季會採預約制入場，那段期間出發前一定要先查官網。" },
  { q: "從中目黑站要走多久？", a: "都是從東急東橫線・東京メトロ日比谷線「中目黑」駅沿著目黑川走：STREAMER約7分、星巴克臻選約13分。沿路都是特色小店，走起來不會無聊。" },
  { q: "幾點去比較不擠？", a: "星巴克臻選是7:00〜22:00（櫻花季8:00〜21:30）；STREAMER約8:00〜19:00，但官網不公告固定時間，建議看店家IG。兩間都是平日早上或傍晚最鬆，週末的午餐時段人最多。" },
  { q: "一個人大概要花多少？", a: "星巴克臻選飲品¥600〜¥1,500、調酒¥1,200〜；STREAMER飲品約¥600〜¥900、甜點¥400〜¥600。限定周邊商品也很適合當伴手禮。" },
  { q: "兩間可以同一天一起去嗎？", a: "可以。兩間都在目黑區青葉台、走路約6分鐘就到，很適合排成一條目黑川散步路線。星巴克臻選慢慢逛要1〜2小時，STREAMER則是坐下來喝一杯的節奏。" },
  { q: "想要安靜工作的話選哪間？", a: "STREAMER COFFEE 中目黑店比較適合。店內有免費Wi-Fi、窗邊吧台有插座，天花板挑高、玻璃採光好，坐著待一陣子也不會悶。" },
];

export default function NakameguroCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">中目黑咖啡廳推薦2選</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳（咖啡店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・中目黑</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          中目黑星巴克臻選烘焙工坊＆<br />STREAMER｜中目黑咖啡廳推薦2選☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-03</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">中目黑——東京最有氛圍的咖啡散步區</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>中目黑</strong>是東京最受歡迎的文青散步區之一，沿著<strong>目黑川</strong>延伸的街道充滿質感小店和特色咖啡廳☕ 春天兩岸800棵櫻花盛開的景象更是東京最著名的賞櫻景點之一🌸
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）兩間走路約6分鐘就能串起來的咖啡廳：中目黑的超級地標<strong>「STARBUCKS RESERVE ROASTERY TOKYO」</strong>，以及由<strong>拉花世界冠軍</strong>澤田洋史創立的<strong>「STREAMER COFFEE COMPANY」</strong>。一間看建築、一間喝咖啡，一個下午剛剛好✨
          </p>
        </section>

        <PrepBannerCompact />

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">星巴克臻選烘焙工坊 → 全球6間之一・隈研吾建築</p>
                <p className="text-xs text-stone-500 leading-relaxed">4層樓咖啡主題樂園、目黑川賞櫻特等席，適合慢慢逛1〜2小時</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">STREAMER COFFEE → 拉花世界冠軍的濃厚拿鐵</p>
                <p className="text-xs text-stone-500 leading-relaxed">玻璃屋般的明亮空間、有Wi-Fi與插座，適合坐下來喘口氣</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">
            💡 兩間都在<strong>目黑區青葉台</strong>，沿著目黑川走約6分鐘就能到，很推薦排在同一天。
          </p>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">中目黑咖啡廳推薦・2選（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="STARBUCKS RESERVE ROASTERY TOKYO - 中目黑咖啡廳推薦"
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">STARBUCKS RESERVE® ROASTERY TOKYO</h3>
                <span className="text-xs text-stone-400">星巴克臻選東京烘焙工坊</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              全世界只有6間的<strong>星巴克臻選烘焙工坊</strong>，由日本建築大師<strong>隈研吾</strong>設計，2019年開幕🏛️ 整棟4層樓建築本身就是一件藝術品，被譽為「咖啡與茶的主題樂園」。每一層樓都有不同的主題與體驗，是中目黑最具代表性的地標。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                就算不是星巴克迷也會被圈粉！建築本身超有魅力📸 4樓露台可以俯瞰目黑川，<strong>春天賞櫻</strong>絕佳位置🌸 這裡還能買到只有東京店才有的<strong>限定商品</strong>和周邊，是最棒的伴手禮（手信）選擇！每層樓都有獨特體驗，建議慢慢逛約1〜2小時。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏛️ 隈研吾設計", "🌸 目黑川賞櫻", "🌍 全球6間之一", "🎁 限定商品", "📸 IG拍照聖地"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 樓層特色 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🏢 樓層特色</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>1F 咖啡吧</strong>：臻選咖啡・多種沖煮法・Princi烘焙坊現烤麵包</li>
                <li><strong>2F TEAVANA茶館</strong>：手工磁磚裝飾・季節限定茶飲</li>
                <li><strong>3F ARRIVIAMO酒吧</strong>：濃縮咖啡馬丁尼・俯瞰目黑川</li>
                <li><strong>4F AMU INSPIRATION LOUNGE</strong>：露台座位・最佳賞櫻位置</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都目黑區青葉台2-19-23</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線・東京メトロ日比谷線「中目黑」駅 徒歩約13分（沿目黑川）</p>
              <p className="text-xs text-stone-600">⏰ 7:00〜22:00（櫻花季 8:00〜21:30・不定休）</p>
              <p className="text-xs text-stone-600">💴 飲品 ¥600〜¥1,500／調酒 ¥1,200〜</p>
              <p className="text-xs text-stone-600">📞 03-6417-0202</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">櫻花季（3月下旬〜4月上旬）會採預約制入場，出發前請先查官網</p>
            </div>

            <a
              href="https://www.starbucks.co.jp/reserve/roastery/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 2: STREAMER COFFEE COMPANY */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {streamerPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="STREAMER COFFEE COMPANY NAKAMEGURO - 中目黑咖啡廳推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">STREAMER COFFEE COMPANY NAKAMEGURO</h3>
                <span className="text-xs text-stone-400">ストリーマー コーヒーカンパニー 中目黑店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              創辦人<strong>澤田洋史</strong>在2008年的拉花世界大賽（西雅圖）以<strong>亞洲人首位</strong>的身分奪冠🏆 這裡就是他一手打造的咖啡品牌，中目黑店在2016年開幕。整面落地玻璃圍出明亮的空間，門口一塊「TAKEOUT, ALL DAY. GRAB &amp; GO!」的立牌，是那種可以隨性走進去的日常咖啡店☕
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                逛完星巴克臻選之後，走6分鐘就能換一種完全不同的咖啡體驗。招牌的<strong>STREAMER LATTE</strong>用偏濃的濃縮咖啡，配上冠軍等級的拉花，喝起來紮實不甜膩。櫃檯上還有現做的<strong>肉桂捲、蘋果派、焦糖核桃甜甜圈</strong>🍩 店內有<strong>免費Wi-Fi和插座</strong>，走累了想坐下來整理照片、規劃下一站，這裡比人潮洶湧的臻選店輕鬆得多。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏆 拉花世界冠軍", "☕ STREAMER LATTE", "🍩 現做甜點", "🔌 Wi-Fi・插座", "🥤 全時段外帶"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 人氣品項 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍰 實訪時看到的甜點（價格供參考）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>BIG CINNAMON ROLL / MOCHA ROLL</strong>：各 ¥600・份量很大，兩個人分剛好</li>
                <li><strong>APPLE PIE</strong>：¥600・現場加熱，配黑咖啡很搭</li>
                <li><strong>CARAMEL WALNUT DOUGHNUT</strong>：¥550・焦糖核桃，甜度偏高</li>
                <li><strong>CHOCO CHIP COOKIE</strong>：¥400・大塊巧克力，外帶方便</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都目黑區青葉台2-16-6</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線・東京メトロ日比谷線「中目黑」駅 徒步約7分（沿目黑川）</p>
              <p className="text-xs text-stone-600">⏰ 約 8:00〜19:00（各家資訊略有出入，請以官方IG公告為準）</p>
              <p className="text-xs text-stone-600">💴 飲品約 ¥600〜¥900／甜點 ¥400〜¥600</p>
              <p className="text-xs text-stone-600">📞 03-6427-8302</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">官網不公告固定營業時間，出發前請先看店家IG的最新公告</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.instagram.com/streamer_nakameguro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 中目黑店 Instagram
              </a>
              <a
                href="https://streamer.coffee/stores/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站（分店一覽）
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">中目黑咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從中目黑站沿著<strong>目黑川</strong>散步，先到STREAMER（約7分）再往星巴克臻選（約13分），路線最順</li>
            <li>✅ 平日早上或傍晚比較不擠，週末午餐時段人最多</li>
            <li>✅ 星巴克臻選<strong>3月下旬〜4月上旬櫻花季</strong>會採預約制，強烈建議提前預約</li>
            <li>✅ 限定周邊商品適合當伴手禮，送給星巴克迷的朋友很適合🎁</li>
            <li>✅ STREAMER的甜點份量偏大，兩個人分著吃比較剛好</li>
            <li>✅ 附近的中目黑・代官山區域也很好逛，可安排半日行程</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            星巴克臻選光是建築本身就值得專程造訪，裡面的咖啡體驗更是超乎想像✨<br />
            再走6分鐘到STREAMER喝一杯冠軍拿鐵，中目黑的咖啡散步就完整了☕
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「一間看建築、一間喝咖啡，中目黑這兩間走路6分鐘就到，同一天排剛剛好☕」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

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

        <RelatedArticles slug="nakameguro-cafe" exclude={["/cafe", "/koyo", "/shimokitazawa-cafe"]} />

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
