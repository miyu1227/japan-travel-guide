import Link from "next/link";
import { footerGroups } from "@/lib/articles";
import { HUBS } from "@/lib/hubs";


export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-yellow-100 mt-12 pt-8 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* サイト内リンク */}
        {/* 主題総覧（ハブ） */}
        <div className="mb-6">
          <h3 className="text-sm font-black text-stone-700 mb-2 flex items-center gap-1">
            <span>🧭</span>
            主題總覽
          </h3>
          <div className="flex flex-wrap gap-2">
            {HUBS.map((hub) => (
              <Link
                key={hub.slug}
                href={`/${hub.slug}`}
                className="text-xs font-bold text-stone-600 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1.5 hover:border-yellow-400 hover:text-stone-800 transition-colors"
              >
                {hub.emoji} {hub.h1}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-black text-stone-700 mb-2 flex items-center gap-1">
                <span>{group.icon}</span>
                {group.title}
              </h3>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.slug}>
                    <Link href={`/${link.slug}`} className="text-xs text-stone-500 hover:text-stone-800 hover:underline transition-colors">
                      {link.shortLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 網站情報 */}
        <div className="border-t border-stone-100 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <span className="text-lg">🐥</span>
            <span className="font-black">Japan Trip Picks</span>
            <span className="text-xs text-stone-400">by ぽやぴよ</span>
          </div>
          <nav className="flex flex-wrap gap-3 text-xs">
            <Link href="/about" className="text-stone-500 hover:text-stone-800 hover:underline">關於我們</Link>
            <span className="text-stone-300">|</span>
            <Link href="/contact" className="text-stone-500 hover:text-stone-800 hover:underline">聯絡我們</Link>
            <span className="text-stone-300">|</span>
            <Link href="/privacy" className="text-stone-500 hover:text-stone-800 hover:underline">隱私權政策</Link>
            <span className="text-stone-300">|</span>
            <Link href="/promotion" className="text-stone-500 hover:text-stone-800 hover:underline">合作</Link>
            <span className="text-stone-300">|</span>
            {/* 日本の事業者向けサイト（掲載・プロモーション） */}
            <Link href="/business" lang="ja" className="text-stone-500 hover:text-stone-800 hover:underline">For Business</Link>
          </nav>
        </div>

        <p className="text-center text-xs text-stone-400 mt-4">© 2026 Japan Trip Picks. All rights reserved.</p>
        <p className="text-center text-[10px] text-stone-400 mt-1">本網站部分連結為聯盟行銷連結，讀者不會因此支付額外費用。</p>
      </div>
    </footer>
  );
}
