import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const PAGE_URL = "https://www.japantrippicks.com/hokkaido";
const OG_IMAGE = "/hokkaido/farm-1.jpg";

export const metadata: Metadata = {
  title: "北海道自由行必去景點10選｜札幌・小樽・富良野完整攻略【2025】",
  description:
    "北海道自由行完整指南！小樽音樂盒堂、美瑛青池、富良野薰衣草花田、札幌迴轉壽司、成吉思汗烤肉…台灣香港旅客最推薦的10個景點＋美食＋3天行程一次整理。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "北海道自由行必去景點10選｜札幌・小樽・富良野完整攻略【2025】",
    description: "小樽・美瑛・富良野・札幌の必去景點＋美食＋3天行程。台灣香港旅客的北海道完整自由行指南。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "北海道富良野薰衣草花田" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "北海道自由行必去景點10選｜札幌・小樽・富良野",
    description: "小樽音樂盒・青池・薰衣草・迴轉壽司…北海道完整攻略！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "北海道自由行必去景點10選｜札幌・小樽・富良野完整攻略【2025】",
  description: "小樽・美瑛・富良野・札幌の必去景點＋美食＋3天行程。台灣香港旅客的北海道完整自由行指南。",
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
    { "@type": "ListItem", position: 2, name: "景點推薦", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 3, name: "北海道自由行", item: PAGE_URL },
  ],
};

const spots = [
  {
    id: "orgel",
    icon: "🎵",
    name: "小樽オルゴール堂",
    nameZh: "小樽音樂盒堂",
    area: "小樽",
    type: "景點・購物",
    images: ["/hokkaido/orgel-1.jpg", "/hokkaido/orgel-2.jpg"],
    desc: "位於小樽運河附近，店內擺滿各式各樣的音樂盒，從可愛風格到高級設計都有。氣氛超級療癒，每一個都很想帶回家✨",
    points: ["氣氛超療癒，很適合拍照", "情侶、女生旅行必訪", "很適合當伴手禮"],
    tags: ["🎁 伴手禮", "📸 拍照打卡", "💑 情侶推薦"],
    url: "https://www.otaru-orgel.co.jp/",
    urlLabel: "官方網站",
  },
  {
    id: "letao",
    icon: "🍰",
    name: "小樽洋菓子舗ルタオ本店",
    nameZh: "ルタオ甜點本店",
    area: "小樽",
    type: "甜點",
    images: ["/hokkaido/letao-1.jpg"],
    desc: "來到小樽一定不能錯過的甜點店！最有名的是「雙層起司蛋糕」，口感濃郁但不膩。北海道新鮮乳製品製作，味道真的很特別🍰",
    points: ["北海道代表甜點・雙層起司蛋糕", "店內可內用・也可外帶", "超適合當伴手禮"],
    tags: ["🧀 起司蛋糕", "🎁 伴手禮", "✨ 北海道限定"],
    url: "https://www.letao-brand.jp/shop/letao/",
    urlLabel: "官方網站",
  },
  {
    id: "aoi",
    icon: "💙",
    name: "青い池",
    nameZh: "美瑛青池",
    area: "美瑛",
    type: "自然景觀",
    images: ["/hokkaido/aoi-1.jpg"],
    desc: "以夢幻藍色聞名的絕美景點。天氣和季節不同，水色也會有所變化。站在池邊看著那片靜謐的藍，真的很難忘💙",
    points: ["四季景色不同，各有特色", "拍照超美・IG打卡必去", "適合安排半日行程"],
    tags: ["💙 夢幻藍色", "📸 IG打卡", "🌿 自然景觀"],
    url: "https://www.biei-hokkaido.jp/ja/shirogane-blue-pond",
    urlLabel: "美瑛町官網",
  },
  {
    id: "farm",
    icon: "💜",
    name: "ファーム富田",
    nameZh: "富田農場・薰衣草花田",
    area: "富良野",
    type: "自然景觀",
    images: ["/hokkaido/farm-1.jpg", "/hokkaido/farm-2.jpg", "/hokkaido/farm-3.jpg"],
    desc: "夏天必訪的夢幻花海！尤其是7月左右薰衣草盛開的季節，整片紫色花田非常壯觀。現場還有薰衣草冰淇淋可以吃💜",
    points: ["7月薰衣草季最壯觀・超推薦", "IG打卡景點・拍照必去", "有咖啡廳＆薰衣草冰淇淋"],
    tags: ["💜 薰衣草", "🌸 夏季必訪", "📸 IG打卡"],
    url: "https://www.farm-tomita.co.jp/",
    urlLabel: "官方網站",
  },
  {
    id: "beer",
    icon: "🍺",
    name: "サッポロビール園",
    nameZh: "札幌啤酒園・成吉思汗烤肉",
    area: "札幌",
    type: "餐廳",
    images: ["/hokkaido/sapporo-beer-1.jpg", "/hokkaido/sapporo-beer-2.jpg", "/hokkaido/sapporo-beer-3.jpg"],
    desc: "想吃成吉思汗烤羊肉就來這裡！北海道代表美食，搭配現釀札幌啤酒超級享受。氣氛很棒，適合多人一起來🍺",
    points: ["北海道代表料理・成吉思汗烤肉", "搭配現釀啤酒超享受", "適合團體・氣氛超好"],
    tags: ["🍖 成吉思汗", "🍺 啤酒", "👥 團體推薦"],
    url: "https://sapporo-bier-garten.jp/",
    urlLabel: "官方網站",
  },
  {
    id: "sushi",
    icon: "🍣",
    name: "なごやか亭",
    nameZh: "和洽亭迴轉壽司",
    area: "札幌",
    type: "餐廳",
    images: ["/hokkaido/sushi-1.jpg", "/hokkaido/sushi-2.jpg", "/hokkaido/sushi-3.jpg"],
    desc: "北海道必吃壽司之一！新鮮度高、份量大、價格合理，CP值超高。北海道的海鮮本來就新鮮，迴轉壽司也完全不輸專門店🍣",
    points: ["海鮮超新鮮・CP值極高", "排隊名店・值得等待", "價格親民・很適合旅遊"],
    tags: ["🍣 迴轉壽司", "🐟 新鮮海鮮", "💰 CP值高"],
    url: "http://www.mitsuboshi.net/nagoyakatei/",
    urlLabel: "官方網站",
  },
  {
    id: "kaisen",
    icon: "🦀",
    name: "庄坊番屋",
    nameZh: "庄坊番屋海鮮料理",
    area: "小樽",
    type: "餐廳",
    images: ["/hokkaido/kaisen-1.jpg", "/hokkaido/kaisen-2.jpg"],
    desc: "可以品嚐到當地新鮮海產的餐廳。北海道的螃蟹、海膽、鮭魚卵在這裡都吃得到，想吃道地北海道海鮮的人一定要來🦀",
    points: ["超新鮮海鮮・在地人氣名店", "螃蟹・海膽・鮭魚卵都有", "份量滿足・很值得"],
    tags: ["🦀 螃蟹", "🌊 海鮮料理", "🏆 在地推薦"],
    url: "http://www.shobobanya.jp/",
    urlLabel: "官方網站",
  },
];

