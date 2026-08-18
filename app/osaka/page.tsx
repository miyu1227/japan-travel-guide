import type { Metadata } from "next";
import HubPage, { hubMetadata } from "../components/HubPage";
import { HUB_BY_SLUG } from "@/lib/hubs";

export const metadata: Metadata = hubMetadata(HUB_BY_SLUG["osaka"]);

export default function Page() {
  return <HubPage slug="osaka" />;
}
