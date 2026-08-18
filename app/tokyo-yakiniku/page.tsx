import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";

const PAGE_URL = "https://www.japantrippicks.com/tokyo-yakiniku";
const OG_IMAGE = "/tokyo-yakiniku/cover.jpg";

export const metadata: Metadata = {
  title: "東京高級燒肉推薦｜叙々苑 品川王子大飯店店【實際造訪】",
  description:
    "東京高級燒肉推薦！日本高級燒肉代表品牌「叙々苑（JOJOEN）」品川王子大飯店店，品川站徒步2分、飯店1樓、無煙烤爐與雙人座位。附午餐價格（¥2,640〜）、晚餐預算、營業時間與訂位重點。台灣・香港旅客東京自由行必收藏🥩",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京高級燒肉推薦｜叙々苑 品川王子大飯店店",
    description: "品川站徒步2分！日本高級燒肉代表「叙々苑」，午餐¥2,640起就能吃到高級燒肉🥩",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京高級燒肉推薦・叙々苑的和牛拼盤" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京高級燒肉推薦｜叙々苑 品川王子大飯店店",
    description: "品川站徒步2分的日本高級燒肉代表，午餐¥2,640起🥩",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京高級燒肉推薦｜叙々苑 品川王子大飯店店【實際造訪】",
  description:
    "東京高級燒肉「叙々苑 品川王子大飯店店」完整介紹。品川站徒步2分、午餐價格、晚餐預算、營業時間與訂位重點。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-08-18T00:00:00+09:00",
  dateModified: "2026-08-18T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京高級燒肉推薦", item: PAGE_URL },
  ],
};

const jojoenPhotos = [
  { src: "/tokyo-yakiniku/jojoen-1.jpg", alt: "叙々苑 品川王子大飯店店 - 東京高級燒肉的店門口" },
  { src: "/tokyo-yakiniku/jojoen-2.jpg", alt: "叙々苑 品川王子大飯店店 - 附小菜・沙拉・湯的燒肉午餐套餐" },
  { src: "/tokyo-yakiniku/jojoen-3.jpg", alt: "叙々苑 品川王子大飯店店 - 和牛與牛舌拼盤" },
];

