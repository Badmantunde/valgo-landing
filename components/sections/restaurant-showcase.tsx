"use client";

import { motion } from "framer-motion";
import { restaurants } from "@/data/restaurants";
import { SectionHeader } from "@/components/ui/section-header";
import { RestaurantCard } from "@/components/ui/restaurant-card";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function RestaurantShowcase() {
  return (
    <section id="restaurants" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Restaurants"
          title="From Ita-Merin to your hostel"
          description="Real vendors on ValGo. The same restaurants you'll see when you open the app at OOU."
        />

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {restaurants.map((restaurant) => (
            <StaggerItem key={restaurant.id} className="w-full min-w-0">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="h-full w-full"
              >
                <RestaurantCard restaurant={restaurant} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
