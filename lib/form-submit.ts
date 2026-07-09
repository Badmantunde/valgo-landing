import { SITE } from "@/lib/constants";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function formDataToObject(form: HTMLFormElement): Record<string, string> {
  const fields: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    fields[key] = value.toString();
  });
  return fields;
}

/** Submit form data to Web3Forms (replaces unreachable FormSubmit.co) */
export async function submitForm(
  subject: string,
  fields: Record<string, string>
): Promise<void> {
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
      subject,
      from_name: "ValGo Website",
      ...fields,
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
