"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { MAIN_NAV } from "@/content/navigation";
import { CONTACT } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[var(--ease-industrial)]",
        scrolled || mobileOpen ? "bg-ink/95 shadow-[0_1px_0_rgba(174,185,189,0.12)] backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="STECOO home">
          <Image
            src="/images/logo/stecoo-logo-transparent.png"
            alt="STECOO"
            width={140}
            height={40}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {MAIN_NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 font-display text-[13px] font-medium uppercase tracking-[0.08em] text-steel transition-colors hover:text-white"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full min-w-[240px] border border-steel/15 bg-surface p-2 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-steel transition-colors hover:bg-ink hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={CONTACT.mobileHref} className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-steel hover:text-white">
            {CONTACT.mobile}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-teal px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-2"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={clsx(
                "absolute left-0 top-0 h-[1.5px] w-6 bg-current transition-all duration-300",
                mobileOpen && "top-[7px] rotate-45",
              )}
            />
            <span
              className={clsx("absolute left-0 top-[7px] h-[1.5px] w-6 bg-current transition-all duration-300", mobileOpen && "opacity-0")}
            />
            <span
              className={clsx(
                "absolute left-0 top-[14px] h-[1.5px] w-6 bg-current transition-all duration-300",
                mobileOpen && "top-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-ink lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-8">
              {MAIN_NAV.map((item) => (
                <div key={item.label} className="border-b border-steel/10 py-1">
                  <Link
                    href={item.href}
                    className="block py-3 font-display text-lg font-semibold uppercase tracking-[0.04em] text-white"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="flex flex-col pb-3 pl-3">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="py-2 text-sm text-steel hover:text-teal-light">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-8 rounded-sm bg-teal px-6 py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.12em] text-white"
              >
                Request a Quote
              </Link>
              <a href={CONTACT.mobileHref} className="mt-4 text-center font-display text-sm font-semibold uppercase tracking-[0.1em] text-steel">
                Call {CONTACT.mobile}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