const relatedLinks = [
  { href: "/shibuya-yakiniku", label: "🥩 澀谷燒肉推薦｜ホルモン千葉・內臟燒肉名店", desc: "京都發跡・斜面鐵板・店員全程代烤" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
  { href: "/ramen", label: "🍜 東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
];

export default function TokyoYakinikuPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">東京高級燒肉推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・品川</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京高級燒肉推薦｜叙々苑<br />品川王子大飯店店・品川站2分鐘🥩
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-18</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">來東京，一定要吃一次「好一點的燒肉」</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            日本的燒肉分成很多層次——從一個人¥3,000的平價吃到飽，到一個人¥20,000的頂級和牛專門店都有🥩 而說到<strong>「高級燒肉」</strong>這個類別，日本人第一個想到的名字幾乎都是<strong>叙々苑（JOJOEN）</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            叙々苑1976年在六本木創業，是日本<strong>高級燒肉店的開創者</strong>，以乾淨明亮的空間、細緻的服務和穩定的肉質，長年被當作接待客戶、家族慶生、紀念日的定番選擇。這次介紹的是交通最方便的分店之一——<strong>「叙々苑 品川王子大飯店店」</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>想吃一頓有質感的燒肉、又不想跑太遠</strong>的台灣・香港旅人。<strong>你會知道</strong>：午餐和晚餐的價差有多大、怎麼用最划算的方式吃到叙々苑、營業時間的「中間休息」陷阱，還有點餐時該注意什麼。
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京高級燒肉推薦・叙々苑 品川王子大飯店店</h2>

        {/* Spot 1: 叙々苑 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {jojoenPhotos.map((photo, i) => (
              <div key={photo.src} className="relative aspect-square bg-stone-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
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
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">叙々苑 品川王子大飯店店</h3>
                <span className="text-xs text-stone-400">JOJOEN 品川プリンスホテル店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位在<strong>品川王子大飯店 N Tower（北塔）1樓</strong>的叙々苑分店🏨 從JR品川站高輪口走過來只要<strong>2分鐘</strong>，是東京少數「大站旁邊就能吃到高級燒肉」的選擇。店內約110席、以<strong>無煙烤爐</strong>為主，還有36席的<strong>雙人座（ペア席）</strong>，衣服不太會沾到味道，這點對旅客特別重要👗
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                叙々苑最厲害的地方，是<strong>午餐和晚餐是兩個世界</strong>💡 晚餐單點吃下來一個人大約¥15,000〜¥20,000，但<strong>午餐從¥2,640起就吃得到</strong>——附白飯、四種小菜（涼拌菠菜・豆芽・蕨菜・辣蘿蔔）、生菜沙拉、海帶芽湯，還有<strong>兩種沾醬（醬油醬＆檸檬鹽醬）</strong>，是完整的一套定食🍚 肉的部分燒烤前就已經調味過，油花漂亮、厚度剛好，那盤和牛與牛舌拼盤上桌時真的會忍不住先拍照📸 對旅客來說，<strong>「中午來吃」就是CP值最高的解答</strong>。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥩 日本高級燒肉代表", "🚃 品川站徒步2分", "💰 午餐¥2,640起", "💨 無煙烤爐", "💑 有雙人座位", "🏨 飯店1樓"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都港區高輪4-10-30 品川王子大飯店 N Tower 1F</p>
              <p className="text-xs text-stone-600">🚃 JR各線「品川」駅 高輪口 徒歩約2分／京急本線「品川」駅 西口 徒歩約2分</p>
              <p className="text-xs text-stone-600">⏰ 11:30〜21:30（L.O.）／平日16:00〜17:00 休息・六日假日不休息</p>
              <p className="text-xs text-stone-600">💴 午餐 ¥2,640〜¥4,000／晚餐 ¥15,000〜¥20,000（另加5%服務費・午餐與外帶除外）</p>
              <p className="text-xs text-stone-600">🚭 全席禁菸（含電子菸）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                平日<strong>16:00〜17:00會休息</strong>，別在這個時段跑來；晚餐時段人氣很高，建議<strong>事先訂位</strong>
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                預算有限的話，同一間飯店的美食廣場「品川キッチン」有<strong>叙々苑キッチン</strong>，燒肉丼約¥1,750、石鍋拌飯丼約¥1,500，能用銅板價吃到叙々苑的味道🍱
              </p>
            </div>

            <a
              href="https://www.jojoen.co.jp/shop/jojoen/shinagawa/"
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
          <h2 className="text-base font-black text-stone-800 mb-3">東京吃高級燒肉的小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>中午來最划算</strong>：同一間店、同樣的服務，午餐價格大約是晚餐的1/5💰</li>
            <li>✅ 叙々苑晚餐<strong>另加5%服務費</strong>（午餐與外帶不加），抓預算時記得算進去</li>
            <li>✅ 品川站是<strong>新幹線與成田・羽田機場交通</strong>的樞紐，很適合排在抵達日或回國前一餐✈️</li>
            <li>✅ 燒肉店的肉一次不要放太多上烤爐，<strong>一片一片烤</strong>才不會出水變硬🔥</li>
            <li>✅ 叙々苑的肉多半已經調味過，<strong>先原味吃一口</strong>再沾醬才吃得出差別</li>
            <li>✅ 想吃更庶民、更熱鬧的燒肉，可以看看澀谷的內臟燒肉名店「ホルモン千葉」</li>
            <li>✅ 熱門時段（週五晚上・假日）建議提前訂位，或改成平日中午前往</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            叙々苑之所以能當了幾十年的「高級燒肉代表」，靠的不只是肉——乾淨的無煙烤爐、剛剛好的服務距離、連小菜和湯都不隨便，整體才撐得起那個價位✨<br />
            如果想在東京吃一頓有儀式感的燒肉，品川這間絕對是最好約的一間！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「想吃高級燒肉又想省錢的話，答案永遠是——中午來🥩」</p>
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
