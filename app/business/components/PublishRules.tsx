import { PUBLISH_RULES } from "@/lib/business/pricing";

/** 制作・掲載のルール（お申し込みフォームで同意をいただく内容） */
export default function PublishRules() {
  return (
    <div id="rules" className="scroll-mt-24 rounded-2xl border border-biz-line bg-white p-5 sm:p-6">
      <h3 className="text-sm font-bold text-biz-ink">制作・掲載のルール</h3>
      <p className="mt-2 text-xs leading-relaxed text-biz-muted">
        お申し込みフォームで、以下にご同意いただいたうえでお振込みをお願いしています。
      </p>
      <dl className="mt-3 divide-y divide-biz-line">
        {PUBLISH_RULES.map((rule) => (
          <div key={rule.label} className="grid gap-1 py-2.5 sm:grid-cols-[9rem_1fr] sm:gap-4">
            <dt className="text-xs font-bold text-biz-blue">{rule.label}</dt>
            <dd className="text-xs leading-relaxed text-biz-muted">{rule.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
