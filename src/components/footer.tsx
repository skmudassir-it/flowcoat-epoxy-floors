import Link from "next/link";
import { SERVICES } from "@/lib/data";

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { icon: "fa-facebook-f", label: "Facebook" },
  { icon: "fa-instagram", label: "Instagram" },
  { icon: "fa-linkedin-in", label: "LinkedIn" },
  { icon: "fa-youtube", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-10">
      <div className="glass-strong mx-auto max-w-6xl rounded-[2.5rem] px-8 py-12 sm:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-bold text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-white">
                F
              </span>
              FlowCoat
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary/60">
              Seamless, high-gloss epoxy and polyaspartic floors for homes, showrooms and industry.
              Installed right the first time, backed by a 10-year warranty.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.icon}
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`FlowCoat on ${s.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/70 text-primary transition-colors hover:bg-accent hover:text-white"
                >
                  <i className={`fa-brands ${s.icon}`} aria-hidden />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-primary/65 transition-colors hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-primary/65 transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-primary/65">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-accent" aria-hidden />
                <span>1280 Industrial Way, Austin, TX 78701</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-accent" aria-hidden />
                <a href="tel:+15125550147" className="hover:text-accent">
                  (512) 555-0147
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-accent" aria-hidden />
                <a href="mailto:hello@flowcoatfloors.com" className="hover:text-accent">
                  hello@flowcoatfloors.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-accent" aria-hidden />
                <span>Mon–Fri 8am–6pm · Sat 9am–2pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 text-xs text-primary/50 sm:flex-row">
          <p>© {new Date().getFullYear()} FlowCoat Epoxy Floors. All rights reserved.</p>
          <p>Licensed &amp; insured · TX License #FC-48210</p>
        </div>
      </div>
    </footer>
  );
}
