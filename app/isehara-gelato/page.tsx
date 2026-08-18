import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/isehara-gelato";
const OG_IMAGE = "/isehara-gelato/meguri-1.jpg";

export const metadata: Metadata = {
  title: "伊勢原義式冰淇淋｜石田牧場めぐり・牧場直送✅實訪",
  description:
    "神奈川伊勢原必吃義式冰淇淋「石田牧場のジェラート屋 めぐり」！從牧場直送的新鮮牛奶製作的人氣ジェラート，CP值超高的隱藏甜點名店。附交通方式・推薦口味・價格。台灣・香港旅客必看！",
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
    title: "伊勢原義式冰淇淋推薦｜石田牧場めぐり・神奈川人氣甜點",
    description: "神奈川伊勢原必吃！牧場直送牛奶的人氣義式冰淇淋。附交通・推薦口味・價格。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "伊勢原義式冰淇淋・石田牧場めぐり" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "伊勢原義式冰淇淋推薦｜石田牧場めぐり",
    description: "神奈川伊勢原必吃！牧場直送的人氣ジェラート🍦",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "伊勢原義式冰淇淋推薦｜石田牧場めぐり・神奈川人氣甜點【實際造訪】",
  description: "神奈川伊勢原必吃義式冰淇淋「石田牧場のジェラート屋 めぐり」。牧場直送的人氣ジェラート。",
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
    { "@type": "ListItem", position: 2, name: "伊勢原ジェラート推薦", item: PAGE_URL },
  ],
};

const photos = ["/isehara-gelato/meguri-1.jpg", "/isehara-gelato/meguri-2.jpg", "/isehara-gelato/meguri-3.jpg"];

const relatedLinks = [
  { href: "/daikanyama-cafe", label: "☕ 代官山咖啡廳推薦2選｜東京必去義式烘焙＆高級甜點", desc: "米蘭PRINCI＆星級甜點DOLCE TACUBO" },
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊", desc: "隈研吾建築・目黑川賞櫻聖地" },
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "美術館・足湯・神社・甜點" },
];

