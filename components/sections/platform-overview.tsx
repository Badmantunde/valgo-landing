"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { platforms } from "@/data/platform";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export function PlatformOverview() {
  const [activeId, setActiveId] = useState(platforms[0].id);

  return (
    <section id="platform" className="py-20 sm:py-28 bg-white pattern-grid">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The ecosystem"
          title="Tools built for every role on campus"
          description="Each product is designed for a specific part of the ValGo network, customers ordering, vendors selling, riders delivering, and ambassadors growing the community."
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const isActive = activeId === platform.id;

            return (
              <StaggerItem key={platform.id}>
                <motion.div
                  onHoverStart={() => setActiveId(platform.id)}
                  className={cn(
                    "group relative rounded-[var(--radius-lg)] border p-6 cursor-default transition-all duration-500 h-full",
                    isActive
                      ? "bg-blue-500 border-blue-500 text-white shadow-float scale-[1.02]"
                      : "bg-white border-border shadow-card hover:shadow-card-hover"
                  )}
                  layout
                >
                  <div
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded mb-4 transition-colors",
                      isActive ? "bg-white/20" : "bg-blue-50 text-blue-500"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight">{platform.title}</h3>
                  <p
                    className={cn(
                      "text-sm mt-1 font-medium",
                      isActive ? "text-blue-100" : "text-blue-500"
                    )}
                  >
                    {platform.subtitle}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm mt-4 leading-relaxed text-blue-100/90">
                      {platform.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {platform.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs flex items-center gap-2 text-blue-100/80"
                        >
                          <span className="h-1 w-1 rounded-full bg-blue-200 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <div
                    className={cn(
                      "mt-5 flex items-center gap-1 text-sm font-medium transition-opacity",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                    )}
                  >
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
