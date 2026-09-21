export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:mx-0">
      <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="absolute -bottom-10 -right-6 h-56 w-56 rounded-full bg-purple-200/50 blur-3xl" />

      <div className="relative">
        {/* Laptop screen */}
        <div className="relative rounded-t-2xl rounded-b-md border-[6px] border-slate-800 bg-slate-800 shadow-2xl">
          <div className="overflow-hidden rounded-lg bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
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
        <div className="relative mx-auto h-3.5 rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md" />
        <div className="mx-auto h-1.5 w-1/3 rounded-b-lg bg-slate-400" />
      </div>

      <div className="absolute -right-6 -top-6 hidden h-16 w-16 rotate-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg sm:block" />
      <div className="absolute -bottom-2 -left-8 hidden h-12 w-12 -rotate-12 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg sm:block" />
    </div>
  );
}
