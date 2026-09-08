"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Item = { id: string; text: string };

/**
 * 記事の右側に出す目次。
 *
 * PCだと本文の左右が空いていて、そこがずっと「飾りだけ」だった。
 * 記事の h2 を読んで目次にすることで、空きを記事の一部にする。
 * 記事63本のJSXは触らず、描画後のDOMから見出しを拾って組み立てる。
 */
export default function ArticleToc() {
  const pathname = usePathname();
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState<string>("");

  const enabled = pathname !== "/" && !pathname.startsWith("/business");

  useEffect(() => {
    if (!enabled) {
      setItems([]);
      return;
    }
    const article = document.querySelector("article, main");
    if (!article) return;

    const found: Item[] = [];
    article.querySelectorAll("h2").forEach((h, i) => {
      const text = (h.textContent ?? "").trim();
      if (!text) return;
      if (!h.id) h.id = `sec-${i}`;
      // 共通ヘッダー(64px)＋パンくず(57px)のぶん下げて止める
      h.style.scrollMarginTop = "132px";
      found.push({ id: h.id, text });
    });
    setItems(found.length >= 3 ? found : []);
  }, [enabled, pathname]);

  useEffect(() => {
    if (items.length === 0) return;
    const onScroll = () => {
      let current = items[0].id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= 160) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  if (!enabled || items.length === 0) return null;

  return (
    <nav className="toc-rail" aria-label="目次">
      <p className="mb-3 flex items-center gap-2 text-[11px] font-black tracking-[0.18em] text-stone-400">
        <span className="h-px w-4 bg-stone-300" />
        目次
      </p>
      <ul className="flex flex-col gap-1">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`block rounded-lg px-3 py-2 text-[13px] font-bold leading-snug transition-colors ${
                active === it.id
                  ? "bg-white text-stone-900 shadow-sm ring-1 ring-stone-900/5"
                  : "text-stone-500 hover:bg-white/70 hover:text-stone-800"
              }`}
            >
              {it.text}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="mt-3 block rounded-lg px-3 py-2 text-[13px] font-bold text-stone-400 transition-colors hover:text-stone-800"
      >
        ↑ 回到頂端
      </a>
    </nav>
  );
}
