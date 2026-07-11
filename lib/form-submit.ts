import { SITE } from "@/lib/constants";

export function formDataToObject(form: HTMLFormElement): Record<string, string> {
  const fields: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    fields[key] = value.toString();
  });
  return fields;
}

async function submitToApi(
  endpoint: string,
  fields: Record<string, string>
): Promise<void> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(fields),
  });

  const data = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Submission failed. Please try again.");
  }
}

export async function submitWaitlist(
  roleId: string,
  fields: Record<string, string>
): Promise<void> {
  await submitToApi("/api/waitlist", { roleId, ...fields });
}

export async function submitAmbassador(
  fields: Record<string, string>
): Promise<void> {
  await submitToApi("/api/ambassador", fields);
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/** Footer newsletter — still uses Web3Forms until migrated */
export async function submitNewsletter(email: string): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      `Form is not configured yet. Please email us directly at ${SITE.email}.`
    );
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New ValGo newsletter signup",
      from_name: "ValGo Website",
      email,
      source: "Footer newsletter",
    }),
  });

  const data = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Submission failed. Please try again.");
  }
}

export function formSubmitErrorMessage(): string {
  return (
    "Something went wrong. Please try again, or email us directly at " +
    SITE.email +
    "."
  );
}
