import { PLANS } from "@/lib/business/pricing";
import { DOWNLOAD_PATH, PRICE_PLACEHOLDER, SHOW_PRICES } from "@/lib/business/site";
import { Badge, CheckedList, CtaLink } from "./ui";

/**
 * 掲載プランのカード。TOPとプランページで共用する。
 * 料金は SHOW_PRICES が false のあいだ伏せ、媒体資料へ誘導する。
 */
export default function PlanCards({ showCta = true }: { showCta?: boolean }) {
  // プランが1つだけのときは、比較する相手がいないので
  // 「おすすめ」バッジを出さず、カードも横に伸ばさず中央に置く。
  const single = PLANS.length === 1;

  return (
    <ul className={single ? "grid gap-5" : "grid gap-5 sm:grid-cols-2"}>
      {PLANS.map((plan) => (
        <li
          key={plan.id}
          className={`flex flex-col rounded-2xl border bg-white p-5 sm:p-6 ${
            plan.recommended
              ? "border-biz-cta shadow-[0_2px_12px_rgba(194,65,12,0.10)]"
              : "border-biz-line shadow-[0_1px_2px_rgba(18,49,79,0.04)]"
          } ${single ? "mx-auto w-full max-w-xl" : ""}`}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-biz-ink">{plan.name}</h3>
            {plan.recommended && !single && <Badge tone="cta">おすすめ</Badge>}
          </div>

          <p className="text-sm font-bold text-biz-blue">{plan.kind}</p>

          {SHOW_PRICES ? (
            <p className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl leading-none font-bold text-biz-ink">
                {plan.priceLabel}
              </span>
              <span className="text-xs text-biz-muted">{plan.taxNote}</span>
            </p>
          ) : (
            <p className="mt-3">
              <span className="text-xl leading-none font-bold text-biz-ink">
                {PRICE_PLACEHOLDER}
              </span>
              <span className="mt-1 block text-xs text-biz-muted">
                料金は媒体資料に記載しています
              </span>
            </p>
          )}

          <p className="mt-3 text-sm leading-relaxed text-biz-muted">{plan.summary}</p>

          <div className="mt-4 border-t border-biz-line pt-4">
            <CheckedList items={plan.features} />
          </div>

          {showCta && (
            <div className="mt-6">
              <CtaLink
                href={DOWNLOAD_PATH}
                variant={plan.recommended ? "primary" : "secondary"}
                className="w-full sm:w-full"
              >
                料金が載った資料を請求する
              </CtaLink>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
