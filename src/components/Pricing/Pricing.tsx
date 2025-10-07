 import { PricingHeader } from "./PricingHeader"
 import { PricingList } from "./PricingList"
 export default function Pricing() {
  return (
    <section
      id="pricing"
      data-header-bg="rgba(185,28,28,0.85)"
      className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-neutral-100 text-black"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 mix-blend-multiply">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0_16px,rgba(0,0,0,0.06)_16px_32px)]" />
        <div className="absolute -inset-24 rotate-6 bg-[radial-gradient(circle_at_20%_30%,rgba(185,28,28,0.14),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(22,101,52,0.14),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <PricingHeader />
        <PricingList />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 select-none text-center">
        <div className="relative inline-block">
          <span className="absolute inset-0 translate-x-[2px] translate-y-[2px] rounded [clip-path:polygon(4%_0,100%_6%,96%_100%,0_94%)] bg-red-700/40 blur-[0.3px] mix-blend-multiply" aria-hidden />
          <span className="relative inline-block rounded border-2 border-black bg-neutral-200/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-black shadow-[6px_6px_0_0_#000] [clip-path:polygon(3%_0,100%_5%,97%_100%,0_95%)]">
            price discovery requires more scrolling
          </span>
        </div>
      </div>
    </section>
  )
}

