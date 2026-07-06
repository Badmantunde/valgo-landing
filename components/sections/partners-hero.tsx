import { Store, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";

export function PartnersHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628]">
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-300 mb-4">
            For Partners
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight">
            Grow your business.{" "}
            <span className="text-blue-300">Power local delivery.</span>
          </h1>
          <p className="mt-5 text-base text-white/55 leading-relaxed max-w-lg">
            ValGo connects restaurants, shops, and riders with students on campus.
            We&apos;re launching first at OOU in Ago Iwoye, then expanding to
            universities nationwide. Join as a vendor or rider from day one.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-2.5">
            <Button href="#waitlist" variant="white" size="lg">
              <Store className="h-4 w-4" />
              Join as Vendor
            </Button>
            <Button
              href="#waitlist"
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Bike className="h-4 w-4" />
              Join as Rider
            </Button>
          </div>

          <div className="mt-10 flex gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-xl font-semibold text-white tabular-nums">40+</p>
              <p className="text-xs text-white/40 mt-0.5">Launch partners</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white tabular-nums">₦0</p>
              <p className="text-xs text-white/40 mt-0.5">Upfront fees</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white tabular-nums">Daily</p>
              <p className="text-xs text-white/40 mt-0.5">Rider payouts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
