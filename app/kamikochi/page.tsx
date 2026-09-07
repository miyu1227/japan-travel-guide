import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const KLOOK_SHINHOTAKA =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339988&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F106936-alpine-splendor-shinhotaka-ropeway-kamikochi-join-day-bus-tour-takayama";
const KLOOK_KAMIKOCHI_TOUR =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339989&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F117256-kamikochi-walking-tour-from-nagoya";

const PAGE_URL = "https://www.japantrippicks.com/kamikochi";
const OG_IMAGE = "/kamikochi/cover.jpg";

export const metadata: Metadata = {
  title: "上高地攻略2026｜交通、開山期間、散策路線與奧飛騨溫泉",
  description:
    "日本上高地怎麼去？2026年開山4/17〜11/15，全年禁止私家車。從高山搭巴士約90分（¥3,100）、松本約1.5小時、新宿直達巴士約4.8小時、名古屋夜行巴士¥8,800。附河童橋・大正池散策路線、四季景色、新穂高纜車與奧飛騨溫泉，實際造訪整理。",
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
    title: "上高地攻略2026｜交通、開山期間、散策路線與奧飛騨溫泉",
    description: "上高地開山4/17〜11/15、禁止私家車。高山・松本・新宿・名古屋出發的交通與票價、河童橋散策路線、新穂高纜車與奧飛騨溫泉。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "上高地旅行推薦・河童橋絕景" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "上高地攻略2026｜交通、開山期間、散策路線",
    description: "上高地開山4/17〜11/15。高山・松本・新宿・名古屋怎麼去、河童橋散策、奧飛騨溫泉🏔️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "上高地攻略2026｜交通、開山期間、散策路線與奧飛騨溫泉【實際造訪】",
  description: "日本上高地完整攻略：2026年開山期間、從高山・松本・新宿・名古屋的交通與票價、私家車管制、河童橋・大正池散策路線、四季景色，加上新穂高纜車、平湯大瀑布與奧飛騨溫泉飯店。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-09-07T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "上高地攻略", item: PAGE_URL },
  ],
};

const hirayuPhotos = ["/kamikochi/hirayu-1.jpg", "/kamikochi/hirayu-2.jpg"];
const hotelPhotos = ["/kamikochi/hotel-1.jpg", "/kamikochi/hotel-2.jpg", "/kamikochi/hotel-3.jpg"];
const ropewayPhotos = ["/kamikochi/ropeway-1.jpg", "/kamikochi/ropeway-2.jpg", "/kamikochi/ropeway-3.jpg", "/kamikochi/ropeway-4.jpg"];
const kappaPhotos = ["/kamikochi/kappa-1.jpg", "/kamikochi/kappa-2.jpg", "/kamikochi/kappa-3.jpg"];

const relatedLinks = [
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "美術館・足湯・神社・甜點" },
  { href: "/hokkaido", label: "🗾 北海道自由行必去景點10選", desc: "札幌・小樽・富良野一次玩遍" },
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
];

