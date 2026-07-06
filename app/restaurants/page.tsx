import { PageHero } from "@/components/layout/page-hero";
import { RestaurantShowcase } from "@/components/sections/restaurant-showcase";
import { RestaurantPreview } from "@/components/sections/restaurant-preview";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Restaurants",
  description: `Discover restaurant partners and trending meals on ValGo. Local favorites from our Ago Iwoye launch, with more campuses coming soon.`,
  path: "/restaurants",
  keywords: ["campus restaurants", "university food delivery", "student food ordering Nigeria"],
});

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Restaurants"
        title="Campus favorites, delivered with ease"
        description="Browse local restaurants, campus eateries, and trending meals from verified partners. Starting in Ago Iwoye at OOU, expanding to more universities."
      />
      <RestaurantShowcase />
      <RestaurantPreview />
    </>
  );
}
