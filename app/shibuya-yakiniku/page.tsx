import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/shibuya-yakiniku";
const OG_IMAGE = "/shibuya-yakiniku/chiba-1.jpg";

export const metadata: Metadata = {
  title: "澀谷燒肉推薦｜ホルモン千葉・內臟名店✅實訪",
  description:
    "京都發跡的內臟燒肉名店「ホルモン千葉」。獨創斜面鐵板收集肉汁、店員全程代烤、收尾炒烏龍麵必吃。附交通、營業時間、預約規則與價位。",
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
    title: "澀谷燒肉推薦｜ホルモン千葉・京都發跡的內臟燒肉名店",
    description: "獨創收集肉汁的斜面鐵板！店員代烤・收尾炒烏龍麵，澀谷必吃內臟燒肉。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "澀谷燒肉推薦・ホルモン千葉的鐵板內臟燒肉" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "澀谷燒肉推薦｜ホルモン千葉・內臟燒肉名店",
    description: "京都發跡！獨創斜面鐵板＋店員代烤，收尾炒烏龍麵必吃🥩",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "澀谷燒肉推薦｜ホルモン千葉・京都發跡的內臟燒肉名店【實際造訪】",
  description:
    "澀谷必吃內臟燒肉「ホルモン千葉」完整介紹。獨創斜面鐵板、店員代烤、收尾炒烏龍麵，附交通與預約規則。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
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
    { "@type": "ListItem", position: 2, name: "澀谷燒肉推薦", item: PAGE_URL },
  ],
};

const photos = [
  { src: "/shibuya-yakiniku/chiba-1.jpg", alt: "ホルモン千葉 澀谷店 - 斜面鐵板上的內臟與豆芽菜" },
  { src: "/shibuya-yakiniku/chiba-2.jpg", alt: "ホルモン千葉 澀谷店 - 白色暖簾的店門口" },
  { src: "/shibuya-yakiniku/chiba-3.jpg", alt: "ホルモン千葉 澀谷店 - 收尾的鐵板炒烏龍麵加蛋黃" },
  { src: "/shibuya-yakiniku/chiba-4.jpg", alt: "ホルモン千葉 澀谷店 - 鐵板上正在燒烤的肉" },
];

