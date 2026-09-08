"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ARTICLE_BY_SLUG, picks, type PickItem } from "@/lib/articles";
import { HUBS } from "@/lib/hubs";
import HeroArt, { HeroPetals } from "./components/HeroArt";

/**
 * 中央カラムの幅と左右パディングは全セクションでこの1本に統一する。
 * 以前はヒーローだけ 1400px・他は 1280px で、PCで見たとき境目がガタついていた。
 */
const SHELL = "mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12";

type Category = {
  id: string;
  icon: string;
  label: string;
  labelZh: string;
  /** アイコンタイルの淡い面 */
  tint: string;
  hasAreaFilter: boolean;
};

const categories: Category[] = [
  { id: "ramen", icon: "🍽️", label: "Gourmet", labelZh: "美食", tint: "bg-red-50 text-red-500", hasAreaFilter: true },
  { id: "snacks", icon: "🍘", label: "Snacks", labelZh: "零食伴手禮", tint: "bg-orange-50 text-orange-500", hasAreaFilter: false },
  { id: "cafe", icon: "☕", label: "Cafés", labelZh: "咖啡廳", tint: "bg-pink-50 text-pink-500", hasAreaFilter: true },
  { id: "spot", icon: "📍", label: "Spots", labelZh: "景點", tint: "bg-blue-50 text-blue-500", hasAreaFilter: true },
  { id: "prep", icon: "🎒", label: "Travel Prep", labelZh: "出發前準備", tint: "bg-amber-50 text-amber-600", hasAreaFilter: false },
];

const areas = ["全部", "東京", "大阪", "兵庫", "北海道", "四國", "其他"];

const INITIAL_VISIBLE = 8;

const HOT_KEYWORDS = [
  { href: "/taiwan-japan-guide", label: "台灣飛日本" },
  { href: "/hongkong-japan-guide", label: "香港去日本" },
  { href: "/tokyo-gourmet", label: "東京必食推介" },
  { href: "/tokyo-cafe", label: "東京咖啡店推介" },
  { href: "/tokyo-tower", label: "東京鐵塔" },
  { href: "/skytree", label: "東京晴空塔" },
  { href: "/tokyo-disney-around", label: "東京迪士尼" },
  { href: "/ramen", label: "東京拉麵" },
  { href: "/kansai-ramen", label: "關西拉麵" },
  { href: "/ajisai", label: "紫陽花" },
  { href: "/hakone", label: "箱根" },
  { href: "/hokkaido", label: "北海道" },
  { href: "/kamikochi", label: "上高地" },
  { href: "/kobe-cafe", label: "神戶咖啡" },
  { href: "/shukugawa", label: "夙川" },
  { href: "/steak-zen", label: "神戶牛" },
  { href: "/kagawa", label: "香川烏龍麵" },
  { href: "/kochi", label: "高知" },
  { href: "/shirahama", label: "和歌山白浜" },
  { href: "/ine", label: "京都伊根" },
  { href: "/katsunuma", label: "山梨勝沼" },
  { href: "/nakameguro-cafe", label: "中目黑星巴克" },
  { href: "/ikejiri-cafe", label: "池尻大橋咖啡" },
  { href: "/shibuya-yakiniku", label: "澀谷燒肉" },
  { href: "/kiyosumi-cafe", label: "清澄白河咖啡" },
  { href: "/shimokitazawa-cafe", label: "下北澤咖啡" },
  { href: "/rokko-arima", label: "有馬溫泉" },
  { href: "/japan-esim", label: "日本eSIM" },
  { href: "/tokyo-subway-ticket", label: "東京地鐵券" },
  { href: "/narita-airport-access", label: "成田機場" },
  { href: "/haneda-airport-access", label: "羽田機場" },
  { href: "/utsunomiya-gyoza", label: "宇都宮餃子" },
];

const TRUST_BADGES = ["台灣人親測", "香港旅客啱用", "IG打卡點", "CP值爆表・抵食", "附地圖連結"];

/** ハブカードのサムネ。所属記事の最初の写真を借りる（ハブ自体は画像を持たない）。 */
function hubThumb(slugs: string[]): string | undefined {
  for (const slug of slugs) {
    const image = ARTICLE_BY_SLUG[slug]?.image;
    if (image) return image;
  }
  return undefined;
}

/* ---------------------------------------------------------------- カード */

function ArticleCard({ item, visible, tint }: { item: PickItem; visible: boolean; tint: string }) {
  return (
    <Link href={item.href} className={`${visible ? "block" : "hidden"} group`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 ring-1 ring-stone-900/5">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center text-5xl ${tint}`}>{item.emoji}</div>
        )}
        <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-stone-600 shadow-sm">
          {item.tag}
        </span>
        {item.sponsored && (
          <span className="absolute right-2.5 top-2.5 rounded-full bg-stone-900/85 px-2 py-1 text-[10px] font-bold tracking-wide text-white">
            PR
          </span>
        )}
      </div>
      <h3 className="mt-3 line-clamp-2 text-[15px] font-bold leading-snug text-stone-900 transition-colors group-hover:text-red-500">
        {item.name}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-stone-500">{item.desc}</p>
    </Link>
  );
}

