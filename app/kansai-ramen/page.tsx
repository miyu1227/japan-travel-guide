import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const PAGE_URL = "https://www.japantrippicks.com/kansai-ramen";
const OG_IMAGE = "/kansai-ramen/tsujita-2.jpg";

export const metadata: Metadata = {
  title: "關西拉麵推薦｜大阪必吃濃厚魚介沾麵・つじ田 肥後橋【實際吃過】",
  description:
    "關西拉麵推薦！大阪肥後橋人氣名店「つじ田」的濃厚魚介系沾麵（つけ麺），加檸檬與黑七味變化風味。附地址・交通・價格・吃法教學，另整理關西拉麵的流派特色。台灣・香港旅客大阪自由行必收藏🍜",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "關西拉麵推薦｜大阪必吃濃厚魚介沾麵・つじ田 肥後橋",
    description: "大阪肥後橋名店つじ田的濃厚魚介沾麵，加檸檬變化風味。附關西拉麵流派解說。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "關西拉麵推薦・つじ田 肥後橋店的濃厚魚介沾麵" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "關西拉麵推薦｜大阪必吃濃厚魚介沾麵",
    description: "大阪肥後橋つじ田の濃厚魚介沾麵，加檸檬與黑七味變化風味🍜",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "關西拉麵推薦｜大阪必吃濃厚魚介沾麵・つじ田 肥後橋【實際吃過】",
  description: "關西（大阪）拉麵推薦。肥後橋名店つじ田的濃厚魚介系沾麵完整介紹，附交通・價格・吃法與關西拉麵流派說明。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-31T00:00:00+09:00",
  dateModified: "2026-07-31T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "關西拉麵推薦", item: PAGE_URL },
  ],
};

const shops = [
  {
    id: "tsujita",
    number: 1,
    name: "つじ田 肥後橋店",
    highlight: "濃厚魚介系沾麵・大阪人氣名店",
    url: "https://tsukemen-tsujita.com/shop/?id=0010030",
    recommend: "つけ麺（沾麵）",
    images: ["/kansai-ramen/tsujita-2.jpg", "/kansai-ramen/tsujita-1.jpg"],
    intro:
      "大阪肥後橋的人氣名店，以濃厚魚介系沾麵（つけ麺）聞名。沾醬以豚骨與大量柴魚、小魚乾熬煮而成，濃稠到會掛在麵上；麵條偏粗、口感非常有嚼勁，是能明顯感受到「麵本身好吃」的一碗。",
    reason:
      "最有趣的是<strong>三段式吃法</strong>——先原味吃，再擠上桌上的<strong>檸檬</strong>讓味道變清爽，最後撒<strong>黑七味</strong>增添辛香，一碗麵能吃出三種表情✨ 關西的拉麵大多走清爽路線，這種硬派的濃厚魚介沾麵在大阪反而少見，很值得專程排進行程。位置在肥後橋商辦區，中午上班族多、稍微避開12點前後會比較順。",
    basicInfo: {
      address: "大阪市西區江戶堀1-9-26",
      access: "大阪地下鐵四橋線「肥後橋」駅 徒歩約3分／京阪中之島線「渡邊橋」駅 徒歩約4分",
      price: "¥1,000〜¥1,500",
    },
    tags: ["🐟 濃厚魚介", "🍋 加檸檬變化", "🌶️ 黑七味", "⭐ 大阪必吃"],
  },
];

const kansaiStyles = [
  {
    name: "大阪：多元混戰型",
    desc: "大阪沒有單一的「大阪拉麵」流派，反而是各種系統混戰——濃厚魚介沾麵、雞白湯、醬油清湯、九州豚骨都有，是關西拉麵激戰區。",
  },
  {
    name: "京都：濃厚醬油系",
    desc: "京都拉麵意外地重口味，以背脂醬油、雞白湯（濃厚どろどろ系）為代表，跟「京都=清淡」的印象完全相反。",
  },
  {
    name: "和歌山：中華そば",
    desc: "和歌山的「中華そば」是豚骨醬油系，湯色偏深、味道濃郁，是關西少數擁有明確地域流派的拉麵。",
  },
  {
    name: "神戶：豚骨與中華系並存",
    desc: "神戶因為港口城市的背景，受九州豚骨與中華料理影響都很深，濃厚豚骨與清爽醬油系的店同時存在。",
  },
];

