"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ARTICLE_BY_SLUG, ARTICLES, picks, type PickItem } from "@/lib/articles";
import { AREA_DEFS, AREA_LABEL_BY_SLUG } from "@/lib/areas";
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
  /** カード左上に置く分類ラベルの色 */
  chip: string;
};

const categories: Category[] = [
  { id: "ramen", icon: "🍽️", label: "Gourmet", labelZh: "美食", tint: "bg-red-50 text-red-500", chip: "bg-red-500 text-white" },
  { id: "snacks", icon: "🍘", label: "Snacks", labelZh: "零食伴手禮", tint: "bg-orange-50 text-orange-500", chip: "bg-orange-500 text-white" },
  { id: "cafe", icon: "☕", label: "Cafés", labelZh: "咖啡廳", tint: "bg-pink-50 text-pink-500", chip: "bg-pink-500 text-white" },
  { id: "spot", icon: "📍", label: "Spots", labelZh: "景點", tint: "bg-blue-50 text-blue-500", chip: "bg-blue-500 text-white" },
  { id: "prep", icon: "🎒", label: "Travel Prep", labelZh: "出發前準備", tint: "bg-amber-50 text-amber-600", chip: "bg-amber-500 text-white" },
];

const CAT_BY_ID: Record<string, Category> = Object.fromEntries(categories.map((c) => [c.id, c]));

/** 全記事を新しい順に1本の配列へ。トップは分類ごとの章立てをやめて、これを1グリッドで出す。 */
const ALL_ARTICLES: PickItem[] = [...ARTICLES]
  .sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0))
  .map((a) => ({ ...a, href: `/${a.slug}` }));

const INITIAL_VISIBLE = 12;

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

function ArticleCard({ item, visible }: { item: PickItem; visible: boolean }) {
  const cat = CAT_BY_ID[item.category];
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
          <div className={`flex h-full w-full items-center justify-center text-5xl ${cat?.tint ?? ""}`}>{item.emoji}</div>
        )}
        {/* カテゴリで章立てせず1グリッドに混ぜるので、どの種類の記事かはカードで示す */}
        <span className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${cat?.chip ?? "bg-white/95 text-stone-600"}`}>
          {cat?.labelZh}
        </span>
        <span className="absolute right-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-stone-600 shadow-sm">
          {item.tag}
        </span>
        {item.sponsored && (
          <span className="absolute bottom-2.5 right-2.5 rounded-full bg-stone-900/85 px-2 py-1 text-[10px] font-bold tracking-wide text-white">
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

/** 地域タブの並び。「其他」は必ず最後。 */
const AREA_ORDER = ["東京", "大阪", "兵庫", "北海道", "四國", "其他"];
const AREAS = AREA_ORDER.filter((a) => ALL_ARTICLES.some((x) => x.areas.includes(a)));

/** 絞り込みボタン1個。押せることが一目でわかるよう、面のあるボタンにする。 */
function FilterPill({
  label,
  count,
  active,
  activeClass,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  activeClass: string;
  onClick: () => void;
}) {
  const disabled = count === 0 && !active;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-all ${
        active
          ? `${activeClass} shadow-[0_3px_0_rgba(27,27,27,0.15)]`
          : disabled
            ? "cursor-not-allowed border border-stone-200 bg-white text-stone-300"
            : "border border-stone-300 bg-white text-stone-700 hover:-translate-y-0.5 hover:border-stone-900 hover:text-stone-900"
      }`}
    >
      {label}
      <span className={`text-[11px] font-bold ${active ? "text-white/70" : "text-stone-400"}`}>{count}</span>
    </button>
  );
}

