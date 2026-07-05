import Image from "next/image";
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

export function FoodGallery() {
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

      <div className="flex gap-3 sm:gap-4 overflow-x-auto px-5 sm:px-6 lg:px-8 pb-2 scrollbar-none">
        {categories.map((item) => (
          <div
            key={item.label}
            className="relative shrink-0 w-[140px] sm:w-[180px] aspect-[4/5] rounded-lg overflow-hidden group"
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="180px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-xs font-medium text-white">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
