import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/dal";
import { isAdmin, isAdminEmail } from "@/lib/admin";
import { prisma } from "@/lib/db";
import { setUserRole } from "@/app/actions/admin";

export default async function AdminUsersPage() {
  const user = await getCurrentUser();
  if (!user || !isAdmin(user)) notFound();

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      name: true,
      email: true,
      robloxUsername: true,
      role: true,
      createdAt: true,
    },
  });

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Admin Access
        </h1>
        <Link
          href="/admin/listings"
          className="text-sm font-semibold text-brand-600 hover:underline"
        >
          &larr; Pending listings
        </Link>
      </div>
      <p className="mt-2 max-w-xl text-muted">
        Promote an account to admin to give it access to this page and to
        the pending listings queue. Emails listed in the{" "}
        <code className="rounded bg-surface-alt px-1 py-0.5 text-xs">
          ADMIN_EMAILS
        </code>{" "}
        environment variable always have admin access as a bootstrap
        allowlist, even if their role below shows &quot;User&quot;.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-surface-alt text-xs font-semibold uppercase tracking-wide text-muted">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Contact</th>
              <th className="px-5 py-3">Role</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((u) => {
              const bootstrapAdmin = !!u.email && isAdminEmail(u.email);
              const effectiveAdmin = u.role === "ADMIN" || bootstrapAdmin;
              return (
                <tr key={u.id}>
                  <td className="px-5 py-3 font-medium text-ink">
                    {u.name}
                    {u.id === user.id && (
                      <span className="ml-2 text-xs font-normal text-muted">
                        (you)
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-muted">
                    {u.email ??
                      (u.robloxUsername
                        ? `Roblox: @${u.robloxUsername}`
                        : "no contact info")}
                  </td>
                  <td className="px-5 py-3">
                    {effectiveAdmin ? (
                      <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                        Admin{bootstrapAdmin && u.role !== "ADMIN" ? " (allowlist)" : ""}
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-semibold text-muted">
                        User
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-right">
                    {bootstrapAdmin ? (
                      <span className="text-xs text-muted">
                        set via ADMIN_EMAILS
                      </span>
                    ) : (
                      <form
                        action={async () => {
                          "use server";
                          await setUserRole(
                            u.id,
                            u.role === "ADMIN" ? "USER" : "ADMIN"
                          );
                        }}
                      >
                        <button
                          type="submit"
                          disabled={u.id === user.id && u.role === "ADMIN"}
                          className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-ink hover:bg-surface-alt disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          {u.role === "ADMIN"
                            ? "Revoke admin"
                            : "Make admin"}
                        </button>
                      </form>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
