"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  MessageCircle,
  Mail,
  HelpCircle,
  Sparkles,
  UtensilsCrossed,
  Store,
  Bike,
  GraduationCap,
} from "lucide-react";
import { categorizedFaqItems, type FAQCategory, type FAQItem } from "@/data/faq";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all" as FAQCategory, label: "All Questions", Icon: Sparkles },
  { id: "customer" as FAQCategory, label: "Customers", Icon: UtensilsCrossed },
  { id: "vendor" as FAQCategory, label: "Vendors & Eateries", Icon: Store },
  { id: "rider" as FAQCategory, label: "Riders", Icon: Bike },
  { id: "ambassador" as FAQCategory, label: "Ambassadors", Icon: GraduationCap },
];

export function CategorizedFAQ() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["cust-delivery-time"]));

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredItems = useMemo(() => {
    return categorizedFaqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" ? true : item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === ""
          ? true
          : item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Search & Category Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. delivery time, payouts, menu, hostel)..."
              className="w-full rounded-xl border border-border bg-slate-50 pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted hover:text-foreground bg-slate-200/80 rounded px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? categorizedFaqItems.length
                  : categorizedFaqItems.filter((it) => it.category === cat.id).length;

              const Icon = cat.Icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer border",
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-slate-50 border-slate-200/80 text-muted hover:bg-slate-100 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{cat.label}</span>
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 text-[10px] font-bold",
                      isActive ? "bg-white/20 text-white" : "bg-white border border-slate-200 text-muted"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-border p-8">
              <HelpCircle className="h-10 w-10 text-muted mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground">No answers found</h3>
              <p className="text-sm text-muted mt-1 max-w-sm mx-auto">
                We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try another search term or contact our support team.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 inline-flex items-center justify-center text-xs font-bold text-blue-600 hover:text-blue-700 underline"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            filteredItems.map((item: FAQItem) => {
              const isOpen = openItems.has(item.id);
              const categoryBadge: {
                label: string;
                variant: "default" | "blue" | "amber" | "outline" | "dark";
              } =
                item.category === "customer"
                  ? { label: "Customer", variant: "blue" }
                  : item.category === "vendor"
                    ? { label: "Vendor", variant: "amber" }
                    : item.category === "rider"
                      ? { label: "Rider", variant: "default" }
                      : { label: "Ambassador", variant: "outline" };

              return (
                <div
                  key={item.id}
                  className={cn(
                    "rounded-xl border transition-all duration-200 overflow-hidden",
                    isOpen
                      ? "border-blue-300 bg-blue-50/20 shadow-xs"
                      : "border-border bg-white hover:border-slate-300"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <span className="text-sm sm:text-base font-bold text-foreground leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge
                        variant={categoryBadge.variant}
                        className="hidden sm:inline-flex text-[10px] uppercase font-bold px-2 py-0.5"
                      >
                        {categoryBadge.label}
                      </Badge>
                      <div
                        className={cn(
                          "h-7 w-7 rounded-full flex items-center justify-center bg-slate-100 text-foreground transition-transform duration-200",
                          isOpen && "rotate-180 bg-blue-100 text-blue-700"
                        )}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-[15px] text-muted leading-relaxed border-t border-blue-100/60 pt-3">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Dedicated Support / Help Box */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#12233f] text-white p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              Still Have Questions?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              We&apos;re here for every student, vendor &amp; rider.
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-md">
              Speak directly with our campus support team via WhatsApp, phone, or email.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SITE.phoneRaw.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white transition-colors shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Support
            </a>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