const relatedLinks = [
  { href: "/ramen", label: "🍜 東京必吃拉麵推薦6選｜排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
  { href: "/shibuya-cafe", label: "🎵 澀谷咖啡廳推薦｜RECOCO 黑膠唱片試聽咖啡", desc: "約300張唱片聽到飽的音樂體驗" },
  { href: "/ikejiri-cafe", label: "🍓 池尻大橋咖啡廳推薦｜UN LIVRE 法式甜點店", desc: "澀谷搭車一站直達的隱藏名店" },
];

const faqItems = [
  { q: "可以訂位嗎？", a: "平日可以電話預約，但週末與假日不接受預約，只能現場排隊。想避開人潮建議平日、或一開店就去。" },
  { q: "公休日是哪天？", a: "週一公休。不過各資訊來源不太一致，出發前致電確認比較保險。" },
  { q: "一個人大概多少？", a: "每人約¥4,000〜¥6,000，套餐約¥2,800前後。" },
  { q: "座位是什麼型態？", a: "只有L型吧台座位、沒有包廂。人數多的話比較難安排。" },
];

export default function ShibuyaYakinikuPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">澀谷燒肉推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🥩 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・澀谷</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際品嚐</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          澀谷燒肉推薦｜ホルモン千葉<br />京都發跡的內臟燒肉名店🥩
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-31</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">澀谷吃肉，這間是「內行人的答案」</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            澀谷的燒肉店多到數不完，但如果只能挑一間，很多日本人會直接說出<strong>「ホルモン千葉」</strong>這個名字。這是一間<strong>發跡於京都</strong>的內臟燒肉（ホルモン）名店，目前只有<strong>京都本店、大阪梅田、東京澀谷、東京新宿</strong>四間店🔥
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            它厲害的地方不是高級和牛，而是<strong>「怎麼把普通的肉煎到最好吃（好食）」</strong>——店家自行開發了一塊<strong>帶洩油口的斜面鐵板</strong>，把烤肉時流掉的肉汁全部集中到下面的醬碗裡，最後再用這鍋肉汁炒一份收尾的烏龍麵。從第一口到最後一口，沒有一滴鮮味被浪費掉✨
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">澀谷燒肉推薦・推介（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((p, i) => (
              <div key={p.src} className="relative aspect-square bg-stone-100">
                <Image
                  src={p.src}
                  alt={p.alt}
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
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">ホルモン千葉 澀谷店</h3>
                <span className="text-xs text-stone-400">Hormone Chiba／內臟燒肉・京都發跡</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              門口只有一塊寫著「ホルモン千葉」的白色暖簾，低調到會走過頭，但裡面是清一色的<strong>L型吧台座位</strong>，正對著鐵板🔥 全程<strong>由店員在你面前烤</strong>，什麼時候翻面、什麼時候該吃，店員都會直接告訴你，所以完全不用擔心「不會烤內臟」這件事。調味分成<strong>鹹香系「コク塩」</strong>與<strong>味噌系「黑醬（黒ダレ）」</strong>兩大路線，黑醬用的是向<strong>京都超過200年歷史的老味噌店特別訂製</strong>的合わせ味噌調配而成。吃到最後，用集滿一整晚肉汁的醬料炒一份<strong>烏龍麵（或蕎麥麵）</strong>收尾，是全場最高潮的一道🍜
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                對海外旅客最友善的一點，就是<strong>「你不用自己烤」</strong>——內臟最怕烤過頭或沒烤熟，這裡全部交給店員處理，只要負責吃就好👍 <strong>豆芽菜可以免費續加</strong>，跟油脂一起吃完全不膩。點<strong>「千葉套餐（千葉コース）</strong>」就能一次吃到店裡大部分的部位，第一次來的人幾乎都點這個，價位大約 <strong>¥2,800 前後</strong>，加上酒水一人約 ¥4,000〜¥6,000。同集團在<strong>京都本店・大阪梅田・東京新宿</strong>也有店，行程走關西的人一樣吃得到🚄
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🔥 店員全程代烤", "🍜 收尾炒烏龍麵", "🥬 豆芽菜免費續加", "🧂 鹹香＆味噌雙醬", "🏮 京都發跡名店", "🪑 吧台座位"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 必吃 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🥩 必點推薦</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>千葉套餐（千葉コース）</strong>：鹹香系5種＋黑醬系4種＋收尾的烏龍麵或蕎麥麵，第一次來的最佳解</li>
                <li><strong>コク塩ホルモン</strong>：蒜香・青蔥・鹽味調成的特製鹽醬，吃得到內臟本身的甜</li>
                <li><strong>黒ダレホルモン</strong>：京都老舖味噌特調，濃郁下酒，配白飯也很危險</li>
                <li><strong>收尾炒烏龍麵</strong>：用整晚累積的肉汁下去炒，打上蛋黃拌開最好吃</li>
                <li><strong>生千枚刺・牛舌</strong>：想先來點清爽的開場就點這些</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都澀谷區道玄坂2-14-17</p>
              <p className="text-xs text-stone-600">🚃 京王井之頭線「神泉」駅 徒歩約4分／JR・地下鐵「澀谷」駅 徒歩約7分</p>
              <p className="text-xs text-stone-600">⏰ 平日 17:00〜23:00／週末・假日 16:00〜23:00（L.O. 22:00）</p>
              <p className="text-xs text-stone-600">🚫 週一公休（部分資訊來源不一致，建議出發前致電確認）</p>
              <p className="text-xs text-stone-600">💴 每人約 ¥4,000〜¥6,000（套餐約 ¥2,800 前後）</p>
              <p className="text-xs text-stone-600">🪑 僅 L型吧台座位・無包廂</p>
              <p className="text-xs text-stone-600">📞 03-3461-2933</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">平日可電話預約，<strong>週末與假日不接受預約</strong>，只能現場排隊。想避開人潮建議平日、或一開店就去</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://tabelog.com/tokyo/A1303/A130301/13247826/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 食べログ店家頁面
              </a>
              <a
                href="https://www.chiba-group.jp/hormone/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🏮 官方網站（千葉集團）
              </a>
            </div>
          </div>
        </section>

        {/* 其他分店 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🚄 京都・大阪也吃得到！其他分店</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            ホルモン千葉本來就是<strong>從京都起家</strong>的店，如果你的行程是關西進出，不用特地跑到東京也能吃到同樣的味道。
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🏯 <strong>京都本店</strong>：京都市下京區船頭町234-1／17:00〜23:00（L.O.22:00）・無休・可預約</li>
            <li>🐙 <strong>大阪梅田店</strong>：大阪市北區芝田1-11-5／平日午餐11:30〜14:00有燒肉烏龍麵、晚間17:00〜23:00・週一公休</li>
            <li>🌃 <strong>東京新宿店</strong>：新宿區新宿3-10-7／平日17:00〜、週末假日16:00〜23:00（L.O.22:00）</li>
          </ul>
          <p className="text-xs text-stone-400 mt-3">※ 京都本店與大阪梅田店可預約，新宿店週五〜週日及假日不接受預約</p>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">澀谷吃肉小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 座位只有吧台，<strong>大人數（4人以上）不易入座</strong>，建議2〜3人前往</li>
            <li>✅ <strong>週末假日不接受預約</strong>，平日想確保有位子請提前打電話</li>
            <li>✅ 內臟油脂很紮實，建議搭配<strong>氣泡調酒或烏龍茶</strong>，一路吃到收尾麵剛剛好</li>
            <li>✅ 從澀谷站走過來約7分鐘，位在<strong>道玄坂</strong>上，晚上招牌不顯眼，記得對照地圖</li>
            <li>✅ 吃完衣服會有明顯燒肉味，<strong>行程排在當天最後</strong>會比較安心😅</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            不用自己烤、不用猜熟度，坐下來就有人幫你把每一塊肉煎到剛剛好🔥<br />
            最後那份用肉汁炒出來的烏龍麵，是整晚最讓人記住的味道。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「最後的炒烏龍麵一定要留肚子，那才是這間店的主角🍜」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

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

        <RelatedArticles slug="shibuya-yakiniku" exclude={["/ikejiri-cafe", "/ramen", "/shibuya-cafe"]} />

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
