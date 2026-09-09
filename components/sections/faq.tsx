import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { homeFaqItems } from "@/data/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { Accordion } from "@/components/ui/accordion";
import { FadeUp } from "@/components/ui/motion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#fafbfc] border-y border-border">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Quick answers about hostel delivery speeds, payment methods, web ordering, and campus coverage."
        />

        {/* Top 5 Essential FAQs */}
        <div className="mt-12">
          <Accordion items={homeFaqItems} />
        </div>

        {/* View All FAQs Callout */}
        <FadeUp delay={0.15}>
          <div className="mt-10 rounded-xl border border-blue-200/80 bg-white p-6 sm:p-7 shadow-card flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                  Role-Specific Questions
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
                  Have questions for riders, vendors or ambassadors?
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                  Browse our complete knowledge base categorized by student, kitchen, rider, and campus rep roles.
                </p>
              </div>
            </div>

            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors shrink-0 group w-full sm:w-auto"
            >
              <span>Explore All FAQs</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
