export type FAQCategory = "all" | "customer" | "vendor" | "rider" | "ambassador";

export interface FAQItem {
  id: string;
  category: "customer" | "vendor" | "rider" | "ambassador";
  question: string;
  answer: string;
}

export const categorizedFaqItems: FAQItem[] = [
  // ── CUSTOMERS ─────────────────────────────────────────────────────────────
  {
    id: "cust-delivery-time",
    category: "customer",
    question: "How fast does hostel delivery take?",
    answer:
      "Most campus orders arrive within 15–25 minutes! Our smart campus dispatch groups orders by hostel clusters, ensuring meals leave kitchens piping hot and get delivered directly to your hostel gate or room door.",
  },
  {
    id: "cust-web-order",
    category: "customer",
    question: "Can I order food on the web without downloading an app?",
    answer:
      "Yes! You can browse campus menus, customize portions, and place orders directly at usevalgo.com/store from any mobile or laptop browser with zero app installation needed.",
  },
  {
    id: "cust-coverage",
    category: "customer",
    question: "Which areas and hostels do you deliver to in Ago Iwoye?",
    answer:
      "We cover all student living zones across OOU: Main Campus, Mini Campus, Ita-Merin, Ago Market, Oke-Oye, College of Medicine hostels, and off-campus student lodges across Ago Iwoye, expanding nationwide.",
  },
  {
    id: "cust-payment",
    category: "customer",
    question: "What payment methods are supported?",
    answer:
      "We accept instant bank transfers, Nigerian debit cards (Mastercard, Visa, Verve), and the ValGo in-app student wallet for instant 1-click checkouts with zero transaction delays.",
  },
  {
    id: "cust-food-hot",
    category: "customer",
    question: "How do you ensure food stays fresh and piping hot?",
    answer:
      "All ValGo riders use insulated thermal food bags and tamper-evident packaging. Kitchens prepare orders on dispatch notification, so food never sits around waiting.",
  },
  {
    id: "cust-late-night",
    category: "customer",
    question: "Do you deliver late at night during exam periods?",
    answer:
      "Yes! We partner with late-night campus grills, shawarma spots, and beverage kitchens to keep late-night hostel cravings fueled during midterms and exam weeks.",
  },

  // ── VENDORS & RESTAURANTS ──────────────────────────────────────────────────
  {
    id: "vend-cost",
    category: "vendor",
    question: "How much does it cost to list my restaurant or kitchen on ValGo?",
    answer:
      "₦0 upfront setup fees! Listing your food business, setting up your digital menu, and joining the platform is completely free. We only charge a small performance commission on completed orders.",
  },
  {
    id: "vend-dashboard",
    category: "vendor",
    question: "How do I manage orders, menus, and prices?",
    answer:
      "Vendors get access to the ValGo Kitchen Portal on web (vendor.usevalgo.com) and the Android Vendor App. You can toggle sold-out items, change prices, accept orders, and pause kitchen intake with a single tap.",
  },
  {
    id: "vend-payouts",
    category: "vendor",
    question: "When and how do restaurant partners receive payouts?",
    answer:
      "Settlements are automated directly into your Nigerian bank account on a reliable weekly schedule, accompanied by a detailed statement showing every order, tip, and payout.",
  },
  {
    id: "vend-home-cooks",
    category: "vendor",
    question: "Can student bakers and home-based cooks sell on ValGo?",
    answer:
      "Absolutely! Many campus food favorites are run by student entrepreneurs from their hostels. As long as your kitchen meets our hygiene standards and passes food inspection, you can sell on ValGo.",
  },
  {
    id: "vend-packaging",
    category: "vendor",
    question: "Does ValGo provide branded packaging and stickers?",
    answer:
      "Yes! We provide verified food vendors with subsidized tamper-evident stickers, food bowls, and insulated delivery bags to maintain professional presentation and food safety.",
  },

  // ── RIDERS ─────────────────────────────────────────────────────────────────
  {
    id: "ride-payouts",
    category: "rider",
    question: "How and when do ValGo riders get paid?",
    answer:
      "Riders enjoy daily payouts! Earnings from deliveries and tips can be withdrawn directly into your bank account every evening. No waiting until the end of the month.",
  },
  {
    id: "ride-schedule",
    category: "rider",
    question: "Can I deliver flexibly around my university class timetable?",
    answer:
      "100% yes. You control your availability. Log on for lunchtime surges (12 PM – 3 PM) or hostel dinner rushes (6 PM – 10 PM), and log off whenever you have lectures or studying to do.",
  },
  {
    id: "ride-vehicle",
    category: "rider",
    question: "Do I need a motorcycle, or can I deliver on a bicycle or foot?",
    answer:
      "Motorcycles are ideal for campus-to-town delivery, but we also onboard bicycle riders and hostel foot runners for short-distance intra-campus deliveries between adjacent halls.",
  },
  {
    id: "ride-requirements",
    category: "rider",
    question: "What documents and equipment do I need to register as a rider?",
    answer:
      "You need a valid student ID card or national ID, an Android smartphone with GPS, and proof of vehicle ownership or inspection if using a motorbike.",
  },
  {
    id: "ride-bonuses",
    category: "rider",
    question: "Are there extra incentives for peak hours and rainy days?",
    answer:
      "Yes! ValGo offers surge pay during rainy weather, peak lunch and late-night rushes, and milestone delivery bonuses (e.g. extra cash for completing 15+ deliveries in a day).",
  },

  // ── AMBASSADORS ────────────────────────────────────────────────────────────
  {
    id: "amb-perks",
    category: "ambassador",
    question: "What perks and compensation do ValGo Ambassadors receive?",
    answer:
      "Ambassadors receive weekly free meal credits, referral bonuses on activated student signups and onboarded food vendors, exclusive ValGo merch, and direct access to internships.",
  },
  {
    id: "amb-role",
    category: "ambassador",
    question: "What are the core responsibilities of a Campus Ambassador?",
    answer:
      "You are the face of ValGo on campus. You share promotions in departmental and hall WhatsApp groups, organize hostel meal activations, onboard favorite local bukas, and gather student feedback.",
  },
  {
    id: "amb-time",
    category: "ambassador",
    question: "How much time per week does being an Ambassador take?",
    answer:
      "About 3–5 hours per week. It is built to easily fit into student life without interfering with your coursework, tests, or exams.",
  },
  {
    id: "amb-apply",
    category: "ambassador",
    question: "How do I apply, and how are Ambassadors selected?",
    answer:
      "Apply through the Ambassador form at /ambassadors. We review applications on a rolling basis, evaluating leadership, social engagement on campus, and passion for the brand.",
  },
];

