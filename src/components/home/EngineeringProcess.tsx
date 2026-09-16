"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STEPS = [
  { n: "01", title: "Site Survey", desc: "On-site review of requirement, space and installation conditions." },
  { n: "02", title: "Engineering & Calculations", desc: "Code-referenced engineering calculations for the specified duty." },
  { n: "03", title: "CAD / Detailed Drawings", desc: "Detailed fabrication drawings for client review and sign-off." },
  { n: "04", title: "Material & Fabrication", desc: "Material control, cutting, forming and welding fabrication." },
  { n: "05", title: "Quality Control", desc: "Structured quality checkpoints through every fabrication stage." },
  { n: "06", title: "Installation", desc: "Site-managed installation, planned to minimise site disruption." },
  { n: "07", title: "Commissioning / Delivery", desc: "Final inspection, handover and project completion." },
];

export function EngineeringProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section tone="surface">
      <Eyebrow>Engineering Process</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
        From Survey to Commissioning
      </h2>

      <div ref={ref} className="relative mt-14">
        <div className="absolute left-[15px] top-0 hidden h-full w-px bg-steel/15 sm:block lg:left-0 lg:top-[15px] lg:h-px lg:w-full" />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[15px] top-0 hidden h-full w-px bg-teal-light sm:block lg:hidden"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute left-0 top-[15px] hidden h-px w-full bg-teal-light lg:block"
        />

        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-7 lg:gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-10 sm:pl-10 lg:pl-0 lg:pt-10"
            >
              <span className="absolute left-0 top-0 flex h-[31px] w-[31px] items-center justify-center rounded-full border border-teal-light bg-ink font-display text-[11px] font-bold text-teal-light lg:left-0 lg:top-0">
                {step.n}
              </span>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.04em] text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-dim">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
