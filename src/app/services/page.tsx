import type { Metadata } from "next";
import { CtaBand, ServicesGrid } from "@/components/sections";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore FlowCoat epoxy flooring services — garage coatings, metallic epoxy, polyaspartic, commercial, industrial and polished concrete.",
  openGraph: {
    title: "Epoxy Flooring Services",
    description:
      "Eight specialized epoxy and polyaspartic systems, one mirror-gloss standard. Free on-site quotes.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="One flawless finish for every floor"
        sub="From weekend garage transformations to 50,000 sq ft industrial systems, every FlowCoat install shares the same obsession with prep, gloss and longevity."
      />
      <ServicesGrid heading={false} />
      <CtaBand />
    </>
  );
}
