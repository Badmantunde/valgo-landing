"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/motion";
import { APP_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function getInitial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

const AUTO_SLIDE_MS = 6000;

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = testimonials[currentIndex];

  const paginate = useCallback((newDirection: 1 | -1) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsPaused(true);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      paginate(1);
    }, AUTO_SLIDE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, paginate, currentIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="relative py-20 sm:py-28 bg-white border-b border-border overflow-hidden">
      {/* Background accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#0a1628 1px, transparent 1px), linear-gradient(90deg, #0a1628 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-md bg-blue-100/80 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
              <Users className="h-3.5 w-3.5 text-blue-600" />
              Community Voices • Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase leading-[1.08]">
              Loved Across Campus.{" "}
              <span className="text-blue-600 block sm:inline">Before Day One.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              From Oloko Hall to Mini Campus and Ita-Merin, hear how OOU students, faculty members, and campus ambassadors are getting ready for ValGo.
            </p>

            {/* Trust Summary Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-border px-3 py-1.5 font-semibold text-foreground">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="ml-1 text-xs font-bold">5.0 / 5.0 Rating</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-border px-3 py-1.5 font-semibold text-foreground">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-xs font-bold">1,200+ Waitlist Students</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-border px-3 py-1.5 font-semibold text-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-xs font-bold">100% Campus Verified</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel Slider Stage */}
        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Card */}
          <div className="relative min-h-[340px] sm:min-h-[300px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50 || velocity.x < -400) {
                    paginate(1);
                  } else if (swipe > 50 || velocity.x > 400) {
                    paginate(-1);
                  }
                }}
                className="w-full rounded-2xl border border-border bg-white p-7 sm:p-10 shadow-card hover:shadow-card-hover transition-shadow relative"
              >
                {/* Top Badge Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-border/70">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-100">
                      <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                      {current.tag}
                    </span>
                    <span className="hidden sm:inline-block rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {current.faculty}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-foreground ml-1">5.0</span>
                  </div>
                </div>

                {/* Quote Content */}
                <div className="relative pl-0 sm:pl-3">
                  <Quote className="h-8 w-8 text-blue-100 absolute -top-3 -left-4 -z-10 hidden sm:block" />
                  <p className="text-base sm:text-xl md:text-2xl font-semibold text-foreground leading-relaxed tracking-tight">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  {/* Highlight Callout */}
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50/80 px-3 py-1.5 rounded-md border border-blue-100/60">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{current.highlight}</span>
                  </div>
                </div>

                {/* Author Details Footer */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-black text-base shadow-sm ring-2 ring-blue-100">
                      {getInitial(current.author)}
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground">
                        {current.author}
                      </h4>
                      <p className="text-xs text-muted font-medium">
                        {current.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-muted bg-slate-50 px-3 py-1.5 rounded-md border border-border/80 shrink-0 self-start sm:self-auto">
                    <MapPin className="h-3.5 w-3.5 text-blue-600" />
                    <span>{current.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Quick Student Selector Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 scrollbar-none">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer border",
                    idx === currentIndex
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-white text-muted hover:text-foreground border-border hover:border-slate-300"
                  )}
                >
                  {t.author.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Pagination Dots & Arrow Buttons */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 cursor-pointer",
                      idx === currentIndex
                        ? "w-6 bg-blue-600"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  className="h-9 w-9 rounded-lg border border-border bg-white text-foreground hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  className="h-9 w-9 rounded-lg border border-border bg-white text-foreground hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick CTA banner */}
          <div className="mt-10 rounded-xl bg-slate-50 border border-border p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-foreground">
                Want to see ValGo launch at your hostel?
              </p>
              <p className="text-xs text-muted mt-0.5">
                Join our campus waitlist to receive launch day discount vouchers and priority delivery.
              </p>
            </div>
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors shrink-0 group w-full sm:w-auto"
            >
              <span>Join 1,200+ Students</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

