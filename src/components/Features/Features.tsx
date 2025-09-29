export default function Features() {
  return (
    <section id="features" className="relative h-screen snap-start overflow-hidden bg-white text-black">
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent_0_20%,#fde047_20%_25%,transparent_25%_45%,#e11d48_45%_50%,transparent_50%_70%,#22d3ee_70%_75%,transparent_75%_100%)] opacity-10" />

      <div className="relative z-10 mx-auto grid h-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-4xl font-black leading-none tracking-tighter md:text-6xl">
            FEATURES
            <span className="ml-3 inline-block rotate-2 bg-black px-2 text-yellow-300">(?)</span>
          </h2>
          <p className="mt-4 max-w-md text-sm font-semibold uppercase tracking-widest text-neutral-700">
            so many features you might scroll past them
          </p>
        </div>
        <ul className="md:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            ['Infinite Motion', 'Why click when you can drift?'],
            ['Louder Typography', 'Whispering is for footnotes.'],
            ['Aggressive Whitespace', 'Space, but make it tense.'],
            ['Contrarian CTA', 'Buttons that dare you not to.'],
          ].map(([title, desc]) => (
            <li key={title} className="group relative overflow-hidden border-2 border-black bg-yellow-200 p-4 transition hover:-rotate-1 hover:scale-[1.01]">
              <div className="absolute -inset-1 -z-10 translate-x-2 translate-y-2 bg-black" />
              <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-black/70">{desc}</p>
              <span className="absolute right-3 top-3 rotate-6 text-xs font-black text-pink-600 opacity-0 transition group-hover:opacity-100">NEW</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

