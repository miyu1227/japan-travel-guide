import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/ueno-zoo";
const OG_IMAGE = "/ueno-zoo/zoo-1.jpg";

export const metadata: Metadata = {
  title: "上野動物園推薦｜東京必去親子景點・大熊貓【實際造訪】",
  description:
    "日本最古老的動物園，大熊貓・亞洲象・小熊貓等超人氣動物。門票只要¥600，親子旅行・情侶約會都推薦。附交通方式・門票・營業時間。",
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
    title: "上野動物園推薦｜東京必去親子景點・大熊貓",
    description: "東京必去！日本最古老的動物園，大熊貓超人氣。門票¥600，附交通・營業時間。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "上野動物園推薦・東京必去景點" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "上野動物園推薦｜東京必去親子景點",
    description: "東京必去！日本最古老的動物園，大熊貓・門票¥600🐼",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "上野動物園推薦｜東京必去親子景點・大熊貓【實際造訪】",
  description: "東京必去景點「上野動物園」。日本最古老的動物園，大熊貓超人氣。",
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
    { "@type": "ListItem", position: 2, name: "動物園推薦", item: PAGE_URL },
  ],
};

const zooPhotos = ["/ueno-zoo/zoo-1.jpg", "/ueno-zoo/zoo-2.jpg", "/ueno-zoo/zoo-3.jpg", "/ueno-zoo/zoo-4.jpg"];

