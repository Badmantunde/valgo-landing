import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  icon?: React.ElementType;
  title: string;
  accentTitle?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  icon: Icon = Sparkles,
  title,
  accentTitle,
  description,
  className,
  align = "left",
  children,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 overflow-hidden bg-[#0a1628] text-white border-b border-white/10",
        className
      )}
    >
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-3xl",
            isCenter ? "mx-auto text-center" : "text-left"
          )}
        >
          {eyebrow && (
            <Badge
              variant="blue"
              className="mb-5 inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-200 border-blue-400/30 backdrop-blur-sm rounded-md px-3 py-1 text-xs font-semibold"
            >
              <Icon className="h-3.5 w-3.5 text-amber-300" />
              <span>{eyebrow}</span>
            </Badge>
          )}

          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.5rem] font-black uppercase tracking-tight leading-[1.04] text-white">
            {title}
            {accentTitle && (
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                {accentTitle}
              </span>
            )}
          </h1>

          {description && (
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-white/75 leading-relaxed font-normal">
              {description}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
