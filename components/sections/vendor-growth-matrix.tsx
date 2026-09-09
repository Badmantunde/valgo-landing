"use client";

import { useState } from "react";
import {
  Utensils,
  Flame,
  Coffee,
  ShoppingBag,
  Check,
  X,
  ChevronDown,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const KITCHEN_TYPES = [
  {
    icon: Utensils,
    title: "Campus Bukas & Swallow Spots",
    popularDishes: "Amala, Pounded Yam, Ewedu, Gbegiri, Eba, Fried Fish",
    description:
      "Keep your pots empty by 2pm. Reach off-campus students and hostelites who crave homestyle meals during lecture breaks.",
  },
  {
    icon: Flame,
    title: "Fast Food, Grills & Shawarma",
    popularDishes: "Burgers, Loaded Shawarma, Peppered Wings, Suya, Fries",
    description:
      "Dominate evening and late-night cravings. Students study late and order after-hours when campus gates close.",
  },
  {
    icon: Coffee,
    title: "Bakeries, Juices & Breakfast",
    popularDishes: "Meat Pies, Glazed Donuts, Smoothies, Parfait, Coffee",
    description:
      "Capture early morning lecture rush and hostel breakfast bundles with fast doorstep delivery.",
  },
  {
    icon: ShoppingBag,
    title: "Mini-Marts & Provisions",
    popularDishes: "Packaged Water, Beverages, Noodles, Toiletries, Snacks",
    description:
      "Deliver essential dorm supplies and grocery packs to students who don't want to carry heavy bags across campus.",
  },
];

const COMPARISON = [
  {
    feature: "Customer Reach",
    traditional: "Limited to foot traffic within 50m of your stall",
    valgo: "Reaches all campus faculties, private hostels & student lodges",
  },
  {
    feature: "Sales on Rainy & Exam Days",
    traditional: "Revenue drops 40–70% when students stay indoors",
    valgo: "Spikes as students order directly to hostel rooms",
  },
  {
    feature: "Payment Settlements",
    traditional: "Cash handling loss, fake transfer alerts, POS network errors",
    valgo: "100% verified digital checkout with daily bank settlement",
  },
  {
    feature: "Marketing & Discovery",
    traditional: "Expensive flyers, campus posters that get torn down",
    valgo: "Featured placement in the ValGo app & web storefront",
  },
  {
    feature: "Upfront Cost",
    traditional: "Costly physical store rent and banner fees",
    valgo: "₦0 upfront registration, ₦0 listing fee",
  },
];

const VENDOR_FAQS = [
  {
    q: "How often are vendor payouts made?",
    a: "Payouts are automated daily directly to your registered Nigerian bank account. There are zero withdrawal fees and no monthly delays. You get your hard-earned revenue every day.",
  },
  {
    q: "What are the fees to sell on ValGo?",
    a: "Registration is completely free (₦0). There are no sign-up fees or subscription costs. ValGo operates on a transparent percentage commission per completed order, meaning we only make money when you make sales.",
  },
  {
    q: "How does order pickup and rider dispatch work?",
    a: "When a student places an order, your vendor portal chimes. You accept and confirm prep time. The ValGo system automatically assigns the nearest campus rider, who arrives with a thermal delivery box as soon as the food is packed.",
  },
  {
    q: "Can I manage prices and pause orders when my kitchen is busy?",
    a: "Yes! You have full control from your vendor portal on your phone or computer. You can pause incoming orders with one tap, adjust portion prices, or mark sold-out items in seconds.",
  },
];

export function VendorGrowthMatrix() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#fafbfc] border-b border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 border border-blue-100">
            <TrendingUp className="h-3.5 w-3.5" />
            Built For Every Food Business
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
            Who Grows With <span className="text-blue-600">ValGo</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Whether you operate an established restaurant on campus or a home kitchen cooking in town, ValGo connects you directly to student demand.
          </p>
        </div>

        {/* Kitchen Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {KITCHEN_TYPES.map((kitchen) => {
            const Icon = kitchen.icon;
            return (
              <div
                key={kitchen.title}
                className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-xs hover:border-blue-300 hover:shadow-card transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {kitchen.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-4 flex-1">
                  {kitchen.description}
                </p>
                <div className="pt-3 border-t border-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    Popular Items:
                  </span>
                  <p className="text-[11px] font-medium text-foreground/80 leading-snug">
                    {kitchen.popularDishes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
              Walk-in Store vs. <span className="text-blue-600">ValGo Partner</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Why leading campus kitchens rely on ValGo for steady daily order flow.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-white shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border bg-slate-50">
                    <th className="p-4 font-bold text-foreground">Metric &amp; Capability</th>
                    <th className="p-4 font-bold text-slate-500">Traditional Walk-in Only</th>
                    <th className="p-4 font-bold text-blue-600 bg-blue-50/50">ValGo Partner Kitchen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {COMPARISON.map((row) => (
                    <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">{row.feature}</td>
                      <td className="p-4 text-muted flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </td>
                      <td className="p-4 text-foreground font-medium bg-blue-50/30">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.valgo}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Vendor FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <HelpCircle className="h-3.5 w-3.5" />
              Vendor Questions Answered
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {VENDOR_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-border bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-foreground hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted transition-transform duration-200 shrink-0 ml-4",
                        isOpen && "rotate-180 text-blue-600"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
