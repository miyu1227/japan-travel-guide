import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/sangenjaya-gourmet";
const OG_IMAGE = "/sangenjaya-gourmet/wanzhuji-1.jpg";

export const metadata: Metadata = {
  title: "萬豚記 三軒茶屋｜營業到凌晨4點的中華料理✅實吃",
  description:
    "三軒茶屋站附近的萬豚記（Wanzhuji），週二〜週日營業到凌晨4點、全年無休。招牌豬五花青菜炒飯、50g大餃子，可刷卡・QR支付。",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "zh-Hant": PAGE_URL,
      "zh-TW": PAGE_URL,
      "zh-HK": PAGE_URL,
      "zh-MO": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "萬豚記 三軒茶屋｜營業到凌晨4點的中華料理",
    description: "三軒茶屋的深夜中華。招牌豬五花青菜炒飯、大餃子，全年無休🥟",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 900, height: 1200, alt: "萬豚記 三軒茶屋 中華料理" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "萬豚記 三軒茶屋｜營業到凌晨4點的中華料理",
    description: "三軒茶屋的深夜中華，全年無休、可刷卡🥟",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "萬豚記 三軒茶屋｜營業到凌晨4點的中華料理【實際造訪】",
  description: "三軒茶屋的中華料理萬豚記：營業時間、招牌菜、座位、付款方式整理。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-19T00:00:00+09:00",
  dateModified: "2026-11-19T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京美食推薦", item: "https://www.japantrippicks.com/tokyo-gourmet" },
    { "@type": "ListItem", position: 3, name: "萬豚記 三軒茶屋", item: PAGE_URL },
  ],
};

