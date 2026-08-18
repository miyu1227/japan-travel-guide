import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";

const KLOOK_HERB =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339728&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F37865-kobe-nunobiki-herb-gardens-ticket";

const PAGE_URL = "https://www.japantrippicks.com/kobe-herb-garden";
const OG_IMAGE = "/kobe-herb-garden/cover.jpg";

export const metadata: Metadata = {
  title: "神戶布引香草園推薦｜纜車空中散步・花海與夜景【實際造訪】",
  description:
    "搭纜車登上標高400m山頂，四季花海・薰衣草・古堡風建築・神戶港夜景一次擁有。從新神戶站直達，附交通・纜車料金・營業時間。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "神戶布引香草園推薦｜纜車空中散步・花海與夜景",
    description: "搭纜車登上400m山頂！四季花海・薰衣草・古堡建築・神戶港夜景。從新神戶駅直達，附交通・纜車料金。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "神戶布引香草園推薦・花海與纜車" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "神戶布引香草園推薦｜纜車空中散步・花海與夜景",
    description: "搭纜車登上400m山頂！四季花海・古堡建築・神戶港夜景🌿",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "神戶布引香草園推薦｜纜車空中散步・花海與夜景【實際造訪】",
  description: "神戶必去景點「神戶布引香草園」。搭纜車登上標高400m山頂，四季花海・古堡建築・神戶港夜景。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-07-21T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "神戶布引香草園推薦", item: PAGE_URL },
  ],
};

const herbPhotos = [
  "/kobe-herb-garden/herb-1.jpg",
  "/kobe-herb-garden/herb-2.jpg",
  "/kobe-herb-garden/herb-3.jpg",
  "/kobe-herb-garden/herb-4.jpg",
];

const relatedLinks = [
  { href: "/kobe-cafe", label: "☕ 神戶咖啡推薦｜フロインドリーブ＆異人館咖啡2選", desc: "教堂改建咖啡廳・北野異人館洋館咖啡" },
  { href: "/rokko-arima", label: "🏔️ 六甲山健行推薦｜神戶登山＆有馬溫泉一日遊", desc: "登山＋纜車＋溫泉完美行程" },
  { href: "/shukugawa", label: "☕ 夙川咖啡廳推薦2選｜法式可麗餅＆精品咖啡", desc: "關西必去咖啡廳" },
];

