export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/40 bg-yellow-300/90 backdrop-blur supports-[backdrop-filter]:bg-yellow-300/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="font-black tracking-tighter text-2xl md:text-3xl text-black">
          OVER·SCROLL
        </a>
        <nav className="hidden gap-6 md:flex">
          <a className="text-sm font-bold uppercase tracking-widest hover:line-through" href="#hero">Hero</a>
          <a className="text-sm font-bold uppercase tracking-widest hover:line-through" href="#features">Features</a>
          <a className="text-sm font-bold uppercase tracking-widest hover:line-through" href="#cta">CTA</a>
        </nav>
        <button className="group inline-flex items-center gap-2 rounded border border-black bg-black px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white transition hover:bg-transparent hover:text-black">
          <span>Do Not Click</span>
          <span className="block h-2 w-2 rotate-45 bg-white transition group-hover:bg-black" />
        </button>
      </div>
    </header>
  )
}

