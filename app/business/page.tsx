import Image from "next/image";
import type { Metadata } from "next";
import {
  businessMetadata,
  DOWNLOAD_PATH,
  PARENT_SITE_NAME,
  PARENT_SITE_URL,
} from "@/lib/business/site";
import { HIGHLIGHT_FAQ } from "@/lib/business/faq";
import { OPTIONS, PRICING_NOTES } from "@/lib/business/pricing";
import { MARKET_STATS, SOURCES } from "@/lib/business/market";
import { HERO_ARTICLE_SLUG } from "@/lib/business/showcase";
import { ARTICLE_BY_SLUG } from "@/lib/articles";
import FaqList from "./components/FaqList";
import FinalCta from "./components/FinalCta";
import PlanCards from "./components/PlanCards";
import ServiceCards from "./components/ServiceCards";
import {
  Card,
  CtaAnchor,
  CtaGroup,
  CtaLink,
  NoteList,
  Section,
  SectionHeading,
} from "./components/ui";

export const metadata: Metadata = businessMetadata({
  title: "台湾・香港向けインバウンド集客支援｜Japan Trip Picks for Business",
  description:
    "台湾・香港からの訪日旅行者向けに、店舗・ホテル・観光施設のPR掲載や繁体字コンテンツ制作を行うJapan Trip Picks for Business。小規模店舗から観光事業者まで対応します。",
  ogTitle: "台湾・香港からの訪日客に、あなたのお店・施設を届ける。",
});

/** こんな事業者におすすめ */
const AUDIENCE = [
  "台湾・香港からの来店を増やしたい",
  "インバウンド向けに何をすればいいか分からない",
  "繁体字の記事を作りたい",
  "自店を海外の旅行者に知ってもらいたい",
  "海外向けのSNSやコンテンツを試してみたい",
];

/** 選ばれる理由。事実として言えることだけを書く。 */
const REASONS = [
  {
    emoji: "🎯",
    title: "台湾・香港の訪日旅行者向けに特化",
    body: "扱っているのは訪日旅行の情報だけです。読者層を広く取らないぶん、旅行者が読む前提で書けます。",
  },
  {
    emoji: "🈶",
    title: "日本語＋繁体字でコンテンツ制作",
    body: "日本語の原稿と繁体字の本文をセットで用意します。台湾・香港で言い方が変わる語は必要に応じて併記します。",
  },
  {
    emoji: "♾️",
    title: "掲載後も記事が残る",
    body: "買い切りで、サイトの運営期間中は掲載が続きます。月額費用・更新料はいただきません。",
  },
  {
    emoji: "🪶",
    title: "小規模店舗でも始めやすい",
    body: "1店舗・1記事からお申し込みいただけます。買い切りなので、続けるための費用はかかりません。",
  },
  {
    emoji: "🚶",
    title: "旅行者目線で紹介",
    body: "行き方・所要時間・値段の目安など、旅行者が迷いやすいところを補って書きます。",
  },
];

/** 掲載までの流れ */
const STEPS = [
  { title: "資料請求・お問い合わせ", body: "フォームまたはメールで、店舗名・所在地・ご希望内容をお送りください。" },
  { title: "掲載内容と料金のご案内", body: "媒体資料をお送りし、プラン・料金・スケジュールをご案内します。この時点では契約になりません。" },
  { title: "素材のご共有", body: "写真と基本情報（住所・アクセス・営業時間など）をお送りいただきます。" },
  { title: "記事・ページ制作", body: "日本語の原稿と繁体字の本文を制作します。" },
  { title: "内容のご確認", body: "公開前に内容をご確認いただき、修正のご要望を反映します。" },
  { title: "公開", body: "Japan Trip Picks 上に公開します。以降はサイト運営中、掲載が続きます。" },
];

