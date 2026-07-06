export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "I've already joined the waitlist. If ValGo launches before exams, ordering jollof without leaving Oloko would honestly make my semester.",
    author: "Adaeze O.",
    role: "Computer Science · OOU",
  },
  {
    id: "2",
    quote:
      "My friends and I keep asking when the app is dropping. We're tired of sending three different riders on WhatsApp for one order.",
    author: "Tunde A.",
    role: "Mass Communication · OOU",
  },
  {
    id: "3",
    quote:
      "Can't lie, I'm excited. Food, groceries, pharmacy in one app? That's the kind of thing we've needed on this campus for years.",
    author: "Fatima B.",
    role: "Medicine · OOU",
  },
  {
    id: "4",
    quote:
      "I saw the screenshots and signed up the same day. Finally something that looks like it was actually built for students like us.",
    author: "Emeka K.",
    role: "Economics · OOU",
  },
  {
    id: "5",
    quote:
      "Our hostel group chat has been buzzing about ValGo all week. Everyone's happy there's something proper coming, not another random delivery number.",
    author: "Chioma T.",
    role: "Nursing · OOU",
  },
  {
    id: "6",
    quote:
      "I'm just glad it's almost here. Between lectures and lab hours, I don't have time to trek to Ita-Merin anymore. Really looking forward to launch day.",
    author: "Ibrahim S.",
    role: "Microbiology · OOU",
  },
];
