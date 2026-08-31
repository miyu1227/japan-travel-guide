"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/lib/business/site";
import { MAIL_TEMPLATES, mailtoHref, type MailVariant } from "@/lib/business/mail";
import { CtaAnchor } from "./ui";

/**
 * メールでの問い合わせ導線。
 *
 * mailto はメールソフトが設定されていない環境（会社のPCでWebメールを使っている等）では
 * 何も起きないため、アドレスをそのまま見せたうえでコピーもできるようにしておく。
 * 「ボタンを押したのに何も起きない＝問い合わせられない」で離脱させない。
 */
/** コピーボタンの状態。押しても無反応、という見え方にしないための3値。 */
type CopyState = "idle" | "copied" | "selected";

const COPY_LABEL: Record<CopyState, string> = {
  idle: "アドレスをコピー",
  copied: "コピーしました",
  selected: "選択しました",
};

export default function MailCta({ variant = "contact" }: { variant?: MailVariant }) {
  const template = MAIL_TEMPLATES[variant];
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const addressRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (copyState === "idle") return;
    const timer = setTimeout(() => setCopyState("idle"), 4000);
    return () => clearTimeout(timer);
  }, [copyState]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopyState("copied");
      return;
    } catch {
      // ブラウザや環境によってはクリップボードへの書き込みが拒否される。
      // その場合は無反応にせず、アドレスを選択状態にして手でコピーできるようにする。
    }

    const node = addressRef.current;
    if (!node) return;

    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    setCopyState("selected");
  }

  return (
    <div className="rounded-2xl border border-biz-line bg-white p-5 sm:p-7">
      <h3 className="text-base font-bold text-biz-ink sm:text-lg">{template.heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-biz-muted">{template.description}</p>

      {/* ------------------------------------------------------ アドレス */}
      <div className="mt-5 rounded-xl border border-biz-line bg-biz-blue-soft p-4 sm:p-5">
        <p className="text-xs font-bold text-biz-muted">お問い合わせ先</p>
        <p className="mt-1.5 flex items-start gap-2">
          <span aria-hidden="true" className="mt-0.5 text-biz-blue">
            ✉
          </span>
          <a
            ref={addressRef}
            href={`mailto:${CONTACT.email}`}
            className="text-base leading-snug font-bold break-all text-biz-ink underline-offset-4 hover:text-biz-blue hover:underline sm:text-xl"
          >
            {CONTACT.email}
          </a>
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <CtaAnchor href={mailtoHref(variant)} className="w-full sm:w-auto">
            {template.buttonLabel}
          </CtaAnchor>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-biz-line bg-white px-5 py-2.5 text-sm font-bold text-biz-ink transition-colors hover:border-biz-blue hover:text-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue"
          >
            {COPY_LABEL[copyState]}
          </button>
        </div>

        <p aria-live="polite" className="mt-3 text-xs leading-relaxed text-biz-muted">
          {copyState === "copied"
            ? "メールアドレスをコピーしました。"
            : copyState === "selected"
              ? "アドレスを選択しました。Ctrl+C（Macは⌘+C）でコピーしてください。"
              : "ボタンを押しても何も起きない場合は、上のアドレスをコピーして、お使いのメールからお送りください。"}
        </p>
      </div>

      {/* -------------------------------------------- 書き添えていただく内容 */}
      <div className="mt-5">
        <h4 className="text-sm font-bold text-biz-ink">お書き添えいただきたいこと</h4>
        <p className="mt-1.5 text-xs leading-relaxed text-biz-muted">
          ボタンから作成した場合は、この項目があらかじめ入っています。
        </p>
        <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
          {template.checklist.map((item) => (
            <li key={item} className="flex gap-2 text-xs leading-relaxed text-biz-muted">
              <span aria-hidden="true" className="text-biz-blue">
                ・
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
