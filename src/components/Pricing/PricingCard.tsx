import type { Tier } from "../../utils/Pricing/tiers"

type PricingCardProps = {
  tier: Tier
  index: number
}

export function PricingCard({ tier: t, index: i }: PricingCardProps) {
  const isFeatured = t.id === "premium"
  const isExposure = t.id === "exposure"

  return (
    <li
      key={t.id}
      className={`group relative shrink-0 snap-center w-[85vw] sm:w-[80vw] md:w-auto overflow-hidden border-2 border-black p-4 sm:p-5 md:p-6 transition will-change-transform mix-blend-normal isolate ${
        isFeatured
          ? "bg-red-700 text-white shadow-[10px_10px_0_0_#000]"
          : isExposure
          ? "bg-neutral-800 text-white shadow-[8px_8px_0_0_#000]"
          : "bg-emerald-800 text-white shadow-[8px_8px_0_0_#000]"
      } hover:-translate-y-1 hover:rotate-[-0.5deg]`}
    >
      <div className="absolute -inset-1 -z-10 translate-x-2 translate-y-2 bg-black" />
      <div className="mb-2 sm:mb-3 flex items-center justify-between">
        <h3 className="text-2xl sm:text-3xl md:text-3xl font-extrabold tracking-tight">{t.title}</h3>
        <span className="rotate-2 rounded border-2 border-black bg-black px-2 py-0.5 text-[9px] sm:text[10px] font-black uppercase tracking-widest text-white">
          {t.badge}
        </span>
      </div>
      <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
        <div className="text-2xl sm:text-4xl md:text-5xl font-black">{t.price}</div>
        <div className={`text-xs sm:text-sm md:text-[11px] font-black uppercase tracking-widest ${(isFeatured || isExposure || i === 2) ? "text-white/80" : "text-neutral-700"}`}>{t.tagline}</div>
      </div>
      <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-[12px] sm:text-sm">
        {t.points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className={`mt-1 inline-block h-2 w-2 rotate-45 ${(isFeatured || isExposure || i === 2) ? "bg-white" : "bg-black"}`} />
            <span className="font-semibold leading-snug sm:leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
        <button className="rounded border-2 border-black bg-black px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white transition hover:-rotate-1 hover:scale-[1.02] w-full sm:w-auto">
          {t.id === "collective" ? "Form Committee" : t.id === "premium" ? "Buy Twice" : "Pay Later*"}
        </button>
        <button className={`rounded border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest transition hover:rotate-1 w-full sm:w-auto ${(isFeatured || isExposure || i === 2) ? "text-white border-white" : ""}`}>
          {t.id === "collective" ? "Vote On It" : "Add More Guilt"}
        </button>
      </div>

      <p className={`mt-3 text-[10px] leading-relaxed ${(isFeatured || isExposure || i === 2) ? "text-white/80" : "text-black/70"}`}>
        *payment processed in attention units. returns subject to public opinion and historical materialism.
      </p>

      <span className="pointer-events-none absolute right-3 top-3 rotate-6 text-[10px] font-black uppercase tracking-widest text-red-800/80 opacity-0 transition group-hover:opacity-100">
        keep scrolling, comrade
      </span>
    </li>
  )
}