function ArticleGrid() {
  const [cat, setCat] = useState<string>("all");
  const [area, setArea] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);

  // ヘッダーの「美食」などから /#cafe で飛んできたとき、その分類を選んだ状態で開く。
  useEffect(() => {
    const apply = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      // ヘッダーの地區メニューは /#area-tokyo のかたちで飛んでくる
      if (id.startsWith("area-")) {
        const label = AREA_LABEL_BY_SLUG[id.slice(5)];
        if (label) {
          setArea(label);
          setExpanded(false);
        }
        return;
      }
      if (categories.some((c) => c.id === id)) {
        setCat(id);
        setExpanded(false);
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const matchCat = (a: PickItem, id: string) => id === "all" || a.category === id;
  const matchArea = (a: PickItem, id: string) => id === "all" || a.areas.includes(id);

  const filtered = ALL_ARTICLES.filter((a) => matchCat(a, cat) && matchArea(a, area));
  const hasMore = filtered.length > INITIAL_VISIBLE;

  // 件数はもう片方の絞り込みを効かせた状態で数える。0件の組み合わせは押せなくする。
  const catCount = (id: string) => ALL_ARTICLES.filter((a) => matchCat(a, id) && matchArea(a, area)).length;
  const areaCount = (id: string) => ALL_ARTICLES.filter((a) => matchCat(a, cat) && matchArea(a, id)).length;

  // SEO: 折りたたみ分も初期HTMLに残す。表示だけ hidden で切る。
  const visibleHrefs = new Set(
    filtered.slice(0, expanded ? filtered.length : INITIAL_VISIBLE).map((a) => a.href)
  );

  const isFiltered = cat !== "all" || area !== "all";
  const reset = () => {
    setCat("all");
    setArea("all");
    setExpanded(false);
    if (window.location.hash) history.replaceState(null, "", window.location.pathname);
  };

  return (
    <section id="articles" className="scroll-mt-24">
      {/* 分類ごとに章立てせず、1つのグリッドに新しい順で混ぜる。
          章に分けると3件の「零食伴手禮」と24件の「景點」が同じ重みで並んで読みにくかった。 */}
      <div className="mb-6 border-b border-stone-200 pb-4">
        <h2 className="text-2xl font-black tracking-tight text-stone-900 sm:text-[28px]">全部文章</h2>
        <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
          All articles ・ {ALL_ARTICLES.length} 篇・新的在前
        </p>
      </div>

      {/* 絞り込み。下線タブだと押せることが伝わらなかったので面のあるボタンにした。
          分類の選択中の色は、カード左上のラベルと同じ色を使って対応をわからせる。 */}
      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 sm:p-5">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
          <span className="shrink-0 text-xs font-black tracking-widest text-stone-400 sm:w-12">分類</span>
          <div className="flex flex-wrap gap-2">
            <FilterPill
              label="全部"
              count={catCount("all")}
              active={cat === "all"}
              activeClass="bg-stone-900 text-white"
              onClick={() => {
                setCat("all");
                setExpanded(false);
              }}
            />
            {categories.map((c) => (
              <FilterPill
                key={c.id}
                label={c.labelZh}
                count={catCount(c.id)}
                active={cat === c.id}
                activeClass={c.chip}
                onClick={() => {
                  setCat(c.id);
                  setExpanded(false);
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3.5 flex flex-col gap-2.5 border-t border-stone-200 pt-3.5 sm:flex-row sm:items-center sm:gap-4">
          <span className="shrink-0 text-xs font-black tracking-widest text-stone-400 sm:w-12">地區</span>
          <div className="flex flex-wrap gap-2">
            <FilterPill
              label="全部"
              count={areaCount("all")}
              active={area === "all"}
              activeClass="bg-stone-900 text-white"
              onClick={() => {
                setArea("all");
                setExpanded(false);
              }}
            />
            {AREAS.map((a) => (
              <FilterPill
                key={a}
                label={a}
                count={areaCount(a)}
                active={area === a}
                activeClass="bg-stone-900 text-white"
                onClick={() => {
                  setArea(a);
                  setExpanded(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-7 mt-4 flex items-center gap-3 text-sm">
        <p className="font-bold text-stone-600">
          {isFiltered ? (
            <>
              {cat === "all" ? "全部" : CAT_BY_ID[cat]?.labelZh}
              {area !== "all" && <> ・ {area}</>}：<span className="text-stone-900">{filtered.length}</span> 篇
            </>
          ) : (
            <>共 {filtered.length} 篇</>
          )}
        </p>
        {isFiltered && (
          <button
            type="button"
            onClick={reset}
            className="rounded-full px-2.5 py-1 text-xs font-bold text-stone-400 underline underline-offset-2 transition-colors hover:text-stone-900"
          >
            清除篩選
          </button>
        )}
      </div>

      {/* ヘッダーのナビが /#ramen・/#area-tokyo で飛んでくる先。
          実体のあるidを置いておくと、絞り込みの適用だけでなくスクロールもブラウザ任せにできる。 */}
      {categories.map((c) => (
        <span key={c.id} id={c.id} className="block h-0 scroll-mt-28" aria-hidden="true" />
      ))}
      {AREA_DEFS.map((a) => (
        <span key={a.slug} id={`area-${a.slug}`} className="block h-0 scroll-mt-28" aria-hidden="true" />
      ))}

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50 p-12 text-center text-stone-400">
          <div className="mb-2 text-3xl">🐣</div>
          <p className="text-sm">這個組合還沒有文章</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 xl:grid-cols-4">
          {ALL_ARTICLES.map((item) => (
            <ArticleCard key={item.href} item={item} visible={visibleHrefs.has(item.href)} />
          ))}
        </div>
      )}

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
                <span>還有 {filtered.length - INITIAL_VISIBLE} 篇</span>
                <span className="transition-transform group-hover:translate-y-0.5">▼</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

/* ---------------------------------------------------------------- ページ */

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
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

        <div className={`${SHELL} relative grid items-center gap-6 py-7 sm:gap-10 sm:py-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-10`}>
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

      {/* ------------------------------------------------ 想去哪裡？（地域の入口） */}
      {/* エリアの絞り込みタブ（東京34件・北海道1件…）をやめて、
          すでにある主題ハブ7本を写真つきの入口として前に出した。 */}
      <section id="hubs" className="scroll-mt-24">
        <div className={`${SHELL} py-9 lg:py-11`}>
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-stone-900 sm:text-[28px]">想去哪裡？</h2>
              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
                Guides ・ 依地區與主題整理好的懶人包
              </p>
            </div>
            <a href="#articles" className="text-sm font-bold text-stone-500 transition-colors hover:text-stone-900">
              直接看全部文章 →
            </a>
          </div>

          {/* 7枚を3段に積むと1000px超えて記事一覧が2画面先になっていたので、
              横1段にして画面からはみ出させる（はみ出しでスクロールできると伝わる）。 */}
          <div className="scrollbar-hide -mx-5 flex gap-5 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
            {HUBS.map((hub) => {
              const slugs = hub.sections.flatMap((sec) => sec.slugs);
              const count = new Set(slugs).size;
              const thumb = hub.image ?? hubThumb(slugs);
              return (
                <Link key={hub.slug} href={`/${hub.slug}`} className="group block w-[268px] shrink-0 sm:w-[320px]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-amber-50 ring-1 ring-stone-900/5">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt=""
                        fill
                        sizes="320px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    ) : (
                      <span className="grid h-full w-full place-items-center text-4xl">{hub.emoji}</span>
                    )}
                    {/* 写真の上に見出しを重ねて、地域の入口だと一目でわかるようにする */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3.5">
                      <p className="text-[15px] font-black leading-snug text-white drop-shadow-sm">
                        {hub.emoji} {hub.h1}
                      </p>
                      <p className="mt-0.5 text-[11px] font-bold text-white/80">{count} 篇整理</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- 記事一覧 */}
      <main className={`${SHELL} pb-16`}>
        <ArticleGrid />
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
