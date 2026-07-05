import { SectionHeader } from "@/components/ui/section-header";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden bg-[#0a1628]",
        className
      )}
    >
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          dark
        />
      </div>
    </section>
  );
}
