import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";

const PAGE_URL = "https://www.japantrippicks.com/artbar-tokyo";
const OG_IMAGE = "/artbar-tokyo/artbar-1.jpg";

export const metadata: Metadata = {
  title: "東京畫畫體驗推薦｜Artbar Tokyo・喝酒作畫的大人藝術體驗【原宿・代官山】｜Japan Trip Picks",
  description:
    "東京必去體驗景點「Artbar Tokyo」完整介紹！一邊喝紅酒一邊畫畫的Paint & Sip藝術體驗，臨摹梵谷・莫內名畫，初學者也OK、手ぶら參加。原宿・代官山・銀座・橫濱多間分店，附交通・料金・預約方式。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京畫畫體驗推薦｜Artbar Tokyo・喝酒作畫的大人藝術體驗",
    description: "一邊喝紅酒一邊畫畫的Paint & Sip體驗，初學者也OK・手ぶら參加。原宿・代官山・銀座分店，附料金・預約。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Artbar Tokyo・東京畫畫體驗推薦" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京畫畫體驗推薦｜Artbar Tokyo・喝酒作畫的藝術體驗",
    description: "一邊喝紅酒一邊畫畫！初學者也OK的Paint & Sip體驗🎨",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京畫畫體驗推薦｜Artbar Tokyo・喝酒作畫的大人藝術體驗【實際造訪】",
  description: "東京必去體驗景點「Artbar Tokyo」。一邊喝紅酒一邊畫畫的Paint & Sip藝術體驗，初學者也OK。",
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
    { "@type": "ListItem", position: 2, name: "東京畫畫體驗推薦", item: PAGE_URL },
  ],
};

const artbarPhotos = ["/artbar-tokyo/artbar-1.jpg", "/artbar-tokyo/artbar-2.jpg", "/artbar-tokyo/artbar-3.jpg"];

const relatedLinks = [
  { href: "/museum", label: "🎨 東京美術館推薦｜國立新美術館＆根津美術館", desc: "現代建築・日本庭園" },
  { href: "/shibuya-cafe", label: "🎵 澀谷咖啡廳推薦｜RECOCO・黑膠唱片試聽咖啡", desc: "可親手試聽黑膠唱片的音樂體驗" },
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊", desc: "全世界6間之一・隈研吾設計建築" },
];

export default function ArtbarTokyoPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">東京畫畫體驗推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🎨 體驗景點</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・原宿／代官山</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京畫畫體驗推薦｜Artbar Tokyo<br />喝酒作畫的大人藝術體驗🎨
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">在東京，來一場「喝著紅酒畫畫」的大人體驗</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>Artbar Tokyo</strong>是日本第一間「<strong>Paint &amp; Sip</strong>（喝一杯・畫一幅）」藝術體驗工作室，2016年開業至今已有超過10萬人造訪🎨 概念很簡單——<strong>一手拿著紅酒、一手拿著畫筆</strong>，在現役藝術家的帶領下，輕鬆完成一幅屬於自己的作品。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            當天的主題每天不同，可以臨摹<strong>梵谷、莫內、畢卡索</strong>等名畫，也有潑墨風、寵物普普藝術等有趣課程。完全<strong>初學者也OK、手ぶら（空手）就能參加</strong>，畫具、飲料、小點心全部包含在內，完成的作品還能直接帶回家✨ 是很適合排進東京行程的獨特體驗。
          </p>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京畫畫體驗推薦・Artbar Tokyo</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {artbarPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="Artbar Tokyo - 東京畫畫體驗推薦"
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Artbar Tokyo</h3>
                <span className="text-xs text-stone-400">Paint &amp; Sip Studio</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以<strong>「0%評分、100%樂趣」</strong>為概念的畫畫體驗工作室。老師會一步步帶著你完成，就算完全不會畫也能做出相當有質感的作品🖼️ 白天播放輕鬆的音樂、晚上則換上流行歌曲，不同時段有不同氛圍。一個人參加也能和其他人自然交流，是很療癒又放鬆的兩小時。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                畫具・紅酒・無酒精飲料・小點心<strong>全部包含</strong>，手ぶら就能參加，對旅客超友善🍷 每天主題不同，臨摹世界名畫的成就感十足，完成的畫作能直接<strong>帶回家當旅行紀念</strong>。就算不太會日文，靠著老師的示範也能輕鬆跟上，是東京少見、很好拍又很好玩的體驗行程📸
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍷 喝酒作畫Paint & Sip", "🎨 初學者也OK", "🖐️ 手ぶら參加", "🖼️ 作品帶回家", "📸 IG拍照熱點"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* おすすめポイント */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🎨 體驗重點</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・臨摹梵谷、莫內、畢卡索等世界名畫，每天主題不同</li>
                <li>・最有人氣的是「潑墨（たらし込み）」流動藝術課程</li>
                <li>・畫具・飲料・點心全含，約2小時完成一幅作品</li>
                <li>・現役藝術家親自指導，全程用鼓勵的方式進行</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都渋谷區神宮前5-30-2 Takaraビル201（原宿・貓街店）</p>
              <p className="text-xs text-stone-600">🏬 另有代官山・銀座・橫濱元町・大阪等分店</p>
              <p className="text-xs text-stone-600">🚉 JR「原宿」駅／「渋谷」駅 徒歩約10分</p>
              <p className="text-xs text-stone-600">⏰ 一場約2小時（依課程時段，詳見官網）</p>
              <p className="text-xs text-stone-600">💴 約¥4,620〜（畫具・飲料・點心全含・依課程而異）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">人氣課程與時段容易額滿，建議<strong>先在官網預約購票</strong>，並確認想參加分店的主題與時間</p>
            </div>

            <a
              href="https://artbar.co.jp/"
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
          <h2 className="text-base font-black text-stone-800 mb-3">參加畫畫體驗小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 人氣時段容易額滿，建議<strong>提前在官網預約購票</strong>🎟️</li>
            <li>✅ 每天的主題不同，先查好想畫的名畫或課程再選時段</li>
            <li>✅ 顏料可能會沾到衣服，建議穿<strong>不怕弄髒的衣服</strong>👕</li>
            <li>✅ 完成的作品需要一點時間晾乾，安排行程時預留餘裕</li>
            <li>✅ 原宿・代官山・銀座・橫濱都有分店，挑離行程順路的最方便</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            不用會畫畫、也不用帶任何東西，只要放鬆心情、喝著紅酒動動手，就能完成一幅專屬作品🎨<br />
            想要一個和逛街購物不一樣的東京回憶，Artbar Tokyo非常值得體驗！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「畫得好不好都沒關係，能把自己的作品帶回家最開心🖼️」</p>
            </div>
          </div>
        </div>

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
