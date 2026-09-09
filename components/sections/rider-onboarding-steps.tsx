"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Compass,
  Bike,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { GooglePlayIcon } from "@/components/ui/app-store-badges";
import { cn } from "@/lib/utils";

const RIDER_STEPS = [
  {
    step: "01",
    icon: Smartphone,
    title: "Apply Online in 2 Minutes",
    subtitle: "Fast registration",
    description:
      "Submit your basic details, valid student ID or national ID, and choose your delivery mode (bicycle, motorbike, or campus walking courier).",
    perks: ["Zero application fees", "Instant document verification", "Immediate invite to orientation"],
  },
  {
    step: "02",
    icon: Compass,
    title: "20-Min Campus Briefing",
    subtitle: "Safety & route mastery",
    description:
      "Learn smart hostel routing shortcuts, app usage, order handling etiquette, and safety guidelines from our local campus team.",
    perks: ["Hostel navigation tips", "App navigation walkthrough", "Rider safety protocol"],
  },
  {
    step: "03",
    icon: Bike,
    title: "Grab Gear & Start Earning",
    subtitle: "Hit the road",
    description:
      "Pick up your branded ValGo insulated thermal box, toggle 'Go Online' in the Rider app, accept your first delivery, and get paid today.",
    perks: ["Insulated thermal bag provided", "Direct daily bank payouts", "Dedicated WhatsApp support"],
  },
];

const RIDER_FAQS = [
  {
    q: "Do I need a motorcycle or okada to deliver?",
    a: "Not at all! ValGo supports bicycle riders, motorcycle riders, electric scooters, and even walking couriers for high-density campus hostel clusters and faculty deliveries.",
  },
  {
    q: "How flexible are delivery shifts around lectures?",
    a: "100% flexible. There are no mandatory shifts. You can go online for 45 minutes between lectures, work a 2-hour lunch shift, or ride during evening dinner rushes. You are your own boss.",
  },
  {
    q: "How fast do I get paid for my deliveries?",
    a: "Payouts are automated daily directly to your Nigerian commercial bank account. Every order's base fee, bonus, and tip shows immediately in your app wallet.",
  },
  {
    q: "What equipment does ValGo provide to riders?",
    a: "Every approved rider receives an insulated ValGo thermal food bag designed to keep meals hot and drinks cold, plus a high-visibility safety vest and phone mounting gear.",
  },
];

export function RiderOnboardingSteps() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#fafbfc] border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 border border-blue-100">
            <Zap className="h-3.5 w-3.5" />
            Simple 3-Step Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
            How to Start Delivering in{" "}
            <span className="text-blue-600">Under 24 Hours</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Whether you want to earn between classes or ride full-time around campus, getting started with ValGo is fast and frictionless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {RIDER_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col rounded-xl border border-border bg-white p-6 sm:p-7 shadow-xs hover:border-blue-300 hover:shadow-card transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black tracking-tight text-slate-200 group-hover:text-blue-200 transition-colors">
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

                <div className="pt-4 border-t border-border space-y-2">
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

        {/* Action Callout */}
        <div className="mb-20 rounded-xl bg-gradient-to-r from-blue-900 via-blue-800 to-[#0a1628] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
              Ready to Deliver?
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Download the ValGo Rider App
            </h3>
            <p className="text-sm text-blue-100/70 mt-1 max-w-xl">
              Sign up today, complete your quick document review, and pick up delivery orders across your university campus.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={APP_LINKS.rider.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-blue-900 shadow-md hover:bg-blue-50 transition-colors"
            >
              <GooglePlayIcon className="h-4 w-4" />
              Get App on Google Play
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Rider FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <HelpCircle className="h-3.5 w-3.5" />
              Rider Questions
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {RIDER_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-border bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-foreground hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted transition-transform duration-200 shrink-0 ml-4",
                        isOpen && "rotate-180 text-blue-600"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
