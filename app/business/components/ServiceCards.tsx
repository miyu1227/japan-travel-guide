import Link from "next/link";
import { SERVICES, SERVICE_STATUS_LABEL, type Service } from "@/lib/business/services";
import { Badge } from "./ui";

const STATUS_TONE = {
  available: "blue",
  consult: "muted",
  preparing: "muted",
} as const;

/** サービスカード一覧。TOPで使う（詳細はサービスページのアンカーへ飛ばす） */
export default function ServiceCards({ services = SERVICES }: { services?: Service[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <li key={service.id} className="h-full">
          <Link
            href={`/business/services#${service.id}`}
            className="group flex h-full flex-col rounded-2xl border border-biz-line bg-white p-5 shadow-[0_1px_2px_rgba(18,49,79,0.04)] transition-colors hover:border-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              {service.emoji}
            </span>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <h3 className="text-base font-bold text-biz-ink group-hover:text-biz-blue">
                {service.name}
              </h3>
              <Badge tone={STATUS_TONE[service.status]}>
                {SERVICE_STATUS_LABEL[service.status]}
              </Badge>
            </div>
            <p className="mt-2 grow text-sm leading-relaxed text-biz-muted">{service.summary}</p>
            <p className="mt-4 border-t border-biz-line pt-3 text-sm font-bold text-biz-ink">
              {service.price}
              {service.priceNote && (
                <span className="ml-2 text-xs font-normal text-biz-muted">{service.priceNote}</span>
              )}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
