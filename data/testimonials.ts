export type TestimonialType = "student" | "restaurant" | "rider" | "university";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  type: TestimonialType;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Between 8am and 4pm lectures, I barely have time to walk to Ita-Merin. If ValGo actually delivers to Oloko, this will save my week.",
    author: "Adaeze O.",
    role: "Computer Science · OOU",
    type: "student",
  },
  {
    id: "2",
    quote:
      "Students already call to ask if we deliver. ValGo gives us one place to take orders without chasing people on WhatsApp all day.",
    author: "Chioma T.",
    role: "Owner, Mama T's Kitchen",
    type: "restaurant",
  },
  {
    id: "3",
    quote:
      "I ride between classes anyway. Daily payouts and choosing my own hours is exactly what I need as a student.",
    author: "Tunde A.",
    role: "Student rider · OOU",
    type: "rider",
  },
  {
    id: "4",
    quote:
      "Anything that reduces unnecessary movement off campus and supports local vendors is worth trying. We're watching the launch closely.",
    author: "Dr. Ngozi E.",
    role: "Student Affairs · OOU",
    type: "university",
  },
  {
    id: "5",
    quote:
      "Our study group orders together a lot. Split pay in one checkout would stop the 'who owes who' arguments every Friday.",
    author: "Fatima B.",
    role: "Medicine · OOU",
    type: "student",
  },
  {
    id: "6",
    quote:
      "Most of our morning sales are students. If they can order pastries from their hostel, that's more orders without extra staff.",
    author: "Emeka K.",
    role: "Manager, Kaffy Bakery",
    type: "restaurant",
  },
];
