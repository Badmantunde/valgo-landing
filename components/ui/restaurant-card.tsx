"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bike, MapPin, Star, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Restaurant } from "@/data/restaurants";

interface RestaurantCardProps {
  restaurant: Restaurant;
  className?: string;
}

export function RestaurantCard({ restaurant, className }: RestaurantCardProps) {
  const isOpen = restaurant.open ?? true;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 340, damping: 22 }}
      className={cn(
        "flex flex-col w-full min-w-0 bg-white rounded-[20px] overflow-hidden",
        "shadow-[0_4px_8px_rgba(15,23,42,0.08),0_12px_32px_rgba(15,23,42,0.16)]",
        "hover:shadow-[0_8px_16px_rgba(15,23,42,0.1),0_20px_48px_rgba(15,23,42,0.22)]",
        "transition-shadow duration-300",
        className
      )}
    >
      <div className="p-1.5">
        <div className="relative w-full overflow-hidden rounded-[12px] bg-[#f1f5f9]">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            width={640}
            height={320}
            className="w-full aspect-[2/1] object-cover block"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-foreground leading-tight">
            {restaurant.name}
          </h3>
          {restaurant.open !== undefined && (
            <span
              className={cn(
                "shrink-0 text-xs font-medium px-3 py-1 rounded-full",
                isOpen ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
              )}
            >
              {isOpen ? "Open" : "Closed"}
            </span>
          )}
        </div>

        <p className="text-sm text-muted -mt-1">
          {restaurant.cuisine.join(", ")}
        </p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-3 py-1.5 text-xs font-medium text-foreground">
              <Bike className="h-3.5 w-3.5 text-amber-500" />
              {restaurant.deliveryTime}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-3 py-1.5 text-xs font-medium text-foreground">
              <MapPin className="h-3.5 w-3.5 text-amber-500" />
              {restaurant.location}
            </span>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#1e293b] px-3 py-1.5 text-xs font-medium text-white">
            <Star className="h-3.5 w-3.5 fill-white text-white" />
            {restaurant.rating}
          </span>
        </div>
      </div>

      {restaurant.promotion && (
        <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2.5">
          <Tag className="h-3.5 w-3.5 shrink-0 text-white" />
          <p className="text-xs sm:text-sm font-medium text-white text-center">
            {restaurant.promotion}
          </p>
        </div>
      )}
    </motion.article>
  );
}
