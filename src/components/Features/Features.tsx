export default function Features() {
  const items = [
    ['Infinite Motion', 'Why click when you can drift?'],
    ['Louder Typography', 'Whispering is for footnotes.'],
    ['Aggressive Whitespace', 'Space, but make it tense.'],
    ['Contrarian CTA', 'Buttons that dare you not to.'],
  ] as const

  return (
    <section id="features" data-header-bg="rgba(255,255,255,0.75)" className="relative h-screen snap-start overflow-hidden bg-white text-black">
      <div className="pointer-events-none absolute inset-0 bg-photocopy opacity-30" />
      <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(90deg,rgba(0,0,0,0.08)_2px,transparent_3px)] opacity-10" />

      <div className="relative z-10 mx-auto grid h-full max-w-6xl grid-cols-1 items-center gap-6 px-6 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-3xl font-black leading-none tracking-tighter md:text-6xl">
            FEATURES
            <span className="ml-3 inline-block -rotate-2 bg-black px-2 text-white">(!)</span>
          </h2>
          <p className="mt-3 max-w-md text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-neutral-700">
            so many features you might scroll past them
          </p>
        </div>

        <ul className="md:col-span-7 grid grid-cols-2 md:grid-cols-6 auto-rows-[minmax(90px,auto)] gap-3 md:gap-4">
          {items.map(([title, desc], i) => {
            const spans = [
              'col-span-2 md:col-span-3 row-span-2',
              'col-span-1 md:col-span-3 row-span-1',
              'col-span-1 md:col-span-2 row-span-2',
              'col-span-2 md:col-span-1 row-span-1',
            ] as const
            const torn = [
              '[clip-path:polygon(4%_0,100%_6%,96%_100%,0_94%)]',
              '[clip-path:polygon(0_6%,98%_0,100%_94%,6%_100%)]',
              '[clip-path:polygon(3%_2%,100%_0,97%_98%,0_95%)]',
              '[clip-path:polygon(2%_0,100%_3%,98%_100%,0_97%)]',
            ] as const
            const tilt = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'] as const
            const span = spans[i % spans.length]
            const clip = torn[i % torn.length]
            const rot = tilt[i % tilt.length]
            return (
              <li
                key={title}
                className={`group relative z-0 ${span} ${clip} ${rot} border-2 border-black bg-white p-3 md:p-4 transition will-change-transform hover:animate-shake hover:brightness-[1.08] hover:contrast-[1.08]`}
              >
                <div className="pointer-events-none absolute -inset-1 -z-10 translate-x-2 translate-y-2 bg-black/70 transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-20" />
                <div className="pointer-events-none absolute -inset-1 -z-20 translate-x-3 translate-y-3 bg-black/50 transition-all duration-200 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-10" />

                <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.8)_1px,transparent_1px)] [background-size:6px_6px] mix-blend-multiply transition-opacity duration-200 group-hover:opacity-[0.03]" />

                <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.25))] opacity-30 transition-opacity duration-200 group-hover:opacity-0" />

                <h3 className="text-base md:text-xl font-extrabold tracking-tight text-black">{title}</h3>
                <p className="mt-2 text-xs md:text-sm text-neutral-900">{desc}</p>
                <span className="pointer-events-none absolute -left-1 -top-2 rotate-12 bg-yellow-200 px-3 py-1 text-[0] shadow-[3px_3px_0_0_#000] border border-black" aria-hidden />
                <span className="pointer-events-none absolute -right-1 -bottom-2 -rotate-6 bg-yellow-200 px-3 py-1 text-[0] shadow-[3px_3px_0_0_#000] border border-black" aria-hidden />

                <span className="absolute right-2 top-2 rotate-3 rounded border border-black bg-white px-1 text-[10px] font-black text-red-700 opacity-0 transition group-hover:opacity-100">POSTER</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

