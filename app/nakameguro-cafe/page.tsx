import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/nakameguro-cafe";
const OG_IMAGE = "/nakameguro-cafe/starbucks-1.jpg";

export const metadata: Metadata = {
  title: "中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊・隈研吾建築【實際造訪】",
  description:
    "中目黑咖啡廳推薦！世界6間之一的「STARBUCKS RESERVE ROASTERY TOKYO」星巴克臻選東京烘焙工坊，隈研吾設計・目黑川旁賞櫻聖地。4層樓咖啡主題樂園完整介紹，附交通・營業時間・樓層特色。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊・隈研吾建築",
    description: "世界6間之一的星巴克臻選！中目黑必去人氣咖啡廳，隈研吾建築・目黑川賞櫻。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "中目黑咖啡廳推薦・星巴克臻選東京烘焙工坊" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊",
    description: "世界6間之一的星巴克臻選！隈研吾建築・目黑川賞櫻聖地☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊・隈研吾建築【實際造訪】",
  description: "中目黑必去咖啡廳「STARBUCKS RESERVE ROASTERY TOKYO」完整介紹。隈研吾設計、目黑川旁賞櫻聖地。",
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
    { "@type": "ListItem", position: 2, name: "中目黑咖啡廳推薦", item: PAGE_URL },
  ],
};

const photos = [
  "/nakameguro-cafe/starbucks-1.jpg",
  "/nakameguro-cafe/starbucks-2.jpg",
  "/nakameguro-cafe/starbucks-3.jpg",
  "/nakameguro-cafe/starbucks-4.jpg",
];

const relatedLinks = [
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤咖啡廳推薦3選｜東京必去人氣美食", desc: "純素烘焙・起司蛋糕・自家焙煎咖啡" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
];

export default function NakameguroCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">中目黑咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・中目黑</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          中目黑咖啡廳推薦｜星巴克<br />臻選東京烘焙工坊・隈研吾建築☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">中目黑——東京最有氛圍的咖啡散步區</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>中目黑</strong>是東京最受歡迎的文青散步區之一，沿著<strong>目黑川</strong>延伸的街道充滿質感小店和特色咖啡廳☕ 春天兩岸800棵櫻花盛開的景象更是東京最著名的賞櫻景點之一🌸
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的是中目黑的超級地標<strong>「STARBUCKS RESERVE ROASTERY TOKYO」</strong>——全世界只有6間的星巴克臻選烘焙工坊之一，由日本建築大師<strong>隈研吾</strong>操刀設計，是每個來東京旅遊的人都必訪的咖啡聖地✨
          </p>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">中目黑咖啡廳推薦（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="STARBUCKS RESERVE ROASTERY TOKYO - 中目黑咖啡廳推薦"
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">STARBUCKS RESERVE® ROASTERY TOKYO</h3>
                <span className="text-xs text-stone-400">星巴克臻選東京烘焙工坊</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              全世界只有6間的<strong>星巴克臻選烘焙工坊</strong>，由日本建築大師<strong>隈研吾</strong>設計，2019年開幕🏛️ 整棟4層樓建築本身就是一件藝術品，被譽為「咖啡與茶的主題樂園」。每一層樓都有不同的主題與體驗，是中目黑最具代表性的地標。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                就算不是星巴克迷也會被圈粉！建築本身超有魅力📸 4樓露台可以俯瞰目黑川，<strong>春天賞櫻</strong>絕佳位置🌸 這裡還能買到只有東京店才有的<strong>限定商品</strong>和周邊，是最棒的伴手禮選擇！每層樓都有獨特體驗，建議慢慢逛約1〜2小時。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏛️ 隈研吾設計", "🌸 目黑川賞櫻", "🌍 全球6間之一", "🎁 限定商品", "📸 IG拍照聖地"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 樓層特色 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🏢 樓層特色</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>1F 咖啡吧</strong>：臻選咖啡・多種沖煮法・Princi烘焙坊現烤麵包</li>
                <li><strong>2F TEAVANA茶館</strong>：手工磁磚裝飾・季節限定茶飲</li>
                <li><strong>3F ARRIVIAMO酒吧</strong>：濃縮咖啡馬丁尼・俯瞰目黑川</li>
                <li><strong>4F AMU INSPIRATION LOUNGE</strong>：露台座位・最佳賞櫻位置</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都目黑區青葉台2-19-23</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線・東京メトロ日比谷線「中目黑」駅 徒歩約13分（沿目黑川）</p>
              <p className="text-xs text-stone-600">⏰ 7:00〜22:00（櫻花季 8:00〜21:30・不定休）</p>
              <p className="text-xs text-stone-600">💴 飲品 ¥600〜¥1,500／調酒 ¥1,200〜</p>
              <p className="text-xs text-stone-600">📞 03-6417-0202</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">櫻花季（3月下旬〜4月上旬）會採預約制入場，出發前請先查官網</p>
            </div>

            <a
              href="https://www.starbucks.co.jp/reserve/roastery/"
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
          <h2 className="text-base font-black text-stone-800 mb-3">中目黑咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從中目黑站沿著<strong>目黑川</strong>散步約13分鐘，路上有許多特色小店可以逛</li>
            <li>✅ 平日早上或傍晚比較不擠，週末午餐時段人最多</li>
            <li>✅ <strong>3月下旬〜4月上旬櫻花季</strong>會採預約制，強烈建議提前預約</li>
            <li>✅ 限定周邊商品適合當伴手禮，送給星巴克迷的朋友很適合🎁</li>
            <li>✅ 附近的中目黑・代官山區域也很好逛，可安排半日行程</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            光是建築本身就值得專程造訪，裡面的咖啡體驗更是超乎想像✨<br />
            來東京旅遊，中目黑的這間星巴克絕對要排進行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「全世界只有6間的星巴克臻選，來東京一定要來朝聖一次☕」</p>
            </div>
          </div>
        </div>

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
