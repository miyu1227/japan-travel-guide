import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/about";

export const metadata: Metadata = {
  title: "關於我們｜Japan Trip Picks",
  description: "Japan Trip Picks 是專為台灣・香港旅客打造的日本旅遊資訊網站，介紹咖啡廳、美食與觀光景點。",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700">關於我們</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-black text-stone-800 mb-2">關於我們</h1>
        <p className="text-xs text-stone-400 mb-6">About Japan Trip Picks</p>

        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6 space-y-4 text-sm text-stone-600 leading-relaxed">
          <div>
            <p className="text-xs font-bold text-stone-500 mb-1">網站名稱</p>
            <p>Japan Trip Picks</p>
          </div>
          <div>
            <p className="text-xs font-bold text-stone-500 mb-1">營運單位</p>
            <p>Japan Trip Picks 編輯部</p>
          </div>
          <div>
            <p className="text-xs font-bold text-stone-500 mb-1">網站內容</p>
            <p>本網站以介紹日本旅遊資訊為主，涵蓋咖啡廳、美食與觀光景點，致力於以簡單易懂的方式向海外旅客（特別是台灣與香港用戶）傳遞日本的魅力。</p>
            <p className="mt-2">本網站的資訊皆基於實際造訪與體驗整理而成。</p>
          </div>
          <div>
            <p className="text-xs font-bold text-stone-500 mb-1">聯絡方式</p>
            <p>
              <a href="mailto:poyapiyotonemuneko@gmail.com" className="text-blue-600 underline break-all">
                poyapiyotonemuneko@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>

      <footer className="bg-white border-t border-yellow-100 mt-8 py-6 px-4 text-center text-xs text-stone-400">
        <p>© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
