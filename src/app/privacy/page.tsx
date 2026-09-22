import { ShieldCheck } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";
import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-muted">
        How {siteConfig.name} collects, uses, and protects your information.
      </p>

      <div className="mt-10">
        <EmptyState
          icon={<ShieldCheck className="h-6 w-6" />}
          title="Not published yet"
          body="We're still drafting our full privacy policy. In the meantime, reach out to support with any questions about your data."
          action={{ label: "Contact Support", href: "/resources" }}
        />
      </div>
    </div>
  );
}
