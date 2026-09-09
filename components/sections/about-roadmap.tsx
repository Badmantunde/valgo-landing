"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Compass,
  Layers,
  Globe2,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { PulseDot, ScrollReveal } from "@/components/ui/motion";

interface Milestone {
  year: string;
  phase: string;
  status: "active" | "upcoming" | "future";
  title: string;
  tagline: string;
  description: string;
  icon: typeof Rocket;
  deliverables: string[];
  metrics: { label: string; value: string }[];
}

const ROADMAP: Milestone[] = [
  {
    year: "2026",
    phase: "Phase 01",
    status: "active",
    title: "The OOU Ago Iwoye Pilot",
    tagline: "Genesis Campus • Proof of Execution",
    description:
      "Launching first at Olabisi Onabanjo University across Main Campus, Mini Campus, and surrounding student lodges. Building the gold standard in 15–25 minute hostel delivery and campus kitchen digitization.",
    icon: Rocket,
    deliverables: [
      "ValGo customer ordering store (web & mobile apps)",
      "Dedicated merchant tablet portal with auto-order dispatch",
      "Trained student courier fleet with insulated thermal backpacks",
      "Active ambassador chapters across major faculties & student halls",
    ],
    metrics: [
      { label: "Partner Kitchens", value: "40+" },
      { label: "Student Riders", value: "50+" },
      { label: "Avg Delivery Speed", value: "15–25m" },
    ],
  },
  {
    year: "2027",
    phase: "Phase 02",
    status: "upcoming",
    title: "Regional University Expansion",
    tagline: "South-West Higher Education Belt",
    description:
      "Replicating the Ago Iwoye operating playbook across 5 premier federal and state universities. Deepening kitchen density, adding group study-room orders, and launching merchant growth credit.",
    icon: Compass,
    deliverables: [
      "Rollout to 5 partner state & federal universities in South-West",
      "Late-night cram session & midterm exam delivery windows",
      "Merchant working capital & hardware financing for top bukasa",
      "Inter-hostel laundry, parcel drop & print run courier services",
    ],
    metrics: [
      { label: "Active Campuses", value: "5" },
      { label: "Partner Vendors", value: "150+" },
      { label: "Annual Orders", value: "120,000+" },
    ],
  },
  {
    year: "2028",
    phase: "Phase 03",
    status: "future",
    title: "Campus Multi-Service Super-App",
    tagline: "Beyond Food: Groceries, Pharmacy & Daily Essentials",
    description:
      "Transitioning ValGo into the comprehensive operating system for university life. Connecting campus supermarkets, student pharmacies, and campus ticketing under one seamless student wallet.",
    icon: Layers,
    deliverables: [
      "Emergency midnight pharmacy & healthcare supplies dispatch",
      "Campus supermarket & provision store instant grocery delivery",
      "Integrated ValGo student wallet with 1-click cashless checkout",
      "Campus event ticketing & verified student peer trade marketplace",
    ],
    metrics: [
      { label: "University Campuses", value: "15+" },
      { label: "Student Users", value: "100,000+" },
      { label: "Rider Network", value: "500+" },
    ],
  },
  {
    year: "2029",
    phase: "Phase 04",
    status: "future",
    title: "Pan-African Student Super-Network",
    tagline: "The Operating System for African Universities",
    description:
      "Expanding ValGo across major university ecosystems nationwide and into high-density West African higher education hubs, empowering millions of young Africans with commerce, delivery, and career launchpads.",
    icon: Globe2,
    deliverables: [
      "Pan-African university footprint across 50+ higher institutions",
      "Cross-campus digital commerce & micro-financial student services",
      "Direct campus-to-career tech recruitment & internship pipeline",
      "Standardized logistics infrastructure powering African youth economy",
    ],
    metrics: [
      { label: "Institutions", value: "50+" },
      { label: "Empowered Youths", value: "1M+" },
      { label: "Merchant Partners", value: "2,500+" },
    ],
  },
];

export function AboutRoadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-28 bg-[#fafbfc] border-b border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="OUR STRATEGIC ROADMAP"
            title="The Journey to Powering African Campus Life"
            description="From our first launch campus at OOU in Ago Iwoye to a nationwide student operating system. Here is our step-by-step expansion plan."
          />
        </ScrollReveal>

        {/* Timeline Track */}
        <div className="mt-16 sm:mt-20 relative">
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-slate-200 sm:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {ROADMAP.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              const isActive = milestone.status === "active";

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-12 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
                    }`}
                  >
                    <div
                      className={`group relative rounded-xl border p-6 sm:p-8 bg-white transition-all duration-300 shadow-card hover:shadow-card-hover ${
                        isActive
                          ? "border-blue-600 ring-2 ring-blue-600/10"
                          : "border-border hover:border-blue-300"
                      }`}
                    >
                      {/* Status Header */}
                      <div
                        className={`flex items-center gap-2 mb-3 flex-wrap ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        <span className="text-xs font-mono font-black text-blue-600 tracking-wider">
                          {milestone.phase}
                        </span>

                        {isActive ? (
                          <Badge
                            variant="blue"
                            className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[11px] font-bold inline-flex items-center gap-1.5 py-0.5"
                          >
                            <PulseDot color="green" />
                            CURRENT PILOT • 2026
                          </Badge>
                        ) : milestone.status === "upcoming" ? (
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200 text-[11px] font-bold"
                          >
                            UPCOMING • 2027
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-slate-50 text-muted border-slate-200 text-[11px] font-bold"
                          >
                            EXPANSION ROADMAP
                          </Badge>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
                        {milestone.tagline}
                      </p>

                      <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="mt-5 pt-4 border-t border-border/80">
                        <p
                          className={`text-[11px] font-bold uppercase tracking-wider text-foreground mb-2.5 ${
                            isEven ? "sm:text-right" : "sm:text-left"
                          }`}
                        >
                          Key Phase Deliverables:
                        </p>
                        <ul className="space-y-2">
                          {milestone.deliverables.map((item) => (
                            <li
                              key={item}
                              className={`text-xs text-muted flex items-start gap-2 ${
                                isEven ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row sm:text-left"
                              }`}
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metrics Pill Grid */}
                      <div
                        className={`mt-6 pt-4 border-t border-dashed border-border/80 grid grid-cols-3 gap-2 ${
                          isEven ? "sm:text-right" : "sm:text-left"
                        }`}
                      >
                        {milestone.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-lg bg-slate-50 p-2 text-center border border-border/50"
                          >
                            <span className="block text-sm sm:text-base font-black text-foreground tabular-nums">
                              {m.value}
                            </span>
                            <span className="block text-[10px] text-muted font-medium mt-0.5 leading-tight line-clamp-1">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 flex flex-col items-center z-10">
                    <div
                      className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border-2 transition-transform duration-300 shadow-md ${
                        isActive
                          ? "bg-blue-600 border-white text-white ring-4 ring-blue-600/30 scale-110"
                          : "bg-white border-blue-600 text-blue-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-1.5 hidden sm:block text-xs font-black font-mono tracking-tight text-foreground bg-white px-2 py-0.5 rounded border border-border shadow-2xs">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
