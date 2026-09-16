import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WHY_STECOO } from "@/content/company";

export function WhyStecoo() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/global/fabrication-shop-interior-crane-plate-work.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/85 to-surface" />
      </div>
      <Container className="relative">
        <Eyebrow>Why STECOO</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
          Built on Engineering Discipline
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-steel/15 bg-steel/15 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_STECOO.map((item, i) => (
            <div key={item.title} className="bg-surface/95 p-6 backdrop-blur-sm">
              <span className="font-display text-xs font-semibold text-amber">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-dim">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
