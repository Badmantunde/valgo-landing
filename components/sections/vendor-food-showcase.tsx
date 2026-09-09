"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Star, ArrowUpRight } from "lucide-react";
import { FOOD_IMAGES } from "@/data/food-images";
import { Badge } from "@/components/ui/badge";
import { APP_LINKS } from "@/lib/constants";

interface FoodItem {
  id: string;
  name: string;
  vendor: string;
  price: string;
  prepTime: string;
  rating: number;
  tag: string;
  image: string;
  description: string;
}

const dishes: FoodItem[] = [
  {
    id: "jollof-platter",
    name: "ValGo Signature Jollof & Shawarma Feast",
    vendor: "Mama T's Campus Kitchen",
    price: "₦3,800",
    prepTime: "15–20 min",
    rating: 4.9,
    tag: "SIGNATURE FEAST",
    image: FOOD_IMAGES.heroFeast,
    description: "Steaming party jollof with golden dodo, peppered roast chicken, juicy chicken shawarma & cold ValGo Tropical Juice.",
  },
  {
    id: "double-smash-burger",
    name: "Double Trouble Smash Cheeseburger",
    vendor: "Ago Central Grills",
    price: "₦3,800",
    prepTime: "12–18 min",
    rating: 4.8,
    tag: "BESTSELLER",
    image: FOOD_IMAGES.burgerHero,
    description: "Two crispy-edged smashed beef patties, double melted cheddar, grilled onions, and house sauce.",
  },
  {
    id: "crispy-pepper-wings",
    name: "Fiery Crispy Peppered Wings & Spicy Glazed (8 pcs)",
    vendor: "Campus Wings & Things",
    price: "₦3,200",
    prepTime: "15–20 min",
    rating: 4.9,
    tag: "HOT & SPICY",
    image: FOOD_IMAGES.wingsCrispy,
    description: "Double-fried crispy golden wings drenched in fiery habanero honey pepper glaze, toasted sesame and garlic flakes.",
  },
  {
    id: "amala-abula",
    name: "Steaming Oyo Amala & Abula Platter",
    vendor: "Iya Basira Heritage Buka",
    price: "₦2,900",
    prepTime: "10–15 min",
    rating: 5.0,
    tag: "AUTHENTIC LOCAL",
    image: FOOD_IMAGES.amalaBowl,
    description: "Velvety smooth black amala paired with rich yellow gbegiri, green ewedu, and tender goat meat.",
  },
  {
    id: "jumbo-shawarma",
    name: "Loaded Jumbo Chicken & Beef Shawarma",
    vendor: "Midnight Crave Spot",
    price: "₦2,700",
    prepTime: "10–15 min",
    rating: 4.8,
    tag: "LATE NIGHT CRAVE",
    image: FOOD_IMAGES.shawarmaWrap,
    description: "Double sausage, grilled seasoned chicken, shredded beef, crunchy cabbage, and creamy garlic cream.",
  },
  {
    id: "suya-skewer-plate",
    name: "Fire-Grilled Beef Suya Platter",
    vendor: "Alhaji's Suya Spot",
    price: "₦2,500",
    prepTime: "10–15 min",
    rating: 4.9,
    tag: "STREET SPECIAL",
    image: FOOD_IMAGES.suyaSkewer,
    description: "Tender flank steak charred over hot coals, tossed with authentic northern Yaji spice and sweet onions.",
  },
  {
    id: "creamy-alfredo-pasta",
    name: "Creamy Chicken Alfredo Pasta Bowl",
    vendor: "The Student Bistro",
    price: "₦3,600",
    prepTime: "15–22 min",
    rating: 4.7,
    tag: "GOURMET COMFORT",
    image: FOOD_IMAGES.pastaBowl,
    description: "Rich parmesan garlic cream sauce, penne pasta, and seasoned pan-seared chicken breast slices.",
  },
  {
    id: "pepper-soup-special",
    name: "Spicy Assorted Goat Meat Pepper Soup",
    vendor: "Spice Haven Kitchen",
    price: "₦3,000",
    prepTime: "12–18 min",
    rating: 4.8,
    tag: "HOT BROTH",
    image: FOOD_IMAGES.pepperSoupBowl,
    description: "Aromatic broth steeped with traditional herbs, uda, uziza seeds, and slow-cooked tender meat cuts.",
  },
];

export function VendorFoodShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-[#fafbfc] border-b border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <Badge variant="blue" className="bg-blue-50 text-blue-700 border-blue-200 font-bold mb-3">
            CAMPUS DISHES &amp; MENUS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            What Students Are Craving From <span className="text-blue-600">Our Vendors</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            From iconic campus bukas to late-night grills, ValGo brings students&apos; all-time favorites straight to their hostel door in minutes.
          </p>
        </motion.div>

        {/* 8-Card Sizzling Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.015 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group rounded-xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Container with zoom & badges */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Tag */}
                <span className="absolute top-3 left-3 rounded-md bg-blue-600/95 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white border border-white/20 shadow-xs">
                  {dish.tag}
                </span>

                {/* Price Pill */}
                <span className="absolute bottom-3 right-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-black text-blue-900 shadow-md">
                  {dish.price}
                </span>

                {/* Rating */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] font-bold text-white bg-black/50 backdrop-blur-md px-2 py-0.5 rounded">
                  <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                  <span>{dish.rating}</span>
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {dish.vendor}
                  </p>
                  <h3 className="text-base font-bold text-foreground mt-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted line-clamp-2 leading-relaxed font-normal">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs text-muted font-medium">
                    <Clock className="h-3.5 w-3.5 text-muted" />
                    {dish.prepTime}
                  </span>

                  <a
                    href={APP_LINKS.customer.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Order Now
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">
              Own a campus kitchen, buka, or bakery?
            </h3>
            <p className="text-sm text-blue-100 mt-1 max-w-xl">
              Join 40+ campus spots already getting ready for launch at OOU Ago Iwoye. ₦0 upfront fees and automated weekly settlements.
            </p>
          </div>

          <a
            href="#register-vendor"
            className="rounded-lg bg-white px-6 py-3 text-sm font-extrabold text-blue-700 hover:bg-blue-50 transition-colors shadow-md shrink-0"
          >
            Register Your Kitchen &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
