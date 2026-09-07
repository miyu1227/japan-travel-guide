import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/hongkong-japan-guide";
const OG_IMAGE = "/hongkong-japan-guide/cover.png";

export const metadata: Metadata = {
  title: "香港去日本自由行攻略2026｜機票、飛行時間、上網卡、日圓兌換",
  description:
    "香港出發去日本的行前準備一次講清：香港飛東京・大阪的直航選擇與飛行時間、八達通在日本用唔用得、上網卡同eSIM點揀、日圓兌換、轉插頭、時差，以及2026年11月起的退稅新制。附落地後入市區的交通攻略。",
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
    title: "香港去日本自由行攻略2026｜機票、飛行時間、上網卡、日圓兌換與退稅新制",
    description:
      "香港飛東京大阪點揀？八達通日本用唔到、上網卡點買、日圓幾時換、2026年11月退稅新制一次睇曬。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_HK",
    alternateLocale: ["zh_TW"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "香港去日本自由行攻略" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "香港去日本自由行攻略2026｜機票、飛行時間、上網卡、日圓兌換",
    description: "香港出發去日本嘅行前準備一次搞掂✈️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "香港去日本自由行攻略2026｜機票、飛行時間、上網卡、日圓兌換與退稅新制",
  description:
    "香港出發去日本的完整行前準備：直航航點與飛行時間、八達通與Suica、上網卡eSIM、日圓兌換、轉插頭與時差、2026年11月起的退稅新制。",
  url: PAGE_URL,
  inLanguage: ["zh-HK", "zh-TW"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-08-18T00:00:00+09:00",
  dateModified: "2026-09-07T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "香港去日本攻略", item: PAGE_URL },
  ],
};

/** 香港出発の行前準備。台湾発ページとは航空会社・電圧・両替事情が実際に違うので別ページにしている。 */
const routes = [
  {
    dest: "東京（成田 NRT／羽田 HND）",
    time: "約4小時15分",
    note: "班次最密的航線。羽田離市區近，成田轉車時間長但機票通常較平。",
    airlines: "國泰航空、香港快運 HK Express、大灣區航空、日本航空、全日空",
  },
  {
    dest: "大阪（關西 KIX）",
    time: "約3小時40分〜4小時",
    note: "去大阪、神戶、京都的入口。落機後去神戶三宮唔使經大阪市區。",
    airlines: "國泰航空、香港快運 HK Express、大灣區航空",
  },
  {
    dest: "其他航點（名古屋、福岡、札幌等）",
    time: "約3.5〜5小時",
    note: "旺季直航會加密，非旺季有時會出現特平來回票。",
    airlines: "國泰航空、香港快運 HK Express 等",
  },
];

const checklist = [
  {
    icon: "📱",
    title: "上網卡定 eSIM？",
    body: "日本大部分餐廳同小店都要用 Google Map 搵路，落機即刻要有網路。eSIM 可以喺出發前一日先買定，落機開機就用得，唔使换實體卡。",
    href: "/japan-esim",
    linkLabel: "睇 eSIM 使用指南",
  },
  {
    icon: "💳",
    title: "八達通喺日本用唔到",
    body: "日本要用 Suica／PASMO（東京）或 ICOCA（關西）呢類 IC 卡。iPhone 同 Apple Watch 可以直接喺錢包 App 加入 Suica 增值，唔使排隊買實體卡。實體卡嘅發售狀況時有調整，以現場公告為準。",
  },
  {
    icon: "💴",
    title: "日圓幾時換最抵？",
    body: "日本仍然有唔少老店、拉麵店同居酒屋只收現金。建議喺香港嘅找換店先換一部分日圓（日幣）現金傍身，一日大約 ¥8,000〜12,000，剩低嘅靠信用卡同手機支付。",
  },
  {
    icon: "🔌",
    title: "一定要帶轉插頭",
    body: "香港係英規三腳插，日本係 A 型兩腳扁插、電壓 100V。手機同相機充電器多數係 100〜240V 寬電壓可以直接用，但插頭形狀唔同，轉插一定要帶。",
  },
  {
    icon: "🕐",
    title: "時差只有 1 小時",
    body: "日本比香港快 1 小時。香港早上 9 點＝日本早上 10 點。落機當日通常唔會有時差反應，可以直接開始行程。",
  },
];

const relatedLinks = [
  { href: "/narita-airport-access", label: "🚄 成田機場到東京市區交通攻略", desc: "Skyliner、巴士、JR、行李配送點揀" },
  { href: "/haneda-airport-access", label: "✈️ 羽田機場到東京市區交通攻略", desc: "京急、單軌電車、巴士、的士比較" },
  { href: "/japan-esim", label: "📱 日本自由行 eSIM 使用指南", desc: "落機即刻上網嘅事前準備" },
  { href: "/tokyo-subway-ticket", label: "🚇 東京地鐵24/48/72小時乘車券", desc: "外國旅客限定，地下鐵任搭" },
  { href: "/taiwan-japan-guide", label: "🇹🇼 台灣飛日本自由行攻略", desc: "台灣出發版本（航線與電壓都不同）" },
];

const hubLinks = [
  { href: "/tokyo-gourmet", label: "🍜 東京美食推介｜必食拉麵・燒肉・手信" },
  { href: "/tokyo-cafe", label: "☕ 東京咖啡店推介｜人氣咖啡廳・甜品" },
  { href: "/tokyo-spot", label: "📍 東京景點推介｜地標・公園・美術館" },
  { href: "/osaka", label: "🍻 大阪美食推介｜梅田在地必食店" },
  { href: "/kobe", label: "⛲ 神戶一日遊｜必食神戶牛・咖啡・溫泉" },
  { href: "/kansai", label: "🏯 關西自由行推介｜大阪・神戶・京都近郊" },
];

const faqs = [
  { q: "香港去日本要飛幾耐？", a: "香港飛東京（成田・羽田）約4小時、飛大阪關西約3小時40分、飛福岡約3小時、飛札幌約5小時。加埋機場入市區嘅1小時，朝早班機當日下午就可以開始玩。" },
  {
    q: "香港去日本要簽證嗎？",
    a: "香港特區護照持有人以旅遊目的短期停留日本可免簽證。出發前記得確認護照有效期，以及日本入境所需嘅入境卡與海關申報（可以事先喺 Visit Japan Web 登記，落機過關快好多）。實際規定以官方公告為準。",
  },
  {
    q: "八達通可以喺日本嘅便利店用嗎？",
    a: "唔可以。八達通只喺香港通用。喺日本要用 Suica、PASMO、ICOCA 呢類日本嘅交通 IC 卡，佢哋除咗搭車，喺便利店、自動販賣機同好多連鎖店都可以拍卡付款。",
  },
  {
    q: "2026年嘅日本退稅同以前有咩唔同？",
    a: "由 2026 年 11 月 1 日開始，日本改用「先付含稅價、離境時退款」嘅 Refund 方式：喺免稅店買嘢時照付含稅價，離境時經海關確認貨品有帶出境，先退返消費稅。同一日同一間店合計 ¥5,000（未連稅）以上就計，消耗品原本嘅 50 萬円上限同特殊包裝規定亦會取消，購買日起 90 日內要離境辦手續。細節以日本國稅廳公告為準。",
  },
  {
    q: "香港飛東京同飛大阪，第一次去揀邊個好？",
    a: "第一次去日本、想行街同食嘢為主，揀東京；想一程玩多個城市（大阪、神戶、京都），揀關西機場會慳好多車程。關西三個城市之間坐電車都係 30 分鐘左右，住一個地方就得。",
  },
  {
    q: "「必食」同台灣講嘅「必吃」搜出嚟嘅係咪同一批店？",
    a: "係。台灣習慣打「推薦・必吃・甜點・伴手禮」，香港習慣打「推介・必食・甜品・手信」，講嘅係同一件事。本站兩種講法都會寫，所以兩地搵到嘅都係同一份實際食過嘅清單。",
  },
];


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HongKongJapanGuidePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">香港去日本攻略</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-yellow-100 text-yellow-700 border border-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">🎒 出發前準備</span>
          <span className="bg-red-50 text-red-600 border border-red-200 text-xs font-semibold px-3 py-1 rounded-full">🇭🇰 香港出發</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">✈️ 機票・交通</span>
        </div>

        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          香港去日本自由行攻略 2026｜<br />機票、飛行時間、上網卡、日圓兌換與退稅新制✈️
        </h1>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-yellow-100 shadow-sm mb-3">
          <Image
            src="/hongkong-japan-guide/cover.png"
            alt="香港去日本自由行攻略｜機票・上網卡・日圓兌換・退稅"
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
            priority
          />
        </div>

        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-07</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            香港去日本，飛行時間短、班次多，好多人一年去兩三次🇭🇰✈️ 但每次臨出發前，總係同一堆問題：
            <strong>今次揀成田定羽田？八達通喺日本用唔用得？日圓幾時換？轉插頭帶咗未？</strong>
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            呢一頁專門寫俾<strong>香港出發</strong>嘅旅客，把「上機前要搞掂嘅嘢」一次過整理好。
            台灣出發嘅朋友請睇 <Link href="/taiwan-japan-guide" className="text-blue-500 font-semibold hover:underline">台灣飛日本自由行攻略</Link>——
            航線、電壓同兌換嘅做法其實唔一樣。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            落地之後想食咩、去邊度，可以直接跳去我哋實際食過行過嘅
            <Link href="/tokyo-gourmet" className="text-blue-500 font-semibold hover:underline">東京必食推介</Link>同
            <Link href="/osaka" className="text-blue-500 font-semibold hover:underline">大阪必食推介</Link>。
          </p>
        </section>

        {/* 航線 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-1">✈️ 香港飛日本：直航航點同飛行時間</h2>
          <p className="text-xs text-stone-500 mb-4">飛行時間為一般參考值，實際以航空公司公布為準。</p>
          <div className="space-y-3">
            {routes.map((r) => (
              <div key={r.dest} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-bold text-stone-800">{r.dest}</p>
                  <span className="shrink-0 text-[11px] px-2 py-0.5 rounded-full border border-blue-200 text-blue-600 bg-blue-50">
                    {r.time}
                  </span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-2">{r.note}</p>
                <p className="text-xs text-stone-400">主要航空公司：{r.airlines}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <p className="text-sm text-stone-600 leading-relaxed">
              💡 <strong>揀機場嘅重點</strong>：羽田離東京市區近（<Link href="/haneda-airport-access" className="text-blue-500 font-semibold hover:underline">羽田入市區攻略</Link>），
              成田機票多數平啲但要預多約1小時車程（<Link href="/narita-airport-access" className="text-blue-500 font-semibold hover:underline">成田入市區攻略</Link>）。
              夜機落成田要留意尾班車時間。
            </p>
          </div>
        </section>

        {/* 行前準備 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-4">🎒 出發前一定要搞掂嘅5件事</h2>
          <div className="space-y-3">
            {checklist.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
                <p className="text-sm font-bold text-stone-800 mb-1">
                  {c.icon} {c.title}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {c.body}
                  {c.href && (
                    <>
                      {" "}
                      <Link href={c.href} className="text-blue-500 font-semibold hover:underline">
                        {c.linkLabel} →
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 退稅 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-3">🧾 2026年11月起：日本退稅改用「離境退款」方式</h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以前喺免稅店埋單即場就唔使畀消費稅，但由 <strong>2026年11月1日</strong> 開始改制：
              <strong>買嘢時照付含稅價</strong>，離境時經機場海關確認貨品確實有帶出境之後，先退返消費稅。
            </p>
            <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
              <li>・同一日、同一間店合計 <strong>¥5,000（未連稅）以上</strong>先計得免稅</li>
              <li>・消耗品原本嘅 <strong>50萬円上限撤銷</strong>，同一般物品唔再分開計</li>
              <li>・消耗品嘅<strong>特殊封裝規定取消</strong>，即係買完可以喺日本開嚟用</li>
              <li>・購買日起 <strong>90日內</strong>要離境並辦妥海關手續</li>
            </ul>
            <p className="text-xs text-stone-400 mt-3">
              ※ 實際手續同適用範圍以日本國稅廳與各店公告為準。買貴價電器、化妝品前建議先問清楚店員。
            </p>
          </div>
        </section>

        {/* 落地後 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-3">🍜 落地之後：食咩、去邊度</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {hubLinks.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="flex items-center justify-between bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm hover:border-yellow-300 transition-colors"
              >
                <span className="text-sm font-bold text-stone-800">{h.label}</span>
                <span className="text-stone-300 text-sm">›</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-3">❓ 常見問題</h2>
          <div className="space-y-2">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
                <p className="text-sm font-bold text-stone-800 mb-1">Q. {f.q}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AuthorCard />

        <section className="mt-8">
          <h2 className="text-base font-black text-stone-800 mb-3">📚 延伸閱讀</h2>
          <div className="space-y-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm hover:border-yellow-300 transition-colors"
              >
                <div>
                  <p className="text-sm font-bold text-stone-800">{link.label}</p>
                  <p className="text-xs text-stone-400">{link.desc}</p>
                </div>
                <span className="text-stone-300 text-sm">›</span>
              </Link>
            ))}
          </div>
        </section>

        <RelatedArticles slug="hongkong-japan-guide" />
      </article>

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
