import Link from "next/link";
import { footerGroups } from "@/lib/articles";
import { HUBS } from "@/lib/hubs";


export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-yellow-100 mt-12 pt-8 pb-6 px-4">
      <div className="mx-auto w-full max-w-[1400px] px-1 sm:px-4 lg:px-8">
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

        {/* SNS。以前はトップページ専用フッターにだけ置いていたが、
            そのフッターを廃止したので全ページ共通のここへ移した。 */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/japantrippicks?igsh=aWlid2Z4M2tpengx&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white shadow-sm transition-opacity hover:opacity-80"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61579453230592&sk=directory_links"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-opacity hover:opacity-80"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        <p className="text-center text-xs text-stone-400 mt-4">© 2026 Japan Trip Picks. All rights reserved.</p>
        <p className="text-center text-[10px] text-stone-400 mt-1">本網站部分連結為聯盟行銷連結，讀者不會因此支付額外費用。</p>
      </div>
    </footer>
  );
}
