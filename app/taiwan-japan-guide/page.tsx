import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/taiwan-japan-guide";
const OG_IMAGE = "/taiwan-japan-guide/cover.png";

export const metadata: Metadata = {
  title: "台灣去日本自由行攻略2026｜機票、飛行時間、網路卡、換日幣",
  description:
    "台灣出發去日本的行前準備一次看完：桃園・松山飛東京大阪的航線與飛行時間、悠遊卡在日本能不能用、網路卡與eSIM怎麼選、日幣什麼時候換、電壓插頭、時差，以及2026年11月上路的日本退稅新制。",
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
    title: "台灣去日本自由行攻略2026｜機票、飛行時間、網路卡、換日幣與退稅新制",
    description:
      "桃園松山飛東京大阪怎麼選？悠遊卡在日本不能用、網路卡怎麼買、日幣何時換、2026年11月退稅新制一次看懂。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "台灣飛日本自由行攻略" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "台灣去日本自由行攻略2026｜機票、飛行時間、網路卡、換日幣",
    description: "台灣出發的日本自由行行前準備一次搞定✈️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "台灣去日本自由行攻略2026｜機票、飛行時間、網路卡、換日幣與退稅新制",
  description:
    "台灣出發的日本自由行完整行前準備：直航航線與飛行時間、悠遊卡與Suica、網路卡eSIM、換日幣、電壓插頭與時差、2026年11月上路的退稅新制。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
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
    { "@type": "ListItem", position: 2, name: "台灣飛日本攻略", item: PAGE_URL },
  ],
};

/** 台湾出発の行前準備。香港発ページとは航空会社・電圧・両替事情が実際に違うので別ページにしている。 */
const routes = [
  {
    dest: "東京（成田 NRT／羽田 HND）",
    time: "約3〜3.5小時",
    note: "桃園飛成田與羽田都有；松山機場則以直飛羽田為主，落地後進市區最快。",
    airlines: "中華航空、長榮航空、星宇航空、台灣虎航、樂桃、酷航、日本航空、全日空",
  },
  {
    dest: "大阪（關西 KIX）",
    time: "約2小時40分〜3小時",
    note: "去大阪、神戶、京都的入口。三個城市之間電車約30分鐘，住一邊就能全玩。",
    airlines: "中華航空、長榮航空、星宇航空、台灣虎航、樂桃",
  },
  {
    dest: "其他航點（名古屋、福岡、札幌、沖繩等）",
    time: "約1.5〜4小時",
    note: "台灣飛日本的直航點密度在亞洲數一數二，旺季常有加班機。",
    airlines: "中華航空、長榮航空、星宇航空、台灣虎航等",
  },
];

const checklist = [
  {
    icon: "📱",
    title: "網路卡還是 eSIM？",
    body: "日本找路幾乎全靠 Google Map，落地就要有網路。eSIM 可以出發前一天先買好，下飛機開機就能用，不用換實體卡也不怕把原本的 SIM 弄丟。",
    href: "/japan-esim",
    linkLabel: "看 eSIM 使用指南",
  },
  {
    icon: "💳",
    title: "悠遊卡在日本不能用",
    body: "日本要用 Suica／PASMO（東京）或 ICOCA（關西）這類交通 IC 卡。iPhone 與 Apple Watch 可以直接在錢包 App 裡加入 Suica 並儲值，不用排隊買實體卡。實體卡的發售狀況時有調整，以現場公告為準。",
  },
  {
    icon: "💴",
    title: "日幣什麼時候換？",
    body: "日本仍有不少老店、拉麵店與居酒屋只收現金。建議在台灣的銀行先換一部分日幣（日圓）現金，一天大約抓 ¥8,000〜12,000，其餘靠信用卡與行動支付。機場臨櫃匯率通常比較差。",
  },
  {
    icon: "🔌",
    title: "插頭不用轉接器",
    body: "台灣是 110V、日本是 100V，兩邊都用 A 型雙扁插，手機與相機充電器基本上可以直接插。只有部分高耗電的吹風機、電棒需要確認標示，這點比香港旅客方便很多。",
  },
  {
    icon: "🕐",
    title: "時差只有 1 小時",
    body: "日本比台灣快 1 小時。台灣早上 9 點＝日本早上 10 點。當天不會有時差問題，落地就能直接開始跑行程。",
  },
];

