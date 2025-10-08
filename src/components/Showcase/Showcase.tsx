 import { ShowcaseHeader } from "./ShowcaseHeader"
 import { ShowcaseGrid } from "./ShowcaseGrid"
 export default function Showcase() {
  return (
    <section
      id="showcase"
      data-header-bg="rgba(245,245,245,0.85)"
      className="relative h-screen snap-start overflow-hidden bg-neutral-50 text-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.7)_40%,rgba(245,245,245,0.95)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/10 to-transparent" />

      <div className="pointer-events-none absolute inset-0 -rotate-12 flex items-center justify-center">
        <span className="select-none text-[12vw] md:text-[10rem] font-black tracking-tighter uppercase text-black/5 mix-blend-overlay">TREND ≠ TRUTH</span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-7xl px-6 pt-16 md:pt-20 pb-5 md:pb-6 h-full flex flex-col justify-center">
        <ShowcaseHeader />
        <ShowcaseGrid />

        <p className="mt-5 md:mt-6 text-center text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-600">
          curated by <span className="text-black font-bold">scroll victims anonymous</span>
        </p>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-16 flex justify-center opacity-30">
        <div className="-rotate-1 border-y-[3px] border-black/40 bg-white/70 px-4 py-1 text-[10px] md:text-xs font-black tracking-[0.35em] uppercase text-black/70">
          ARCHIVE COPY – DO NOT SCROLL
        </div>
      </div>
    </section>
  )
}