/* ------------------------------------------------------ カテゴリセクション */

function CategorySection({ cat }: { cat: Category }) {
  const items = picks[cat.id] ?? [];
  const [selected, setSelected] = useState("全部");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    cat.hasAreaFilter && selected !== "全部" ? items.filter((item) => item.areas.includes(selected)) : items;
  const hasMore = filtered.length > INITIAL_VISIBLE;

  // SEO: 折りたたみ分も初期HTMLに残す。表示だけ hidden で切る。
  const visibleHrefs = new Set(
    filtered.slice(0, expanded ? filtered.length : INITIAL_VISIBLE).map((item) => item.href)
  );

  return (
    <section id={cat.id} className="scroll-mt-24">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-stone-200 pb-4">
        <div className="flex items-center gap-3.5">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-2xl ${cat.tint}`}>
            {cat.icon}
          </span>
          <div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900 sm:text-[28px]">{cat.labelZh}</h2>
            <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
              {cat.label} ・ {items.length} 篇
            </p>
          </div>
        </div>

        {cat.hasAreaFilter && (
          <div className="scrollbar-hide -mb-4 flex max-w-full gap-1 overflow-x-auto">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => {
                  setSelected(area);
                  setExpanded(false);
                }}
                className={`shrink-0 border-b-2 px-3 pb-3.5 text-sm font-bold transition-colors ${
                  selected === area
                    ? "border-stone-900 text-stone-900"
                    : "border-transparent text-stone-400 hover:text-stone-700"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50 p-10 text-center text-stone-400">
          <div className="mb-2 text-3xl">🐣</div>
          <p className="text-sm">近期更新中⋯</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <ArticleCard key={item.href} item={item} visible={visibleHrefs.has(item.href)} tint={cat.tint} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-9 flex justify-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="group inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-bold text-stone-700 transition-all hover:border-stone-900 hover:bg-stone-900 hover:text-white"
              >
                {expanded ? (
                  <>
                    <span>收起</span>
                    <span className="transition-transform group-hover:-translate-y-0.5">▲</span>
                  </>
                ) : (
                  <>
                    <span>還有 {filtered.length - INITIAL_VISIBLE} 篇{cat.labelZh}</span>
                    <span className="transition-transform group-hover:translate-y-0.5">▼</span>
                  </>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

/* ---------------------------------------------------------------- ページ */

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      {/* ------------------------------------------------------- Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
        <div className={`${SHELL} flex h-16 items-center justify-between gap-6`}>
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="relative block h-9 w-9 overflow-hidden rounded-full bg-amber-50 ring-1 ring-amber-100">
              <Image src="/poyapiyo-flag.png" alt="" fill sizes="36px" className="object-contain p-0.5" />
            </span>
            <span className="font-brand text-[18px] font-bold tracking-tight text-stone-900">Japan Trip Picks</span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full px-3.5 py-2 text-sm font-bold text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
              >
                {cat.labelZh}
              </a>
            ))}
            <a
              href="#hubs"
              className="rounded-full px-3.5 py-2 text-sm font-bold text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
            >
              主題總覽
            </a>
          </nav>

          <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 sm:flex">
            🇯🇵 台灣・香港專屬
          </span>
        </div>

        {/* スマホはヘッダーにナビが入らないので、下段にカテゴリを出す */}
        <div className="border-t border-stone-100 lg:hidden">
          <div className={`${SHELL} scrollbar-hide flex gap-2 overflow-x-auto py-2.5`}>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold ${cat.tint}`}
              >
                {cat.icon} {cat.labelZh}
              </a>
            ))}
            <a href="#hubs" className="shrink-0 rounded-full bg-stone-100 px-3.5 py-1.5 text-xs font-bold text-stone-600">
              🧭 主題總覽
            </a>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------- Hero */}
      {/* 案A「スタンプ帳」。ぽやぴよ（公式画像）を日本モチーフのステッカーで囲む。 */}
      <section className="relative overflow-hidden border-b border-amber-100 bg-[#FFF8E8]">
        {/* 紙のドット地 */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#F1E1B4 1.7px, transparent 1.7px)",
            backgroundSize: "24px 24px",
          }}
        />
        <HeroPetals />

        <div className={`${SHELL} relative grid items-center gap-8 py-8 sm:gap-12 sm:py-11 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12 lg:py-14`}>
          {/* Left: コピー */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-stone-900 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-stone-900">
              台灣・香港旅客的日本旅遊指南
            </p>

            <h1 className="mt-5 font-brand text-[42px] font-bold leading-[1.02] tracking-tight text-stone-900 sm:text-[52px] lg:text-[64px]">
              Japan Trip Picks
            </h1>

            <p className="mt-5 text-2xl font-extrabold leading-snug text-stone-900 sm:text-[32px]">
              日本自由行，不踩雷。
            </p>
            <p className="mt-2 text-lg font-bold text-[#E4593F] sm:text-xl">
              咖啡廳・必吃美食・觀光景點，全部實際走過
            </p>

            <p className="mt-5 max-w-lg text-[15px] leading-[1.9] text-stone-600">
              專為<strong className="font-bold text-stone-900">台灣與香港旅客</strong>打造的日本旅遊資訊網站。
              連甜點甜品同伴手禮手信都寫齊，
              <strong className="font-bold text-stone-900">每一篇都親自造訪、實際吃過走過才寫</strong>。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ramen"
                className="rounded-full bg-stone-900 px-7 py-4 text-sm font-bold text-white shadow-[0_5px_0_rgba(27,27,27,0.18)] transition-colors hover:bg-stone-700"
              >
                先看必吃美食
              </a>
              <a
                href="#hubs"
                className="rounded-full border-[2.5px] border-stone-900 bg-white px-7 py-[13px] text-sm font-bold text-stone-900 transition-colors hover:bg-stone-100"
              >
                主題總覽
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-bold text-stone-500">
              {TRUST_BADGES.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] text-emerald-600" aria-hidden="true">
                    <path
                      d="M4 13 L9.5 18.5 L20 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: ぽやぴよ＋日本モチーフのステッカー */}
          <HeroArt />
        </div>
      </section>

      {/* ------------------------------------------------- 熱門搜尋（内部リンク） */}
      <section className="border-b border-stone-100 bg-stone-50">
        <div className={`${SHELL} py-5`}>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-baseline sm:gap-6">
            <p className="shrink-0 text-xs font-black tracking-wide text-stone-500">🔍 熱門搜尋</p>
            <div className="flex flex-wrap gap-x-1 gap-y-1">
              {HOT_KEYWORDS.map((k) => (
                <Link
                  key={k.href}
                  href={k.href}
                  className="rounded-md px-2 py-1 text-[13px] text-stone-500 transition-colors hover:bg-white hover:text-stone-900 hover:shadow-sm"
                >
                  {k.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- 主題總覽 */}
      <section id="hubs" className="scroll-mt-24">
        <div className={`${SHELL} py-12 lg:py-16`}>
          <div className="mb-7 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-black tracking-tight text-stone-900 sm:text-[28px]">主題總覽</h2>
            <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
              Guides ・ 想好要玩哪一種了嗎？
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HUBS.map((hub) => {
              const slugs = hub.sections.flatMap((s) => s.slugs);
              const count = new Set(slugs).size;
              const thumb = hubThumb(slugs);
              return (
                <Link
                  key={hub.slug}
                  href={`/${hub.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-3 pr-5 transition-all hover:-translate-y-0.5 hover:border-stone-900 hover:shadow-lg"
                >
                  <span className="relative block h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl bg-amber-50">
                    {thumb ? (
                      <Image src={thumb} alt="" fill sizes="72px" className="object-cover" />
                    ) : (
                      <span className="grid h-full w-full place-items-center text-2xl">{hub.emoji}</span>
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-bold leading-snug text-stone-900">
                      {hub.emoji} {hub.h1}
                    </span>
                    <span className="mt-1.5 block text-xs text-stone-400">{count} 篇整理</span>
                  </span>
                  <span className="shrink-0 text-stone-300 transition-transform group-hover:translate-x-1 group-hover:text-stone-900">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- 記事一覧 */}
      <main className={`${SHELL} space-y-16 pb-20 lg:space-y-20`}>
        {categories.map((cat) => (
          <CategorySection key={cat.id} cat={cat} />
        ))}
      </main>

      {/* --------------------------------------------------------- About */}
      <section className="border-y border-stone-200 bg-stone-50">
        <div className={`${SHELL} grid gap-8 py-12 lg:grid-cols-[1.5fr_1fr] lg:py-14`}>
          <div>
            <h2 className="text-lg font-black text-stone-900">關於 Japan Trip Picks</h2>
            <p className="mt-3 max-w-2xl text-sm leading-[1.9] text-stone-600">
              Japan Trip Picks 是一個介紹日本旅遊、美食與咖啡廳的資訊網站。
              我們以實際造訪的體驗為基礎，精選值得推薦的景點，提供給台灣與香港旅客參考。
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <p className="text-sm font-bold text-stone-700">🐣 更多推薦持續更新中</p>
            <a
              href="https://www.instagram.com/japantrippicks?igsh=aWlid2Z4M2tpengx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              追蹤 Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- 掲載プラン */}
      <section className="bg-stone-900">
        <div className={`${SHELL} py-10 lg:py-12`}>
          <Link href="/promotion" className="group flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-500">For Business</p>
              <p className="mt-2 text-lg font-black text-white sm:text-xl" lang="ja">
                📢 掲載・プロモーションのご案内
              </p>
              <p className="mt-1.5 text-sm text-stone-400" lang="ja">
                訪日外国人向けに、あなたのお店・スポットをPRしませんか？
              </p>
            </div>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-900 transition-transform group-hover:translate-x-1"
              lang="ja"
            >
              詳細を見る →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
