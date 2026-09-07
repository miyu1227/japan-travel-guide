import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/haneda-airport-access";
const OG_IMAGE = "/haneda-airport-access/cover.png";

const KLOOK_LUGGAGE =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1314608&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F27664-hotel-luggage-delivery-service-tokyo-hotels-airport";
const KLOOK_ROYAL_PARK =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1314612&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Fhotels%2Fdetail%2F492661-the-royal-park-hotel-tokyo-haneda-airport-terminal-3%2F";
const KLOOK_MONDAY =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1314614&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Fhotels%2Fdetail%2F281392-hotel-monday-haneda-airport%2F";

export const metadata: Metadata = {
  title: "羽田機場到東京交通2026｜京急、單軌、巴士價錢與時間",
  description:
    "羽田機場到東京怎麼去？京急線¥330約15分到品川、單軌電車¥520約13分到濱松町、利木津巴士¥1,300到新宿、定額計程車¥6,900起。附首末班車時間、深夜抵達對策、各區域最佳路線。2026年9月更新。",
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
    title: "羽田機場到東京交通2026｜京急、單軌、巴士價錢與時間",
    description: "羽田機場到東京交通比較：京急¥330／單軌¥520／利木津巴士¥1,300／定額計程車¥6,900起。首末班車、深夜抵達、各區域路線一次看懂。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "羽田機場到東京交通攻略" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "羽田機場到東京交通2026｜京急、單軌、巴士價錢與時間",
    description: "羽田機場到東京：京急¥330／單軌¥520／巴士¥1,300／定額計程車¥6,900起。首末班車與深夜對策✈️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "羽田機場到東京交通2026｜京急、單軌、巴士價錢與時間",
  description: "羽田機場到東京交通比較：京急¥330約15分到品川、單軌¥520約13分到濱松町、利木津巴士¥1,300到新宿、定額計程車¥6,900起。附首末班車時間、深夜抵達對策與各區域最佳路線。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-09-07T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const faqItems = [
  {
    q: "羽田機場到東京車站要多久、多少錢？",
    a: "最快是東京單軌電車：羽田到濱松町約13分（¥520），轉JR山手線2站到東京站，全程約25〜30分、約¥700。搭京急到品川再轉JR也可以，約30分、約¥550。",
  },
  {
    q: "羽田機場到新宿怎麼去最方便？",
    a: "行李多就搭利木津巴士，直達新宿站西口與主要飯店，約35〜55分、¥1,300。趕時間就搭京急快特到品川（約15分）再轉JR山手線到新宿（約20分），全程約40分、約¥530。",
  },
  {
    q: "京急線和單軌電車，到底要搭哪一個？",
    a: "看飯店靠哪一邊。京急接品川，往新宿、澀谷、橫濱、淺草方便，票價¥330；單軌電車接濱松町，往東京站、新橋、有樂町方便，票價¥520。時間都在15分上下，用「哪一站轉車比較少」來選就好。",
  },
  {
    q: "深夜抵達羽田，還有電車可以搭嗎？",
    a: "京急往品川方向的末班車約0:05、單軌電車約0點前後、利木津巴士往新宿最晚約22:55。凌晨1點以後抵達基本上只剩計程車（22:00〜5:00加成約2〜3成）或在機場住一晚。",
  },
  {
    q: "從羽田可以直接去東京迪士尼嗎？",
    a: "有直達舞浜（東京迪士尼度假區）的利木津巴士，約40〜60分，拖行李時最輕鬆。搭電車則要在濱松町或品川轉乘，至少轉2次。",
  },
  {
    q: "進市區後還需要買地鐵周遊券嗎？",
    a: "接下來幾天主要靠地下鐵移動的話，Tokyo Subway Ticket通常划得來；但它不能搭JR、京急與單軌電車，機場往返這段要另外付。行程偏JR山手線的人就不用勉強買。",
  },
];


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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HanedaAirportAccessPage() {
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
          羽田機場到東京交通攻略 2026｜<br />京急、單軌電車、巴士、計程車的價錢與時間✈️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-07（票價為2026年9月時點）</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            羽田機場是<strong>離東京市區最近</strong>的國際機場：京急線<strong>約15分、¥330</strong>到品川，單軌電車<strong>約13分、¥520</strong>到濱松町，利木津巴士<strong>¥1,300</strong>直達新宿✈️<br />
            比成田便宜一半以上，也快很多。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>第一次從羽田入境、想快點到飯店（酒店）放行李</strong>的台灣・香港旅人。<strong>你會知道</strong>：每種交通方式的<strong>票價、所要時間、首末班車</strong>，住品川・新宿・淺草該搭哪一種，行李很多時怎麼辦，還有<strong>紅眼班機與清晨起飛</strong>時的羽田住宿選項。
          </p>
        </section>

        {/* 航廈と乗り場 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">先確認你在哪個航廈：國際線幾乎都是第3航廈</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            從台灣・香港飛羽田，<strong>絕大多數航班都停第3航廈（Terminal 3）</strong>。第1・第2航廈以日本國內線為主，只有少數國際線（如部分ANA航班）會用第2航廈。
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🚃 <strong>京急線</strong>：第3航廈站在<strong>地下1樓</strong>，出入境大廳搭電扶梯下去就到。第1・第2航廈共用一站，也在地下1樓。</li>
            <li>🚝 <strong>東京單軌電車</strong>：第3航廈站在<strong>3樓</strong>，跟出境大廳同層，走過連通道即到。</li>
            <li>🚌 <strong>利木津巴士</strong>：在各航廈<strong>1樓入境大廳外的巴士站</strong>，第3航廈是往外走就看得到的月台。</li>
            <li>🚕 <strong>計程車</strong>：同樣在1樓外，跟著「タクシー／Taxi」指標走。</li>
          </ul>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            各線車站都跟航廈直結，跟著天花板的指標走，<strong>5分內都到得了</strong>，不用擔心拖行李走很遠。
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
          <h2 className="text-base font-black text-stone-800 mb-3">羽田機場到東京 交通方式比較表（票價・時間・首末班）</h2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-xs text-stone-600 border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-amber-50">
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">交通方式</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">到哪裡</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">票價（大人）</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">所要時間</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">首班／末班</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">適合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-pink-600">京急線</td>
                  <td className="border border-stone-200 px-2 py-2">品川（直通淺草線）</td>
                  <td className="border border-stone-200 px-2 py-2">¥330（IC ¥327）</td>
                  <td className="border border-stone-200 px-2 py-2">快特約15分／急行約25分</td>
                  <td className="border border-stone-200 px-2 py-2">約5:23／約0:05</td>
                  <td className="border border-stone-200 px-2 py-2">品川・新宿・澀谷・橫濱・淺草</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-sky-600">東京單軌電車</td>
                  <td className="border border-stone-200 px-2 py-2">濱松町（轉JR山手線）</td>
                  <td className="border border-stone-200 px-2 py-2">¥520（IC ¥519）</td>
                  <td className="border border-stone-200 px-2 py-2">空港快速約13分／各停約20分</td>
                  <td className="border border-stone-200 px-2 py-2">約5:15／約0:00</td>
                  <td className="border border-stone-200 px-2 py-2">東京站・新橋・有樂町・上野</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-amber-600">利木津巴士</td>
                  <td className="border border-stone-200 px-2 py-2">新宿・池袋・銀座・台場・舞浜等</td>
                  <td className="border border-stone-200 px-2 py-2">約¥1,300（新宿）</td>
                  <td className="border border-stone-200 px-2 py-2">35〜55分（新宿）</td>
                  <td className="border border-stone-200 px-2 py-2">約7:05／約22:55（新宿線）</td>
                  <td className="border border-stone-200 px-2 py-2">行李多・家族・直達飯店</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-purple-600">定額計程車</td>
                  <td className="border border-stone-200 px-2 py-2">東京23區內飯店門口</td>
                  <td className="border border-stone-200 px-2 py-2">¥6,900〜8,400（依區域）＋高速費</td>
                  <td className="border border-stone-200 px-2 py-2">30〜50分</td>
                  <td className="border border-stone-200 px-2 py-2">24小時（22:00〜5:00加成）</td>
                  <td className="border border-stone-200 px-2 py-2">深夜抵達・3人以上・行李超多</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            ※ 票價為2026年9月時點、大人單程。首末班車以平日、往市區方向為準，會依星期與季節微調，出發前請再查一次官方時刻表。
          </p>
        </section>

        {/* 京急 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">① 京急線（Keikyu Line）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            京急電鐵直接連接<strong>羽田機場第1・第2・第3航廈</strong>，可直達<strong>品川</strong>，再透過都營淺草線直通到<strong>泉岳寺・新橋・淺草</strong>等地🚃 <strong>快特約15分到品川</strong>（急行約25分）、約35分到淺草，是羽田最便宜也最快的選擇。
          </p>
          <div className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 mb-3 text-xs text-stone-600 leading-relaxed space-y-1">
            <p>💴 <strong>票價</strong>：羽田→品川 ¥330（IC ¥327）、→淺草 約¥550、→橫濱 約¥400</p>
            <p>⏱ <strong>時間</strong>：品川 快特約15分／急行約25分・淺草 約35分・橫濱 約25分</p>
            <p>🕐 <strong>首末班</strong>：往品川方向 首班約5:23、末班約0:05（平日）</p>
            <p>🎫 <strong>怎麼買</strong>：Suica／PASMO 直接嗶進站最方便；買票的話用售票機選「品川」即可，有中文介面</p>
            <p>⚠️ <strong>注意</strong>：往橫濱和往品川是<strong>反方向</strong>，上車前看月台顯示的「品川・都営線方面」或「横浜方面」。快特・急行・普通都停品川，搭快特最快</p>
          </div>
          <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-pink-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・住品川、泉岳寺、新橋、淺草附近<br />
              ・想最快進入市區的人<br />
              ・行李不太多，方便轉乘的人
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚃 快特約15分到品川", "💴 ¥330 最便宜", "🚉 淺草線直通", "⚠️ 通勤時段擠"].map((t) => (
              <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 単軌電車 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">② 東京單軌電車（Tokyo Monorail）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            從羽田機場直達<strong>濱松町站</strong>的單軌電車🚝 從濱松町可以轉<strong>JR山手線</strong>到<strong>東京站（2站）、新橋（1站）、上野</strong>等地。<strong>空港快速約13分到濱松町</strong>，沿途可欣賞東京灣與跑道景色，第一次來東京很有感。
          </p>
          <div className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 mb-3 text-xs text-stone-600 leading-relaxed space-y-1">
            <p>💴 <strong>票價</strong>：羽田→濱松町 ¥520（IC ¥519）、再轉JR到東京站 ¥160，合計約¥680</p>
            <p>⏱ <strong>時間</strong>：濱松町 空港快速約13分／各站停約20分・東京站 全程約25〜30分</p>
            <p>🕐 <strong>首末班</strong>：首班約5:15、末班約0:00前後</p>
            <p>🎫 <strong>優惠票</strong>：週六日・假日有「單軌電車＆山手線內優惠票」，¥500 就能從羽田搭到山手線內任一站，比分開買便宜</p>
            <p>⚠️ <strong>注意</strong>：濱松町站轉 JR 要走一段連通道並上下樓梯，行李兩件以上會有點辛苦。有 JR PASS 的人單軌電車也可以用</p>
          </div>
          <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-sky-700 mb-1">✨ 推薦給</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              ・住東京站・濱松町・新橋・上野<br />
              ・想看東京灣景色的旅人<br />
              ・有 JR PASS 可使用的人
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["🚝 空港快速約13分", "💴 ¥520", "🔁 濱松町轉JR", "⚠️ 轉乘走道長"].map((t) => (
              <span key={t} className="text-xs bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        {/* 機場巴士 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">③ 機場巴士 / Limousine Bus</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            從羽田機場直達<strong>新宿、池袋、東京站、銀座、台場、舞浜（迪士尼）、橫濱</strong>等主要區域的高速巴士🚌 行李可放在巴士底部行李艙，無需轉乘，<strong>直接停在飯店門口或飯店附近</strong>。
          </p>
          <div className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 mb-3 text-xs text-stone-600 leading-relaxed space-y-1">
            <p>💴 <strong>票價</strong>：新宿 約¥1,300、東京站・銀座 約¥1,000、舞浜 約¥1,300（依路線不同）</p>
            <p>⏱ <strong>時間</strong>：新宿 35〜55分、東京站 約30〜45分、舞浜 約40〜60分（塞車會更久）</p>
            <p>🕐 <strong>首末班</strong>：新宿線 首班約7:05、末班約22:55。<strong>比電車早收班</strong>，晚班機要注意</p>
            <p>🎫 <strong>怎麼買</strong>：入境大廳的巴士櫃台或自動售票機，也可在官網／Klook 事先預約。假日與傍晚常客滿，建議先訂</p>
            <p>⚠️ <strong>注意</strong>：新宿線會停多家飯店（京王廣場、希爾頓、凱悅等），上車前確認你的飯店在不在停靠名單</p>
          </div>
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
            羽田機場到市區距離較近，<strong>計程車</strong>也是實用選擇🚕 東京23區有<strong>定額計程車（定額タクシー）</strong>制度：上車前跟司機說「定額」，到該區內任何地點都是固定價，不用怕繞路。<strong>包車</strong>則可事先預約專車，直接送到飯店門口。
          </p>
          <div className="overflow-x-auto -mx-5 px-5 mb-3">
            <table className="w-full text-xs text-stone-600 border-collapse min-w-[420px]">
              <thead>
                <tr className="bg-purple-50">
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">飯店所在區</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">定額（5:00〜22:00）</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">深夜（22:00〜5:00）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-stone-200 px-2 py-2">千代田區（東京站・秋葉原）</td><td className="border border-stone-200 px-2 py-2">¥6,900</td><td className="border border-stone-200 px-2 py-2">¥8,300</td></tr>
                <tr className="bg-stone-50/50"><td className="border border-stone-200 px-2 py-2">澀谷區（澀谷・惠比壽・原宿）</td><td className="border border-stone-200 px-2 py-2">¥7,800</td><td className="border border-stone-200 px-2 py-2">¥9,200</td></tr>
                <tr><td className="border border-stone-200 px-2 py-2">新宿區（新宿・神樂坂）</td><td className="border border-stone-200 px-2 py-2">¥8,300</td><td className="border border-stone-200 px-2 py-2">¥9,800</td></tr>
                <tr className="bg-stone-50/50"><td className="border border-stone-200 px-2 py-2">台東區（淺草・上野）</td><td className="border border-stone-200 px-2 py-2">¥8,400</td><td className="border border-stone-200 px-2 py-2">¥9,900</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mb-3">
            ※ 2026年3月改定後的價格，另加首都高速通行費（約¥1,000〜1,500）。<strong>港區、中央區、品川區、目黑區</strong>等離機場近的區<strong>不適用定額</strong>，直接跳表反而更便宜。3〜4人分攤的話，到新宿一人約¥2,500，跟巴士差不多。
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

        {/* ICカード・2029 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">一張 Suica 全部搭得到：入境後先做這件事</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            京急、單軌電車、JR、地下鐵、巴士都能用 <strong>Suica／PASMO</strong> 嗶卡付款，不用每次買票。iPhone 用戶可以直接在 Apple 錢包新增 Suica 並用信用卡儲值，<strong>還沒落地就能準備好</strong>；實體卡則在京急・單軌電車的售票機或 JR 綠色窗口買「Welcome Suica」。
          </p>
          <p className="text-xs text-stone-500 leading-relaxed">
            🚧 <strong>2029年新路線</strong>：JR「羽田機場 Access 線」預定 2029 年通車，屆時羽田到<strong>東京站約18分、新宿約23分</strong>不用轉車。在那之前，往東京站還是單軌電車＋山手線最快。
          </p>
        </section>

        {/* エリア別おすすめ */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">飯店區域別：羽田機場到各區最佳路線與費用</h2>
          <div className="space-y-3">
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 品川・泉岳寺・淺草</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>京急線</strong>最直接。品川 約15分・¥330，淺草 約35分・約¥550，不用轉車。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 東京站・濱松町・新橋・有樂町</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>東京單軌電車</strong>到濱松町（約13分・¥520）轉 JR 山手線，東京站全程約25〜30分・約¥680。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 新宿・澀谷・池袋</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ 行李多搭<strong>利木津巴士</strong>直達（新宿 35〜55分・約¥1,300）。趕時間搭京急快特到品川再轉 JR 山手線，新宿全程約40分・約¥530，澀谷約35分・約¥500。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 銀座・六本木・台場</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>利木津巴士</strong>有直達路線（銀座約¥1,000）。銀座・六本木在港區・中央區，計程車不適用定額但距離近，跳表約¥6,000〜7,000，3人以上可考慮。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 上野・秋葉原</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ 單軌電車到濱松町轉 JR 山手線（上野約30分），或京急直通淺草線到<strong>淺草橋・押上</strong>轉車。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 橫濱</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>京急線</strong>往橫濱方向直達，約25分・約¥400。注意跟往品川是反方向。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📍 舞浜（東京迪士尼）</p>
              <p className="text-xs text-stone-600 leading-relaxed">→ <strong>利木津巴士</strong>直達各迪士尼飯店，約40〜60分・約¥1,300。電車要轉2次以上，拖行李不建議。</p>
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
            <p>🐥 <strong>輕便行李＆住品川、新宿、澀谷、淺草</strong> → 京急線（¥330・15分到品川）</p>
            <p>🐥 <strong>住東京站、新橋、上野</strong> → 東京單軌電車（¥520・13分到濱松町）</p>
            <p>🐥 <strong>行李多、住新宿・池袋・銀座・迪士尼</strong> → 利木津巴士（約¥1,300）</p>
            <p>🐥 <strong>3人以上或深夜抵達</strong> → 定額計程車（¥6,900〜8,400＋高速費）</p>
            <p>🐥 <strong>想下飛機就觀光</strong> → 搭配行李配送服務</p>
            <p>🐥 <strong>0點後抵達・6點前起飛</strong> → 羽田機場周邊或航廈內前泊</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">羽田機場到東京 常見問題</h2>
          <div className="space-y-4">
            {faqItems.map((f) => (
              <div key={f.q}>
                <p className="text-sm font-bold text-stone-700 mb-1">❓ {f.q}</p>
                <p className="text-xs text-stone-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
            <p className="text-xs text-stone-500 leading-relaxed">
              相關文章：<Link href="/tokyo-disney-around" className="text-blue-600 underline underline-offset-2">東京迪士尼周邊玩法</Link>・<Link href="/tokyo-subway-ticket" className="text-blue-600 underline underline-offset-2">Tokyo Subway Ticket 怎麼買</Link>・<Link href="/narita-airport-access" className="text-blue-600 underline underline-offset-2">成田機場到東京交通</Link>
            </p>
          </div>
        </section>

        {/* まとめ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">小結</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            羽田機場到東京，<strong>京急 ¥330・單軌 ¥520・巴士 ¥1,300・定額計程車 ¥6,900 起</strong>，四種方式都在1小時內。「最適合的」會依<strong>飯店位置・行李・抵達時間・人數</strong>不同。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            出發前先想好<strong>「我住哪？行李多嗎？幾點到？」</strong>再對照本文比較表，就能避免抵達後手忙腳亂。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            另外，<strong>行李配送服務</strong>與<strong>羽田機場前泊</strong>也是讓行程更輕鬆的選項，出發前可以先確認✈️
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

        <RelatedArticles slug="haneda-airport-access" exclude={["/japan-esim", "/narita-airport-access", "/tokyo-subway-ticket"]} />

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
