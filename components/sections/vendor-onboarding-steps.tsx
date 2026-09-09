import Link from "next/link";
import {
  ClipboardCheck,
  Camera,
  Banknote,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

const steps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Register Your Kitchen",
    subtitle: "2-minute setup",
    description:
      "Tell us about your restaurant, buka, or campus snack bar. Provide your location in town or near campus and upload your current menu.",
    perks: ["Zero upfront setup fees", "No contract lock-in", "Instant account activation"],
  },
  {
    step: "02",
    icon: Camera,
    title: "Digital Menu & Photography",
    subtitle: "We do the heavy lifting",
    description:
      "Our campus partner team digitizes your menu with mouth-watering photos, optimizes dish categories, and configures your preparation times.",
    perks: ["Professional food presentation", "Customizable portion pricing", "Live menu availability toggle"],
  },
  {
    step: "03",
    icon: Banknote,
    title: "Accept Orders & Daily Payouts",
    subtitle: "Deliver to hungry students",
    description:
      "Receive orders instantly on your vendor portal. ValGo riders pick up promptly with thermal boxes. Your earnings hit your bank account daily.",
    perks: ["Automated rider dispatch", "Daily direct bank transfer", "Real-time revenue analytics"],
  },
];

const highlights = [
  { icon: Clock, label: "Live Within 24 Hours" },
  { icon: ShieldCheck, label: "Guaranteed Daily Settlements" },
  { icon: Zap, label: "Hostel & Doorstep Reach" },
];

export function VendorOnboardingSteps() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 border border-blue-100">
            <Zap className="h-3.5 w-3.5" />
            Simple Onboarding Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
            Start Selling to Students in{" "}
            <span className="text-blue-600">3 Easy Steps</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            From registration to your very first delivered order, we help campus bukas and university restaurants scale sales without overhead headaches.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col rounded-xl border border-border bg-slate-50/50 p-6 sm:p-7 shadow-xs hover:border-blue-300 hover:bg-white hover:shadow-card transition-all duration-300 group"
              >
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black tracking-tight text-slate-300 group-hover:text-blue-200 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-black text-foreground mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {/* Checklist */}
                <div className="pt-4 border-t border-border/80 space-y-2">
                  {item.perks.map((perk) => (
                    <div
                      key={perk}
                      className="flex items-center gap-2 text-xs font-medium text-foreground/85"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Highlights and CTA */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-foreground">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span>{h.label}</span>
                </div>
              );
            })}
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href={APP_LINKS.vendor.web}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Open Vendor Portal
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
