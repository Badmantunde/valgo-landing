"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  UtensilsCrossed,
  CreditCard,
  Bike,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Navigation,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Smartphone,
  Layers,
  ChevronRight,
} from "lucide-react";
import { showcaseSteps, type ShowcaseStep } from "@/data/product-screens";
import { APP_LINKS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const stepIcons = {
  Search,
  UtensilsCrossed,
  CreditCard,
  Bike,
};

const topBadgeIcons = {
  restaurants: Sparkles,
  "restaurant-menu": ShoppingBag,
  cart: ShieldCheck,
  "order-details": Navigation,
};

const bottomStatusIcons = {
  restaurants: Clock,
  "restaurant-menu": CheckCircle2,
  cart: CreditCard,
  "order-details": Bike,
};

const AUTO_ROTATE_MS = 5500;

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeStep = showcaseSteps[activeIndex];
  const StepIcon = stepIcons[activeStep.iconName] || Search;
  const TopBadgeIcon = topBadgeIcons[activeStep.id as keyof typeof topBadgeIcons] || Sparkles;
  const BottomStatusIcon = bottomStatusIcons[activeStep.id as keyof typeof bottomStatusIcons] || CheckCircle2;

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % showcaseSteps.length);
  }, []);

  // Auto-rotation timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextStep();
    }, AUTO_ROTATE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextStep, activeIndex]);

  return (
    <section className="relative py-20 sm:py-28 bg-[#fafbfc] border-y border-border overflow-hidden">
      {/* Background subtle mesh & grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0a1628 1px, transparent 1px), linear-gradient(90deg, #0a1628 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-md bg-blue-100/80 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              How ValGo Works • Live Experience
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase leading-[1.08]">
              From Campus Craving to Hostel Door.{" "}
              <span className="text-blue-600 block sm:inline">Four Simple Steps.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              Explore how students order food, snacks, and pharmacy items in seconds. Experience the real customer journey from kitchen discovery to live GPS doorstep delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile Quick Selector Tabs */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none flex gap-2">
          {showcaseSteps.map((step, idx) => {
            const Icon = stepIcons[step.iconName];
            const isActive = idx === activeIndex;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  setIsPaused(true);
                }}
                className={cn(
                  "shrink-0 inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all border",
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white text-muted border-border hover:text-foreground"
                )}
              >
                <span className="font-mono text-[11px] opacity-80">{step.step}</span>
                <Icon className="h-3.5 w-3.5" />
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Interactive Showcase */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column: Interactive Step Navigator */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {showcaseSteps.map((step, idx) => {
              const Icon = stepIcons[step.iconName];
              const isActive = idx === activeIndex;

              return (
                <div
                  key={step.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPaused(true);
                  }}
                  className={cn(
                    "group relative text-left rounded-xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border",
                    isActive
                      ? "bg-white border-blue-500 shadow-card ring-1 ring-blue-500/20"
                      : "bg-white/60 hover:bg-white border-border/80 hover:border-blue-200 shadow-none"
                  )}
                >
                  {/* Active progress bar (auto-advance visual indicator) */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-xl bg-blue-100 overflow-hidden">
                      <motion.div
                        key={activeIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "100%" : "100%" }}
                        transition={{
                          duration: isPaused ? 0.2 : AUTO_ROTATE_MS / 1000,
                          ease: "linear",
                        }}
                        className="h-full bg-blue-600"
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Step Number & Icon */}
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-black text-sm transition-colors",
                        isActive
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "text-xs font-mono font-bold uppercase tracking-wider",
                              isActive ? "text-blue-600" : "text-muted"
                            )}
                          >
                            Step {step.step}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                            {step.shortTitle}
                          </span>
                        </div>

                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isActive ? "text-blue-600 translate-x-0.5" : "text-slate-300 group-hover:text-muted"
                          )}
                        />
                      </div>

                      <h3
                        className={cn(
                          "text-base sm:text-lg font-bold tracking-tight transition-colors",
                          isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                        )}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={cn(
                          "mt-1.5 text-xs sm:text-sm leading-relaxed transition-all",
                          isActive ? "text-muted" : "text-muted line-clamp-2"
                        )}
                      >
                        {step.description}
                      </p>

                      {/* Micro Tags */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3.5 flex flex-wrap items-center gap-2 pt-3 border-t border-border/60"
                        >
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 border border-blue-100/80"
                            >
                              <CheckCircle2 className="h-3 w-3 text-blue-500" />
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick ordering action links below steps */}
            <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs text-muted">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>Live in Ago Iwoye &amp; OOU campus network</span>
              </div>
              <Link
                href={APP_LINKS.customer.web}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Try It Now: Order on Web</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Elevated Modern Smartphone Stage */}
          <div className="lg:col-span-5 flex justify-center pt-6 sm:pt-8">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Radial Backdrop Glow */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-blue-500/10 to-indigo-500/20 blur-2xl"
                aria-hidden="true"
              />

              {/* Dynamic Floating Badge 1 (Topmost Orbit) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id + "-float-top"}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -top-7 sm:-top-9 -right-1 sm:-right-6 z-50 rounded-xl border border-border bg-white/95 backdrop-blur-md p-2.5 sm:p-3 shadow-float max-w-[175px] xs:max-w-[195px] sm:max-w-[210px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                      <TopBadgeIcon className="h-3.5 w-3.5" />
                    </div>
                    <span className="rounded bg-blue-100/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                      {activeStep.floatingTop.badge}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-foreground truncate">
                    {activeStep.floatingTop.title}
                  </p>
                  <p className="text-[11px] text-muted truncate mt-0.5">
                    {activeStep.floatingTop.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Smartphone Chassis */}
              <div className="relative rounded-[2.25rem] bg-[#0c0c0e] p-[10px] shadow-[0_30px_60px_-15px_rgba(10,22,40,0.35)] border border-slate-700/50">
                {/* Dynamic Island / Speaker cutout */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-24 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-slate-800 mr-2" />
                  <div className="h-2 w-2 rounded-full bg-blue-950/60" />
                </div>

                {/* Phone Screen Display Area */}
                <div className="relative rounded-[1.8rem] overflow-hidden bg-black aspect-[9/19.5] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={activeStep.image}
                        alt={activeStep.alt}
                        fill
                        priority
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 300px, 350px"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Inner subtle glass reflection overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
                </div>
              </div>

              {/* Dynamic Floating Badge 2 (Bottom-Left Orbit) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id + "-float-bottom"}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-4 -left-1 sm:-left-6 z-20 rounded-xl border border-border bg-white/95 backdrop-blur-md px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-float flex items-center gap-2.5 sm:gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <BottomStatusIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">
                      {activeStep.floatingBottom.label}
                    </span>
                    <span className="text-xs font-black text-foreground block">
                      {activeStep.floatingBottom.value}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step indicator dots below phone */}
              <div className="mt-8 flex items-center justify-center gap-2">
                {showcaseSteps.map((step, idx) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsPaused(true);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 cursor-pointer",
                      idx === activeIndex
                        ? "w-8 bg-blue-600"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    )}
                    aria-label={`Jump to step ${step.step}: ${step.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

