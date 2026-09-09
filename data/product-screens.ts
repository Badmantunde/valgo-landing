export interface ProductScreen {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const productScreens: ProductScreen[] = [
  {
    id: "home",
    label: "Home",
    title: "Your campus hub",
    description:
      "Browse restaurants, pharmacy, supermarket, bakery, and Ago Market. All from Oloko Hall to Ita-Merin.",
    image: "/app-screens/home.png",
    alt: "ValGo home screen showing service categories and Mama T's Kitchen",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    title: "Local favorites, one tap away",
    description:
      "Explore restaurants near campus. Filter by delivery time, location, and ratings from students like you.",
    image: "/app-screens/restaurants.png",
    alt: "ValGo restaurant browse screen with Mama T's Kitchen and Kaffy Bakery",
  },
  {
    id: "restaurant-menu",
    label: "Menu",
    title: "Order in minutes",
    description:
      "Build your meal from Mama T's Kitchen: jollof, moimoi, grilled turkey, and more with live pricing.",
    image: "/app-screens/restaurant-menu.png",
    alt: "Mama T's Kitchen menu on ValGo with jollof rice and sides",
  },
  {
    id: "cart",
    label: "Cart",
    title: "Transparent checkout",
    description:
      "Review items, add delivery notes, and see subtotal, delivery fee, and service fee before you pay.",
    image: "/app-screens/cart.png",
    alt: "ValGo cart screen with jollof, moimoi, and checkout total",
  },
  {
    id: "order-details",
    label: "Tracking",
    title: "Every step, visible",
    description:
      "Track your rider, share a delivery code, and follow order status from kitchen to your hostel door.",
    image: "/app-screens/order-details.png",
    alt: "ValGo order details with rider info and delivery timeline",
  },
];

export interface ShowcaseStep {
  step: string;
  id: string;
  label: string;
  shortTitle: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  iconName: "Search" | "UtensilsCrossed" | "CreditCard" | "Bike";
  floatingTop: {
    title: string;
    subtitle: string;
    badge: string;
  };
  floatingBottom: {
    label: string;
    value: string;
    status: string;
  };
}

export const showcaseSteps: ShowcaseStep[] = [
  {
    step: "01",
    id: "restaurants",
    label: "Explore",
    shortTitle: "Browse Campus Spots",
    title: "Explore 40+ Eateries Across Ago Iwoye",
    description:
      "Filter popular campus favorites, student cafeterias, and local spots by prep speed, distance, and verified student ratings. From Oloko Hall to Ita-Merin in seconds.",
    image: "/app-screens/restaurants.png",
    alt: "ValGo restaurant discovery screen showing local favorites",
    tags: ["40+ Campus Kitchens", "Real Student Ratings", "Fast 15-Min Prep"],
    iconName: "Search",
    floatingTop: {
      title: "Mama T's Kitchen",
      subtitle: "Oloko Hall Rd • 4.9 ★ (128 reviews)",
      badge: "Top Pick",
    },
    floatingBottom: {
      label: "Avg Preparation",
      value: "12–15 mins",
      status: "Fast Kitchen",
    },
  },
  {
    step: "02",
    id: "restaurant-menu",
    label: "Customize",
    shortTitle: "Build Your Plate",
    title: "Customize Portions, Proteins & Extra Sides",
    description:
      "Select your exact rice portion, choose grilled turkey, beef, or fish, add extra fried plantains, and leave chef notes with live price updates at every click.",
    image: "/app-screens/restaurant-menu.png",
    alt: "Mama T's Kitchen menu with custom portions and sides",
    tags: ["Custom Portions", "Live Price Calculator", "Special Chef Notes"],
    iconName: "UtensilsCrossed",
    floatingTop: {
      title: "Smoky Jollof Combo",
      subtitle: "+ Extra Turkey & Fried Plantains",
      badge: "Added to Cart",
    },
    floatingBottom: {
      label: "Live Subtotal",
      value: "₦3,800",
      status: "Ready to Order",
    },
  },
  {
    step: "03",
    id: "cart",
    label: "Checkout",
    shortTitle: "Transparent 1-Click Pay",
    title: "Zero Hidden Surcharges & ValGo Wallet",
    description:
      "Review transparent pricing for meals, packaging, and rider delivery before you pay. Checkout seamlessly via your ValGo campus wallet, debit card, or direct bank transfer.",
    image: "/app-screens/cart.png",
    alt: "ValGo transparent cart and checkout screen",
    tags: ["₦0 Transfer Fee", "ValGo Student Wallet", "Transparent Receipt"],
    iconName: "CreditCard",
    floatingTop: {
      title: "Payment Confirmed",
      subtitle: "ValGo Wallet • ₦0 Transfer Fee",
      badge: "Secured",
    },
    floatingBottom: {
      label: "Total Charged",
      value: "₦4,200",
      status: "Receipt Issued",
    },
  },
  {
    step: "04",
    id: "order-details",
    label: "Delivery",
    shortTitle: "Live GPS & Handover",
    title: "Real-Time Tracking Direct to Your Hostel Gate",
    description:
      "Watch your dispatch rider navigate campus in real time. Meet them at your hostel gate or faculty entrance and confirm delivery with a secure 4-digit handover PIN.",
    image: "/app-screens/order-details.png",
    alt: "ValGo live order tracking screen with rider GPS map",
    tags: ["Live Campus GPS", "15–25 Mins Arrival", "4-Digit Handover PIN"],
    iconName: "Bike",
    floatingTop: {
      title: "Rider En Route",
      subtitle: "Tobi D. • 6 mins away",
      badge: "Live GPS",
    },
    floatingBottom: {
      label: "Hostel Handover PIN",
      value: "#8492",
      status: "Security Verified",
    },
  },
];

export const heroScreens = {
  primary: "/app-screens/home.png",
  secondary: "/app-screens/order-details.png",
  tertiary: "/app-screens/restaurant-menu.png",
} as const;

