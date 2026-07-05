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
      "Explore 100+ restaurants around OOU. Filter by delivery time, location, and ratings from students like you.",
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

export const heroScreens = {
  primary: "/app-screens/home.png",
  secondary: "/app-screens/order-details.png",
  tertiary: "/app-screens/restaurant-menu.png",
} as const;
