import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/privacy";

export const metadata: Metadata = {
  title: "隱私權政策｜Japan Trip Picks",
  description: "Japan Trip Picks 的隱私權政策。關於 Cookie、Google AdSense、Google Analytics 與個人資料的處理方式。",
  alternates: { canonical: PAGE_URL },
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
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6 space-y-4 text-sm text-stone-600 leading-relaxed">
          <p>本網站（Japan Trip Picks）預計使用第三方廣告服務（Google AdSense）。</p>
          <p>此類廣告服務提供商可能會使用 Cookie（瀏覽器記錄）來根據用戶的興趣顯示相關廣告。透過使用 Cookie，本網站可以識別使用者的裝置，但不會識別個人身分。</p>
          <p>若您希望停用 Cookie，請透過瀏覽器設定進行調整，或參考 <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google 廣告政策</a> 了解更多資訊。</p>
          <p>此外，本網站可能使用存取分析工具（例如 Google Analytics），以蒐集網站流量數據。這些資料亦透過 Cookie 收集，且不會識別個人身分。</p>
          <p>本網站致力於提供正確且最新的資訊，但不保證內容的完整性、正確性與安全性。對於因使用本網站資訊而造成的任何損失，本網站概不負責，敬請見諒。</p>
        </div>
      </article>

      <footer className="bg-white border-t border-yellow-100 mt-8 py-6 px-4 text-center text-xs text-stone-400">
        <p>© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
