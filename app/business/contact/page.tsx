import type { Metadata } from "next";
import { businessMetadata, breadcrumbJsonLd, CONTACT, PARENT_SITE_NAME } from "@/lib/business/site";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import { Card, CtaAnchor, CtaGroup, CtaLink, JsonLd, Section, SectionHeading } from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "contact",
  title: "お問い合わせ｜Japan Trip Picks for Business",
  description:
    "台湾・香港向けのPR掲載・繁体字コンテンツ制作に関するお問い合わせ窓口です。お見積り・ご相談は無料で、お問い合わせいただいた時点で契約にはなりません。",
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "お問い合わせ" }];

const jsonLd = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "お問い合わせ", path: "contact" },
]);

/** メールでお問い合わせいただく場合に書いていただきたいこと */
const MAIL_TEMPLATE = [
  "店舗・企業名",
  "ご担当者名",
  "所在地",
  "Webサイト / SNS の URL",
  "ご希望のサービス（スポット掲載 / 特集記事掲載 など）",
  "ご相談内容",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="CONTACT"
        title="お問い合わせ"
        lead="掲載・繁体字コンテンツ制作についてのご相談を承ります。お見積りは無料です。お問い合わせいただいた時点では契約になりませんので、ご相談だけでもお気軽にどうぞ。"
        crumbs={crumbs}
      />

      {/* ---------------------------------------------------- 連絡手段 */}
      <Section tone="white">
        <SectionHeading
          eyebrow="HOW TO CONTACT"
          title="お問い合わせ方法"
          description="下のフォームからメールを作成いただくか、直接メール・お電話でご連絡ください。"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <p className="text-sm font-bold text-biz-ink">
              <span aria-hidden="true" className="mr-2">
                ✉
              </span>
              メール
            </p>
            <p className="mt-2 text-sm break-all text-biz-muted">{CONTACT.email}</p>
            <p className="mt-3 text-xs leading-relaxed text-biz-muted">
              内容を確認のうえ、料金と掲載までの流れをご案内します。
            </p>
            <div className="mt-4">
              <CtaAnchor href={`mailto:${CONTACT.email}`} className="w-full sm:w-full">
                メールで問い合わせる
              </CtaAnchor>
            </div>
          </Card>

          <Card>
            <p className="text-sm font-bold text-biz-ink">
              <span aria-hidden="true" className="mr-2">
                ☎
              </span>
              電話
            </p>
            <p className="mt-2 text-sm text-biz-muted">{CONTACT.tel}</p>
            <p className="mt-3 text-xs leading-relaxed text-biz-muted">
              込み入ったご相談は、メールでいただけますと詳しくご案内できます。
            </p>
            <div className="mt-4">
              <CtaAnchor href={CONTACT.telHref} variant="secondary" className="w-full sm:w-full">
                {CONTACT.tel} に電話する
              </CtaAnchor>
            </div>
          </Card>
        </div>

        <div className="mt-6 rounded-2xl border border-biz-line bg-biz-sand p-5 sm:p-6">
          <h3 className="text-sm font-bold text-biz-ink">メールで直接ご連絡いただく場合</h3>
          <p className="mt-2 text-xs leading-relaxed text-biz-muted">
            以下をお書き添えいただけますと、折り返しのご案内がスムーズです。
          </p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {MAIL_TEMPLATE.map((item) => (
              <li key={item} className="flex gap-2 text-xs leading-relaxed text-biz-muted">
                <span aria-hidden="true" className="text-biz-blue">
                  ・
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------ フォーム */}
      <Section tone="soft" id="form">
        <SectionHeading
          eyebrow="FORM"
          title="お問い合わせフォーム"
          description="入力内容からメール本文を作成します。ご利用のメールソフトが開きます。"
        />
        <div className="rounded-2xl border border-white bg-white p-5 sm:p-7">
          <ContactForm />
        </div>
      </Section>

      {/* -------------------------------------------------- 英語での案内 */}
      <Section tone="white">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-sm font-bold text-biz-ink">For business inquiries (English)</h2>
            <p className="mt-3 text-xs leading-relaxed text-biz-muted" lang="en">
              We offer promotion and featured listings for businesses in Japan, written in Japanese
              and Traditional Chinese for travellers from Taiwan and Hong Kong. Listings remain on
              the site while it is in operation. Photos are to be provided by the business; we do not
              offer on-site photography. Please include your business name, location, the service you
              are interested in, and your website or social media.
            </p>
            <p className="mt-3 text-xs break-all text-biz-muted" lang="en">
              {CONTACT.email}
            </p>
          </Card>

          {/* 運営者情報 */}
          <Card id="operator" className="scroll-mt-20 sm:scroll-mt-24">
            <h2 className="text-sm font-bold text-biz-ink">運営者情報</h2>
            <dl className="mt-3 grid gap-2 text-xs leading-relaxed text-biz-muted sm:grid-cols-[5rem_1fr] sm:gap-x-4">
              <dt className="font-bold text-biz-ink sm:font-normal">運営者</dt>
              <dd>{CONTACT.operator}</dd>
              <dt className="mt-2 font-bold text-biz-ink sm:mt-0 sm:font-normal">所在地</dt>
              <dd>
                〒{CONTACT.postalCode}
                <br />
                {CONTACT.address}
              </dd>
              <dt className="mt-2 font-bold text-biz-ink sm:mt-0 sm:font-normal">電話</dt>
              <dd>
                <a href={CONTACT.telHref} className="underline-offset-4 hover:text-biz-blue hover:underline">
                  {CONTACT.tel}
                </a>
              </dd>
              <dt className="mt-2 font-bold text-biz-ink sm:mt-0 sm:font-normal">メール</dt>
              <dd>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all underline-offset-4 hover:text-biz-blue hover:underline"
                >
                  {CONTACT.email}
                </a>
              </dd>
              <dt className="mt-2 font-bold text-biz-ink sm:mt-0 sm:font-normal">運営メディア</dt>
              <dd>{PARENT_SITE_NAME}（訪日旅行者向け・繁体字）</dd>
            </dl>
          </Card>
        </div>

        <div className="mt-8">
          <CtaGroup>
            <CtaLink href="/business/pricing" variant="secondary">
              料金プランを見る
            </CtaLink>
            <CtaLink href="/business/faq" variant="secondary">
              よくあるご質問を見る
            </CtaLink>
          </CtaGroup>
        </div>
      </Section>
    </>
  );
}
