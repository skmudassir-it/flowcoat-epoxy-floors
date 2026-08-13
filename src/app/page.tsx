import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { localBusinessSchema } from "@/lib/data";
import { FadeIn } from "@/components/motion";
import {
  CtaBand,
  FaqSection,
  FeatureGrid,
  ProcessSection,
  ProjectsGrid,
  ServicesGrid,
  StatsStrip,
  TestimonialsSection,
} from "@/components/sections";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Premium Epoxy & Polyaspartic Flooring",
  description:
    "FlowCoat installs seamless, high-gloss epoxy floors — garage coatings, metallic epoxy, polyaspartic and industrial finishes. Free quotes within 48 hours.",
  openGraph: {
    title: "FlowCoat Epoxy Floors — Floors that shine like liquid glass",
    description:
      "Seamless, high-gloss epoxy floors for garages, showrooms, warehouses and homes. Free on-site quotes.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative px-4 pb-16 pt-36 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <FadeIn>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Premium epoxy flooring
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-primary sm:text-5xl xl:text-6xl">
              Floors that shine like{" "}
              <span className="bg-linear-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
                liquid glass.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary/70">
              FlowCoat designs and installs seamless, high-gloss epoxy and polyaspartic floors for
              garages, showrooms, warehouses and homes — finished to a mirror shine, built to last
              decades.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-linear-to-br from-primary to-accent text-white shadow-lg shadow-accent/25 hover:opacity-90 hover:text-white"
                )}
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full bg-white/50 text-primary backdrop-blur-xl"
                )}
              >
                See Our Work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary/70">
              <span className="flex items-center gap-2">
                <span className="flex text-amber-400" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                Rated 4.9/5 by 300+ clients
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Free on-site measure
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Fixed quotes in 48h
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-primary/20 to-accent/20 blur-3xl"
              />
              <div className="glass relative overflow-hidden rounded-[2.5rem] p-2.5">
                <Image
                  src="/images/hero.jpg"
                  alt="High-gloss slate blue epoxy floor in a modern garage with teal accent lighting"
                  width={1200}
                  height={750}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full rounded-[2rem] object-cover"
                />
              </div>
              <div className="glass-strong absolute -bottom-6 -left-4 rounded-2xl px-5 py-4 shadow-xl shadow-primary/10 sm:-left-8">
                <p className="font-display text-2xl font-extrabold text-primary">10-Year</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Warranty available
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <FeatureGrid />
      <StatsStrip />
      <ServicesGrid />
      <ProcessSection />
      <ProjectsGrid limit={2} />
      <TestimonialsSection />
      <FaqSection />
      <CtaBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
