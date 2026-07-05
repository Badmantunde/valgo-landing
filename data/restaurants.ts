import { FOOD_IMAGES } from "@/data/food-images";

export const restaurants = [
  {
    id: "mama-ts-kitchen",
    name: "Mama T's Kitchen",
    cuisine: ["Jollof", "Fried", "Chicken"],
    rating: 4.5,
    reviewCount: 218,
    deliveryTime: "18–24 min",
    openingHours: "8:00 AM – 4:00 PM",
    location: "Ita-Merin",
    image: FOOD_IMAGES.jollof,
    trending: "Smoky Jollof Rice",
    featured: true,
    open: true,
    promotion: "20% discount on Friday 2pm – 4pm",
  },
  {
    id: "kaffy-bakery",
    name: "Kaffy Bakery",
    cuisine: ["Pastries", "Cakes", "Bakery"],
    rating: 4.5,
    reviewCount: 156,
    deliveryTime: "18–24 min",
    openingHours: "7:00 AM – 9:00 PM",
    location: "Ita-Merin",
    image: FOOD_IMAGES.bakery,
    trending: "Fresh Pastries",
    featured: true,
    open: false,
    promotion: "20% discount on Friday 2pm – 4pm",
  },
  {
    id: "campus-bites",
    name: "Campus Bites",
    cuisine: ["Fast Food", "Burgers"],
    rating: 4.6,
    reviewCount: 134,
    deliveryTime: "20–30 min",
    openingHours: "10:00 AM – 11:00 PM",
    location: "Oloko Gate",
    image: FOOD_IMAGES.fastFood,
    trending: "Shawarma Wrap",
    open: true,
  },
  {
    id: "ago-market",
    name: "Ago Market Fresh",
    cuisine: ["Groceries", "Produce"],
    rating: 4.4,
    reviewCount: 89,
    deliveryTime: "25–35 min",
    openingHours: "6:00 AM – 8:00 PM",
    location: "Ago Market",
    image: FOOD_IMAGES.market,
    trending: "Fresh produce box",
    open: true,
  },
  {
    id: "local-kitchen",
    name: "Local Kitchen",
    cuisine: ["Nigerian", "Swallow"],
    rating: 4.7,
    reviewCount: 98,
    deliveryTime: "30–40 min",
    openingHours: "11:00 AM – 9:00 PM",
    location: "Ita-Merin",
    image: FOOD_IMAGES.amala,
    trending: "Amala & Abula",
    open: false,
  },
  {
    id: "quick-mart",
    name: "Quick Mart",
    cuisine: ["Groceries", "Essentials"],
    rating: 4.5,
    reviewCount: 76,
    deliveryTime: "20–30 min",
    openingHours: "7:00 AM – 10:00 PM",
    location: "Ago Iwoye",
    image: FOOD_IMAGES.groceries,
    trending: "Weekly essentials",
    featured: true,
    open: true,
  },
];

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  openingHours: string;
  image: string;
  location: string;
  trending?: string;
  featured?: boolean;
  open?: boolean;
  promotion?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
}

export const featuredMenuItems: MenuItem[] = [
  {
    id: "jollof",
    name: "Smoky Jollof Rice",
    description: "Party-style jollof with deep smoky flavour.",
    price: 200,
    image: FOOD_IMAGES.jollof,
    popular: true,
  },
  {
    id: "moimoi",
    name: "Moimoi",
    description: "Steamed bean pudding, soft and savoury.",
    price: 300,
    image: FOOD_IMAGES.amala,
    popular: true,
  },
  {
    id: "turkey",
    name: "Grilled Turkey",
    description: "Well-seasoned, flame-grilled turkey portion.",
    price: 3000,
    image: FOOD_IMAGES.fastFood,
  },
  {
    id: "dodo",
    name: "Fried Plantain (Dodo)",
    description: "Golden caramelized plantain slices.",
    price: 100,
    image: FOOD_IMAGES.jollof,
    popular: true,
  },
];
