import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";
import { getCurrentUser } from "@/lib/dal";
import { SellForm } from "@/components/SellForm";

export default async function SellPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/sell");

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Sell Your Game
        </h1>
        <p className="mt-2 text-muted">
          List your Roblox game in front of thousands of vetted buyers.
          Escrow-protected payouts and a dedicated listing review team.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row">
        <div className="min-w-0 flex-1">
          <SellForm />
        </div>

        <aside className="w-full shrink-0 space-y-4 lg:w-80">
          <InfoCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Escrow-protected payouts"
            body="Funds are held securely until ownership transfer is confirmed by both parties."
          />
          <InfoCard
            icon={<Users className="h-5 w-5" />}
            title="Vetted buyer network"
            body="Your listing reaches thousands of buyers actively looking for established games."
          />
          <InfoCard
            icon={<TrendingUp className="h-5 w-5" />}
            title="No listing fees"
            body="It's free to list. We only take a small commission when your game sells."
          />
        </aside>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <div className="flex items-center gap-2 text-brand-600">{icon}</div>
      <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm text-muted">{body}</p>
    </div>
  );
}
