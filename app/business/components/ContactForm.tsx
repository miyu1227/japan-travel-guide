"use client";

import { useId, useState } from "react";
import { SERVICES } from "@/lib/business/services";
import { CONTACT } from "@/lib/business/site";

/**
 * お問い合わせ／資料請求フォーム。
 *
 * サーバー側の送信処理はまだないので、「送信したふり」はしない。
 * 入力内容からメール本文を組み立てて、
 *   1. ご利用のメールソフトを開く（mailto）
 *   2. 本文をコピーして自分で送る
 * のどちらかを選べる形にしている。挙動はフォーム上に明記する。
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

const FIELD_CLASS =
  "mt-1.5 block w-full rounded-xl border border-biz-line bg-white px-3.5 py-3 text-base text-biz-ink placeholder:text-slate-400 focus:border-biz-blue focus:outline-2 focus:outline-offset-0 focus:outline-biz-blue";

/** 資料請求で選べる資料の種類 */
const DOCUMENTS = [
  {
    value: "店舗・施設向けの媒体資料",
    hint: "掲載内容・料金・お申し込みの流れ",
  },
  {
    value: "広告代理店向けの資料",
    hint: "代理店さま向けのお取り扱い条件",
  },
];

const COPY = {
  contact: {
    intro:
      "現在このフォームは、入力内容をメール本文に組み立てるためのものです。送信ボタンを押すと、ご利用のメールソフトが起動し、入力内容が入った状態でメールが作成されます。",
    subjectPrefix: "【掲載のご相談】",
    fallbackSubject: "【掲載のご相談】Japan Trip Picks for Business",
    bodyTitle: "Japan Trip Picks for Business お問い合わせ",
    groupLegend: "ご希望のサービス（複数選択可）",
    groupLabel: "ご希望のサービス",
    messageLabel: "お問い合わせ内容",
    messageRequired: true,
    messagePlaceholder:
      "ご相談内容、ご希望の掲載時期、写真のご用意状況などをご記入ください。",
    submitLabel: "メールソフトで送信内容を作成する",
  },
  document: {
    intro:
      "現在このフォームは、入力内容をメール本文に組み立てるためのものです。送信ボタンを押すとご利用のメールソフトが起動しますので、そのままお送りください。折り返し、担当より媒体資料をメールでお送りします。",
    subjectPrefix: "【資料請求】",
    fallbackSubject: "【資料請求】Japan Trip Picks for Business",
    bodyTitle: "Japan Trip Picks for Business 資料請求",
    groupLegend: "ご希望の資料（複数選択可）",
    groupLabel: "ご希望の資料",
    messageLabel: "ご質問・ご要望（任意）",
    messageRequired: false,
    messagePlaceholder:
      "検討中の内容やご質問があればご記入ください。空欄のままでも構いません。",
    submitLabel: "メールソフトで資料請求メールを作成する",
  },
} as const;

