import type { Metadata } from "next";
import { CtaBand, PageHero, ProjectsGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from FlowCoat Epoxy Floors — garage transformations, metallic lobby floors, retail showrooms and industrial hardcoats across Central Texas.",
  openGraph: {
    title: "Epoxy Flooring Projects & Case Studies",
    description:
      "Real installs, real numbers: showrooms, garages, lobbies and warehouses finished by FlowCoat.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Recent installs, real numbers"
        sub="Every project below was measured, prepped and finished by a FlowCoat crew — and every client would do it again."
      />
      <ProjectsGrid />
      <CtaBand />
    </>
  );
}
