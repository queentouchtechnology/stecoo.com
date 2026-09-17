import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { CAPABILITIES } from "@/content/capabilities";
import { CAPABILITY_ICONS } from "@/components/icons/CapabilityIcons";

export const metadata: Metadata = {
  title: "Capabilities — Steel Fabrication & Engineering",
  description:
    "Storage tanks, pressure vessels, process piping, steel structures, mechanical works, industrial firefighting, special welding machines and manpower supply.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Capabilities", href: "/capabilities" }]} />
      <PageHeader
        eyebrow="Capabilities"
        title="Eight Disciplines, One Engineering Team"
        description="Every capability below is engineered and fabricated by the same team, from first calculation through final quality checkpoint."
        highlights={[
          { value: String(CAPABILITIES.length), label: "Core Disciplines" },
          { value: "API / ASME / EN 1090", label: "Standards Referenced" },
          { value: "800 in-dia", label: "Monthly Spool Capacity" },
        ]}
      />
      <Section tone="ink" containerClassName="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((cap) => {
          const Icon = CAPABILITY_ICONS[cap.icon];
          return (
            <Link
              key={cap.slug}
              href={`/services/${cap.slug}`}
              className="group relative flex flex-col overflow-hidden border border-steel/15 bg-surface transition-colors hover:border-teal-light/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cap.image.src}
                  alt={cap.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-industrial)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-sm bg-ink/80 text-teal-light">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-lg font-bold text-white">{cap.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.06em] text-teal-light">{cap.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-steel-dim">{cap.description}</p>
              </div>
            </Link>
          );
        })}
      </Section>
    </>
  );
}
