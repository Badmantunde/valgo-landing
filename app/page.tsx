import { Hero } from "@/components/sections/hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { CravingTicker } from "@/components/ui/craving-ticker";
import { CraveShowcase } from "@/components/sections/crave-showcase";
import { FoodGallery } from "@/components/sections/food-gallery";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { PlatformOverview } from "@/components/sections/platform-overview";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Waitlist } from "@/components/sections/waitlist";
import { JsonLd } from "@/components/seo/json-ld";
import { homeFaqItems } from "@/data/faq";
import { createPageMetadata, getFAQSchema, getLocalBusinessSchema } from "@/lib/metadata";
import { LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "ValGo | Hot Meals & Campus Essentials Delivered in 15 Minutes",
  description: `Skip campus cafeteria queues. ValGo delivers hot smoky party jollof, double smash burgers, fiery wings, and daily essentials straight to student hostels in 15 to 20 minutes with zero hidden fees. Launching pilot at OOU Ago Iwoye in ${LAUNCH.year}, expanding nationwide.`,
  path: "/",
  keywords: [
    "ValGo food delivery",
    "campus food delivery Nigeria",
    "order food OOU Ago Iwoye",
    "hostel food delivery Nigeria",
    "Olabisi Onabanjo University delivery",
    "student food delivery app Nigeria",
    "fast campus delivery 15 minutes",
    "Ago Iwoye restaurant delivery",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={[getFAQSchema(homeFaqItems), getLocalBusinessSchema()]} />
      <Hero />
      <CheckeredStrip size="md" variant="blue-white" />
      <CravingTicker speed="normal" variant="blue" />
      <CraveShowcase />
      <FoodGallery />
      <ProductShowcase />
      <PlatformOverview />
      <Metrics />
      <Testimonials />
      <FAQ />
      <Waitlist />
      <CheckeredStrip size="md" variant="dark-blue" />
    </>
  );
}
