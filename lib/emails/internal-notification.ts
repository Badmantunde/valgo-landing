import { emailLayout } from "@/lib/emails/layout";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function internalNotificationEmail(
  title: string,
  fields: Record<string, string>
) {
  const rows = Object.entries(fields)
    .filter(([key]) => key !== "botcheck")
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;vertical-align:top;width:38%;">${escapeHtml(formatLabel(key))}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#374151;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return {
    subject: title,
    html: emailLayout(`
      <p style="margin:0 0 16px;font-size:16px;font-weight:600;color:#111827;">${escapeHtml(title)}</p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;font-size:14px;">
        ${rows}
      </table>
    `),
  };
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}
