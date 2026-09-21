import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Handshake,
  Lock,
  MessageCircle,
  Search,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

const buyerSteps = [
  {
    icon: Search,
    title: "Browse verified listings",
    body: "Filter by category, price, and revenue to find a game that fits your budget and goals.",
  },
  {
    icon: MessageCircle,
    title: "Message the seller",
    body: "Ask questions about analytics, monetization, and player retention before you commit.",
  },
  {
    icon: Lock,
    title: "Pay into escrow",
    body: "Your payment is held securely until the seller transfers full ownership to you.",
  },
  {
    icon: Handshake,
    title: "Receive ownership",
    body: "Once you confirm the transfer, funds are released to the seller and the deal is complete.",
  },
];

const sellerSteps = [
  {
    icon: UploadCloud,
    title: "Submit your listing",
    body: "Share your game's stats, description, and asking price. It's free to list.",
  },
  {
    icon: ClipboardCheck,
    title: "Get reviewed and approved",
    body: "Our team verifies your listing to keep the marketplace trustworthy for buyers.",
  },
  {
    icon: MessageCircle,
    title: "Field offers from buyers",
    body: "Respond to questions and negotiate directly through your listing's inbox.",
  },
  {
    icon: ShieldCheck,
    title: "Get paid securely",
    body: "Once you transfer ownership, escrow releases your payout — no chargebacks.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          How It Works
        </h1>
        <p className="mt-2 text-slate-500">
          A safe, straightforward process for buying and selling established
          Roblox games — backed by escrow protection at every step.
        </p>
      </div>

      <Section title="For Buyers" steps={buyerSteps} />
      <Section title="For Sellers" steps={sellerSteps} />

      <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-brand-50 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Ready to get started?
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Browse active listings or list your own game in minutes.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Browse Games
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/sell"
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Sell Your Game
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  steps,
}: {
  title: string;
  steps: { icon: typeof Search; title: string; body: string }[];
}) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-slate-200 bg-white p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <step.icon className="h-5 w-5" />
            </span>
            <span className="absolute right-5 top-5 text-2xl font-extrabold text-slate-100">
              {i + 1}
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-800">
              {step.title}
            </p>
            <p className="mt-1 text-sm text-slate-500">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
