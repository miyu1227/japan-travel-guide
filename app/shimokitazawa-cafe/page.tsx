import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/shimokitazawa-cafe";
const OG_IMAGE = "/shimokitazawa-cafe/vegan-1.jpg";

export const metadata: Metadata = {
  title: "下北澤咖啡推薦｜TOKYO VEGAN BAKES・La Piña・Pati coffee 3選【實際造訪】",
  description:
    "下北澤必去的人氣咖啡廳推薦：純素烘焙「TOKYO VEGAN BAKES」、手工起司蛋糕「La Piña」、自家焙煎＆自家製派「Pati coffee&plants」。附交通方式・推薦菜單・價格。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "下北澤咖啡推薦｜TOKYO VEGAN BAKES・La Piña・Pati coffee 3選",
    description: "下北澤必去咖啡廳：純素烘焙・手工起司蛋糕・自家焙煎咖啡＆派。附交通・菜單・推薦。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "下北澤咖啡推薦・TOKYO VEGAN BAKES" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "下北澤咖啡推薦｜TOKYO VEGAN BAKES・La Piña・Pati coffee",
    description: "下北澤必去3間人氣咖啡廳！純素烘焙・起司蛋糕・自家焙煎咖啡。",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "下北澤咖啡推薦｜TOKYO VEGAN BAKES・La Piña・Pati coffee 3選【實際造訪】",
  description: "下北澤必去咖啡廳：純素烘焙TOKYO VEGAN BAKES、手工起司蛋糕La Piña、自家焙煎Pati coffee&plants。",
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
    { "@type": "ListItem", position: 2, name: "下北澤咖啡推薦", item: PAGE_URL },
  ],
};

const veganPhotos = [
  "/shimokitazawa-cafe/vegan-1.jpg",
  "/shimokitazawa-cafe/vegan-2.jpg",
  "/shimokitazawa-cafe/vegan-3.jpg",
  "/shimokitazawa-cafe/vegan-4.jpg",
];
const lapinaPhotos = ["/shimokitazawa-cafe/lapina-1.jpg"];
const patiPhotos = ["/shimokitazawa-cafe/pati-1.jpg", "/shimokitazawa-cafe/pati-2.jpg", "/shimokitazawa-cafe/pati-3.jpg"];

