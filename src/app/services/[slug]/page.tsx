import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";
import { FadeIn } from "@/components/motion";
import { CtaBand } from "@/components/sections";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | FlowCoat Epoxy Floors`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="px-4 pb-10 pt-36 md:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Our services
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 font-display text-lg font-semibold text-accent">
              {service.tagline}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-primary/70">{service.description}</p>
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
                  src={service.image}
                  alt={service.name}
                  width={1200}
                  height={750}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full rounded-[2rem] object-cover"
                />
              </div>
              <div className="glass-strong absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-xl shadow-primary/10 sm:-right-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-accent text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold text-primary">{service.name}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {service.long.map((para, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-primary/70">{para}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="glass card-lift rounded-3xl p-8">
              <h2 className="font-display text-lg font-bold text-primary">
                What is included
              </h2>
              <ul className="mt-5 space-y-3.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-primary/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants(),
                  "mt-7 w-full rounded-full bg-linear-to-br from-primary to-accent text-white hover:opacity-90 hover:text-white"
                )}
              >
                Request a Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-bold text-primary">
            Related services
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.08}>
              <Link
                href={`/services/${s.slug}`}
                className="glass card-lift flex h-full flex-col gap-2 rounded-2xl p-6"
              >
                <s.icon className="h-5 w-5 text-accent" />
                <span className="font-display text-sm font-bold text-primary">{s.name}</span>
                <span className="text-xs text-primary/60">{s.tagline}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
