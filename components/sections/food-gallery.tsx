"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FOOD_IMAGES } from "@/data/food-images";
import { FadeUp } from "@/components/ui/motion";

const categories = [
  { image: FOOD_IMAGES.jollof, label: "Food" },
  { image: FOOD_IMAGES.groceries, label: "Groceries" },
  { image: FOOD_IMAGES.market, label: "Ago Market" },
  { image: FOOD_IMAGES.bakery, label: "Bakery" },
  { image: FOOD_IMAGES.amala, label: "Local Meals" },
  { image: FOOD_IMAGES.fastFood, label: "Fast Food" },
];

function GalleryCard({ image, label }: { image: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className="relative shrink-0 w-[140px] sm:w-[180px] aspect-[4/5] rounded-lg overflow-hidden group cursor-default"
    >
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="180px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/85" />
      <span className="absolute bottom-3 left-3 text-xs font-medium text-white transition-transform duration-300 group-hover:translate-y-[-2px]">
        {label}
      </span>
    </motion.div>
  );
}

export function FoodGallery() {
  const loop = [...categories, ...categories];

  return (
    <section className="py-14 sm:py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-8">
        <FadeUp className="text-center max-w-xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-2">
            What you can order
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Real Nigerian food. Real local commerce.
          </h2>
        </FadeUp>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <div className="flex gap-3 sm:gap-4 animate-marquee w-max px-5 sm:px-6">
          {loop.map((item, i) => (
            <GalleryCard key={`${item.label}-${i}`} image={item.image} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
