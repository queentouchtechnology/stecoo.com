"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCanRender3D } from "@/hooks/useCanRender3D";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export function Hero() {
  const canRender3D = useCanRender3D();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const delay = canRender3D ? 3400 : 300;
    const id = setTimeout(() => setShowContent(true), delay);
    return () => clearTimeout(id);
  }, [canRender3D]);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero/shuqaiq-dome-tanks-coastal-aerial.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${
            canRender3D ? "opacity-25" : "opacity-45 animate-[kenburns_18s_ease-in-out_infinite_alternate]"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />
      </div>

      {canRender3D && (
        <div className="absolute inset-0" aria-hidden>
          <HeroCanvas />
        </div>
      )}

      <div className="relative z-10 w-full px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-amber"
          >
            Industrial Steel Fabrication &amp; Engineering
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl"
          >
            Engineered for Industry.
            <br />
            Built for Performance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl font-display text-sm font-medium uppercase tracking-[0.14em] text-steel sm:text-base"
          >
            Pressure Vessels &bull; Storage Tanks &bull; Process Piping &bull; Steel Structures
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact">Request a Project Quote</Button>
            <Button href="/capabilities" variant="secondary">
              Explore Capabilities
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="h-10 w-px bg-gradient-to-b from-transparent via-steel/60 to-transparent" />
      </div>
    </section>
  );
}
