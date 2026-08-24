import { NextResponse } from "next/server";
import { CONTACT, ORIGIN, BASE_PATH } from "@/lib/business/site";

/**
 * /business のフォーム送信を受けるエンドポイント。
 *
 * 1. 運営者あてに通知メール（reply_to に送信者のアドレスを入れるので、そのまま返信できる）
 * 2. 送信者あてに自動返信（受付控え）
 * を送る。
 *
 * メール送信は Resend の API を fetch で直接叩く。
 * SDKを足すほどの処理ではないので、依存は増やさない。
 *
 * 環境変数が未設定のときは「送れたフリ」をせず 503 を返し、
 * 画面側でメール連絡へ誘導する。
 */

export const runtime = "nodejs";
// 送信のたびに実行する。キャッシュされると二重送信や無反応の原因になる。
export const dynamic = "force-dynamic";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** 送信元。独自ドメインをResendで認証したうえで設定する。 */
const MAIL_FROM = process.env.BUSINESS_MAIL_FROM;
/** 通知の宛先。未設定なら運営者アドレス。 */
const MAIL_TO = process.env.BUSINESS_MAIL_TO ?? CONTACT.email;

type Variant = "contact" | "document";

const LIMITS = {
  company: 200,
  person: 100,
  email: 254,
  area: 200,
  url: 500,
  message: 4000,
  choice: 100,
  choices: 12,
} as const;

const COPY: Record<
  Variant,
  { label: string; subjectPrefix: string; choiceLabel: string; ackTitle: string }
> = {
  contact: {
    label: "お問い合わせ",
    subjectPrefix: "【お問い合わせ】",
    choiceLabel: "ご希望のサービス",
    ackTitle: "お問い合わせを受け付けました",
  },
  document: {
    label: "資料請求",
    subjectPrefix: "【資料請求】",
    choiceLabel: "ご希望の資料",
    ackTitle: "資料請求を受け付けました",
  },
};

/* ------------------------------------------------------------ 入力の検証 */

function asString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

/** 件名に改行が混ざるとヘッダーインジェクションになるので必ず潰す */
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function isValidEmail(value: string): boolean {
  // 厳密なRFC準拠ではなく、明らかな誤りを弾く程度に留める
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/* ------------------------------------------------------ 簡易レート制限 */

// インスタンス単位のメモリなので厳密ではないが、素朴な連投は止まる。
// 本格的に必要になったら Upstash などの外部ストアに置き換える。
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // 溜まりっぱなしを防ぐ
  if (hits.size > 5000) hits.clear();

  return recent.length > MAX_PER_WINDOW;
}

/* ------------------------------------------------------------ 本文組み立て */

type Payload = {
  variant: Variant;
  company: string;
  person: string;
  email: string;
  area: string;
  url: string;
  choices: string[];
  message: string;
};

function buildNotification(p: Payload): string {
  const c = COPY[p.variant];
  return [
    `Japan Trip Picks for Business ${c.label}`,
    "",
    `店舗・企業名：${p.company}`,
    `ご担当者名：${p.person}`,
    `メールアドレス：${p.email}`,
    `所在地：${p.area || "（未入力）"}`,
    `Webサイト / SNS：${p.url || "（未入力）"}`,
    `${c.choiceLabel}：${p.choices.length ? p.choices.join("、") : "（未選択）"}`,
    "",
    "内容：",
    p.message || "（未入力）",
  ].join("\n");
}

function buildAck(p: Payload): string {
  const c = COPY[p.variant];
  const followUp =
    p.variant === "document"
      ? "担当者より、媒体資料を添えてあらためてメールにてご連絡いたします。"
      : "担当者より、あらためてメールにてご連絡いたします。";

  return [
    `${p.person} 様`,
    "",
    "Japan Trip Picks for Business です。",
    `このたびは${c.label}をいただき、ありがとうございます。`,
    "",
    "以下の内容で受け付けいたしました。",
    followUp,
    "少々お待ちくださいますようお願いいたします。",
    "",
    "────────────────",
    `店舗・企業名：${p.company}`,
    `ご担当者名：${p.person}`,
    `メールアドレス：${p.email}`,
    `所在地：${p.area || "（未入力）"}`,
    `Webサイト / SNS：${p.url || "（未入力）"}`,
    `${c.choiceLabel}：${p.choices.length ? p.choices.join("、") : "（未選択）"}`,
    "",
    "内容：",
    p.message || "（未入力）",
    "────────────────",
    "",
    "※このメールは自動送信です。",
    `　お急ぎの場合は ${CONTACT.email} までご連絡ください。`,
    "",
    "──",
    "Japan Trip Picks for Business",
    `${ORIGIN}${BASE_PATH}`,
  ].join("\n");
}

/* ------------------------------------------------------------ 送信 */

async function sendMail(params: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<boolean> {
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [params.to],
      subject: params.subject,
      text: params.text,
      ...(params.replyTo ? { reply_to: params.replyTo } : {}),
    }),
  });

  if (!res.ok) {
    console.error("[business-contact] send failed", res.status, await res.text());
    return false;
  }
  return true;
}

/* ------------------------------------------------------------ ハンドラ */

export async function POST(request: Request) {
  // 環境変数が無い状態で「送信できました」と返さない
  if (!process.env.RESEND_API_KEY || !MAIL_FROM) {
    return NextResponse.json(
      { ok: false, reason: "not_configured" },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // ハニーポット。人には見えない項目なので、埋まっていれば機械とみなす。
  // 機械には成功したように見せて、実際には何もしない。
  if (asString(raw.hp, 100)) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, reason: "rate_limited" }, { status: 429 });
  }

  const variant: Variant = raw.variant === "document" ? "document" : "contact";
  const payload: Payload = {
    variant,
    company: asString(raw.company, LIMITS.company),
    person: asString(raw.person, LIMITS.person),
    email: asString(raw.email, LIMITS.email),
    area: asString(raw.area, LIMITS.area),
    url: asString(raw.url, LIMITS.url),
    choices: Array.isArray(raw.choices)
      ? raw.choices
          .slice(0, LIMITS.choices)
          .map((c) => asString(c, LIMITS.choice))
          .filter(Boolean)
      : [],
    message: asString(raw.message, LIMITS.message),
  };

  const missing =
    !payload.company ||
    !payload.person ||
    !isValidEmail(payload.email) ||
    (variant === "contact" && !payload.message);

  if (missing) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const c = COPY[variant];
  const subject = singleLine(`${c.subjectPrefix}${payload.company}`);

  // 通知が送れなければ失敗として扱う。控えメールは補助なので、
  // 落ちても受付そのものは成立させる。
  const notified = await sendMail({
    to: MAIL_TO,
    subject,
    text: buildNotification(payload),
    replyTo: payload.email,
  });

  if (!notified) {
    return NextResponse.json({ ok: false, reason: "send_failed" }, { status: 502 });
  }

  const acknowledged = await sendMail({
    to: payload.email,
    subject: `【Japan Trip Picks】${c.ackTitle}`,
    text: buildAck(payload),
  });

  return NextResponse.json({ ok: true, acknowledged });
}
