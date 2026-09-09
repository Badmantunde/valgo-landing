"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How many hours per week do I need to commit?",
    a: "Most ambassadors invest 3 to 5 flexible hours per week. You can spread this across lecture breaks, hostel hangout hours, and social media outreach. During exam periods, you can dial your activity down without penalty: academics always come first.",
  },
  {
    q: "How and when do I receive referral bonuses and meal perks?",
    a: "Every ambassador gets a personalized referral code and link. As soon as a student places their first order with your code, your referral reward is credited. Performance payouts are transferred to your bank account, and meal vouchers appear directly inside your ValGo app.",
  },
  {
    q: "Do I need prior marketing or brand ambassador experience?",
    a: "No prior experience is necessary! We provide complete training, digital marketing assets, brand flyers, and guidance from our growth team. All you need is genuine enthusiasm, good peer communication, and love for campus food culture.",
  },
  {
    q: "Can I organize ValGo-sponsored events on campus?",
    a: "Yes! Level 2 and Level 3 ambassadors are allocated event budgets and exclusive merchandise to sponsor hall events, faculty sports tournaments, gaming nights, and freshman orientation mixers.",
  },
  {
    q: "How does this help my career after graduation?",
    a: "You'll build documented experience in growth marketing, community leadership, and offline sales execution. High-performing ambassadors receive verified LinkedIn recommendations, executive letters of reference from the ValGo founders, and priority internship opportunities.",
  },
];

export function AmbassadorFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#fafbfc] border-b border-border">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            <HelpCircle className="h-3.5 w-3.5" />
            Questions &amp; Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted">
            Have questions about joining the ValGo student team? Here is what you should know.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-border bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
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
    </section>
  );
}
