export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-are-starting-at-oou",
    category: "Launch",
    date: "June 2026",
    title: "Why we're starting at OOU",
    excerpt:
      "Ago Iwoye has the density, demand, and community we need to prove ValGo works. Here's why Olabisi Onabanjo University is our first campus.",
    readTime: "4 min read",
    content: [
      "When we set out to build ValGo, we knew we couldn't launch everywhere at once. We needed a campus with real density, genuine demand for delivery, and a community willing to try something new. Olabisi Onabanjo University in Ago Iwoye checked every box.",
      "Ago Iwoye is a university town in the truest sense. Thousands of students live off-campus in hostels and rented rooms spread across Ita-Merin, Oloko, and surrounding areas. Restaurants, bakeries, and market stalls cluster around campus corridors. The demand for food delivery, groceries, and campus essentials is already there. What's missing is a platform built specifically for how students here actually order.",
      "Existing delivery apps treat campus areas as an afterthought. Addresses are vague, delivery fees are unpredictable, and vendors outside major cities rarely get onboarded. ValGo is different. We're starting where the need is sharpest and building the product around campus logistics from day one.",
      "OOU also has the community infrastructure we need. Student associations, faculty networks, and a tight-knit off-campus culture mean word spreads fast when something works. Our ambassador program is designed to tap into that energy, with students leading outreach, vendor recruitment, and on-ground activations.",
      "Launching at OOU isn't a limitation. It's our strategy. We want to prove that ValGo can dominate a single campus before we expand to the next university, then the next city, and eventually every campus in Nigeria. Ago Iwoye is where that story begins.",
    ],
  },
  {
    slug: "building-for-campus-life",
    category: "Product",
    date: "May 2026",
    title: "Building for campus life, not just food delivery",
    excerpt:
      "Students need more than jollof at 2am. We're designing ValGo as a multi-service platform that grows with how Nigerian students actually live.",
    readTime: "5 min read",
    content: [
      "Most delivery apps in Nigeria are food-first. Order a meal, track a rider, done. That works for dinner, but campus life is more complex than three meals a day.",
      "Students need groceries from Ago Market on Sunday. Pharmacy runs before an exam. Parcel pickups from the bus park. Printing assignments at 11pm. Finding off-campus housing before resumption. These aren't edge cases. They're daily realities for OOU students, and they're the services ValGo is building toward.",
      "Our launch focuses on food delivery, groceries, pharmacy, and parcel services because those are the highest-frequency needs. But the platform architecture is designed for more. Each new service category plugs into the same ordering, payment, and logistics infrastructure. A rider delivering jollof today can deliver a pharmacy order tomorrow.",
      "We're also thinking about the financial layer. Student wallets, split payments for group orders, and campus-specific promotions aren't features we bolt on later. They're part of the product vision from the start, even if some of them ship after our initial launch.",
      "The goal isn't to be another food delivery app with a campus label. It's to become the operating system for student life: one app where you order, pay, track, and manage everything you need without leaving your hostel.",
    ],
  },
  {
    slug: "meet-our-first-vendors",
    category: "Community",
    date: "May 2026",
    title: "Meet the vendors joining ValGo at launch",
    excerpt:
      "From Ita-Merin kitchens to Ago Market shops, local businesses are signing up to reach OOU students through ValGo. Meet a few of our launch partners.",
    readTime: "3 min read",
    content: [
      "ValGo only works if local businesses thrive on the platform. That's why vendor onboarding isn't a back-office process for us. It's a core part of our launch strategy in Ago Iwoye.",
      "We're starting with restaurants and food vendors along the Ita-Merin corridor, where student foot traffic is highest. These are kitchens that already serve hundreds of students daily but have no way to reach the hostels and off-campus rooms where most orders originate.",
      "Beyond food, we're onboarding grocery sellers from Ago Market, bakeries near campus gates, and shops that stock student essentials. Each vendor gets a dashboard to manage menus, track orders, and see what's selling, without needing technical skills or upfront fees.",
      "Our vendor team works on the ground in Ago Iwoye, visiting businesses in person, setting up menus, and training staff on the dashboard. We believe the best partnerships start with face-to-face conversations, not cold emails.",
      "If you run a restaurant, shop, or market stall in Ago Iwoye and want to reach more OOU students, join our vendor waitlist. Onboarding takes less than 48 hours, and there are no upfront costs to get started.",
    ],
  },
  {
    slug: "student-ambassador-program",
    category: "Ambassadors",
    date: "April 2026",
    title: "Inside the ValGo Student Ambassador Program",
    excerpt:
      "Ambassadors are how ValGo comes alive on campus. Learn what the role involves, what you earn, and how to apply before our OOU launch.",
    readTime: "4 min read",
    content: [
      "Every successful campus platform has one thing in common: students who believe in it enough to tell their friends. ValGo's Student Ambassador Program is built around that idea.",
      "Ambassadors are the face of ValGo on campus. They talk to students at hostels, organize sign-up drives, help recruit vendors, and represent the brand at campus events. It's part marketing, part community building, and part leadership development.",
      "What do ambassadors get in return? Referral commissions for every student, vendor, and rider they bring to the platform. Exclusive ValGo merch including branded t-shirts and promotional materials. Priority consideration for internships at ValGo as the team grows. And real experience building a startup from the ground up, something that looks great on any CV.",
      "We're looking for students who are active on campus, comfortable talking to people, and excited about what ValGo is building. You don't need prior experience in marketing or tech. You need energy, reliability, and a genuine connection to the OOU community.",
      "Applications are open through our ambassador waitlist. Select 'Ambassador' when you sign up, tell us your faculty, and we'll be in touch with next steps as we approach launch.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
