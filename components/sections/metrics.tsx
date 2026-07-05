import { metrics } from "@/data/growth";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function Metrics() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-[#0a1628]">
      <AbstractHeroBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {metrics.map((metric) => (
            <StaggerItem key={metric.id}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight tabular-nums">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                </div>
                <p className="text-xs sm:text-sm text-white/45 mt-1.5">
                  {metric.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