export default function IseharaGelatoPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">伊勢原ジェラート推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">🍦 ジェラート</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神奈川・伊勢原</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          伊勢原義式冰淇淋推薦｜<br />石田牧場めぐり・神奈川人氣甜點🍦
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">從東京出發約1小時！隱藏版牧場ジェラート名店</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>伊勢原</strong>位於神奈川縣中部，從新宿搭小田急線約60分就能抵達🚃 是一個被大山環繞、保留豐富自然的小城鎮，當地人常來這裡享受悠閒散步和美食。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）的<strong>「石田牧場のジェラート屋 めぐり」</strong>是當地人氣No.1的<strong>義式冰淇淋（雪糕）專門店</strong>🍦 直接設在牧場旁邊，使用每天現擠的<strong>新鮮牛奶</strong>製作的ジェラート，濃郁香醇、CP值超高。是來神奈川旅遊絕對不能錯過的隱藏甜點（甜品）名店✨
          </p>
        </section>

        {/* Shop */}
        <h2 className="text-lg font-black text-stone-800 mb-4">神奈川ジェラート推薦（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="石田牧場のジェラート屋 めぐり - 伊勢原義式冰淇淋推薦"
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">石田牧場のジェラート屋 めぐり</h3>
                <span className="text-xs text-stone-400">Meguri Gelato by Ishida Farm</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              神奈川伊勢原<strong>石田牧場</strong>直營的義式冰淇淋專門店🐄 使用每天從旁邊牧場現擠的<strong>低溫殺菌生牛奶</strong>製作，從牛奶到成品全程自家把關。店內常時備有<strong>10種以上</strong>口味，依季節變換，每次造訪都有新發現。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>從牧場到杯子只要幾步路</strong>的超新鮮ジェラート，這種體驗在城市裡絕對吃不到！招牌的<strong>「ミルク（牛乳）」</strong>口味，能完整品嚐到牛奶的甘甜與濃郁🥛 還有用當地水果做的季節限定口味、抹茶、巧克力等。迷你¥360、單球¥450起就能品嚐，CP值爆表💰
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🐄 牧場直營", "🥛 現擠生乳", "🍦 10種以上口味", "💰 CP值高", "🌿 自然環境"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 推薦口味 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍨 必吃（必食）口味</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・<strong>ミルク（牛乳）</strong>—— 招牌！能完整品嚐牧場的鮮牛奶</li>
                <li>・<strong>季節水果</strong>—— 用伊勢原當地水果，依時節變換</li>
                <li>・<strong>抹茶</strong>—— 香濃日式風味，搭配牛奶味超棒</li>
                <li>・<strong>巧克力</strong>—— 濃郁但不甜膩，大人小孩都愛</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 神奈川縣伊勢原市小稻葉2330</p>
              <p className="text-xs text-stone-600">🚃 小田急線「伊勢原」駅搭計程車（的士）約15分／開車約20分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜17:00（週一・週二公休／冬季變動）</p>
              <p className="text-xs text-stone-600">💴 迷你 ¥360／單球 ¥450／雙球 ¥630／三球 ¥750</p>
              <p className="text-xs text-stone-600">🅿️ 免費停車場有</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">從伊勢原站搭計程車最方便，自駕的話可以順路造訪附近的大山阿夫利神社</p>
            </div>

            <a
              href="https://www.instagram.com/megurigelato/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 Instagram
            </a>
          </div>
        </section>

        {/* 伊勢原地區背景 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">關於伊勢原（Isehara）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            伊勢原市位於<strong>神奈川縣中央部</strong>，是東京近郊人氣的自然＆美食小旅行目的地🌾 從新宿搭小田急線約1小時就能抵達，交通方便卻能享受被丹澤山脈環抱的田園風光。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            伊勢原以<strong>「大山信仰」</strong>——江戶時代最盛行的登山參拜文化聞名，也有優質的<strong>酪農業</strong>，因此當地產鮮乳與義式冰淇淋（gelato）非常有名。加上農場、果園豐富，是<strong>採草莓、採葡萄</strong>等體驗行程的熱門地區。
          </p>
        </section>

        {/* 順路推薦 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">順路推薦：伊勢原附近景點</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">大山阿夫利神社（開車約30分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">2200年歷史的名神社，可搭纜車＆登山參拜。秋天紅葉超美，是伊勢原的代表景點。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">大山豆腐街道（大山參道）</p>
                <p className="text-xs text-stone-500 leading-relaxed">大山名物「大山豆腐料理」老舖林立，搭配鮮乳gelato完美一日行程。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">箱根（電車約30分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">從伊勢原搭小田急線到箱根方向串連，可安排箱根一日遊。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">江之島＆鎌倉（電車約1小時）</p>
                <p className="text-xs text-stone-500 leading-relaxed">搭小田急線也可以到江之島＆鎌倉方向。神奈川一日遊行程串連很方便。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">常見問題 FAQ</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 從新宿要怎麼去？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                從<strong>新宿駅</strong>搭小田急線（急行或快速急行）約1小時到「伊勢原」駅。單程約¥700。<strong>浪漫特快「Romancecar」</strong>約50分，比較快但需要指定席票。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 什麼季節去最好？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>春（3〜5月）</strong>大山桜、<strong>夏（6〜8月）</strong>gelato最美味、<strong>秋（10〜11月）</strong>紅葉季、<strong>冬（12〜2月）</strong>草莓採收。全年都有魅力，看你偏好什麼。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 適合一日遊嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                非常適合🎒 <strong>推薦行程</strong>：早上新宿出發→上午到伊勢原逛牧場gelato→中午大山豆腐料理→下午大山阿夫利神社參拜→傍晚回東京。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 需要租車嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                伊勢原駅有<strong>公車（巴士）</strong>可到各景點，不強制需要租車。但如果想深入牧場、農場多處遊覽，租車會更彈性。伊勢原駅有Times Car等租車服務。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">伊勢原旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從新宿搭小田急線到伊勢原約<strong>60分鐘</strong>，當天來回剛剛好</li>
            <li>✅ 從伊勢原站到牧場較遠，建議<strong>計程車或自駕</strong>🚗</li>
            <li>✅ 同日可順遊<strong>大山阿夫利神社</strong>（搭纜車賞景）</li>
            <li>✅ 平日比較不擠，假日中午過後人會變多</li>
            <li>✅ 冬季營業時間可能調整，出發前查Instagram確認</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            從新鮮牛奶到杯子裡只要幾步路——這就是只有牧場直營才能體驗的滋味✨<br />
            來神奈川旅遊，絕對要把這間隱藏版ジェラート名店排進行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「牛奶口味真的超級濃郁，一吃就知道是現擠生乳的味道🥛」</p>
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

        <RelatedArticles slug="isehara-gelato" exclude={["/daikanyama-cafe", "/hakone", "/nakameguro-cafe"]} />

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
