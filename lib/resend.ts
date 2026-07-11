import { Resend } from "resend";

let client: Resend | null = null;

export function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Email is not configured yet.");
  }
  if (!client) {
    client = new Resend(apiKey);
  }
  return client;
}

export const EMAIL_FROM = "ValGo <hello@usevalgo.com>";
export const EMAIL_TEAM = "hello@usevalgo.com";
