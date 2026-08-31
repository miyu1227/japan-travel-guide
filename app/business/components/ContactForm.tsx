"use client";

import { useId, useState } from "react";
import { SERVICES } from "@/lib/business/services";
import { CONTACT } from "@/lib/business/site";

/**
 * お問い合わせ／資料請求フォーム。
 *
 * /api/business-contact に送信し、運営者への通知と送信者への自動返信を出す。
 * 送信基盤が未設定のとき（環境変数なし）はサーバーが 503 を返すので、
 * 「送れたフリ」はせずメール連絡へ誘導する。
 */

export type FormVariant = "contact" | "document";

type FormState = {
  company: string;
  person: string;
  email: string;
  area: string;
  url: string;
  /** お問い合わせ：ご希望のサービス／資料請求：ご希望の資料 */
  choices: string[];
  message: string;
};

const EMPTY: FormState = {
  company: "",
  person: "",
  email: "",
  area: "",
  url: "",
  choices: [],
  message: "",
};

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; reason: "not_configured" | "rate_limited" | "invalid" | "failed" };

const FIELD_CLASS =
  "mt-1.5 block w-full rounded-xl border border-biz-line bg-white px-3.5 py-3 text-base text-biz-ink placeholder:text-slate-400 focus:border-biz-blue focus:outline-2 focus:outline-offset-0 focus:outline-biz-blue disabled:bg-slate-50 disabled:text-biz-muted";

/** 資料請求で選べる資料の種類 */
const DOCUMENTS = [
  { value: "店舗・施設向けの媒体資料", hint: "掲載内容・料金・お申し込みの流れ" },
  { value: "広告代理店向けの資料", hint: "代理店さま向けのお取り扱い条件" },
];

const COPY = {
  contact: {
    intro:
      "必要事項をご記入のうえ送信してください。ご入力いただいたアドレスに、受付内容の控えを自動でお送りします。",
    groupLegend: "ご希望のサービス（複数選択可）",
    groupLabel: "ご希望のサービス",
    messageLabel: "お問い合わせ内容",
    messageRequired: true,
    messagePlaceholder: "ご相談内容、ご希望の掲載時期、写真のご用意状況などをご記入ください。",
    submitLabel: "この内容で送信する",
    successTitle: "お問い合わせを受け付けました",
  },
  document: {
    intro:
      "必要事項をご記入のうえ送信してください。ご入力いただいたアドレスに、受付内容の控えを自動でお送りします。",
    groupLegend: "ご希望の資料（複数選択可）",
    groupLabel: "ご希望の資料",
    messageLabel: "ご質問・ご要望（任意）",
    messageRequired: false,
    messagePlaceholder: "検討中の内容やご質問があればご記入ください。空欄のままでも構いません。",
    submitLabel: "この内容で資料を請求する",
    successTitle: "資料請求を受け付けました",
  },
} as const;

const ERROR_MESSAGE: Record<
  Extract<Status, { kind: "error" }>["reason"],
  string
> = {
  not_configured:
    "ただいまフォームからの送信をご利用いただけません。お手数ですが、下記のアドレスまでメールでご連絡ください。",
  rate_limited:
    "短時間に送信が繰り返されています。しばらく時間をおいてからお試しいただくか、メールでご連絡ください。",
  invalid: "入力内容をご確認ください。必須項目が未入力か、メールアドレスの形式に誤りがあります。",
  failed:
    "送信に失敗しました。お手数ですが、時間をおいて再度お試しいただくか、メールでご連絡ください。",
};

