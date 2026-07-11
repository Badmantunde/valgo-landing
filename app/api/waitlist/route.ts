import { waitlistRoles, type WaitlistRole } from "@/data/faq";
import { internalNotificationEmail } from "@/lib/emails/internal-notification";
import { waitlistConfirmationEmail } from "@/lib/emails/waitlist-confirmation";
import { isBotSubmission, jsonError, jsonSuccess } from "@/lib/api/form-guard";
import { EMAIL_FROM, EMAIL_TEAM, getResend } from "@/lib/resend";

function isWaitlistRole(value: string): value is WaitlistRole {
  return waitlistRoles.some((role) => role.id === value);
}

function displayName(role: WaitlistRole, fields: Record<string, string>): string {
  if (role === "restaurant") {
    return fields.ownerName?.trim() || fields.businessName?.trim() || "there";
  }
  return fields.fullName?.trim() || "there";
}

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

  const roleId = body.roleId?.trim();
  if (!roleId || !isWaitlistRole(roleId)) {
    return jsonError("Please select a valid waitlist role.");
  }

  const config = waitlistRoles.find((role) => role.id === roleId)!;
  for (const field of config.fields) {
    if (field.required && !body[field.name]?.trim()) {
      return jsonError("Please fill in all required fields.");
    }
  }

  const email = body.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Please enter a valid email address.");
  }

  try {
    const resend = getResend();
    const internal = internalNotificationEmail(
      `New ValGo ${config.label} waitlist signup`,
      {
        role: config.label,
        ...body,
      }
    );
    const confirmation = waitlistConfirmationEmail({
      role: roleId,
      name: displayName(roleId, body),
    });

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
    console.error("Waitlist submission error:", error);
    const message =
      error instanceof Error && error.message.includes("not configured")
        ? error.message
        : "Something went wrong. Please try again.";
    return jsonError(message, 500);
  }
}
