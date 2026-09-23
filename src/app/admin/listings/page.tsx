import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/dal";
import { isAdminEmail } from "@/lib/admin";
import { prisma } from "@/lib/db";
import { formatPrice } from "@/lib/format";
import { approveListing, rejectListing } from "@/app/actions/admin";

export default async function AdminListingsPage() {
  const user = await getCurrentUser();
  if (!user || !isAdminEmail(user.email)) notFound();

  const pending = await prisma.listing.findMany({
    where: { status: "PENDING" },
    include: { seller: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Pending Listings
      </h1>
      <p className="mt-2 text-muted">
        {pending.length} listing{pending.length === 1 ? "" : "s"} awaiting
        review.
      </p>

      <div className="mt-8 space-y-4">
        {pending.map((listing) => (
          <div
            key={listing.id}
            className="rounded-2xl border border-border bg-white p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-bold text-ink">{listing.title}</p>
                <p className="text-sm text-muted">
                  {listing.category} · {formatPrice(listing.price)} · by{" "}
                  {listing.seller.name} ({listing.seller.email})
                </p>
                <p className="mt-2 max-w-xl text-sm text-muted">
                  {listing.description}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <form
                  action={async () => {
                    "use server";
                    await approveListing(listing.id);
                  }}
                >
                  <button
                    type="submit"
                    className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
                  >
                    Approve
                  </button>
                </form>
                <form
                  action={async () => {
                    "use server";
                    await rejectListing(listing.id);
                  }}
                >
                  <button
                    type="submit"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-alt"
                  >
                    Reject
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}

        {pending.length === 0 && (
          <p className="text-sm text-muted">No listings waiting for review.</p>
        )}
      </div>
    </div>
  );
}
