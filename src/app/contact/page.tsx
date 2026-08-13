import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { FadeIn } from "@/components/motion";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FlowCoat Epoxy Floors for a free on-site measure and fixed quote within 48 hours. Serving Austin and Central Texas.",
  openGraph: {
    title: "Contact FlowCoat Epoxy Floors",
    description: "Free on-site measures and fixed quotes within 48 hours across Central Texas.",
  },
};

const CONTACT_CARDS = [
  {
    icon: "fa-solid fa-phone",
    title: "Call us",
    lines: ["(512) 555-0147", "Mon–Fri 8am–6pm"],
    href: "tel:+15125550147",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email us",
    lines: ["hello@flowcoatfloors.com", "Replies within one business day"],
    href: "mailto:hello@flowcoatfloors.com",
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "Visit us",
    lines: ["1280 Industrial Way", "Austin, TX 78701"],
    href: undefined,
  },
  {
    icon: "fa-solid fa-clock",
    title: "Service area",
    lines: ["Austin & Central Texas", "Within 60 miles of downtown"],
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us quote your floor"
        sub="Tell us about your space and we will book a free on-site measure — then get you a fixed quote within 48 hours."
      />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className="glass card-lift h-full rounded-3xl p-7 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-white shadow-md shadow-accent/25">
                  <i className={c.icon} aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-lg font-bold text-primary">{c.title}</h2>
                {c.lines.map((line) =>
                  c.href ? (
                    <a
                      key={line}
                      href={c.href}
                      className="mt-1 block text-sm text-primary/65 transition-colors hover:text-accent"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="mt-1 text-sm text-primary/65">
                      {line}
                    </p>
                  )
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FadeIn>
          <div className="glass-strong rounded-[2.5rem] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Free quote
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary">
                  What happens next
                </h2>
                <ol className="mt-6 space-y-5">
                  {[
                    "We call you within one business day to confirm details.",
                    "A senior installer visits for a free on-site measure.",
                    "You receive a fixed, itemized quote within 48 hours.",
                    "We install on schedule and walk you through the handover.",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent font-display text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-primary/70">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="lg:col-span-3">
                <QuoteForm />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
