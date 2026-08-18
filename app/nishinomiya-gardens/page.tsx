import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/nishinomiya-gardens";
const OG_IMAGE = "/nishinomiya-gardens/tooth-1.jpg";

export const metadata: Metadata = {
  title: "阪急西宮花園美食｜TOOTH TOOTH 蕎麥薄餅與甜點咖啡",
  description:
    "從梅田搭阪急約15分、西宮北口站徒步3分。2樓「TOOTH TOOTH PATISSERIE＆CAFE」可以吃到現煎法式蕎麥薄餅、季節水果可麗餅與紅茶。附營業時間與價格帶。",
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
    title: "阪急西宮花園美食｜TOOTH TOOTH 蕎麥薄餅與甜點咖啡",
    description: "西宮北口站徒步3分。神戶甜點品牌TOOTH TOOTH的法式蕎麥薄餅與季節可麗餅，附交通・時段・價格帶。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "TOOTH TOOTH 阪急西宮花園店的季節水果可麗餅" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "阪急西宮花園美食｜TOOTH TOOTH 蕎麥薄餅與甜點咖啡",
    description: "西宮北口徒步3分！神戶甜點品牌的法式蕎麥薄餅與季節可麗餅🍽️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "阪急西宮花園美食｜TOOTH TOOTH 蕎麥薄餅與甜點咖啡【實際造訪】",
  description: "阪急西宮花園2樓「TOOTH TOOTH PATISSERIE＆CAFE」的實際造訪心得。蕎麥薄餅、季節可麗餅、空間與交通整理。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-08-12T00:00:00+09:00",
  dateModified: "2026-08-12T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "阪急西宮花園美食", item: PAGE_URL },
  ],
};

const photos = [
  { src: "/nishinomiya-gardens/tooth-1.jpg", alt: "TOOTH TOOTH 阪急西宮花園店的季節水果可麗餅與香草冰淇淋" },
  { src: "/nishinomiya-gardens/tooth-2.jpg", alt: "現煎的法式蕎麥薄餅，配火腿、半熟蛋與起司" },
  { src: "/nishinomiya-gardens/tooth-3.jpg", alt: "TOOTH TOOTH 的紅茶與茶壺" },
  { src: "/nishinomiya-gardens/tooth-4.jpg", alt: "店內天花板的金色球型吊燈與紫色牆面" },
];

const relatedLinks = [
  { href: "/shukugawa", label: "☕ 夙川咖啡廳推薦2選｜法式可麗餅＆精品咖啡", desc: "同樣在西宮市，從西宮北口搭一站就到" },
  { href: "/kobe-cafe", label: "🥐 神戶咖啡推薦3選｜フロインドリーブ＆異人館", desc: "順路往神戶方向的話可以接這篇" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "同一條阪急神戶線上，晚餐的大餐選項" },
];

