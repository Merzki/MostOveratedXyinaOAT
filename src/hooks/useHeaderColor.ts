import { useEffect, useState, useRef } from "react"

export function useHeaderColor(defaultColor = "rgba(253,224,71,0.7)") {
  const [bg, setBg] = useState<string>(defaultColor)
  const rafRef = useRef<number | null>(null)
  const lastColor = useRef<string>(defaultColor)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"))
    if (sections.length === 0) return

    const handleEntries = (entries: IntersectionObserverEntry[]) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0]
        const el = visible?.target as HTMLElement | undefined
        const color = el?.dataset.headerBg

        if (color && color !== lastColor.current) {
          lastColor.current = color
          setBg(color)
        }
      })
    }

    const obs = new IntersectionObserver(handleEntries, {
      threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
    })

    sections.forEach((s) => obs.observe(s))

    return () => {
      obs.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return bg
}
