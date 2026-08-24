import Link from "next/link";
import { CONTACT, DOWNLOAD_PATH, NAV, PARENT_SITE_NAME, PARENT_SITE_URL, SITE_NAME } from "@/lib/business/site";

export default function BizFooter() {
  return (
    <footer className="border-t border-biz-line bg-white px-5 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* サイト名・概要 */}
          <div>
            <p className="flex items-center gap-2 text-base font-bold text-biz-ink">
              <span aria-hidden="true">🐥</span>
              {SITE_NAME}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-biz-muted">
              台湾・香港向けの訪日旅行メディア {PARENT_SITE_NAME} を運営し、
              日本国内の店舗・ホテル・観光施設の情報発信をお手伝いしています。
            </p>
          </div>

          {/* サイト内ナビ */}
          <nav aria-label="フッターメニュー">
            <p className="mb-3 text-sm font-bold text-biz-ink">メニュー</p>
            <ul>
              {[
                ...NAV.filter((item) => item.href !== "/business"),
                { href: DOWNLOAD_PATH, label: "資料請求" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-biz-muted underline-offset-4 hover:text-biz-blue hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 連絡先・関連サイト */}
          <div>
            <p className="mb-3 text-sm font-bold text-biz-ink">お問い合わせ</p>
            <ul className="text-sm text-biz-muted">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex min-h-11 items-center break-all underline-offset-4 hover:text-biz-blue hover:underline"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.telHref}
                  className="inline-flex min-h-11 items-center underline-offset-4 hover:text-biz-blue hover:underline"
                >
                  {CONTACT.tel}
                </a>
              </li>
            </ul>

            <p className="mt-6 mb-3 text-sm font-bold text-biz-ink">関連サイト</p>
            <a
              href={PARENT_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-biz-blue-soft px-3 py-2 text-sm font-bold text-biz-blue underline-offset-4 hover:underline"
            >
              <span aria-hidden="true">🌏</span>
              {PARENT_SITE_NAME}（訪日旅行者向け）
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* 運営者情報 */}
        <div className="mt-10 border-t border-biz-line pt-6">
          <p className="mb-3 text-sm font-bold text-biz-ink">運営者情報</p>
          <dl className="grid gap-2 text-xs leading-relaxed text-biz-muted sm:grid-cols-[6rem_1fr] sm:gap-x-4">
            <dt className="font-bold text-biz-ink sm:font-normal">運営者</dt>
            <dd>{CONTACT.operator}</dd>
            <dt className="mt-2 font-bold text-biz-ink sm:mt-0 sm:font-normal">所在地</dt>
            <dd>
              〒{CONTACT.postalCode} {CONTACT.address}
            </dd>
            <dt className="mt-2 font-bold text-biz-ink sm:mt-0 sm:font-normal">電話</dt>
            <dd>
              <a href={CONTACT.telHref} className="underline-offset-4 hover:text-biz-blue hover:underline">
                {CONTACT.tel}
              </a>
            </dd>
          </dl>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-biz-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="規約・ポリシー" className="flex flex-wrap gap-x-4 text-xs">
            <Link href="/privacy" className="inline-flex min-h-11 items-center text-biz-muted underline-offset-4 hover:text-biz-blue hover:underline">
              プライバシーポリシー
            </Link>
            <Link href="/business/contact#operator" className="inline-flex min-h-11 items-center text-biz-muted underline-offset-4 hover:text-biz-blue hover:underline">
              運営者情報
            </Link>
            <Link href="/business/pricing#notes" className="inline-flex min-h-11 items-center text-biz-muted underline-offset-4 hover:text-biz-blue hover:underline">
              掲載基準・免責事項
            </Link>
          </nav>
          <p className="text-xs text-biz-muted">© 2026 Japan Trip Picks</p>
        </div>
      </div>
    </footer>
  );
}
