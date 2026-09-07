import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/utsunomiya-gyoza";
const OG_IMAGE = "/utsunomiya-gyoza/minmin-1.jpg";

export const metadata: Metadata = {
  title: "宇都宮餃子2選｜みんみん＆正嗣 兩大名店對決",
  description:
    "「宇都宮みんみん本店」與「餃子專門店 正嗣 宮島町本店」兩大巨頭完整介紹。煎餃・水餃・炸餃CP值超高，從東京搭新幹線50分即達。",
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
    title: "宇都宮餃子推薦2選｜兩大名店みんみん＆正嗣 對決",
    description: "宇都宮必吃餃子！みんみん＆正嗣兩大巨頭比較。煎餃・水餃・炸餃CP值超高🥟",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "宇都宮餃子推薦・みんみん本店" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "宇都宮餃子推薦2選｜兩大名店みんみん＆正嗣 對決",
    description: "宇都宮必吃餃子！みんみん＆正嗣兩大巨頭🥟",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "宇都宮餃子推薦2選｜兩大名店みんみん＆正嗣 對決【實際品嚐】",
  description: "宇都宮餃子推薦2選。みんみん本店與正嗣宮島町本店完整介紹。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
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
    { "@type": "ListItem", position: 2, name: "宇都宮餃子推薦", item: PAGE_URL },
  ],
};

const minminPhotos = ["/utsunomiya-gyoza/minmin-1.jpg", "/utsunomiya-gyoza/minmin-2.jpg"];
const masashiPhotos = ["/utsunomiya-gyoza/masashi-1.jpg", "/utsunomiya-gyoza/masashi-2.jpg"];

