export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute -inset-40 rotate-12 bg-[repeating-linear-gradient(90deg,transparent_0_20px,rgba(255,255,255,0.05)_20px_40px)] mix-blend-screen" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-5xl font-black tracking-tighter md:text-7xl">
          SCROLL IS THE NEW CLICK
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          minimal attention, maximal motion
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#features" className="rounded border border-white/30 bg-white px-5 py-3 text-sm font-extrabold text-black transition hover:-rotate-1 hover:scale-105">
            Submit To Scroll
          </a>
          <a href="#cta" className="rounded border border-white/30 px-5 py-3 text-sm font-extrabold hover:bg-white/10">
            Resist
          </a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/60">
        scroll ↓
      </div>
    </section>
  )
}

