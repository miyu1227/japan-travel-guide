"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { DOWNLOAD_PATH, NAV, PARENT_SITE_NAME, PARENT_SITE_URL, PARTNER_PATH } from "@/lib/business/site";

export default function BizHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // 開いている間は Esc で閉じられるようにする
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/business" ? pathname === "/business" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-biz-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-3 px-4 sm:px-6">
        {/* ロゴ */}
        {/* ブランド名は折り返しも省略もさせない。
            ナビ側に十分な余白があるので shrink-0 で固定する。 */}
        <Link
          href="/business"
          className="flex h-full shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            🐥
          </span>
          <span className="leading-tight">
            <span className="block text-[0.95rem] font-bold whitespace-nowrap text-biz-ink">
              Japan Trip Picks
            </span>
            <span className="block text-[0.65rem] font-bold tracking-[0.14em] text-biz-blue">
              FOR BUSINESS
            </span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          {/* PCナビ */}
          <nav aria-label="メインメニュー" className="hidden lg:block">
            {/* TOPはロゴが担うのでPCナビからは外す（横幅がロゴを圧迫するため） */}
            <ul className="flex items-center gap-1">
              {NAV.filter((item) => item.href !== "/business").map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue ${
                      isActive(item.href)
                        ? "text-biz-blue"
                        : "text-biz-ink hover:text-biz-blue"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 旅行者向け本体サイトへの導線。BtoBサイト側からいつでも実物を見に行けるようにする。
              スマホではハンバーガーメニューの中に同じリンクを置いている。 */}
          <a
            href={PARENT_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-md px-3 py-2 text-sm font-bold text-biz-muted transition-colors hover:text-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue lg:inline-flex"
          >
            <span aria-hidden="true">🌏</span>
            旅行者向けサイト
            <span aria-hidden="true">↗</span>
          </a>

          {/* 常時表示CTA。資料請求は問い合わせより心理的な負担が軽いのでこちらを出す。
              スマホでは文言を短くして幅を取りすぎないようにする。 */}
          <Link
            href={DOWNLOAD_PATH}
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg bg-biz-cta px-3 text-[0.8rem] font-bold whitespace-nowrap text-white transition-colors hover:bg-biz-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-cta sm:px-4 sm:text-sm"
          >
            <span className="lg:hidden">資料請求</span>
            <span className="hidden lg:inline">媒体資料を請求する</span>
          </Link>

          {/* ハンバーガー */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-biz-line text-biz-ink transition-colors hover:border-biz-blue hover:text-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue lg:hidden"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
              className="size-5"
            >
              {open ? (
                <>
                  <path d="M5 5l10 10" />
                  <path d="M15 5L5 15" />
                </>
              ) : (
                <>
                  <path d="M3 6h14" />
                  <path d="M3 10h14" />
                  <path d="M3 14h14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* スマホ用メニュー */}
      <div
        id={panelId}
        hidden={!open}
        className="border-t border-biz-line bg-white lg:hidden"
      >
        <nav aria-label="メインメニュー（モバイル）" className="mx-auto w-full max-w-5xl px-4 py-3 sm:px-6">
          {/* 代理店向けはPCナビには出さない（横幅が足りない）ので、ここにだけ足す */}
          <ul className="divide-y divide-biz-line">
            {[...NAV, { href: PARTNER_PATH, label: "代理店の方へ" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-12 items-center justify-between rounded-md px-1 text-[0.95rem] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue ${
                    isActive(item.href) ? "text-biz-blue" : "text-biz-ink"
                  }`}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-biz-line">
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={PARENT_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-11 items-center gap-2 rounded-lg bg-biz-blue-soft px-3 text-sm font-bold text-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue"
          >
            <span aria-hidden="true">🌏</span>
            訪日旅行者向けメディア {PARENT_SITE_NAME} を見る
          </a>
        </nav>
      </div>
    </header>
  );
}
