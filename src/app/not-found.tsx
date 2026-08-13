import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-32">
      <div className="glass-strong max-w-lg rounded-[2.5rem] p-12 text-center">
        <p className="bg-linear-to-br from-primary to-accent bg-clip-text font-display text-7xl font-extrabold text-transparent">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-primary">
          This floor has not been poured yet.
        </h1>
        <p className="mt-3 text-primary/65">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants(),
            "mt-8 rounded-full bg-linear-to-br from-primary to-accent text-white hover:opacity-90 hover:text-white"
          )}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
