"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Clock, ShoppingBag, Sparkles, ArrowUpRight } from "lucide-react";
import { featuredMenuItems } from "@/data/restaurants";
import { APP_LINKS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Cravings" },
  { id: "jollof", label: "Smoky Jollof" },
  { id: "burgers", label: "Smash Burgers" },
  { id: "wings", label: "Spicy Wings" },
  { id: "shawarma", label: "Shawarma" },
  { id: "local", label: "Local Dishes" },
  { id: "pastries", label: "Bakery & Drinks" },
];

export function CraveShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? featuredMenuItems
      : featuredMenuItems.filter((item) => {
          if (activeCategory === "pastries") {
            return item.category === "pastries" || item.category === "drinks";
          }
          return item.category === activeCategory;
        });

  return (
    <section className="relative py-20 sm:py-28 bg-[#fafbfc] border-b border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header with big bold typography */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-md bg-blue-100/80 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
                <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                Served Fresh &amp; Fast
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase leading-[1.08]">
                Whatever You&apos;re Craving.{" "}
                <span className="text-blue-600 block sm:inline">We Deliver.</span>
              </h2>
              <p className="mt-3 text-base text-muted max-w-lg leading-relaxed">
                Explore best-selling dishes from popular campus kitchens and spots. Every meal is cooked to order and delivered hot.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Link
                href={APP_LINKS.customer.web}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingBag className="h-4 w-4" />
                Explore Full Menu on Web
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 -mx-5 px-5 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "shrink-0 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-muted border border-border hover:border-blue-300 hover:text-foreground hover:bg-blue-50/50"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Crave Grid: Styled like street-food order tickets (Inspired by Reference Images 1 & 3) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col rounded-xl border border-border bg-white p-3.5 shadow-card hover:shadow-float hover:border-blue-400/50 transition-all duration-300"
              >
                {/* Food Image with Tag */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100 mb-3.5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badges */}
                  {item.tag && (
                    <span className="absolute top-2.5 left-2.5 rounded-md bg-black/75 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-amber-300 backdrop-blur-sm border border-white/10">
                      {item.tag}
                    </span>
                  )}

                  <span className="absolute bottom-2.5 right-2.5 rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-black text-white shadow-md">
                    ₦{item.price.toLocaleString()}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-muted mb-1">
                      <span className="font-semibold text-blue-600">
                        {item.restaurantName || "Campus Favorite"}
                      </span>
                      {item.prepTime && (
                        <span className="inline-flex items-center gap-1 font-medium text-muted">
                          <Clock className="h-3 w-3 text-muted" />
                          {item.prepTime}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-foreground group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Action & Ticket Footer */}
                  <div className="mt-4 pt-3 border-t border-dashed border-border/80 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[10px] text-muted font-mono">
                      <span>#VG-{1000 + index * 37}</span>
                    </div>

                    <Link
                      href={APP_LINKS.customer.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 transition-all hover:bg-blue-600 hover:text-white"
                    >
                      Order Now
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner with App Links and Web Order */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-900 via-blue-800 to-[#0a1628] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-bold text-amber-300 mb-2 border border-white/15">
              <Sparkles className="h-3.5 w-3.5" />
              Ordering for your hostel or lodge?
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Order directly on web or get the ValGo app
            </h3>
            <p className="text-sm text-blue-100/70 mt-1">
              Browse live menus, customize your portions, and pay with ease. Instant rider dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href={APP_LINKS.customer.web}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-blue-700 hover:bg-blue-50 transition-colors shadow-md"
            >
              <ShoppingBag className="h-4 w-4" />
              Order on Web
            </Link>
            <a
              href={APP_LINKS.customer.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Get on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
