import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/shodoshima";
const OG_IMAGE = "/shodoshima/olive-1.jpg";

export const metadata: Metadata = {
  title: "小豆島景點推薦6選｜橄欖公園・魔女宅急便・醬油✅實訪",
  description:
    "從神戶搭渡輪3.5小時直達小豆島。橄欖公園免費借魔法掃帚、二十四之瞳電影村懷舊營養午餐、手打烏龍麵、醬油霜淇淋。附船班・門票・營業時間。",
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
    title: "小豆島景點推薦6選｜橄欖公園・魔女宅急便・醬油村・手打烏龍麵",
    description: "從神戶搭渡輪就能到的瀨戶內海小島。橄欖公園免費借魔法掃帚、懷舊營養午餐、醬油霜淇淋。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "小豆島景點推薦・橄欖公園的希臘風車" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "小豆島景點推薦6選｜橄欖公園・魔女宅急便・醬油村",
    description: "從神戶搭渡輪3.5小時。橄欖公園免費借魔法掃帚、懷舊營養午餐、醬油霜淇淋🫒",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "小豆島景點推薦6選｜橄欖公園・魔女宅急便・醬油村・手打烏龍麵【實際造訪】",
  description:
    "小豆島完整攻略：神戶出發的小豆島渡輪、二十四之瞳電影村、手打烏龍麵三太郎、MINORI GELATO、道之驛小豆島橄欖公園、丸金醬油紀念館。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-09-04T00:00:00+09:00",
  dateModified: "2026-09-04T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "小豆島景點推薦6選", item: PAGE_URL },
  ],
};

const ferryPhotos = ["/shodoshima/ferry-1.jpg", "/shodoshima/ferry-2.jpg", "/shodoshima/ferry-3.jpg"];
const eigamuraPhotos = [
  "/shodoshima/eigamura-1.jpg",
  "/shodoshima/eigamura-2.jpg",
  "/shodoshima/eigamura-3.jpg",
  "/shodoshima/eigamura-4.jpg",
  "/shodoshima/eigamura-5.jpg",
];
const santaroPhotos = ["/shodoshima/santaro-1.jpg", "/shodoshima/santaro-2.jpg"];
const minoriPhotos = ["/shodoshima/minori-1.jpg", "/shodoshima/minori-2.jpg"];
const olivePhotos = ["/shodoshima/olive-1.jpg", "/shodoshima/olive-2.jpg", "/shodoshima/olive-3.jpg"];
const marukinPhotos = ["/shodoshima/marukin-1.jpg", "/shodoshima/marukin-2.jpg"];

const relatedLinks = [
  { href: "/kagawa", label: "🍜 香川美食・觀光推薦5選｜四國讚岐烏龍麵、水族館、金刀比羅宮", desc: "讚岐烏龍麵名店＆四國水族館＆金刀比羅宮" },
  { href: "/kochi", label: "🌊 高知觀光推薦3選｜仁淀藍秘境・鰹魚タタキ", desc: "夢幻仁淀藍＆炙烤鰹魚＆ひろめ市場" },
  { href: "/kobe-herb-garden", label: "🌿 神戶布引香草園｜纜車空中散步與夜景", desc: "從新神戶站搭纜車，10分鐘上山" },
];

