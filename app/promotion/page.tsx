import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/promotion";
const OG_IMAGE = "/poyapiyo-flag.png";

export const metadata: Metadata = {
  title: "掲載・プロモーションのご案内｜訪日台湾・香港旅行者向けPR",
  description:
    "訪日外国人（台湾・香港）向け旅行ガイドサイト Japan Trip Picks への店舗・スポット掲載のご案内。貴店専用の記事を1本作成し、日本語＋繁体字での紹介文つきで永久掲載します。料金はお見積りいたしますので、お気軽にお問い合わせください。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "掲載・プロモーションのご案内｜Japan Trip Picks",
    description:
      "台湾・香港の訪日旅行者に向けて、あなたのお店・スポットをPRしませんか？掲載プラン・料金・お問い合わせ方法のご案内。",
    url: PAGE_URL,
    type: "website",
    locale: "ja_JP",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Japan Trip Picks 掲載・プロモーションのご案内" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "掲載・プロモーションのご案内｜Japan Trip Picks",
    description: "台湾・香港の訪日旅行者向けにお店・スポットをPR。掲載プランと料金のご案内。",
    images: [OG_IMAGE],
  },
};

export default function PromotionPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700">掲載・プロモーション</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        {/* Hero */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-950 rounded-3xl p-7 text-white">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Business</p>
          <h1 className="text-2xl font-black leading-tight mb-3">
            📢 掲載・プロモーションのご案内
          </h1>
          <p className="text-stone-300 text-sm leading-relaxed">
            訪日外国人（台湾・香港）向けに特化したガイドサイト<br />
            <span className="font-semibold text-white">Japan Trip Picks</span> に、<br />
            あなたのお店・スポットをPRしませんか？
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1">🌏 台湾・香港向け</span>
            <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1">📸 写真付き紹介</span>
            <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1">♾️ 永久掲載</span>
          </div>
        </div>

        {/* Plan */}
        <div className="space-y-4">
          <h2 className="text-sm font-black text-stone-500 uppercase tracking-widest px-1">掲載プラン</h2>

          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
            <div className="bg-rose-400 px-5 py-4 flex items-center justify-between">
              <div>
                <span className="font-black text-white text-base block">貴店専用ページ</span>
                <span className="text-white/90 text-xs">記事を1本まるごと作成します</span>
              </div>
              <span className="text-white font-black text-lg">お見積り</span>
            </div>
            <div className="px-5 py-4">
              <p className="text-xs text-stone-500 font-semibold mb-3">🌸 1店舗ごとに独立したページをお作りします</p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2"><span className="text-rose-400 font-bold">✔</span> 貴店専用の記事を1本作成</li>
                <li className="flex items-center gap-2"><span className="text-rose-400 font-bold">✔</span> 写真5〜10枚<span className="text-stone-400 text-xs">（※1）</span></li>
                <li className="flex items-center gap-2"><span className="text-rose-400 font-bold">✔</span> 基本情報（住所・アクセス・営業時間など）</li>
                <li className="flex items-center gap-2"><span className="text-rose-400 font-bold">✔</span> 紹介文作成（日本語＋繁体字）</li>
                <li className="flex items-center gap-2"><span className="text-rose-400 font-bold">✔</span> 公式サイト・地図へのリンク</li>
                <li className="flex items-center gap-2"><span className="text-rose-400 font-bold">✔</span> 修正2回</li>
                <li className="flex items-center gap-2"><span className="text-rose-400 font-bold">✔</span> 永久掲載（月額費用・更新料なし）</li>
              </ul>
              <p className="text-xs text-stone-500 leading-relaxed mt-4 pt-3 border-t border-stone-100">
                料金は掲載内容に応じてお見積りいたします。
                お気軽にお問い合わせください。折り返しご案内いたします。
              </p>
            </div>
          </div>
        </div>

        {/* Option */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl px-5 py-4">
          <p className="text-sm font-black text-stone-700 mb-1">✨ オプション</p>
          <p className="text-sm text-stone-600">SNS紹介（Instagram・Threads）</p>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl border border-stone-200 px-5 py-4">
          <p className="text-sm font-black text-stone-700 mb-3">📋 ご確認事項</p>
          <ul className="space-y-3 text-xs text-stone-600 leading-relaxed">
            <li>
              <span className="font-bold text-stone-700">※1 写真について</span><br />
              お客様よりご提供いただきます。当方での撮影は承っておりませんので、
              あらかじめご了承ください。
            </li>
            <li>
              <span className="font-bold text-stone-700">※2 閉店・移転された場合</span><br />
              掲載の削除または基本情報の修正にて対応いたします。
              記事内容の全面的な書き換えが必要な場合は、新規のお申し込みとなります。
            </li>
            <li>
              <span className="font-bold text-stone-700">※3 掲載枠について</span><br />
              第三者への譲渡・転売はできません。運営者が変わられた場合も、
              掲載内容の引き継ぎはお受けしておりません。
            </li>
          </ul>
        </div>

        {/* 掲載基準 */}
        <div className="bg-white rounded-2xl border border-stone-200 px-5 py-4">
          <p className="text-sm font-black text-stone-700 mb-1">🛡 掲載基準について</p>
          <p className="text-xs text-stone-500 leading-relaxed mb-3">
            掲載の可否は当サイトにて判断いたします。以下に該当すると判断した場合は、
            お申し込みをお受けできませんので、あらかじめご了承ください。
          </p>
          <ul className="space-y-1.5 text-xs text-stone-600 leading-relaxed">
            <li>1. 法令、条例、業界規制等に違反する内容</li>
            <li>2. 掲載内容に虚偽があるか、誤認・錯誤を招くおそれのある場合</li>
            <li>3. 公序良俗に反する内容、または誹謗中傷・人権侵害にあたる内容</li>
            <li>4. 第三者の氏名・写真・商標・著作物等を無断で使用している場合</li>
            <li>5. その他、当サイトの品位を損なうと判断した場合</li>
          </ul>
          <p className="text-[10px] text-stone-400 leading-relaxed mt-3">
            ※掲載可否の判断理由については、原則として公開しておりません。
          </p>
        </div>

        {/* 免責事項 */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 px-5 py-4">
          <p className="text-sm font-black text-stone-700 mb-3">⚖️ 免責事項</p>
          <ul className="space-y-2 text-xs text-stone-600 leading-relaxed">
            <li>
              ・掲載内容および掲載により生じるお客様と第三者との間のトラブルについて、
              当サイトは責任を負いかねます。
            </li>
            <li>
              ・掲載による集客効果・検索順位・売上等を保証するものではありません。
            </li>
            <li>
              ・天災、通信障害、システム上の不具合など当サイトの責によらない事由により
              掲載に支障が生じた場合、賠償および補填措置の対象といたしません。
            </li>
            <li>
              ・掲載は当サイトの運営期間中に限ります。やむを得ずサイトを終了する場合、
              掲載料の返金には応じかねますので、あらかじめご了承ください。
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm px-5 py-5 space-y-3">
          <p className="font-black text-stone-800">📩 お問い合わせ</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            掲載をご希望の方は、以下の内容を添えてメールでご連絡ください。
          </p>
          <ul className="text-sm text-stone-500 space-y-1">
            <li>・ 店舗 / スポット名</li>
            <li>・ 所在地</li>
            <li>・ 掲載希望内容</li>
            <li>・ 参考URL（あれば）</li>
          </ul>
          <p className="text-xs text-stone-500 leading-relaxed">
            お見積りは無料です。内容を確認のうえ、料金と掲載までの流れをご案内いたします。
          </p>
          <a
            href="mailto:poyapiyotonemuneko@gmail.com"
            className="flex items-center justify-center gap-2 w-full bg-stone-800 hover:bg-stone-700 text-white font-bold text-sm rounded-2xl py-3 transition-colors"
          >
            ✉️ poyapiyotonemuneko@gmail.com
          </a>

          <div className="border-t border-stone-100 pt-3">
            <p className="text-xs font-semibold text-stone-500 mb-2">🌏 For business inquiries (English)</p>
            <p className="text-xs text-stone-400 leading-relaxed">
              We offer promotion and featured listings for businesses in Japan. All listings will remain on the site permanently. Photos are to be provided by the business; we do not offer on-site photography. Please include your business name, location, content request, and website or social media.
            </p>
          </div>
          <p className="text-[10px] text-stone-300">※掲載はサイト掲載期間中、永久掲載となります。</p>
        </div>

        {/* 運営者情報 */}
        <div className="bg-white rounded-2xl border border-stone-200 px-5 py-4">
          <p className="text-sm font-black text-stone-700 mb-3">🏢 運営者情報</p>
          <dl className="text-xs text-stone-600 space-y-2">
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-stone-400">運営者</dt>
              <dd>Japan Trip Picks</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-stone-400">所在地</dt>
              <dd className="leading-relaxed">
                〒106-0032<br />
                東京都港区六本木3丁目16番12号 六本木KSビル5F
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-stone-400">メール</dt>
              <dd>
                <a href="mailto:poyapiyotonemuneko@gmail.com" className="hover:text-stone-800 transition-colors">
                  poyapiyotonemuneko@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-100 mt-4 py-6 px-4 text-center text-xs text-stone-400">
        <div className="flex justify-center items-center gap-2 mb-1">
          <span className="text-base">🐣</span>
          <span className="font-semibold text-stone-600">Japan Trip Picks</span>
        </div>
        <p>© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
