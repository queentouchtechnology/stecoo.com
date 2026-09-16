import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <p className="relative font-display text-xs font-semibold uppercase tracking-[0.3em] text-amber">Error 404</p>
      <h1 className="relative mt-4 max-w-xl font-display text-3xl font-bold text-white sm:text-5xl">
        Engineering Path Not Found.
      </h1>
      <p className="relative mt-5 max-w-md text-steel">
        The page you&rsquo;re looking for has moved, or never existed. Try one of the routes below.
      </p>
      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href="/">Home</Button>
        <Button href="/capabilities" variant="secondary">
          Capabilities
        </Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
      <Link href="/" className="relative mt-8 text-xs text-steel-dim hover:text-white">
        Return to stecoo.com
      </Link>
    </div>
  );
}
