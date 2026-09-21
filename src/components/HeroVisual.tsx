import { Lock, ShieldCheck } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
      <div className="absolute -top-14 -left-14 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl" />
      <div className="absolute -bottom-14 -right-10 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />
      <div className="bg-dot-grid absolute inset-0 -z-10 rounded-[2rem] opacity-60" />

      <div className="relative">
        {/* Laptop screen */}
        <div className="relative rounded-t-2xl rounded-b-md border-[7px] border-slate-800 bg-slate-800 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.35)]">
          <div className="overflow-hidden rounded-lg bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 h-5 flex-1 rounded-full bg-slate-100" />
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <span className="h-3 w-24 rounded-full bg-slate-200" />
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-500 to-purple-500" />
              </div>

              <div className="flex gap-2">
                <span className="h-6 w-16 rounded-full bg-brand-100" />
                <span className="h-6 w-16 rounded-full bg-slate-100" />
                <span className="h-6 w-16 rounded-full bg-slate-100" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "from-brand-400 to-brand-600",
                  "from-purple-400 to-purple-600",
                  "from-emerald-400 to-emerald-600",
                  "from-amber-400 to-amber-600",
                ].map((gradient) => (
                  <div
                    key={gradient}
                    className="overflow-hidden rounded-xl border border-slate-100"
                  >
                    <div className={`h-16 bg-gradient-to-br ${gradient}`} />
                    <div className="space-y-1.5 p-2.5">
                      <span className="block h-2 w-3/4 rounded-full bg-slate-200" />
                      <span className="block h-2 w-1/2 rounded-full bg-slate-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative mx-auto h-4 w-[104%] -translate-x-[2%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md" />
        <div className="mx-auto h-1.5 w-1/3 rounded-b-lg bg-slate-400" />
      </div>

      <div className="absolute -right-4 -top-8 hidden h-16 w-16 rotate-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg sm:block" />
      <div className="absolute -bottom-4 -left-4 hidden h-12 w-12 -rotate-12 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg sm:block" />

      <div className="absolute -left-8 top-2 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:flex">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Lock className="h-3.5 w-3.5" />
        </span>
        <span className="whitespace-nowrap text-xs font-semibold text-slate-700">
          Escrow Protected
        </span>
      </div>

      <div className="absolute -right-8 bottom-0 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:flex">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <ShieldCheck className="h-3.5 w-3.5" />
        </span>
        <span className="whitespace-nowrap text-xs font-semibold text-slate-700">
          Verified Sellers
        </span>
      </div>
    </div>
  );
}
