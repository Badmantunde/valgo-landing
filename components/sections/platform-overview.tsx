"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
          eyebrow="One Campus Ecosystem"
          title="Tools built for hungry students, riders &amp; vendors"
          description="Whether you're ordering dinner, running a busy kitchen, or earning between classes, ValGo gives you the exact tools you need."
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
                    "group relative rounded-xl border p-6 flex flex-col justify-between transition-all duration-300 h-full",
                    isActive
                      ? "bg-blue-600 border-blue-600 text-white shadow-float scale-[1.02]"
                      : "bg-white border-border shadow-card hover:shadow-card-hover"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={cn(
                          "inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors",
                          isActive ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {platform.comingSoonApple && (
                        <span
                          className={cn(
                            "rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                            isActive
                              ? "bg-white/15 text-blue-100"
                              : "bg-slate-100 text-muted"
                          )}
                        >
                          iOS Soon
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-black tracking-tight">{platform.title}</h3>
                    <p
                      className={cn(
                        "text-xs mt-1 font-semibold",
                        isActive ? "text-blue-100" : "text-blue-600"
                      )}
                    >
                      {platform.subtitle}
                    </p>

                    <p
                      className={cn(
                        "text-xs mt-3 leading-relaxed",
                        isActive ? "text-blue-100/90" : "text-muted"
                      )}
                    >
                      {platform.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {platform.features.map((feature) => (
                        <li
                          key={feature}
                          className={cn(
                            "text-xs flex items-center gap-2",
                            isActive ? "text-blue-100/90" : "text-slate-600"
                          )}
                        >
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full shrink-0",
                              isActive ? "bg-amber-300" : "bg-blue-600"
                            )}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-5 border-t border-border/40 flex flex-col gap-2">
                    {platform.primaryLink.external ? (
                      <a
                        href={platform.primaryLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center justify-center gap-1.5 rounded-lg py-2.5 px-3 text-xs font-bold transition-colors",
                          isActive
                            ? "bg-white text-blue-700 hover:bg-blue-50 shadow-sm"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        )}
                      >
                        {platform.primaryLink.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={platform.primaryLink.href}
                        className={cn(
                          "inline-flex items-center justify-center gap-1.5 rounded-lg py-2.5 px-3 text-xs font-bold transition-colors",
                          isActive
                            ? "bg-white text-blue-700 hover:bg-blue-50 shadow-sm"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        )}
                      >
                        {platform.primaryLink.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}

                    {platform.secondaryLink && (
                      platform.secondaryLink.external ? (
                        <a
                          href={platform.secondaryLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center justify-center gap-1 text-[11px] font-semibold py-1 transition-colors",
                            isActive
                              ? "text-white/80 hover:text-white"
                              : "text-muted hover:text-blue-600"
                          )}
                        >
                          {platform.secondaryLink.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <Link
                          href={platform.secondaryLink.href}
                          className={cn(
                            "inline-flex items-center justify-center gap-1 text-[11px] font-semibold py-1 transition-colors",
                            isActive
                              ? "text-white/80 hover:text-white"
                              : "text-muted hover:text-blue-600"
                          )}
                        >
                          {platform.secondaryLink.label}
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      )
                    )}
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
