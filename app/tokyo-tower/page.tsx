import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/tokyo-tower";
const OG_IMAGE = "/tokyo-tower/tower-1.jpg";

export const metadata: Metadata = {
  title: "東京鐵塔推薦｜東京必去地標・夜景景點【實際造訪】",
  description:
    "東京必去地標「東京鐵塔」完整介紹！333公尺高的東京象徵，主展望台＆頂層展望台夜景超震撼。附門票價格・交通方式・營業時間・拍照景點。台灣・香港旅客東京自由行必看！",
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
    title: "東京鐵塔推薦｜東京必去地標・夜景景點",
    description: "東京必去！333公尺東京象徵。主展望台＆頂層展望台夜景。附門票・交通・營業時間。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京鐵塔推薦・東京必去地標" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京鐵塔推薦｜東京必去地標・夜景景點",
    description: "東京必去！333公尺地標，主展望台＆頂層展望台夜景🗼",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京鐵塔推薦｜東京必去地標・夜景景點【實際造訪】",
  description: "東京必去地標「東京鐵塔」。333公尺東京象徵，夜景超震撼。",
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
    { "@type": "ListItem", position: 2, name: "東京鐵塔推薦", item: PAGE_URL },
  ],
};

const photos = [
  "/tokyo-tower/tower-1.jpg",
  "/tokyo-tower/tower-2.jpg",
  "/tokyo-tower/tower-3.jpg",
  "/tokyo-tower/tower-4.jpg",
  "/tokyo-tower/tower-5.jpg",
  "/tokyo-tower/tower-6.jpg",
  "/tokyo-tower/tower-7.jpg",
];

const relatedLinks = [
  { href: "/ueno-zoo", label: "🐼 上野動物園推薦｜東京必去親子景點", desc: "日本最古老的動物園，大熊貓超人氣" },
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
  { href: "/museum", label: "🎨 東京美術館推薦｜國立新美術館＆根津美術館", desc: "現代建築・日本庭園" },
];

