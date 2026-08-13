"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 48
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const next = window.scrollY > 48;
        return next === prev ? prev : next;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full border px-4 pl-5 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "border-primary/10 bg-white/85 shadow-lg shadow-primary/10"
            : "border-white/40 bg-white/55"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-primary"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent font-display text-base font-extrabold text-white shadow-md shadow-accent/30">
            F
          </span>
          <span>
            FlowCoat
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Epoxy Floors
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 text-sm font-medium text-primary/75 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden rounded-full bg-linear-to-br from-primary to-accent text-white shadow-md shadow-accent/25 hover:opacity-90 hover:text-white sm:inline-flex"
            )}
          >
            Free Quote
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/60 text-primary backdrop-blur-xl md:hidden"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85%] max-w-sm border-l border-primary/10 bg-white/90 backdrop-blur-2xl"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-lg text-primary">
                  FlowCoat Epoxy Floors
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2 px-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3.5 text-base font-medium text-primary/80 transition-colors hover:bg-accent/10 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-4 rounded-full bg-linear-to-br from-primary to-accent text-white shadow-md shadow-accent/25 hover:opacity-90 hover:text-white"
                  )}
                >
                  Get a Free Quote
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
