"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { productScreens } from "@/data/product-screens";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  const [activeId, setActiveId] = useState(productScreens[0].id);
  const current = productScreens.find((s) => s.id === activeId)!;

  return (
    <section className="py-20 sm:py-24 bg-[#fafbfc] border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product"
          title="The app built for Nigerian campuses"
          description="Real screens from ValGo. Browse restaurants, build your order, and track delivery. Launching first in Ago Iwoye."
        />

        {/* Tab bar */}
        <div className="mt-10 flex gap-1 overflow-x-auto pb-1 border-b border-border">
          {productScreens.map((screen) => (
            <button
              key={screen.id}
              type="button"
              onClick={() => setActiveId(screen.id)}
              className={cn(
                "shrink-0 px-4 py-2.5 text-sm font-medium transition-colors relative",
                activeId === screen.id
                  ? "text-blue-600"
                  : "text-muted hover:text-foreground"
              )}
            >
              {screen.label}
              {activeId === screen.id && (
                <motion.span
                  layoutId="showcase-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
          {/* Screenshot */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-start"
            >
              <div className="w-full max-w-[320px] rounded-lg overflow-hidden border border-border bg-white shadow-float">
                <Image
                  src={current.image}
                  alt={current.alt}
                  width={390}
                  height={844}
                  className="w-full h-auto block"
                  sizes="(max-width: 768px) 280px, 320px"
                  priority={activeId === productScreens[0].id}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Copy */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId + "-copy"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="lg:pt-8"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-3">
                Step {productScreens.findIndex((s) => s.id === activeId) + 1} of {productScreens.length}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-tight">
                {current.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                {current.description}
              </p>

              {/* Thumbnail strip */}
              <div className="mt-8 flex gap-2">
                {productScreens.map((screen) => (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveId(screen.id)}
                    className={cn(
                      "w-12 h-[86px] rounded overflow-hidden border-2 transition-all shrink-0",
                      activeId === screen.id
                        ? "border-blue-500 opacity-100"
                        : "border-transparent opacity-40 hover:opacity-70"
                    )}
                    aria-label={screen.label}
                  >
                    <Image
                      src={screen.image}
                      alt=""
                      width={48}
                      height={86}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
