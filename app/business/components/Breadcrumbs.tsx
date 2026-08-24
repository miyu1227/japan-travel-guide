import Link from "next/link";

export type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="パンくずリスト" className="mb-5">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-biz-muted">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center underline-offset-4 hover:text-biz-blue hover:underline"
              >
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-bold text-biz-ink">
                {item.name}
              </span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-biz-line">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
