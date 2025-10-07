import { useHorizontalDrag } from "../../hooks/useHorizontalDrag"
import { tiers } from "../../utils/Pricing/tiers"
import { PricingCard } from "./PricingCard"

export function PricingList() {
  const { containerRef, onPointerDown, onPointerMove, endDrag } = useHorizontalDrag<HTMLUListElement>()

  return (
    <div className="relative mb-2 md:mb-0">
      <div className="md:hidden absolute right-2 -top-6 z-10 select-none">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-red-700 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white shadow-[6px_6px_0_0_#000] animate-bounce">
          swipe →
          <span aria-hidden>→→</span>
        </span>
      </div>

      <ul
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="md:grid md:grid-cols-3 md:gap-6 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 [scrollbar-width:'none'] [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-none md:overflow-visible md:px-0 select-none cursor-grab active:cursor-grabbing md:cursor-auto touch-pan-x"
      >
        {tiers.map((t, i) => (
          <PricingCard key={t.id} tier={t} index={i} />
        ))}
      </ul>
    </div>
  )
}