const relatedLinks = [
  { href: "/utsunomiya", label: "🎋 宇都宮一日遊推薦3選｜若山農場竹林・餃子街・二荒山神社", desc: "若山農場竹林・餃子通・二荒山神社" },
  { href: "/ramen", label: "🍜 東京必吃拉麵推薦6選｜排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
  { href: "/shin-okubo", label: "🇰🇷 新大久保美食推薦｜韓國料理・咖啡・甜點", desc: "ナッコプセ鍋・韓系咖啡廳・ドバイ餅" },
];

const faqs = [
  { q: "兩家怎麼比？", a: "みんみん有煎餃、水餃、炸餃三種吃法，正嗣則專注在煎餃與水餃。兩家都在市中心，可以一次吃兩家做對決。" },
  { q: "從東京去要多久？", a: "搭新幹線約50分就到，是很好排的當天來回小旅行。老店有可能只收現金，身上先準備一些日幣（日圓）現金比較保險。" },
];

export default function UtsunomiyaGyozaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">宇都宮餃子推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🥟 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 栃木・宇都宮</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際品嚐</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          宇都宮餃子推薦2選｜<br />兩大名店みんみん＆正嗣🥟
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">「餃子之都」宇都宮的兩大巨頭對決</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>宇都宮</strong>是日本知名的「<strong>餃子之都</strong>」🥟 從東京搭新幹線只要<strong>約50分</strong>，每年人均餃子消費量名列前茅。在宇都宮數十間餃子店當中，最具代表性的就是<strong>「みんみん」</strong>與<strong>「正嗣」</strong>兩大巨頭。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這兩間店都<strong>創業於1958年</strong>，相差不到幾個月，被當地人稱為<strong>「宇都宮餃子的兩大支柱」</strong>✨ 一份只要¥270〜¥330，CP值超高！這次完整介紹兩間本店，讓你一次了解該怎麼選、怎麼吃。
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">兩大名店快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">宇都宮みんみん本店 → 內用首選・三種餃子全制霸</p>
                <p className="text-xs text-stone-500 leading-relaxed">煎餃・水餃・炸餃都有・有啤酒・宇都宮餃子代名詞</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">餃子專門店 正嗣 宮島町本店 → 純粹餃子・極致簡單</p>
                <p className="text-xs text-stone-500 leading-relaxed">只賣煎餃＆水餃・1份¥270・蔬菜多汁的清爽派</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">宇都宮餃子推薦（推介）・2選</h2>

        {/* Shop 1: みんみん */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {minminPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="宇都宮みんみん本店 - 宇都宮餃子推薦" fill sizes="50vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">宇都宮みんみん本店</h3>
                <span className="text-xs text-stone-400">Utsunomiya Minmin Honten</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>1958年創業</strong>，是公認的<strong>「宇都宮餃子代名詞」</strong>🥟 位於JR宇都宮駅西口附近，是觀光客首選的人氣名店。招牌的<strong>「焼・水・揚」三種餃子</strong>都吃得到，內用搭配啤酒最對味🍻 因為是觀光客必訪的店，平日中午也常常排隊。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                第一次來宇都宮的人首推這間！可以一次吃到<strong>煎餃＋水餃＋炸餃三種</strong>，比較哪種最合口味。餃子內餡偏<strong>肉感扎實</strong>，配上特製醬油・醋・辣油的沾醬，啤酒喝起來超順口。一份6個只要<strong>¥330</strong>左右，CP值非常高💰
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥟 1958年創業", "🔥 三種餃子全制霸", "🍻 配啤酒一流", "🚃 站前徒歩圈"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 栃木縣宇都宮市馬場通り4-2-3</p>
              <p className="text-xs text-stone-600">🚃 JR「宇都宮」駅西口 徒歩約10分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜20:00（週三定休）</p>
              <p className="text-xs text-stone-600">💴 焼餃子・水餃子・揚餃子 各 ¥330（一份6個）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">假日中午常常需要排隊1小時以上，建議開店前抵達或避開12〜14點尖峰</p>
            </div>

            <a href="https://www.gyozakai.com/shop/24" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 宇都宮餃子會官方資訊
            </a>
          </div>
        </section>

        {/* Shop 2: 正嗣 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {masashiPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="餃子專門店 正嗣 宮島町本店 - 宇都宮餃子推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">餃子專門店 正嗣 宮島町本店</h3>
                <span className="text-xs text-stone-400">Gyoza Masashi Miyajimacho Honten</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              與みんみん並稱宇都宮餃子兩大巨頭的<strong>1958年創業老舗</strong>🥟 不同於みんみん，正嗣<strong>只賣「焼餃子」與「水餃子」兩種</strong>，菜單極致簡單，是真正的「餃子專門店」。本店位於宇都宮市中心的<strong>宮島町</strong>，店面小巧樸實，當地人氣超高。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                餃子內餡<strong>蔬菜比例高</strong>，肉味不會過重，吃起來清爽不膩，<strong>連吃兩、三份也不會膩</strong>是正嗣的最大魅力🥬 一份6個只要<strong>¥270</strong>，是宇都宮最便宜的等級之一！外帶包裝也很完善，當伴手禮（手信）帶回飯店（酒店）也OK。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥟 1958年創業", "🥬 蔬菜多汁清爽", "💰 一份¥270", "🥡 外帶人氣"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 栃木縣宇都宮市宮島町4-25</p>
              <p className="text-xs text-stone-600">🚃 JR「宇都宮」駅西口 徒歩約15分</p>
              <p className="text-xs text-stone-600">⏰ 11:30〜20:00（週二定休）</p>
              <p className="text-xs text-stone-600">💴 焼餃子・水餃子 各 ¥270（一份6個）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">店內座位不多，建議外帶或避開用餐尖峰；菜單真的只有餃子＋飲料，請有心理準備</p>
            </div>

            <a href="https://www.hotpepper.jp/strJ000102318/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 餐廳資訊（Hot Pepper）
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">宇都宮餃子巡禮小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 想一次比較兩家：<strong>みんみん吃內用＋正嗣外帶</strong>是黃金組合</li>
            <li>✅ 兩家都<strong>1958年創業</strong>，且都位於宇都宮駅西口徒歩圈內</li>
            <li>✅ 平日比假日好排隊許多，<strong>建議週間平日造訪</strong></li>
            <li>✅ 一份6個，2〜3人建議點<strong>3〜4份分食</strong>剛剛好</li>
            <li>✅ 從東京搭新幹線「やまびこ」約<strong>50分</strong>，當天來回方便🚄</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            みんみん的肉感扎實派、正嗣的蔬菜清爽派——同樣1958年創業，風格卻完全不同的兩大巨頭🥟<br />
            來到宇都宮絕對要兩家都吃過，才能說真正體驗了「餃子之都」！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「一份才¥270〜¥330，吃完還想再外帶一份回飯店宵夜🥟」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqs} />

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

        <RelatedArticles slug="utsunomiya-gyoza" exclude={["/ramen", "/shin-okubo", "/utsunomiya"]} />

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