const seasons = [
  { season: "春", emoji: "🌸", desc: "櫻花盛開＋氣候舒適，人潮相對少" },
  { season: "夏", emoji: "💜", desc: "薰衣草季！富良野花田最壯觀" },
  { season: "秋", emoji: "🍂", desc: "紅葉絕美，氣溫涼爽很舒服" },
  { season: "冬", emoji: "❄️", desc: "雪景＋雪祭，是最多人來的旺季" },
];

export default function HokkaidoPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">北海道自由行</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badges */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="bg-blue-100 text-blue-600 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">📍 景點</span>
          <span className="bg-purple-50 text-purple-600 border border-purple-200 text-xs font-semibold px-3 py-1 rounded-full">🗾 北海道</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✈️ 自由行</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-4">
          北海道自由行必去景點10選｜<br />札幌・小樽・富良野一次玩遍
        </h1>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            北海道是日本最受歡迎的旅遊地之一，擁有壯麗自然、四季分明的景色，以及豐富的美食文化。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            不論是第一次來日本，還是想深度旅行，北海道都非常適合✨
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇整理了「北海道必去景點＋美食＋行程」，讓你一次掌握北海道自由行重點！
          </p>
        </div>

        {/* H2: 景點 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">📍</span> 北海道必去景點推薦
        </h2>

        <div className="space-y-6 mb-10">
          {spots.map((spot, index) => (
            <section key={spot.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              {spot.images.length === 1 ? (
                <div className="relative w-full aspect-[4/3] bg-stone-100">
                  <Image src={spot.images[0]} alt={spot.nameZh} fill sizes="100vw" className="object-cover" priority={index === 0} />
                </div>
              ) : spot.images.length === 2 ? (
                <div className="grid grid-cols-2 gap-0.5">
                  {spot.images.map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] bg-stone-100">
                      <Image src={src} alt={spot.nameZh} fill sizes="50vw" className="object-cover" priority={index === 0 && i === 0} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-0.5">
                  {spot.images.map((src, i) => (
                    <div key={i} className="relative aspect-square bg-stone-100">
                      <Image src={src} alt={spot.nameZh} fill sizes="33vw" className="object-cover" priority={index === 0 && i === 0} />
                    </div>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{spot.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-stone-400">📍 {spot.area}</span>
                      <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">{spot.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{spot.desc}</p>

                <div className="space-y-1.5 mb-3">
                  {spot.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold text-xs mt-0.5">✔</span>
                      <span className="text-xs text-stone-600">{p}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {spot.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <a href={spot.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                  🔗 {spot.urlLabel}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* H2: 四季 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🗓️</span> 北海道四季旅遊推薦
        </h2>
        <div className="grid grid-cols-2 gap-3 mb-10">
          {seasons.map((s) => (
            <div key={s.season} className="bg-white rounded-2xl border border-stone-100 p-4 shadow-sm">
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="font-bold text-stone-800 text-sm mb-1">{s.season}</div>
              <p className="text-xs text-stone-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl px-4 py-3 mb-10 flex items-start gap-2">
          <span className="text-lg shrink-0">🐥</span>
          <p className="text-sm text-stone-600">「如果是第一次來，最推薦<strong>夏天（薰衣草）</strong>或<strong>冬天（雪祭）</strong>！」</p>
        </div>

        {/* H2: 行程 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🗺️</span> 北海道3天行程推薦
        </h2>
        <div className="space-y-3 mb-10">
          {[
            { day: "Day 1", area: "札幌", plan: "大通公園 → 時計台 → 晚餐成吉思汗烤肉＋啤酒🍺" },
            { day: "Day 2", area: "小樽", plan: "小樽運河 → 音樂盒堂 → ルタオ甜點 → 海鮮午餐🦀" },
            { day: "Day 3", area: "富良野・美瑛", plan: "青池 → 富田農場薰衣草花田 → 回札幌💜" },
          ].map((d) => (
            <div key={d.day} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 flex items-start gap-4">
              <div className="bg-blue-400 text-white text-xs font-black px-2 py-1 rounded-lg shrink-0">{d.day}</div>
              <div>
                <div className="text-xs text-stone-400 mb-0.5">📍 {d.area}</div>
                <p className="text-sm text-stone-700">{d.plan}</p>
              </div>
            </div>
          ))}
        </div>

        {/* H2: 旅行小提醒 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">💡</span> 旅行小建議
        </h2>
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <div className="space-y-2">
            {[
              "建議安排3天以上，才能玩到小樽＋富良野",
              "夏天薰衣草季（7月）和冬天雪祭（2月）是旺季，建議提早訂住宿",
              "租車自駕更自由，可以去更多地方",
              "來日本前記得準備好網路，Google Map找景點超方便📱",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold text-sm shrink-0">✔</span>
                <span className="text-sm text-stone-600">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 延伸閱讀 */}
        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-sm font-black text-stone-700 mb-3">📚 延伸閱讀</h2>
          <div className="space-y-2">
            <Link href="/hakone" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
              🚃 箱根一日遊推薦｜從東京搭浪漫特快出發
            </Link>
            <Link href="/spot" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
              🌿 東京野餐推薦｜新宿御苑・代代木公園
            </Link>
            <Link href="/ramen" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
              🍜 日本拉麵推薦｜東京・大阪必吃3選
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-6">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            北海道不只是自然景色壯觀，美食、甜點、購物也都非常豐富✨<br />
            如果是第一次來日本，非常推薦從北海道開始你的自由行！
          </p>
          <div className="flex items-start gap-3 bg-white border border-yellow-100 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「北海道真的每個季節都美！最推薦夏天去富良野看薰衣草✨」</p>
            </div>
          </div>
        </div>

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
