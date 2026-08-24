import type { ReactNode } from "react";
import BizHeader from "./components/BizHeader";
import BizFooter from "./components/BizFooter";
import { JsonLd } from "./components/ui";
import { organizationJsonLd } from "@/lib/business/site";

/**
 * /business 配下の共通レイアウト。
 * 本体（旅行者向け）は zh-Hant なので、この配下だけ lang="ja" を明示する。
 * 各ページのSEOは lib/business/site.ts の businessMetadata() で組み立てる。
 */
export default function BusinessLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="ja" className="biz-root flex min-h-screen flex-col">
      <JsonLd data={organizationJsonLd} />
      <a
        href="#biz-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-biz-ink focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        本文へスキップ
      </a>
      <BizHeader />
      <main id="biz-main" className="flex-1">
        {children}
      </main>
      <BizFooter />
    </div>
  );
}
