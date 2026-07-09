export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "what-is-valgo",
    question: "What is ValGo?",
    answer:
      "ValGo is Nigeria's student-first logistics and lifestyle platform. We connect students with restaurants, campus stores, pharmacies, and local services through a single app designed to be the operating system for student life.",
  },
  {
    id: "how-different",
    question: "How is ValGo different from other delivery apps?",
    answer:
      "ValGo is built exclusively for the campus ecosystem. We understand student schedules, budgets, and needs. Our asset-light logistics model, multi-service roadmap, and student ambassador program create a community-driven platform, not just another delivery app.",
  },
  {
    id: "which-campuses",
    question: "Where is ValGo launching first?",
    answer:
      "ValGo is a Nigerian delivery platform launching first at Olabisi Onabanjo University in Ago Iwoye in 2026. We're focused on getting the experience right at our first campus before expanding to universities across the country.",
  },
  {
    id: "become-partner",
    question: "How do I become a restaurant partner?",
    answer:
      "Select 'Restaurant' on our waitlist form and provide your business details. Our partnerships team will reach out within 48 hours to onboard you with zero upfront fees and dedicated support.",
  },
  {
    id: "become-rider",
    question: "How do I become a ValGo rider?",
    answer:
      "Apply through the waitlist as a Rider. You'll need a valid ID, smartphone, and either a bicycle or motorcycle. We provide training, gear, and flexible scheduling around your class timetable.",
  },
  {
    id: "ambassador-program",
    question: "What is the Student Ambassador Program?",
    answer:
      "Ambassadors represent ValGo on their campus, drive sign-ups, organize events, and earn referral commissions. Benefits include exclusive merch, internship opportunities, and leadership experience with a fast-growing startup.",
  },
  {
    id: "pricing",
    question: "How much does delivery cost?",
    answer:
      "Delivery fees start from ₦300 on campus, with frequent promotions and student discounts. Many restaurants offer free delivery on orders above a minimum threshold.",
  },
  {
    id: "payment",
    question: "What payment methods are accepted?",
    answer:
      "We accept bank transfers, debit cards, and mobile wallets. Campus wallet and split-pay features are coming in our next release.",
  },
];

export type WaitlistRole = "customer" | "restaurant" | "rider";

export interface WaitlistRoleConfig {
  id: WaitlistRole;
  label: string;
  description: string;
  fields: WaitlistField[];
}

export interface WaitlistField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  hint?: string;
  required?: boolean;
  options?: string[];
}

export const waitlistRoles: WaitlistRoleConfig[] = [
  {
    id: "customer",
    label: "Customer",
    description: "Get early access to order food, groceries, pharmacy, and more on your campus.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
      { name: "phone", label: "Phone", type: "tel", placeholder: "+234 800 000 0000", required: true },
    ],
  },
  {
    id: "restaurant",
    label: "Restaurant",
    description: "Partner with ValGo and reach students on campus and in your city.",
    fields: [
      { name: "businessName", label: "Business Name", type: "text", placeholder: "Your restaurant name", required: true },
      { name: "ownerName", label: "Owner Name", type: "text", placeholder: "Contact person", required: true },
      { name: "email", label: "Business Email", type: "email", placeholder: "orders@restaurant.com", required: true },
      { name: "phone", label: "Phone", type: "tel", placeholder: "+234 800 000 0000", required: true },
      { name: "cuisine", label: "Cuisine Type", type: "text", placeholder: "Nigerian, Fast Food, etc.", required: true },
      { name: "location", label: "Location", type: "text", placeholder: "e.g. Campus area, city", required: true },
    ],
  },
  {
    id: "rider",
    label: "Rider",
    description: "Earn flexibly delivering on campus and in your university town.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
      { name: "phone", label: "Phone", type: "tel", placeholder: "+234 800 000 0000", required: true },
      {
        name: "vehicle",
        label: "Vehicle Type",
        type: "select",
        required: true,
        options: ["Bicycle", "Motorcycle", "Foot"],
      },
    ],
  },
];
