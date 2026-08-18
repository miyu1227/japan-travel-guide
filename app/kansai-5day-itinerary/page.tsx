import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/kansai-5day-itinerary";
const OG_IMAGE = "/kobe-herb-garden/cover.jpg";

export const metadata: Metadata = {
  title: "關西5天4夜行程｜大阪・神戶完整安排",
  description:
    "大阪進出的關西5天4夜：Day1梅田在地美食、Day2肥後橋拉麵與40樓buffet、Day3神戶北野與神戶牛、Day4六甲山與有馬溫泉、Day5夙川西宮。附多留一天的選項。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "關西5天4夜行程｜大阪・神戶完整安排",
    description:
      "大阪梅田到神戶三宮只要約30分。美食・溫泉・夜景一次排進5天4夜的關西行程範例🏯",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "關西5天4夜行程推薦" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "關西5天4夜行程｜大阪・神戶完整安排",
    description: "大阪＋神戶為主軸的5天4夜。美食・溫泉・夜景一次排完🏯",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "關西5天4夜行程｜大阪・神戶完整安排",
  description:
    "大阪進出的關西自由行5天4夜行程範例。大阪的在地美食、神戶的北野與神戶牛、六甲山與有馬溫泉，以及多留一天的選項，全部是實際造訪過的地點。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-08-18T00:00:00+09:00",
  dateModified: "2026-08-18T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "關西5天4夜行程", item: PAGE_URL },
  ],
};

type Stop = { time: string; title: string; body: string; href?: string; linkLabel?: string };
type Day = {
  n: number;
  label: string;
  theme: string;
  area: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  stops: Stop[];
  tip: string;
};

