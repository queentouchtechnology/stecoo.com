import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
          Let&rsquo;s Build What Industry Needs Next.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-steel">
          Tell us about your next fabrication, engineering or installation requirement.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact">Request a Quote</Button>
          <Button href="/contact" variant="secondary">
            Contact STECOO
          </Button>
        </div>
      </div>
    </section>
  );
}
