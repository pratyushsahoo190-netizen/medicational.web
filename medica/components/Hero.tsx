import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(40rem_40rem_at_100%_20%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs text-foreground/70 bg-background/60 backdrop-blur">
              <Stethoscope className="h-4 w-4" />
              Board-certified specialists
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Modern Medical Care for Every Stage of Life
            </h1>
            <p className="text-foreground/70">
              From preventive screenings to complex treatments, our team delivers world‑class care with empathy and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/appointments" className="inline-flex justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium shadow hover:opacity-90">
                Book an appointment
              </Link>
              <Link href="/services" className="inline-flex justify-center rounded-md border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-medium hover:bg-black/[0.04] dark:hover:bg-white/[0.06]">
                Explore services
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[28rem]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-300/30 to-indigo-300/30 dark:from-emerald-500/20 dark:to-indigo-500/20 border border-black/10 dark:border-white/10" />
            <div className="absolute inset-6 rounded-xl bg-background/80 backdrop-blur border border-black/10 dark:border-white/10 flex items-center justify-center text-foreground/60 text-sm">
              Medical imagery placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}