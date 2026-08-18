import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/japan-esim";
const OG_IMAGE = "/japan-esim/cover.png";

const KLOOK_URL =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1307234&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F109393-japan-esim-high-speed-internet-qr-code-voucher%2F";

export const metadata: Metadata = {
  title: "日本自由行 eSIM 使用指南｜抵達日本就能上網的事前準備",
  description:
    "eSIM 的設定流程、與實體SIM／租借Wi-Fi的差別、iPhone與Android的支援確認方式，以及「什麼時候啟用才不會浪費天數」等注意事項。出發前先把上網搞定。",
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
    title: "日本自由行 eSIM 使用指南｜抵達日本就能上網的事前準備",
    description: "日本 eSIM 完整介紹。比較實體 SIM 與租借 Wi-Fi，附 Klook 預約流程與注意事項。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "日本自由行 eSIM 使用指南" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "日本自由行 eSIM 使用指南｜抵達日本就能上網的事前準備",
    description: "日本 eSIM 完整介紹！比較實體 SIM 與租借 Wi-Fi📱",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "日本自由行 eSIM 使用指南｜抵達日本就能上網的事前準備",
  description: "日本 eSIM 完整介紹。使用方式、與實體 SIM／租借 Wi-Fi 比較、適用對象與購買前注意事項。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-08-12T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "日本 eSIM 指南", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/tokyo-subway-ticket", label: "🚇 東京地鐵24/48/72小時乘車券｜Tokyo Subway Ticket", desc: "東京自由行交通指南・地下鐵周遊券完整解說" },
  { href: "/tokyo-tower", label: "🗼 東京鐵塔推薦｜東京必去地標・夜景景點", desc: "333公尺東京象徵・主展望台＆頂層展望台夜景" },
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
];

