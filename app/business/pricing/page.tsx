import type { Metadata } from "next";
import { businessMetadata, breadcrumbJsonLd } from "@/lib/business/site";
import {
  COMPARISON_ROWS,
  CONSULT_ITEMS,
  OPTIONS,
  PLANS,
  PRICING_NOTES,
} from "@/lib/business/pricing";
import FinalCta from "../components/FinalCta";
import PageHero from "../components/PageHero";
import PlanCards from "../components/PlanCards";
import { Card, CtaGroup, CtaLink, JsonLd, NoteList, Section, SectionHeading } from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "pricing",
  title: "料金プラン｜スポット掲載5,000円・特集記事掲載10,000円",
  description:
    "Japan Trip Picks for Business の料金プラン。スポット掲載のライトプランが5,000円、特集記事掲載のスタンダードプランが10,000円。どちらも買い切りで月額費用はかかりません。",
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "料金" }];

const jsonLd = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "料金", path: "pricing" },
]);

/** 掲載基準。運営として判断する基準を明示しておく。 */
const CRITERIA = [
  "法令、条例、業界規制等に違反する内容",
  "掲載内容に虚偽があるか、誤認・錯誤を招くおそれのある場合",
  "公序良俗に反する内容、または誹謗中傷・人権侵害にあたる内容",
  "第三者の氏名・写真・商標・著作物等を無断で使用している場合",
  "その他、当サイトの品位を損なうと判断した場合",
];

