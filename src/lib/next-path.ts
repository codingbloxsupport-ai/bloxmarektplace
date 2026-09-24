// Guards a post-login redirect target against open-redirect abuse: only a
// same-site relative path is allowed, everything else falls back to "/".
export function safeNextPath(value: FormDataEntryValue | string | null) {
  return typeof value === "string" &&
    value.startsWith("/") &&
    !value.startsWith("//")
    ? value
    : "/";
}