export default function ContactForm({
  variant = "contact",
  defaultChoices = [],
}: {
  variant?: FormVariant;
  /** 最初からチェックを入れておく選択肢。代理店向けページのように用件が決まっている画面で使う。 */
  defaultChoices?: string[];
}) {
  const [state, setState] = useState<FormState>({ ...EMPTY, choices: defaultChoices });
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  /** ハニーポット。人は触らない項目。 */
  const [hp, setHp] = useState("");
  const baseId = useId();

  const copy = COPY[variant];
  const options =
    variant === "document"
      ? DOCUMENTS
      : [
          ...SERVICES.map((s) => ({ value: s.name, hint: undefined as string | undefined })),
          { value: "まだ決めていない・相談したい", hint: undefined },
        ];

  const fieldId = (name: string) => `${baseId}-${name}`;
  const submitting = status.kind === "submitting";

  const update = (key: keyof FormState) => (value: string) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const toggleChoice = (name: string) =>
    setState((prev) => ({
      ...prev,
      choices: prev.choices.includes(name)
        ? prev.choices.filter((s) => s !== name)
        : [...prev.choices, name],
    }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/business-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...state, variant, hp }),
      });

      if (res.ok) {
        setStatus({ kind: "success" });
        return;
      }

      const data = await res.json().catch(() => ({}));
      const reason = data?.reason;
      setStatus({
        kind: "error",
        reason:
          reason === "not_configured" || reason === "rate_limited" || reason === "invalid"
            ? reason
            : "failed",
      });
    } catch {
      setStatus({ kind: "error", reason: "failed" });
    }
  };

  /* ------------------------------------------------------------ 送信後 */

  if (status.kind === "success") {
    return (
      <div
        // 送信後にフォームが差し替わるので、読み上げにも伝える
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-biz-line bg-biz-blue-soft p-5 sm:p-6"
      >
        <p className="flex items-center gap-2 text-base font-bold text-biz-ink">
          <span aria-hidden="true">✓</span>
          {copy.successTitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-biz-muted">
          ご入力いただいたアドレス（{state.email}）に、受付内容の控えをお送りしました。
          <br />
          担当者よりあらためてメールにてご連絡いたしますので、少々お待ちくださいませ。
        </p>
        <p className="mt-3 text-xs leading-relaxed text-biz-muted">
          控えのメールが届かない場合は、迷惑メールフォルダをご確認ください。
          それでも見当たらない場合は、お手数ですが{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-bold break-all text-biz-blue underline underline-offset-4"
          >
            {CONTACT.email}
          </a>{" "}
          までご連絡ください。
        </p>
      </div>
    );
  }

  /* ------------------------------------------------------------ フォーム */

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="rounded-xl border border-biz-line bg-biz-sand p-4 text-xs leading-relaxed text-biz-muted">
        {copy.intro}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("company")} className="text-sm font-bold text-biz-ink">
            店舗・企業名
            <span className="ml-2 rounded bg-biz-cta px-1.5 py-0.5 text-[0.65rem] text-white">
              必須
            </span>
          </label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            required
            disabled={submitting}
            autoComplete="organization"
            value={state.company}
            onChange={(e) => update("company")(e.target.value)}
            placeholder="例：株式会社ぽやぴよ / カフェぽやぴよ"
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label htmlFor={fieldId("person")} className="text-sm font-bold text-biz-ink">
            ご担当者名
            <span className="ml-2 rounded bg-biz-cta px-1.5 py-0.5 text-[0.65rem] text-white">
              必須
            </span>
          </label>
          <input
            id={fieldId("person")}
            name="person"
            type="text"
            required
            disabled={submitting}
            autoComplete="name"
            value={state.person}
            onChange={(e) => update("person")(e.target.value)}
            placeholder="例：山田 太郎"
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label htmlFor={fieldId("email")} className="text-sm font-bold text-biz-ink">
            メールアドレス
            <span className="ml-2 rounded bg-biz-cta px-1.5 py-0.5 text-[0.65rem] text-white">
              必須
            </span>
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            required
            disabled={submitting}
            inputMode="email"
            autoComplete="email"
            value={state.email}
            onChange={(e) => update("email")(e.target.value)}
            placeholder="例：info@example.com"
            className={FIELD_CLASS}
          />
          <p className="mt-1.5 text-xs text-biz-muted">
            このアドレスに受付の控えをお送りします。
          </p>
        </div>

        <div>
          <label htmlFor={fieldId("area")} className="text-sm font-bold text-biz-ink">
            所在地
          </label>
          <input
            id={fieldId("area")}
            name="area"
            type="text"
            disabled={submitting}
            value={state.area}
            onChange={(e) => update("area")(e.target.value)}
            placeholder="例：東京都渋谷区"
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("url")} className="text-sm font-bold text-biz-ink">
          Webサイト / SNS の URL
        </label>
        <input
          id={fieldId("url")}
          name="url"
          type="url"
          disabled={submitting}
          inputMode="url"
          value={state.url}
          onChange={(e) => update("url")(e.target.value)}
          placeholder="https://example.com"
          className={FIELD_CLASS}
        />
        <p className="mt-1.5 text-xs text-biz-muted">
          お店の雰囲気が分かるページがあると、ご案内がスムーズです。
        </p>
      </div>

      <fieldset className="rounded-xl border border-biz-line p-4" disabled={submitting}>
        <legend className="px-1 text-sm font-bold text-biz-ink">{copy.groupLegend}</legend>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {options.map((option) => {
            const id = fieldId(`choice-${option.value}`);
            return (
              <li key={option.value}>
                <label
                  htmlFor={id}
                  className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-1 py-1 text-sm text-biz-ink"
                >
                  <input
                    id={id}
                    type="checkbox"
                    name="choices"
                    value={option.value}
                    checked={state.choices.includes(option.value)}
                    onChange={() => toggleChoice(option.value)}
                    className="size-4 shrink-0 accent-[#c2410c]"
                  />
                  <span>
                    {option.value}
                    {option.hint && (
                      <span className="mt-0.5 block text-xs font-normal text-biz-muted">
                        {option.hint}
                      </span>
                    )}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <div>
        <label htmlFor={fieldId("message")} className="text-sm font-bold text-biz-ink">
          {copy.messageLabel}
          {copy.messageRequired && (
            <span className="ml-2 rounded bg-biz-cta px-1.5 py-0.5 text-[0.65rem] text-white">
              必須
            </span>
          )}
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          required={copy.messageRequired}
          disabled={submitting}
          rows={copy.messageRequired ? 6 : 4}
          value={state.message}
          onChange={(e) => update("message")(e.target.value)}
          placeholder={copy.messagePlaceholder}
          className={`${FIELD_CLASS} resize-y`}
        />
      </div>

      {/* ハニーポット。人には見せず、自動入力してくる機械だけを弾く。 */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={fieldId("hp")}>この項目は入力しないでください</label>
        <input
          id={fieldId("hp")}
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-biz-cta px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-biz-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-cta disabled:cursor-not-allowed disabled:bg-biz-muted sm:w-auto"
        >
          {submitting ? "送信中…" : copy.submitLabel}
        </button>
      </div>

      {/* エラーは読み上げにも伝える */}
      <div aria-live="polite">
        {status.kind === "error" && (
          <div className="rounded-xl border border-biz-cta bg-orange-50 p-4">
            <p className="text-sm leading-relaxed font-bold text-biz-ink">
              {ERROR_MESSAGE[status.reason]}
            </p>
            {status.reason !== "invalid" && (
              <p className="mt-2 text-sm">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-bold break-all text-biz-blue underline underline-offset-4"
                >
                  {CONTACT.email}
                </a>
              </p>
            )}
          </div>
        )}
      </div>

      <p className="text-xs leading-relaxed text-biz-muted">
        ご記入いただいた内容は、お問い合わせへの回答・資料の送付・その後のご連絡にのみ使用します。
        ご本人の同意なく第三者へ提供することはありません。
      </p>
    </form>
  );
}
