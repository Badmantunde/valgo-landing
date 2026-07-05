import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { HeroMockups } from "@/components/hero/hero-mockups";
import { HeroContent } from "@/components/hero/hero-content";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <HeroContent />
          <HeroMockups />
        </div>
      </div>
    </section>
  );
}
