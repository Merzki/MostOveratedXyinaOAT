import { useEffect, useState } from "react"

export default function Header() {
  const [bg, setBg] = useState<string>("rgba(253,224,71,0.7)") 

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"))
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0]
        const el = visible?.target as HTMLElement | undefined
        const color = el?.dataset.headerBg
        if (color) setBg(color)
      },
      { threshold: [0.2, 0.35, 0.5, 0.65, 0.8] }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/40 backdrop-blur transition-colors duration-300" style={{ backgroundColor: bg }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="font-black tracking-tighter text-2xl md:text-3xl text-black">
          OVER·SCROLL
        </a>
        <nav className="hidden gap-6 md:flex">
          <a className="text-sm font-bold uppercase tracking-widest hover:line-through" href="#hero">Hero</a>
          <a className="text-sm font-bold uppercase tracking-widest hover:line-through" href="#features">Features</a>
          <a className="text-sm font-bold uppercase tracking-widest hover:line-through" href="#faq">FAQ</a>
          <a className="text-sm font-bold uppercase tracking-widest hover:line-through" href="#testimonials">Testimonials</a>
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

