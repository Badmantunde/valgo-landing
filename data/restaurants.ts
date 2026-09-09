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
  category?: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  tag?: string;
  prepTime?: string;
  restaurantName?: string;
}

export const featuredMenuItems: MenuItem[] = [
  {
    id: "double-trouble-burger",
    name: "Double Trouble Smash Burger",
    category: "burgers",
    description: "Two seasoned beef patties, melted cheddar, house sauce & caramelized onions on a toasted brioche bun.",
    price: 3490,
    image: FOOD_IMAGES.burgerHero,
    popular: true,
    tag: "Campus Favorite",
    prepTime: "15–20 min",
    restaurantName: "Campus Bites",
  },
  {
    id: "smoky-party-jollof",
    name: "ValGo Signature Party Jollof & Shawarma Feast",
    category: "jollof",
    description: "Steaming firewood party jollof rice with caramelized dodo, peppered roast chicken drumstick, juicy sliced shawarma & cold ValGo tropical juice.",
    price: 3800,
    image: FOOD_IMAGES.heroFeast,
    popular: true,
    tag: "Chef's Signature",
    prepTime: "15–20 min",
    restaurantName: "Mama T's Campus Kitchen",
  },
  {
    id: "spicy-flame-wings",
    name: "Fiery Crispy Peppered Wings & Spicy Glazed",
    category: "wings",
    description: "Crispy fried golden wings drenched in fiery habanero honey pepper glaze, toasted garlic flakes, and fresh spring onions.",
    price: 3200,
    image: FOOD_IMAGES.wingsCrispy,
    popular: true,
    tag: "Spicy Special",
    prepTime: "15–22 min",
    restaurantName: "The Grill Lab",
  },
  {
    id: "loaded-shawarma",
    name: "Jumbo Chicken Shawarma",
    category: "shawarma",
    description: "Double sausage, grilled spiced chicken, creamy garlic mayo, sweet relish, and cabbage wrapped tight.",
    price: 2500,
    image: FOOD_IMAGES.shawarmaWrap,
    popular: true,
    tag: "Late Night Must",
    prepTime: "12–18 min",
    restaurantName: "Oloko Bites",
  },
  {
    id: "hot-amala-abula",
    name: "Hot Amala & Abula Special",
    category: "local",
    description: "Steaming smooth black amala paired with rich gbegiri, ewedu, and tender assorted meat.",
    price: 3000,
    image: FOOD_IMAGES.amala,
    popular: true,
    tag: "Soul Food",
    prepTime: "20–30 min",
    restaurantName: "Local Kitchen",
  },
  {
    id: "creamy-chicken-pasta",
    name: "Spicy Chicken Stir-Fry Pasta",
    category: "jollof",
    description: "Al dente penne stir-fried with sweet peppers, sweetcorn, shredded chicken, and suya spice.",
    price: 3500,
    image: FOOD_IMAGES.pastaBowl,
    popular: true,
    tag: "Chef's Pick",
    prepTime: "20–25 min",
    restaurantName: "Campus Bistro",
  },
  {
    id: "fresh-pastry-box",
    name: "Fresh Meat Pie & Glazed Donuts",
    category: "pastries",
    description: "Flaky golden meat pie stuffed with minced beef & potatoes, plus warm glazed donuts.",
    price: 1800,
    image: FOOD_IMAGES.bakery,
    popular: false,
    tag: "Fresh Baked",
    prepTime: "10–15 min",
    restaurantName: "Kaffy Bakery",
  },
  {
    id: "chilled-tropical-smoothie",
    name: "Cold Pressed Mango Berry Splash",
    category: "drinks",
    description: "100% natural chilled mango, strawberry, and passion fruit blend. Pure refreshment.",
    price: 1500,
    image: FOOD_IMAGES.smoothieDrink,
    popular: false,
    tag: "Ice Cold",
    prepTime: "5–10 min",
    restaurantName: "Juice & Chill",
  },
];
