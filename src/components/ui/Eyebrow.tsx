import { clsx } from "clsx";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.28em] text-teal-light",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-teal-light/70" />
      {children}
    </span>
  );
}
