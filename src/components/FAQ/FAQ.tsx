import { useState } from "react"

type Item = { q: string; a: string; id: string }

const items: Item[] = [
  {
    id: "size",
    q: "Why is everything so huge?",
    a: "Because you’re reading on a screen that asks for 16px font and gets 64px instead.",
  },
  {
    id: "top",
    q: "Where’s the ‘Back to Top’ button?",
    a: "You’re already at the top of your feelings. Scroll down for even more emotions.",
  },
  {
    id: "purpose",
    q: "What’s the point of this page?",
    a: "To guide you through 7 screens just to say: ‘scrolling is a choice too’.",
  },
  {
    id: "toast",
    q: "How do I silence that annoying toast?",
    a: "You must absolutely not press the big ‘DO NOT CLICK’ in the header. That would be a violation.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null)
  const isOpen = (id: string) => open === id

  const stamps = ["SCAM", "FAKE", "NO EXIT", "SCROLL TAX"] as const

  return (
    <section id="faq" data-header-bg="rgba(245,245,244,0.8)" className="relative h-screen snap-start overflow-hidden bg-neutral-100 text-neutral-900">
      <div className="pointer-events-none absolute inset-0 -rotate-45 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="absolute -inset-1 flex flex-col gap-10 animate-diag-marquee">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap text-3xl font-black tracking-[0.35em] text-red-700 mix-blend-overlay opacity-50">
              SCROLL TO OBEY — QUESTION EVERYTHING — SCROLL TO OBEY — QUESTION EVERYTHING —
            </div>
          ))}
        </div>
      </div>

      {open && (
        <>
          <div
            className="pointer-events-none fixed inset-0 z-10 bg-black/60 mix-blend-multiply [background-image:repeating-linear-gradient(0deg,transparent_0_6px,rgba(255,255,255,0.04)_6px_7px)]"
            aria-hidden
          />
          <div className="pointer-events-none fixed inset-0 z-10 grid place-items-center">
            <div className="select-none text-center text-xs font-extrabold uppercase tracking-[0.4em] text-white/40">
              subject under scroll
            </div>
          </div>
        </>
      )}

      <div className="relative z-20 mx-auto flex h-full max-w-6xl flex-col justify-center gap-6 px-6 py-16">
        <header className="mb-2">
          <h2 className="relative inline-block bg-black px-2 text-3xl font-black tracking-tight text-white md:text-5xl">
            <span className="relative">FAQ</span>
            <span className="absolute left-0 top-0 -translate-x-[2px] translate-y-[2px] select-none text-red-600/70 blur-[0.3px]">FAQ</span>
          </h2>
          <p className="mt-2 max-w-xl text-xs font-extrabold uppercase tracking-[0.25em] text-neutral-600">
            interrogation of your scroll
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {items.map((it, idx) => {
            const tilts = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"] as const
            const tilt = tilts[idx % tilts.length]
            const stamp = stamps[idx % stamps.length]
            const isHiddenBottom = it.id === "purpose" 
            return (
              <li key={it.id} className={`relative ${tilt}`}>
                <button
                  className="group relative flex w-full items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 text-left font-extrabold transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000] hover:animate-shake motion-reduce:transition-none"
                  onClick={() => setOpen((p) => (p === it.id ? null : it.id))}
                  aria-expanded={isOpen(it.id)}
                  aria-controls={`faq-${it.id}`}
                >
                  <span className="tracking-tight">{it.q}</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-600 group-hover:rotate-6">
                    {isOpen(it.id) ? "close" : "open"}
                  </span>
                  <span className="pointer-events-none absolute -left-2 -top-3 rotate-6 rounded border-2 border-black bg-red-700 px-2 py-0.5 text-[10px] font-black tracking-widest text-white">
                    {stamp}
                  </span>
                </button>
                <div
                  id={`faq-${it.id}`}
                  className={`overflow-hidden border-2 border-t-0 border-black bg-neutral-200 px-4 ${
                    isOpen(it.id) ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className={`py-3 text-sm text-neutral-900 ${isOpen(it.id) ? "animate-glitch" : ""}`}>
                    {it.a}
                  </p>
                </div>
                {isHiddenBottom && isOpen(it.id) && (
                  <div className="pb-2 text-[10px] font-black uppercase tracking-widest text-red-700">
                    misplaced? good. keep questioning.
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="mt-4 text-right text-[10px] font-black uppercase tracking-widest text-neutral-500">
          You can close these. Interrogation never ends.
        </div>
      </div>
    </section>
  )
}