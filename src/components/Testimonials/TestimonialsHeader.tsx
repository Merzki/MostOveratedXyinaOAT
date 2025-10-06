export function TestimonialsHeader() {
  return (
    <header className="max-w-3xl mx-auto md:mx-0">
      <h2 className="relative inline-block text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
        <span className="relative z-10">TESTIMONIALS</span>
        <span className="absolute left-0 top-0 hidden sm:inline -translate-x-[1px] translate-y-[1px] text-red-600/40 md:-translate-x-[2px] md:translate-y-[2px] md:text-red-600/60 mix-blend-multiply select-none">
          TESTIMONIALS
        </span>
      </h2>
      <div className="mt-2 h-1 w-28 bg-red-700" />
      <p className="mt-3 text-sm leading-relaxed text-stone-300">
        Notes taped from nowhere and everywhere. Readable first, chaotic after.
      </p>
    </header>
  )
}
