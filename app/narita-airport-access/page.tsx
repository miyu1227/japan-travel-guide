import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const PAGE_URL = "https://www.japantrippicks.com/narita-airport-access";
const OG_IMAGE = "/narita-airport-access/cover.png";

const KLOOK_LUGGAGE =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1314572&k_site=https%3A%2F%2Fwww.klook.com%2Fja%2Factivity%2F27664-hotel-luggage-delivery-service-tokyo-hotels-airport";
const KLOOK_9H =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1314574&k_site=https%3A%2F%2Fwww.klook.com%2Fja%2Fhotels%2Fdetail%2F587377-9h-nine-hours-narita-airport%2F%3Fcheck_in%3D2026-07-24%26check_out%3D2026-07-25%26room_num%3D1%26adult_num%3D1%26child_num%3D0";

export const metadata: Metadata = {
  title: "成田機場到東京市區交通攻略｜Skyliner、巴士、JR怎麼選",
  description:
    "成田機場到東京市區怎麼走最順？Skyliner、Narita Express、機場巴士、JR普通電車、包車的所要時間與適合的人一次比較，另外整理行李配送、深夜抵達的前泊選項，以及上野・新宿・池袋等飯店區域該搭哪一種。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "成田機場到東京市區交通攻略｜Skyliner、巴士、JR怎麼選",
    description: "成田機場到東京交通方式比較。Skyliner・NEX・機場巴士・JR・包車・行李配送・前泊完整介紹。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "成田機場到東京交通攻略" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "成田機場到東京市區交通攻略｜Skyliner、巴士、JR怎麼選",
    description: "成田機場到東京市區交通完整指南！Skyliner・NEX・機場巴士・包車比較🚄",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "成田機場到東京市區交通攻略｜Skyliner、巴士、JR怎麼選",
  description: "成田機場到東京市區交通方式比較。Skyliner、Narita Express、機場巴士、JR、包車、行李配送與成田機場前泊整理。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-08-12T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "成田機場交通攻略", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/japan-esim", label: "📱 日本自由行 eSIM 使用指南", desc: "抵達日本就能上網的事前準備" },
  { href: "/tokyo-subway-ticket", label: "🚇 東京地鐵24/48/72小時乘車券｜Tokyo Subway Ticket", desc: "東京自由行交通指南・地下鐵周遊券完整解說" },
  { href: "/haneda-airport-access", label: "✈️ 羽田機場到東京市區交通攻略", desc: "回程或轉羽田進出時，先看這篇比較京急與單軌" },
];

