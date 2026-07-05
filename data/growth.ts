export const timeline = [
  {
    year: "2026",
    title: "Launch at OOU",
    description:
      "Pilot launch in Ago Iwoye with food delivery, groceries, pharmacy, and campus services. Our first step toward serving Nigerian universities nationwide.",
  },
  {
    year: "2027",
    title: "Deepen Ago Iwoye",
    description:
      "Onboard 100+ local restaurant and vendor partners, expand rider network, and launch laundry and printing services on campus.",
  },
  {
    year: "2028",
    title: "Ogun State Expansion",
    description:
      "Expand to neighbouring university towns in Ogun State while strengthening the OOU ecosystem.",
  },
  {
    year: "2029",
    title: "Student Super App",
    description:
      "Full ecosystem launch: marketplace, ticketing, accommodation, student jobs, and embedded financial services, starting from our OOU foundation.",
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
  { id: "communities", label: "First Launch Campus", value: 1, suffix: "" },
];
