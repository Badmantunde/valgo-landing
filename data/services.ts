import type { LucideIcon } from "lucide-react";
import {
  UtensilsCrossed,
  ShoppingCart,
  Pill,
  Package,
  Shirt,
  Printer,
  Store,
  ShoppingBag,
  Ticket,
  Home,
  Briefcase,
  Wallet,
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "coming-soon";
}

export const services: Service[] = [
  {
    id: "food",
    name: "Food Delivery",
    description: "Campus favorites and local restaurants delivered fast.",
    icon: UtensilsCrossed,
    status: "live",
  },
  {
    id: "groceries",
    name: "Groceries",
    description: "Essentials from campus markets and nearby stores.",
    icon: ShoppingCart,
    status: "live",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    description: "OTC medications and health essentials to your dorm.",
    icon: Pill,
    status: "live",
  },
  {
    id: "parcel",
    name: "Parcel Delivery",
    description: "Send and receive packages across campus and city.",
    icon: Package,
    status: "live",
  },
  {
    id: "laundry",
    name: "Laundry",
    description: "Pickup, wash, and return. Done for you.",
    icon: Shirt,
    status: "coming-soon",
  },
  {
    id: "printing",
    name: "Printing",
    description: "Documents, assignments, and projects printed on demand.",
    icon: Printer,
    status: "coming-soon",
  },
  {
    id: "campus-shopping",
    name: "Campus Shopping",
    description: "Shop from campus stores without leaving your room.",
    icon: Store,
    status: "live",
  },
  {
    id: "marketplace",
    name: "Marketplace",
    description: "Buy and sell with verified student sellers.",
    icon: ShoppingBag,
    status: "coming-soon",
  },
  {
    id: "ticketing",
    name: "Ticketing",
    description: "Campus events, concerts, and social gatherings.",
    icon: Ticket,
    status: "coming-soon",
  },
  {
    id: "accommodation",
    name: "Accommodation",
    description: "Find verified off-campus housing near your university.",
    icon: Home,
    status: "coming-soon",
  },
  {
    id: "jobs",
    name: "Student Jobs",
    description: "Flexible gigs and part-time roles for students.",
    icon: Briefcase,
    status: "coming-soon",
  },
  {
    id: "finance",
    name: "Financial Services",
    description: "Student wallets, savings, and campus payments.",
    icon: Wallet,
    status: "coming-soon",
  },
];
