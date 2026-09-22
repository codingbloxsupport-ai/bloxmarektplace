import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Find a Game",
    body: "Browse verified listings and find the perfect opportunity.",
  },
  {
    title: "Complete Purchase",
    body: "Pay securely through escrow protection.",
  },
  {
    title: "Receive Ownership",
    body: "Get full ownership and start building your future.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-t border-border bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xs">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              How It Works
            </h2>
            <p className="mt-2 text-muted">
              A simple, secure way to buy or sell Roblox games.
            </p>
            <Link
              href="/how-it-works"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              See the full walkthrough
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-1 flex-col gap-8 sm:flex-row sm:items-start">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-1 gap-3 border-t-2 border-brand-500 pt-3 sm:flex-col"
              >
                <span className="text-xs font-bold text-brand-600">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