export default function NaritaAirportAccessPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">成田機場交通攻略</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-sky-100 text-sky-700 border border-sky-300 text-xs font-semibold px-3 py-1 rounded-full">🚄 機場交通</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">🇯🇵 東京</span>
          <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-semibold px-3 py-1 rounded-full">🎒 出發前準備</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          成田機場到東京市區交通攻略｜<br />Skyliner、巴士、JR、行李配送怎麼選？🚄
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-12</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            來東京自由行，第一個遇到的難題之一就是<strong>「成田機場到市區怎麼最快又輕鬆？」</strong>🚄<br />
            成田機場離東京中心約60〜80公里，交通方式有很多種，每一種都有適合的人。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>第一次從成田入境、還沒決定要搭什麼</strong>的台灣・香港旅人。<strong>你會知道</strong>：Skyliner、Narita Express、機場巴士、JR普通電車、包車各自的所要時間與適合的人，飯店在上野・新宿・池袋・東京站時該選哪一種，還有<strong>行李很多</strong>與<strong>深夜／清晨班機</strong>時的解法（行李配送、成田前泊）。
          </p>
        </section>

        {/* 出發前確認 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">成田機場到東京市區前，先確認這些</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            成田機場到東京市區<strong>距離約60〜80公里</strong>，依交通方式不同，所要時間從<strong>約40分到2小時以上</strong>都有。出發前先確認以下幾點，選起來會比較順：
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🏨 <strong>飯店在哪個區域？</strong>（上野・新宿・池袋・東京站・澀谷等）</li>
            <li>🧳 <strong>行李量</strong>有多少？是否需要拉行李轉乘？</li>
            <li>🕐 <strong>抵達時間</strong>是白天還是深夜？</li>
            <li>👫 <strong>同行人數</strong>（家庭・情侶・一個人）</li>
            <li>💰 <strong>預算</strong>與想要的舒適度</li>
          </ul>
        </section>

        {/* 比較表 */}
        <section id="compare" className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8 scroll-mt-20">
          <h2 className="text-base font-black text-stone-800 mb-3">交通手段早見表</h2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-xs text-stone-600 border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-amber-50">
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">交通方式</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">推薦對象</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">適合區域</th>
                  <th className="border border-stone-200 px-2 py-2 text-center font-bold text-stone-700">行李</th>
                  <th className="border border-stone-200 px-2 py-2 text-center font-bold text-stone-700">轉乘</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">注意點</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-pink-600">Skyliner</td>
                  <td className="border border-stone-200 px-2 py-2">想最快進市區</td>
                  <td className="border border-stone-200 px-2 py-2">上野・日暮里</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">少</td>
                  <td className="border border-stone-200 px-2 py-2">非上野・日暮里需轉車</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-sky-600">Narita Express</td>
                  <td className="border border-stone-200 px-2 py-2">JR沿線飯店</td>
                  <td className="border border-stone-200 px-2 py-2">東京・新宿・澀谷・池袋</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">少</td>
                  <td className="border border-stone-200 px-2 py-2">班次間距較長</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-amber-600">機場巴士</td>
                  <td className="border border-stone-200 px-2 py-2">想直達飯店附近</td>
                  <td className="border border-stone-200 px-2 py-2">新宿・池袋・主要飯店</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕ 無</td>
                  <td className="border border-stone-200 px-2 py-2">塞車可能延誤</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-green-600">JR普通電車</td>
                  <td className="border border-stone-200 px-2 py-2">想省錢的旅人</td>
                  <td className="border border-stone-200 px-2 py-2">沿途各JR站</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">△</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">多</td>
                  <td className="border border-stone-200 px-2 py-2">所要時間長＆需轉乘</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-purple-600">包車</td>
                  <td className="border border-stone-200 px-2 py-2">家庭・深夜抵達</td>
                  <td className="border border-stone-200 px-2 py-2">任何地點</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕⭕</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕ 無</td>
                  <td className="border border-stone-200 px-2 py-2">價格較高</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            ※ 價格、所要時間、路線會依時期不同而變動。出發前請以各官方網站／預約頁面為準。
          </p>
        </section>

        {/* Skyliner */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">① Keisei Skyliner</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            京成電鐵推出的<strong>機場特急列車</strong>🚄 是從成田機場到<strong>日暮里・上野</strong>的最快選項之一，約36〜40分鐘抵達日暮里。班次穩定、不太塞車，是<strong>住上野・淺草・日暮里</strong>附近的旅客的首選之一。
          </p>
          <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-pink-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・住上野、淺草、日暮里附近的旅客<br />
              ・想最快進入市區的人<br />
              ・想避開轉乘的人
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚄 約36〜40分", "🎫 對號座", "🧳 行李架", "🚉 上野・日暮里"].map((t) => (
              <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* Narita Express */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">② Narita Express（N&apos;EX）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            JR東日本的<strong>機場特急列車</strong>🚆 從成田機場直達<strong>東京・品川・新宿・澀谷・池袋・橫濱</strong>等主要車站，所要時間約60〜90分。優點是直接連接 JR 山手線沿線，<strong>住新宿・澀谷・池袋</strong>的旅客可以一車到達。
          </p>
          <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-sky-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・住東京、新宿、澀谷、池袋、品川附近<br />
              ・行李多、不想轉車<br />
              ・有 JR PASS 可使用的旅人
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚆 約60〜90分", "🎫 對號座", "🌐 全車Wi-Fi", "🚉 主要JR站直達"].map((t) => (
              <span key={t} className="text-xs bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 機場巴士 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">③ 機場巴士 / Limousine Bus</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            從成田機場直達<strong>主要飯店或車站</strong>的高速巴士🚌 包含 Airport Limousine Bus、京成バス、Tokyo Shuttle 等多家公司。最大魅力是<strong>「無需轉乘、直接到飯店附近」</strong>，行李可放在巴士底部行李艙，特別輕鬆。
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・住新宿、池袋、東京站、台場等飯店<br />
              ・行李很多、不想拉著轉車的旅人<br />
              ・家庭、長輩同行
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚌 約80〜120分", "🧳 行李艙寬敞", "🏨 直達飯店附近", "⚠️ 塞車要留時間"].map((t) => (
              <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 普通電車 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">④ 普通電車（京成本線・JR總武線）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            <strong>京成本線</strong>或<strong>JR總武線快速</strong>等普通電車，是<strong>價格最親民</strong>的選項🚃 不過所要時間較長（約75〜100分以上）、可能需要<strong>轉乘1〜2次</strong>，行李多時會有點吃力。
          </p>
          <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・行李不多、想省錢的旅人<br />
              ・對日本電車不陌生<br />
              ・時間充裕的人
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚃 約75〜100分", "💰 較親民", "🔁 可能需要轉乘", "🧳 行李少較適合"].map((t) => (
              <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 包車 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">⑤ 包車 / Private Transfer</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            事先<strong>預約專車</strong>從成田機場到飯店的方式🚙 雖然價格高於電車與巴士，但<strong>不用轉乘、不用排隊</strong>，司機會直接協助行李。特別適合<strong>家庭、深夜抵達、不熟悉日文</strong>的旅人。
          </p>
          <div className="bg-purple-50 border border-purple-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-purple-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・家庭旅遊、3人以上同行<br />
              ・深夜或清早抵達<br />
              ・行李超多<br />
              ・帶長輩或小孩
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚙 門對門直送", "👨‍👩‍👧 家族推薦", "🌙 深夜也可", "💴 預算需考慮"].map((t) => (
              <span key={t} className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 行李配送 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">⑥ 行李很多時：行李配送服務</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            想<strong>下飛機就直接觀光</strong>的話，可以考慮<strong>「成田機場 ↔ 東京飯店」之間的行李配送服務</strong>🧳 將大行李託運給配送公司，自己只帶輕便手提行李移動，能大幅減輕轉乘的負擔。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            特別適合：
          </p>
          <ul className="space-y-1.5 text-sm text-stone-600 mb-4">
            <li>🏃 抵達當天想直接去淺草・銀座等景點</li>
            <li>🧳 行李超過2件、轉乘很辛苦</li>
            <li>👵 帶長輩或小孩同行</li>
            <li>🌧️ 天氣不佳、不想拉重行李</li>
          </ul>

          {/* Klookバナー 1（行李配送）*/}
          <a
            href={KLOOK_LUGGAGE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <div className="relative aspect-[2/1] bg-stone-100">
              <Image
                src="/narita-airport-access/luggage.png"
                alt="東京機場行李配送服務"
                fill
                sizes="(max-width: 640px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-bold text-pink-700 mb-1">🧳 行李配送方案（Klook）</p>
              <p className="text-sm font-bold text-stone-800 leading-tight mb-2">行李多的話，可以先確認行李配送服務</p>
              <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 px-5 py-2 rounded-full shadow-sm">
                查看東京機場行李配送服務 →
              </span>
            </div>
          </a>
          <p className="text-[10px] text-stone-400 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
        </section>

        {/* 成田前泊 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">⑦ 早班機・深夜便：成田機場前泊</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            如果<strong>清早班機</strong>需要趕飛機、或<strong>深夜抵達</strong>來不及搭電車回東京，可以考慮在<strong>成田機場附近住一晚</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            特別推薦的選項之一是<strong>「nine hours（ナインアワーズ）成田空港」</strong>——位於成田機場第2航廈內，是 24 小時膠囊旅館，可以短時間休息、隔天直接前往登機口。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            適合：
          </p>
          <ul className="space-y-1.5 text-sm text-stone-600 mb-4">
            <li>🌙 深夜抵達、來不及搭末班車</li>
            <li>🌅 清早班機、不想搭計程車趕</li>
            <li>💤 想短時間補眠，不用拉到市區飯店</li>
          </ul>

          {/* Klookバナー 2（9h 成田）*/}
          <a
            href={KLOOK_9H}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-sky-100 via-white to-pink-100 border-2 border-sky-200/80 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <div className="relative aspect-[2/1] bg-stone-100">
              <Image
                src="/narita-airport-access/9h-narita.png"
                alt="nine hours 成田機場住宿"
                fill
                sizes="(max-width: 640px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-bold text-sky-700 mb-1">💤 成田機場前泊（Klook）</p>
              <p className="text-sm font-bold text-stone-800 leading-tight mb-2">早班機可以先確認成田機場附近住宿</p>
              <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-sky-400 via-blue-400 to-pink-400 px-5 py-2 rounded-full shadow-sm">
                查看 nine hours 成田機場住宿 →
              </span>
            </div>
          </a>
          <p className="text-[10px] text-stone-400 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
        </section>

        {/* エリア別おすすめ */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">飯店區域別推薦交通方式</h2>
          <div className="space-y-3">
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 上野・淺草・日暮里</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>Skyliner</strong>最直接。約36〜40分就能進入市區。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 東京站・品川</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>Narita Express</strong>可直達。也可考慮機場巴士到東京站附近飯店。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 新宿・澀谷・池袋</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>Narita Express</strong>或<strong>機場巴士</strong>都方便。行李多→巴士；想快→NEX。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 銀座・六本木・台場</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>機場巴士</strong>多有直達飯店路線。或包車到飯店門口。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 其他區域</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ 先到 Skyliner 終點上野，或 NEX 到主要站後再轉乘。或直接<strong>包車</strong>。</p>
            </div>
          </div>
        </section>

        {/* 第一次おすすめ */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">初次東京自由行該怎麼選？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            如果是第一次來東京、又不太熟悉日本電車，可以參考以下思考方式：
          </p>
          <div className="space-y-2 text-sm text-stone-600">
            <p>🐥 <strong>輕便行李＆住上野附近</strong> → Skyliner</p>
            <p>🐥 <strong>住新宿・澀谷・池袋</strong> → Narita Express 或機場巴士</p>
            <p>🐥 <strong>行李超多、家庭旅遊</strong> → 機場巴士或包車</p>
            <p>🐥 <strong>想下飛機就觀光</strong> → 考慮搭配行李配送服務</p>
            <p>🐥 <strong>清早班機・深夜抵達</strong> → 成田機場前泊</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">成田機場交通 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ Skyliner 需要事先訂位嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Skyliner 是<strong>全車對號座</strong>，需要先取得座位。可以在機場的售票櫃檯或售票機當場買，網路預訂也可以。平常時段當天買通常沒問題，不過<strong>連假與過年期間</strong>比較容易客滿，行程固定的話先訂會比較安心。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 深夜才到成田，還有車進市區嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                班機延誤或紅眼班機抵達時，<strong>電車可能已經沒有末班車</strong>，深夜巴士的班次也很有限。這種情況下，比較實際的做法是<strong>在成田機場周邊前泊一晚</strong>，隔天早上再輕鬆進市區。詳細請看上面「⑦ 成田機場前泊」的部分。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 可以從成田直接殺去東京迪士尼嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                可以，機場巴士有直接開往舞浜地區飯店的路線，不用拖著行李換車。想先了解舞浜周邊怎麼玩，可以參考
                <Link href="/tokyo-disney-around" className="text-blue-600 underline underline-offset-2">東京迪士尼周邊玩法</Link>。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 有 Suica／PASMO 就不用買其他票券了嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                機場到市區這一段用 IC 卡就能搭（Skyliner 等對號座另外需要特急券）。<strong>進市區之後</strong>如果每天都會搭好幾趟地下鐵，再看看
                <Link href="/tokyo-subway-ticket" className="text-blue-600 underline underline-offset-2">Tokyo Subway Ticket</Link> 划不划算。要注意它只能搭東京メトロ與都營地下鐵，<strong>JR 山手線不能用</strong>。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 行李配送當天就會送到飯店嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                要看<strong>寄件時間與飯店位置</strong>，並不是每一件都能當天送達，有些情況會是隔天。想下飛機直接去觀光的話，建議把<strong>當晚要用的東西（換洗衣物、藥品、充電線）先拿出來</strong>隨身帶著，其餘再交給配送。
              </p>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">小結</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            成田機場到東京市區<strong>「最好的交通方式」並不是只有一種</strong>，會依<strong>飯店位置・行李・抵達時間・人數</strong>不同。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            出發前先想好<strong>「我住哪？行李多嗎？幾點到？」</strong>，再對照本文的早見表選擇——就能避免抵達日本後手忙腳亂。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            另外，<strong>行李配送服務</strong>與<strong>成田機場前泊</strong>也是讓行程更輕鬆的選項，出發前先確認會比較安心✈️
          </p>
        </section>

        <AuthorCard />
        <PrepBanner />

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「下飛機那一刻先有計畫，就能順順地進入東京旅程🚄」</p>
            </div>
          </div>
        </div>

        {/* アフィリエイト表記 */}
        <section className="bg-stone-50 border border-stone-200 rounded-2xl p-4 mb-10">
          <p className="text-xs text-stone-500 leading-relaxed">
            📎 本網站部分連結包含聯盟行銷連結。若您透過連結預訂或購買，我們可能會獲得佣金，讀者不會因此支付額外費用。感謝您的支持，我們會繼續分享有用的日本旅遊資訊。
          </p>
        </section>

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
