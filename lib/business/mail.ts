// メールでの問い合わせ導線。
//
// 受け口はメールに一本化している。
// 送信フォームは実装してあるが、送信基盤（Resend）を繋いでいないため画面には出していない。
// 繋ぐ手順が済んだら、各ページで MailCta を ContactForm に戻せばよい。
//
// メールは「宛先だけ書いてある」状態だと相手が何を書けばいいか分からず、
// 結局こちらから聞き直すことになって往復が増える。
// そのため件名と本文のひな形を mailto に載せ、相手は埋めるだけの状態にしておく。
import { CONTACT } from "./site";

export type MailVariant = "contact" | "document" | "agency";

type MailTemplate = {
  /** 画面に出す見出し */
  heading: string;
  /** 何が起きるかの説明 */
  description: string;
  /** メールの件名 */
  subject: string;
  /** 本文のひな形。相手はここを埋めるだけでよい */
  body: string[];
  /** 画面にも出す「書き添えていただきたいこと」 */
  checklist: string[];
  /** ボタンの文言 */
  buttonLabel: string;
};

const SIGNATURE_HINT = "※ ご記入いただいた内容をもとに、担当者よりメールでご返信いたします。";

export const MAIL_TEMPLATES: Record<MailVariant, MailTemplate> = {
  contact: {
    heading: "メールでお問い合わせください",
    description:
      "下のボタンを押すと、件名と項目があらかじめ入った状態でメールが開きます。空欄を埋めてそのまま送信してください。",
    subject: "【お問い合わせ】Japan Trip Picks for Business",
    body: [
      "Japan Trip Picks for Business ご担当者さま",
      "",
      "掲載についてお問い合わせいたします。",
      "",
      "店舗・企業名：",
      "ご担当者名：",
      "所在地：",
      "Webサイト / SNS：",
      "ご希望のサービス：",
      "ご相談内容：",
      "",
      SIGNATURE_HINT,
    ],
    checklist: [
      "店舗・企業名",
      "ご担当者名",
      "所在地",
      "Webサイト / SNS の URL",
      "ご希望のサービス（貴店専用ページの掲載 / 繁体字コンテンツ制作 など）",
      "ご相談内容",
    ],
    buttonLabel: "メールを作成する",
  },

  document: {
    heading: "メールで媒体資料をご請求ください",
    description:
      "下のボタンを押すと、件名と項目があらかじめ入った状態でメールが開きます。空欄を埋めてそのまま送信してください。折り返し媒体資料をお送りします。",
    subject: "【資料請求】Japan Trip Picks for Business",
    body: [
      "Japan Trip Picks for Business ご担当者さま",
      "",
      "媒体資料をご請求いたします。",
      "",
      "店舗・企業名：",
      "ご担当者名：",
      "所在地：",
      "Webサイト / SNS：",
      "ご検討中の内容（任意）：",
      "",
      SIGNATURE_HINT,
    ],
    checklist: [
      "店舗・企業名",
      "ご担当者名",
      "所在地",
      "Webサイト / SNS の URL",
      "ご検討中の内容（任意）",
    ],
    buttonLabel: "メールで資料を請求する",
  },

  agency: {
    heading: "メールで代理店さま向けの資料をご請求ください",
    description:
      "下のボタンを押すと、件名と項目があらかじめ入った状態でメールが開きます。NET価格とお取引条件を記載した資料と、クライアント配布用（価格の記載なし）の資料をあわせてお送りします。",
    subject: "【資料請求／代理店】Japan Trip Picks for Business",
    body: [
      "Japan Trip Picks for Business ご担当者さま",
      "",
      "代理店向けの資料を請求いたします。",
      "",
      "御社名：",
      "ご担当者名（部署・役職）：",
      "御社Webサイト：",
      "主なクライアントの業種・エリア：",
      "ご質問・ご要望（任意）：",
      "",
      SIGNATURE_HINT,
    ],
    checklist: [
      "御社名",
      "ご担当者名（部署・役職）",
      "御社Webサイトの URL",
      "主なクライアントの業種・エリア",
      "ご質問・ご要望（任意）",
    ],
    buttonLabel: "メールで資料を請求する",
  },
};

/**
 * mailto: のURLを組み立てる。
 *
 * 改行は CRLF にしておく。LF だけだと本文が1行に潰れるメールソフトがある。
 */
export function mailtoHref(variant: MailVariant): string {
  const template = MAIL_TEMPLATES[variant];
  const subject = encodeURIComponent(template.subject);
  const body = encodeURIComponent(template.body.join("\r\n"));
  return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
}
