import { siteConfig } from "@/config/site";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. Information We Collect",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          <strong className="font-semibold text-ink">
            Account information
          </strong>{" "}
          you give us directly: name, email, and a securely hashed password
          (we never store your plain-text password).
        </li>
        <li>
          <strong className="font-semibold text-ink">
            Roblox account information
          </strong>{" "}
          if you use &quot;Continue with Roblox&quot;: your Roblox user ID
          and username, shared with us by Roblox under your consent.
        </li>
        <li>
          <strong className="font-semibold text-ink">Listing data</strong>{" "}
          you submit when selling a game: title, description, category,
          price, and the stats you report.
        </li>
        <li>
          <strong className="font-semibold text-ink">
            Basic usage data
          </strong>{" "}
          collected automatically by our hosting provider (e.g. request
          logs), used only for operating and securing the service.
        </li>
      </ul>
    ),
  },
  {
    heading: "2. How We Use Information",
    body: (
      <p>
        To operate your account and session, show your listings, run the
        admin review queue, link your Roblox identity, and communicate with
        you about your account or a listing. We don&apos;t use your data
        for advertising, and we don&apos;t sell it.
      </p>
    ),
  },
  {
    heading: "3. Cookies and Sessions",
    body: (
      <p>
        We set one essential cookie to keep you signed in: a signed,
        httpOnly session token. It&apos;s required for the site to
        function (staying logged in, submitting listings) and isn&apos;t
        used for tracking or advertising.
      </p>
    ),
  },
  {
    heading: "4. Third-Party Services",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          <strong className="font-semibold text-ink">
            Roblox Corporation
          </strong>{" "}
          — if you link your account, we exchange an authorization code
          with Roblox&apos;s OAuth service to confirm your Roblox identity.
          See Roblox&apos;s own privacy policy for how they handle that
          exchange on their end.
        </li>
        <li>
          <strong className="font-semibold text-ink">
            Our hosting and database provider
          </strong>{" "}
          — stores your account and listing data on our behalf; they
          don&apos;t use it for their own purposes.
        </li>
        <li>
          Once in-platform payments launch, a payment processor will be
          added here, along with an update to this policy.
        </li>
      </ul>
    ),
  },
  {
    heading: "5. Data Sharing",
    body: (
      <p>
        We share account or listing data only with the service providers
        above, or when required by law. We don&apos;t sell your personal
        information to third parties.
      </p>
    ),
  },
  {
    heading: "6. Data Retention",
    body: (
      <p>
        We keep your account and listing data for as long as your account
        is active, or as needed to resolve disputes and enforce our Terms.
      </p>
    ),
  },
  {
    heading: "7. Your Rights",
    body: (
      <p>
        You can update your account details by contacting support. Self-serve
        data export and account deletion aren&apos;t built into the product
        yet — in the meantime, email{" "}
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="text-brand-600 hover:underline"
        >
          {siteConfig.supportEmail}
        </a>{" "}
        to request a copy of your data or to delete your account, and
        we&apos;ll handle it manually.
      </p>
    ),
  },
  {
    heading: "8. Children's Privacy",
    body: (
      <p>
        {siteConfig.name} is not directed at children and requires you to
        meet Roblox Corporation&apos;s own age requirements for any linked
        Roblox account.
      </p>
    ),
  },
  {
    heading: "9. Security",
    body: (
      <p>
        Passwords are hashed with bcrypt, sessions are signed JWTs in
        httpOnly cookies, and all traffic is served over HTTPS. No system
        is perfectly secure, but we take reasonable steps to protect your
        data.
      </p>
    ),
  },
  {
    heading: "10. Changes to this Policy",
    body: (
      <p>
        We&apos;ll update this policy as the platform evolves — especially
        once payment processing launches — and update the date below when
        we do.
      </p>
    ),
  },
  {
    heading: "11. Contact",
    body: (
      <p>
        Questions about this policy or your data? Reach us at{" "}
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

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-muted">
        How {siteConfig.name} collects, uses, and protects your
        information.
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
