import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/ramen";
const OG_IMAGE = "/ramen/tsujita-1.jpg";

export const metadata: Metadata = {
  title: "日本拉麵推薦｜東京・大阪必吃拉麵3選【實際吃過】",
  description:
    "整理3間實際吃過的日本拉麵推薦，包含大阪濃厚魚介つけ麺、東京排隊名店和利道、全國連鎖家系拉麵町田商店。來東京或大阪旅遊必吃！附地址・交通・推薦菜單。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "日本拉麵推薦｜東京・大阪必吃拉麵3選【實際吃過】",
    description: "整理3間實際吃過的日本拉麵推薦。大阪魚介つけ麺・東京排隊名店・全國連鎖家系拉麵。附地址・交通。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "日本拉麵推薦" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "日本拉麵推薦｜東京・大阪必吃拉麵3選",
    description: "大阪魚介つけ麺・東京排隊名店・家系拉麵。實際吃過的3間推薦！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "日本拉麵推薦｜東京・大阪必吃拉麵3選【實際吃過】",
  description: "整理3間實際吃過的日本拉麵推薦，包含大阪濃厚魚介つけ麺、東京排隊名店、全國連鎖家系拉麵。",
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
    { "@type": "ListItem", position: 2, name: "拉麵推薦", item: PAGE_URL },
  ],
};

const shops = [
  {
    id: "tsujita",
    number: 1,
    name: "つじ田 肥後橋店",
    highlight: "濃厚魚介系つけ麺",
    url: "https://tsukemen-tsujita.com/shop/?id=0010030",
    tag: "大阪",
    recommend: "つけ麺",
    images: ["/ramen/tsujita-2.jpg", "/ramen/tsujita-1.jpg"],
    intro: "大阪肥後橋人氣名店，以濃厚魚介系つけ麺聞名。湯頭濃郁帶有魚介香氣，麵條偏粗，口感很有嚼勁。",
    reason: "吃到一半加上檸檬或黑七味，味道會有不同變化，非常有特色✨ 很適合喜歡濃郁湯頭的旅客，是大阪拉麵中少見的高品質つけ麺。",
    basicInfo: {
      address: "大阪市西区江戸堀1-9-26",
      access: "地下鉄四つ橋線「肥後橋」駅 徒歩約3分",
      price: "¥1,000〜¥1,500",
    },
    tags: ["🐟 魚介系", "🍋 可加檸檬", "⭐ 大阪必吃"],
  },
  {
    id: "warido",
    number: 2,
    name: "和利道",
    highlight: "東京排隊名店・濃厚魚介",
    url: "https://www.hotpepper.jp/strJ000815400/",
    tag: "東京",
    recommend: "つけ麺",
    images: ["/ramen/warido.jpg"],
    intro: "東京人氣極高的排隊拉麵店，以濃厚魚介系湯頭聞名。味道偏重但非常香濃，令人印象深刻。",
    reason: "很多人專程來吃，常常需要排隊，但真的很值得🔥 如果你來東京旅遊想吃拉麵，這間是非常推薦的選擇之一。建議平日早點去避開人潮。",
    basicInfo: {
      address: "東京都目黒区目黒周辺",
      access: "JR・東急「目黒」駅 徒歩約10分",
      price: "¥1,100〜¥1,600",
    },
    tags: ["🔥 排隊名店", "🐟 濃厚魚介", "⭐ 東京必吃"],
  },
  {
    id: "machida",
    number: 3,
    name: "町田商店",
    highlight: "家系拉麵・全國連鎖",
    url: "https://www.machidashoten.com/menu",
    tag: "全國",
    recommend: "豚骨醬油拉麵",
    images: ["/ramen/machida.jpg"],
    intro: "日本超有名的連鎖家系拉麵，特色是濃厚豚骨醬油湯頭，搭配海苔和白飯完美絕配！",
    reason: "可以選擇麵硬度、湯頭濃度、油量，自由度很高，非常適合第一次體驗日本拉麵的旅客👍 日本各地都有分店，隨時都能去。",
    basicInfo: {
      address: "日本各地（全國連鎖）",
      access: "各地都有，可用Google Map搜尋最近分店",
      price: "¥800〜¥1,200",
    },
    tags: ["🐷 豚骨醬油", "🏪 全國連鎖", "👶 初次挑戰OK"],
  },
];

const ramenTypes = [
  { name: "つけ麺", desc: "麵和湯分開，把麵沾著濃湯吃。湯頭通常很濃郁，非常有特色。" },
  { name: "家系拉麵", desc: "發源自橫濱的濃厚豚骨醬油系拉麵，配料通常有海苔、菠菜、叉燒。" },
  { name: "魚介系", desc: "使用魚貝類熬製的湯底，帶有海鮮香氣，味道深厚。" },
];

const relatedLinks = [
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩3間人氣店" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "美術館・足湯・神社的完美行程" },
];

export default function RamenArticle() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">拉麵推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍜 拉麵</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・大阪</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際吃過</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          日本拉麵推薦｜東京・大阪<br />必吃拉麵3選🍜
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2025年</p>

        {/* Why ramen */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">來日本一定要吃拉麵！</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            來日本旅遊，<strong>日本拉麵</strong>絕對是必吃清單的第一名🍜 不同地區有不同風格，東京、大阪、福岡……每個地方的拉麵都有自己的個性。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次整理了3間我實際吃過的店，包含大阪的濃郁魚介つけ麺、東京的排隊名店，以及在日本各地都找得到的家系拉麵。每一間都有自己的魅力，請按照行程選擇！
          </p>
        </section>

        {/* H2: 拉麵種類 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">拉麵種類簡單說明</h2>
          <div className="space-y-3">
            {ramenTypes.map((type) => (
              <div key={type.name} className="flex gap-3">
                <span className="text-red-400 font-black text-sm shrink-0">▸</span>
                <div>
                  <p className="text-sm font-bold text-stone-700">{type.name}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">日本拉麵推薦・3間必吃</h2>

        {/* Shops */}
        <div className="space-y-8 mb-10">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className={`grid ${shop.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                {shop.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={`${shop.name} - 日本拉麵推薦`}
                      fill
                      sizes={shop.images.length > 1 ? "50vw" : "100vw"}
                      className="object-cover"
                      {...(shop.number === 1 && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
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

                {/* 介紹 */}
                <p className="text-sm text-stone-600 leading-relaxed mb-3">{shop.intro}</p>

                {/* 推薦理由 */}
                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{shop.reason}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                {/* 基本資訊 */}
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

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 熱門店通常需要排隊，建議平日早點去</li>
            <li>✅ つけ麺可以選麵量（並・中・大），通常同價</li>
            <li>✅ 家系拉麵可以選麵硬度・湯頭濃淡・油量</li>
            <li>✅ 吃完可以加湯（割りスープ），味道會變溫和</li>
            <li>✅ 不少店只收現金，建議帶日幣備用</li>
          </ul>
        </section>

        {/* ぽやぴよ總結 */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            這3間各有特色✨ 大阪的濃郁魚介つけ麺、東京的排隊名店、以及全國都找得到的家系拉麵——<br />
            來日本旅遊的話，一定要安排一餐專程去吃日本拉麵！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「日本拉麵真的每一間都有自己的個性，吃完一碗還想再來一碗🍜」</p>
            </div>
          </div>
        </div>

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
