"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export type SearchItem = {
  /** 記事のパス（/kobe-cafe） */
  href: string;
  /** カード見出し＝記事タイトル */
  name: string;
  /** 地域ラベル */
  tag: string;
  /** カテゴリの表示名 */
  cat: string;
};

type Props = {
  items: SearchItem[];
  nav: { href: string; label: string; tone: string }[];
  areas: { slug: string; label: string }[];
  areaCounts: Record<string, number>;
};

/**
 * ヘッダーの操作まわり（検索パネルとスマホのメニュー）だけを担当する。
 * 記事データは SiteHeader（サーバ側）で最小限に削ってから props で受け取るので、
 * lib/articles.ts のまるごとがクライアントに載ることはない。
 */
export default function HeaderMenu({ items, nav, areas, areaCounts }: Props) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (openSearch) inputRef.current?.focus();
  }, [openSearch]);

  // Escで閉じる。パネルを開いたまま記事へ飛ぶこともあるので、遷移時は自然に消える。
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenSearch(false);
        setOpenMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    return items
      .filter(
        (a) =>
          a.name.toLowerCase().includes(needle) ||
          a.tag.toLowerCase().includes(needle) ||
          a.cat.toLowerCase().includes(needle) ||
          a.href.toLowerCase().includes(needle)
      )
      .slice(0, 8);
  }, [items, q]);

  return (
    <>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => {
            setOpenSearch((v) => !v);
            setOpenMenu(false);
          }}
          aria-label="搜尋"
          aria-expanded={openSearch}
          className="grid h-10 w-10 place-items-center rounded-full text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5 L21 21" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => {
            setOpenMenu((v) => !v);
            setOpenSearch(false);
          }}
          aria-label="選單"
          aria-expanded={openMenu}
          className="grid h-10 w-10 place-items-center rounded-full text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {openMenu ? (
              <>
                <path d="M5 5 L19 19" />
                <path d="M19 5 L5 19" />
              </>
            ) : (
              <>
                <path d="M4 7 H20" />
                <path d="M4 12 H20" />
                <path d="M4 17 H20" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* 検索パネル */}
      {openSearch && (
        <div className="absolute inset-x-0 top-16 border-b border-stone-200 bg-white shadow-lg">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-4 sm:px-8 lg:px-12">
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜尋店名、地區或關鍵字⋯（例：中目黑、拉麵、神戶）"
              className="w-full rounded-full border-2 border-stone-300 px-5 py-3 text-[15px] outline-none focus:border-stone-900"
            />

            {q.trim() && (
              <div className="mt-3">
                {hits.length === 0 ? (
                  <p className="px-1 py-3 text-sm text-stone-400">找不到相符的文章</p>
                ) : (
                  <ul className="divide-y divide-stone-100">
                    {hits.map((a) => (
                      <li key={a.href}>
                        <Link
                          href={a.href}
                          onClick={() => setOpenSearch(false)}
                          className="flex items-center gap-3 px-1 py-3 transition-colors hover:bg-stone-50"
                        >
                          <span className="shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-bold text-stone-600">
                            {a.tag}
                          </span>
                          <span className="min-w-0 flex-1 truncate text-sm font-bold text-stone-800">{a.name}</span>
                          <span className="shrink-0 text-xs text-stone-400">{a.cat}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* スマホのメニュー */}
      {openMenu && (
        <div className="absolute inset-x-0 top-16 border-b border-stone-200 bg-white shadow-lg lg:hidden">
          <nav className="mx-auto w-full max-w-[1400px] px-5 py-3 sm:px-8">
            <p className="mb-1 text-[11px] font-black tracking-widest text-stone-400">分類</p>
            <div className="flex flex-wrap gap-2">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpenMenu(false)}
                  className={`rounded-full px-4 py-2 text-sm font-bold ${n.tone}`}
                >
                  {n.label}
                </Link>
              ))}
            </div>

            <p className="mb-2 mt-4 text-[11px] font-black tracking-widest text-stone-400">地區</p>
            <div className="flex flex-wrap gap-2 pb-3">
              <Link
                href="/#articles"
                onClick={() => setOpenMenu(false)}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-bold text-stone-700"
              >
                全部
                <span className="ml-1 text-[11px] text-stone-400">{areaCounts.all ?? 0}</span>
              </Link>
              {areas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/#area-${a.slug}`}
                  onClick={() => setOpenMenu(false)}
                  className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-bold text-stone-700"
                >
                  {a.label}
                  <span className="ml-1 text-[11px] text-stone-400">{areaCounts[a.label] ?? 0}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
