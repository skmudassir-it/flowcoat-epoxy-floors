import {
  Building2,
  Car,
  Droplets,
  Factory,
  Layers,
  ShieldAlert,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const SITE_URL = "https://flowcoat-epoxy-floors.amsitservices.com";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  long: string[];
  features: string[];
  image: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "garage-floor-coatings",
    name: "Garage Floor Coatings",
    tagline: "Showroom gloss for the space you park in.",
    description:
      "Heavy-duty epoxy and flake systems that turn tired garage slabs into glossy, stain-resistant showroom floors.",
    long: [
      "Your garage takes more punishment than any other room in the house — oil drips, hot tires, dropped tools and freeze-thaw cycles. FlowCoat builds garage floors in layers: a bonding primer, a chip-loaded epoxy base and a tough topcoat that shrugs off everything you throw at it.",
      "Choose from hundreds of flake blends, from subtle greys to bold slate-blue-and-teal schemes, finished with a gloss level that suits your style. Every edge is trimmed by hand and every joint is sealed, so water and chemicals never get a foothold.",
      "Most garages are transformed in two days and are ready to drive on within 48 hours. Your floor comes with our workmanship warranty and a simple maintenance routine: sweep, mop, admire.",
    ],
    features: [
      "Stain & chemical resistance",
      "Anti-skid texture options",
      "Custom flake blends",
      "Cold joints & cracks sealed",
      "Drive-on ready in 48 hours",
      "5-year workmanship warranty",
    ],
    image: "/images/garage-floor-coatings.jpg",
    icon: Car,
  },
  {
    slug: "metallic-epoxy-floors",
    name: "Metallic Epoxy Floors",
    tagline: "Liquid-metal artistry under a mirror gloss.",
    description:
      "Hand-troweled metallic pigments create one-of-a-kind molten swirls with the depth of polished stone.",
    long: [
      "Metallic epoxy is where flooring becomes art. Pigmented metal powders are troweled into a clear epoxy base by hand, producing swirling, three-dimensional patterns that shift with the light — no two floors are ever alike.",
      "The effect is popular in showrooms, lobbies, bars and high-end garages, where a floor needs to be the first thing people talk about. We color-match to your brand palette or design a custom drift of slate blues, teals and silver.",
      "A commercial-grade clear topcoat locks in the artwork with deep gloss and scratch resistance, so the floor stays as striking on year five as it was on day one.",
    ],
    features: [
      "One-of-a-kind patterns",
      "Depth & movement effects",
      "Commercial-grade topcoat",
      "Scratch-resistant finish",
      "Color-matched to your brand",
      "Seamless, easy-clean surface",
    ],
    image: "/images/metallic-epoxy-floors.jpg",
    icon: Sparkles,
  },
  {
    slug: "commercial-epoxy-flooring",
    name: "Commercial Epoxy Flooring",
    tagline: "Flawless floors that keep business moving.",
    description:
      "Showrooms, retail, clinics and offices — durable seamless epoxy that survives foot traffic and looks sharp for years.",
    long: [
      "A commercial floor is part of your brand. Cracked tile, dull concrete and stained grout quietly cost you credibility — while a glossy, seamless epoxy floor makes every square foot look intentional.",
      "We install low-odor systems outside trading hours, so your business barely notices. Retail, medical, hospitality, automotive showrooms and offices all benefit from a hygienic, grout-free surface that mops clean in minutes.",
      "With slip-resistant options and a lifecycle cost that beats re-tiling every few years, commercial epoxy is one of the smartest finishes a facility can buy.",
    ],
    features: [
      "Low-odor, overnight installs",
      "Slip-resistant options",
      "Minimal staff downtime",
      "Decorative color systems",
      "Hygienic, grout-free surface",
      "Lifecycle cost savings",
    ],
    image: "/images/commercial-epoxy-flooring.jpg",
    icon: Building2,
  },
  {
    slug: "polyaspartic-coatings",
    name: "Polyaspartic Coatings",
    tagline: "The fast-cure coating that outlasts the weekend.",
    description:
      "UV-stable polyaspartic systems cure in hours, not days, and shrug off heat, chemicals and tire marks.",
    long: [
      "Polyaspartic is the evolution of the garage floor. Where standard epoxies need days to cure, polyaspartic systems are walkable in hours and driveable the next day — ideal when downtime matters.",
      "It is also UV-stable, meaning no ambering or yellowing under sunlight, and it handles extreme temperatures from desert heat to deep freezes without delaminating.",
      "We use polyaspartic as a topcoat over flake and metallic systems for the ultimate gloss, or as a complete standalone system for floors that need to be back in service fast.",
    ],
    features: [
      "Cures in as little as 4–6 hours",
      "UV-stable — no yellowing",
      "Extreme thermal range",
      "Tire-mark & chemical resistant",
      "Suitable for outdoor slabs",
      "Low-VOC application",
    ],
    image: "/images/polyaspartic-coatings.jpg",
    icon: Layers,
  },
  {
    slug: "concrete-repair-leveling",
    name: "Concrete Repair & Leveling",
    tagline: "Fix the foundation before the finish.",
    description:
      "Crack injection, spall repair and self-leveling overlays that give coatings a smooth, sound substrate.",
    long: [
      "No coating can fix a failing slab — that is our job first. FlowCoat repairs cracks with injected structural epoxy, patches spalls and pitting, and corrects low spots with high-flow self-leveling overlays.",
      "We also handle moisture mitigation and diamond grinding, so your new floor starts on a surface that is flat, sound and properly profiled for adhesion.",
      "Skipping prep is the number one cause of premature coating failure. We never do it — every quote includes the prep your slab actually needs, not the minimum it can get away with.",
    ],
    features: [
      "Crack & joint injection",
      "Spall and pitting repair",
      "Self-leveling overlays",
      "Moisture mitigation",
      "Slope correction",
      "Diamond grinding & shot blasting",
    ],
    image: "/images/concrete-repair-leveling.jpg",
    icon: Wrench,
  },
  {
    slug: "anti-slip-safety-coatings",
    name: "Anti-Slip Safety Coatings",
    tagline: "Grip where it counts.",
    description:
      "Textured epoxy and aggregate systems engineered for ramps, kitchens, loading docks and wet zones.",
    long: [
      "Slippery floors are a liability no business should carry. Anti-slip epoxy systems embed aggregates or matte textures into a tough resin base, delivering reliable traction even when wet, oily or dusty.",
      "We install safety coatings on ramps, kitchens, warehouse aisles, locker rooms, decks and pool surrounds — in colors that match your space, so safety never has to look institutional.",
      "Systems are available in a range of traction ratings to meet your local slip-resistance codes, backed by commercial-grade warranties.",
    ],
    features: [
      "Meets slip-resistance codes",
      "Aggregate & matte textures",
      "High traction even when wet",
      "Color-matched to interiors",
      "Chemical & oil resistant",
      "Commercial warranty options",
    ],
    image: "/images/anti-slip-safety-coatings.jpg",
    icon: ShieldAlert,
  },
  {
    slug: "industrial-floor-coatings",
    name: "Industrial Floor Coatings",
    tagline: "Built for the floor that never stops.",
    description:
      "Heavy-duty resinous systems for warehouses, plants and hangars — impact, thermal shock and chemical resistant.",
    long: [
      "Industrial floors take forklift traffic, dropped loads, thermal shock and chemical spills daily. Standard paint or thin-film coatings simply do not survive — 100%-solids epoxy and polyurethane systems do.",
      "We engineer systems by traffic profile: broadcast quartz for forklift aisles, conductive coatings for electronics plants, and flexible membranes for cold rooms and freezer corridors.",
      "Fast-track scheduling and phased installs keep production running while your floor is upgraded zone by zone.",
    ],
    features: [
      "100%-solids epoxy systems",
      "Impact & abrasion resistant",
      "Thermal shock tolerance",
      "Chemical spill resistance",
      "Low-maintenance gloss",
      "Fast-track phased scheduling",
    ],
    image: "/images/industrial-floor-coatings.jpg",
    icon: Factory,
  },
  {
    slug: "concrete-polishing",
    name: "Concrete Polishing",
    tagline: "The sustainable shine without the coating.",
    description:
      "Diamond-polished concrete that turns existing slabs into a glossy, dust-proof, maintenance-light floor.",
    long: [
      "Polished concrete is the floor that pays you back. Instead of layering on a coating, we grind and densify the slab itself with progressive diamond grits until it develops a natural, mirror-like sheen.",
      "The result is a dust-proof, stain-resistant surface that needs only a dry mop — no waxing, no stripping, no re-coating. It is also one of the most sustainable floors you can specify, reusing the slab you already own.",
      "Choose your gloss level from matte honed to full mirror polish, in natural grey or color-stained tones that complement any interior.",
    ],
    features: [
      "Reflective, stain-resistant sheen",
      "Dust-proof densified surface",
      "LEED-friendly process",
      "Minimal chemical maintenance",
      "Custom gloss levels",
      "Seamless transitions",
    ],
    image: "/images/concrete-polishing.jpg",
    icon: Droplets,
  },
];