export default function NishinomiyaGardensPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">阪急西宮花園美食</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 兵庫・西宮北口</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          阪急西宮花園美食｜TOOTH TOOTH<br />蕎麥薄餅與甜點咖啡🍽️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-12</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">大阪與神戶之間，剛好可以停一站的地方</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>阪急西宮花園（阪急西宮ガーデンズ）</strong>在「西宮北口」站旁邊，是關西很大的一間購物中心。從<strong>大阪梅田搭阪急神戶線大約15分鐘</strong>，往神戶三宮也差不多，剛好卡在兩大城市中間🚃
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這次吃的是2樓的<strong>「TOOTH TOOTH PATISSERIE＆CAFE」</strong>——神戶起家的甜點（甜品）品牌，在這裡有完整的咖啡廳（咖啡店）空間，可以坐下來好好吃（好食）一頓，不是只有外帶櫃。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>行程在大阪與神戶之間移動、想找一頓不踩雷的午餐或下午茶</strong>的台灣・香港旅人。<strong>你會知道</strong>：實際吃到什麼、價格帶大概多少、店內是什麼氣氛、從西宮北口站怎麼走，還有什麼時段去比較不用等。
          </p>
        </section>

        {/* 店舗カード */}
        <h2 className="text-lg font-black text-stone-800 mb-4">TOOTH TOOTH PATISSERIE＆CAFE 阪急西宮花園店</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((p, i) => (
              <div key={p.src} className="relative aspect-square bg-stone-100">
                <Image
                  src={p.src}
                  alt={p.alt}
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
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">TOOTH TOOTH PATISSERIE＆CAFE</h3>
                <span className="text-xs text-stone-400">阪急西宮ガーデンズ店／阪急西宮花園 2F</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>TOOTH TOOTH</strong> 是神戶起家的甜點品牌，把職人的甜點手藝與<strong>藝術、時尚、音樂的玩心</strong>混在一起，是他們一直以來的風格。招牌是<strong>季節水果塔</strong>，不過西宮花園這間有完整的咖啡廳，除了甜點，還吃得到<strong>法式蕎麥薄餅（galette）</strong>這類正餐。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-600 mb-1">✨ 推薦（推介）給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                最方便的一點是<strong>「正餐和甜點可以在同一間解決」</strong>。想吃飽就點鹹的蕎麥薄餅，想吃甜就點可麗餅或蛋糕，同行的人口味不一樣也不用分頭找店🍽️ 座位數多、空間寬敞，帶著大包小包逛街逛累了走進來也不會有壓力。加上是購物中心裡面，冷氣、廁所、電梯什麼都有，<strong>下雨天或帶長輩、小孩時特別好用</strong>。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥞 現煎蕎麥薄餅", "🍑 季節水果甜點", "☕ 可以久坐", "🈚 有圖片菜單", "☔ 室內備案"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍽️ 這次實際點的</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・<strong>鹹味蕎麥薄餅</strong>：火腿、半熟蛋與滿滿起司（芝士），餅皮薄脆、邊緣烤得很香，附一小份沙拉</li>
                <li>・<strong>季節水果可麗餅</strong>：白桃、香草冰淇淋（雪糕）、莓果醬與脆脆的碎粒，甜度不重</li>
                <li>・<strong>熱紅茶（附茶壺）</strong>：可以慢慢續杯，配甜點剛好</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣西宮市高松町14-2 阪急西宮ガーデンズ 2F</p>
              <p className="text-xs text-stone-600">🚃 阪急神戶線・今津線「西宮北口」駅 東改札 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜20:00（餐點L.O. 19:00／咖啡L.O. 19:30）</p>
              <p className="text-xs text-stone-600">💴 鹹食約¥950〜¥1,900／甜點約¥800〜¥1,700（2025年3月公布的菜單價格，實際以店頭為準）</p>
              <p className="text-xs text-stone-600">🪑 約74席</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">甜點的水果會跟著季節換，夏天是白桃、其他季節則會變成草莓或無花果等，每次去都不太一樣</p>
            </div>

            <a
              href="https://toothtooth.com/patisserie-tooth-tooth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站（菜單・店舖資訊）
            </a>
          </div>
        </section>

        {/* 空間 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">店內氣氛：抬頭會看到一整片金色球燈</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            進去之後很容易忽略、但一抬頭就會「哇」的地方——天花板上垂著<strong>大大小小的金色球型吊燈</strong>，每一顆都會把整間店的樣子倒映在球面上✨ 配上<strong>紫色牆面</strong>與植物圖案的壁紙，整體不是那種安全牌的咖啡廳裝潢，而是很有品牌個性的配色。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            座位是木桌＋寬敞的間距，講話不用壓低音量，一個人來看書、兩三個人聊天都合適。連杯墊上都印著品牌的插畫（<strong>「I have a sweet tooth」</strong>），細節做得滿到位的。
          </p>
        </section>

        {/* 西宮ガーデンズ */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">順便逛：阪急西宮花園是什麼樣的地方？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            阪急西宮花園是關西規模很大的購物中心，本館的專門店樓層是<strong>1F〜5F</strong>，服飾、雜貨、生活用品、超市都在裡面。因為是完全室內的設施，<strong>下雨天的行程備案</strong>很好用。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這一帶不是觀光客集中的區域，來的多半是<strong>當地人</strong>，所以逛起來不會有人擠人的感覺。想看看關西人平常的日常生活長什麼樣，比起心齋橋、三宮，這裡其實更真實。
          </p>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            ※ 本館專門店樓層一般是10:00〜20:00，但餐飲樓層的時間不一樣，出發前建議先看官網。
          </p>
        </section>

        {/* 交通 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">怎麼去阪急西宮花園？</h2>
          <div className="space-y-2 text-sm text-stone-600">
            <p>🚃 <strong>從大阪梅田</strong>：阪急神戶線 到「西宮北口」約15分鐘</p>
            <p>🚃 <strong>從神戶三宮</strong>：阪急神戶線 到「西宮北口」約15分鐘</p>
            <p>🚶 <strong>西宮北口駅 東改札</strong>出來後 徒歩約3分，路線很單純不太會迷路</p>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            西宮北口是<strong>阪急神戶線與今津線的交會站</strong>，往夙川、甲子園方向都很方便。如果當天還想散步，
            <Link href="/shukugawa" className="text-blue-600 underline underline-offset-2">夙川</Link>只要再搭一站，很適合接在後面。
          </p>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            ※ 阪急線不能用東京的地鐵票券，關西移動請另外用 IC 卡或關西的周遊券。
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">TOOTH TOOTH 西宮花園店 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 需要訂位嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                座位有70多席，平常時段直接走進去通常都有位子。<strong>週末的午餐時間與下午茶時段</strong>比較容易要等，想省時間的話避開12:00〜14:00，或是等到下午3點以後再過來會順很多。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 蕎麥薄餅（galette）是什麼？跟可麗餅差在哪？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>galette 是用蕎麥粉煎的鹹口味薄餅</strong>，法國布列塔尼的傳統吃法，通常包火腿、蛋和起司；而可麗餅是用小麥粉、走甜的路線。這間兩種都有，想吃正餐點前者、想吃甜點點後者。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 不會日文可以點餐嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                菜單有照片，用指的就可以。這裡是購物中心裡的店，店員也習慣應付各種客人，不用太緊張。真的擔心的話，先用手機把想吃的品項拍下來再進去最快。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 只吃甜點可以嗎？一定要點正餐嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                只點甜點跟飲料完全沒問題，這裡本來就是甜點店起家的。反過來說，只吃鹹的蕎麥薄餅當一頓正餐也可以，<strong>怎麼組合都自由</strong>。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 值得專程從大阪／神戶跑一趟嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                老實說，<strong>如果行程只有三、四天，不建議專程來</strong>。這裡最適合的用法是「順路」——例如要去甲子園、夙川，或是大阪與神戶之間移動時停一站吃頓飯。真的很喜歡 TOOTH TOOTH 的話，神戶三宮也有本店，行程上會更好排。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">用餐小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 週末的<strong>12:00〜14:00最擠</strong>，下午3點以後最舒服</li>
            <li>✅ 一個人吃鹹的蕎麥薄餅份量剛好，<strong>想再吃甜點的話兩個人分著點</strong>比較不會撐</li>
            <li>✅ 甜點的水果<strong>跟著季節換</strong>，想吃特定水果的話先看官網當期品項</li>
            <li>✅ 全室內、有電梯與廁所，<strong>下雨天或帶長輩小孩</strong>時很好安排</li>
            <li>✅ 打烊是20:00，L.O.比打烊早，<strong>晚餐時段來的話要抓早一點</strong></li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            不是那種一定要打卡的名店，但<strong>「想好好坐下來吃一頓」</strong>的時候，這種店最珍貴🍽️<br />
            鹹的甜的都有、還能久坐，旅行中間放一個這樣的空檔，後面的行程會走得比較輕鬆。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「抬頭看到天花板那一排金色球燈的時候，整個被療癒到了✨」</p>
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

        <RelatedArticles slug="nishinomiya-gardens" exclude={["/kobe-cafe", "/shukugawa", "/steak-zen"]} />

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
