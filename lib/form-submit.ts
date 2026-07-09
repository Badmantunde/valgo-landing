import { SITE } from "@/lib/constants";

/** FormSubmit endpoint — native POST is more reliable than the AJAX API */
export const FORM_SUBMIT_ACTION = `https://formsubmit.co/${SITE.email}`;

export function formSubmitNextUrl(path: string, query: string) {
  const base = SITE.url.replace(/\/$/, "");
  const pathWithSlash = path.startsWith("/") ? path : `/${path}`;
  return `${base}${pathWithSlash}?${query}`;
}
