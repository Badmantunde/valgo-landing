import { SITE } from "@/lib/constants";

export function emailLayout(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${SITE.name}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f6f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 8px;text-align:center;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#111827;letter-spacing:-0.02em;">${SITE.name}</p>
              <p style="margin:6px 0 0;font-size:13px;color:#6b7280;">${SITE.tagline}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 32px;color:#374151;font-size:15px;line-height:1.6;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;line-height:1.5;">
              <p style="margin:0;">Questions? Reply to this email or reach us at <a href="mailto:${SITE.email}" style="color:#2563eb;text-decoration:none;">${SITE.email}</a>.</p>
              <p style="margin:8px 0 0;">&copy; ${new Date().getFullYear()} ${SITE.legalName}. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function firstName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "there";
  return trimmed.split(/\s+/)[0]!;
}
