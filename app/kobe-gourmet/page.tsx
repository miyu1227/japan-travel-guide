import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/kobe-gourmet";
const OG_IMAGE = "/kobe-gourmet/famiglia-1.jpg";

export const metadata: Metadata = {
  title: "神戶美食推薦｜LA FAMIGLIA・元町西西里料理✅實訪",
  description:
    "元町站徒步3分的西西里料理專門店「LA FAMIGLIA」。日本少見的西西里菜與自然派葡萄酒，午餐¥2,500起。附交通・營業時間・公休日。",
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
    title: "神戶美食推薦｜LA FAMIGLIA・元町的西西里料理專門店",
    description: "日本少見的西西里料理！元町站徒步3分，自製佛卡夏與西西里自然派葡萄酒。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "神戶美食推薦・LA FAMIGLIA的西西里義大利麵" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "神戶美食推薦｜LA FAMIGLIA・元町西西里料理",
    description: "日本少見的西西里料理專門店！元町站徒步3分，午餐¥2,500起🍝",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "神戶美食推薦｜LA FAMIGLIA・元町的西西里料理專門店【實際造訪】",
  description:
    "神戶元町的西西里料理專門店「La Famiglia ラ・ファミリア」完整介紹。日本少見的西西里菜、自製佛卡夏與西西里自然派葡萄酒。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-09-04T00:00:00+09:00",
  dateModified: "2026-09-04T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "神戶美食推薦", item: PAGE_URL },
  ],
};

const photos = ["/kobe-gourmet/famiglia-1.jpg", "/kobe-gourmet/famiglia-2.jpg"];

const relatedLinks = [
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店・A5鐵板燒", desc: "神戶必吃A5神戶牛，主廚現煎入口即化" },
  { href: "/kobe-cafe", label: "☕ 神戶咖啡廳推薦4選｜三宮・北野的教堂咖啡與巧克力老店", desc: "教堂改建咖啡廳・熊熊麵包吃到飽・Caffarel" },
  { href: "/sanda-soba", label: "🍃 神戶近郊蕎麥麵推薦｜三田蕎麦いち・手打蕎麥名店", desc: "神戶近郊隱藏名店，嚴選國產蕎麥粉" },
];

const faqItems = [
  {
    q: "西西里料理跟一般義大利菜差在哪？",
    a: "西西里（Sicilia）是義大利最南端的島，被阿拉伯、希臘、西班牙輪流統治過，所以味道比北義複雜：常用到沙丁魚、茴香、葡萄乾、松子、茄子與大量檸檬，酸甜交錯的做法很多。日本專做西西里菜的店很少，這也是這間值得專程來的理由。",
  },
  {
    q: "從三宮或大阪過去方便嗎？",
    a: "很方便。JR與阪神的「元町」站徒步約3分，從三宮各線走過來也只要約7分。大阪梅田到三宮約30分鐘，當天來回完全沒問題。",
  },
  {
    q: "午餐大概多少錢？",
    a: "午餐預算約¥2,500起，義大利麵單點約¥2,500（含稅）。晚餐約¥4,000起，也有附無限暢飲的肉類套餐。",
  },
  {
    q: "需要訂位嗎？",
    a: "建議先訂。全店約30個座位（桌位14、吧台6、露台10），不算大，假日的午餐時段容易客滿。",
  },
  {
    q: "公休日是哪一天？",
    a: "週三公休。午餐12:00〜15:00（L.O. 14:30）、晚餐18:00〜21:00（料理L.O. 20:00），中間有休息時段，別在下午3〜6點之間去。",
  },
];

