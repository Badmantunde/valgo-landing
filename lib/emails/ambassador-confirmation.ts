import { LAUNCH } from "@/lib/constants";
import { emailLayout, firstName } from "@/lib/emails/layout";

export function ambassadorConfirmationEmail(fullName: string) {
  const greeting = firstName(fullName);

  return {
    subject: `We received your ValGo Ambassador application, ${greeting}!`,
    html: emailLayout(`
      <p style="margin:0 0 16px;">Hi ${greeting},</p>
      <p style="margin:0 0 16px;">Thanks for applying to become a <strong>ValGo Ambassador</strong>. We've received your application and our team is reviewing it.</p>
      <p style="margin:0 0 16px;">Ambassadors help represent ValGo on campus, drive sign-ups, and earn referral commissions — with exclusive merch, internship opportunities, and real leadership experience along the way.</p>
      <p style="margin:0 0 16px;">We'll get back to you with next steps before our launch at ${LAUNCH.university} in ${LAUNCH.city}.</p>
      <p style="margin:0;">Thanks again for your interest in building ValGo with us.</p>
    `),
  };
}
