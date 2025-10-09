import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface BaseModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  ariaLabel?: string
  allowBackdropClose?: boolean
  showCloseButton?: boolean
}

export default function BaseModal({ open, onClose, children, ariaLabel, allowBackdropClose = true, showCloseButton = true }: BaseModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  const node = (
    <div
      ref={overlayRef}
      aria-modal="true"
      role="dialog"
      aria-label={ariaLabel}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-[1px] animate-fadeIn"
      onMouseDown={(e) => {
        if (!allowBackdropClose) return
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div
        ref={contentRef}
        className="relative m-4 w-full max-w-2xl origin-center animate-popIn"
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute -right-3 -top-3 z-10 rounded-sm border-2 border-black bg-yellow-300 px-3 py-2 text-xs font-extrabold shadow hover:-rotate-2 hover:scale-105 md:-right-4 md:-top-4"
          >
            ✕
          </button>
        )}
        {children}
      </div>
    </div>
  )

  return createPortal(node, document.body)
}