export default function KobeHerbGardenPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">神戶布引香草園推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🌿 景點</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 兵庫・神戶</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          神戶布引香草園推薦｜纜車<br />空中散步・花海與夜景🌿
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">搭纜車，登上神戶最療癒的山頂花園</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>神戶布引香草園</strong>是日本最大級的香草園，位於神戶市區後方、標高<strong>400公尺</strong>的山頂上🌿 最大的魅力是可以搭乘<strong>神戶布引纜車</strong>，從新神戶駅旁一路空中滑行到山頂，沿途還能俯瞰布引瀑布與神戶市街，光是纜車就值回票價。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            園內以德國古堡為造型的建築超好拍，四季有薰衣草、向日葵等不同花卉，還有香草咖啡廳與溫室。到了傍晚，更能一次看到<strong>神戶港夕景與夜景</strong>，是關西旅遊中兼具自然、拍照與浪漫夜景的人氣景點✨
          </p>
        </section>

        {/* 序盤バナー */}
        <section className="mb-8">
          <a
            href={KLOOK_HERB}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🌿</span>
            <span className="absolute bottom-4 left-4 text-base opacity-40 select-none">✨</span>

            <div className="relative flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                🎫 Travel Tips
              </span>
              <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">纜車＋入園套票</span>
            </div>

            <div className="relative flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                <Image
                  src="/poyapiyo-flag.png"
                  alt="ぽやぴよ"
                  fill
                  sizes="80px"
                  className="object-contain p-1 relative -rotate-[4deg]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-stone-800 leading-tight mb-1">
                  想先確認神戶布引香草園門票？
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  纜車＋入園的套票可以事先線上購買，避免現場排隊。出發前先看看票券內容與最新價格更安心。
                </p>
              </div>
            </div>

            <div className="relative w-full aspect-[1200/628] rounded-2xl overflow-hidden mb-3 border border-white/60 shadow-sm">
              <Image
                src="/kobe-herb-garden/klook-banner.png"
                alt="神戶布引香草園 Klook 票券"
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-cover"
              />
            </div>

            <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
              🎫 查看神戶布引香草園門票 →
            </div>
            <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
          </a>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">神戶布引香草園・纜車空中花園</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {herbPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="神戶布引香草園 - 神戶景點推薦"
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">神戶布引香草園</h3>
                <span className="text-xs text-stone-400">Kobe Nunobiki Herb Gardens</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              種植約<strong>200種、75,000株</strong>的香草與花卉，是能一邊散步一邊享受香氣的山頂庭園🌸 從<strong>山頂駅</strong>順著坡道往下走，會經過薰衣草園、香草廣場、以德國瓦爾特堡為靈感的<strong>展望餐廳</strong>與玻璃溫室，一路都是拍照打卡的好地方。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                從<strong>新神戶駅</strong>走幾分鐘就能搭纜車，交通超方便🚡 山頂空氣清新、視野遼闊，能同時看到瀨戶內海與神戶市街。傍晚上山還能欣賞<strong>夕景轉夜景</strong>的浪漫瞬間，夏季更有夜間點燈活動。香草咖啡廳的花草茶與甜點也別錯過，是很適合放慢腳步的半日行程。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🚡 纜車空中散步", "🌿 四季花海", "🏰 古堡風建築", "🌃 神戶港夜景", "📸 IG拍照聖地"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 季節・見どころ */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🌸 季節看點</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・初夏〜盛夏 — 薰衣草、向日葵、千日紅盛開🌻</li>
                <li>・夏季夜間 — 「光之森」燈光秀＆神戶Summer Terrace限定薄荷調飲🍹</li>
                <li>・傍晚 — 夕景轉夜景，神戶港與市街燈火超浪漫🌃</li>
                <li>・全年 — 玻璃溫室、香草家、香料工房不受天氣影響</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市中央區北野町1-4-3</p>
              <p className="text-xs text-stone-600">🚉 各線「新神戶」駅 徒歩約5分至纜車山麓駅，搭纜車約10分至山頂</p>
              <p className="text-xs text-stone-600">⏰ 依季節而異（夏季夜間營業至21:00・詳見官網）</p>
              <p className="text-xs text-stone-600">💴 纜車往復（含入園）約¥2,000 前後（依季節/時段，詳見官網）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">想同時看花海與夜景的話，建議<strong>傍晚上山</strong>；山頂較涼，可帶件薄外套🧥</p>
            </div>

            <a
              href="https://www.kobeherb.com/"
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
          <h2 className="text-base font-black text-stone-800 mb-3">造訪香草園小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從<strong>新神戶駅</strong>徒步就能到纜車站，安排在神戶行程中很順路🚶</li>
            <li>✅ 想看夜景的話<strong>傍晚上山</strong>最划算，一次收花海＋夕景＋夜景</li>
            <li>✅ 園區是<strong>山坡地形</strong>，建議穿好走的鞋子往下慢慢逛👟</li>
            <li>✅ 山頂氣溫較低，記得帶件<strong>薄外套</strong>，也留意纜車末班時間🕗</li>
            <li>✅ 出發前先上官網確認營業時間與季節活動，避免撲空</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            搭著纜車緩緩上山，山頂是滿滿的花香與絕景——神戶布引香草園把浪漫都集中在一個地方了🌿<br />
            來神戶旅遊，很推薦傍晚上山，把花海與夜景一次收進回憶裡！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「坐纜車看著神戶市街慢慢變成夜景，那一刻真的好浪漫🌃」</p>
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

        <RelatedArticles slug="kobe-herb-garden" exclude={["/kobe-cafe", "/rokko-arima", "/shukugawa"]} />

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
