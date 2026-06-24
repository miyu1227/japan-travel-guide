import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";

const PAGE_URL = "https://www.japantrippicks.com/haneda-airport-access";
const OG_IMAGE = "/haneda-airport-access/cover.png";

const KLOOK_LUGGAGE =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1314608&k_site=https%3A%2F%2Fwww.klook.com%2Fja%2Factivity%2F27664-hotel-luggage-delivery-service-tokyo-hotels-airport";
const KLOOK_ROYAL_PARK =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1314612&k_site=https%3A%2F%2Fwww.klook.com%2Fja%2Fhotels%2Fdetail%2F492661-the-royal-park-hotel-tokyo-haneda-airport-terminal-3%2F%3Fcheck_in%3D2026-07-23%26check_out%3D2026-07-24%26room_num%3D1%26adult_num%3D1%26child_num%3D0";
const KLOOK_MONDAY =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1314614&k_site=https%3A%2F%2Fwww.klook.com%2Fja%2Fhotels%2Fdetail%2F281392-hotel-monday-haneda-airport%2F%3Fcheck_in%3D2026-07-26%26check_out%3D2026-07-27%26room_num%3D1%26adult_num%3D1%26child_num%3D0";

export const metadata: Metadata = {
  title: "羽田機場到東京市區交通攻略｜京急、單軌電車、巴士、計程車怎麼選？",
  description:
    "羽田機場到東京市區的交通方式整理！京急線、東京單軌電車、機場巴士、計程車・包車比較，加上行李配送與羽田機場前泊選項。初次東京自由行也能輕鬆選擇最適合的方式。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "羽田機場到東京市區交通攻略｜京急、單軌電車、巴士、計程車怎麼選？",
    description: "羽田機場到東京交通方式比較。京急・單軌電車・機場巴士・計程車・包車・行李配送・前泊完整介紹。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "羽田機場到東京交通攻略" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "羽田機場到東京市區交通攻略｜京急、單軌電車、巴士、計程車怎麼選？",
    description: "羽田機場到東京市區交通完整指南！京急・單軌・機場巴士・計程車比較✈️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "羽田機場到東京市區交通攻略｜京急、單軌電車、巴士、計程車怎麼選？",
  description: "羽田機場到東京市區交通方式比較。京急線、東京單軌電車、機場巴士、計程車、包車、行李配送與羽田機場前泊整理。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Organization", name: "Japan Trip Picks" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "羽田機場交通攻略", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/narita-airport-access", label: "🚄 成田機場到東京市區交通攻略", desc: "Skyliner・NEX・機場巴士・包車・行李配送・前泊比較" },
  { href: "/japan-esim", label: "📱 日本自由行 eSIM 使用指南", desc: "抵達日本就能上網的事前準備" },
  { href: "/tokyo-subway-ticket", label: "🚇 東京地鐵24/48/72小時乘車券｜Tokyo Subway Ticket", desc: "東京自由行交通指南・地下鐵周遊券完整解說" },
];

