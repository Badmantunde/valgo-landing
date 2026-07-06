import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { FoodGallery } from "@/components/sections/food-gallery";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { ExplorePages } from "@/components/sections/explore-pages";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Waitlist } from "@/components/sections/waitlist";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/data/faq";
import { createPageMetadata, getFAQSchema, getLocalBusinessSchema } from "@/lib/metadata";
import { LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "ValGo | Everything Students Need. Delivered.",
  description: `Order food, groceries, pharmacy, and campus essentials with ValGo. Nigeria's student-first platform launching at OOU in Ago Iwoye, ${LAUNCH.year}, expanding to universities nationwide.`,
  path: "/",
  keywords: [
    "join ValGo waitlist",
    "university food delivery Nigeria",
    "student delivery platform",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={[getFAQSchema(faqItems), getLocalBusinessSchema()]} />
      <Hero />
      <TrustedBy />
      <FoodGallery />
      <ProductShowcase />
      <ExplorePages />
      <Metrics />
      <Testimonials />
      <FAQ />
      <Waitlist />
    </>
  );
}
