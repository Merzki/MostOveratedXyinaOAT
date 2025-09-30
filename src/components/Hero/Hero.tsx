export default function Hero() {
  return (
    <section
      id="hero"
      data-header-bg="rgba(253,224,71,0.7)"
      className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute -inset-40 rotate-12 bg-[repeating-linear-gradient(90deg,transparent_0_20px,rgba(255,255,255,0.05)_20px_40px)] mix-blend-screen" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-5xl font-black tracking-tighter md:text-7xl">
          SCROLL IS THE NEW CLICK
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg md:text-xl font-semibold uppercase tracking-[0.3em] text-yellow-300">
          minimal attention, maximal motion
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#features" className="rounded border border-white/30 bg-white px-5 py-3 text-base font-extrabold text-black transition hover:-rotate-1 hover:scale-105">
            Submit To Scroll
          </a>
          <a href="#cta" className="rounded border border-white/30 px-5 py-3 text-base font-extrabold hover:bg-white/10">
            Resist
          </a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 select-none text-center">
        <div className="mx-auto mb-1 inline-block rotate-[-8deg] rounded border-[3px] md:border-[4px] border-white/60 px-3 py-1 text-[10px] md:text-[12px] font-black uppercase tracking-widest text-white/70">
          keep scrolling
        </div>
        <div className="flex flex-col items-center leading-none text-white">
          <span className="animate-bob text-3xl md:text-5xl opacity-90">↓</span>
          <span className="animate-bob text-3xl md:text-5xl opacity-60" style={{ animationDelay: '0.2s' }}>↓</span>
          <span className="animate-bob text-3xl md:text-5xl opacity-40" style={{ animationDelay: '0.4s' }}>↓</span>
        </div>
      </div>
    </section>
  )
}