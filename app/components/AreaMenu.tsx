"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AREA_DEFS } from "@/lib/areas";

/**
 * ヘッダーの「地區」プルダウン。
 * 樂吃購・gogo-japan と同じく、どのページからでも地域を選べるようにするための入口。
 * 選ぶと /#area-tokyo のようにトップへ飛び、その地域で絞り込んだ状態で開く。
 */
export default function AreaMenu({ counts }: { counts: Record<string, number> }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 rounded-full border-2 px-4 py-1.5 text-[15px] font-bold transition-colors ${
          open
            ? "border-stone-900 bg-stone-900 text-white"
            : "border-stone-800 bg-white text-stone-800 hover:bg-stone-100"
        }`}
      >
        地區
        <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9 L12 15 L18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-stone-200 bg-white py-2 shadow-xl">
          <Link
            href="/#articles"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-[15px] font-bold text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
          >
            全部
            <span className="text-xs font-bold text-stone-400">{counts.all ?? 0}</span>
          </Link>
          <span className="my-1 block h-px bg-stone-100" />
          {AREA_DEFS.map((a) => (
            <Link
              key={a.slug}
              href={`/#area-${a.slug}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 text-[15px] font-bold text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
            >
              {a.label}
              <span className="text-xs font-bold text-stone-400">{counts[a.label] ?? 0}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
