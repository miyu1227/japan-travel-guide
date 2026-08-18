import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/tokyo-5day-itinerary";
const OG_IMAGE = "/skytree/cover.png";

export const metadata: Metadata = {
  title: "東京5天4夜行程推薦｜第一次自由行完整安排",
  description:
    "第一次東京自由行的5天4夜行程：Day1機場進市區、Day2晴空塔與上野、Day3澀谷代官山咖啡巡禮、Day4箱根或橫濱近郊、Day5伴手禮與回程。附票券選法與雨天備案。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京5天4夜行程推薦｜第一次自由行完整安排",
    description:
      "Day1機場進市區、Day2晴空塔與上野、Day3咖啡巡禮、Day4近郊一日遊、Day5伴手禮。附票券選法與雨天備案🗺️",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京5天4夜行程推薦" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京5天4夜行程推薦｜第一次自由行完整安排",
    description: "五天四夜怎麼排？從機場交通到最後一天的伴手禮，一次整理🗺️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京5天4夜行程推薦｜第一次自由行完整安排",
  description:
    "第一次東京自由行的5天4夜行程範例。機場交通、票券選法、每天的路線安排與雨天備案，全部依實際造訪過的地點整理。",
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
    { "@type": "ListItem", position: 2, name: "東京5天4夜行程", item: PAGE_URL },
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
    theme: "抵達・進市區・熱身晚餐",
    area: "成田／羽田 → 新宿・新大久保",
    summary:
      "第一天不要排景點。把「機場出來怎麼進市區」和「網路」搞定，剩下的時間拿來吃一頓好進的晚餐就夠了。",
    image: "/shin-okubo/sawee-1.jpg",
    imageAlt: "新大久保的韓式鍋物",
    stops: [
      {
        time: "抵達後",
        title: "機場 → 市區（先決定搭哪一種）",
        body:
          "羽田到市區約30〜45分、成田則要看搭Skyliner還是巴士。行李多的時候，機場的行李配送服務其實比硬拖上電車划算。",
        href: "/haneda-airport-access",
        linkLabel: "羽田機場交通攻略",
      },
      {
        time: "落地前",
        title: "網路：eSIM 先設定好",
        body:
          "eSIM 建議出發前就買好、設定好，落地開機就能用。什麼時候啟用才不會浪費天數，這篇有寫。",
        href: "/japan-esim",
        linkLabel: "日本 eSIM 使用指南",
      },
      {
        time: "18:00〜",
        title: "新大久保吃韓國料理",
        body:
          "從新宿走過去就到，是第一天最不容易失敗的選擇。章魚蝦內臟鍋、韓系咖啡廳、話題杜拜麻糬，一條街解決。",
        href: "/shin-okubo",
        linkLabel: "新大久保美食推薦",
      },
    ],
    tip: "第一天的飯店建議訂在新宿・上野・品川這種交通節點，之後四天都會輕鬆很多。",
  },
  {
    n: 2,
    label: "Day 2",
    theme: "東京定番：晴空塔・上野",
    area: "押上 → 上野 → 芝公園",
    summary:
      "把最經典的兩個地標排在同一天。晴空塔和上野在地鐵同一側，移動不繞路。",
    image: "/skytree/view-1.jpg",
    imageAlt: "東京晴空塔的展望景色",
    stops: [
      {
        time: "10:00",
        title: "東京晴空塔",
        body:
          "天望デッキ和天望回廊要不要都買、門票要不要先預約、白天還是傍晚上去，這些先想清楚再出門。從淺草過來也很近。",
        href: "/skytree",
        linkLabel: "東京晴空塔攻略",
      },
      {
        time: "14:00",
        title: "上野動物園",
        body:
          "門票只要¥600，是東京CP值最高的景點之一。大熊貓、亞洲象、小熊貓，帶小孩或想放慢腳步的日子很適合。",
        href: "/ueno-zoo",
        linkLabel: "上野動物園推薦",
      },
      {
        time: "18:30",
        title: "東京鐵塔看夜景",
        body:
          "想拍「有東京鐵塔入鏡」的照片，其實待在鐵塔周邊比登上去更好拍。晚上點燈後最有東京的感覺。",
        href: "/tokyo-tower",
        linkLabel: "東京鐵塔推薦",
      },
    ],
    tip: "這天走路量大。晚餐想吃拉麵的話，六本木的柚子鹽或家系都在回程路線上。",
  },
  {
    n: 3,
    label: "Day 3",
    theme: "澀谷・代官山・中目黑：咖啡與燒肉",
    area: "東急東橫線沿線",
    summary:
      "這三站彼此都在3站以內，是東京最好安排的一天。上午咖啡、下午逛街、晚上燒肉。",
    image: "/nakameguro-cafe/starbucks-1.jpg",
    imageAlt: "中目黑的星巴克臻選東京烘焙工坊",
    stops: [
      {
        time: "10:30",
        title: "中目黑：星巴克臻選東京烘焙工坊",
        body:
          "全世界只有6間的星巴克臻選，隈研吾設計、就在目黑川旁邊。櫻花季的話這一段是滿版粉紅色。",
        href: "/nakameguro-cafe",
        linkLabel: "中目黑咖啡廳推薦",
      },
      {
        time: "13:00",
        title: "代官山：義式烘焙與甜點",
        body:
          "米蘭來的PRINCI、星級甜點師的DOLCE TACUBO、法式可頌專門店。代官山適合慢慢走，不用趕。",
        href: "/daikanyama-cafe",
        linkLabel: "代官山咖啡廳推薦3選",
      },
      {
        time: "16:00",
        title: "澀谷：黑膠唱片試聽咖啡",
        body:
          "約300張唱片可以自己挑來聽，全席有電源和Wi-Fi。逛累了在這裡坐一小時剛剛好。",
        href: "/shibuya-cafe",
        linkLabel: "澀谷咖啡廳推薦",
      },
      {
        time: "19:00",
        title: "晚餐：燒肉",
        body:
          "想吃內臟燒肉就在澀谷解決（店員全程代烤，收尾的炒烏龍麵必吃）；想吃高級一點的，品川的叙々苑午餐從¥2,640起，晚餐再往上抓。",
        href: "/shibuya-yakiniku",
        linkLabel: "澀谷燒肉推薦",
      },
    ],
    tip: "燒肉店建議先訂位。咖啡廳3間全排會太趕，挑2間就好。",
  },
  {
    n: 4,
    label: "Day 4",
    theme: "近郊一日遊（二選一）",
    area: "箱根 or 橫濱野毛",
    summary:
      "第4天往郊外跑，整趟旅行的印象會完全不一樣。想泡溫泉選箱根，想吃喝為主選橫濱。",
    image: "/hakone/glass-1.jpg",
    imageAlt: "箱根玻璃之森美術館",
    stops: [
      {
        time: "選項A",
        title: "箱根：溫泉與絕景",
        body:
          "新宿搭浪漫特快約1.5小時。玻璃美術館、箱根神社的湖上鳥居、足湯、自然薯蕎麥麵，一天走得完。浪漫特快要不要先訂位、周遊券該不該買，那篇有判斷方式。",
        href: "/hakone",
        linkLabel: "箱根一日遊推薦",
      },
      {
        time: "選項B",
        title: "橫濱野毛：續攤（はしご酒）",
        body:
          "東京站到櫻木町約35分。白天看港未來的夜景，晚上鑽進約600間店擠在一起的野毛，一間喝兩杯就換下一間。壽司一貫¥99起。",
        href: "/noge",
        linkLabel: "橫濱野毛續攤2選",
      },
      {
        time: "夏天限定",
        title: "選項C：湘南茅崎的海邊早餐",
        body:
          "東京出發約一小時。早上在海邊鋪野餐墊吃早餐，再走2分鐘到清晨6點就開門的海邊咖啡，中午前就能回市區。",
        href: "/chigasaki",
        linkLabel: "茅崎湘南海灘野餐",
      },
    ],
    tip: "這天離開東京23區，Tokyo Subway Ticket 派不上用場，記得另外算車錢。",
  },
  {
    n: 5,
    label: "Day 5",
    theme: "伴手禮與回程",
    area: "下北澤／自由之丘 → 機場",
    summary:
      "最後一天不要排遠的地方。買伴手禮、吃一頓好吃的、留足夠時間去機場。",
    image: "/takeout-cake/cover.jpg",
    imageAlt: "東京外帶蛋糕",
    stops: [
      {
        time: "10:00",
        title: "下北澤或自由之丘散步",
        body:
          "兩區都是二手衣店＋咖啡廳的組合，走起來輕鬆，行李寄放在飯店或車站置物櫃就好。",
        href: "/shimokitazawa-cafe",
        linkLabel: "下北澤咖啡廳推薦4選",
      },
      {
        time: "13:00",
        title: "伴手禮：手工餅乾禮盒",
        body:
          "赤坂的手工餅乾需要預約才買得到，想帶回台灣・香港送人的話，出發前就要先訂。",
        href: "/tokyo-cookies",
        linkLabel: "東京伴手禮推薦",
      },
      {
        time: "15:00",
        title: "帶回飯店吃的外帶蛋糕",
        body:
          "澀谷SCRAMBLE SQUARE的B2直達車站，杯型鮮奶油蛋糕¥1,058起。這種是當天吃完的，別放進行李帶回去。",
        href: "/takeout-cake",
        linkLabel: "東京外帶蛋糕推薦",
      },
    ],
    tip: "回程建議在起飛3小時前離開市區。成田比羽田遠，要再多抓30分鐘。",
  },
];

