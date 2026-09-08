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
        className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-bold transition-colors ${
          open ? "bg-stone-900 text-white" : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
        }`}
      >
        地區
        <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9 L12 15 L18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-stone-200 bg-white py-1.5 shadow-xl">
          <Link
            href="/#articles"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-2.5 text-sm font-bold text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
          >
            全部
            <span className="text-[11px] font-bold text-stone-400">{counts.all ?? 0}</span>
          </Link>
          <span className="my-1 block h-px bg-stone-100" />
          {AREA_DEFS.map((a) => (
            <Link
              key={a.slug}
              href={`/#area-${a.slug}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 text-sm font-bold text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900"
            >
              {a.label}
              <span className="text-[11px] font-bold text-stone-400">{counts[a.label] ?? 0}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
