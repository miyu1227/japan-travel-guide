import { PLANS } from "@/lib/business/pricing";
import { Badge, CheckedList, CtaLink } from "./ui";

/** 料金プランのカード。TOPと料金ページで共用する。 */
export default function PlanCards({ showCta = true }: { showCta?: boolean }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {PLANS.map((plan) => (
        <li
          key={plan.id}
          className={`flex flex-col rounded-2xl border bg-white p-5 sm:p-6 ${
            plan.recommended
              ? "border-biz-cta shadow-[0_2px_12px_rgba(194,65,12,0.10)]"
              : "border-biz-line shadow-[0_1px_2px_rgba(18,49,79,0.04)]"
          }`}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-biz-ink">{plan.name}</h3>
            {plan.recommended && <Badge tone="cta">おすすめ</Badge>}
          </div>

          <p className="text-sm font-bold text-biz-blue">{plan.kind}</p>

          <p className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl leading-none font-bold text-biz-ink">{plan.priceLabel}</span>
            <span className="text-xs text-biz-muted">{plan.taxNote}</span>
          </p>

          <p className="mt-3 text-sm leading-relaxed text-biz-muted">{plan.summary}</p>

          <div className="mt-4 border-t border-biz-line pt-4">
            <CheckedList items={plan.features} />
          </div>

          {showCta && (
            <div className="mt-6">
              <CtaLink
                href="/business/contact"
                variant={plan.recommended ? "primary" : "secondary"}
                className="w-full sm:w-full"
              >
                このプランを相談する
              </CtaLink>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
