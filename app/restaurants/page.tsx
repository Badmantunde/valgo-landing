import { PageHero } from "@/components/layout/page-hero";
import { CravingTicker } from "@/components/ui/craving-ticker";
import { CheckeredStrip } from "@/components/ui/checkered-strip";
import { RestaurantShowcase } from "@/components/sections/restaurant-showcase";
import { RestaurantPreview } from "@/components/sections/restaurant-preview";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Campus Restaurants & Menus | Order on ValGo",
  description: `Discover favorite campus restaurants, trending meals, and live menus on ValGo. Order directly on web or get the app for fast hostel delivery. Starting at OOU Ago Iwoye.`,
  path: "/restaurants",
  keywords: [
    "campus restaurants OOU",
    "university food delivery Ago Iwoye",
    "student food ordering Nigeria",
    "Mama T Kitchen OOU",
    "ValGo menus",
  ],
});

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Eateries"
        title="Your favorite spots, delivered to your hostel"
        description="Browse menus from popular campus spots and local kitchens. Cooked fresh, packed hot, and delivered in minutes."
      />
      <CheckeredStrip size="sm" variant="blue-white" />
      <CravingTicker speed="fast" variant="blue" />
      <RestaurantShowcase />
      <RestaurantPreview />
      <CheckeredStrip size="sm" variant="dark-blue" />
    </>
  );
}