export type Feature = { icon: LucideIcon; title: string; body: string };

export const FEATURES: Feature[] = [
  { icon: ShieldAlert, title: "Lifetime-grade materials", body: "Commercial-grade resin systems selected for longevity, not just looks — specified per floor, not per catalog." },
  { icon: Sparkles, title: "Done on time, every time", body: "We show up when we say we will, protect your space, and finish to the schedule we quoted." },
  { icon: Layers, title: "Custom color studio", body: "Hundreds of flake blends and metallic pigments, matched to your home, brand or vision." },
  { icon: Droplets, title: "Low-VOC & safe", body: "Low-odor, eco-friendly formulations that are safe for homes, kids, pets and workplaces." },
  { icon: Building2, title: "Certified installers", body: "Factory-trained crews with years of hands-on coating experience on slabs of every kind." },
  { icon: Wrench, title: "Transparent pricing", body: "Fixed quotes after a free on-site measure. No surprise line items — ever." },
];

export const STATS = [
  { value: "1,200+", label: "Floors installed" },
  { value: "18 yrs", label: "Average crew experience" },
  { value: "98%", label: "Clients who refer us" },
  { value: "10 yr", label: "Warranty options" },
];

export const PROCESS = [
  { title: "Consult & measure", body: "A free on-site visit, slab assessment and fixed quote within 48 hours." },
  { title: "Prep & repair", body: "Grinding, crack injection and leveling — the invisible work that makes gloss last." },
  { title: "Coat & cure", body: "Primer, base and topcoat applied in controlled layers, trimmed by hand." },
  { title: "Inspect & handover", body: "A walkthrough with your crew, care instructions, and a warranty that follows the floor." },
];

