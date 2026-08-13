import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { FadeIn } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/sections";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent epoxy flooring pricing from FlowCoat — garage systems from $4.50/sq ft, premium metallic and industrial systems quoted after a free on-site measure.",
  openGraph: {
    title: "Epoxy Flooring Pricing",
    description:
      "Fixed quotes within 48 hours. No surprise line items — ever.",
  },
};

const TIERS = [
  {
    name: "Garage Essentials",
    price: "from $4.50",
    unit: "per sq ft",
    features: [
      "Solid-color or standard flake epoxy",
      "Full surface prep & crack sealing",
      "Anti-skid additive included",
      "Drive-on ready in 48 hours",
      "5-year workmanship warranty",
    ],
    featured: false,
  },
  {
    name: "Pro Series",
    price: "from $6.75",
    unit: "per sq ft",
    features: [
      "Premium flake & metallic systems",
      "Polyaspartic UV-stable topcoat",
      "Custom color-matched blends",
      "Cove base & hand-trimmed edges",
      "10-year system warranty",
    ],
    featured: true,
  },
  {
    name: "Commercial & Industrial",
    price: "Custom",
    unit: "quoted on site",
    features: [
      "100%-solids heavy-duty systems",
      "Slip-resistance engineered per zone",
      "Phased overnight scheduling",
      "Zoned color & safety line marking",
      "Multi-year service agreement",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Honest numbers, no surprises"
        sub="Every project starts with a free on-site measure and a fixed quote within 48 hours. The number we quote is the number you pay — guaranteed in writing."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.08}>
              <div
                className={cn(
                  "glass card-lift relative flex h-full flex-col rounded-3xl p-8",
                  tier.featured && "glass-strong shadow-xl shadow-primary/10"
                )}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-br from-primary to-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    Most popular
                  </span>
                ) : null}
                <h2 className="font-display text-lg font-bold text-primary">{tier.name}</h2>
                <p className="mt-4">
                  <span className="font-display text-4xl font-extrabold text-primary">
                    {tier.price}
                  </span>
                  <span className="ml-2 text-sm text-primary/55">{tier.unit}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-primary/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={cn(
                    "mt-8 inline-flex h-12 items-center justify-center rounded-full border border-primary/15 bg-white/70 px-8 font-semibold text-primary backdrop-blur-xl transition-colors hover:bg-accent hover:text-white",
                    tier.featured &&
                      "border-transparent bg-linear-to-br from-primary to-accent text-white hover:opacity-90"
                  )}
                >
                  Get My Quote
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-primary/55">
            Final pricing depends on slab condition, square footage and system choice. Floors
            under 400 sq ft are quoted at a flat project rate — ask us on site.
          </p>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FadeIn>
          <div className="glass-strong rounded-[2.5rem] p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Free quote
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary">
                Tell us about your floor
              </h2>
              <p className="mt-4 text-primary/65">
                Answer in 60 seconds — we will call you within one business day to book your free
                on-site measure.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-3xl">
              <QuoteForm />
            </div>
          </div>
        </FadeIn>
      </section>
      <CtaBand />
    </>
  );
}