const faqItems = [
  {
    q: "從台灣・香港怎麼去小豆島最順？",
    a: "小豆島沒有機場，一定要搭船。最好懂的兩種：①飛關西機場→神戶，搭小豆島渡輪約3小時25分〜4小時直達坂手港；②飛高松（或搭新幹線到岡山轉高松），從高松港搭船約1小時。想順便玩神戶・大阪就走神戶線，想只玩四國就走高松線。",
  },
  {
    q: "小豆島需要租車嗎？",
    a: "強烈建議租車或至少查好巴士。島上景點分散在不同海灣，橄欖公園、電影村、醬油村彼此開車都要20〜40分鐘。不開車的話有路線巴士，但班次不密，一定要先對好時刻表再排行程。",
  },
  {
    q: "一天玩得完嗎？",
    a: "六個點塞一天會很趕，尤其電影村在島的東南端、橄欖公園在南岸中段。建議住一晚，或是一天鎖定「橄欖公園＋草壁港吃烏龍麵與冰淇淋」，另一天走「醬油村＋電影村」。",
  },
  {
    q: "魔法掃帚要錢嗎？",
    a: "橄欖公園的魔法掃帚是免費出借，入園也免費。在希臘風車前跳起來拍照是小豆島最經典的一張，記得找人幫忙抓跳躍的瞬間。",
  },
  {
    q: "醬油霜淇淋是什麼味道？",
    a: "不會鹹。醬油的香氣像烤糰子的醬香，配上牛奶的甜，是那種「鹹甜交界」的味道。丸金醬油紀念館的物產館買得到，很多人專程為這支去。",
  },
  {
    q: "渡輪需要先訂位嗎？",
    a: "建議先在官網訂。網路購票有折扣，旺季與連假的班次也可能滿。單純步行上船不一定要訂，但帶車或想坐指定座位就一定要。",
  },
];

