import { useEffect, useRef, useState } from 'react'
import BaseModal from './BaseModal'

interface ConsentModalProps {
  open: boolean
  onClose: () => void
}

export default function ConsentModal({ open, onClose }: ConsentModalProps) {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const ritualTimer = useRef<number | null>(null)
  const closeTimer = useRef<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    ritualTimer.current = window.setTimeout(() => {
      setDone(true)
      closeTimer.current = window.setTimeout(() => onClose(), 2600)
    }, 2200)
  }

  useEffect(() => {
    if (open) {
      setSubmitting(false)
      setDone(false)
    }
    return () => {
      if (ritualTimer.current) window.clearTimeout(ritualTimer.current)
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
      ritualTimer.current = null
      closeTimer.current = null
    }
  }, [open])

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      ariaLabel="Initiation Ritual"
      allowBackdropClose={!submitting && !done}
      showCloseButton={!done}
    >
      {!done ? (
        <div className="rounded-lg border-4 border-black bg-yellow-300 p-6 shadow-[10px_10px_0px_0px_#000] rotate-[-0.5deg]">
          <div className="space-y-6">
            <header className="text-center">
              <h3 className="text-2xl font-black tracking-tight">
                RITUAL OF JOINING THE RESISTANCE
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/70">
                YOU CAN'T RESIST IF YOU NEVER STOP SCROLLING.
              </p>
            </header>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest">Name (optional, like your agency)</span>
                <input
                  type="text"
                  placeholder="Anonymous Unit"
                  className="rounded border-2 border-black bg-yellow-50 px-3 py-2 shadow-[3px_3px_0px_0px_#000] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest">Hours lost per day</span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="∞"
                  className="rounded border-2 border-black bg-yellow-50 px-3 py-2 shadow-[3px_3px_0px_0px_#000] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest">What were you looking for?</span>
                <input
                  type="text"
                  placeholder="Meaning, probably"
                  className="rounded border-2 border-black bg-yellow-50 px-3 py-2 shadow-[3px_3px_0px_0px_#000] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" required defaultChecked className="mt-1 h-4 w-4 accent-black" />
                <span className="text-xs font-semibold leading-snug">
                  I understand that resistance is a form of engagement
                </span>
              </label>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded border-2 border-black bg-black px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-yellow-300 shadow-[4px_4px_0px_0px_#000] transition will-change-transform hover:-rotate-1 hover:scale-105 disabled:opacity-60"
                >
                  {submitting ? 'Performing Ritual…' : 'SIGN THE INFINITE FEED'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="pointer-events-none fixed inset-0 z-[101] grid place-items-center bg-black/80 animate-fadeDown">
            <div className="relative mx-6 max-w-2xl text-center text-yellow-100">
              <p className="text-2xl md:text-3xl font-black tracking-tight animate-textIn">Welcome to the Scroll Resistance</p>
              <p className="mt-2 text-base md:text-lg font-semibold opacity-90 animate-textIn [animation-delay:300ms]">You will receive no confirmation</p>
              <p className="mt-1 text-base md:text-lg font-semibold opacity-90 animate-textIn [animation-delay:600ms]">The feed continues</p>
              <div className="mt-6 text-sm md:text-base font-extrabold tracking-[0.3em] text-red-600/80 opacity-0 animate-fadeBlink">
                SCROLL = FATE
              </div>
            </div>
          </div>
        </div>
      )}
    </BaseModal>
  )
}