export const TESTIMONIALS = [
  {
    name: "Dana Whitfield",
    location: "Garage transformation · Austin, TX",
    initials: "DW",
    stars: 5,
    quote: "The crew showed up exactly when promised and the garage looks like a showroom. Guests ask about the floor before they ask about the car.",
  },
  {
    name: "Marcus Delgado",
    location: "Metallic epoxy lobby · Round Rock, TX",
    initials: "MD",
    stars: 5,
    quote: "Our lobby floor is now the first thing clients compliment. The metallic swirl matches our brand teal perfectly — genuinely one of a kind.",
  },
  {
    name: "Priya Raman",
    location: "Retail showroom · Georgetown, TX",
    initials: "PR",
    stars: 5,
    quote: "They installed overnight and we reopened with zero downtime. Eighteen months later the gloss still looks like the day it was poured.",
  },
  {
    name: "Tom Okafor",
    location: "Warehouse hardcoat · Pflugerville, TX",
    initials: "TO",
    stars: 5,
    quote: "Forklifts, pallet jacks, chemical spills — the floor has taken it all. Maintenance is down to a weekly mop. Best facility decision we made.",
  },
  {
    name: "Sofia Lindqvist",
    location: "Polished concrete · Cedar Park, TX",
    initials: "SL",
    stars: 5,
    quote: "We wanted the sustainable option and polished concrete exceeded every expectation. Dust is gone and the light reflection is beautiful.",
  },
  {
    name: "Jake Morrison",
    location: "Polyaspartic garage · Lakeway, TX",
    initials: "JM",
    stars: 5,
    quote: "Poured Friday, parked on it Sunday. No smell, no yellowing, mirror gloss. The 48-hour cure claim is real — I timed it.",
  },
];

