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
                className="flex flex-1 items-start gap-4 sm:flex-col sm:items-start"
              >
                <div className="flex items-center gap-3 sm:w-full">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-border sm:block" />
                  )}
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted sm:block" />
                  )}
                </div>
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
