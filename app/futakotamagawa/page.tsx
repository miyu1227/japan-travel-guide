import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/futakotamagawa";
const OG_IMAGE = "/futakotamagawa/steaman-1.jpg";

export const metadata: Metadata = {
  title: "二子玉川美食推薦3選｜東京必吃中華・甜點・韓國料理【實際造訪】",
  description:
    "二子玉川美食推薦3選！蒸籠中華「STEAMAN」、蘋果派名店「GRANNY SMITH」、韓式屋台「ぶたこたまがわ」。東京近郊散步美食完整介紹，附交通・菜單・價格。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "二子玉川美食推薦3選｜東京必吃中華・甜點・韓國料理",
    description: "二子玉川必吃美食3選！蒸籠中華・蘋果派・韓式屋台。附交通・菜單・推薦。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "二子玉川美食推薦" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "二子玉川美食推薦3選｜東京必吃中華・甜點・韓國料理",
    description: "二子玉川必吃3間人氣美食！蒸籠中華・蘋果派・韓式屋台。",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "二子玉川美食推薦3選｜東京必吃中華・甜點・韓國料理【實際造訪】",
  description: "二子玉川美食推薦3選：蒸籠中華STEAMAN、蘋果派GRANNY SMITH、韓式屋台ぶたこたまがわ。",
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
    { "@type": "ListItem", position: 2, name: "二子玉川美食推薦", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤咖啡廳推薦3選｜東京必去人氣美食", desc: "純素烘焙・起司蛋糕・自家焙煎咖啡" },
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵4選", desc: "濃厚魚介系つけ麺から家系まで" },
  { href: "/shin-okubo", label: "🍲 新大久保美食推薦｜韓國料理・咖啡・甜點", desc: "ナッコプセ鍋・韓系咖啡廳・ドバイ餅" },
];

export default function FutakotamagawaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">二子玉川美食推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・二子玉川</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          二子玉川美食推薦3選｜<br />東京必吃中華・甜點・韓國料理🍽️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">二子玉川——東京近郊的悠閒美食散步區</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>二子玉川</strong>位於東京世田谷區，是日本人心中的高級住宅區，擁有河岸公園、購物中心與許多特色餐廳🌿 從澀谷搭電車只要10分鐘，非常適合安排一個半天的散步美食行程。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦3間實際造訪過的人氣店：時尚蒸籠中華<strong>「STEAMAN」</strong>、蘋果派專門店<strong>「GRANNY SMITH」</strong>，以及韓國屋台風<strong>「ぶたこたまがわ」</strong>✨
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">STEAMAN → 蒸籠中華・小籠包・點心</p>
                <p className="text-xs text-stone-500 leading-relaxed">竹×霓虹的時尚空間、午餐CP值高</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">GRANNY SMITH → 蘋果派專門店</p>
                <p className="text-xs text-stone-500 leading-relaxed">玉川高島屋B1、4種以上口味、外帶也OK</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">ぶたこたまがわ → 韓國屋台風・燒肉＆小吃</p>
                <p className="text-xs text-stone-500 leading-relaxed">深夜營業、サムギョプサル＆起司年糕</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">二子玉川美食推薦・3選</h2>

        {/* Spot 1: STEAMAN */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/futakotamagawa/steaman-1.jpg" alt="中華ビストロ STEAMAN - 二子玉川美食推薦" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">中華ビストロ STEAMAN</h3>
                <span className="text-xs text-stone-400">Herbal Chinese STEAMAN</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以<strong>「蒸氣的力量」</strong>為理念，主打蒸籠料理的新派中華餐廳🥟 招牌是多種口味的<strong>小籠包</strong>（松露、蟹肉、烏龍茶等），搭配燒賣、魯肉飯等點心。竹材搭配霓虹燈的時尚空間，讓吃中華也變得很潮。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                午餐套餐<strong>¥1,500〜¥2,000</strong>就能吃到精緻蒸籠中華，CP值超高💰 開放式廚房可以看到主廚現場料理，還有精釀啤酒和自然派紅酒。從二子玉川站走路5分鐘，非常適合當午餐或晚餐！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥟 蒸籠小籠包", "🍺 精釀啤酒", "💰 午餐CP值高", "✨ 時尚空間"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區玉川3-14-8 A*G二子玉川 2F</p>
              <p className="text-xs text-stone-600">🚃 東急田園都市線・大井町線「二子玉川」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 11:30〜15:00 / 17:30〜22:00（週二公休）</p>
              <p className="text-xs text-stone-600">💴 午餐 ¥1,500〜 / 晚餐 ¥5,000〜</p>
            </div>

            <a href="https://www.hotpepper.jp/strJ003648788/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 店家資訊
            </a>
          </div>
        </section>

        {/* Spot 2: GRANNY SMITH */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/futakotamagawa/granny-1.jpg" alt="GRANNY SMITH APPLE PIE & COFFEE - 二子玉川美食推薦" fill sizes="100vw" className="object-cover" />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">GRANNY SMITH APPLE PIE & COFFEE</h3>
                <span className="text-xs text-stone-400">蘋果派專門店・二子玉川店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              東京超人氣的<strong>蘋果派專門店</strong>🍎 二子玉川店位於玉川高島屋地下1樓，交通便利。常時備有4種以上口味，包括店舖限定的<strong>佛羅倫汀蘋果派</strong>、經典英式卡士達、荷蘭脆皮等。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                每一款蘋果派都用不同的蘋果品種和做法，口感完全不同🍰 可以內用搭配咖啡，也可以外帶當伴手禮。內用座位有18席，氛圍溫馨。從二子玉川站走路2分鐘，逛完街順便來一片剛剛好！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍎 蘋果派專門", "☕ 搭配咖啡", "🎁 外帶伴手禮OK", "🚶 車站徒步2分"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區玉川3-17-1 玉川高島屋S・C 本館 B1F</p>
              <p className="text-xs text-stone-600">🚃 東急「二子玉川」駅西口 徒歩約2分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜20:00（L.O. 19:30）</p>
              <p className="text-xs text-stone-600">💴 蘋果派 ¥500〜¥700</p>
            </div>

            <a href="https://grannysmith-pie.com/shop-list/futakotamagawa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 3: ぶたこたまがわ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/futakotamagawa/butako-1.jpg" alt="コリアンキッチン ぶたこたまがわ - 二子玉川美食推薦" fill sizes="100vw" className="object-cover" />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">コリアンキッチン ぶたこたまがわ</h3>
                <span className="text-xs text-stone-400">Korean Kitchen Butakotamagawa</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以韓國屋台風格打造的<strong>「新韓式居酒屋」</strong>🇰🇷 招牌是現場煎烤的<strong>サムギョプサル（五花肉）</strong>和超人氣的<strong>起司年糕</strong>。裝潢充滿韓式街頭風，拍照也很有氛圍。深夜也營業，適合晚上吃宵夜。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                午餐只要<strong>¥1,000〜¥1,500</strong>就能吃到韓式料理，晚上則可以搭配韓國燒酒和啤酒暢飲🍻 氣氛熱鬧輕鬆，很適合朋友聚餐。和STEAMAN在同一棟大樓2樓，可以安排在同一天！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🇰🇷 韓式屋台風", "🥩 サムギョプサル", "🧀 起司年糕", "🌙 深夜營業"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區玉川3-14-8 A*G二子玉川 2F</p>
              <p className="text-xs text-stone-600">🚃 東急「二子玉川」駅 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 11:30〜翌3:00（週日・祝日〜23:00）</p>
              <p className="text-xs text-stone-600">💴 午餐 ¥1,000〜 / 晚餐 ¥3,000〜</p>
            </div>

            <a href="https://www.hotpepper.jp/strJ003559141/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 店家資訊
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">二子玉川美食散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從澀谷搭東急田園都市線只要10分鐘，交通方便</li>
            <li>✅ STEAMAN和ぶたこたまがわ在同一棟大樓，可以排同一天</li>
            <li>✅ GRANNY SMITH在高島屋地下，逛百貨順便吃蘋果派</li>
            <li>✅ 二子玉川公園就在附近，吃完可以散步走走🌿</li>
            <li>✅ 週末人多，建議平日午餐時段前往比較悠閒</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            蒸籠中華、蘋果派、韓式屋台——三種完全不同風格的美食✨<br />
            二子玉川是個很適合慢慢逛、慢慢吃的東京近郊小寶地！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「二子玉川離澀谷超近，卻有完全不同的悠閒氛圍，美食也很厲害🍽️」</p>
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
