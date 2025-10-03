export default function Features() {
  const items = [
    ['Infinite Motion', 'Why click when you can drift?', 'VOID'],
    ['Louder Typography', 'Whispering is for footnotes.', 'HEAT'],
    ['Aggressive Whitespace', 'Space, but make it tense.', 'RIOT'],
    ['Contrarian CTA', 'Buttons that dare you not to.', 'BETA'],
    ['Disruptive Layout', 'Rules are guidelines.', '404'],
    ['Radical Contrast', 'Black, white, red.', 'GLITCH'],
  ] as const

  return (
    <section
      id="features"
      data-header-bg="rgba(255,255,255,0.75)"
      className="relative h-screen snap-start overflow-hidden bg-white text-black"
    >
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

        <div className="md:col-span-7 grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4">
          {items.map(([title, desc, badge], i) => {
            const smSpans = [
              'col-span-2',
              'col-span-2',
              'col-span-2',
              'col-span-2',
              'col-span-2',
              'col-span-2',
            ] as const
            const mdSpans = [
              'md:col-span-4',
              'md:col-span-2',
              'md:col-span-3',
              'md:col-span-3',
              'md:col-span-2',
              'md:col-span-4',
            ] as const
            const smAspects = [
              'aspect-[4/3]',
              'aspect-[4/3]',
              'aspect-[4/3]',
              'aspect-[5/4]',
              'aspect-[16/11]',
              'aspect-[5/4]',
            ] as const
            const mdAspects = [
              'md:aspect-[20/9]',
              'md:aspect-[5/3]',
              'md:aspect-[2/1]',
              'md:aspect-[5/3]',
              'md:aspect-[16/9]',
              'md:aspect-[2/1]',
            ] as const
            const smOffsets = [
              '-translate-y-[2px]',
              'translate-y-[3px]',
              '-translate-y-[2px]',
              'translate-y-[1px]',
              '-translate-y-[2px]',
              'translate-y-[2px]',
            ] as const
            const offsets = [
              'md:-translate-y-2',
              'md:translate-y-3',
              'md:-translate-y-2',
              'md:translate-y-1',
              'md:-translate-y-2',
              'md:translate-y-2',
            ] as const
            const tilt = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'] as const
            const isFirst = i === 0
            const smSpan = smSpans[i % smSpans.length]
            const mdSpan = mdSpans[i % mdSpans.length]
            const smAspect = smAspects[i % smAspects.length]
            const mdAspect = mdAspects[i % mdAspects.length]
            const smOffset = smOffsets[i % smOffsets.length]
            const offset = offsets[i % offsets.length]
            const rot = tilt[i % tilt.length]

            return (
              <div
                key={title}
                className={`group relative z-0 ${smSpan} ${mdSpan} ${rot} ${isFirst ? 'aspect-[16/9]' : smAspect} ${mdAspect} ${smOffset} ${offset} border-[3px] md:border-[4px] border-black bg-white shadow-[inset_0_0_0_2px_#000] transition will-change-transform hover:animate-shake`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.8)_1px,transparent_1px)] [background-size:6px_6px] mix-blend-multiply transition-opacity duration-200" />

                <div className="absolute inset-0 bg-black/95 transition-opacity duration-300 group-hover:opacity-0 z-10" />

                <span className={`absolute inset-0 z-20 flex items-center justify-center ${isFirst ? 'text-3xl' : 'text-4xl'} md:text-6xl font-black tracking-widest text-red-700 transition-colors duration-300 group-hover:text-neutral-700/30`}>
                  {badge}
                </span>

                <div className="relative p-3 md:p-4 z-0">
                  <h3 className="font-extrabold tracking-tight text-black text-[clamp(18px,4.6vw,24px)] md:text-[clamp(18px,1.8vw,28px)] break-words animate-shake">
                    {title}
                  </h3>
                  <p className="mt-2 text-neutral-900 text-[clamp(14px,3.4vw,19px)] md:text-[clamp(14px,1.4vw,20px)] leading-snug md:leading-normal break-words animate-shake">
                    {desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
