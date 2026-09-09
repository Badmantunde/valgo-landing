import { FAQHero } from "@/components/sections/faq-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { CategorizedFAQ } from "@/components/sections/categorized-faq";
import { Waitlist } from "@/components/sections/waitlist";
import { JsonLd } from "@/components/seo/json-ld";
import { categorizedFaqItems } from "@/data/faq";
import { createPageMetadata, getFAQSchema } from "@/lib/metadata";
import { LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions | ValGo Campus Delivery",
  description: `Find answers about ValGo: customer ordering, 15-minute hostel delivery, restaurant & kitchen onboarding, rider daily payouts, and campus ambassadors at OOU Ago Iwoye in ${LAUNCH.year}.`,
  path: "/faq",
  keywords: [
    "ValGo FAQ",
    "campus delivery questions OOU",
    "food delivery help Ago Iwoye",
    "vendor portal help ValGo",
    "rider payouts ValGo",
  ],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(categorizedFaqItems)} />
      <FAQHero />
      <CheckeredStrip size="md" variant="blue-white" />
      <div id="faq-content">
        <CategorizedFAQ />
      </div>
      <Waitlist showHeader={false} />
      <CheckeredStrip size="md" variant="dark-blue" />
    </>
  );
}
