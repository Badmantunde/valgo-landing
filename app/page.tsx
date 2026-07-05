import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { FoodGallery } from "@/components/sections/food-gallery";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { ExplorePages } from "@/components/sections/explore-pages";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Waitlist } from "@/components/sections/waitlist";

export default function Home() {
  return (
    <>
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
