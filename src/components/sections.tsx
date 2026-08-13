"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FAQS,
  FEATURES,
  PROCESS,
  PROJECTS,
  SERVICES,
  STATS,
  TESTIMONIALS,
  type Project,
  type Service,
} from "@/lib/data";
import { FadeIn } from "@/components/motion";
import { EmblaCarousel } from "@/components/embla-carousel";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  className,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <FadeIn className={cn("mx-auto max-w-2xl text-center", className)}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-base leading-relaxed text-primary/65">{sub}</p> : null}
    </FadeIn>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="px-4 pb-10 pt-40 text-center">
      <FadeIn>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          {title}
        </h1>
        {sub ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary/65">{sub}</p>
        ) : null}
      </FadeIn>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Why FlowCoat"
        title="Epoxy done right, from the first coat to the final buff"
        sub="Every floor gets the same obsessive prep, the same premium materials and the same installers who sign their name on the finished gloss."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.08}>
            <div className="glass card-lift h-full rounded-3xl p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-white shadow-md shadow-accent/25">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/65">{f.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <FadeIn>
        <div className="glass-strong grid grid-cols-2 divide-x divide-primary/10 overflow-hidden rounded-[2rem] md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center">
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-primary/60">{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export function ServicesGrid({
  services = SERVICES,
  heading = true,
}: {
  services?: Service[];
  heading?: boolean;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      {heading ? (
        <SectionHeading
          eyebrow="What we do"
          title="Every floor, one flawless finish"
          sub="Eight specialized systems — one standard: mirror gloss that lasts. Tap any service for details, specs and gallery work."
        />
      ) : null}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <FadeIn key={s.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/services/${s.slug}`}
              className="glass card-lift group block h-full overflow-hidden rounded-3xl"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-primary shadow-sm backdrop-blur-xl">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-primary">{s.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-primary/65">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="How it works"
        title="From dusty slab to showroom gloss"
        sub="A four-step process refined over 1,200+ floors — so you always know what happens next."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.08}>
            <div className="glass card-lift relative h-full rounded-3xl p-8">
              <span className="font-display text-5xl font-extrabold text-accent/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/65">{step.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function ProjectsGrid({ limit }: { limit?: number }) {
  const projects: Project[] = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Case studies"
        title="Floors we are proud to put our name on"
        sub="A few recent installs — each one measured, prepped and finished by the same crew that will quote yours."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <FadeIn key={p.name} delay={(i % 2) * 0.08}>
            <article className="glass card-lift group h-full overflow-hidden rounded-3xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {p.client} · {p.location}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-primary">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/65">{p.scope}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary/80">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {p.result}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const slides = TESTIMONIALS.map((t) => (
    <figure key={t.name} className="glass-strong flex h-full flex-col rounded-3xl p-8">
      <div className="flex gap-1 text-amber-400" aria-label={`${t.stars} out of 5 stars`}>
        {Array.from({ length: t.stars }).map((_, i) => (
          <span key={i} aria-hidden>
            ★
          </span>
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-primary/80">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent font-display text-sm font-bold text-white">
          {t.initials}
        </span>
        <span>
          <span className="block font-semibold text-primary">{t.name}</span>
          <span className="block text-xs text-primary/55">{t.location}</span>
        </span>
      </figcaption>
    </figure>
  ));

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Client love"
        title="What our clients say"
        sub="Real reviews from homeowners, shop owners and facility managers across Central Texas."
      />
      <div className="mt-14">
        <EmblaCarousel label="Client testimonials">{slides}</EmblaCarousel>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Good to know"
        title="Frequently asked questions"
        sub="Straight answers about cost, cure times, prep and warranties — no fine print."
      />
      <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
        <Accordion defaultValue={["faq-0"]} className="flex w-full flex-col gap-4">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="glass-strong rounded-2xl px-6"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-primary/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12">
          <Image src="/images/cta.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-br from-primary/95 via-primary/85 to-accent/85"
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready for a floor that stops traffic?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Book a free on-site measure and get a fixed quote within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-white text-primary shadow-lg hover:bg-white/90 hover:text-primary"
                )}
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full border-white/40 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20 hover:text-white"
                )}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