export default function BusinessTopPage() {
  // ヒーローの「掲載イメージ」は本体サイトの実記事から引く。
  // 写真とタイトルがズレないよう、ここでハードコードはしない。
  const heroArticle = ARTICLE_BY_SLUG[HERO_ARTICLE_SLUG];

  return (
    <>
      {/* ------------------------------------------------------------- Hero */}
      <div className="border-b border-biz-line bg-biz-blue-soft px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold text-biz-blue">
              訪日旅行メディア Japan Trip Picks のBtoB窓口
            </p>
            <h1 className="text-[1.65rem] leading-[1.35] font-bold text-biz-ink sm:text-4xl sm:leading-[1.3]">
              <span className="biz-phrase">台湾・香港からの訪日客に、</span>
              <span className="biz-phrase">あなたのお店・施設を届ける。</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-biz-muted sm:text-base">
              Japan Trip Picks は、台湾・香港向けの訪日旅行メディアを運営しています。
              そのノウハウを使って、日本の店舗・ホテル・観光施設の情報発信をお手伝いします。
            </p>

            <div className="mt-7">
              <CtaGroup>
                <CtaLink href={DOWNLOAD_PATH}>媒体資料を請求する</CtaLink>
                <CtaLink href="/business/services" variant="secondary">
                  サービスを見る
                </CtaLink>
              </CtaGroup>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {["はじめから繁体字", "買い切り・月額なし", "1店舗から", "永久掲載"].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white bg-white/70 px-3 py-1 text-xs font-bold text-biz-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* 記事の見え方のイメージ。実記事へのリンクにして、実物を見てもらう。
              別タブで開くのは、営業資料としてこのページを閉じさせないため。
              CLSを出さないよう比率は固定する。 */}
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <a
              href={`/${heroArticle.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_28px_rgba(18,49,79,0.10)] transition-shadow hover:shadow-[0_10px_32px_rgba(18,49,79,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue"
            >
              <div className="relative aspect-[4/3] w-full bg-biz-line">
                <Image
                  src={heroArticle.image ?? "/poyapiyo-flag.png"}
                  alt={`Japan Trip Picks の掲載記事「${heroArticle.shortLabel}」で使用している写真`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="flex items-center gap-2 text-xs font-bold text-biz-blue">
                  掲載イメージ
                  <span className="rounded-full bg-biz-blue-soft px-2 py-0.5 text-[0.65rem]">
                    {heroArticle.tag}
                  </span>
                </p>
                <p
                  lang="zh-Hant"
                  className="mt-1 text-sm leading-relaxed font-bold text-biz-ink"
                >
                  {heroArticle.name}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-biz-muted">
                  写真・基本情報・繁体字の紹介文をセットで掲載します。
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-biz-blue group-hover:underline">
                  実際の記事を見る
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            {/* 本体サイト（旅行者向け）への導線。ファーストビューから見に行けるようにする。 */}
            <a
              href={PARENT_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white bg-white/70 px-4 text-xs font-bold text-biz-ink transition-colors hover:bg-white hover:text-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue sm:text-sm"
            >
              <span aria-hidden="true">🌏</span>
              旅行者向けサイト {PARENT_SITE_NAME} を見る
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ とは */}
      <Section tone="white" id="about">
        <SectionHeading
          eyebrow="ABOUT"
          title="Japan Trip Picks for Business とは"
          description="訪日旅行者向けメディアの運営で分かったことを、日本の事業者さま向けのサービスにしたものです。"
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <p className="text-sm leading-relaxed text-biz-muted sm:text-[0.95rem]">
              Japan Trip Picks は、台湾・香港の旅行者に向けて、日本のグルメ・カフェ・観光・旅行準備の情報を
              繁体字で発信している旅行メディアです。実際に訪れた場所を、旅行者が知りたい順に書いています。
            </p>
            <p className="mt-4 text-sm leading-relaxed text-biz-muted sm:text-[0.95rem]">
              Japan Trip Picks for Business は、そのBtoB窓口です。
              「繁体字で紹介文を用意したい」「海外の旅行者向けに何か始めたい」という事業者さまに向けて、
              PR掲載と繁体字コンテンツ制作をご提供しています。
            </p>
            <p className="mt-4 rounded-xl bg-biz-sand p-4 text-xs leading-relaxed text-biz-muted">
              当サイトは大規模媒体ではありません。掲載による集客数・検索順位・売上を保証することはできません。
              できること・できないことを最初にお伝えしたうえでご案内します。
            </p>
          </Card>

          <Card className="flex flex-col justify-between bg-biz-blue-soft">
            <div>
              <p className="text-sm font-bold text-biz-ink">運営しているメディア</p>
              <p className="mt-3 text-lg font-bold text-biz-ink">{PARENT_SITE_NAME}</p>
              <p className="mt-2 text-xs leading-relaxed text-biz-muted">
                台湾・香港の旅行者向け。繁体字の訪日旅行ガイドです。実際の記事の作り・見え方は、
                そちらでご確認いただけます。
              </p>
            </div>
            <div className="mt-5">
              <CtaAnchor href={PARENT_SITE_URL} variant="secondary" external className="w-full sm:w-full">
                <span aria-hidden="true">🌏</span>
                訪日旅行者向けメディアを見る
              </CtaAnchor>
            </div>
          </Card>
        </div>
      </Section>

      {/* ---------------------------------------------------------- 市場 */}
      <Section tone="soft" id="market">
        <SectionHeading
          eyebrow="MARKET"
          title="なぜ台湾・香港なのか"
          description="人数でも消費額でも大きく、しかも「何度も来ている人」が中心の市場です。数字は公的統計から引いています。"
        />

        <ul className="grid gap-4 sm:grid-cols-3">
          {MARKET_STATS.map((stat) => (
            <li key={stat.label} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white bg-white p-5">
                <p className="flex items-baseline gap-1">
                  <span className="text-3xl leading-none font-bold text-biz-ink sm:text-4xl">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-base font-bold text-biz-ink">{stat.unit}</span>
                  )}
                </p>
                <p className="mt-3 text-sm font-bold text-biz-blue">{stat.label}</p>
                <p className="mt-2 grow text-xs leading-relaxed text-biz-muted">{stat.detail}</p>
                <p className="mt-3 text-[0.7rem] text-biz-muted">出典：{SOURCES[stat.source].label}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CtaGroup>
            <CtaLink href="/business/taiwan-hongkong" variant="secondary">
              台湾・香港市場をもっと詳しく見る
            </CtaLink>
          </CtaGroup>
        </div>
      </Section>

      {/* -------------------------------------------------------- おすすめ */}
      <Section tone="sand" id="audience">
        <SectionHeading
          eyebrow="FOR WHOM"
          title="こんな事業者さまにおすすめです"
          description="ひとつでも当てはまれば、お役に立てるかもしれません。"
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {AUDIENCE.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-biz-line bg-white p-4 sm:p-5"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-biz-blue-soft text-xs font-bold text-biz-blue"
              >
                ✓
              </span>
              <span className="text-sm leading-relaxed font-bold text-biz-ink">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------------------- サービス */}
      <Section tone="white" id="services">
        <SectionHeading
          eyebrow="SERVICES"
          title="サービス一覧"
          description="掲載から繁体字のコンテンツ制作まで。まずは1件からお試しいただけます。"
        />
        <ServiceCards />
        <div className="mt-8">
          <CtaGroup>
            <CtaLink href="/business/services" variant="secondary">
              サービスの詳細を見る
            </CtaLink>
          </CtaGroup>
        </div>
      </Section>

      {/* ------------------------------------------------------------ 理由 */}
      <Section tone="soft" id="reasons">
        <SectionHeading
          eyebrow="WHY US"
          title="Japan Trip Picks を選ぶ理由"
          description="規模の大きさではなく、対象の絞り方と続けやすさでお役に立ちます。"
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <li
              key={reason.title}
              className="rounded-2xl border border-white bg-white p-5 shadow-[0_1px_2px_rgba(18,49,79,0.04)]"
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex size-7 items-center justify-center rounded-full bg-biz-blue-soft text-xs font-bold text-biz-blue"
                >
                  {i + 1}
                </span>
                <span aria-hidden="true" className="text-lg">
                  {reason.emoji}
                </span>
              </div>
              <h3 className="mt-3 text-base leading-snug font-bold text-biz-ink">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-biz-muted">{reason.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------------ 掲載プラン */}
      <Section tone="white" id="pricing">
        <SectionHeading
          eyebrow="PLAN"
          title="掲載プラン"
          description="1店舗ごとに専用ページを作る、買い切りのプランです。月額費用・更新料はいただきません。"
        />
        <PlanCards showCta={false} />

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {OPTIONS.map((option) => (
            <Card key={option.id} className="bg-biz-sand">
              <p className="text-xs font-bold text-biz-blue">オプション</p>
              <h3 className="mt-1 text-base font-bold text-biz-ink">{option.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-biz-muted">{option.note}</p>
            </Card>
          ))}
          <Card className="bg-biz-sand">
            <p className="text-xs font-bold text-biz-blue">その他</p>
            <h3 className="mt-1 text-base font-bold text-biz-ink">
              繁体字コンテンツ制作・集客支援
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              分量・用途をうかがったうえでお見積りいたします。
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-biz-line bg-biz-blue-soft p-5 sm:p-6">
          <h3 className="text-base font-bold text-biz-ink">料金は媒体資料に記載しています</h3>
          <p className="mt-2 text-sm leading-relaxed text-biz-muted">
            掲載プランの料金、媒体の実績（記事数・繁体字検索での掲載順位・表示回数）は、
            媒体資料でご確認いただけます。ご請求は無料で、この時点では契約になりません。
          </p>
          <div className="mt-5">
            <CtaGroup>
              <CtaLink href={DOWNLOAD_PATH}>媒体資料を請求する</CtaLink>
              <CtaLink href="/business/pricing" variant="secondary">
                プランの内容を見る
              </CtaLink>
            </CtaGroup>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------ 流れ */}
      <Section tone="sand" id="flow">
        <SectionHeading
          eyebrow="FLOW"
          title="掲載までの流れ"
          description="お問い合わせから公開まで、6つのステップで進めます。"
        />
        <ol className="space-y-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-biz-line bg-white p-4 sm:items-center sm:p-5"
            >
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-biz-navy text-sm font-bold text-white"
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-[0.95rem] font-bold text-biz-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-biz-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <NoteList title="お申し込み前にご確認ください" items={PRICING_NOTES} />
        </div>
      </Section>

      {/* ------------------------------------------------------------- FAQ */}
      <Section tone="white" id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          description="よくいただくご質問を抜粋しています。"
        />
        <FaqList items={HIGHLIGHT_FAQ} />
        <div className="mt-8">
          <CtaGroup>
            <CtaLink href="/business/faq" variant="secondary">
              すべての質問を見る
            </CtaLink>
          </CtaGroup>
        </div>
      </Section>

      {/* ---------------------------------------------------------- 実績導線 */}
      <Section tone="soft" id="works">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="WORKS"
            title="実際に制作している記事の例"
            description="Japan Trip Picks で公開している記事をご覧いただけます。掲載後の見え方の参考にしてください。"
          />
          <div className="lg:mb-10">
            <CtaLink href="/business/works" variant="secondary">
              記事の例を見る
            </CtaLink>
          </div>
        </div>
      </Section>

      <FinalCta />

      {/* 本体サイトへの導線。営業先に「実物」を見てもらうための出口。 */}
      <div className="border-t border-biz-line bg-white px-5 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-5xl">
          <div className="rounded-2xl border border-biz-line bg-biz-blue-soft p-5 text-center sm:p-7">
            <p className="text-xs font-bold tracking-[0.18em] text-biz-blue">OUR MEDIA</p>
            <h2 className="mt-2 text-lg leading-snug font-bold text-biz-ink sm:text-xl">
              掲載先のメディアを、実際にご覧ください
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-biz-muted">
              {PARENT_SITE_NAME} は、台湾・香港の旅行者に向けて繁体字で発信している訪日旅行メディアです。
              どんな記事が並んでいるか、掲載されるとどう見えるかは、実際のサイトが一番わかりやすいと思います。
            </p>
            <div className="mt-6 flex justify-center">
              <CtaAnchor href={PARENT_SITE_URL} external>
                <span aria-hidden="true">🌏</span>
                {PARENT_SITE_NAME} を見る
                <span aria-hidden="true">↗</span>
              </CtaAnchor>
            </div>
            <p className="mt-3 text-xs text-biz-muted">
              繁体字のサイトが開きます（別タブ）
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
