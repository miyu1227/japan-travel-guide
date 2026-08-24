import type { FaqItem } from "@/lib/business/faq";

/**
 * FAQ。JSだけに頼らず <details> で開閉するので、
 * スクリプトが読み込まれる前でも中身が読める。
 */
export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.q}>
          <details className="group rounded-2xl border border-biz-line bg-white open:shadow-[0_1px_2px_rgba(18,49,79,0.04)]">
            <summary className="flex cursor-pointer list-none items-start gap-3 p-5 text-sm font-bold text-biz-ink marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue sm:text-[0.95rem]">
              <span aria-hidden="true" className="mt-px shrink-0 font-bold text-biz-blue">
                Q
              </span>
              <span className="grow">{item.q}</span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-biz-blue transition-transform group-open:rotate-45"
              >
                ＋
              </span>
            </summary>
            <div className="flex gap-3 border-t border-biz-line px-5 py-4">
              <span aria-hidden="true" className="shrink-0 font-bold text-biz-muted">
                A
              </span>
              <p className="text-sm leading-relaxed text-biz-muted">{item.a}</p>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
