export const timeline = [
  {
    year: "2026",
    title: "First campus launch",
    description:
      "Pilot launch at Olabisi Onabanjo University in Ago Iwoye: food delivery, groceries, pharmacy, and campus services. Our proof point before scaling to more universities.",
  },
  {
    year: "2027",
    title: "Deepen the first market",
    description:
      "Onboard 100+ local restaurant and vendor partners, expand the rider network, and launch laundry and printing services, while opening waitlists for the next campuses.",
  },
  {
    year: "2028",
    title: "Expand to more universities",
    description:
      "Roll out ValGo to additional university towns across Nigeria, bringing the same student-first experience to new campuses.",
  },
  {
    year: "2029",
    title: "Student super app",
    description:
      "Full ecosystem nationwide: marketplace, ticketing, accommodation, student jobs, and embedded financial services, built campus by campus.",
  },
];

export const metrics: {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}[] = [
  { id: "restaurants", label: "Restaurant Partners", value: 40, suffix: "+" },
  { id: "students", label: "People on Waitlist", value: 2000, suffix: "+" },
  { id: "orders", label: "Orders Projected (Year 1)", value: 15000, suffix: "+" },
  { id: "riders", label: "Rider Network", value: 50, suffix: "+" },
  { id: "communities", label: "Campuses on Roadmap", value: 10, suffix: "+" },
];
