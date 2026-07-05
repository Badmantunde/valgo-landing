import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { HeroMockups } from "@/components/hero/hero-mockups";
import { HeroContent } from "@/components/hero/hero-content";

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-[#0a1628]">
      <AbstractHeroBg />

      <div className="relative mx-auto flex min-h-svh w-full max-w-7xl items-center justify-center px-5 sm:px-6 lg:px-8 pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 lg:pb-28">
        <div className="grid w-full lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center justify-items-center lg:justify-items-stretch">
          <HeroContent />
          <HeroMockups />
        </div>
      </div>
    </section>
  );
}
