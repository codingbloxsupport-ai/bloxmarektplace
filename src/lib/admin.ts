import "server-only";

type AdminCheckUser = {
  email: string | null;
  role: "USER" | "ADMIN";
};

export function isAdminEmail(email: string) {
  const admins = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return admins.includes(email.toLowerCase());
}

/**
 * ADMIN_EMAILS stays as a bootstrap allowlist so the first admin can get in
 * before any User row has role=ADMIN set. Promoting someone through
 * /admin/users sets the real DB flag, which is the source of truth from
 * then on.
 */
export function isAdmin(user: AdminCheckUser) {
  return user.role === "ADMIN" || (!!user.email && isAdminEmail(user.email));
}
