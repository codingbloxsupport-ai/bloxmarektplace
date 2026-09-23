import { FileText } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";
import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-muted">
        The rules for buying, selling, and using {siteConfig.name}.
      </p>

      <div className="mt-10">
        <EmptyState
          icon={<FileText className="h-8 w-8" />}
          title="Not published yet"
          body="We're still drafting our full terms of service. In the meantime, reach out to support with any questions about how the marketplace works."
          action={{ label: "Contact Support", href: "/resources" }}
        />
      </div>
    </div>
  );
}
