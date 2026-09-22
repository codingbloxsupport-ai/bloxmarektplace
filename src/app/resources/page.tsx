import Link from "next/link";
import { BookOpen, HelpCircle, Mail, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

const faqs = [
  {
    q: "How does escrow protection work?",
    a: "When a buyer purchases a listing, funds are held by our escrow service. They're only released to the seller once the buyer confirms they've received full ownership of the game.",
  },
  {
    q: "What does 'Verified Seller' mean?",
    a: "Verified sellers have confirmed their identity and Roblox developer account ownership with our team, and have a track record of completed sales.",
  },
  {
    q: "Are there fees to sell a game?",
    a: "Listing a game is free. We take a small commission only when your listing successfully sells.",
  },
  {
    q: "What happens if a deal falls through?",
    a: "If ownership isn't transferred as agreed, escrowed funds are returned to the buyer. Our support team helps mediate any disputes.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Resources
        </h1>
        <p className="mt-2 text-muted">
          Guides, policies, and answers to help you buy and sell with
          confidence.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ResourceCard
          icon={<BookOpen className="h-5 w-5" />}
          id="seller-guide"
          title="Seller Guide"
          body="Tips for pricing, presenting, and closing a sale quickly."
        />
        <ResourceCard
          icon={<ShieldCheck className="h-5 w-5" />}
          id="buyer-protection"
          title="Buyer Protection"
          body="How escrow and dispute resolution keep your purchase safe."
        />
        <ResourceCard
          icon={<Mail className="h-5 w-5" />}
          id="blog"
          title="Blog"
          body="Market trends, sale spotlights, and platform updates."
        />
      </div>

      <div className="mt-14">
        <h2 className="flex items-center gap-2 text-xl font-bold text-ink">
          <HelpCircle className="h-5 w-5 text-brand-500" />
          Frequently Asked Questions
        </h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5">
              <p className="text-sm font-semibold text-ink">{faq.q}</p>
              <p className="mt-1.5 text-sm text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">
            Still have questions?
          </p>
          <p className="text-sm text-muted">
            Our support team responds within a few hours.
          </p>
        </div>
        <Link
          href="mailto:support@example.com"
          className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}

function ResourceCard({
  icon,
  id,
  title,
  body,
}: {
  icon: ReactNode;
  id: string;
  title: string;
  body: string;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-2xl border border-border bg-white p-5"
    >
      <div className="flex items-center gap-2 text-brand-600">{icon}</div>
      <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm text-muted">{body}</p>
    </div>
  );
}
