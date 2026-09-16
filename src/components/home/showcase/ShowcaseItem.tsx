"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import type { ModelKind } from "./ModelCanvas";
import { useCanRender3D } from "@/hooks/useCanRender3D";

const ModelCanvas = dynamic(() => import("./ModelCanvas"), { ssr: false });

interface ShowcaseItemProps {
  kind: ModelKind;
  index: string;
  title: string;
  description: string;
  annotations: string[];
  image: { src: string; alt: string };
}

export function ShowcaseItem({ kind, index, title, description, annotations, image }: ShowcaseItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const canRender3D = useCanRender3D();

  return (
    <div ref={ref} className="grid grid-cols-1 items-center gap-8 border-t border-steel/15 py-12 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/3] overflow-hidden rounded-sm border border-steel/15 bg-surface"
      >
        {inView && canRender3D ? (
          <ModelCanvas kind={kind} />
        ) : (
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        )}
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-display text-sm font-semibold text-amber">{index}</span>
        <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{title}</h3>
        <p className="mt-3 max-w-lg text-steel">{description}</p>
        <ul className="mt-6 space-y-2 border-l border-teal/40 pl-4">
          {annotations.map((a) => (
            <li key={a} className="font-display text-xs uppercase tracking-[0.08em] text-steel-dim">
              {a}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
