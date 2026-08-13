import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL = "https://flowcoat-epoxy-floors.amsitservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FlowCoat Epoxy Floors | Premium Epoxy & Polyaspartic Flooring",
    template: "%s | FlowCoat Epoxy Floors",
  },
  description:
    "FlowCoat Epoxy Floors installs seamless, high-gloss epoxy floors — garage coatings, metallic epoxy, polyaspartic and industrial-grade finishes for homes and businesses. Free quotes within 48 hours.",
  keywords: [
    "epoxy flooring",
    "garage floor coatings",
    "metallic epoxy floors",
    "polyaspartic coatings",
    "commercial epoxy flooring",
    "industrial floor coatings",
    "concrete polishing",
    "FlowCoat Epoxy Floors",
  ],
  openGraph: {
    type: "website",
    siteName: "FlowCoat Epoxy Floors",
    title: "FlowCoat Epoxy Floors — Floors that shine like liquid glass",
    description:
      "Seamless, high-gloss epoxy and polyaspartic floors for garages, showrooms, warehouses and homes. Fixed quotes in 48 hours.",
    url: SITE_URL,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Glossy slate blue and teal epoxy floor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowCoat Epoxy Floors — Floors that shine like liquid glass",
    description:
      "Seamless, high-gloss epoxy and polyaspartic floors for garages, showrooms, warehouses and homes.",
    images: ["/images/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#2f4858",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen font-sans">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
          />
          <div
            className="absolute -right-48 top-1/3 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div
            className="absolute -bottom-48 left-1/4 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
          />
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
