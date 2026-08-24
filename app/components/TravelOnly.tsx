"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * 旅行者向けサイト（本体）だけで出したい要素を包む。
 * /business は日本の事業者向けの別ブランドなので、
 * 繁体字フッターと広告スクリプトは出さない。
 */
export default function TravelOnly({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/business" || pathname.startsWith("/business/")) return null;
  return <>{children}</>;
}