/** 免責事項 */
const DISCLAIMERS = [
  "掲載内容、および掲載により生じたお客様と第三者との間のトラブルについて、当サイトは責任を負いかねます。",
  "掲載による集客効果・検索順位・売上等を保証するものではありません。",
  "天災、通信障害、システム上の不具合など当サイトの責によらない事由により掲載に支障が生じた場合、賠償および補填措置の対象といたしません。",
  "掲載は当サイトの運営期間中に限ります。やむを得ずサイトを終了する場合、掲載料の返金には応じかねます。",
  "掲載枠の第三者への譲渡・転売はできません。運営者が変わられた場合も、掲載内容の引き継ぎはお受けしておりません。",
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="PRICING"
        title="料金プラン"
        lead="掲載プランは2種類です。どちらも買い切りで、月額費用・更新料はいただきません。オプションと個別見積りのサービスもあります。"
        crumbs={crumbs}
      />

      {/* ------------------------------------------------------------ プラン */}
      <Section tone="white">
        <PlanCards />
      </Section>

      {/* ------------------------------------------------------------ 比較表 */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="COMPARE"
          title="プランの違い"
          description="どちらを選べばよいか迷う場合は、写真の枚数と記事の作り方で比べてください。"
        />

        {/* スマホ：1項目ずつ縦に積む（表を横に潰さない） */}
        <ul className="space-y-3 sm:hidden">
          {COMPARISON_ROWS.map((row) => (
            <li key={row.label} className="rounded-2xl border border-white bg-white p-4">
              <p className="text-xs font-bold text-biz-blue">{row.label}</p>
              <dl className="mt-2 grid grid-cols-2 gap-3">
                {PLANS.map((plan) => (
                  <div key={plan.id} className="min-w-0">
                    <dt className="text-[0.7rem] font-bold text-biz-muted">{plan.name}</dt>
                    <dd className="mt-1 text-sm leading-snug font-bold text-biz-ink">
                      {row.values[plan.id] ?? "—"}
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>

        {/* PC・タブレット：通常の比較表。念のため横スクロール可にしておく */}
        <div className="hidden overflow-x-auto rounded-2xl border border-white bg-white sm:block">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <caption className="sr-only">ライトプランとスタンダードプランの比較</caption>
            <thead>
              <tr className="border-b border-biz-line">
                <th scope="col" className="p-4 text-sm font-bold text-biz-muted">
                  項目
                </th>
                {PLANS.map((plan) => (
                  <th key={plan.id} scope="col" className="p-4 text-sm font-bold text-biz-ink">
                    {plan.name}
                    <span className="mt-0.5 block text-xs font-normal text-biz-muted">{plan.kind}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.label} className="border-b border-biz-line last:border-b-0">
                  <th scope="row" className="p-4 align-top text-sm font-bold text-biz-muted">
                    {row.label}
                  </th>
                  {PLANS.map((plan) => (
                    <td key={plan.id} className="p-4 align-top text-sm text-biz-ink">
                      {row.values[plan.id] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ---------------------------------------------------------- オプション */}
      <Section tone="white">
        <SectionHeading
          eyebrow="OPTIONS"
          title="オプション・その他のサービス"
          description="掲載プランに追加できるオプションと、個別にお見積りするサービスです。"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {OPTIONS.map((option) => (
            <Card key={option.id}>
              <p className="text-xs font-bold text-biz-blue">オプション</p>
              <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-biz-ink">{option.name}</h3>
                <p className="text-2xl leading-none font-bold text-biz-ink">{option.priceLabel}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-biz-muted">{option.note}</p>
            </Card>
          ))}

          {CONSULT_ITEMS.map((item) => (
            <Card key={item.id} className="bg-biz-sand">
              <p className="text-xs font-bold text-biz-blue">個別見積り</p>
              <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-biz-ink">{item.name}</h3>
                <p className="text-xl leading-none font-bold text-biz-ink">{item.priceLabel}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-biz-muted">{item.note}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-biz-line bg-biz-blue-soft p-5 sm:p-6">
          <h3 className="text-base font-bold text-biz-ink">料金について分からないことがあれば</h3>
          <p className="mt-2 text-sm leading-relaxed text-biz-muted">
            「この内容だといくらになるか」「まず何から始めるべきか」など、
            お見積りやご相談は無料です。お問い合わせいただいた時点では契約になりません。
          </p>
          <div className="mt-5">
            <CtaGroup>
              <CtaLink href="/business/contact">料金について問い合わせる</CtaLink>
              <CtaLink href="/business/faq" variant="secondary">
                よくあるご質問を見る
              </CtaLink>
            </CtaGroup>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- 注意事項など */}
      <Section tone="sand" id="notes">
        <SectionHeading
          eyebrow="NOTES"
          title="ご確認事項・掲載基準・免責事項"
          description="お申し込みの前に、以下をご確認ください。"
        />

        <div className="space-y-5">
          <NoteList title="ご確認事項" items={PRICING_NOTES} />

          <div className="rounded-2xl border border-biz-line bg-white p-5 sm:p-6">
            <h3 className="text-sm font-bold text-biz-ink">掲載基準について</h3>
            <p className="mt-2 text-xs leading-relaxed text-biz-muted">
              掲載の可否は当サイトにて判断いたします。以下に該当すると判断した場合は、
              お申し込みをお受けできませんので、あらかじめご了承ください。
            </p>
            <ol className="mt-3 space-y-1.5">
              {CRITERIA.map((item, i) => (
                <li key={item} className="flex gap-2 text-xs leading-relaxed text-biz-muted">
                  <span aria-hidden="true" className="shrink-0 font-bold text-biz-blue">
                    {i + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[0.7rem] leading-relaxed text-biz-muted">
              ※掲載可否の判断理由については、原則として公開しておりません。
            </p>
          </div>

          <div className="rounded-2xl border border-biz-line bg-white p-5 sm:p-6">
            <h3 className="text-sm font-bold text-biz-ink">免責事項</h3>
            <ul className="mt-3 space-y-2">
              {DISCLAIMERS.map((item) => (
                <li key={item.slice(0, 20)} className="flex gap-2 text-xs leading-relaxed text-biz-muted">
                  <span aria-hidden="true" className="shrink-0 text-biz-blue">
                    ・
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FinalCta
        title="料金のご相談・お見積りは無料です"
        lead="掲載内容をうかがったうえで、料金と進め方をご案内します。ご相談だけでも構いません。"
      />
    </>
  );
}
