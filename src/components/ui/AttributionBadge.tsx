import { clsx } from "clsx";
import type { Attribution } from "@/content/types";

export function AttributionBadge({ attribution, className }: { attribution: Attribution; className?: string }) {
  const isTeam = attribution === "team-experience";
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.16em]",
        isTeam ? "border-amber/40 bg-amber/10 text-amber" : "border-teal-light/40 bg-teal-light/10 text-teal-light",
        className,
      )}
    >
      <span aria-hidden className={clsx("h-1.5 w-1.5 rounded-full", isTeam ? "bg-amber" : "bg-teal-light")} />
      {isTeam ? "Engineering Team Experience — Prior to STECOO" : "STECOO Project"}
    </span>
  );
}
