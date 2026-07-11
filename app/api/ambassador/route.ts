import { ambassadorConfirmationEmail } from "@/lib/emails/ambassador-confirmation";
import { internalNotificationEmail } from "@/lib/emails/internal-notification";
import { isBotSubmission, jsonError, jsonSuccess } from "@/lib/api/form-guard";
import { EMAIL_FROM, EMAIL_TEAM, getResend } from "@/lib/resend";

const REQUIRED_FIELDS = [
  "fullName",
  "email",
  "phone",
  "faculty",
  "socialMedia",
  "previousExperience",
  "why",
] as const;

export async function POST(request: Request) {
  let body: Record<string, string>;

  try {
    body = (await request.json()) as Record<string, string>;
  } catch {
    return jsonError("Invalid request body.");
  }

  if (isBotSubmission(body)) {
    return jsonSuccess();
  }

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]?.trim()) {
      return jsonError("Please fill in all required fields.");
    }
  }

  const email = body.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Please enter a valid email address.");
  }

  try {
    const resend = getResend();
    const internal = internalNotificationEmail("New ValGo Ambassador application", {
      role: "Ambassador",
      ...body,
    });
    const confirmation = ambassadorConfirmationEmail(body.fullName);

    const [internalResult, confirmationResult] = await Promise.all([
      resend.emails.send({
        from: EMAIL_FROM,
        to: [EMAIL_TEAM],
        replyTo: email,
        subject: internal.subject,
        html: internal.html,
      }),
      resend.emails.send({
        from: EMAIL_FROM,
        to: [email],
        replyTo: EMAIL_TEAM,
        subject: confirmation.subject,
        html: confirmation.html,
      }),
    ]);

    if (internalResult.error || confirmationResult.error) {
      console.error("Resend error:", internalResult.error ?? confirmationResult.error);
      return jsonError("Failed to send email. Please try again.", 500);
    }

    return jsonSuccess();
  } catch (error) {
    console.error("Ambassador submission error:", error);
    const message =
      error instanceof Error && error.message.includes("not configured")
        ? error.message
        : "Something went wrong. Please try again.";
    return jsonError(message, 500);
  }
}
