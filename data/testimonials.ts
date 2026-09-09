export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  faculty: string;
  location: string;
  rating: number;
  tag: string;
  highlight: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "I've already joined the waitlist. If ValGo launches before exams, ordering jollof without leaving Oloko would honestly make my entire semester. Seeing the live prototype gave me so much confidence.",
    author: "Adaeze O.",
    role: "Computer Science • 300L",
    faculty: "Faculty of Science",
    location: "Oloko Hall Hostels",
    rating: 5,
    tag: "Verified Student • OOU 2026",
    highlight: "Exam-week lifesaver without leaving hostel",
  },
  {
    id: "2",
    quote:
      "My friends and I keep asking when the app is dropping. We are completely tired of sending three different riders on WhatsApp for one order and negotiating bike fares. ValGo fixes everything.",
    author: "Tunde A.",
    role: "Mass Communication • 400L",
    faculty: "Faculty of Social Sciences",
    location: "Ita-Merin Hostels",
    rating: 5,
    tag: "Verified Student • OOU 2026",
    highlight: "Ends WhatsApp rider coordination chaos",
  },
  {
    id: "3",
    quote:
      "Can't lie, I'm excited. Food, groceries, and pharmacy in one student app? That's the kind of thing we've desperately needed on this campus for years. Transparent pricing makes all the difference.",
    author: "Fatima B.",
    role: "Medicine & Surgery • 500L",
    faculty: "Faculty of Clinical Sciences",
    location: "Sagamu / Permanent Site",
    rating: 5,
    tag: "Verified Student • OOU 2026",
    highlight: "All campus essentials in one unified app",
  },
  {
    id: "4",
    quote:
      "I saw the screenshots of the checkout screen and signed up the exact same day. Finally something that looks and feels like it was engineered intentionally for university students.",
    author: "Emeka K.",
    role: "Economics • 200L",
    faculty: "Faculty of Social & Management",
    location: "Mini Campus Hostels",
    rating: 5,
    tag: "Verified Student • OOU 2026",
    highlight: "Modern UI built specifically for students",
  },
  {
    id: "5",
    quote:
      "Our hostel group chat has been buzzing about ValGo all week. Everyone is happy there's something professional coming, not another random delivery phone number that goes offline during rush hours.",
    author: "Chioma T.",
    role: "Nursing Science • 300L",
    faculty: "Faculty of Basic Medical Sciences",
    location: "Oloko Hall Phase 2",
    rating: 5,
    tag: "Verified Student • OOU 2026",
    highlight: "Reliable service that won't go offline",
  },
  {
    id: "6",
    quote:
      "Between four-hour lab sessions and back-to-back lectures, I simply don't have the time to trek down to Ita-Merin anymore. Having food brought straight to my faculty gate is game-changing.",
    author: "Ibrahim S.",
    role: "Microbiology • 400L",
    faculty: "Faculty of Science",
    location: "Permanent Site Gate",
    rating: 5,
    tag: "Verified Student • OOU 2026",
    highlight: "Doorstep delivery between tight lecture hours",
  },
];

