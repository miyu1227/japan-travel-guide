import type { Metadata } from "next";
import { businessMetadata, breadcrumbJsonLd, CONTACT, DOWNLOAD_PATH } from "@/lib/business/site";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import {
  Card,
  CheckedList,
  CtaAnchor,
  CtaGroup,
  CtaLink,
  JsonLd,
  Section,
  SectionHeading,
} from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "partner",
  title: "広告代理店・支援会社の方へ｜Japan Trip Picks for Business",
  description:
    "台湾・香港向け繁体字メディア Japan Trip Picks の掲載枠を、クライアント様向けの商材としてお取り扱いいただけます。NET価格での卸し、販売価格は御社にて自由に設定。制作は当方で完結します。",
  ogTitle: "台湾・香港向け繁体字メディアの掲載枠を、御社の商材に。",
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "代理店の方へ" }];

const jsonLd = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "代理店の方へ", path: "partner" },
]);

/** 資料請求フォームで最初から選んでおく資料。代理店版は価格を記載していない。 */
const AGENCY_DOCUMENT = "広告代理店向けの資料";

/** どんな会社さまを想定しているか */
const AUDIENCE = [
  "インバウンド集客の支援をされている会社",
  "地域の店舗・宿泊施設をクライアントに持つ広告代理店",
  "店舗のWebサイト・SNSを受託している制作会社",
  "観光事業者向けのコンサルティング会社",
  "media・広告商材を集めて提案されている会社",
];

/** お取引の条件。金額そのものは資料側で提示する。 */
const TERMS = [
  {
    emoji: "💴",
    title: "NET価格で卸します",
    body: "1件あたりのNET価格を決めています。金額は代理店さま向けの資料に記載しています。値引き交渉のいらない一物一価です。",
  },
  {
    emoji: "🏷",
    title: "販売価格は御社で設定いただけます",
    body: "クライアントさまへのご提示価格は御社の自由です。当サイトでは直販価格を公開していないため、上乗せしてご提案いただけます。",
  },
  {
    emoji: "🧾",
    title: "ご請求は御社宛に、月まとめで",
    body: "案件ごとの都度請求ではなく、月まとめで発行します。クライアントさまへのご請求は御社から行っていただきます。",
  },
  {
    emoji: "🛠",
    title: "制作は当方で完結します",
    body: "写真と入稿シートをお送りいただくだけで、繁体字の原稿制作・公開まで当方で行います。翻訳の手配は不要です。",
  },
  {
    emoji: "📄",
    title: "クライアント配布用の資料をお渡しします",
    body: "価格を記載していない資料をご用意しています。そのままクライアントさまへお渡しいただけます。",
  },
  {
    emoji: "♾️",
    title: "買い切りで、掲載が残ります",
    body: "月額費用・更新料はありません。運用型広告と違い、出稿を止めた時点で消えるということがない商材です。",
  },
];

/** 進め方 */
const STEPS = [
  {
    title: "資料請求",
    body: "下のフォーム、またはメールでご連絡ください。代理店さま向けの資料（NET価格・お取引条件を記載）をお送りします。",
  },
  {
    title: "条件のご確認",
    body: "お取引条件と、クライアント配布用の資料をご確認いただきます。この時点では契約になりません。",
  },
  {
    title: "案件ごとのお申し込み",
    body: "掲載される店舗・施設が決まりましたら、案件ごとにお申し込みください。入稿シートをお送りします。",
  },
  {
    title: "素材のご共有",
    body: "入稿シートのご記入内容と写真をお送りいただきます。クライアントさまから直接お送りいただく形でも構いません。",
  },
  {
    title: "制作・ご確認",
    body: "日本語の原稿と繁体字の本文を制作します。公開前にご確認いただき、修正は2回まで承ります。",
  },
  {
    title: "公開・ご請求",
    body: "Japan Trip Picks 上に公開し、御社宛に月まとめでご請求します。以降はサイト運営中、掲載が続きます。",
  },
];

