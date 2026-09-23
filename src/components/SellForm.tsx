"use client";

import { ReactNode, useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { createListing } from "@/app/actions/listings";
import { categories } from "@/data/games";

export function SellForm() {
  const [state, formAction, pending] = useActionState(createListing, undefined);

  if (state?.success) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <h2 className="mt-4 text-lg font-semibold text-ink">
          Listing submitted for review
        </h2>
        <p className="mt-1 max-w-sm text-sm text-muted">
          Our team typically reviews new listings within 24-48 hours.
          We&apos;ll email you once it&apos;s live.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="space-y-6 rounded-2xl border border-border bg-white p-6"
    >
      {state?.message && (
        <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-600">
          {state.message}
        </p>
      )}

      <Field label="Game title" htmlFor="title" error={state?.errors?.title?.[0]}>
        <input
          id="title"
          name="title"
          required
          placeholder="e.g. Plant Tycoon"
          className="input"
        />
      </Field>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          label="Category"
          htmlFor="category"
          error={state?.errors?.category?.[0]}
        >
          <select
            id="category"
            name="category"
            required
            className="input"
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories
              .filter((c) => c !== "All Games")
              .map((c) => (
                <option key={c}>{c}</option>
              ))}
          </select>
        </Field>
        <Field
          label="Asking price (USD)"
          htmlFor="price"
          error={state?.errors?.price?.[0]}
        >
          <input
            id="price"
            name="price"
            type="number"
            min={0}
            required
            placeholder="24500"
            className="input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          label="Average monthly revenue (USD)"
          htmlFor="revenue"
          error={state?.errors?.monthlyRevenue?.[0]}
        >
          <input
            id="revenue"
            name="revenue"
            type="number"
            min={0}
            required
            placeholder="3200"
            className="input"
          />
        </Field>
        <Field
          label="Average monthly visits"
          htmlFor="visits"
          error={state?.errors?.monthlyVisits?.[0]}
        >
          <input
            id="visits"
            name="visits"
            type="number"
            min={0}
            required
            placeholder="180000"
            className="input"
          />
        </Field>
      </div>

      <Field
        label="Description"
        htmlFor="description"
        error={state?.errors?.description?.[0]}
      >
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Tell buyers what makes this game valuable: mechanics, monetization, audience, growth trend..."
          className="input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-60"
      >
        {pending ? "Submitting..." : "Submit Listing for Review"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </div>
  );
}
