import { useEffect, useState } from "react"

export default function FloatingToast() {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)

  const rand = (min: number, max: number) => Math.random() * (max - min) + min
  const moveRandom = () => {
    setPos({ top: rand(6, 94), left: rand(6, 94) })
  }

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div
      className="pointer-events-auto fixed z-50 rounded border-2 border-black bg-red-600 px-4 py-3 text-sm font-extrabold uppercase tracking-widest shadow-[6px_6px_0_0_#000]"
      style={
        pos
          ? { top: `${pos.top}%`, left: `${pos.left}%`, transform: "translate(-50%, -50%)" }
          : { bottom: "16px", right: "16px" }
      }
    >
      <div className="flex items-center justify-between gap-3">
        <div>Was this helpful?</div>
        <div className="flex gap-2">
          <button onClick={moveRandom} className="rounded border-2 border-black bg-black px-3 py-1 text-xs font-black text-white hover:animate-wiggle">Yes</button>
          <button onClick={moveRandom} className="rounded border-2 border-black px-3 py-1 text-xs font-black hover:animate-wiggle">No</button>
        </div>
      </div>
    </div>
  )
}