export default function JapanEsimPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">日本 eSIM 使用指南</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-sky-100 text-sky-700 border border-sky-300 text-xs font-semibold px-3 py-1 rounded-full">📱 上網準備</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">🇯🇵 日本</span>
          <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-semibold px-3 py-1 rounded-full">🎒 出發前準備</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          日本自由行 eSIM 使用指南｜<br />抵達日本就能上網的事前準備📱
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-12</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            第一次日本自由行，<strong>「網路怎麼辦？」</strong>常常是出發前最讓人猶豫的問題之一📱<br />
            地圖、翻譯、查餐廳、查電車——下飛機那一刻就會用到。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>第一次日本自由行、還沒決定網路怎麼辦</strong>的台灣・香港旅人。<strong>你會知道</strong>：eSIM 和實體 SIM、租借 Wi-Fi 差在哪、自己的手機支不支援、什麼時候啟用才不會白白浪費天數，還有多人同行時該怎麼選。
          </p>
        </section>

        {/* チケット案内バナー（序盤） */}
        <section className="mb-8">
          <div className="relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden">
            {/* 装飾 */}
            <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🌸</span>
            <span className="absolute bottom-4 left-4 text-base opacity-40 select-none">✨</span>

            <div className="relative flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                ✈️ Travel Tips
              </span>
              <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">上網準備</span>
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
                  想直接看日本 eSIM 方案資訊？
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  本篇整理了 eSIM 的使用方式與選擇建議。若想先了解方案內容、購買方式與使用前注意事項，可以從下方連結前往 Klook 頁面查看最新資訊。
                </p>
              </div>
            </div>

            <a
              href={KLOOK_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 hover:from-pink-500 hover:via-rose-500 hover:to-orange-500 rounded-full py-3 shadow-md hover:shadow-lg transition-all"
            >
              📱 在 Klook 查看日本 eSIM →
            </a>
            <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
          </div>
        </section>

        {/* 為什麼 eSIM 便利 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">日本旅行為什麼 eSIM 很方便？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            日本自由行幾乎每天都會用到網路：
          </p>
          <ul className="text-sm text-stone-600 space-y-2 mb-3">
            <li>🗺️ <strong>地圖 App</strong>查路線、找出口</li>
            <li>🈸 <strong>翻譯 App</strong>看菜單、問路</li>
            <li>🚃 <strong>乘換案內</strong>查電車與時刻</li>
            <li>🍣 <strong>查餐廳、看評價</strong>，找排隊店</li>
            <li>📸 隨時上傳照片、回覆訊息</li>
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            尤其是<strong>剛抵達日本的時候</strong>，能立刻使用網路會讓人非常安心。eSIM 的優勢就是<strong>「不必交換實體卡片」、「不必排隊買 SIM」</strong>，出發前先設定好，落地即可使用（依方案不同）。
          </p>
        </section>

        {/* eSIM とは */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">eSIM 是什麼？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            eSIM（embedded SIM）是<strong>內建在手機裡的數位 SIM 卡</strong>，不需要實體卡片就能啟用通訊方案。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            常見的安裝方式是：
          </p>
          <ul className="text-sm text-stone-600 space-y-1.5 mb-3">
            <li>① 在 Klook 等平台購買 eSIM 方案</li>
            <li>② 收到 <strong>QR Code</strong>或安裝資訊</li>
            <li>③ 用手機相機掃描 QR Code，依指示安裝</li>
            <li>④ 抵達日本後切換到 eSIM 上網</li>
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            因為不用拔出原本的 SIM 卡，<strong>原本的台灣・香港門號</strong>仍可接電話與簡訊（依手機支援與設定為主）。
          </p>
        </section>

        {/* 比較 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">eSIM、實體 SIM、租借 Wi-Fi 比較</h2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-xs text-stone-600 border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-amber-50">
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">比較項目</th>
                  <th className="border border-stone-200 px-2 py-2 text-center font-bold text-pink-600">eSIM</th>
                  <th className="border border-stone-200 px-2 py-2 text-center font-bold text-sky-600">實體 SIM</th>
                  <th className="border border-stone-200 px-2 py-2 text-center font-bold text-amber-600">租借 Wi-Fi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold">取得方式</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">QR Code／App 安裝</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">機場領取／郵寄</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">機場領取／郵寄</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold">設定難易度</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">中（依指引設定）</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">簡單（換卡即可）</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">簡單（開機即可）</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold">行李負擔</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕ 無</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕ 無</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">❌ 需攜帶機台</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold">是否需要歸還</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕ 不用</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">通常不用</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">❌ 需要歸還</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold">多人共用</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">每人各購一份</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">每人各購一份</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">⭕ 可多人共用</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold">推薦（推介）對象</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">獨自旅遊者・想省事的人</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">不熟悉 eSIM 的人</td>
                  <td className="border border-stone-200 px-2 py-2 text-center">家庭・多人同行</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            ※ 實際方案與規格會依供應商與時期不同，購買前請以最新商品頁面為準。
          </p>
        </section>

        {/* おすすめの人 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">eSIM 適合哪些人？</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🐥 想<strong>「下飛機就能上網」</strong>的旅客</li>
            <li>🚶 行李越輕越好、不想多帶 Wi-Fi 機的人</li>
            <li>🧳 怕在機場找 SIM 卡櫃台麻煩的人</li>
            <li>👤 一個人或情侶旅遊（不需要與多人共享）</li>
            <li>📱 已確認手機<strong>支援 eSIM</strong>＆<strong>沒有 SIM Lock</strong></li>
            <li>🇯🇵 想保留原台灣・香港門號接電話＆簡訊的人</li>
          </ul>
        </section>

        {/* 購買前確認 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">購買前先確認這些</h2>
          <div className="space-y-3 text-sm text-stone-600">
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📱 手機是否支援 eSIM？</p>
              <p className="text-xs leading-relaxed">較新的 iPhone（XS 之後）與多數中高階 Android 手機支援。出發前可以在「設定 → 行動服務 → 加入行動方案」確認。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">🔒 是否有 SIM Lock？</p>
              <p className="text-xs leading-relaxed">電信合約綁定的手機可能有 SIM Lock，建議向原電信公司確認是否能使用 eSIM。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📞 是否需要通話／簡訊？</p>
              <p className="text-xs leading-relaxed">多數 eSIM 方案僅提供<strong>數據通訊</strong>，不含日本本地號碼。若需要與日本店家通話，建議使用 LINE Call 或事先確認方案內容。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">📊 容量・天數・速度</p>
              <p className="text-xs leading-relaxed">每個方案的<strong>數據容量、使用日數、速度限制與啟用時機</strong>都不同。出發前以 Klook 商品頁面為準，挑選符合行程的方案。</p>
            </div>
          </div>
        </section>

        {/* Klook 預約流程 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">在 Klook 預約 eSIM 的流程</h2>
          <ol className="space-y-3 text-sm text-stone-600">
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-xs">1</span>
              <div>
                <p className="font-semibold text-stone-700">前往 Klook 商品頁面</p>
                <p className="text-xs text-stone-500 leading-relaxed">選擇符合自己旅行天數與資料量的方案。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-xs">2</span>
              <div>
                <p className="font-semibold text-stone-700">完成預訂並付款</p>
                <p className="text-xs text-stone-500 leading-relaxed">付款後會收到 Klook 寄來的<strong>確認信＆QR Code</strong>。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-xs">3</span>
              <div>
                <p className="font-semibold text-stone-700">出發前完成安裝（建議在自家 Wi-Fi 下）</p>
                <p className="text-xs text-stone-500 leading-relaxed">依方案指引設定 eSIM。安裝完不一定要立刻啟用，可在抵達日本後再切換。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center text-xs">4</span>
              <div>
                <p className="font-semibold text-stone-700">抵達日本後啟用</p>
                <p className="text-xs text-stone-500 leading-relaxed">於手機設定切換 eSIM 數據，並開啟「漫遊」選項即可使用。</p>
              </div>
            </li>
          </ol>

          {/* 2回目のKlookボタン */}
          <a
            href={KLOOK_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-5 block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 hover:from-pink-500 hover:via-rose-500 hover:to-orange-500 rounded-full py-3 shadow-sm hover:shadow transition-all"
          >
            📱 前往 Klook 查看方案 →
          </a>
          <p className="text-[10px] text-stone-400 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
        </section>

        {/* 日本到着後の使い方 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">抵達日本後的使用流程</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✈️ 飛機落地、收到入境後的訊號</li>
            <li>📱 開啟手機設定，切換到日本 eSIM 為主要數據</li>
            <li>🔁 開啟「數據漫遊」（部分方案需要）</li>
            <li>🗺️ 確認地圖 App 可以連線、Google Map 顯示正常</li>
            <li>🚆 開始搭電車到飯店（酒店），路上可即時查路線、看地圖</li>
          </ul>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            出發前若已先安裝好 eSIM，剛下飛機只需開啟漫遊即可——可以節省在機場找 SIM 卡櫃台的時間。
          </p>
        </section>

        {/* 注意 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">常見注意點</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>⚠️ <strong>啟用時機</strong>：部分方案是<strong>第一次連線即開始計算</strong>，出發前不要先連上去</li>
            <li>⚠️ 與台灣・香港門號的<strong>切換設定</strong>建議出發前先測試</li>
            <li>⚠️ 訊號狀況依手機、地區、時段而異，<strong>連線品質無法100%保證</strong></li>
            <li>⚠️ 家庭多人同行時，<strong>每支手機都需要各自準備 eSIM</strong></li>
            <li>⚠️ 想用一台機分享給多人 → 也可考慮租借 Wi-Fi</li>
            <li>⚠️ 最新的<strong>價格、容量、覆蓋區域與條款</strong>請以 Klook 商品頁面為準</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">日本 eSIM 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 怎麼知道我的手機能不能用 eSIM？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                近幾年的 iPhone 與多數中高階 Android 都有支援，但<strong>部分地區版本或較舊的機種不支援</strong>。最保險的做法是在手機設定裡找找看有沒有「加入 eSIM／行動方案」這個選項，出發前先確認過再購買。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 要提前幾天買？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                因為是線上開通，通常不需要太早買。不過<strong>安裝設定建議在出發前、還有 Wi-Fi 的環境下先做完</strong>，落地後只要把它切成主要方案就能用，會比在機場現場摸索輕鬆很多。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 到日本才設定來得及嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                機場多半有免費 Wi-Fi，理論上落地再設定也可以，但如果 Wi-Fi 不穩就會卡住。<strong>安裝在出發前、啟用在抵達後</strong>是最不容易出錯的順序。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 一個人一張，那家庭旅遊怎麼辦？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                eSIM 基本上是<strong>一支手機一組</strong>，全家都要上網的話每支手機都要各自準備。如果是三、四個人一起行動、又不介意共用一台機器，租借 Wi-Fi 分享器反而可能比較單純。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 有網路之後，交通票券也要先準備嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                網路搞定之後，下一個要決定的通常是交通。行程集中在東京都心的話可以看
                <Link href="/tokyo-subway-ticket" className="text-blue-600 underline underline-offset-2">Tokyo Subway Ticket 怎麼選</Link>，
                機場到市區那段則可以參考<Link href="/narita-airport-access" className="text-blue-600 underline underline-offset-2">成田</Link>與
                <Link href="/haneda-airport-access" className="text-blue-600 underline underline-offset-2">羽田</Link>的交通攻略。
              </p>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">小結</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            eSIM 並不是<strong>「絕對最好」</strong>的選項——而是「對某些旅人特別方便」的選擇。<br />
            獨自旅遊、想省下找 SIM 的時間、不想多帶 Wi-Fi 機的人，eSIM 通常是合適的方案。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            購買前先檢查手機是否支援，並依行程天數選擇合適方案——就能讓<strong>日本自由行的網路問題提前安心搞定</strong>📱
          </p>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「下飛機就有網路真的太安心了，地圖一打開就能跟著走📱」</p>
            </div>
          </div>
        </div>

        {/* アフィリエイト表記 */}
        <section className="bg-stone-50 border border-stone-200 rounded-2xl p-4 mb-10">
          <p className="text-xs text-stone-500 leading-relaxed">
            📎 本網站部分連結包含聯盟行銷連結。若您透過連結預訂或購買，我們可能會獲得佣金，讀者不會因此支付額外費用。感謝您的支持，我們會繼續分享有用的日本旅遊資訊。
          </p>
        </section>

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

        <RelatedArticles slug="japan-esim" exclude={["/koyo", "/tokyo-subway-ticket", "/tokyo-tower"]} />

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