export default function KobeGourmetPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">神戶美食推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 兵庫・神戶元町</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          神戶美食推薦｜LA FAMIGLIA<br />元町的西西里料理專門店🍝
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-04</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">神戶——日本最早吃到西餐的城市</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>神戶</strong>是日本最早開港的城市之一，西餐、洋菓子與咖啡都是從這裡進到日本的🚢 所以神戶的義大利菜、法國菜水準特別高，而且不是那種觀光客取向的店，是真的有在地人天天在吃的餐廳。從大阪梅田搭電車到三宮只要約30分鐘，很好安排。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）的是元町站徒步3分的<strong>「LA FAMIGLIA（ラ・ファミリア）」</strong>——一間<strong>專做西西里料理</strong>的小餐館🇮🇹 在日本，專攻西西里菜的店非常少見，這裡連葡萄酒都是<strong>西西里產的自然派</strong>，麵包也是自己烤的佛卡夏。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">神戶美食推薦（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="LA FAMIGLIA ラ・ファミリア - 神戶美食推薦"
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
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">La Famiglia（LA FAMIGLIA）</h3>
                <span className="text-xs text-stone-400">ラ・ファミリア／西西里料理專門店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              紅白格紋桌布、五顏六色的盤子、盤緣印著紅色手寫的<strong>「LA FAMIGLIA」</strong>——一坐下就知道這間走的不是高級路線，而是<strong>義大利家庭餐桌</strong>的氣氛🇮🇹 店名本身就是義大利文的「家人」。主廚專攻<strong>西西里（Sicilia）料理</strong>，這在日本其實相當罕見，大部分義式餐廳做的是北義或羅馬風味。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                先點<strong>綜合前菜拼盤</strong>準沒錯🍽️ 我們那盤上了薩拉米、粉嫩的烤豬肉配黃芥末、醃漬紫甘藍、油漬蘑菇、燉煮蔬菜與櫛瓜——酸、甜、鹹交錯，正是西西里那種「被好幾個文明輪流統治過」的複雜味道。麵包是<strong>自製佛卡夏</strong>，用來沾盤底的醬汁剛剛好。義大利麵份量實在，白醬那盤撒了大量現磨起司與黑胡椒，配上翠綠的蔬菜，看起來就很有食慾。酒單主打<strong>西西里產的自然派葡萄酒</strong>，不喝酒的話也有果汁。<strong>午餐¥2,500起</strong>就能吃到這個水準，以神戶市中心來說很划算。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🇮🇹 日本少見的西西里料理", "🍷 西西里自然派葡萄酒", "🥖 自製佛卡夏", "🍝 前菜拼盤必點", "🚃 元町站徒步3分"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍝 這樣點最順</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>午餐</strong>：義大利麵單點約 ¥2,500（含稅）、預算 ¥2,500 起</li>
                <li><strong>晚餐</strong>：預算約 ¥4,000 起，另有附無限暢飲的肉類套餐</li>
                <li>招牌是西西里名菜<strong>沙丁魚茴香義大利麵（Pasta con le sarde）</strong>為底的一道；番茄醬汁配布拉塔起司的義大利麵也很多人點</li>
                <li>兩人以上的話：<strong>前菜拼盤＋兩種義大利麵</strong>剛好分著吃</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市中央區下山手通3-2-8-101 ドミール下山手</p>
              <p className="text-xs text-stone-600">🚃 JR・阪神「元町」駅 徒步約3分／各線「三宮」駅 徒步約7分</p>
              <p className="text-xs text-stone-600">⏰ 午餐 12:00〜15:00（L.O. 14:30）／晚餐 18:00〜21:00（料理L.O. 20:00・飲料L.O. 20:30）</p>
              <p className="text-xs text-stone-600">🚫 公休：週三</p>
              <p className="text-xs text-stone-600">💴 午餐約 ¥2,500〜／晚餐約 ¥4,000〜</p>
              <p className="text-xs text-stone-600">🪑 約30席（桌位14・吧台6・露台10）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                座位不多、中午與晚上之間有<strong>休息時段</strong>，建議先訂位，也別在下午3〜6點之間跑去
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/la._.famiglia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 官方 Instagram
              </a>
              <a
                href="https://www.hotpepper.jp/strJ001125880/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 店家資訊・線上訂位
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">神戶美食散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 大阪梅田到三宮約<strong>30分鐘</strong>，住大阪也能當天來回，不必特地換飯店</li>
            <li>✅ 關西機場到三宮：機場巴士約1小時5分、高速船＋接駁約50分，<strong>可以不進大阪直接來神戶</strong></li>
            <li>✅ 這間<strong>週三公休</strong>，而且中午與晚上之間有休息時段，出發前先確認時間</li>
            <li>✅ 元町站周邊就是<strong>南京町（中華街）與舊居留地</strong>，吃完可以順著散步</li>
            <li>✅ 想再吃神戶牛的話，<strong>三宮</strong>就在徒步7分的距離，午餐時段的鐵板燒套餐比晚餐好入手🥩</li>
            <li>✅ 神戶是洋菓子之都，甜點（甜品）留到下午再吃，一天可以排「西西里午餐→咖啡廳→神戶牛晚餐」</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            在日本要吃到專門的西西里料理其實不容易，而神戶就有這麼一間藏在元町巷子裡的小店✨<br />
            紅白格紋桌布配上一盤前菜與一杯自然派葡萄酒，是很神戶的一頓飯。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「店名是義大利文的『家人』，吃起來也真的像去別人家吃飯一樣放鬆🍝」</p>
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

        <RelatedArticles slug="kobe-gourmet" exclude={["/steak-zen", "/kobe-cafe", "/sanda-soba"]} />

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
