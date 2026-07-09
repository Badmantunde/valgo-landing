import { OOU_OPTIONS } from "@/lib/constants";
import type { WaitlistField } from "@/data/faq";

export const ambassadorFormFields: WaitlistField[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    name: "email",
    label: "Personal Email",
    type: "email",
    placeholder: "you@gmail.com",
    hint: "Use a personal email you check regularly. University emails often have limited access.",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "+234 800 000 0000",
    required: true,
  },
  {
    name: "faculty",
    label: "Faculty / Area",
    type: "select",
    required: true,
    options: [...OOU_OPTIONS],
  },
  {
    name: "socialMedia",
    label: "Social media presence",
    type: "textarea",
    placeholder: "Instagram: @yourhandle · X: @yourhandle · TikTok: @yourhandle",
    hint: "Share links or handles to the platforms you use most.",
    required: true,
  },
  {
    name: "previousExperience",
    label: "Event volunteer or ambassador experience",
    type: "textarea",
    placeholder:
      "Have you volunteered at campus events, led outreach, or been a brand ambassador before? Tell us briefly.",
    required: true,
  },
  {
    name: "studentCommunity",
    label: "Student community membership",
    type: "textarea",
    placeholder: "e.g. SUG, faculty association, fellowship, club, or hostel community",
    hint: "An advantage if you already belong to a community where you can start spreading the word.",
    required: false,
  },
  {
    name: "why",
    label: "Why do you want to be a ValGo ambassador?",
    type: "textarea",
    placeholder: "What excites you about representing ValGo on campus?",
    required: true,
  },
];