const relatedLinks = [
  { href: "/tokyo-spot", label: "🗼 東京景點推薦10選", desc: "地標・公園・美術館的完整總覽" },
  { href: "/tokyo-gourmet", label: "🍜 東京美食推薦總整理", desc: "拉麵・燒肉・伴手禮一次看" },
  { href: "/tokyo-day-trip", label: "🚃 東京近郊一日遊推薦", desc: "箱根・橫濱・湘南的半日〜一日路線" },
];

export default function Tokyo5DayItineraryPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">東京5天4夜行程</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-600 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">🗺️ 行程規劃</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 全部實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京5天4夜行程推薦🗺️<br />第一次自由行的完整安排
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-18</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">五天四夜，其實只要排「3個定番＋1個近郊」就夠了</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            第一次規劃東京自由行，最常見的失敗是<strong>一天塞太多</strong>。東京的景點看起來都在同一張地圖上，實際移動起來一個點就要30〜40分鐘，一天排4個以上就會變成「一直在搭電車」😵
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            所以這份行程的原則很簡單：<strong>一天一個區域、一天最多3個點</strong>。5天裡面排2天定番景點、1天咖啡與逛街、1天往郊外跑、剩下的頭尾留給機場與伴手禮。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            每一個地點都是我們<strong>實際走過</strong>的，點進去就有交通方式、營業時間與價位。可以整份照抄，也可以只抽其中幾天來用。
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

        {/* 出發前準備 */}
        <section className="mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🎒 出發前先決定的3件事</h2>
          <div className="space-y-2">
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">① 網路</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                eSIM 出發前買好、設定好，落地開機就能用。
                <Link href="/japan-esim" className="text-blue-500 font-semibold hover:underline">看 eSIM 指南 →</Link>
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">② 地鐵票券</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                外國旅客限定的 Tokyo Subway Ticket 有24／48／72小時三種。注意<strong>不能搭JR山手線</strong>，Day4去郊外那天也用不到。
                <Link href="/tokyo-subway-ticket" className="text-blue-500 font-semibold hover:underline">看票券怎麼選 →</Link>
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">③ 機場交通</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                羽田到市區約30〜45分，成田要看搭哪一種。深夜或清晨的班機，前泊／後泊會比硬撐划算。
                <Link href="/narita-airport-access" className="text-blue-500 font-semibold hover:underline">成田</Link>
                ／
                <Link href="/haneda-airport-access" className="text-blue-500 font-semibold hover:underline">羽田</Link>
              </p>
            </div>
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

        {/* 調整のヒント */}
        <section className="mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🔧 想調整的時候</h2>
          <div className="space-y-2">
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">下雨了怎麼辦？</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                把 Day2 或 Day4 換成室內：
                <Link href="/museum" className="text-blue-500 font-semibold hover:underline">美術館</Link>、
                <Link href="/artbar-tokyo" className="text-blue-500 font-semibold hover:underline">喝酒作畫體驗</Link>、
                或
                <Link href="/tokyo-disney-around" className="text-blue-500 font-semibold hover:underline">舞浜周邊不進園的玩法</Link>。
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">帶小孩的話？</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Day3 的咖啡巡禮換成
                <Link href="/showa-kinen-park" className="text-blue-500 font-semibold hover:underline">昭和紀念公園</Link>
                或
                <Link href="/spot" className="text-blue-500 font-semibold hover:underline">公園野餐</Link>
                ，小孩可以跑一整天。
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">只有3天2夜？</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                直接砍掉 Day4 的近郊與 Day5 的散步，把伴手禮移到 Day3 傍晚。定番景點與咖啡那兩天保留就好。
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
              <p className="text-sm font-bold text-stone-800 mb-1">第二次來東京了？</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                把 Day2 的定番換成
                <Link href="/kiyosumi-cafe" className="text-blue-500 font-semibold hover:underline">清澄白河</Link>
                或
                <Link href="/futakotamagawa" className="text-blue-500 font-semibold hover:underline">二子玉川</Link>
                這種在地區域，Day4 拉遠到
                <Link href="/katsunuma" className="text-blue-500 font-semibold hover:underline">山梨勝沼的酒莊與溫泉</Link>
                住一晚。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 一天最多3個點。看起來很近的地方，實際移動都要30分鐘以上🚃</li>
            <li>✅ 飯店訂在<strong>新宿・上野・品川</strong>這種交通節點，每天可以省下30〜60分鐘</li>
            <li>✅ 人氣餐廳與燒肉店先訂位；拉麵店多半不能訂，改成避開12〜13點與19〜20點</li>
            <li>✅ 平日和週末的人潮差很多。行程有彈性的話，把景點排平日、逛街排週末</li>
            <li>✅ 最後一天不要排遠的地方，起飛3小時前離開市區比較安全✈️</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            東京好玩的地方永遠排不完，所以與其塞滿，不如<strong>每天留一個「沒安排的空檔」</strong>。走累了就找間咖啡廳坐下來，那段時間往往才是旅行裡最記得住的部分☕
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「行程排八分滿，剩下兩分留給偶然遇到的店🍮」</p>
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

        <RelatedArticles slug="tokyo-5day-itinerary" exclude={["/tokyo-spot", "/tokyo-gourmet", "/tokyo-day-trip"]} />

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
