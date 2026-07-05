import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { HeroMockups } from "@/components/hero/hero-mockups";
import { AppStoreBadges } from "@/components/ui/app-store-badges";
import { LAUNCH } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge
              variant="blue"
              className="mb-6 bg-white/10 text-white/90 border-white/15 backdrop-blur-sm rounded-md"
            >
              Nigerian platform · Launching first at {LAUNCH.universityShort}, {LAUNCH.year}
            </Badge>

            <h1 className="text-[2.25rem] sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] font-bold text-white leading-[1.08] tracking-[-0.02em]">
              Everything You Need.{" "}
              <span className="text-blue-300">Delivered.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
              ValGo is building Nigeria&apos;s student-first delivery platform.
              Food, groceries, pharmacy, parcels, and campus services. We&apos;re
              starting in {LAUNCH.city} at {LAUNCH.university}, then expanding to
              universities across the country.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-2.5 justify-center lg:justify-start">
              <Button href="#waitlist" variant="white" size="lg">
                Join Waitlist
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                href="/partners"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
              >
                Become a Partner
              </Button>
            </div>

            <AppStoreBadges variant="dark" className="mt-6 justify-center lg:justify-start" />

            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div>
                <span className="block text-xl font-semibold text-white tabular-nums">2,000+</span>
                <span className="text-white/45 text-xs mt-0.5 block">People on waitlist</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="block text-xl font-semibold text-white tabular-nums">40+</span>
                <span className="text-white/45 text-xs mt-0.5 block">Launch partners</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block">
                <span className="block text-xl font-semibold text-white tabular-nums">100+</span>
                <span className="text-white/45 text-xs mt-0.5 block">Restaurants &amp; vendors</span>
              </div>
            </div>
          </div>

          <HeroMockups />
        </div>
      </div>
    </section>
  );
}
