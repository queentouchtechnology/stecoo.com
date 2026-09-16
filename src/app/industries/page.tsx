import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { INDUSTRIES } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Water treatment, oil & gas, power, mining and general industrial fabrication capability from STECOO.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />
      <PageHeader
        eyebrow="Industries"
        title="Industries We Serve"
        description="STECOO's fabrication and engineering capability applies across process industries — supported by registered business activity and, where documented, direct project experience."
      />
      <Section tone="ink" containerClassName="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="border border-steel/15 bg-surface p-6 transition-colors hover:border-teal-light/50"
          >
            <h2 className="font-display text-lg font-bold text-white">{ind.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-steel-dim">{ind.overview}</p>
          </Link>
        ))}
      </Section>
    </>
  );
}
