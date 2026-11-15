import { siteConfig } from "@/config/site";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. Acceptance of these Terms",
    body: (
      <p>
        By creating an account, listing a game, or buying a listing on{" "}
        {siteConfig.name}, you agree to these Terms of Service. If you do
        not agree, do not use {siteConfig.name}. {siteConfig.name} is
        operated by {siteConfig.company}.
      </p>
    ),
  },
  {
    heading: "2. Eligibility",
    body: (
      <p>
        You must be able to form a legally binding contract to use{" "}
        {siteConfig.name}, and you must meet Roblox Corporation&apos;s own
        age and account requirements for the Roblox account associated with
        any listing you create or buy. You&apos;re responsible for
        complying with Roblox&apos;s Terms of Use in addition to these
        Terms.
      </p>
    ),
  },
  {
    heading: "3. Your Account",
    body: (
      <p>
        You&apos;re responsible for keeping your login credentials secure
        and for all activity under your account. Tell us right away at{" "}
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="text-brand-600 hover:underline"
        >
          {siteConfig.supportEmail}
        </a>{" "}
        if you suspect unauthorized access. Linking a Roblox account via
        &quot;Continue with Roblox&quot; confirms which Roblox account you
        control — it does not by itself verify ownership of any specific
        game or experience.
      </p>
    ),
  },
  {
    heading: "4. Listings",
    body: (
      <div className="space-y-3">
        <p>
          Sellers must own, or have full legal authority to sell, every
          game, experience, and associated asset they list. Listings go
          through manual review before appearing publicly; approval is not
          a guarantee of ownership, accuracy, or quality, and{" "}
          {siteConfig.name} may remove any listing at any time.
        </p>
        <p>
          Listed revenue, visit counts, and other statistics are
          self-reported by the seller unless stated otherwise.{" "}
          {siteConfig.name} does not independently audit these figures
          today, and buyers should do their own diligence before paying.
        </p>
      </div>
    ),
  },
  {
    heading: "5. Payments and Escrow",
    body: (
      <p>
        {siteConfig.name} is built around an escrow model — funds held
        securely until ownership transfer is confirmed — but in-platform
        payment processing is not live yet. Until it launches,{" "}
        {siteConfig.name} does not collect, hold, or move any funds between
        buyers and sellers; any payment and transfer arranged outside the
        platform today is solely between those parties, at their own risk.
        We&apos;ll update these Terms when payment processing goes live.
      </p>
    ),
  },
  {
    heading: "6. Fees",
    body: (
      <p>
        Creating an account and submitting a listing is free. Any
        commission is only charged once a sale completes through{" "}
        {siteConfig.name}&apos;s payment processing, once it is available.
      </p>
    ),
  },
  {
    heading: "7. Prohibited Conduct",
    body: (
      <p>
        You may not: list a game or asset you don&apos;t own or can&apos;t
        legally sell; defraud or misrepresent a listing to another user;
        scrape, resell, or redistribute {siteConfig.name}&apos;s data;
        attempt to bypass the escrow process once it is live to avoid
        buyer protection or fees; or use {siteConfig.name} in any way that
        violates Roblox&apos;s Terms of Use.
      </p>
    ),
  },
  {
    heading: "8. Roblox Trademark",
    body: (
      <p>
        {siteConfig.name} is an independent marketplace and is not
        operated by, affiliated with, or endorsed by Roblox Corporation.
        &quot;Roblox&quot; and related marks are trademarks of Roblox
        Corporation.
      </p>
    ),
  },
  {
    heading: "9. Suspension and Termination",
    body: (
      <p>
        We may suspend or terminate any account that violates these Terms,
        Roblox&apos;s Terms of Use, or applicable law, with or without
        notice.
      </p>
    ),
  },
  {
    heading: "10. Disclaimers and Limitation of Liability",
    body: (
      <p>
        {siteConfig.name} is provided &quot;as is&quot; without warranties
        of any kind. To the fullest extent permitted by law,{" "}
        {siteConfig.company} is not liable for indirect, incidental, or
        consequential damages arising from your use of the platform,
        including disputes between buyers and sellers.
      </p>
    ),
  },
  {
    heading: "11. Changes to these Terms",
    body: (
      <p>
        We may update these Terms as the platform evolves — particularly
        once payment processing and ownership verification launch.
        We&apos;ll post the updated date below when that happens.
      </p>
    ),
  },
  {
    heading: "12. Contact",
    body: (
      <p>
        Questions about these Terms? Reach us at{" "}
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="text-brand-600 hover:underline"
        >
          {siteConfig.supportEmail}
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-muted">
        The rules for buying, selling, and using {siteConfig.name}.
      </p>
      <p className="mt-1 text-sm text-muted">Last updated: November 2026</p>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-bold text-ink">{section.heading}</h2>
            <div className="mt-2 text-sm leading-relaxed text-muted">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
