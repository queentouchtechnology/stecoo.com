import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="border-b border-steel/10 bg-surface">
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-1.5 px-5 py-3.5 text-xs text-steel-dim sm:px-8 lg:px-12">
        {full.map((c, i) => (
          <span key={c.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i === full.length - 1 ? (
              <span className="text-steel" aria-current="page">
                {c.name}
              </span>
            ) : (
              <Link href={c.href} className="hover:text-white">
                {c.name}
              </Link>
            )}
          </span>
        ))}
      </div>
      <JsonLd
        data={breadcrumbSchema(full.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))}
      />
    </nav>
  );
}