export type Project = {
  name: string;
  client: string;
  location: string;
  scope: string;
  result: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Westside Showroom Refresh",
    client: "Westside Auto Group",
    location: "Austin, TX",
    scope: "1,800 sq ft commercial epoxy with metallic accent zones and slip-rated gloss",
    result: "3-day install · reopened with zero downtime",
    image: "/images/project-showroom.jpg",
  },
  {
    name: "Lakehouse Garage Makeover",
    client: "Private residence",
    location: "Lake Travis, TX",
    scope: "720 sq ft flake epoxy with polyaspartic topcoat and cove base",
    result: "2-day turnaround · UV-stable gloss",
    image: "/images/project-garage.jpg",
  },
  {
    name: "Summit Lobby Metallic Floor",
    client: "Summit Capital",
    location: "Round Rock, TX",
    scope: "950 sq ft hand-troweled metallic epoxy, brand-matched teal swirl",
    result: "Signature centerpiece · guests photograph the floor",
    image: "/images/project-lobby.jpg",
  },
  {
    name: "Meridian Warehouse Hardcoat",
    client: "Meridian Logistics",
    location: "Pflugerville, TX",
    scope: "24,000 sq ft 100%-solids industrial system with broadcast quartz aisles",
    result: "Impact-rated · phased install with production running",
    image: "/images/project-warehouse.jpg",
  },
];

export const FAQS = [
  {
    q: "How long does an epoxy floor take to install?",
    a: "Most garages are completed in two days and ready to drive on within 48 hours. Commercial and industrial projects are scheduled in phases to keep your business running — we give you a firm timeline before we start.",
  },
  {
    q: "How much does epoxy flooring cost?",
    a: "Pricing depends on slab condition, square footage and system choice — from economical flake systems to premium metallic artistry. Every project starts with a free on-site measure and a fixed quote within 48 hours, so the number we quote is the number you pay.",
  },
  {
    q: "What preparation does my slab need?",
    a: "We diamond-grind every slab to profile the surface for adhesion, inject and seal cracks, and self-level low spots. Skipping prep is the most common cause of coating failure — we build it into every quote so your floor lasts.",
  },
  {
    q: "Are your coatings safe for kids and pets?",
    a: "Yes. We use low-VOC, low-odor formulations and ventilate during install. Most floors are safe to walk on within hours, and fully cured systems are inert and non-toxic — a favorite choice for playrooms, mudrooms and pet-friendly homes.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every install includes our 5-year workmanship warranty, with 10-year system warranties available on selected products. If a coating issue is ours, we fix it — no fine print, no surprise charges.",
  },
  {
    q: "Will the floor yellow or fade over time?",
    a: "Standard epoxies can amber in direct sun, which is why we recommend UV-stable polyaspartic topcoats for garages and outdoor slabs. They stay crystal clear and color-true for decades.",
  },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FlowCoat Epoxy Floors",
  description:
    "Seamless, high-gloss epoxy and polyaspartic flooring — garage coatings, metallic epoxy, commercial, industrial and polished concrete.",
  url: SITE_URL,
  telephone: "+1-512-555-0147",
  email: "hello@flowcoatfloors.com",
  image: `${SITE_URL}/images/og.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1280 Industrial Way",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
  openingHours: "Mo-Fr 08:00-18:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
};
