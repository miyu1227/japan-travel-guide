import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/museum";
const OG_IMAGE = "/museum/nact-1.jpg";

export const metadata: Metadata = {
  title: "東京美術館推薦｜國立新美術館・根津美術館2選【實際造訪】",
  description:
    "東京旅遊必去的人氣美術館推薦：六本木「國立新美術館」與表參道「根津美術館」。建築美學・日本庭園・拍照景點完整介紹，附交通方式・門票・最佳造訪時間。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京美術館推薦｜國立新美術館・根津美術館2選",
    description: "六本木國立新美術館・表參道根津美術館。建築・庭園・拍照景點完整指南。附交通・門票・推薦時段。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京美術館推薦・國立新美術館" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京美術館推薦｜國立新美術館・根津美術館",
    description: "東京最值得去的2間美術館。建築美學・日本庭園・IG拍照聖地！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京美術館推薦｜國立新美術館・根津美術館2選【實際造訪】",
  description: "東京旅遊必去美術館：六本木國立新美術館、表參道根津美術館。建築・庭園・拍照景點。",
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
    { "@type": "ListItem", position: 2, name: "美術館推薦", item: PAGE_URL },
  ],
};

const nactPhotos = ["/museum/nact-1.jpg", "/museum/nact-2.jpg", "/museum/nact-3.jpg"];
const nezuPhotos = ["/museum/nezu-1.jpg", "/museum/nezu-2.jpg", "/museum/nezu-3.jpg"];

const relatedLinks = [
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩3間人氣店" },
];

export default function MuseumPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">美術館推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-purple-100 text-purple-700 border border-purple-300 text-xs font-semibold px-3 py-1 rounded-full">🎨 美術館</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京美術館推薦｜國立新美術館＆<br />根津美術館2選🎨
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">下雨天也能玩東京！美術館散步行程</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            來東京旅遊不只是逛街購物，<strong>東京美術館</strong>也是非常推薦的行程🎨 不管是建築迷、藝術愛好者，還是喜歡拍照的人都能找到喜歡的地方。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦兩間實際造訪過、最值得去的美術館：六本木的<strong>國立新美術館</strong>和表參道的<strong>根津美術館</strong>。一間是現代建築代表，一間有夢幻日本庭園——氛圍完全不同，可以依照行程選擇✨
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-purple-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">國立新美術館 → 現代建築・特展豐富</p>
                <p className="text-xs text-stone-500 leading-relaxed">六本木、玻璃曲面建築、館內咖啡廳超有名</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">根津美術館 → 日本庭園・東洋古美術</p>
                <p className="text-xs text-stone-500 leading-relaxed">表參道、隈研吾設計、靜謐和風氛圍</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京美術館推薦・2選</h2>

        {/* Spot 1: 國立新美術館 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {nactPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="國立新美術館 - 東京美術館推薦"
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
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">國立新美術館</h3>
                <span className="text-xs text-stone-400">The National Art Center, Tokyo</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於六本木的人氣美術館，由日本知名建築師<strong>黒川紀章</strong>設計。最大特色是巨大的玻璃曲面外牆，整棟建築就像一件藝術品✨ 沒有常設展，主要以企劃展、特展為主，每次去都能看到不同的展覽。
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-purple-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                就算不看展，光是進去拍照就值得了📸 館內挑高空間、玻璃光影，還有那個浮在空中的圓錐形咖啡廳「Salon de Thé ROND」是IG打卡熱點🍰 從六本木站走過去也很近。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["📸 IG拍照聖地", "🏛️ 建築美學", "🎨 特展豐富", "🚇 六本木徒步"].map((t) => (
                <span key={t} className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都港區六本木7-22-2</p>
              <p className="text-xs text-stone-600">🚇 東京メトロ千代田線「乃木坂」駅 徒歩約0分／日比谷線・大江戸線「六本木」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜18:00（週二休館）</p>
              <p className="text-xs text-stone-600">💴 入館免費（特展需另購票）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">入館本身免費，可以隨時進去欣賞建築與拍照，CP值超高</p>
            </div>

            <a
              href="https://www.nact.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 2: 根津美術館 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {nezuPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="根津美術館 - 東京美術館推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">根津美術館</h3>
                <span className="text-xs text-stone-400">Nezu Museum</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              坐落於表參道靜謐住宅區內，建築由著名建築師<strong>隈研吾</strong>操刀。收藏東洋古美術為主，最大魅力是館內附設的<strong>日本庭園</strong>🌿 走進庭園就像進入另一個世界，完全感受不到自己身處東京市中心。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                從表參道熱鬧的街道走進來，瞬間切換成寧靜和風氛圍🍵 庭園裡有池塘、石燈籠、茶屋，春天有杜鵑、秋天有紅葉，每個季節來都有不同風景。也很推薦在館內咖啡廳「NEZUCAFÉ」邊看庭園邊休息✨
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌿 日本庭園", "🍵 和風氛圍", "🏛️ 隈研吾設計", "🚇 表參道徒歩8分"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都港區南青山6-5-1</p>
              <p className="text-xs text-stone-600">🚇 東京メトロ「表參道」駅A5出口 徒歩約8分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜17:00（週一休館）</p>
              <p className="text-xs text-stone-600">💴 一般¥1,400〜（依展覽而異・需事先網路預約）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">需事先在官網預約入場時段，建議出發前先確認</p>
            </div>

            <a
              href="https://www.nezu-muse.or.jp/"
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
          <h2 className="text-base font-black text-stone-800 mb-3">逛美術館小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 兩間美術館都會休館，出發前一定要查官網確認</li>
            <li>✅ 根津美術館需事先預約，國立新美術館特展也建議先買票</li>
            <li>✅ 平日上午人少，能安靜地欣賞作品與拍照📸</li>
            <li>✅ 兩間距離不遠，可以安排同一天順遊（六本木→表參道）</li>
            <li>✅ 雨天的備案行程也非常推薦，整天都在室內也不無聊</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一個是現代玻璃建築、一個是和風庭園——氛圍完全不同的兩間美術館✨<br />
            來東京旅遊想稍微放慢腳步、感受日本文化與藝術，這兩間絕對不會踩雷！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「美術館不只是看展，建築和氛圍本身就值得專程造訪🎨」</p>
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