const relatedLinks = [
  { href: "/museum", label: "🎨 東京美術館推薦｜國立新美術館＆根津美術館", desc: "現代建築・日本庭園" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/ramen", label: "🍜 東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
];

export default function UenoZooPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">動物園推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🐼 動物園</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・上野</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          上野動物園推薦｜東京必去<br />親子景點・大熊貓🐼
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">來東京旅遊，一定要去一次動物園！</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>上野動物園</strong>是日本最古老的動物園，創立於1882年（明治15年），至今已有超過140年的歷史🏛️ 位於上野公園內，從上野車站走路只要5分鐘。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            園內有超人氣的<strong>大熊貓</strong>、亞洲象、蘇門答臘虎、小熊貓等豐富的動物展示。門票只要<strong>¥600</strong>，小學生以下免費，CP值超高✨ 不論是親子旅行、情侶約會還是朋友出遊都非常適合。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京動物園推薦・推介（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {zooPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="上野動物園 - 東京景點推薦"
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
                <h3 className="text-base font-black text-stone-800">上野動物園</h3>
                <span className="text-xs text-stone-400">Ueno Zoological Gardens</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              日本歷史最悠久的動物園，園區分為<strong>東園</strong>和<strong>西園</strong>，由單軌電車連接。東園有大熊貓、大猩猩、老虎等人氣動物；西園有企鵝、長頸鹿、河馬等。整個園區走一圈約需2〜3小時，規模適中不會太累。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                門票只要<strong>¥600</strong>，小學生以下<strong>免費</strong>，CP值爆表💰 大熊貓區整修後更加寬敞舒適，可以慢慢觀察。園內也有餐廳和紀念品商店，熊貓周邊超可愛🐼 逛完還可以順遊上野公園、阿美橫丁，一整天的行程安排很充實！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🐼 大熊貓", "💰 門票¥600", "👶 親子推薦", "🚶 上野站徒步5分", "🆓 小學以下免費"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 推薦看點 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🦁 必看動物</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・大熊貓（ジャイアントパンダ）— 上野動物園的超級明星🐼</li>
                <li>・亞洲象 — 園內最大的動物，氣勢十足🐘</li>
                <li>・小熊貓（レッサーパンダ）— 萌度爆表，超療癒</li>
                <li>・蘇門答臘虎 — 稀有品種，近距離觀察很震撼🐯</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都台東區上野公園9-83</p>
              <p className="text-xs text-stone-600">🚃 JR・東京メトロ「上野」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 9:30〜17:00（週一休園・國定假日順延翌日休）</p>
              <p className="text-xs text-stone-600">💴 大人 ¥600／中學生 ¥200／小學以下 免費／65歲以上 ¥300</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">3/20開園紀念日、5/4綠之日、10/1都民之日可免費入園！建議先查官網確認</p>
            </div>

            <a
              href="https://www.tokyo-zoo.net/ueno/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 歷史 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">上野動物園的歷史</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            上野動物園（正式名稱：<strong>東京都恩賜上野動物園</strong>）於<strong>1882年3月20日</strong>開園，是<strong>日本最古老的動物園</strong>🐘 佔地約14.3公頃，飼育約<strong>350種、3000隻</strong>動物，是日本最具代表性的動物園之一。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            園區分為<strong>東園＆西園</strong>，兩園之間有<strong>「東園～西園架空索道（東京都営）」</strong>連結（目前運休中）。1972年中日建交紀念，中國贈送第一對大熊貓「康康＆蘭蘭」，從此上野動物園＝大熊貓的印象深植人心🐼 現在的<strong>公主櫻濱＆桃鈴</strong>是2021年出生的雙胞胎。
          </p>
        </section>

        {/* 熊貓觀覽情報 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">大熊貓觀覽的秘訣</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">早上開園時最有機會看到熊貓活動</p>
                <p className="text-xs text-stone-500 leading-relaxed">熊貓在早上10點前較活躍，中午常常在午睡。想看熊貓吃竹子的話開園（9:30）就入場最有機會。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">假日需要「觀覽整理券」</p>
                <p className="text-xs text-stone-500 leading-relaxed">週六日＆連休期間，熊貓館入場需要事先領取或線上抽選整理券。出發前必看官網最新資訊。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">分為「熊貓森林」＆「熊貓館」兩區</p>
                <p className="text-xs text-stone-500 leading-relaxed">「熊貓森林」是2020年新開放的區域，環境更自然。兩區的熊貓不同隻，記得都要看。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 順路推薦 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">順路推薦：上野動物園附近景點</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">上野公園（動物園就在公園內）</p>
                <p className="text-xs text-stone-500 leading-relaxed">春天賞櫻聖地、有東京國立博物館、國立西洋美術館等文化設施。散步很療癒。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">阿美橫丁（徒歩約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">上野代表的商店街，海鮮丼、章魚燒、伴手禮（手信）應有盡有。逛完動物園過來吃午餐超順路。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">東京國立博物館（徒歩約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">日本最古老＆規模最大的博物館，收藏11萬件文物包含國寶級展品。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">淺草（電車約8分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">從上野搭銀座線只要幾站就到淺草寺・仲見世通，行程串連很順。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">常見問題 FAQ</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 需要多久才能逛完？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                想看重點動物約<strong>2〜3小時</strong>，慢慢逛全區約<strong>半天（4〜5小時）</strong>。有小朋友的話建議預留半天以上。園區廣，記得穿好走的鞋。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 門票能現場買嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                可以，但假日、櫻花季、熊貓熱潮期會排隊。<strong>網路購票（東京都立公園網站）</strong>可以省去排隊時間。門票大人¥600，中學生¥200，65歲以上¥300，小學生以下免費——超佛心！
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 一定能看到大熊貓嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                熊貓館有<strong>健檢日、換場整備日</strong>會臨時休館，或熊貓身體狀況不佳時暫停展出。出發前一定要看官網「本日的動物」頁面確認。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 帶小朋友需要注意什麼？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                可租借嬰兒車（¥300/日）、園內有多個育兒室＆餵奶處。夏天特別要注意<strong>防曬＆水分補給</strong>，東園東邊有兒童動物園可以近距離接觸小動物。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 雨天可以去嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                可以，室內展示館包含<strong>兩棲爬蟲類館、鳥館</strong>都能避雨。動物在雨天反而較活躍，人潮也少，是拍照的好時機📸
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">逛動物園小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 建議<strong>平日上午</strong>前往，假日特別是大熊貓區會很擠</li>
            <li>✅ 園區走一圈約需2〜3小時，穿舒適的鞋子👟</li>
            <li>✅ 園內有餐廳，也可以自帶便當在休息區用餐</li>
            <li>✅ 逛完可以順遊<strong>上野公園</strong>和<strong>阿美橫丁</strong>購物</li>
            <li>✅ 週一休園（遇國定假日則翌日休），出發前確認</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            門票超便宜、動物種類豐富、交通又方便——上野動物園是東京最值得去的景點之一✨<br />
            不論大人還是小孩，都能在這裡度過開心的一天！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「大熊貓真的太可愛了，看到的瞬間心都融化了🐼」</p>
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

        <RelatedArticles slug="ueno-zoo" exclude={["/museum", "/ramen", "/spot"]} />

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
