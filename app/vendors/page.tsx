import { VendorsHero } from "@/components/sections/vendors-hero";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { CravingTicker } from "@/components/ui/craving-ticker";
import { VendorFoodShowcase } from "@/components/sections/vendor-food-showcase";
import { VendorOnboardingSteps } from "@/components/sections/vendor-onboarding-steps";
import { VendorExperience } from "@/components/sections/vendor-experience";
import { VendorGrowthMatrix } from "@/components/sections/vendor-growth-matrix";
import { Waitlist } from "@/components/sections/waitlist";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "ValGo for Vendors | Grow Your Campus Restaurant & Kitchen Sales",
  description: "Partner with ValGo as a restaurant, buka, or campus kitchen. Zero upfront cost, instant menu updates, real-time analytics, and thousands of hungry students.",
  path: "/vendors",
  keywords: [
    "sell food on ValGo",
    "campus vendor partner",
    "restaurant delivery OOU",
    "kitchen delivery Nigeria",
    "vendor portal ValGo",
  ],
});

export default function VendorsPage() {
  return (
    <>
      <VendorsHero />
      <CheckeredStrip size="md" variant="blue-white" />
      <CravingTicker speed="normal" variant="blue" />
      <VendorFoodShowcase />
      <VendorOnboardingSteps />
      <VendorExperience />
      <VendorGrowthMatrix />
      <div id="register-vendor">
        <Waitlist defaultRole="restaurant" />
      </div>
      <CheckeredStrip size="md" variant="dark-blue" />
    </>
  );
}
