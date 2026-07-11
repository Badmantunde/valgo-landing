export function isBotSubmission(fields: Record<string, string>): boolean {
  return Boolean(fields.botcheck?.trim());
}

export function jsonError(message: string, status = 400) {
  return Response.json({ success: false, message }, { status });
}

export function jsonSuccess() {
  return Response.json({ success: true });
}
