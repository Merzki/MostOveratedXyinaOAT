export default function Testimonials() {
  const quotes = [
    { id: 1, text: "I tried not to like it. It didn’t help.", author: "Reluctant User" },
    { id: 2, text: "So much scroll, I forgot what I was looking for.", author: "Lost Browser" },
    { id: 3, text: "Design you can’t ignore. I tried.", author: "Witness #42" },
    { id: 4, text: "My thumb filed a complaint.", author: "Ergonomics Dept." },
    { id: 5, text: "Too many opinions. Not enough scroll.", author: "Comment Section" },
    { id: 6, text: "I scrolled for answers and found attitude.", author: "Seeker" },
    { id: 7, text: "Good design shouldn’t beg. This does.", author: "Critic #7" },
    { id: 8, text: "It looked at me first.", author: "Eyewitness" },
    { id: 9, text: "The UI started a small riot in my tabs.", author: "Tab Hoarder" },
    { id: 10, text: "Scrolling is the new breathing.", author: "Optimist" },
  ]

  return (
    <section id="testimonials" data-header-bg="rgba(255,255,255,0.6)" className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-neutral-950 text-stone-50">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 md:opacity-15 [background-image:repeating-linear-gradient(0deg,transparent_0_18px,rgba(255,255,255,0.055)_18px_19px)]" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-5 md:opacity-10 [background-image:repeating-linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_3px)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-6">
        <header className="max-w-3xl mx-auto md:mx-0">
          <h2 className="relative inline-block text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            <span className="relative z-10">TESTIMONIALS</span>
            <span className="absolute left-0 top-0 hidden sm:inline -translate-x-[1px] translate-y-[1px] text-red-600/40 md:-translate-x-[2px] md:translate-y-[2px] md:text-red-600/60 mix-blend-multiply select-none">TESTIMONIALS</span>
          </h2>
          <div className="mt-2 h-1 w-28 bg-red-700" />
          <p className="mt-3 text-sm leading-relaxed text-stone-300">
            Notes taped from nowhere and everywhere. Readable first, chaotic after.
          </p>
        </header>

        <div className="relative mx-auto mt-6 max-w-6xl">
          <div className="mb-2 flex items-center justify-center select-none">
            <span className="inline-block rounded-full border-2 border-black bg-red-700 px-3 py-1 text-[11px] md:text-xs font-black uppercase tracking-[0.35em] text-black shadow-[6px_6px_0_0_#000] animate-bounce">
              There is never enough scroll ↓↓
            </span>
          </div>

          <div className="relative">
            <div className="max-h-[56vh] sm:max-h-[58vh] md:max-h-[62vh] overflow-y-auto px-1 md:px-2 [scrollbar-width:'none'] [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden">

              <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
          {quotes.map((q, i) => {
            const clips = [
              "[clip-path:polygon(2%_0,100%_3%,98%_100%,0_97%)]",
              "[clip-path:polygon(0_4%,98%_0,100%_96%,4%_100%)]",
              "[clip-path:polygon(3%_2%,100%_0,97%_98%,0_95%)]",
            ] as const
            const clip = clips[i % clips.length]
            const stamps = ["RIOT!", "DENIED", "CONFIDENTIAL", "PROOF"] as const
            const stamp = stamps[i % stamps.length]
            return (
              <li
                key={q.id}
                className={`group relative overflow-hidden border-[3px] border-stone-900 bg-stone-100 p-4 md:p-5 text-stone-900 shadow-[6px_6px_0_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition ${clip} hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)]`}
              >
                <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-10 -rotate-3 bg-red-700/90 mix-blend-multiply" />
                <span className="pointer-events-none absolute -right-3 -bottom-2 h-6 w-10 rotate-2 bg-stone-400/80 mix-blend-multiply" />

                <svg className="absolute right-2 top-2 h-5 w-5 rotate-12 text-stone-700/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M3 12a6 6 0 1 1 12 0v7" />
                  <path d="M9 19h9a3 3 0 0 0 0-6h-3" />
                </svg>
                <div className="mb-2 md:mb-3 flex items-center gap-1 text-red-700">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className={idx < (i % 5) + 1 ? "opacity-100" : "opacity-30"}>★</span>
                  ))}
                </div>
                <div className="relative z-10">
                  <span className="pointer-events-none absolute left-0 top-0 hidden -translate-x-[2px] translate-y-[2px] text-red-600/50 mix-blend-multiply select-none md:inline">
                    “{q.text}”
                  </span>
                  <blockquote className="relative text-[15px] leading-relaxed sm:text-base md:text-lg">
                    <span className="font-mono tracking-normal md:tracking-tight">“{q.text.split(' ').slice(0, Math.ceil(q.text.split(' ').length/2)).join(' ')} </span>
                    <span className="font-black tracking-tight md:tracking-[0.3em]">{q.text.split(' ').slice(Math.ceil(q.text.split(' ').length/2)).join(' ')}”</span>
                  </blockquote>
                </div>
                <div className="mt-2 text-xs font-extrabold uppercase tracking-widest text-stone-600">— {q.author}</div>
                <div className="mt-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-stone-800">
                  <span className="border border-stone-900 bg-stone-200 px-1">file #{String(q.id).padStart(3, '0')}</span>
                  <span className="border border-stone-900 bg-700-600 px-1 text-black">approved*</span>
                  <span className="text-[10px] text-stone-500">*by someone</span>
                </div>

                <div className="pointer-events-none absolute left-2 top-2 z-0 -rotate-3 scale-75 opacity-60 select-none md:-left-3 md:top-1/2 md:-translate-y-1/2 md:-rotate-6 md:scale-100 md:opacity-80">
                  <span
                    className="absolute inset-0 -z-10 translate-x-[2px] translate-y-[1px] rounded [clip-path:polygon(3%_0,100%_4%,97%_100%,0_96%)]"
                    style={{
                      background: "rgba(220,38,38,0.35)",
                      filter: "blur(0.4px)",
                      mixBlendMode: "multiply",
                    }}
                    aria-hidden
                  />
                  <span
                    className={`inline-block border-[3px] border-stone-900 bg-red-700 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.35em] text-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.6)] ${
                      ["RIOT!", "PROOF"].includes(stamp as string)
                        ? "rounded-full px-3 py-1 tracking-[0.2em]"
                        : "[clip-path:polygon(2%_0,100%_3%,98%_100%,0_97%)]"
                    } hover:-rotate-1`}
                    style={{ textShadow: "0.5px 0 currentColor, 0 0.5px currentColor" }}
                  >
                    {stamp}
                  </span>
                </div>

                <div className="pointer-events-none absolute -z-10 -left-6 top-6 hidden h-28 w-28 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.25)_0,transparent_60%)] mix-blend-multiply md:block" />
                <div className="pointer-events-none absolute -z-10 right-0 bottom-0 hidden h-24 w-24 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(220,38,38,0.25)_0,transparent_60%)] mix-blend-multiply md:block" />
              </li>
            )
          })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

