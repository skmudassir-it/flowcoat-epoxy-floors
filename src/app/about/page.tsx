import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Leaf, ShieldCheck, Timer, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { CtaBand, PageHero, StatsStrip } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FlowCoat Epoxy Floors is a Central Texas crew of certified installers obsessed with prep, gloss and longevity — 1,200+ floors and counting.",
  openGraph: {
    title: "About FlowCoat Epoxy Floors",
    description:
      "Certified installers, premium materials and a 10-year warranty — meet the crew behind the gloss.",
  },
};

const VALUES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: "Quality first",
    body: "We specify systems by how a floor will actually be used — then we build them in layers, never shortcuts. If a slab needs more prep, we quote the prep.",
  },
  {
    icon: Timer,
    title: "On schedule",
    body: "Your time is part of the quote. We arrive when promised, protect your space and hand the floor back on the day we committed to.",
  },
  {
    icon: Leaf,
    title: "Low-VOC & safe",
    body: "Low-odor, eco-conscious formulations are standard, not an upsell. Floors are safe for families, pets and workplaces from day one.",
  },
  {
    icon: Heart,
    title: "People powered",
    body: "The same certified crew that measures your slab installs your floor and signs the handover. No subcontractor roulette, ever.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FlowCoat"
        title="The crew behind the gloss"
        sub="FlowCoat was founded on a simple belief: a floor is not a surface — it is the stage your whole space performs on."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-accent/20 to-primary/20 blur-3xl"
              />
              <div className="glass relative overflow-hidden rounded-[2.5rem] p-2.5">
                <Image
                  src="/images/about.jpg"
                  alt="FlowCoat technician applying a glossy epoxy coating with a roller"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full rounded-[2rem] object-cover"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Our story
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              From one garage floor to 1,200+
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-primary/70">
              <p>
                FlowCoat started in 2012 with a single promise to a neighbor: the garage floor
                would look like the car it held. That first flake system still looks new today —
                and the neighbor still sends us referrals.
              </p>
              <p>
                Since then we have grown into a certified crew of twelve installers who have
                poured everything from boutique lobby metallics to 24,000 sq ft warehouse
                hardcoats. What has not changed: every floor is measured by a senior installer,
                prepped to bare concrete, and finished by the same hands that quoted it.
              </p>
              <p>
                We stay small on purpose. It keeps our standards high, our schedules honest and
                our warranty worth more than the paper it is printed on.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="glass card-lift h-full rounded-3xl p-8 text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-white shadow-md shadow-accent/25">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/65">{v.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <StatsStrip />
      <CtaBand />
    </>
  );
}