// Flat export for existing references and schema generators
export const faqItems = categorizedFaqItems;

// Curated Top 5 FAQs for the high-converting homepage
export const homeFaqItems: FAQItem[] = [
  categorizedFaqItems.find((item) => item.id === "cust-delivery-time")!,
  categorizedFaqItems.find((item) => item.id === "cust-web-order")!,
  categorizedFaqItems.find((item) => item.id === "cust-coverage")!,
  categorizedFaqItems.find((item) => item.id === "cust-payment")!,
  {
    id: "home-partner-opportunities",
    category: "customer",
    question: "How can I partner with ValGo as a kitchen, rider, or campus ambassador?",
    answer:
      "Joining ValGo is fast and free. Food vendors and bukasa can register at /vendors with zero upfront fees. Students with bikes or foot couriers can earn daily at /riders with flexible shifts. Active students can apply to become Campus Ambassadors at /ambassadors for free meal perks, referral rewards, and executive mentorship.",
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
      { name: "referralCode", label: "Referral Code (Optional)", type: "text", placeholder: "e.g. VALGO2026 or Ambassador code", required: false },
    ],
  },
  {
    id: "restaurant",
    label: "Restaurant / Vendor",
    description: "Partner with ValGo and reach thousands of hungry students on campus.",
    fields: [
      { name: "businessName", label: "Business / Restaurant Name", type: "text", placeholder: "e.g. Mama T's Kitchen", required: true },
      { name: "ownerName", label: "Owner / Manager Name", type: "text", placeholder: "Contact person", required: true },
      { name: "email", label: "Business Email", type: "email", placeholder: "orders@restaurant.com", required: true },
      { name: "phone", label: "Phone", type: "tel", placeholder: "+234 800 000 0000", required: true },
      { name: "cuisine", label: "Cuisine Type", type: "text", placeholder: "e.g. Jollof, Buka, Grills, Pastries", required: true },
      { name: "location", label: "Location", type: "text", placeholder: "e.g. Main Campus Gate, Ago Iwoye", required: true },
      { name: "referralCode", label: "Referral Code (Optional)", type: "text", placeholder: "e.g. VALGO2026 or Ambassador code", required: false },
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
        options: ["Motorcycle", "Bicycle", "Foot Runner"],
      },
      { name: "referralCode", label: "Referral Code (Optional)", type: "text", placeholder: "e.g. VALGO2026 or Ambassador code", required: false },
    ],
  },
];