const relatedLinks = [
  { href: "/kobe-cafe", label: "☕ 神戶咖啡推薦｜フロインドリーブ＆異人館咖啡", desc: "教堂改建咖啡廳・北野異人館洋館咖啡" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵4選", desc: "濃厚魚介系つけ麺から家系まで" },
];

export default function ShimokitazawaCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">下北澤咖啡推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・下北澤</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          下北澤咖啡推薦｜VEGAN BAKES<br />・La Piña・Pati coffee☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">下北澤是東京最有個性的咖啡散步街區</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            下北澤是東京最受歡迎的文青散步區之一，除了古著和劇場，近年也聚集了許多風格獨特的<strong>咖啡廳</strong>☕ 街道巷弄裡藏著各種特色小店，非常適合邊走邊逛。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的三間店：100%純素烘焙<strong>「TOKYO VEGAN BAKES」</strong>、手工起司蛋糕<strong>「La Piña」</strong>，以及綠意滿滿的自家焙煎咖啡<strong>「Pati coffee&plants」</strong>——風格各異，都是下北澤必訪的人氣店✨
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">TOKYO VEGAN BAKES → 100%純素烘焙・35種以上</p>
                <p className="text-xs text-stone-500 leading-relaxed">下北線路街reload 2F、外帶專門、繽紛可愛的店面</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">La Piña → 手工起司蛋糕專門店・5種口味</p>
                <p className="text-xs text-stone-500 leading-relaxed">溫馨小店、壁畫裝飾、內用外帶皆可</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Pati coffee&plants → 自家焙煎咖啡・自家製派</p>
                <p className="text-xs text-stone-500 leading-relaxed">綠意滿滿的半戶外空間、可帶寵物</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">下北澤咖啡推薦・3選</h2>

        {/* Spot 1: TOKYO VEGAN BAKES */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {veganPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="TOKYO VEGAN BAKES - 下北澤咖啡推薦"
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">TOKYO VEGAN BAKES</h3>
                <span className="text-xs text-stone-400">東京純素烘焙</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於下北線路街「reload」2樓，是由兩間人氣純素烘焙品牌聯手打造的<strong>100%植物性</strong>烘焙店🌱 從麵團到調味料全部店內手作，使用日本國產素材，常時備有<strong>35種以上</strong>的麵包與甜點。店面以橘色為主調，繽紛可愛。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                就算不是素食者也會被圈粉！口感和一般麵包一樣好吃，完全感覺不到是Vegan🥐 招牌的<strong>海苔鹽麵包</strong>只要¥330，CP值超高。外帶後可以在reload的共用露台邊吃邊享受下北澤的氛圍☀️
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌱 100%純素", "🥐 35種以上", "💰 ¥330起", "📸 繽紛店面"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區北澤3-19-20 reload 2F</p>
              <p className="text-xs text-stone-600">🚃 小田急線・京王井之頭線「下北澤」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜18:00（週一・週二公休）</p>
              <p className="text-xs text-stone-600">💴 ¥330〜¥880</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">外帶專門店，可以在reload的露台用餐區享用（約30席）</p>
            </div>

            <a
              href="https://www.instagram.com/tokyoveganbakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 Instagram
            </a>
          </div>
        </section>

        {/* Spot 2: La Piña */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 gap-0.5">
            {lapinaPhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image
                  src={src}
                  alt="La Piña - 下北澤咖啡推薦"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">La Piña（ラ・ピーニャ）</h3>
                <span className="text-xs text-stone-400">手工起司蛋糕專門店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              藏在下北澤巷弄裡的<strong>手工起司蛋糕</strong>專門店🍰 店名「La Piña」在西班牙語中是「鳳梨」的意思，象徵著西洋文化中的「款待」之心。店內只有6個座位，牆上有美麗的花鳥壁畫，溫馨又有質感。
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                每天店內現做的起司蛋糕約有<strong>5種口味</strong>，包括經典原味、抹茶、季節限定款等🧀 口感濃郁綿密，甜度恰到好處。也很推薦搭配店內飲品，邊享受壁畫環繞的空間邊休息✨ 非常適合下北澤散步途中來一份甜點。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🧀 手工起司蛋糕", "🎨 壁畫空間", "🍵 抹茶口味推薦", "🚶 散步休息站"].map((t) => (
                <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區北澤3-34-4</p>
              <p className="text-xs text-stone-600">🚃 小田急線・京王井之頭線「下北澤」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 12:00〜20:00（不定休）</p>
              <p className="text-xs text-stone-600">💴 起司蛋糕 ¥500〜</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">座位只有6席，假日可能需要等候，建議平日造訪</p>
            </div>

            <a
              href="https://www.instagram.com/lapina_cheesecake_cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 Instagram
            </a>
          </div>
        </section>

        {/* Spot 3: Pati coffee&plants */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {patiPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="Pati coffee&plants - 下北澤咖啡推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Pati coffee&plants</h3>
                <span className="text-xs text-stone-400">自家焙煎咖啡＆自家製派</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於池之上・下北澤之間的<strong>綠意滿滿的咖啡廳</strong>🌿 結合自家焙煎咖啡、手工派與植物販售，店內像是走進溫室花園般的半戶外空間。咖啡從生豆到烘焙都自己來，派和司康也全部每天現做。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                被綠色植物包圍的空間讓人超放鬆，很適合散步途中來休息☕ 招牌的<strong>肉派</strong>（¥630）鹹香酥脆，搭配拿鐵是絕配。<strong>司康</strong>種類也很豐富，巧克力和伯爵茶無花果口味都很推薦！而且可以帶毛小孩入店🐶
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌿 綠意空間", "🥧 自家製派", "☕ 自家焙煎", "🐶 寵物友善"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區代澤4-34-13 Daizawa Club 101</p>
              <p className="text-xs text-stone-600">🚃 京王井之頭線「池ノ上」駅 徒歩約10分／「下北澤」駅 徒歩約12分</p>
              <p className="text-xs text-stone-600">⏰ 8:00〜18:00（週二公休）</p>
              <p className="text-xs text-stone-600">💴 派 ¥480〜¥630／飲品 ¥550〜¥700</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">早上8點就開門，很適合當作下北澤散步行程的第一站</p>
            </div>

            <a
              href="https://www.instagram.com/pati_coffee.plants/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 Instagram
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">下北澤咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 兩間店距離很近，可以安排同一天順遊</li>
            <li>✅ TOKYO VEGAN BAKES 週一週二公休，出發前先確認</li>
            <li>✅ 下北澤也有很多古著店，邊逛邊吃剛剛好👟</li>
            <li>✅ 下北線路街「reload」裡還有很多其他特色店，值得多花時間逛逛</li>
            <li>✅ 附近還有「下北沢ケージ」等新開發區域，散步範圍很廣</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            純素烘焙、手工起司蛋糕、綠意咖啡——三間風格完全不同的店✨<br />
            來下北澤散步的話，一定要安排咖啡行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「下北澤的咖啡廳都藏在巷弄裡，找到的那一刻特別開心☕」</p>
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