const days: Day[] = [
  {
    n: 1,
    label: "Day 1",
    theme: "抵達・大阪在地晚餐",
    area: "關西機場 → 梅田・福島",
    summary:
      "關西機場進市區有南海電鐵（往難波）、JR HARUKA（往天王寺・新大阪）、利木津巴士三種，看飯店在哪一區決定就好，大致都是40〜60分。第一天不排景點。",
    image: "/osaka-gourmet/billie-1.jpg",
    imageAlt: "大阪福島的人氣居酒屋",
    stops: [
      {
        time: "落地前",
        title: "網路：eSIM 先設定好",
        body:
          "關西機場的免費Wi-Fi不是每個角落都穩，出發前把eSIM設定好，落地開機就能查電車。",
        href: "/japan-esim",
        linkLabel: "日本 eSIM 使用指南",
      },
      {
        time: "19:00",
        title: "梅田・福島的在地店",
        body:
          "不想只吃道頓堀的觀光美食的話，第一晚就往福島走。精緻鐵板燒「鉄板屋な。」與話題居酒屋「酒場ビリー」，兩間可以排進同一個晚上。",
        href: "/osaka-gourmet",
        linkLabel: "大阪美食推薦",
      },
    ],
    tip: "飯店訂在梅田或難波。之後三天都要往神戶跑，梅田（阪急・JR都在）會更順。",
  },
  {
    n: 2,
    label: "Day 2",
    theme: "大阪市區：拉麵與40樓夜景",
    area: "肥後橋・中之島",
    summary:
      "第二天不用跑遠。中午吃濃厚魚介沾麵，晚上上40樓吃景觀buffet——兩間都在肥後橋，走路就到。",
    image: "/conrad-osaka/atmos-1.jpg",
    imageAlt: "康萊德大阪40樓的景觀餐廳",
    stops: [
      {
        time: "12:00",
        title: "肥後橋：つじ田的濃厚魚介沾麵",
        body:
          "大阪人氣沾麵店。吃到一半加檸檬與黑七味變化風味，那篇有寫吃法教學。",
        href: "/kansai-ramen",
        linkLabel: "關西拉麵推薦",
      },
      {
        time: "14:00",
        title: "中之島散步（自由安排）",
        body:
          "肥後橋一帶是大阪的辦公街，河岸走起來很舒服。想去道頓堀・心齋橋逛街的話，從這裡搭地鐵也只要幾站。",
      },
      {
        time: "18:00",
        title: "康萊德大阪 40樓景觀buffet",
        body:
          "地上200公尺、挑高10.5公尺的落地窗配義式自助餐。肥後橋站直結，天黑前進場可以同時看到白天與夜景。需要預約，穿著也有建議。",
        href: "/conrad-osaka",
        linkLabel: "大阪飯店自助餐推薦",
      },
    ],
    tip: "buffet是這趟行程裡最貴的一餐。想省的話改成Day3的神戶牛午餐二選一。",
  },
  {
    n: 3,
    label: "Day 3",
    theme: "神戶：北野異人館・咖啡・神戶牛",
    area: "新神戶 → 北野 → 三宮",
    summary:
      "梅田到三宮只要約30分，所以神戶不用換飯店，當天來回就夠。上午山上、下午咖啡、晚上神戶牛。",
    image: "/kobe-herb-garden/cover.jpg",
    imageAlt: "神戶布引香草園的纜車與花海",
    stops: [
      {
        time: "10:00",
        title: "布引香草園：纜車空中散步",
        body:
          "新神戶站直達，搭纜車上標高400m的山頂。四季花海與神戶港的視野，是神戶最好拍的地方之一。",
        href: "/kobe-herb-garden",
        linkLabel: "神戶布引香草園推薦",
      },
      {
        time: "14:00",
        title: "北野・三宮的咖啡廳",
        body:
          "教堂改建的老牌麵包店、北野異人館的咖啡、熊熊主題的麵包吃到飽、義大利巧克力老店。4間都在散步範圍內，挑2間就很滿足。",
        href: "/kobe-cafe",
        linkLabel: "神戶咖啡推薦4選",
      },
      {
        time: "18:30",
        title: "三宮：神戶牛鐵板燒",
        body:
          "A5等級的神戶牛在主廚眼前現煎。午餐時段比晚餐好入手，想省預算的話把這裡改成中午、Day2的buffet拿掉。",
        href: "/steak-zen",
        linkLabel: "神戶牛推薦",
      },
    ],
    tip: "神戶牛的名店幾乎都要訂位。出發前先訂，時間就不會被卡住。",
  },
  {
    n: 4,
    label: "Day 4",
    theme: "六甲山與有馬溫泉",
    area: "御影 → 六甲山 → 有馬",
    summary:
      "關西行程裡最有「離開城市」感的一天。登六甲山，下山搭纜車直接到有馬溫泉泡湯。",
    image: "/rokko-arima/rokko-1.jpg",
    imageAlt: "六甲山的展望",
    stops: [
      {
        time: "09:00",
        title: "六甲山健行",
        body:
          "從御影出發登頂。不想走路的話也有纜車與巴士可以上山，那篇有整理路線。",
        href: "/rokko-arima",
        linkLabel: "六甲山＆有馬溫泉一日遊",
      },
      {
        time: "14:00",
        title: "有馬溫泉泡湯",
        body:
          "六甲山頂搭纜車就到有馬。日本最古老的溫泉地之一，泡完在溫泉街吃義式冰淇淋收尾。",
        href: "/rokko-arima",
        linkLabel: "同一篇：有馬溫泉的部分",
      },
      {
        time: "備選",
        title: "體力不夠的話：三田手打蕎麥麵",
        body:
          "不想爬山的日子，改去神戶近郊的三田吃嚴選國產蕎麥粉的職人手打蕎麥，安靜又輕鬆。",
        href: "/sanda-soba",
        linkLabel: "兵庫三田蕎麥麵推薦",
      },
    ],
    tip: "泡湯要用毛巾，旅館以外的外湯多半要另外買。行李輕的人建議帶一條薄毛巾。",
  },
  {
    n: 5,
    label: "Day 5",
    theme: "夙川・西宮的最後半天",
    area: "阪急神戶線沿線 → 機場",
    summary:
      "最後一天留在阪急沿線。夙川喝咖啡、西宮北口吃甜點，然後從梅田直接往機場，動線不繞路。",
    image: "/shukugawa/crepe-1.jpg",
    imageAlt: "夙川的法式可麗餅",
    stops: [
      {
        time: "10:00",
        title: "夙川：可麗餅與自家焙煎咖啡",
        body:
          "法式可麗餅午餐與精品自家焙煎咖啡，兩間都在夙川的住宅區裡，是關西人自己會去的那種店。",
        href: "/shukugawa",
        linkLabel: "夙川咖啡廳推薦2選",
      },
      {
        time: "13:00",
        title: "阪急西宮花園：最後的甜點與伴手禮",
        body:
          "西宮北口站徒步3分的大型商場。神戶甜點品牌的現煎蕎麥薄餅與季節水果可麗餅，順便在這裡把伴手禮買齊。",
        href: "/nishinomiya-gardens",
        linkLabel: "阪急西宮花園美食",
      },
      {
        time: "15:30",
        title: "回機場",
        body:
          "西宮北口搭阪急到梅田約15分，再轉往關西機場。國際線建議起飛3小時前離開市區。",
      },
    ],
    tip: "關西機場離市區比伊丹遠。買太多的話，前一天先把行李整理好會輕鬆很多。",
  },
];

