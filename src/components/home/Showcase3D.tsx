import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ShowcaseItem } from "./showcase/ShowcaseItem";

const ITEMS = [
  {
    kind: "tank" as const,
    index: "01",
    title: "Storage Tank",
    description: "Fixed or dome-roof steel storage tank, engineered to API 650 / API 620 / AWWA reference standards.",
    annotations: ["Shell — rolled steel plate", "Roof — fixed or dome configuration", "Standard — API 650 / 620 / AWWA"],
    image: { src: "/images/global/hillside-tank-farm-construction-aerial-1.webp", alt: "Storage tank under construction" },
  },
  {
    kind: "vessel" as const,
    index: "02",
    title: "Pressure Vessel",
    description: "Cylindrical pressure vessel with flanged nozzles, fabricated to ASME-referenced practice.",
    annotations: ["Shell — rolled + welded", "Nozzles — flanged connections", "Standard — ASME reference"],
    image: { src: "/images/global/pressure-vessel-shell-welding-fabrication-bay.webp", alt: "Pressure vessel shell fabrication" },
  },
  {
    kind: "piping" as const,
    index: "03",
    title: "Pipe Spool",
    description: "Carbon or stainless steel pipe spool assembly, fabricated for process piping and skid works.",
    annotations: ["Material — CS / SS", "Joints — welded, flanged", "Capacity — 800 inch-dia / month"],
    image: { src: "/images/global/large-diameter-pipe-spools-desert-yard.webp", alt: "Pipe spools staged at a fabrication yard" },
  },
  {
    kind: "structure" as const,
    index: "04",
    title: "Structural Frame",
    description: "Structural steel frame fabrication referenced against EN 1090-1 up to execution class EXC4.",
    annotations: ["Members — beams & columns", "Welding — BWM beam-liner machine", "Standard — EN 1090-1 (EXC4)"],
    image: { src: "/images/global/octagonal-steel-platform-structure-erection.webp", alt: "Steel structure erection on site" },
  },
  {
    kind: "welding" as const,
    index: "05",
    title: "Special Welding Machine",
    description: "In-house designed EGW / SAW welding machines for tank seam welding, built to client specification.",
    annotations: ["EGW — up to 30mm plate", "SAW — double-head, horizontal", "Design — in-house engineering"],
    image: { src: "/images/machines/automatic-tank-wall-welding-equipment-operator.webp", alt: "Automatic welding equipment on a tank wall" },
  },
];

export function Showcase3D() {
  return (
    <Section tone="ink">
      <Eyebrow>Engineering in Detail</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
        A Closer Look at What STECOO Fabricates
      </h2>
      <div className="mt-4">
        {ITEMS.map((item) => (
          <ShowcaseItem key={item.kind} {...item} />
        ))}
      </div>
    </Section>
  );
}
