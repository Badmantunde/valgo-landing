import { faqItems } from "@/data/faq";
import { SectionHeader } from "@/components/ui/section-header";
import { Accordion } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-blue-50/50">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about ValGo, our launch plans, and how to get involved."
        />

        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