const faqs = [
  {
    q: "萬豚記是什麼？怎麼唸？",
    a: "萬豚記（日文寫作「万豚記」，讀音ワンツーチィ，羅馬拼音 Wanzhuji／Wan Zhu Ji）是1994年從東京八王子開始的中華料理店，主打「一盤就能吃飽又不傷荷包」的一膳飯館。名字的意思是：在中國豬象徵財富與幸福，「萬豚」是很多吉祥的豬，「記」是「〜的店」。",
  },
  {
    q: "萬豚記三軒茶屋營業到幾點？",
    a: "週二〜週日11:30〜凌晨4:00（最後點餐3:30），週一11:30〜22:30（最後點餐22:00），全年無休。週一遇到國定假日時，短營業的日子改到隔天的平日。",
  },
  {
    q: "必點是什麼？",
    a: "官方說創業以來的招牌是「豬五花青菜炒飯」，用蠔油和中國醬油炒出甜鹹味；人氣菜還有「牛肉燴炒飯」（蛋炒飯淋上牛肉蔬菜醬油芡汁），以及一顆50g以上、店內手工包的「大餃子」。",
  },
  {
    q: "可以刷卡嗎？",
    a: "可以，信用卡和QR碼支付都能用。",
  },
  {
    q: "一個人去可以嗎？",
    a: "可以。全店60席裡有24席是吧檯座，一個人也很好坐。全店禁菸。",
  },
  {
    q: "有中文菜單嗎？",
    a: "官網沒有提到中文菜單。看不懂日文菜單的話，用Google翻譯的相機功能拍菜單，或指著照片點餐最快。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const relatedLinks = [
  { href: "/shibuya-gohan", label: "🍽️ 澀谷一個人的一餐", desc: "從三軒茶屋搭田園都市線2站就到" },
  { href: "/futakotamagawa", label: "🌳 二子玉川美食散步", desc: "同一條田園都市線上的河岸街區" },
  { href: "/torikizoku", label: "🍢 鳥貴族菜單怎麼點", desc: "全品¥410的日本燒鳥居酒屋" },
];

const photos = ["/sangenjaya-gourmet/wanzhuji-1.jpg", "/sangenjaya-gourmet/wanzhuji-2.jpg", "/sangenjaya-gourmet/wanzhuji-3.jpg"];
const photoAlts = [
  "萬豚記 三軒茶屋 撒滿蔥花與辣椒粉的炸物",
  "萬豚記 三軒茶屋 煎餃・炸餃子・炸帶骨肉",
  "萬豚記 三軒茶屋 木耳炒青菜",
];

export default function SangenjayaGourmetPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">萬豚記 三軒茶屋</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🥟 中華料理</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・三軒茶屋</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際品嚐</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          萬豚記 三軒茶屋｜<br />營業到凌晨4點的中華料理🥟
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-19</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">三軒茶屋的深夜中華，全年無休</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>三軒茶屋</strong>是從澀谷搭東急田園都市線2站就到的住宅區，車站周邊都是在地人常去的小餐館和酒場🏮 這裡的<strong>萬豚記（Wanzhuji）</strong>是一間<strong>週二〜週日營業到凌晨4點、全年無休</strong>的中華料理店。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            晚上逛完澀谷、喝完一輪還想吃點熱的，或是行程拖到很晚找不到店——這種時候萬豚記就很好用。<strong>可以刷卡、QR支付，一個人坐吧檯也很自在</strong>✨
          </p>
        </section>

        <PrepBannerCompact />

        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">三軒茶屋美食推薦（推介）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {photos.map((src, i) => (
              <div key={src} className="relative bg-stone-100" style={photoStyle(src)}>
                <Image
                  src={src}
                  alt={photoAlts[i]}
                  fill
                  sizes="(max-width: 768px) 33vw, 300px"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">萬豚記 三軒茶屋</h3>
                <span className="text-xs text-stone-400">WANZHUJI SANGENJAYA</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              萬豚記是<strong>1994年在東京八王子</strong>從一間14席的小店開始的中華料理品牌，料理概念是「<strong>吃了舌頭和肚子都會被打中的料理</strong>」，主打一盤就能吃飽、又不傷荷包。雖然是連鎖店，官方說會盡量堅持手工製作。三軒茶屋店是<strong>重新開幕</strong>的分店，紅色吧檯上擺著醋、醬油等調味料，很有街邊中華食堂的感覺。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                東京營業到凌晨的店很多是居酒屋，<strong>想好好吃一頓中華料理</strong>的選擇其實不多🌙 萬豚記週二〜週日開到<strong>凌晨4點</strong>，又是<strong>全年無休</strong>，行程怎麼排都吃得到。我們那天點了煎餃、炸餃子、炸帶骨肉、木耳炒青菜，還有一盤撒滿蔥花和辣椒粉的炸物，幾個人分著吃剛好。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌙 營業到凌晨4點", "📅 全年無休", "🥟 手工大餃子", "🍚 招牌炒飯", "💳 可刷卡・QR支付", "🚭 全店禁菸"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍚 官方推薦的招牌菜</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>豬五花青菜炒飯</strong>：創業以來的招牌，用蠔油和中國醬油炒出甜鹹味，官方「最推薦」的一道</li>
                <li><strong>牛肉燴炒飯</strong>：蛋炒飯淋上牛肉和蔬菜的醬油芡汁，人氣菜</li>
                <li><strong>大餃子</strong>：一顆50g以上，餡料在店內做、一顆一顆手工包</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">官網沒有公布價格，以店內菜單為準。</p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">📝 怎麼點餐</p>
              <ol className="text-xs text-stone-600 space-y-1.5 list-decimal list-inside">
                <li>一個人就坐<strong>吧檯</strong>（24席），幾個人一起就坐桌位</li>
                <li>先點一盤<strong>招牌炒飯</strong>當主食，再加<strong>大餃子</strong>和一盤青菜</li>
                <li>菜單看不懂時，用<strong>Google翻譯的相機功能</strong>拍菜單，或指著照片點</li>
              </ol>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都世田谷區三軒茶屋2-13-22</p>
              <p className="text-xs text-stone-600 ib ib-train">東急田園都市線「三軒茶屋站」附近</p>
              <p className="text-xs text-stone-600 ib ib-clock">週二〜週日 11:30〜凌晨4:00（L.O. 3:30）／週一 11:30〜22:30（L.O. 22:00）・全年無休</p>
              <p className="text-xs text-stone-600 ib ib-yen">價格以店內菜單為準</p>
              <p className="text-xs text-stone-600">💳 付款：信用卡・QR碼支付可</p>
              <p className="text-xs text-stone-600">🪑 座位：60席（吧檯24席）・可包場・全店禁菸</p>
              <p className="text-xs text-stone-600">🛵 外送：Uber Eats・出前館</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                <strong>週一只營業到22:30</strong>，深夜想去的話避開週一（週一是國定假日時，短營業改到隔天平日）
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="https://kiwa-group.co.jp/wanzhuji_sangenjyaya/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
              <a href="https://www.instagram.com/wanzhuji127/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📷 官方Instagram
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=%E4%B8%87%E8%B1%9A%E8%A8%98+%E4%B8%89%E8%BB%92%E8%8C%B6%E5%B1%8B" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-hatena">常見問題 FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-sm font-bold text-stone-700 mb-1">❓ {f.q}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從<strong>澀谷搭田園都市線2站</strong>就到三軒茶屋</li>
            <li>✅ 深夜去的話<strong>避開週一</strong>（只開到22:30）</li>
            <li>✅ <strong>可以刷卡和QR支付</strong>，不用特地準備現金</li>
            <li>✅ 幾個人一起去，<strong>多點幾盤分著吃</strong>最划算</li>
            <li>✅ 菜單看不懂就用<strong>Google翻譯相機</strong></li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            營業到凌晨4點、全年無休、可以刷卡——萬豚記是三軒茶屋晚上肚子餓時的好去處🥟<br />
            住在澀谷附近的話，晚上搭2站過來吃一頓吧！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「半夜還能吃到熱騰騰的炒飯和餃子，太幸福了🥟」</p>
            </div>
          </div>
        </div>

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

        <RelatedArticles slug="sangenjaya-gourmet" exclude={["/shibuya-gohan", "/futakotamagawa", "/torikizoku"]} />

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
