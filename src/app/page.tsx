import Link from "next/link";
import {
  ArrowRight,
  Check,
  Handshake,
  Lock,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { HeroVisual } from "@/components/HeroVisual";

const trustPoints = [
  "Secure escrow payments",
  "Verified sellers",
  "Full ownership transfer",
  "No listing fees",
];

const valueProps = [
  {
    icon: Lock,
    title: "Escrow protected",
    body: "Payment is held securely until ownership actually transfers — no chargebacks, no disappearing sellers.",
  },
  {
    icon: ShieldCheck,
    title: "Verified sellers",
    body: "Sellers confirm their identity and Roblox developer account before they can list.",
  },
  {
    icon: Handshake,
    title: "Full ownership transfer",
    body: "Buyers receive complete ownership of the game, its assets, and associated group.",
  },
  {
    icon: TrendingUp,
    title: "No listing fees",
    body: "It's free to list a game. We only take a small commission when it sells.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Find a game",
    body: "Browse verified listings by category, price, and revenue to find the right fit.",
  },
  {
    icon: MessageCircle,
    title: "Talk it through",
    body: "Message the seller directly to ask questions and agree on terms.",
  },
  {
    icon: Lock,
    title: "Close with escrow",
    body: "Pay securely — funds release to the seller only once ownership is confirmed transferred.",
  },
];

export default function LandingPage() {
  return (
    <div>
      <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-100">
              <Sparkles className="h-3.5 w-3.5" />
              Just launched — be one of our first sellers
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Buy and sell Roblox games{" "}
              <span className="bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">
                with confidence.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500 lg:mx-0">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/browse"
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 sm:w-auto"
              >
                Browse Marketplace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/sell"
                className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:w-auto"
              >
                Sell Your Game
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 lg:justify-start">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              How it works
            </h2>
            <p className="mt-2 text-slate-500">
              A simple, secure way to buy or sell a Roblox game.
            </p>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            <span className="absolute left-[16.5%] right-[16.5%] top-6 hidden h-px bg-slate-200 sm:block" />
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex items-start gap-4 sm:flex-col sm:items-start">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white shadow-sm">
                  {i + 1}
                </span>
                <div className="sm:mt-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <step.icon className="h-4 w-4 text-brand-500" />
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/how-it-works"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            See the full walkthrough
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 rounded-2xl bg-brand-50 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              We&apos;re just getting started
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              There are no listings yet — list your game today and be the
              first thing buyers see.
            </p>
          </div>
          <Link
            href="/sell"
            className="flex items-center gap-1.5 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Sell Your Game
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
