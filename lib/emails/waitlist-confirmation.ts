import { LAUNCH, VISION } from "@/lib/constants";
import type { WaitlistRole } from "@/data/faq";
import { emailLayout, firstName } from "@/lib/emails/layout";

interface WaitlistConfirmationParams {
  role: WaitlistRole;
  name: string;
}

function roleMessage(role: WaitlistRole, name: string): { subject: string; body: string } {
  const greeting = firstName(name);

  switch (role) {
    case "customer":
      return {
        subject: `You're on the ValGo waitlist, ${greeting}!`,
        body: `
          <p style="margin:0 0 16px;">Hi ${greeting},</p>
          <p style="margin:0 0 16px;">Thanks for joining the ValGo waitlist as a <strong>customer</strong>. You're officially on the list for early access to food, groceries, pharmacy, and campus essentials.</p>
          <p style="margin:0 0 16px;">${VISION.launchNote} We'll email you with launch updates, early access perks, and everything you need to start ordering on campus.</p>
          <p style="margin:0;">We're glad you're here. Welcome to the ValGo community.</p>
        `,
      };
    case "restaurant":
      return {
        subject: `Thanks for your partnership interest, ${greeting}!`,
        body: `
          <p style="margin:0 0 16px;">Hi ${greeting},</p>
          <p style="margin:0 0 16px;">Thanks for signing up to partner with ValGo as a <strong>restaurant</strong>. We're building a student-first platform and would love to help you reach more customers on campus.</p>
          <p style="margin:0 0 16px;">Our partnerships team will review your details and reach out within 48 hours with next steps for onboarding at ${LAUNCH.university} in ${LAUNCH.city}.</p>
          <p style="margin:0;">We look forward to working with you.</p>
        `,
      };
    case "rider":
      return {
        subject: `You're on the ValGo rider waitlist, ${greeting}!`,
        body: `
          <p style="margin:0 0 16px;">Hi ${greeting},</p>
          <p style="margin:0 0 16px;">Thanks for applying to join ValGo as a <strong>rider</strong>. Flexible campus delivery is a great way to earn around your class schedule.</p>
          <p style="margin:0 0 16px;">We'll review your application and reach out with onboarding details, training, and gear info before we launch at ${LAUNCH.university}.</p>
          <p style="margin:0;">Thanks for putting yourself forward — we'll be in touch soon.</p>
        `,
      };
  }
}

export function waitlistConfirmationEmail(params: WaitlistConfirmationParams) {
  const { subject, body } = roleMessage(params.role, params.name);

  return {
    subject,
    html: emailLayout(body),
  };
}