const relatedLinks = [
  { href: "/ramen", label: "🍜 東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
  { href: "/osaka-gourmet", label: "🍻 大阪美食推薦2選｜鐵板燒名店＆人氣居酒屋", desc: "鉄板屋な。＆酒場ビリー" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
];

export default function KansaiRamenArticle() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">關西拉麵推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍜 拉麵</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 關西・大阪</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際吃過</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          關西拉麵推薦｜大阪必吃<br />濃厚魚介沾麵・つじ田🍜
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-31</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">關西的拉麵，其實比想像中有趣</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            說到<strong>關西</strong>的美食，大家先想到的通常是章魚燒、大阪燒、串炸，<strong>拉麵</strong>常常被排到後面。但實際上大阪是全日本競爭最激烈的拉麵戰區之一，濃厚魚介、雞白湯、九州豚骨全部混戰在一起🍜
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這一頁整理我在關西實際吃過的拉麵店。目前先從大阪肥後橋的濃厚魚介沾麵名店<strong>「つじ田」</strong>開始，之後會陸續追加京都、神戶的店家（<strong>持續更新中</strong>）。
          </p>
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
            <p className="text-xs text-stone-600">
              🗼 找東京的拉麵嗎？請看 <Link href="/ramen" className="text-blue-600 underline underline-offset-2 font-semibold">東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系</Link>
            </p>
          </div>
        </section>

        {/* 關西拉麵流派 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">關西拉麵的地域特色</h2>
          <div className="space-y-3">
            {kansaiStyles.map((s) => (
              <div key={s.name} className="flex gap-3">
                <span className="text-red-400 font-black text-sm shrink-0">▸</span>
                <div>
                  <p className="text-sm font-bold text-stone-700">{s.name}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">關西拉麵推薦（持續更新中）</h2>

        {/* Shops */}
        <div className="space-y-8 mb-10">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              <div className={`grid ${shop.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                {shop.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={`${shop.name} - 關西拉麵推薦`}
                      fill
                      sizes={shop.images.length > 1 ? "50vw" : "100vw"}
                      className="object-cover"
                      {...(shop.number === 1 && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {shop.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{shop.name}</h3>
                    <p className="text-xs text-stone-400">{shop.highlight}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{shop.intro}</p>

                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: shop.reason }} />
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                  <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                  <p className="text-xs text-stone-600">📍 {shop.basicInfo.address}</p>
                  <p className="text-xs text-stone-600">🚃 {shop.basicInfo.access}</p>
                  <p className="text-xs text-stone-600">💴 {shop.basicInfo.price}</p>
                  <p className="text-xs text-red-600 font-semibold">💡 推薦：{shop.recommend}</p>
                </div>

                <a
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
                >
                  🔗 查看店家資訊
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* 沾麵吃法 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🍜 沾麵（つけ麺）的正確吃法</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>1️⃣ 先夾<strong>幾根麵條原味吃</strong>，感受麵本身的甜味與嚼勁</li>
            <li>2️⃣ 把麵條<strong>一口份量</strong>沾進濃湯（不要整碗倒下去，會太鹹）</li>
            <li>3️⃣ 吃到一半擠<strong>檸檬</strong>或加<strong>黑七味</strong>，讓味道換一個方向</li>
            <li>4️⃣ 最後跟店員說「<strong>スープ割りください</strong>」，會幫你把沾醬加高湯稀釋成可以喝完的湯</li>
            <li>5️⃣ 麵量（並・中・大）通常同價或加價很少，食量大的人記得先確認</li>
          </ul>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">關西吃拉麵小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 大阪的人氣店中午<strong>12:00〜13:00是上班族尖峰</strong>，稍微錯開比較不用排</li>
            <li>✅ 多數店採<strong>食券機（售票機）</strong>，先買餐券再入座，不會日文也不用擔心</li>
            <li>✅ 肥後橋・本町一帶是商辦區，<strong>週末部分店家會公休</strong>，出發前建議查官網</li>
            <li>✅ 想一次吃多間的話，大阪梅田・難波周邊拉麵店密度最高</li>
            <li>✅ 老店不少只收現金，建議隨身帶日幣紙鈔</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            來大阪除了粉物之外，也很推薦留一餐給拉麵✨<br />
            尤其是這種能自己調味、越吃越有變化的濃厚沾麵，吃完會很有成就感。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「沾麵吃到一半擠上檸檬，是我每次都會做的小儀式🍋」</p>
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