export default function ShodoshimaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">小豆島景點推薦6選</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🗾 景點（景點推介）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 香川・小豆島</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          小豆島景點推薦6選｜橄欖公園<br />魔女宅急便・醬油村・手打烏龍麵🫒
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-04</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">小豆島——瀨戶內海上的橄欖之島</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>小豆島</strong>（しょうどしま）位在香川縣、瀨戶內海上，是這片海域第二大的島🫒 1908年日本第一次成功種出橄欖就是在這裡，整座島現在還種著滿山的橄欖樹。除了橄欖，小豆島也是<strong>醬油</strong>與<strong>素麵</strong>的產地，島的東側甚至有一整區叫做「醬之鄉」，空氣裡都是釀造的香味。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次從<strong>神戶搭渡輪</strong>登島，實際走了六個地方：船上的讚岐檸檬烏龍麵、<strong>二十四之瞳電影村</strong>的懷舊營養午餐、草壁港的手打烏龍麵與義式冰淇淋（雪糕），還有真人版<strong>《魔女宅急便》</strong>拍攝地的<strong>橄欖公園</strong>與百年<strong>醬油紀念館</strong>✨ 一篇看完船班、門票與營業時間。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">小豆島渡輪（神戶↔坂手港）→ 登島的交通本身就是行程</p>
                <p className="text-xs text-stone-500 leading-relaxed">單程約3小時25分〜4小時、大人¥1,990起，船上有烏龍麵店</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">二十四之瞳電影村 → 昭和外景村・懷舊營養午餐</p>
                <p className="text-xs text-stone-500 leading-relaxed">木造校舍與海景、鋁製餐具的營養午餐套餐，島上的貓也很多</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">手打烏龍麵 三太郎 → 草壁港前的讚岐烏龍麵</p>
                <p className="text-xs text-stone-500 leading-relaxed">只開中午、週二與第一・三週三休，現打現煮</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">MINORI GELATO → 醬油・橄欖・素麵口味的義式冰淇淋</p>
                <p className="text-xs text-stone-500 leading-relaxed">和三太郎同在草壁港周邊，中午12點才開、週三四休</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">道之驛 小豆島橄欖公園 → 希臘風車・免費魔法掃帚</p>
                <p className="text-xs text-stone-500 leading-relaxed">入園免費、8:30〜17:00全年無休，小豆島最經典的一張照片</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">丸金醬油紀念館 → 百年釀造・醬油霜淇淋</p>
                <p className="text-xs text-stone-500 leading-relaxed">國家登錄有形文化財的合掌造建築，大人¥500</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">
            💡 六個點分散在島的不同海灣，<strong>建議租車</strong>。不開車的話一定要先查好路線巴士的時刻表。
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">小豆島景點推薦・6選</h2>

        {/* Spot 1: ジャンボフェリー */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {ferryPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="小豆島渡輪（ジャンボフェリー）- 小豆島景點推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">小豆島渡輪（神戶↔坂手港）</h3>
                <span className="text-xs text-stone-400">小豆島ジャンボフェリー</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              小豆島沒有機場，<strong>一定要搭船</strong>。這次選的是從<strong>神戶</strong>直達的渡輪，單程約<strong>3小時25分〜4小時</strong>🚢 我們搭的是深夜出發的班次，在漆黑的神戶港邊看著吊臂與貨櫃燈光上船，那個「要出海了」的感覺，本身就已經是旅程的一部分了。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>船上就有烏龍麵店</strong>，而且賣的是小豆島與香川的在地口味🍋 我們點了<strong>讚岐檸檬烏龍麵</strong>——整碗鋪滿檸檬片、湯頭清爽帶酸，中間還放一顆橄欖，是那種在陸地上很難遇到的組合。菜單上還有島芝麻烏龍麵、橄欖牛肉末咖哩烏龍麵，價位<strong>¥450〜¥690</strong>，比想像中便宜很多。座位也有好幾種：可以躺平的「のびのび席」、包廂式單人房、舒適斜躺座，三個多小時完全不難熬。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🚢 神戶直達", "🍜 船上有烏龍麵", "🍋 讚岐檸檬烏龍麵", "🛏️ 可躺平的座位", "💰 單程¥1,990起"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 船内うどん */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍜 船上烏龍麵的價目（實訪時拍到的菜單）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>讚岐檸檬烏龍麵</strong>（溫／冷）：¥450 — 整碗檸檬片，清爽解膩</li>
                <li><strong>島芝麻烏龍麵</strong>：¥450 — 用小豆島的芝麻油提香</li>
                <li><strong>橄欖牛肉末咖哩烏龍麵</strong>：¥690 — 橄欖牛100%，辣口</li>
                <li><strong>檸檬＋橄欖牛肉末咖哩</strong>：¥690／<strong>浮章魚燒烏龍麵</strong>：¥490</li>
                <li><strong>讚岐冷拉麵</strong>：¥450（以上為含稅價）</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">🚢 神戶乘船處 ↔ 小豆島・坂手港</p>
              <p className="text-xs text-stone-600">⏰ 單程約 3小時25分〜4小時（依班次不同）</p>
              <p className="text-xs text-stone-600">💴 大人單程 ¥1,990（網路購票 ¥1,890・另加燃油附加費）</p>
              <p className="text-xs text-stone-600">📅 平日 3班／週末假日 4班</p>
              <p className="text-xs text-stone-600">🪑 有「のびのび席」「單人包廂」「舒適斜躺席」等付費座位</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">同一家也有<strong>高松↔小豆島</strong>的航線。想順便玩神戶・大阪就走神戶線，只玩四國走高松線更快</p>
            </div>

            <a
              href="https://ferry.co.jp/home/kobe-shodoshima/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站（船班・訂票）
            </a>
          </div>
        </section>

        {/* Spot 2: 二十四の瞳映画村 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {eigamuraPhotos.slice(0, 3).map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="二十四之瞳電影村 - 小豆島景點推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            {eigamuraPhotos.slice(3, 5).map((src, i) => (
              <div key={i} className="relative aspect-[3/2] bg-stone-100">
                <Image src={src} alt="二十四之瞳電影村 - 小豆島景點推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">二十四之瞳電影村</h3>
                <span className="text-xs text-stone-400">二十四の瞳映画村</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              小豆島出身的作家<strong>壺井榮</strong>寫的小說《二十四之瞳》，講的是一位女老師與十二個孩子在戰爭年代的故事。這裡是<strong>1987年電影版的外景地</strong>，拍完之後整片場景被完整保留下來，變成一座面海的<strong>昭和村</strong>🏫 木造校舍、老師的家、漁夫的家、茶屋、雜貨店，都還維持著當年的樣子。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                最有意思的是「<strong>キネマの庵</strong>」裡可以吃到的<strong>懷舊營養午餐套餐</strong>🍛 用<strong>鋁製餐具</strong>盛的咖哩湯、撒滿砂糖的炸麵包、玻璃瓶裝牛奶，再加一杯果凍——這是日本人小學時代的午餐記憶，就算沒有那段回憶，坐在木造校舍裡吃也很有味道。村裡到處都是<strong>復古零食與雜貨</strong>（黃色的「フエキくん」漿糊娃娃周邊超好買），還有一支紅色的圓筒郵筒可以真的寄信📮 另外——這裡<strong>貓很多</strong>，而且都不怕人，貓派會走不動🐈
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏫 昭和木造校舍", "🍛 懷舊營養午餐", "📮 復古郵筒可寄信", "🧸 昭和雜貨好買", "🐈 島貓很多"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍛 營養午餐套餐（Caféシネマ倶楽部）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li>約 <strong>¥1,100</strong>，鋁製餐具盛裝</li>
                <li>內容：<strong>炸麵包＋咖哩湯＋瓶裝牛奶＋甜點</strong>（甜點會隨季節換，我們那天是青蘋果果凍）</li>
                <li>村內另有食堂與茶屋，也有竹籃便當（需預約）</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣小豆郡小豆島町田浦</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜17:00</p>
              <p className="text-xs text-stone-600">💴 入村費依季節調整：大人 ¥850〜¥1,000／兒童 ¥430〜¥500（7/21〜11/30 最高）</p>
              <p className="text-xs text-stone-600">🎬 村內電影院「松竹座」全天循環放映《二十四之瞳》</p>
              <p className="text-xs text-stone-600">👘 有絣和服租借體驗</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">位在島的<strong>東南端</strong>，從草壁港開車還要一段路，排行程時要留足移動時間</p>
            </div>

            <a
              href="https://www.24hitomi.or.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 3: 手打うどん 三太郎 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {santaroPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="手打烏龍麵 三太郎 - 小豆島美食推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">手打烏龍麵 三太郎</h3>
                <span className="text-xs text-stone-400">手打うどん 三太郎</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              小豆島屬於<strong>香川縣</strong>，也就是日本人口中的「<strong>烏龍麵縣</strong>」。這間就在<strong>草壁港正對面</strong>，是道地的手打讚岐烏龍麵店🍜 中午才開、下午2點就收，是那種「當地人吃完就走」的節奏。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                麵條白亮、邊角分明，咬下去是<strong>讚岐特有的那種彈</strong>。我們點了兩種：一碗是<strong>天婦羅烏龍麵</strong>——炸蝦、紫蘇葉天婦羅、海苔、炸麵衣全鋪上去，配蔥花與薑泥；另一碗是<strong>釜揚（湯泡）套餐</strong>，麵單獨泡在熱水裡端上來，旁邊附沾醬、天婦羅竹籃，還有一顆<strong>生鵪鶉蛋</strong>打在蔥花上——這是讚岐吃法，蛋和薑泥拌進沾醬裡，香氣完全不一樣🥚 對台灣・香港旅客來說，這是<strong>用島上的價格吃到本場讚岐烏龍麵</strong>的機會。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍜 本場讚岐手打", "🍤 天婦羅現炸", "🥚 生鵪鶉蛋沾醬", "⚓ 草壁港正對面", "🕚 只開中午"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣小豆郡小豆島町草壁本町1053-11（草壁港前）</p>
              <p className="text-xs text-stone-600">⏰ 10:30〜14:00</p>
              <p className="text-xs text-stone-600">🚫 公休：週二、第一・第三個週三</p>
              <p className="text-xs text-stone-600">📞 0879-82-4719</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600"><strong>下午2點就打烊</strong>，而且週二公休。想吃一定要把中午的時段留給它，別排在下午</p>
            </div>

            <a
              href="https://shodoshima.or.jp/sightseeing/detail.php?id=481&c=3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 店家資訊（小豆島觀光協會）
            </a>
          </div>
        </section>

        {/* Spot 4: MINORI GELATO */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {minoriPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="MINORI GELATO - 小豆島美食推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div>
                <h3 className="text-base font-black text-stone-800">MINORI GELATO</h3>
                <span className="text-xs text-stone-400">みのり ジェラート</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              吃完烏龍麵走幾步就到的<strong>義式冰淇淋（雪糕）店</strong>🍨 和三太郎一樣位在<strong>草壁本町</strong>，是那種木頭質感、燈光很暗、乾淨到不像離島的店。理念是「用島上當季的素材做冰淇淋」，所以口味會<strong>隨著季節換</strong>。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                口味表上會出現<strong>「醬油餅乾脆片」「橄欖」「素麵」</strong>——把小豆島三大名產全做成冰淇淋，這在別的地方吃不到🫒 一杯可以選兩種口味，我們拿了開心果配餅乾脆片、莓果配巧克力碎，都不是那種死甜的路線，奶味乾淨、素材味道很明顯。<strong>營業時間是中午12點才開、週三與週四公休</strong>，剛好接在三太郎的午餐後面，「烏龍麵→冰淇淋」是草壁港最順的一套。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍨 島上素材製作", "🫒 橄欖・醬油口味", "🍜 連素麵都做成冰淇淋", "📅 口味隨季節換", "🚶 走路可接三太郎"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣小豆郡小豆島町草壁本町1055-2</p>
              <p className="text-xs text-stone-600">🚌 巴士站「草壁港」徒步約7分／池田港開車約15分</p>
              <p className="text-xs text-stone-600">⏰ 12:00〜18:00（L.O. 17:45）</p>
              <p className="text-xs text-stone-600">🚫 公休：週三、週四</p>
              <p className="text-xs text-stone-600">📞 0879-62-8181</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">也有<strong>宅配禮盒</strong>（¥3,200〜）。想把醬油口味帶回去送人的話可以在官網看</p>
            </div>

            <a
              href="https://minorigelato-shop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 5: オリーブ公園 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {olivePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="道之驛 小豆島橄欖公園 - 小豆島景點推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">5</div>
              <div>
                <h3 className="text-base font-black text-stone-800">道之驛 小豆島橄欖公園</h3>
                <span className="text-xs text-stone-400">道の駅 小豆島オリーブ公園</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              小豆島最有名的一張照片就在這裡📸 俯瞰瀨戶內海的小丘上立著一座<strong>白色希臘風車</strong>，四周是約<strong>2,000棵橄欖樹</strong>。這裡是<strong>真人版《魔女宅急便》</strong>的拍攝地，園內還保留著電影裡那間麵包店的外景。<strong>入園免費</strong>，是道之驛，所以停車、買伴手禮、上廁所都很方便。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>魔法掃帚免費出借</strong>🧹 拿著掃帚在風車前跳起來，就是那張全日本都在拍的「魔女起飛」照——建議先講好口令，連拍才抓得到跳躍的最高點。另外兩個必拍點：一是海景旁那個<strong>橄欖綠色的郵筒</strong>（真的可以投信，寄一張明信片給自己很浪漫💌），二是紀念1908年橄欖首次來到小豆島的<strong>巨大立體書</strong>——書頁上刻著整段故事，中間還嵌著一面鏡子。園內也賣橄欖油、橄欖化妝品與橄欖霜淇淋，伴手禮（手信）一次買齊。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🧹 魔法掃帚免費借", "🎬 魔女宅急便拍攝地", "💌 橄欖綠郵筒", "📖 巨大立體書", "🆓 入園免費"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣小豆郡小豆島町西村甲1941-1</p>
              <p className="text-xs text-stone-600">⏰ 8:30〜17:00（全年無休）</p>
              <p className="text-xs text-stone-600">💴 入園免費・魔法掃帚免費出借</p>
              <p className="text-xs text-stone-600">📞 0879-82-2200</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">風車在<strong>小丘上</strong>，要走一段坡。想拍到藍天配白風車的話，晴天的上午光線最好☀️</p>
            </div>

            <a
              href="https://www.olive-pk.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 6: マルキン醤油記念館 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {marukinPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="丸金醬油紀念館 - 小豆島景點推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">6</div>
              <div>
                <h3 className="text-base font-black text-stone-800">丸金醬油紀念館</h3>
                <span className="text-xs text-stone-400">マルキン醤油記念館</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              小豆島東側的<strong>苗羽</strong>一帶被稱為「<strong>醬之鄉</strong>」，是日本重要的醬油產地之一，整條路上都是老釀造廠與巨大的<strong>杉木桶</strong>🪵 這座紀念館用的是<strong>國家登錄有形文化財</strong>的合掌造建築，裡面用明治時代的工具與展板講醬油怎麼釀出來，也有壓榨醪的體驗。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                來這裡有一半的人是為了旁邊物產館的<strong>醬油霜淇淋</strong>🍦 用天然釀造的「生醬油」做的，<strong>完全不鹹</strong>——醬油的香氣像烤糰子的醬香，配上牛奶的甜，是鹹甜交界的那種味道，吃過就會記得。館前立著兩個<strong>刻著丸金商標的大木桶</strong>，是很好認的拍照點。展館本身也很值得走一圈：知道醬油要在木桶裡靜靜發酵一年以上之後，再去吃島上的素麵和烏龍麵，感覺會不太一樣。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍦 醬油霜淇淋", "🏛️ 國家登錄有形文化財", "🪵 巨大杉木桶", "🧪 有壓榨體驗", "🎁 醬油伴手禮"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣小豆郡小豆島町苗羽甲1850</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜16:00（夏季・秋季部分期間延長至16:30）</p>
              <p className="text-xs text-stone-600">💴 大人（國中以上）¥500／小學生 ¥250／幼兒免費</p>
              <p className="text-xs text-stone-600">🚫 不定休（出發前請先查官網的休館日）</p>
              <p className="text-xs text-stone-600">📞 0879-82-0047（9:00〜17:00）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">霜淇淋在<strong>旁邊的物產館</strong>賣，不用買門票也能吃得到🍦</p>
            </div>

            <a
              href="https://marukin.moritakk.com/kinenkan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">小豆島旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>強烈建議租車</strong>。景點分散在不同海灣，開車20〜40分鐘是常態，路線巴士班次不密</li>
            <li>✅ 想一天走完六個點會很趕。<strong>住一晚</strong>比較舒服，或分成「橄欖公園＋草壁港」與「醬之鄉＋電影村」兩天</li>
            <li>✅ 依地理位置串起來最順：<strong>坂手港 → 醬油紀念館（苗羽）→ 草壁港（烏龍麵＋冰淇淋）→ 電影村（田浦）→ 橄欖公園（西村）</strong></li>
            <li>✅ <strong>三太郎下午2點打烊、MINORI中午12點才開</strong>，草壁港這兩間的時間要對好</li>
            <li>✅ 三太郎週二休、MINORI週三四休——<strong>週三去的話兩間都吃不到</strong>，要特別注意</li>
            <li>✅ 橄欖公園的<strong>魔法掃帚免費</strong>，跳躍照建議用連拍模式</li>
            <li>✅ 伴手禮（手信）主打橄欖油、醬油、素麵，橄欖公園與醬油紀念館都能一次買齊🎁</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            從神戶上船、在海上睡一覺就到了另一個世界——橄欖樹、木桶醬油、昭和校舍與一堆貓✨<br />
            小豆島不大，但是那種「慢下來才好玩」的島，值得留一整天以上。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「醬油口味的霜淇淋跟冰淇淋，是只有在這座島才吃得到的味道🍦」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

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

        <RelatedArticles slug="shodoshima" exclude={["/kagawa", "/kochi", "/kobe-herb-garden"]} />

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
