type TestimonialCardProps = {
  id: number
  text: string
  author: string
  clip: string
  stamp: string
}

export function TestimonialCard({ id, text, author, clip, stamp }: TestimonialCardProps) {
  return (
    <li
      key={id}
      className={`group relative overflow-hidden border-[3px] border-stone-900 bg-stone-100 p-4 md:p-5 text-stone-900 shadow-[6px_6px_0_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition ${clip} hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)]`}
    >
      <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-10 -rotate-3 bg-red-700/90 mix-blend-multiply" />
      <span className="pointer-events-none absolute -right-3 -bottom-2 h-6 w-10 rotate-2 bg-stone-400/80 mix-blend-multiply" />

      <svg className="absolute right-2 top-2 h-5 w-5 rotate-12 text-stone-700/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12a6 6 0 1 1 12 0v7" />
        <path d="M9 19h9a3 3 0 0 0 0-6h-3" />
      </svg>

      <div className="mb-2 md:mb-3 flex items-center gap-1 text-red-700">
        {Array.from({ length: 5 }).map((_, idx) => (
          <span key={idx} className={idx < (id % 5) + 1 ? "opacity-100" : "opacity-30"}>★</span>
        ))}
      </div>

      <div className="relative z-10">
        <span className="pointer-events-none absolute left-0 top-0 hidden -translate-x-[2px] translate-y-[2px] text-red-600/50 mix-blend-multiply select-none md:inline">
          “{text}”
        </span>
        <blockquote className="relative text-[15px] leading-relaxed sm:text-base md:text-lg">
          <span className="font-mono tracking-normal md:tracking-tight">
            “{text.split(' ').slice(0, Math.ceil(text.split(' ').length / 2)).join(' ')}{" "}
          </span>
          <span className="font-black tracking-tight md:tracking-[0.3em]">
            {text.split(' ').slice(Math.ceil(text.split(' ').length / 2)).join(' ')}”
          </span>
        </blockquote>
      </div>

      <div className="mt-2 text-xs font-extrabold uppercase tracking-widest text-stone-600">— {author}</div>
      <div className="mt-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-stone-800">
        <span className="border border-stone-900 bg-stone-200 px-1">file #{String(id).padStart(3, "0")}</span>
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
        />
        <span
          className={`inline-block border-[3px] border-stone-900 bg-red-700 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.35em] text-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.6)] ${
            ["RIOT!", "PROOF"].includes(stamp)
              ? "rounded-full px-3 py-1 tracking-[0.2em]"
              : "[clip-path:polygon(2%_0,100%_3%,98%_100%,0_97%)]"
          }`}
        >
          {stamp}
        </span>
      </div>
    </li>
  )
}