const extraDays = [
  {
    href: "/hikone",
    title: "＋1天：滋賀彥根城",
    body: "國寶彥根城與吉祥物彥根貓。大阪・京都方向搭JR當天來回可行，城下町散步半天剛好。",
  },
  {
    href: "/ine",
    title: "＋1〜2天：京都伊根舟屋",
    body: "日本三大舟屋村之一，被選為「日本最美村落」。京都市區出發一日遊可以，但住一晚才看得到清晨的海。",
  },
  {
    href: "/shirahama",
    title: "＋2天：和歌山白浜",
    body: "近距離看熊貓的Adventure World、海岸豪華露營、海景咖啡與海鮮BBQ。距離較遠，建議排兩天。",
  },
];

const relatedLinks = [
  { href: "/kansai", label: "🏯 關西自由行推薦", desc: "大阪・神戶・京都近郊的完整總覽" },
  { href: "/tokyo-5day-itinerary", label: "🗺️ 東京5天4夜行程推薦", desc: "東京版的行程範例" },
  { href: "/tokyo-day-trip", label: "🚃 東京近郊一日遊推薦", desc: "關東方向的半日〜一日路線" },
];

export default function Kansai5DayItineraryPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">關西5天4夜行程</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-600 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">🗺️ 行程規劃</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 大阪・兵庫</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 全部實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          關西5天4夜行程🏯<br />大阪・神戶的完整安排
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-18</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">關西最大的優點：不用換飯店</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            關西行程之所以好排，是因為<strong>大阪梅田到神戶三宮只要約30分鐘</strong>🚃 所以「白天神戶、晚上大阪」這種安排完全可行，5天4夜都住同一間飯店也沒問題，省下換宿與拖行李的時間。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這份行程以<strong>大阪進出</strong>為前提，主軸是大阪的在地美食＋神戶的山與溫泉。定番的道頓堀・心齋橋逛街可以自由插進去，但把「非市區」的部分先卡好，行程的印象會完全不一樣。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            每個地點都是<strong>實際走過</strong>的，點進去有交通、營業時間與價位。最後也附上「多留一天要去哪」的選項。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 行程總覽 */}
        <section className="mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🗓️ 行程總覽</h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            {days.map((d) => (
              <a
                key={d.n}
                href={`#day-${d.n}`}
                className="flex items-start gap-3 px-4 py-3 border-b border-stone-100 last:border-b-0 hover:bg-yellow-50 transition-colors"
              >
                <span className="shrink-0 w-14 text-xs font-black text-blue-500 pt-0.5">{d.label}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-stone-800">{d.theme}</span>
                  <span className="block text-xs text-stone-400 mt-0.5">{d.area}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 各日 */}
        {days.map((d) => (
          <section key={d.n} id={`day-${d.n}`} className="bg-white rounded-3xl border border-stone-100 shadow-sm p-5 mb-6 scroll-mt-16">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-500 text-white text-xs font-black px-3 py-1 rounded-full">{d.label}</span>
              <span className="text-xs text-stone-400">{d.area}</span>
            </div>
            <h2 className="text-lg font-black text-stone-800 mb-2">{d.theme}</h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">{d.summary}</p>

            {d.image && (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 mb-4">
                <Image src={d.image} alt={d.imageAlt ?? d.theme} fill sizes="(max-width: 768px) 100vw, 672px" className="object-cover" />
              </div>
            )}

            <div className="space-y-3 mb-4">
              {d.stops.map((s) => (
                <div key={s.title} className="border-l-2 border-blue-200 pl-4">
                  <p className="text-[11px] font-bold text-blue-500 mb-0.5">{s.time}</p>
                  <p className="text-sm font-bold text-stone-800 mb-1">{s.title}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{s.body}</p>
                  {s.href && (
                    <Link href={s.href} className="inline-block mt-1 text-xs font-bold text-blue-500 hover:underline">
                      {s.linkLabel} →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-3">
              <p className="text-xs text-stone-600 leading-relaxed">💡 {d.tip}</p>
            </div>
          </section>
        ))}

        {/* 延長プラン */}
        <section className="mb-8">
          <h2 className="text-base font-black text-stone-800 mb-1">➕ 多留一天的話</h2>
          <p className="text-xs text-stone-500 mb-3">關西的近郊絕景。第二次來關西的人特別推薦。</p>
          <div className="space-y-2">
            {extraDays.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="block bg-white rounded-2xl border border-stone-100 shadow-sm p-4 hover:border-yellow-300 transition-colors"
              >
                <p className="text-sm font-bold text-stone-800 mb-1">{e.title}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{e.body}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 調整のヒント */}
        <section className="mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🔧 想調整的時候</h2>
          <div className="space-y-2">
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">想壓低預算？</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Day2的40樓buffet與Day3的神戶牛，二選一就好。神戶牛改成午餐時段會更好入手。
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">下雨了怎麼辦？</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Day4的六甲山整天換成室內：
                <Link href="/kobe-cafe" className="text-blue-500 font-semibold hover:underline">神戶的咖啡廳巡禮</Link>
                或
                <Link href="/nishinomiya-gardens" className="text-blue-500 font-semibold hover:underline">阪急西宮花園</Link>
                都在有屋頂的範圍內。
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">只有3天2夜？</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                留Day1（大阪美食）、Day3（神戶）、Day5（夙川・西宮）三天，六甲山與buffet先放掉。
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">也想去東京？</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                關西進、東京出的話，行程排法看
                <Link href="/tokyo-5day-itinerary" className="text-blue-500 font-semibold hover:underline">東京5天4夜行程</Link>
                ，兩份接起來就是一趟10天的日本縱走。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 飯店訂<strong>梅田</strong>最省時間。阪急・JR・地下鐵都在，往神戶與機場都順🚃</li>
            <li>✅ 大阪⇄神戶約30分鐘，不需要為了神戶換飯店</li>
            <li>✅ 神戶牛與話題餐廳先訂位。人氣店的當日排隊很吃時間</li>
            <li>✅ 六甲山上與市區有溫差，山上那天多帶一件薄外套🧥</li>
            <li>✅ 關西機場離市區較遠，回程抓寬一點，起飛3小時前離開市區✈️</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            關西的樂趣不在於跑很多點，而在於<strong>「山、海、溫泉、美食都在30分鐘以內」</strong>這件事🏯 一天之內從纜車上的花海走到溫泉街，這種密度只有關西做得到。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「神戶當天來回就好，行李留在大阪的飯店🧳」</p>
            </div>
          </div>
        </div>

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

        <RelatedArticles slug="kansai-5day-itinerary" exclude={["/kansai", "/tokyo-5day-itinerary", "/tokyo-day-trip"]} />

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
