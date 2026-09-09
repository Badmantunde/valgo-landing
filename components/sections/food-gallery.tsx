"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FOOD_IMAGES } from "@/data/food-images";
import { APP_LINKS } from "@/lib/constants";
import { FadeUp } from "@/components/ui/motion";

const categories = [
  { image: FOOD_IMAGES.jollofPlatter, label: "Smoky Jollof & Dodo", tag: "Must Have" },
  { image: FOOD_IMAGES.burgerHero, label: "Smash Cheeseburgers", tag: "Hot Craving" },
  { image: FOOD_IMAGES.wingsCrispy, label: "Fiery Peppered & Glazed Wings", tag: "The Spicy Bite" },
  { image: FOOD_IMAGES.shawarmaWrap, label: "Loaded Shawarma", tag: "Late Night" },
  { image: FOOD_IMAGES.amala, label: "Hot Amala & Abula", tag: "Local Legend" },
  { image: FOOD_IMAGES.pastaBowl, label: "Suya Chicken Pasta", tag: "Chef's Special" },
  { image: FOOD_IMAGES.pastryCroissant, label: "Flaky Bakery Treats", tag: "Fresh Daily" },
  { image: FOOD_IMAGES.smoothieDrink, label: "Cold Pressed Drinks", tag: "Ice Cold" },
];

function GalleryCard({
  image,
  label,
  tag,
}: {
  image: string;
  label: string;
  tag: string;
}) {
  return (
    <Link
      href={APP_LINKS.customer.web}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
        className="relative shrink-0 w-[170px] sm:w-[220px] aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg"
      >
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 170px, 220px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

        {/* Top Tag */}
        <span className="absolute top-3 left-3 rounded bg-blue-600/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
          {tag}
        </span>

        {/* Bottom Title & Action */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <p className="text-xs sm:text-sm font-black text-white leading-tight transition-transform duration-300 group-hover:translate-y-[-2px]">
              {label}
            </p>
            <span className="text-[10px] text-blue-200 font-medium inline-flex items-center gap-1 mt-0.5">
              Tap to order <ArrowUpRight className="h-2.5 w-2.5" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function FoodGallery() {
  const loop = [...categories, ...categories];

  return (
    <section className="py-16 sm:py-20 bg-[#07111e] overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-10">
        <FadeUp className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider mb-3 border border-white/15">
            <Sparkles className="h-3.5 w-3.5" />
            Cooked Fresh Daily
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Campus Flavors That Hit Different
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
            From smoky Nigerian classics to late-night bites. Tap any craving to start your order instantly.
          </p>
        </FadeUp>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#07111e] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#07111e] to-transparent" />

        <div className="flex gap-4 animate-marquee w-max px-5 sm:px-6">
          {loop.map((item, i) => (
            <GalleryCard
              key={`${item.label}-${i}`}
              image={item.image}
              label={item.label}
              tag={item.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