export default function ContactForm({ variant = "contact" }: { variant?: FormVariant }) {
  const [state, setState] = useState<FormState>(EMPTY);
  const [copied, setCopied] = useState<"idle" | "done" | "failed">("idle");
  /** コピーできなかったときに画面へ出す本文 */
  const [composed, setComposed] = useState("");
  const baseId = useId();

  const copy = COPY[variant];
  const options =
    variant === "document"
      ? DOCUMENTS.map((d) => ({ value: d.value, hint: d.hint }))
      : [
          ...SERVICES.map((s) => ({ value: s.name, hint: undefined as string | undefined })),
          { value: "まだ決めていない・相談したい", hint: undefined },
        ];

  const fieldId = (name: string) => `${baseId}-${name}`;

  const update = (key: keyof FormState) => (value: string) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const toggleChoice = (name: string) =>
    setState((prev) => ({
      ...prev,
      choices: prev.choices.includes(name)
        ? prev.choices.filter((s) => s !== name)
        : [...prev.choices, name],
    }));

  const subject = state.company ? `${copy.subjectPrefix}${state.company}` : copy.fallbackSubject;

  const buildBody = () =>
    [
      copy.bodyTitle,
      "",
      `店舗・企業名：${state.company || "（未入力）"}`,
      `ご担当者名：${state.person || "（未入力）"}`,
      `メールアドレス：${state.email || "（未入力）"}`,
      `所在地：${state.area || "（未入力）"}`,
      `Webサイト / SNS：${state.url || "（未入力）"}`,
      `${copy.groupLabel}：${state.choices.length > 0 ? state.choices.join("、") : "（未選択）"}`,
      "",
      `${copy.messageLabel.replace("（任意）", "")}：`,
      state.message || "（未入力）",
    ].join("\n");

  // メールソフトを開く。フォーム自体はサーバーに送信しない。
  const openMailClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildBody())}`;
    window.location.href = href;
  };

  const copyBody = async () => {
    const text = `宛先: ${CONTACT.email}\n件名: ${subject}\n\n${buildBody()}`;
    setComposed(text);
    try {
      await navigator.clipboard.writeText(text);
      setCopied("done");
    } catch {
      // 権限やフォーカスの都合でコピーできない環境がある。
      // その場合は本文を画面に出して、手でコピーできるようにする。
      setCopied("failed");
    }
  };

  return (
    <form onSubmit={openMailClient} className="space-y-5">
      {/* この画面から直接送信されないことを最初に明示する */}
      <p className="rounded-xl border border-biz-line bg-biz-sand p-4 text-xs leading-relaxed text-biz-muted">
        {copy.intro}
        <strong className="font-bold text-biz-ink">
          この画面から直接送信されることはありません。
        </strong>
        メールソフトが起動しない場合は、下の「入力内容をコピー」をお使いください。
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
            inputMode="email"
            autoComplete="email"
            value={state.email}
            onChange={(e) => update("email")(e.target.value)}
            placeholder="例：info@example.com"
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label htmlFor={fieldId("area")} className="text-sm font-bold text-biz-ink">
            所在地
          </label>
          <input
            id={fieldId("area")}
            name="area"
            type="text"
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

      <fieldset className="rounded-xl border border-biz-line p-4">
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
          rows={copy.messageRequired ? 6 : 4}
          value={state.message}
          onChange={(e) => update("message")(e.target.value)}
          placeholder={copy.messagePlaceholder}
          className={`${FIELD_CLASS} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-biz-cta px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-biz-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-cta sm:w-auto"
        >
          <span aria-hidden="true">✉</span>
          {copy.submitLabel}
        </button>
        <button
          type="button"
          onClick={copyBody}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-biz-line bg-white px-5 py-3 text-sm font-bold text-biz-ink transition-colors hover:border-biz-blue hover:text-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue sm:w-auto"
        >
          入力内容をコピー
        </button>
      </div>

      {/* 個人情報の扱い。フォームで氏名・連絡先をいただくので明記しておく。 */}
      <p className="text-xs leading-relaxed text-biz-muted">
        ご記入いただいた内容は、お問い合わせへの回答・資料の送付・その後のご連絡にのみ使用します。
        ご本人の同意なく第三者へ提供することはありません。
      </p>

      {/* コピー結果は読み上げにも伝わるようにする */}
      <p aria-live="polite" className="min-h-5 text-xs text-biz-muted">
        {copied === "done" &&
          `コピーしました。${CONTACT.email} 宛にそのまま貼り付けてお送りください。`}
        {copied === "failed" &&
          "自動でコピーできませんでした。下の本文を選択してコピーし、メールでお送りください。"}
      </p>

      {copied === "failed" && composed && (
        <div>
          <label htmlFor={fieldId("composed")} className="text-xs font-bold text-biz-ink">
            送信用の本文
          </label>
          <textarea
            id={fieldId("composed")}
            readOnly
            rows={12}
            value={composed}
            onFocus={(e) => e.currentTarget.select()}
            className={`${FIELD_CLASS} font-mono text-xs`}
          />
        </div>
      )}
    </form>
  );
}