const relatedLinks = [
  { href: "/narita-airport-access", label: "🚄 成田機場到東京市區交通攻略", desc: "Skyliner、巴士、JR、行李配送怎麼選" },
  { href: "/haneda-airport-access", label: "✈️ 羽田機場到東京市區交通攻略", desc: "京急、單軌電車、巴士、計程車比較" },
  { href: "/japan-esim", label: "📱 日本自由行 eSIM 使用指南", desc: "抵達日本就能上網的事前準備" },
  { href: "/tokyo-subway-ticket", label: "🚇 東京地鐵24/48/72小時乘車券", desc: "外國旅客限定，地下鐵無限搭" },
  { href: "/hongkong-japan-guide", label: "🇭🇰 香港去日本自由行攻略", desc: "香港出發版本（航線與電壓都不同）" },
];

const hubLinks = [
  { href: "/tokyo-gourmet", label: "🍜 東京美食推薦｜必吃拉麵・燒肉・伴手禮" },
  { href: "/tokyo-cafe", label: "☕ 東京咖啡廳推薦｜人氣咖啡店・甜點" },
  { href: "/tokyo-spot", label: "📍 東京景點推薦｜地標・公園・美術館" },
  { href: "/tokyo-day-trip", label: "🚃 東京近郊一日遊｜箱根・橫濱・湘南" },
  { href: "/osaka", label: "🍻 大阪必食推介｜梅田在地美食、沾麵、自助餐" },
  { href: "/kansai", label: "🏯 關西自由行推薦｜大阪・神戶・京都近郊" },
];

