import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

/** 下層ページ共通の見出し部分 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-biz-line bg-biz-blue-soft px-5 py-9 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-5xl">
        <Breadcrumbs items={crumbs} />
        <p className="mb-2 text-xs font-bold tracking-[0.18em] text-biz-blue">{eyebrow}</p>
        <h1 className="text-2xl leading-snug font-bold text-biz-ink sm:text-3xl">{title}</h1>
        {lead && (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-biz-muted sm:text-base">{lead}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
