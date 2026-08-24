// /business 全体で使う小さなUI部品。
// 「移動＝リンク」「操作＝ボタン」を混ぜないため、CTAはリンク用と操作用を分けている。
import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ Section */

type SectionProps = {
  children: ReactNode;
  /** 背景の面。white / soft（淡いブルー）/ sand（淡いベージュ）/ navy */
  tone?: "white" | "soft" | "sand" | "navy";
  id?: string;
  className?: string;
};

const SECTION_TONE: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white text-biz-ink",
  soft: "bg-biz-blue-soft text-biz-ink",
  sand: "bg-biz-sand text-biz-ink",
  navy: "bg-biz-navy text-white",
};

export function Section({ children, tone = "white", id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`${SECTION_TONE[tone]} px-5 py-14 sm:px-6 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------ SectionHeading */

type SectionHeadingProps = {
  /** 見出しの上に出す小さい英字ラベル */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** 濃い背景の上で使うとき */
  inverted?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 sm:mb-10 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-bold tracking-[0.18em] ${
            inverted ? "text-white/60" : "text-biz-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-xl leading-snug font-bold sm:text-2xl ${
          inverted ? "text-white" : "text-biz-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed sm:text-base ${
            inverted ? "text-white/80" : "text-biz-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- CTA / Link */

type CtaVariant = "primary" | "secondary" | "ghost";

const CTA_BASE =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors sm:w-auto sm:text-[0.95rem] focus-visible:outline-2 focus-visible:outline-offset-2";

const CTA_VARIANT: Record<CtaVariant, string> = {
  primary:
    "bg-biz-cta text-white hover:bg-biz-cta-hover focus-visible:outline-biz-cta shadow-sm",
  secondary:
    "bg-white text-biz-ink border border-biz-line hover:border-biz-blue hover:text-biz-blue focus-visible:outline-biz-blue",
  ghost:
    "bg-white/10 text-white border border-white/35 hover:bg-white/20 focus-visible:outline-white",
};

/** サイト内リンクのCTA */
export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${CTA_BASE} ${CTA_VARIANT[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/** メール・電話・外部サイトなど、サイト外へ出るCTA */
export function CtaAnchor({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${CTA_BASE} ${CTA_VARIANT[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** CTAを縦（スマホ）／横（PC）に並べる箱 */
export function CtaGroup({ children, align = "left" }: { children: ReactNode; align?: "left" | "center" }) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
        align === "center" ? "sm:justify-center" : ""
      }`}
    >
      {children}
    </div>
  );
}

/* --------------------------------------------------------------------- Card */

export function Card({
  children,
  className = "",
  id,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** アンカーリンクの着地点にしたいときに指定する */
  id?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      id={id}
      className={`rounded-2xl border border-biz-line bg-white p-5 shadow-[0_1px_2px_rgba(18,49,79,0.04)] sm:p-6 ${className}`}
    >
      {children}
    </Tag>
  );
}

/* --------------------------------------------------------------------- Note */

/** 誇大表現を避けるための注記ブロック */
export function NoteList({ items, title }: { items: string[]; title?: string }) {
  return (
    <div className="rounded-2xl border border-biz-line bg-biz-sand p-5 sm:p-6">
      {title && <p className="mb-3 text-sm font-bold text-biz-ink">{title}</p>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-xs leading-relaxed text-biz-muted sm:text-sm">
            <span aria-hidden="true" className="text-biz-blue">
              ・
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------------- CheckedList */

export function CheckedList({
  items,
  inverted = false,
}: {
  items: string[];
  inverted?: boolean;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2 text-sm leading-relaxed ${
            inverted ? "text-white/85" : "text-biz-muted"
          }`}
        >
          <span aria-hidden="true" className={inverted ? "text-white" : "text-biz-blue"}>
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------- Badge */

export function Badge({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "cta" | "muted";
}) {
  const map = {
    blue: "bg-biz-blue-soft text-biz-blue",
    cta: "bg-biz-cta text-white",
    muted: "bg-slate-100 text-biz-muted",
  } as const;
  return (
    <span className={`inline-block rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${map[tone]}`}>
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------- JsonLd */

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
