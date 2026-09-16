import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { rootJsonLd } from "@/lib/schema";
import { SITE, SITE_URL } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "STECOO | Pressure Vessels, Storage Tanks & Steel Fabrication India",
    template: "%s | STECOO",
  },
  description: SITE.description,
  keywords: [
    "pressure vessel manufacturer India",
    "storage tank manufacturer India",
    "industrial steel fabrication India",
    "process piping fabrication India",
    "steel fabrication company Visakhapatnam",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE.name,
    title: "STECOO | Pressure Vessels, Storage Tanks & Steel Fabrication India",
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "STECOO — Industrial Steel Fabrication & Engineering" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "STECOO | Pressure Vessels, Storage Tanks & Steel Fabrication India",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071114",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-ink text-light">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd data={rootJsonLd()} />
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="main-content" className="flex-1 pt-[72px]">
            {children}
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
