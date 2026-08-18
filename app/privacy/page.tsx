import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/privacy";

export const metadata: Metadata = {
  title: "隱私權政策｜Japan Trip Picks",
  description: "Japan Trip Picks 的隱私權政策。關於 Cookie、Google AdSense、Google Analytics 與個人資料的處理方式。",
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700">隱私權政策</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-black text-stone-800 mb-2">隱私權政策</h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年8月18日</p>

        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6 space-y-4 text-sm text-stone-600 leading-relaxed">
          <p>本網站（Japan Trip Picks）使用第三方廣告服務（Google AdSense）。Google 等第三方廣告供應商會使用 Cookie，根據使用者過去造訪本網站或其他網站的紀錄放送廣告。</p>
          <p>此類廣告服務提供商可能會使用 Cookie（瀏覽器記錄）來根據用戶的興趣顯示相關廣告。透過使用 Cookie，本網站可以識別使用者的裝置，但不會識別個人身分。</p>
          <p>若您希望停用 Cookie，請透過瀏覽器設定進行調整，或參考 <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google 廣告政策</a> 了解更多資訊。</p>
          <p>使用者可透過 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">廣告設定</a> 停用個人化廣告，或前往 <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">aboutads.info</a> 停用第三方供應商的個人化廣告 Cookie。</p>
          <p>此外，本網站使用存取分析工具 Google Analytics，以蒐集網站流量數據。這些資料亦透過 Cookie 收集，且不會識別個人身分。</p>
          <p>本網站部分連結為聯盟行銷連結（例如 Klook）。若您透過連結預訂或購買，本網站可能會獲得佣金，讀者不會因此支付額外費用。</p>
          <p>透過 <Link href="/contact" className="text-blue-600 underline">聯絡我們</Link> 頁面以電子郵件與我們聯繫時，我們僅會將您提供的電子郵件地址與內容用於回覆該次詢問，不會用於其他用途，也不會提供給第三方。</p>
          <p>本網站致力於提供正確且最新的資訊，但不保證內容的完整性、正確性與安全性。對於因使用本網站資訊而造成的任何損失，本網站概不負責，敬請見諒。</p>
          <p>本政策可能會因需要而進行更新，恕不另行通知。</p>
        </div>
      </article>

      <footer className="bg-white border-t border-yellow-100 mt-8 py-6 px-4 text-center text-xs text-stone-400">
        <p>© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