export default function TokyoTowerPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">東京鐵塔推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🗼 地標景點</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・港區</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京鐵塔推薦｜東京必去<br />地標・夜景景點🗼
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">來東京旅遊，一定要看的經典地標！</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>東京鐵塔</strong>（Tokyo Tower）是東京最具代表性的地標之一，1958年完工至今已有60多年歷史🗼 高度333公尺，以艾菲爾鐵塔為藍本設計，紅白相間的身影已經成為東京的象徵。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            白天可以登上展望台欣賞<strong>東京360度全景</strong>，夜晚則被絢麗的<strong>燈光點亮</strong>，是東京最浪漫的夜景景點之一✨ 不論是情侶約會、家庭旅遊還是IG打卡，都是來東京絕對不能錯過的景點。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京地標景點推薦（推介）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="東京鐵塔 - 東京必去地標"
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
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">東京鐵塔</h3>
                <span className="text-xs text-stone-400">Tokyo Tower</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              1958年完工的東京象徵，高度<strong>333公尺</strong>，以法國艾菲爾鐵塔為靈感設計🏛️ 被指定為日本<strong>登錄有形文化財</strong>。分為兩個展望台：<strong>主展望台（150m）</strong>和<strong>頂層展望台（250m）</strong>，都能俯瞰360度的東京景色。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                比起晴空塔，東京鐵塔更有<strong>復古浪漫的氛圍</strong>💕 夜晚的燈光秀超級夢幻，從遠處看到紅橘色光芒的鐵塔讓人感動。天氣好的話，主展望台就能看到<strong>富士山</strong>🗻 附近的芝公園和增上寺也很值得一起逛！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🗼 東京象徵", "🌃 夜景絕佳", "💕 情侶約會推薦", "🗻 可看富士山", "📸 IG必拍"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 展望台比較 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🎫 展望台比較</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>主展望台（Main Deck・150m）</strong>：大人¥1,500／可自由參觀</li>
                <li><strong>頂層展望台（Top Deck Tour・250m）</strong>：大人¥3,300（網路預約）／¥3,500（現場）</li>
                <li>💡 Top Deck Tour 包含導覽＆飲料，景色更壯觀！</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都港區芝公園4-2-8</p>
              <p className="text-xs text-stone-600">🚃 大江戶線「赤羽橋」駅 徒歩約5分／日比谷線「神谷町」駅 徒歩約7分</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜23:00（Main Deck・最終入場22:30）</p>
              <p className="text-xs text-stone-600">💴 Main Deck ¥1,500／Top Deck Tour ¥3,300〜</p>
              <p className="text-xs text-stone-600">🅿️ 停車場150台（¥600/時〜）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">傍晚上去最棒！可以一次看到白天→黃昏→夜景的三種不同風景🌅</p>
            </div>

            <a
              href="https://www.tokyotower.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 歷史・背景 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">東京鐵塔的歷史與背景</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            東京鐵塔於<strong>1958年12月23日</strong>完工，設計者是「塔博士」<strong>內藤多仲</strong>。高度<strong>332.9公尺</strong>，比法國艾菲爾鐵塔（324m）還高，完工當時是世界最高的自立式鐵塔🗼 建造目的是為了統一東京圈的電視電波塔，最上部曾裝設NHK＆民營電視台的天線。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            2012年東京晴空塔完工後，電波塔的主要功能移交過去，但東京鐵塔仍作為<strong>備用電波塔＆觀光地標</strong>持續運營。塔身的橘白色是為了符合航空法規（每7年重新塗裝一次），總共使用約<strong>2萬8000公升</strong>的油漆。2013年被指定為<strong>登錄有形文化財</strong>。
          </p>
        </section>

        {/* 順路推薦：附近景點 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">順路推薦：東京鐵塔附近景點</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">增上寺（徒歩約2分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">德川家康祈願・德川將軍家廟所。以東京鐵塔為背景的三解脫門構圖是IG熱門拍照點。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">芝公園（徒歩約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">日本最古老的公園之一。從公園仰望東京鐵塔的角度超經典，春天賞櫻聖地。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">六本木Hills（電車約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">Roppongi Hills森大廈展望台可以從對面拍到東京鐵塔全景。夜景推薦。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Azabudai Hills（徒歩約10分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">2023年開業的新地標，可以從辦公樓層免費眺望東京鐵塔。teamLab Borderless也在這裡。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">常見問題 FAQ</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 東京鐵塔 vs 東京晴空塔，該選哪個？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                東京鐵塔<strong>復古氛圍＆浪漫氣氛</strong>強，位在都心便於周邊行程串連；東京晴空塔<strong>高度更高（634m）＆展望更廣</strong>，但位置在墨田區。喜歡經典氛圍＆想拍地標本身選東京鐵塔，追求高度與新設施選晴空塔。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ Main Deck 和 Top Deck Tour 差在哪？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Main Deck（150m）</strong>可自由參觀＆隨時入場，¥1,500。<strong>Top Deck Tour（250m）</strong>需事先預約時段、含導覽＋一杯飲品，¥3,300（網路）／¥3,500（現場）。想看更高更遠、有充裕時間的話推薦 Top Deck Tour。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 幾點去最好？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                最推薦<strong>日落前1小時到達</strong>——可以一次看到白天景色、黃昏、以及夜景轉換的三段風景。網站可查各月份的日落時間，冬天16:30左右、夏天19:00左右。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 天氣不好還值得去嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                晴朗時可以看到富士山、天氣不佳時能見度會下降。但雨天有<strong>「雨天限定的雲海景色」</strong>，夜晚燈光穿透雨霧也別有一番風味。強風時Top Deck可能會停止營運，建議事先查詢官網。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 有中文語音導覽嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Top Deck Tour 提供<strong>13種語言</strong>的語音導覽，包含<strong>繁體中文與簡體中文</strong>。入場時可以拿導覽器材，跟著語音認識展望台看到的東京景色。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">逛東京鐵塔小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 想拍最美的照片，推薦<strong>傍晚〜夜晚</strong>登塔，可看到東京從黃昏轉夜景</li>
            <li>✅ Top Deck Tour 強烈建議<strong>網路預約</strong>，比現場便宜¥200</li>
            <li>✅ 想拍東京鐵塔本身，推薦到附近的<strong>芝公園</strong>或<strong>增上寺</strong>取景📸</li>
            <li>✅ 「東京タワー」和「東京晴空塔」是不同景點，注意別搞混</li>
            <li>✅ 全年無休，但天氣不佳時可能景色不好，建議查好天氣再去</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            雖然東京有很多地標，但東京鐵塔的復古浪漫感是其他地方沒有的🗼<br />
            夜晚的紅橘色光芒讓人看了就想再來一次東京！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「傍晚登塔，看著夕陽慢慢變夜景的瞬間真的好感動🌅」</p>
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

        <RelatedArticles slug="tokyo-tower" exclude={["/koyo", "/museum", "/ueno-zoo"]} />

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
