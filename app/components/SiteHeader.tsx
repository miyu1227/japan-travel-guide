import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import HeaderMenu, { type SearchItem } from "./HeaderMenu";

/**
 * 全ページ共通のヘッダー。
 *
 * これまではトップページにしかナビが無く、検索から記事に直接来た人は
 * フッターまでスクロールしないとサイト内を回遊できなかった。
 *
 * 高さは全ブレークポイントで64px（中身63px＋下線1px）に固定してある。記事ページの
 * パンくずバーが sticky top-16 でこの下に重なる前提なので、ここを変えるなら
 * 各ページの top-16 も一緒に直すこと。
 */

const CAT_LABEL: Record<string, string> = {
  ramen: "美食",
  snacks: "零食伴手禮",
  cafe: "咖啡廳",
  spot: "景點",
  prep: "出發前準備",
};

const NAV = [
  { href: "/#ramen", label: "美食" },
  { href: "/#snacks", label: "零食伴手禮" },
  { href: "/#cafe", label: "咖啡廳" },
  { href: "/#spot", label: "景點" },
  { href: "/#prep", label: "出發前準備" },
  { href: "/#hubs", label: "主題總覽" },
];

// 検索用に必要な4項目だけに削ってからクライアントへ渡す。
const SEARCH_ITEMS: SearchItem[] = ARTICLES.map((a) => ({
  href: `/${a.slug}`,
  name: a.name,
  tag: a.tag,
  cat: CAT_LABEL[a.category] ?? "",
}));

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[63px] w-full max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="relative block h-9 w-9 overflow-hidden rounded-full bg-amber-50 ring-1 ring-amber-100">
            <Image src="/poyapiyo-stand.png" alt="" fill sizes="36px" className="object-contain p-0.5" />
          </span>
          <span className="font-brand text-[18px] font-bold tracking-tight text-stone-900">Japan Trip Picks</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 xl:flex">
            🇯🇵 台灣・香港專屬
          </span>
          <HeaderMenu items={SEARCH_ITEMS} nav={NAV} />
        </div>
      </div>
    </header>
  );
}