const faqs = [
  { q: "台灣到日本要飛多久？", a: "桃園・松山飛東京（成田・羽田）約3小時、飛大阪關西約2小時40分、飛福岡約2小時、飛札幌約4小時。加上機場進市區的1小時，出發當天下午就能開始玩。" },
  {
    q: "台灣去日本要簽證嗎？",
    a: "中華民國護照持有人以觀光目的短期停留日本可免簽證。出發前記得確認護照效期，並事先在 Visit Japan Web 完成入境與海關申報登錄，過關會快很多。實際規定請以官方公告為準。",
  },
  {
    q: "悠遊卡可以在日本便利商店用嗎？",
    a: "不行。悠遊卡只在台灣通用。在日本要用 Suica、PASMO、ICOCA 這類日本的交通 IC 卡，除了搭車，在便利商店、自動販賣機與許多連鎖店也都能感應付款。",
  },
  {
    q: "2026年的日本退稅和以前有什麼不同？",
    a: "從 2026 年 11 月 1 日起，日本改成「先付含稅價、離境時退款」的方式：在免稅店結帳時照付含稅價格，離境時經海關確認商品確實帶出境後，才退還消費稅。同一天同一家店合計 ¥5,000（未稅）以上即可適用，消耗品原本的 50 萬日圓上限與特殊包裝規定也一併取消，購買日起 90 天內要出境完成手續。細節請以日本國稅廳與各店公告為準。",
  },
  {
    q: "第一次去日本，該飛東京還是大阪？",
    a: "想以逛街、美食與都市景點為主，選東京；想一趟玩到多個城市（大阪、神戶、京都），選關西機場會省下很多車程。關西三個城市之間電車都在 30 分鐘左右，住一邊當基地就夠。",
  },
  {
    q: "廉航行李比較少，伴手禮怎麼帶？",
    a: "搭台灣虎航、樂桃等廉航時，行李額度要先加購比較划算。餅乾禮盒體積大但不重，液體與生鮮類則要注意能不能託運。想買什麼可以先看東京伴手禮的整理再決定加購幾公斤。",
  },
];


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function TaiwanJapanGuidePage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">台灣飛日本攻略</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-yellow-100 text-yellow-700 border border-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">🎒 出發前準備</span>
          <span className="bg-red-50 text-red-600 border border-red-200 text-xs font-semibold px-3 py-1 rounded-full">🇹🇼 台灣出發</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">✈️ 機票・交通</span>
        </div>

        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          台灣去日本自由行攻略 2026｜<br />機票、飛行時間、網路卡、換日幣與退稅新制✈️
        </h1>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-yellow-100 shadow-sm mb-3">
          <Image
            src="/taiwan-japan-guide/cover.png"
            alt="台灣飛日本自由行攻略｜機票・網路卡・換日幣・退稅"
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
            台灣飛日本只要3小時上下，班次又多，很多人一年跑好幾趟🇹🇼✈️ 但每次出發前，卡住的問題其實都一樣：
            <strong>這次要飛成田還是羽田？悠遊卡在日本能不能刷？日幣要在哪裡換？</strong>
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            這一頁專門寫給<strong>台灣出發</strong>的旅客，把「上飛機前要先搞定的事」一次整理完。
            香港出發的朋友請看 <Link href="/hongkong-japan-guide" className="text-blue-500 font-semibold hover:underline">香港去日本自由行攻略</Link>——
            航線、電壓與兌換的做法其實不一樣。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            落地之後要吃什麼、去哪裡，可以直接跳到我們實際吃過走過的
            <Link href="/tokyo-gourmet" className="text-blue-500 font-semibold hover:underline">東京必吃推薦</Link>與
            <Link href="/osaka" className="text-blue-500 font-semibold hover:underline">大阪美食推薦</Link>。
          </p>
        </section>

        {/* 航線 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-1">✈️ 台灣飛日本：直航航線與飛行時間</h2>
          <p className="text-xs text-stone-500 mb-4">飛行時間為一般參考值，實際請以航空公司公布為準。</p>
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
              💡 <strong>選機場的重點</strong>：羽田離東京市區近（<Link href="/haneda-airport-access" className="text-blue-500 font-semibold hover:underline">羽田進市區攻略</Link>），
              成田的機票通常便宜一些但要多抓約1小時車程（<Link href="/narita-airport-access" className="text-blue-500 font-semibold hover:underline">成田進市區攻略</Link>）。
              搭紅眼班機到成田的話，記得先確認末班車時間。
            </p>
          </div>
        </section>

        {/* 行前準備 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-4">🎒 出發前一定要搞定的5件事</h2>
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
          <h2 className="text-lg font-black text-stone-800 mb-3">🧾 2026年11月起：日本退稅改成「離境退款」</h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以前在免稅店結帳時當場就不用付消費稅，但從 <strong>2026年11月1日</strong> 起改制：
              <strong>購買時照付含稅價</strong>，離境時經機場海關確認商品確實帶出境後，才退還消費稅。
            </p>
            <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
              <li>・同一天、同一家店合計 <strong>¥5,000（未稅）以上</strong>才適用免稅</li>
              <li>・消耗品原本的 <strong>50萬日圓上限取消</strong>，與一般物品不再分開計算</li>
              <li>・消耗品的<strong>特殊包裝規定取消</strong>，等於買完可以在日本當地拆開使用</li>
              <li>・購買日起 <strong>90天內</strong>要出境並完成海關手續</li>
            </ul>
            <p className="text-xs text-stone-400 mt-3">
              ※ 實際手續與適用範圍請以日本國稅廳及各店家公告為準。要買高價家電或化妝品前，建議先向店員確認清楚。
            </p>
          </div>
        </section>

        {/* 落地後 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-3">🍜 落地之後：吃什麼、去哪裡</h2>
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

        <RelatedArticles slug="taiwan-japan-guide" />
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