/** 代理店さまから多いご質問 */
const FAQ = [
  {
    q: "クライアントに提示する価格は、こちらで決められますか？",
    a: "はい。NET価格でお納めしますので、ご提示価格は御社にてご設定ください。当サイトでは直販価格を公開しておらず、クライアント配布用の資料にも価格を記載していません。",
  },
  {
    q: "御社は直販もされていますか？",
    a: "はい、店舗さまからの直接のお申し込みも承っています。そのうえで代理店さまにも同じNET価格でお納めする建て付けにしており、代理店さまの取り分は上乗せ分でお取りいただく形です。",
  },
  {
    q: "翻訳だけをお願いすることはできますか？",
    a: "翻訳の請負は行っておりません。当媒体に掲載する記事の制作としてお受けしています。記事は日本語からの翻訳ではなく、はじめから繁体字で書いています。",
  },
  {
    q: "記事に広告表示は入りますか？",
    a: "はい。対価をいただいて制作した記事には、広告であることが分かる表示を冒頭に入れます。景品表示法（いわゆるステマ規制）への対応で、規制の対象は広告主となるクライアントさま側になるため、当方で必ず表示いたします。",
  },
  {
    q: "取材や撮影はお願いできますか？",
    a: "承っておりません。掲載記事は、ご提供いただいた写真と情報をもとに制作します。写真はクライアントさまに使用権限のあるものに限らせていただきます。",
  },
  {
    q: "納期はどれくらいですか？",
    a: "素材のご提供から初稿まで約1週間、公開までは約1ヶ月を目安としています。ご希望の公開時期があれば、お申し込み時にお知らせください。",
  },
];

