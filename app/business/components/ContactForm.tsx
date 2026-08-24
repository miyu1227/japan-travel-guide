"use client";

import { useId, useState } from "react";
import { SERVICES } from "@/lib/business/services";
import { CONTACT } from "@/lib/business/site";

/**
 * お問い合わせフォーム。
 *
 * サーバー側の送信処理はまだないので、「送信したふり」はしない。
 * 入力内容からメール本文を組み立てて、
 *   1. ご利用のメールソフトを開く（mailto）
 *   2. 本文をコピーして自分で送る
 * のどちらかを選べる形にしている。挙動はフォーム上に明記する。
 */

type FormState = {
  company: string;
  person: string;
  email: string;
  area: string;
  url: string;
  services: string[];
  message: string;
};

const EMPTY: FormState = {
  company: "",
  person: "",
  email: "",
  area: "",
  url: "",
  services: [],
  message: "",
};

const FIELD_CLASS =
  "mt-1.5 block w-full rounded-xl border border-biz-line bg-white px-3.5 py-3 text-base text-biz-ink placeholder:text-slate-400 focus:border-biz-blue focus:outline-2 focus:outline-offset-0 focus:outline-biz-blue";

function buildBody(state: FormState): string {
  const services = state.services.length > 0 ? state.services.join("、") : "（未選択）";
  return [
    "Japan Trip Picks for Business お問い合わせ",
    "",
    `店舗・企業名：${state.company || "（未入力）"}`,
    `ご担当者名：${state.person || "（未入力）"}`,
    `メールアドレス：${state.email || "（未入力）"}`,
    `所在地：${state.area || "（未入力）"}`,
    `Webサイト / SNS：${state.url || "（未入力）"}`,
    `ご希望のサービス：${services}`,
    "",
    "お問い合わせ内容：",
    state.message || "（未入力）",
  ].join("\n");
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(EMPTY);
  const [copied, setCopied] = useState<"idle" | "done" | "failed">("idle");
  /** コピーできなかったときに画面へ出す本文 */
  const [composed, setComposed] = useState("");
  const baseId = useId();

  const fieldId = (name: string) => `${baseId}-${name}`;

  const update = (key: keyof FormState) => (value: string) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const toggleService = (name: string) =>
    setState((prev) => ({
      ...prev,
      services: prev.services.includes(name)
        ? prev.services.filter((s) => s !== name)
        : [...prev.services, name],
    }));

  const subject = state.company
    ? `【掲載のご相談】${state.company}`
    : "【掲載のご相談】Japan Trip Picks for Business";

  // メールソフトを開く。フォーム自体はサーバーに送信しない。
  const openMailClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildBody(state))}`;
    window.location.href = href;
  };

  const copyBody = async () => {
    const text = `宛先: ${CONTACT.email}\n件名: ${subject}\n\n${buildBody(state)}`;
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
    <form onSubmit={openMailClient} className="space-y-5" noValidate={false}>
      {/* この画面から直接送信されないことを最初に明示する */}
      <p className="rounded-xl border border-biz-line bg-biz-sand p-4 text-xs leading-relaxed text-biz-muted">
        現在このフォームは、入力内容をメール本文に組み立てるためのものです。
        送信ボタンを押すと、ご利用のメールソフトが起動し、入力内容が入った状態でメールが作成されます。
        <strong className="font-bold text-biz-ink">この画面から直接送信されることはありません。</strong>
        メールソフトが起動しない場合は、下の「入力内容をコピー」をお使いください。
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("company")} className="text-sm font-bold text-biz-ink">
            店舗・企業名
            <span className="ml-2 rounded bg-biz-cta px-1.5 py-0.5 text-[0.65rem] text-white">必須</span>
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
            <span className="ml-2 rounded bg-biz-cta px-1.5 py-0.5 text-[0.65rem] text-white">必須</span>
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
            <span className="ml-2 rounded bg-biz-cta px-1.5 py-0.5 text-[0.65rem] text-white">必須</span>
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
        <legend className="px-1 text-sm font-bold text-biz-ink">ご希望のサービス（複数選択可）</legend>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const id = fieldId(`service-${service.id}`);
            return (
              <li key={service.id}>
                <label
                  htmlFor={id}
                  className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-1 text-sm text-biz-ink"
                >
                  <input
                    id={id}
                    type="checkbox"
                    name="services"
                    value={service.name}
                    checked={state.services.includes(service.name)}
                    onChange={() => toggleService(service.name)}
                    className="size-4 shrink-0 accent-[#c2410c]"
                  />
                  <span>
                    {service.name}
                    <span className="ml-1 text-xs text-biz-muted">（{service.price}）</span>
                  </span>
                </label>
              </li>
            );
          })}
          <li>
            <label
              htmlFor={fieldId("service-undecided")}
              className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-1 text-sm text-biz-ink"
            >
              <input
                id={fieldId("service-undecided")}
                type="checkbox"
                name="services"
                value="まだ決めていない・相談したい"
                checked={state.services.includes("まだ決めていない・相談したい")}
                onChange={() => toggleService("まだ決めていない・相談したい")}
                className="size-4 shrink-0 accent-[#c2410c]"
              />
              <span>まだ決めていない・相談したい</span>
            </label>
          </li>
        </ul>
      </fieldset>

      <div>
        <label htmlFor={fieldId("message")} className="text-sm font-bold text-biz-ink">
          お問い合わせ内容
          <span className="ml-2 rounded bg-biz-cta px-1.5 py-0.5 text-[0.65rem] text-white">必須</span>
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          required
          rows={6}
          value={state.message}
          onChange={(e) => update("message")(e.target.value)}
          placeholder="ご相談内容、ご希望の掲載時期、写真のご用意状況などをご記入ください。"
          className={`${FIELD_CLASS} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-biz-cta px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-biz-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-cta sm:w-auto"
        >
          <span aria-hidden="true">✉</span>
          メールソフトで送信内容を作成する
        </button>
        <button
          type="button"
          onClick={copyBody}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-biz-line bg-white px-5 py-3 text-sm font-bold text-biz-ink transition-colors hover:border-biz-blue hover:text-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue sm:w-auto"
        >
          入力内容をコピー
        </button>
      </div>

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
