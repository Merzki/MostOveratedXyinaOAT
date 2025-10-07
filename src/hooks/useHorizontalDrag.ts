import { useRef, useCallback } from "react"

export function useHorizontalDrag<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null)
  const dragState = useRef({ down: false, startX: 0, startScroll: 0, pointerId: 0 })

  const onPointerDown = useCallback((e: React.PointerEvent<T>) => {
    const el = containerRef.current
    if (!el) return
    dragState.current.down = true
    dragState.current.startX = e.clientX
    dragState.current.startScroll = (el as unknown as HTMLDivElement).scrollLeft
    dragState.current.pointerId = e.pointerId
    try { (el as any).setPointerCapture?.(e.pointerId) } catch {}
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent<T>) => {
    const el = containerRef.current as unknown as HTMLDivElement | null
    if (!el || !dragState.current.down) return
    const dx = e.clientX - dragState.current.startX
    el.scrollLeft = dragState.current.startScroll - dx
    e.preventDefault()
  }, [])

  const endDrag = useCallback(() => {
    const el = containerRef.current as any
    if (!el) return
    dragState.current.down = false
    try { el.releasePointerCapture?.(dragState.current.pointerId) } catch {}
  }, [])

  return { containerRef, onPointerDown, onPointerMove, endDrag }
}