export default function PartnerPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="FOR PARTNERS"
        title={
          <>
            <span className="biz-phrase">台湾・香港向けの繁体字メディアの掲載枠を、</span>
            <span className="biz-phrase">御社の商材としてお取り扱いください。</span>
          </>
        }
        lead="Japan Trip Picks は、台湾・香港の訪日旅行者向けに繁体字で情報を発信しているメディアです。店舗・スポット専用の記事広告を、代理店さま向けにNET価格でお納めしています。"
        crumbs={crumbs}
      >
        <CtaGroup>
          <CtaLink href="#form">代理店向けの資料を請求する</CtaLink>
          <CtaLink href="/business/works" variant="secondary">
            制作している記事を見る
          </CtaLink>
        </CtaGroup>
      </PageHero>

      {/* ------------------------------------------------------ 想定読者 */}
      <Section tone="white">
        <SectionHeading
          eyebrow="FOR"
          title="こんな会社さまを想定しています"
          description="すでに店舗・施設のクライアントをお持ちで、インバウンド向けの打ち手を探されている会社さま向けの内容です。"
        />
        <Card>
          <CheckedList items={AUDIENCE} />
        </Card>
      </Section>

      {/* -------------------------------------------------------- 商材 */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="PRODUCT"
          title="お取り扱いいただける商材"
          description="店舗・スポットさま専用の繁体字記事を1本制作し、掲載する記事広告です。"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="text-base font-bold text-biz-ink">1店舗ごとに独立したページ</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              まとめ記事の一項目ではなく、その店舗だけのページを作ります。
              繁体字で検索した読者が、直接そのページに届きます。
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">はじめから繁体字で制作</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              日本語記事の機械翻訳ではありません。台湾の読者を基準に書き、
              香港で言い方が変わる語は必要に応じて併記します。
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">含まれるもの</h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-biz-muted">
              <li>・紹介文の作成（日本語＋繁体字）</li>
              <li>・写真5〜10枚の掲載</li>
              <li>・基本情報（住所・アクセス・営業時間）</li>
              <li>・公式サイト・地図へのリンク</li>
              <li>・公開前の確認と修正2回</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">買い切り・掲載は残ります</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              お支払いは初回のみで、月額費用・更新料はいただきません。
              サイトの運営期間中は掲載が続きます。
            </p>
          </Card>
        </div>
      </Section>

      {/* ---------------------------------------------------- 取引条件 */}
      <Section tone="white">
        <SectionHeading
          eyebrow="TERMS"
          title="お取引の条件"
          description="金額は代理店さま向けの資料に記載しています。当サイト上では直販価格を公開していません。"
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TERMS.map((term) => (
            <li key={term.title} className="h-full">
              <Card className="h-full">
                <span aria-hidden="true" className="text-2xl leading-none">
                  {term.emoji}
                </span>
                <h3 className="mt-3 text-base font-bold text-biz-ink">{term.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-biz-muted">{term.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------------- 流れ */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="FLOW"
          title="お取り扱いまでの流れ"
          description="資料のご請求から公開まで、御社にお願いすることは「素材を集めていただくこと」だけです。"
        />

        <ol className="space-y-4">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Card>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-biz-blue-soft text-xs font-bold text-biz-blue"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-base font-bold text-biz-ink">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-biz-muted">{step.body}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------ 正直に伝える */}
      <Section tone="white">
        <SectionHeading
          eyebrow="HONESTLY"
          title="先にお伝えしておくこと"
          description="お取り扱いをご検討いただくうえで、あとから分かるより先に知っていただいたほうがよい点です。"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="text-base font-bold text-biz-ink">大規模媒体ではありません</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              個人で運営している媒体です。公開記事数・繁体字検索での平均掲載順位・月間の検索表示回数は、
              数字をそのまま資料に記載していますので、そちらでご確認ください。
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">集客効果は保証できません</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              来店数や検索順位をお約束するものではありません。
              お渡しできるのは、繁体字で検索されたときに読める記事が残る、という状態です。
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">お受けできない内容があります</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              掲載基準に沿わない業種・内容はお断りする場合があります。
              判断に迷われる案件は、お申し込み前にご相談ください。
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">直販も並行しています</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              店舗さまからの直接のお申し込みも承っています。
              そのぶん一物一価とし、代理店さまにも同じNET価格でお納めしています。
            </p>
          </Card>
        </div>
      </Section>

      {/* --------------------------------------------------------- FAQ */}
      <Section tone="soft">
        <SectionHeading eyebrow="FAQ" title="代理店さまから多いご質問" />
        <ul className="space-y-3">
          {FAQ.map((item) => (
            <li key={item.q}>
              <details className="group rounded-2xl border border-white bg-white p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-start gap-3 text-sm font-bold text-biz-ink sm:text-base">
                  <span aria-hidden="true" className="text-biz-blue">
                    Q
                  </span>
                  <span className="grow">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-biz-muted transition-transform group-open:rotate-180"
                  >
                    ⌄
                  </span>
                </summary>
                <p className="mt-3 border-t border-biz-line pt-3 text-sm leading-relaxed text-biz-muted">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm leading-relaxed text-biz-muted">
          掲載内容そのものへのご質問は、
          <a
            href="/business/faq"
            className="font-bold text-biz-blue underline underline-offset-4"
          >
            FAQページ
          </a>
          にもまとめています。
        </p>
      </Section>

      {/* -------------------------------------------------------- フォーム */}
      <Section tone="white" id="form">
        <SectionHeading
          eyebrow="REQUEST"
          title="代理店向けの資料を請求する"
          description="NET価格とお取引条件を記載した資料をお送りします。クライアント配布用（価格の記載なし）の資料もあわせてお送りします。ご請求の時点では契約になりません。"
        />

        <div className="rounded-2xl border border-biz-line bg-white p-5 sm:p-7">
          <ContactForm variant="document" defaultChoices={[AGENCY_DOCUMENT]} />
        </div>

        <div className="mt-6 rounded-2xl border border-biz-line bg-biz-sand p-5 sm:p-6">
          <h3 className="text-sm font-bold text-biz-ink">メールでのご請求も承ります</h3>
          <p className="mt-2 text-xs leading-relaxed text-biz-muted">
            御社名とご担当者名を添えてご連絡ください。折り返し代理店さま向けの資料をお送りします。
          </p>
          <div className="mt-4">
            <CtaGroup>
              <CtaAnchor
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                  "【資料請求】代理店向け／Japan Trip Picks for Business",
                )}`}
                variant="secondary"
              >
                <span aria-hidden="true">✉</span>
                メールで請求する
              </CtaAnchor>
              <CtaLink href={DOWNLOAD_PATH} variant="secondary">
                店舗向けの媒体資料はこちら
              </CtaLink>
            </CtaGroup>
          </div>
        </div>
      </Section>
    </>
  );
}
