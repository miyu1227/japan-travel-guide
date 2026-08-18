import Link from "next/link";

export type FaqItem = { q: string; a: string; href?: string; linkLabel?: string };

/** 記事末尾の「常見問題」。本文に書いてある事実だけをQ&Aに整理して長尾クエリを拾う。 */
export default function FaqSection({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mb-8">
      <h2 className="text-base font-black text-stone-800 mb-3">❓ 常見問題</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.q} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
            <p className="text-sm font-bold text-stone-800 mb-1">Q. {item.q}</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              {item.a}
              {item.href && (
                <>
                  {" "}
                  <Link href={item.href} className="text-blue-500 font-semibold hover:underline">
                    {item.linkLabel ?? "看詳細"} →
                  </Link>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
