import { PageHero } from "@/components/layout/page-hero";
import { RestaurantShowcase } from "@/components/sections/restaurant-showcase";
import { RestaurantPreview } from "@/components/sections/restaurant-preview";
import { createPageMetadata } from "@/lib/metadata";
import { LAUNCH } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Restaurants",
  description: `Discover restaurant partners and trending meals coming to ${LAUNCH.university} in ${LAUNCH.city}. Order from local favorites like Mama T's Kitchen and Kaffy Bakery on ValGo.`,
  path: "/restaurants",
  keywords: ["OOU restaurants", "Ago Iwoye food delivery", "campus restaurants"],
});

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Restaurants"
        title="Ago Iwoye favorites, delivered to OOU"
        description={`Browse local restaurants, campus eateries, and trending meals from verified partners in ${LAUNCH.city}.`}
      />
      <RestaurantShowcase />
      <RestaurantPreview />
    </>
  );
}
