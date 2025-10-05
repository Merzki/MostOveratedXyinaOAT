import { useRef } from "react"
export default function Pricing() {
  const tiers = [
    {
      id: "exposure",
      title: "Exposure Tier",
      price: "$0*",
      tagline: "pay with your attention",
      points: [
        "Unlimited doomscrolling",
        "Ads reinvented as ‘announcements’",
        "Community notes you didn’t ask for",
      ],
      badge: "FREE AS IN ‘MARKET’",
    },
    {
      id: "premium",
      title: "Premium+",
      price: "$29/mo",
      tagline: "own the scroll, rent the soul",
      points: [
        "Priority pixels (bolder kerning)",
        "Faster guilt accrual",
        "Exclusive right to dislike quietly",
      ],
      badge: "CONSUME RESPONSIBLY",
      featured: true,
    },
    {
      id: "collective",
      title: "Collective Mode",
      price: "$0/∞",
      tagline: "seize the means of pagination",
      points: [
        "Prices abolished, opinions remain",
        "Algorithm replaced by assembly",
        "Scroll redistributed per need",
      ],
      badge: "DIALECTICAL UPGRADE",
    },
  ] as const

  const scrollerRef = useRef<HTMLUListElement | null>(null)
  const dragState = useRef({ down: false, startX: 0, startScroll: 0, pointerId: 0 })

  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    const el = scrollerRef.current
    if (!el) return
    dragState.current.down = true
    dragState.current.startX = e.clientX
    dragState.current.startScroll = el.scrollLeft
    dragState.current.pointerId = e.pointerId
    try { el.setPointerCapture(e.pointerId) } catch {}
  }

  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    const el = scrollerRef.current
    if (!el || !dragState.current.down) return
    const dx = e.clientX - dragState.current.startX
    el.scrollLeft = dragState.current.startScroll - dx
    e.preventDefault()
  }

  const endDrag = () => {
    const el = scrollerRef.current
    if (!el) return
    dragState.current.down = false
    try { el.releasePointerCapture(dragState.current.pointerId) } catch {}
  }

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
        <header className="mb-6 text-center md:mb-8">
          <h2 className="inline-block text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">
            PRICING
            <span className="ml-2 inline-block -rotate-2 rounded bg-red-700 px-2 py-0.5 text-white">but make it ideology</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-neutral-700">
            choose your fighter: capitalism, premium capitalism, or the inevitable meeting
          </p>
        </header>

        <div className="relative mb-2 md:mb-0">
          <div className="md:hidden absolute right-2 -top-6 z-10 select-none">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-red-700 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white shadow-[6px_6px_0_0_#000] animate-bounce">
              swipe →
              <span aria-hidden>→→</span>
            </span>
          </div>
        </div>

        <ul
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="md:grid md:grid-cols-3 md:gap-6 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 [scrollbar-width:'none'] [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-none md:overflow-visible md:px-0 select-none cursor-grab active:cursor-grabbing md:cursor-auto touch-pan-x"
        >
          {tiers.map((t, i) => {
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
          )})}
        </ul>
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

