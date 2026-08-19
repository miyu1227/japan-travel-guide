import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/about";

export const metadata: Metadata = {
  title: "關於我們・作者介紹｜Japan Trip Picks",
  description: "Japan Trip Picks 是專為台灣・香港旅客打造的日本旅遊資訊網站。作者ぽやぴよ是東京在住日本人，實際造訪過所有介紹景點，用第一視角分享真實旅遊體驗。",
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
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "ぽやぴよ",
  description: "東京在住的日本人部落客。Japan Trip Picks 網站營運者。介紹自己實際造訪過的日本景點・美食・咖啡廳，用第一視角分享給台灣・香港旅客。",
  url: PAGE_URL,
  jobTitle: "旅遊部落客・網站營運者",
  worksFor: {
    "@type": "Organization",
    name: "Japan Trip Picks",
    url: "https://www.japantrippicks.com",
  },
  knowsAbout: ["日本旅遊", "東京", "關西", "北海道", "咖啡廳", "美食", "溫泉", "景點推薦"],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Japan Trip Picks",
  url: "https://www.japantrippicks.com",
  logo: "https://www.japantrippicks.com/poyapiyo-flag.png",
  description: "台灣・香港旅客專屬的日本旅遊指南",
  foundingDate: "2025",
  founder: { "@type": "Person", name: "ぽやぴよ" },
  contactPoint: {
    "@type": "ContactPoint",
    email: "poyapiyotonemuneko@gmail.com",
    telephone: "+81-50-6864-2628",
    contactType: "Customer Support",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700">關於我們</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-black text-stone-800 mb-2">關於我們・作者介紹</h1>
        <p className="text-xs text-stone-400 mb-6">About Japan Trip Picks</p>

        {/* 作者ヒーロー */}
        <section className="bg-white rounded-3xl border-2 border-yellow-200 shadow-sm p-6 mb-8">
          <div className="flex items-start gap-4 mb-5">
            <div className="relative w-24 h-24 shrink-0 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-100 p-1">
              <Image src="/poyapiyo-flag.png" alt="ぽやぴよ" fill sizes="96px" className="object-contain p-1" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-yellow-700 bg-yellow-100 border border-yellow-200 px-2 py-0.5 rounded-full inline-block mb-2">✍️ 作者・網站營運者</p>
              <h2 className="text-xl font-black text-stone-800 mb-1">ぽやぴよ 🐥</h2>
              <p className="text-sm text-stone-500">Poyapiyo｜Japan Trip Picks 主編</p>
            </div>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            大家好，我是<strong>ぽやぴよ</strong>🐥 出身於東京、目前也住在東京的日本人。從小就喜歡旅行、吃東西＆咖啡，工作之餘常常趁週末或連假到日本各地小旅行。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            因為身邊有很多台灣・香港的朋友來日本玩，發現大家的煩惱都很類似——「日文網站看不懂」「Google翻譯的中文不太通順」「訪日客推薦（推介）景點都差不多」。所以決定用<strong>日本人視角＋繁體中文</strong>，把自己實際去過、覺得推薦的地方一個個記錄下來✨
          </p>
        </section>

        {/* 執筆方針 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-4">📝 本網站的執筆方針</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0">✅</span>
              <div>
                <p className="text-sm font-bold text-stone-700 mb-0.5">實際造訪</p>
                <p className="text-xs text-stone-500">所有介紹的景點・餐廳・咖啡廳（咖啡店）・住宿都是本人親自造訪。從未去過的地方不會寫。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0">📸</span>
              <div>
                <p className="text-sm font-bold text-stone-700 mb-0.5">照片全部原創</p>
                <p className="text-xs text-stone-500">網站內幾乎所有照片都是本人拍攝，不使用免費圖庫或抓取他站圖片（極少數官方合作除外）。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0">🇹🇼</span>
              <div>
                <p className="text-sm font-bold text-stone-700 mb-0.5">台灣・香港旅客視角</p>
                <p className="text-xs text-stone-500">交通方式、票券選擇、菜單語言、預約流程等，都以第一次自由行的訪日旅客能看懂的方式整理。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0">🔄</span>
              <div>
                <p className="text-sm font-bold text-stone-700 mb-0.5">資訊持續更新</p>
                <p className="text-xs text-stone-500">營業時間・票價・預約方式等會隨時間變動的資訊，發現變更會盡快修正。出發前建議再至官方網站確認最新資訊。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0">💯</span>
              <div>
                <p className="text-sm font-bold text-stone-700 mb-0.5">真實感想・不推薦時會說</p>
                <p className="text-xs text-stone-500">為了讀者的旅遊體驗，覺得踩雷、CP值不高的地方會直接寫，不會為了業配而勉強推薦。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 得意分野 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-4">✈️ 得意的地區・主題</h2>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { emoji: "🗼", label: "東京都心" },
              { emoji: "🏔️", label: "神奈川・箱根" },
              { emoji: "🍜", label: "關西（大阪・神戶・京都）" },
              { emoji: "❄️", label: "北海道" },
              { emoji: "🍇", label: "山梨・關東近郊" },
              { emoji: "🌊", label: "四國" },
            ].map((a) => (
              <div key={a.label} className="bg-amber-50 border border-yellow-100 rounded-xl p-3">
                <div className="text-lg mb-0.5">{a.emoji}</div>
                <p className="text-xs font-bold text-stone-700">{a.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-500 leading-relaxed">
            主題涵蓋<strong>咖啡廳・美食・景點・溫泉・住宿・伴手禮（手信）</strong>。目前累計介紹超過30個以上的旅遊景點與店家。
          </p>
        </section>

        {/* 網站資訊 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-4">🌐 網站資訊</h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-xs font-bold text-stone-500 mb-1">網站名稱</p>
              <p className="text-stone-700">Japan Trip Picks</p>
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 mb-1">網址</p>
              <p className="text-stone-700 break-all">https://www.japantrippicks.com</p>
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 mb-1">創立年份</p>
              <p className="text-stone-700">2025年</p>
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 mb-1">營運主體</p>
              <p className="text-stone-700">Japan Trip Picks 編輯部（作者：ぽやぴよ）</p>
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 mb-1">主要語言</p>
              <p className="text-stone-700">繁體中文（zh-TW）・部分日文對照</p>
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 mb-1">目標讀者</p>
              <p className="text-stone-700">計畫來日本自由行的台灣・香港旅客</p>
            </div>
          </div>
        </section>

        {/* 聯絡・聯盟行銷 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-4">📮 聯絡方式・其他</h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-xs font-bold text-stone-500 mb-1">Email</p>
              <a href="mailto:poyapiyotonemuneko@gmail.com" className="text-blue-600 underline break-all">
                poyapiyotonemuneko@gmail.com
              </a>
              <p className="text-xs text-stone-500 mt-1">歡迎讀者提問、業配洽談、資訊更新指正等。通常3〜5個工作日內回覆。</p>
            </div>
            <div className="border-t border-stone-100 pt-4">
              <p className="text-xs font-bold text-stone-500 mb-1">電話</p>
              <a href="tel:+815068642628" className="text-blue-600 underline">
                050-6864-2628
              </a>
              <p className="text-xs text-stone-500 mt-1">海外撥打請輸入 +81-50-6864-2628。</p>
            </div>
            <div className="border-t border-stone-100 pt-4">
              <p className="text-xs font-bold text-stone-500 mb-1">聯盟行銷揭露</p>
              <p className="text-xs text-stone-500 leading-relaxed">
                本網站部分連結為Klook等平台的聯盟行銷連結。若您透過連結預訂或購買，我們可能會獲得佣金，<strong>讀者不會因此支付額外費用</strong>。所有推薦內容都基於實際體驗，不因合作而影響評價。
              </p>
            </div>
            <div className="border-t border-stone-100 pt-4">
              <p className="text-xs font-bold text-stone-500 mb-1">內容授權</p>
              <p className="text-xs text-stone-500 leading-relaxed">
                本站所有文章＆照片版權為Japan Trip Picks所有，未經授權請勿轉載。歡迎分享連結或引用時附上來源。
              </p>
            </div>
          </div>
        </section>

        {/* 相關頁面 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6">
          <h2 className="text-base font-black text-stone-800 mb-3">📚 相關頁面</h2>
          <div className="space-y-2">
            <Link href="/privacy" className="block bg-amber-50 border border-yellow-100 rounded-xl px-4 py-3 hover:bg-amber-100 transition-colors">
              <p className="text-sm font-bold text-stone-700">🔒 隱私權政策</p>
              <p className="text-xs text-stone-500">Cookie・個資保護・Google Analytics說明</p>
            </Link>
            <Link href="/contact" className="block bg-amber-50 border border-yellow-100 rounded-xl px-4 py-3 hover:bg-amber-100 transition-colors">
              <p className="text-sm font-bold text-stone-700">✉️ 聯絡我們</p>
              <p className="text-xs text-stone-500">問題洽詢・業配合作・資訊指正</p>
            </Link>
            <Link href="/" className="block bg-amber-50 border border-yellow-100 rounded-xl px-4 py-3 hover:bg-amber-100 transition-colors">
              <p className="text-sm font-bold text-stone-700">🏠 首頁</p>
              <p className="text-xs text-stone-500">所有記事・分類瀏覽</p>
            </Link>
          </div>
        </section>
      </article>

      <footer className="bg-white border-t border-yellow-100 mt-8 py-6 px-4 text-center text-xs text-stone-400">
        <p>© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