const faqs = [
  { q: "上高地在日本哪裡？從東京、大阪怎麼去最順？", a: "上高地在長野縣松本市，靠近岐阜縣高山。從東京走松本：新宿搭特急あずさ約2.5小時到松本，再轉電車＋巴士約1.5小時；或搭新宿直達巴士約4小時47分。從大阪・名古屋走高山：名古屋搭特急ひだ約2.5小時到高山，再搭巴士約90分（¥3,100）；名古屋也有夜行直達巴士（¥8,800）。" },
  { q: "上高地2026年幾月開放？", a: "2026年4月17日開山、11月15日閉山，冬季（11/16〜4/16）全面封閉無法進入。最舒服的是6月新綠、7〜8月避暑、10月上旬〜中旬紅葉；4月下旬黃金週與10月紅葉季人最多。" },
  { q: "上高地可以開車進去嗎？", a: "不行。上高地全年禁止私家車，要在長野側的「沢渡」或岐阜側的「平湯・あかんだな」停車場，轉乘接駁巴士（沢渡¥1,600、平湯¥1,500，來回省¥200）或計程車。停車一天¥600〜800。" },
  { q: "上高地要停留多久？當天來回可以嗎？", a: "可以。河童橋周邊加大正池或明神池的散步，3〜4小時就很充實。從高山或松本出發都能當天來回。想拍清晨沒人的河童橋，或加新穂高纜車、奧飛騨溫泉，就在平湯或新平湯住一晚。" },
  { q: "幾月去最好？", a: "6月新綠與殘雪的對比最美、人也比黃金週少；10月上旬〜中旬是紅葉。夏天比松本市區低5〜10°C是避暑聖地。新穂高纜車全年營業，冬天想看雪山可以改去那裡。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function KamikochiPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">上高地攻略</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🏔️ 自然景觀</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 長野・岐阜</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          上高地攻略 2026｜交通、開山期間、<br />散策路線與奧飛騨溫泉🏔️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-07（交通票價為2026年度）</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">日本上高地：海拔1,500m的阿爾卑斯山入口</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>上高地</strong>位於長野縣松本市，海拔1,500公尺的高原度假勝地，被譽為<strong>「日本阿爾卑斯山」</strong>的入口🏔️ 是日本<strong>「特別名勝」＆「特別天然紀念物」</strong>雙重指定的珍貴自然景觀，每年吸引約120萬遊客造訪。<strong>2026年開放期間是4月17日〜11月15日</strong>，全年禁止私家車進入，只能搭巴士或計程車。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>第一次去上高地</strong>的台灣・香港旅人。<strong>你會知道</strong>：從高山・松本・新宿・名古屋各要多久、多少錢，河童橋出發的3條散策路線，幾月去最美，以及隔壁岐阜縣<strong>奧飛騨溫泉鄉</strong>的3個景點（平湯大瀑布、新穂高纜車、翡翠綠溫泉飯店）怎麼串成2〜3天✨
          </p>
        </section>

        {/* アクセス */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">上高地怎麼去？從高山、松本、東京、名古屋的交通與票價</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            上高地沒有電車，最後一段一定是巴士。台灣・香港旅人最常用的是<strong>「高山進」</strong>（順路玩飛騨高山、白川鄉）和<strong>「松本進」</strong>（從東京出發）兩條。
          </p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-xs text-stone-600 border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-amber-50">
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">出發地</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">路線</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">時間</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">票價（大人單程）</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-stone-200 px-2 py-2 font-semibold">高山</td><td className="border border-stone-200 px-2 py-2">濃飛巴士 高山→平湯溫泉（轉車）→上高地</td><td className="border border-stone-200 px-2 py-2">約90分</td><td className="border border-stone-200 px-2 py-2">¥1,600＋¥1,500＝¥3,100</td><td className="border border-stone-200 px-2 py-2">不用預約。平湯→上高地來回¥2,800</td></tr>
                <tr className="bg-stone-50/50"><td className="border border-stone-200 px-2 py-2 font-semibold">松本</td><td className="border border-stone-200 px-2 py-2">阿爾卑斯交通 電車到新島々（約30分）→巴士（約60分）</td><td className="border border-stone-200 px-2 py-2">約1.5小時</td><td className="border border-stone-200 px-2 py-2">依官網運賃表</td><td className="border border-stone-200 px-2 py-2">新島々→上高地的巴士2026年起<strong>需預約指定班次</strong>；另有松本直達巴士1日2班</td></tr>
                <tr><td className="border border-stone-200 px-2 py-2 font-semibold">東京（新宿）</td><td className="border border-stone-200 px-2 py-2">直達巴士「さわやか信州号」</td><td className="border border-stone-200 px-2 py-2">日間 4小時47分／夜行 6小時55分</td><td className="border border-stone-200 px-2 py-2">依2026年度運賃表</td><td className="border border-stone-200 px-2 py-2">7:15發12:02到；夜行22:25發5:20到。要預約</td></tr>
                <tr className="bg-stone-50/50"><td className="border border-stone-200 px-2 py-2 font-semibold">東京（電車）</td><td className="border border-stone-200 px-2 py-2">新宿→特急あずさ→松本，再接上面的松本路線</td><td className="border border-stone-200 px-2 py-2">約4小時</td><td className="border border-stone-200 px-2 py-2">あずさ約¥6,500＋松本段</td><td className="border border-stone-200 px-2 py-2">JR PASS 可搭あずさ</td></tr>
                <tr><td className="border border-stone-200 px-2 py-2 font-semibold">名古屋</td><td className="border border-stone-200 px-2 py-2">名鐵夜行直達巴士 23:10發→5:15到</td><td className="border border-stone-200 px-2 py-2">約6小時</td><td className="border border-stone-200 px-2 py-2">網路¥8,800（窗口¥9,000）</td><td className="border border-stone-200 px-2 py-2">特定日運行、出發3天前截止。或搭特急ひだ到高山再轉巴士</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-xs text-stone-600 leading-relaxed space-y-1">
            <p>🚗 <strong>自駕的人</strong>：釜隧道以後全年禁止私家車。長野側停「沢渡」（¥800／日、接駁巴士¥1,600），岐阜側停「平湯・あかんだな」（¥600／24h、接駁巴士¥1,500）。買來回票省¥200</p>
            <p>🕐 <strong>道路開放時間</strong>：5:00〜19:00（7〜8月到20:00），巴士也只在這個時間帶運行，晚上進不去</p>
            <p>📍 <strong>終點都是「上高地巴士總站」</strong>：走5分鐘就是河童橋。往大正池的人可以提早在「大正池」站下車，再走回河童橋</p>
          </div>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">平湯大瀑布 → 日本百選瀑布・四季絕景</p>
                <p className="text-xs text-stone-500 leading-relaxed">64公尺高・冬季結冰超夢幻</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">奧飛騨花園飯店燒岳 → 翡翠綠超深層溫泉</p>
                <p className="text-xs text-stone-500 leading-relaxed">國內唯一的綠色溫泉・飛騨牛會席料理</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">新穂高纜車 → 日本唯一雙層纜車</p>
                <p className="text-xs text-stone-500 leading-relaxed">標高2,156m展望台・北阿爾卑斯山絕景</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">河童橋 → 上高地地標・絕景打卡點</p>
                <p className="text-xs text-stone-500 leading-relaxed">梓川＆穂高連峰的完美構圖</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">上高地＆奧飛騨推薦・4選</h2>

        {/* Spot 1: 平湯大滝 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {hirayuPhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image src={src} alt="平湯大瀑布 - 上高地旅行推薦" fill sizes="50vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">平湯大瀑布</h3>
                <span className="text-xs text-stone-400">Hirayu Otaki Falls</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              被列為<strong>「日本百選瀑布」</strong>之一的壯觀瀑布💧 高度64公尺、寬度6公尺，從森林步道走進去的瞬間，震撼的水流聲和涼爽的水霧讓人完全放鬆。也是「飛騨三大名瀑」之一。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                四季都有不同景色，春天雪融的氣勢、秋天紅葉環繞、冬天則會變成夢幻的<strong>冰瀑</strong>❄️ 冬季限定的「平湯大瀑布結冰祭」還會在夜晚點燈，是只有那個時節才能看到的絕景。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["💧 日本百選瀑布", "❄️ 冬季冰瀑", "🍁 秋季紅葉", "🌿 森林步道"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 岐阜縣高山市奧飛騨溫泉鄉平湯</p>
              <p className="text-xs text-stone-600">🚃 從高山駅搭巴士約52分→「大滝口／露營場」下車徒步20分</p>
              <p className="text-xs text-stone-600">⏰ 全日開放（步道有時段限制）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
            </div>

            <a href="https://www.hidatakayama.or.jp/spot/detail_1730.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方資訊
            </a>
          </div>
        </section>

        {/* Spot 2: 奥飛騨ガーデンホテル 焼岳 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {hotelPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="奧飛騨花園飯店燒岳 - 上高地旅行推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">奧飛騨花園飯店燒岳</h3>
                <span className="text-xs text-stone-400">Okuhida Garden Hotel Yakedake</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於奧飛騨溫泉鄉新平湯溫泉區的人氣溫泉飯店♨️ 最大特色是<strong>「鶯之湯」</strong>——從3億6千萬年前地層湧出的超深層水溫泉，會隨著時間變成<strong>翡翠綠色</strong>，是日本國內唯一的綠色源泉！館內有12種不同風格的溫泉可泡。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                一邊泡著翡翠綠溫泉，一邊欣賞北阿爾卑斯山的絕景，超級療癒✨ 晚餐是<strong>A4等級飛騨牛</strong>和招牌的「溫泉蒸籠料理」，用溫泉蒸氣蒸出的食材特別鮮甜🥩 整晚85間房間都能欣賞山景，是奧飛騨旅行最適合的住宿選擇！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["♨️ 翡翠綠溫泉", "🥩 A4飛騨牛", "🏔️ 山景客房", "🍽️ 溫泉蒸籠料理"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 岐阜縣高山市奧飛騨溫泉鄉新平湯溫泉</p>
              <p className="text-xs text-stone-600">🚃 高山駅搭巴士約60分（新穂高纜車方向・「ガーデンホテル焼岳前」下車）</p>
              <p className="text-xs text-stone-600">💴 一泊二食 ¥20,900〜（含早晚餐・不含溫泉稅）</p>
              <p className="text-xs text-stone-600">🛏️ 全85間（和室68・洋室17）</p>
            </div>

            <a href="https://www.okuhida-gh.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 3: 新穂高ロープウェイ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {ropewayPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="新穂高纜車 - 上高地旅行推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">新穂高纜車</h3>
                <span className="text-xs text-stone-400">Shinhotaka Ropeway</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>日本唯一的雙層纜車</strong>🚠 搭乘兩段纜車就能輕鬆登上海拔<strong>2,156公尺</strong>的山頂展望台。從展望台可以360度眺望北阿爾卑斯山的壯闊景色，包括穂高岳、燒岳、笠岳等群山。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                不用爬山就能體驗<strong>2000公尺以上的高山絕景</strong>🏔️ 山頂站可以吃到飛騨高山拉麵、冰淇淋（雪糕），還有免費的足湯！秋天紅葉、冬天雪景、夏天避暑，四季都有不同的魅力。也是日本人氣的<strong>星空觀賞</strong>景點。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🚠 雙層纜車", "🏔️ 標高2,156m", "⭐ 星空觀賞", "🦶 免費足湯"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 岐阜縣高山市奧飛騨溫泉鄉新穂高溫泉</p>
              <p className="text-xs text-stone-600">🚃 高山駅搭巴士約90分→「新穂高纜車」下車</p>
              <p className="text-xs text-stone-600">⏰ 全年營業（每30分鐘一班）</p>
              <p className="text-xs text-stone-600">💴 往返大人 ¥3,800（網路購票有優惠）</p>
            </div>

            <a href="https://shinhotaka-ropeway.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>

            {/* Klook 新穂高纜車+上高地 高山出發 */}
            <a
              href={KLOOK_SHINHOTAKA}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-5 block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🚡</span>
              <div className="relative flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                  🎫 Travel Tips
                </span>
                <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">高山出發一日遊</span>
              </div>
              <div className="relative flex items-center gap-3 mb-4">
                <div className="relative w-20 h-20 shrink-0">
                  <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                  <Image src="/poyapiyo-flag.png" alt="ぽやぴよ" fill sizes="80px" className="object-contain p-1 relative -rotate-[4deg]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-black text-stone-800 leading-tight mb-1">想輕鬆搭新穂高纜車？</h3>
                  <p className="text-xs text-stone-700 leading-relaxed">從<strong>高山出發</strong>的一日巴士行程包含<strong>新穂高纜車＋上高地</strong>，不用自己排巴士路線＆時刻，適合行程有限的旅客🚡</p>
                </div>
              </div>
              <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
                🎫 查看 新穂高纜車＋上高地一日遊 →
              </div>
              <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
            </a>
          </div>
        </section>

        {/* Spot 4: 河童橋 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {kappaPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="河童橋 - 上高地旅行推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div>
                <h3 className="text-base font-black text-stone-800">河童橋</h3>
                <span className="text-xs text-stone-400">Kappa Bashi</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>上高地的地標</strong>，海拔1,500公尺高原上的木製吊橋🌉 從橋上可以同時看到<strong>穂高連峰、梓川、燒岳</strong>，是明信片般的完美構圖📸 目前的橋樑是1997年建造的第5代，歷史可追溯至1910年。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                來上高地絕對不能錯過的必拍景點！從上高地巴士總站走路只要5分鐘🚶 春天新綠、夏天避暑、秋天紅葉，每個季節都有不同的絕景。周圍步道平緩，即使是長輩或小孩也能輕鬆散步✨
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌉 上高地地標", "📸 絕景打卡點", "🚶 適合散步", "🌿 自然療癒"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 長野縣松本市安曇 上高地</p>
              <p className="text-xs text-stone-600">🚃 上高地巴士總站 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 全日開放（上高地僅開放4/17〜11/15）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
              <p className="text-xs text-stone-600">🍂 最佳季節：春（4〜5月）・夏（7〜8月）・秋（10月紅葉）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">上高地為自然保護區，冬季（11/16〜4/16）全面封山，請提前確認開放時間</p>
            </div>

            <a href="https://www.kamikochi.or.jp/learn/spots/1319/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方資訊
            </a>

            {/* Klook 上高地 名古屋出發 */}
            <a
              href={KLOOK_KAMIKOCHI_TOUR}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-5 block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🌉</span>
              <div className="relative flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                  🎫 Travel Tips
                </span>
                <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">名古屋出發一日遊</span>
              </div>
              <div className="relative flex items-center gap-3 mb-4">
                <div className="relative w-20 h-20 shrink-0">
                  <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                  <Image src="/poyapiyo-flag.png" alt="ぽやぴよ" fill sizes="80px" className="object-contain p-1 relative -rotate-[4deg]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-black text-stone-800 leading-tight mb-1">想從名古屋直達上高地？</h3>
                  <p className="text-xs text-stone-700 leading-relaxed">從<strong>名古屋出發</strong>的<strong>上高地散策一日遊</strong>，包含往返巴士＋河童橋散步時間，不用自駕也能輕鬆造訪🌉</p>
                </div>
              </div>
              <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
                🎫 查看 名古屋出發上高地一日遊 →
              </div>
              <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
            </a>
          </div>
        </section>

        {/* 散策ルート */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🥾 上高地推薦散策路線</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            上高地擁有完善的木製步道，從河童橋出發可以選擇不同長度的路線散步。以下是最受歡迎的3條路線：
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <p className="text-sm font-bold text-stone-700 mb-1">① 大正池路線（初級・約80分）</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                從河童橋出發，沿著梓川邊欣賞<strong>燒岳</strong>美景，經過<strong>Weston碑</strong>、田代濕原抵達<strong>大正池</strong>。約4公里・單程80分・往返約3小時。是上高地最經典的路線🌲
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <p className="text-sm font-bold text-stone-700 mb-1">② 明神池路線（初級・約60分）</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                從河童橋往右岸走，人相對較少，可以悠閒散步🌿 春天可看到杜鵑花，終點<strong>明神池</strong>是上高地最神秘優美的景點之一。約3公里・單程60分。
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <p className="text-sm font-bold text-stone-700 mb-1">③ 奧上高地路線（中級・約2小時〜）</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                從明神繼續往徳澤、横尾前進的進階路線。雖然平坦但距離長達6.5公里，需要<strong>雨具＆登山鞋</strong>。是觀察野鳥的最佳路線🦅
              </p>
            </div>
          </div>
        </section>

        {/* ベストシーズン */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🌸 上高地四季景色</h2>
          <div className="space-y-2 text-sm text-stone-600">
            <p><strong>🌱 春（4月下旬〜6月）</strong>：開山祭（4/27）後萬物復甦，山頂殘雪與新綠的對比超美。4月下旬到黃金週是第一波熱門期。</p>
            <p><strong>☀️ 夏（7〜8月）</strong>：比松本市區低5〜10°C，是日本人的<strong>避暑聖地</strong>。7月中旬〜暑假期間人最多。</p>
            <p><strong>🍁 秋（9月下旬〜10月）</strong>：紅葉季節！10月上旬〜中旬是最佳時期，黃金色的落葉松林超夢幻。</p>
            <p><strong>❄️ 冬（11/16〜4/16）</strong>：全面封山，無法進入。</p>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">上高地＆奧飛騨旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 上高地為自然保護區，<strong>2026年4/17〜11/15</strong>才開放，冬季封山</li>
            <li>✅ 上高地全年禁止私家車，需在沢渡或平湯<strong>轉乘接駁巴士</strong>（¥1,500〜1,600）或計程車（的士）</li>
            <li>✅ 建議安排<strong>2〜3天行程</strong>，在奧飛騨溫泉住一晚最完美♨️</li>
            <li>✅ 山上氣溫比松本市區低5〜10°C，即使夏天也要帶<strong>薄外套</strong>🧥</li>
            <li>✅ 從東京搭特急「あずさ」到松本約2.5小時再轉車，或新宿直達巴士約4小時47分</li>
            <li>✅ 從高山搭濃飛巴士約90分（¥3,100），在平湯溫泉換一次車，不用預約</li>
            <li>✅ 出發前可查看<a href="https://www.kamikochi.or.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">上高地官方網站</a>的即時天氣與開山資訊</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            壯闊的山景、夢幻的瀑布、翡翠綠的溫泉——上高地＆奧飛騨真的是日本最療癒的地方之一✨<br />
            遠離城市喧囂，來這裡被大自然包圍，一切都會變得好舒服🏔️
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「站在河童橋上看著穂高連峰的瞬間，覺得一切辛苦都值得了🏔️」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqs} />

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

        <RelatedArticles slug="kamikochi" exclude={["/hakone", "/hokkaido", "/koyo"]} />

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
