import { PageHero } from "@/components/layout/page-hero";
import { FAQ } from "@/components/sections/faq";
import { Waitlist } from "@/components/sections/waitlist";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/data/faq";
import { createPageMetadata, getFAQSchema } from "@/lib/metadata";
import { LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "FAQ",
  description: `Answers about ValGo: what it is, how to join as a customer, vendor, or rider, delivery pricing, and our ${LAUNCH.year} launch at ${LAUNCH.university} in ${LAUNCH.city}.`,
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(faqItems)} />
      <PageHero
        eyebrow="FAQ"
        title="Questions about ValGo at OOU"
        description={`Everything you need to know about our ${LAUNCH.year} launch in ${LAUNCH.city} and how to get involved.`}
      />
      <FAQ />
      <Waitlist showHeader={false} />
    </>
  );
}
