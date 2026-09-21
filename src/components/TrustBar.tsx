import { Handshake, Lock, ShieldCheck, Tag } from "lucide-react";

const points = [
  {
    icon: Lock,
    title: "Escrow Protected",
    body: "Funds are held securely until ownership transfers.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Sellers",
    body: "Sellers confirm their identity and developer account.",
  },
  {
    icon: Handshake,
    title: "Full Ownership Transfer",
    body: "Receive complete ownership of the game, assets, and group.",
  },
  {
    icon: Tag,
    title: "No Listing Fees",
    body: "List for free. Commission only when sold.",
  },
];

export function TrustBar() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
      <div className="grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-white shadow-[0_2px_8px_-4px_rgba(11,18,32,0.06)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        {points.map((point) => (
          <div key={point.title} className="flex items-start gap-3 p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft-blue text-brand-600">
              <point.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{point.title}</p>
              <p className="mt-1 text-sm leading-snug text-muted">
                {point.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
