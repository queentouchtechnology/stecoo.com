import Link from "next/link";
import Image from "next/image";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from "@/content/navigation";
import { CONTACT, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-steel/15 bg-surface text-steel">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo/stecoo-logo-transparent.png"
              alt="STECOO"
              width={130}
              height={38}
              className="h-9 w-auto"
            />
            <p className="mt-4 font-display text-sm font-semibold text-light">{SITE.shortLegalName}</p>
            <p className="mt-3 text-sm leading-relaxed text-steel-dim">
              Industrial Steel Fabrication · Pressure Vessels · Storage Tanks · Process Piping · Steel Structures
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel-dim transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel-dim transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-steel-dim">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.mobileHref} className="transition-colors hover:text-white">
                  {CONTACT.mobile}
                </a>
              </li>
              <li>
                <a href={CONTACT.landlineHref} className="transition-colors hover:text-white">
                  {CONTACT.landline}
                </a>
              </li>
              <li className="pt-1 leading-relaxed">
                {CONTACT.registeredAddress.line1}
                <br />
                {CONTACT.registeredAddress.line2}
                <br />
                {CONTACT.registeredAddress.line3}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-steel/15 pt-8 sm:flex-row">
          <p className="text-xs text-steel-dim">
            © {new Date().getFullYear()} {SITE.shortLegalName}. All rights reserved.
          </p>
          <p className="text-xs text-steel-dim">
            Website Design &amp; Development by{" "}
            <a
              href="https://queentouchtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-light transition-colors hover:text-white"
            >
              Queen Touch Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
