type ShowcaseCardProps = {
  title: string
  desc: string
  year: string
  containerClass: string
}

export function ShowcaseCard({ title, desc, year, containerClass }: ShowcaseCardProps) {
  return (
    <div className={containerClass}>
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
}
