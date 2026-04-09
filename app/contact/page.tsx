import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/contact";

export const metadata: Metadata = {
  title: "聯絡我們｜Japan Trip Picks",
  description: "Japan Trip Picks 的聯絡資訊。如有任何問題或合作需求，歡迎透過電子郵件與我們聯絡。",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700">聯絡我們</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-black text-stone-800 mb-2">聯絡我們</h1>
        <p className="text-xs text-stone-400 mb-6">Contact</p>

        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-6 space-y-4 text-sm text-stone-600 leading-relaxed">
          <p>如有任何問題或合作需求，歡迎透過以下電子郵件與我們聯絡：</p>
          <p>
            <a href="mailto:poyapiyotonemuneko@gmail.com" className="text-blue-600 font-semibold underline break-all">
              poyapiyotonemuneko@gmail.com
            </a>
          </p>
          <p>我們通常會在2～3個工作天內回覆。</p>
          <p className="text-xs text-stone-400">※依內容不同，回覆可能需要一些時間，敬請見諒。</p>
        </div>
      </article>

      <footer className="bg-white border-t border-yellow-100 mt-8 py-6 px-4 text-center text-xs text-stone-400">
        <p>© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