export default function HanedaAirportAccessPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">羽田機場交通攻略</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-sky-100 text-sky-700 border border-sky-300 text-xs font-semibold px-3 py-1 rounded-full">✈️ 機場交通</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">🇯🇵 東京</span>
          <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-semibold px-3 py-1 rounded-full">🎒 出發前準備</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          羽田機場到東京市區交通攻略｜<br />京急、單軌電車、巴士、計程車怎麼選？✈️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            羽田機場是<strong>距離東京市區較近</strong>的國際空港，從機場到市中心約30〜45分就能抵達✈️<br />
            交通方式有<strong>京急線、東京單軌電車、機場巴士、計程車</strong>等多種選擇。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            本篇整理各交通方式的特色，加上<strong>行李配送服務</strong>與<strong>羽田機場前泊</strong>選項，讓第一次來東京自由行也能輕鬆選擇。
          </p>
        </section>

        {/* 出發前確認 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">羽田機場到東京市區前，先確認這些</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            雖然羽田機場離市區近，但根據<strong>飯店位置、行李量、抵達時間</strong>不同，最適合的交通方式也會不一樣：
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🏨 <strong>飯店在哪個區域？</strong>（品川・新宿・銀座・東京站・澀谷等）</li>
            <li>🧳 <strong>行李量</strong>有多少？是否需要拉行李轉乘？</li>
            <li>🕐 <strong>抵達時間</strong>是白天還是深夜／清早？</li>
            <li>👫 <strong>同行人數</strong>（一個人・情侶・家族）</li>
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
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-pink-600">京急線</td>
                  <td className="border border-stone-200 px-2 py-2">想直達品川・淺草線沿線</td>
                  <td className="border border-stone-200 px-2 py-2">品川・泉岳寺・淺草</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">少</td>
                  <td className="border border-stone-200 px-2 py-2">通勤時段較擁擠</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-sky-600">東京單軌電車</td>
                  <td className="border border-stone-200 px-2 py-2">JR山手線沿線</td>
                  <td className="border border-stone-200 px-2 py-2">浜松町・東京站方面</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">需轉JR</td>
                  <td className="border border-stone-200 px-2 py-2">浜松町轉乘走道有距離</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-amber-600">機場巴士</td>
                  <td className="border border-stone-200 px-2 py-2">想直達飯店附近</td>
                  <td className="border border-stone-200 px-2 py-2">新宿・池袋・銀座・台場等</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕ 無</td>
                  <td className="border border-stone-200 px-2 py-2">塞車可能延誤</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-purple-600">計程車・包車</td>
                  <td className="border border-stone-200 px-2 py-2">家族・深夜抵達</td>
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

        {/* 京急 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">① 京急線（Keikyu Line）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            京急電鐵直接連接<strong>羽田機場第1・第2・第3航廈</strong>，可直達<strong>品川</strong>，再透過都營淺草線直通到<strong>泉岳寺・新橋・淺草</strong>等地🚃 約14分到品川、約30分到淺草，速度快又方便。
          </p>
          <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-pink-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・住品川、泉岳寺、新橋、淺草附近<br />
              ・想最快進入市區的人<br />
              ・行李不太多，方便轉乘的人
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚃 約14分到品川", "💴 票價親民", "🚉 淺草線直通", "⚠️ 通勤時段擠"].map((t) => (
              <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 単軌電車 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">② 東京單軌電車（Tokyo Monorail）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            從羽田機場直達<strong>浜松町站</strong>的單軌電車🚝 從浜松町可以轉<strong>JR山手線</strong>到<strong>東京站、新宿、澀谷</strong>等地。約13〜18分到浜松町，沿途可欣賞東京灣景色。
          </p>
          <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-sky-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・住東京站・浜松町・JR沿線<br />
              ・想看東京灣景色的旅人<br />
              ・有 JR PASS 可使用的人
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚝 約13〜18分", "🌊 看東京灣", "🔁 浜松町轉JR", "⚠️ 浜松町轉乘走道長"].map((t) => (
              <span key={t} className="text-xs bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 機場巴士 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">③ 機場巴士 / Limousine Bus</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            從羽田機場直達<strong>新宿、池袋、東京站、銀座、台場、橫濱</strong>等主要區域的高速巴士🚌 行李可放在巴士底部行李艙，無需轉乘，<strong>直接到飯店附近</strong>。
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・住新宿、池袋、銀座、台場、橫濱<br />
              ・行李很多、不想拉著轉車的人<br />
              ・家族、長輩同行
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚌 直達飯店附近", "🧳 行李艙寬敞", "👨‍👩‍👧 家族友善", "⚠️ 塞車要留時間"].map((t) => (
              <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 計程車・包車 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">④ 計程車・包車 / Taxi & Private Transfer</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            羽田機場到市區距離較近，<strong>計程車</strong>也是實用選擇🚕 部分區域有<strong>定額計程車</strong>服務（成田比羽田更常見，但羽田也有部分區間）。<strong>包車</strong>則可事先預約專車，直接送到飯店門口。
          </p>
          <div className="bg-purple-50 border border-purple-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-purple-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・家族旅遊、3人以上同行<br />
              ・深夜或清早抵達<br />
              ・行李超多<br />
              ・帶長輩或小孩
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚕 門對門", "👨‍👩‍👧 家族推薦", "🌙 深夜也可", "💴 預算需考慮"].map((t) => (
              <span key={t} className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 行李配送 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">⑤ 行李多的人：可以考慮行李配送服務</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            想<strong>下飛機就直接觀光</strong>的話，可以考慮<strong>「羽田機場 ↔ 東京飯店」之間的行李配送服務</strong>🧳 將大行李託運給配送公司，自己只帶輕便手提行李移動，能大幅減輕轉乘的負擔。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            特別適合：
          </p>
          <ul className="space-y-1.5 text-sm text-stone-600 mb-4">
            <li>🏃 抵達當天想直接去澀谷・銀座等景點</li>
            <li>🧳 行李超過2件、轉乘很辛苦</li>
            <li>👵 帶長輩或小孩同行</li>
            <li>🌧️ 天氣不佳、不想拉重行李</li>
          </ul>

          {/* Klookバナー：行李配送 */}
          <a
            href={KLOOK_LUGGAGE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <div className="relative aspect-[2/1] bg-stone-100">
              <Image
                src="/haneda-airport-access/luggage.png"
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

        {/* 前泊 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">⑥ 早班機・深夜抵達：可以考慮羽田機場住宿</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            如果<strong>清早班機</strong>需要趕飛機、或<strong>深夜抵達</strong>來不及搭電車進市區，可以考慮在<strong>羽田機場周邊或航廈內住一晚</strong>，隔天行程會更輕鬆。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            適合：
          </p>
          <ul className="space-y-1.5 text-sm text-stone-600 mb-6">
            <li>🌙 深夜抵達、來不及搭末班車</li>
            <li>🌅 清早班機、不想趕計程車</li>
            <li>💤 想短時間補眠，不用拉到市區飯店</li>
          </ul>

          {/* Klookバナー：Royal Park */}
          <a
            href={KLOOK_ROYAL_PARK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-sky-100 via-white to-pink-100 border-2 border-sky-200/80 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all mb-4"
          >
            <p className="text-xs font-bold text-sky-700 mb-1">🏨 第3航廈內住宿（Klook）</p>
            <p className="text-sm font-bold text-stone-800 leading-tight mb-1">The Royal Park Hotel Tokyo Haneda Airport Terminal 3</p>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              位於<strong>羽田機場第3航廈內</strong>的飯店。走出房間直接到出境大廳，清早班機・深夜抵達特別方便。
            </p>
            <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-sky-400 via-blue-400 to-pink-400 px-5 py-2 rounded-full shadow-sm">
              查看羽田機場第3航廈住宿 →
            </span>
          </a>

          {/* もう一つの選択肢：hotel MONday */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
            <p className="text-xs font-bold text-stone-500 mb-2">另一個羽田機場周邊住宿選項</p>
            <a
              href={KLOOK_MONDAY}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-stone-100">
                  <Image
                    src="/haneda-airport-access/monday.png"
                    alt="hotel MONday 羽田機場"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-stone-800 leading-tight mb-0.5">hotel MONday 羽田空港</p>
                  <p className="text-xs text-stone-600 leading-relaxed">機場周邊的另一個住宿選擇，可比較看看。</p>
                  <span className="inline-block text-xs font-semibold text-blue-600 mt-1">查看 hotel MONday 羽田機場 →</span>
                </div>
              </div>
            </a>
          </div>
          <p className="text-[10px] text-stone-400 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
        </section>

        {/* エリア別おすすめ */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">飯店區域別推薦交通方式</h2>
          <div className="space-y-3">
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 品川・泉岳寺・淺草</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>京急線</strong>最直接。約14分到品川，淺草線直通淺草。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 浜松町・東京站・有樂町</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>東京單軌電車</strong>到浜松町轉JR山手線。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 新宿・澀谷・池袋</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>機場巴士</strong>直達飯店附近最方便。或京急→品川→JR轉乘。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 銀座・六本木・台場</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>機場巴士</strong>多有直達路線。或計程車到飯店門口。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 橫濱</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>機場巴士</strong>或<strong>京急線</strong>直達橫濱方向。</p>
            </div>
          </div>
        </section>

        {/* 初めて */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">初次東京自由行該怎麼選？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            第一次來東京、又不熟悉日本電車的話，可以參考以下思考方式：
          </p>
          <div className="space-y-2 text-sm text-stone-600">
            <p>🐥 <strong>輕便行李＆住品川或淺草線沿線</strong> → 京急線</p>
            <p>🐥 <strong>住浜松町或東京站</strong> → 東京單軌電車</p>
            <p>🐥 <strong>住新宿・池袋・銀座等</strong> → 機場巴士</p>
            <p>🐥 <strong>家族同行、行李多</strong> → 機場巴士或計程車</p>
            <p>🐥 <strong>想下飛機就觀光</strong> → 搭配行李配送服務</p>
            <p>🐥 <strong>清早班機・深夜抵達</strong> → 羽田機場周邊或航廈內前泊</p>
          </div>
        </section>

        {/* まとめ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">小結</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            羽田機場雖然離東京市區不遠，但「最適合的交通方式」會依<strong>飯店位置・行李・抵達時間・人數</strong>不同。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            出發前先想好<strong>「我住哪？行李多嗎？幾點到？」</strong>再對照本文比較表，就能避免抵達後手忙腳亂。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            另外，<strong>行李配送服務</strong>與<strong>羽田機場前泊</strong>也是讓行程更輕鬆的選項，出發前可以先確認✈️
          </p>
        </section>

        <PrepBanner />

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「羽田離市區近，但選對交通方式可以讓行程更順✈️」</p>
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
