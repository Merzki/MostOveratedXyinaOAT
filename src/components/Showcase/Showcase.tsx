export default function Showcase() {
  const exhibits = [
    ["Parallax Overdose", "Scroll for depth. Die for depth.", "2014"],
    ["Minimalism.exe", "When less became nothing.", "2016"],
    ["Brutalism Revival #3", "Still not dead, just misunderstood.", "2019"],
    ["Glassmorphism", "Beauty behind the blur.", "2020"],
    ["Dark Mode Fetish", "Because black hides the mess.", "2021"],
    ["AI Everything", "Trend or takeover?", "2023"],
  ] as const

  const styles: Record<string, string> = {
    'Parallax Overdose': 'bg-gradient-to-b from-sky-200 to-indigo-300 shadow-[0_0_20px_rgba(0,0,0,0.25)]',
    'Minimalism.exe': 'bg-white border border-neutral-200 text-neutral-500',
    'Brutalism Revival #3': 'bg-yellow-400 text-black border-4 border-black',
    'Glassmorphism': 'backdrop-blur-md bg-white/30 border border-white/40 text-white',
    'Dark Mode Fetish': 'bg-black text-white border border-neutral-800 shadow-[0_0_12px_rgba(255,255,255,0.2)]',
    'AI Everything': 'bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-900 text-white',
  }

  const hoverStyles: Record<string, string> = {
    'Parallax Overdose': 'hover:brightness-110',
    'Minimalism.exe': 'hover:contrast-110',
    'Brutalism Revival #3': 'hover:animate-wiggle',
    'Glassmorphism': 'hover:backdrop-blur-xl hover:brightness-125',
    'Dark Mode Fetish': 'hover:[text-shadow:0_0_10px_white]',
    'AI Everything': 'hover:[filter:contrast(120%)_hue-rotate(20deg)]',
  }

  const rowSpans = [
    'row-span-1 sm:row-span-1 lg:row-span-2',
    'row-span-1 sm:row-span-1 lg:row-span-3',
    'row-span-1 sm:row-span-1 lg:row-span-2',
    'row-span-1 sm:row-span-1 lg:row-span-3',
    'row-span-1 sm:row-span-1 lg:row-span-2',
    'row-span-1 sm:row-span-1 lg:row-span-2',
  ] as const
  const tilts = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'] as const

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
        <div className="text-center">
          <h2 className="text-[clamp(28px,7vw,48px)] md:text-[clamp(40px,5vw,64px)] font-black tracking-tight leading-none">
            MUSEUM OF DEAD TRENDS
          </h2>
          <p className="mt-2 md:mt-3 text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-neutral-700">
            a retrospective on scroll trauma and ux casualties
          </p>
        </div>

        <div className="mt-5 md:mt-7 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3 auto-rows-[88px] sm:auto-rows-[102px] lg:auto-rows-[120px]">
          {exhibits.map(([title, desc, year], i) => {
            const span = rowSpans[i % rowSpans.length]
            const rot = tilts[i % tilts.length]

            return (
              <div
                key={title}
                className={`group relative ${span} ${rot} ${styles[title] ?? 'bg-white'} shadow-[inset_0_0_0_2px_#000] overflow-hidden transition duration-300 hover:-rotate-1 hover:scale-[1.02] ${hoverStyles[title] ?? ''} lg:even:translate-y-2 lg:odd:-translate-y-1`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.85)_1px,transparent_1px)] [background-size:6px_6px] mix-blend-multiply transition-opacity duration-200" />

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                <span className="absolute inset-0 z-10 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-black text-red-700 mix-blend-overlay opacity-20 transition-colors duration-300 select-none group-hover:text-white group-hover:opacity-90 [text-shadow:none] group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.45),0_0_22px_rgba(255,255,255,0.35)]">
                  {year}
                </span>

                <div className="absolute right-1.5 top-1.5 md:right-2 md:top-2 z-20">
                  <span className="inline-block -rotate-1 px-0.5 md:px-1 text-[9px] md:text-xs font-black uppercase tracking-widest text-neutral-800/50">
                    EXTINCT
                  </span>
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className="w-[88%] md:w-[80%] text-center">
                    <span className="block border-y-[2px] md:border-y-[3px] border-black/70 bg-white/60 backdrop-blur-[1px] px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      DO NOT INTERACT
                    </span>
                  </div>
                </div>

                <div className="relative z-20 p-2.5 sm:p-3 md:p-4 h-full flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1 md:group-hover:-translate-y-1.5">
                  <h3 className="text-[15px] sm:text-base md:text-xl font-black tracking-tight text-black">
                    {title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] md:text-sm font-semibold uppercase tracking-wider text-neutral-800">
                    {desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

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

