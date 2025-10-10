import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { BaseModalProps } from '../../types/modals'
import { modalStyles } from '../../utils/Modals/styles'

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
      className={modalStyles.overlay}
      onMouseDown={(e) => {
        if (!allowBackdropClose) return
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div
        ref={contentRef}
        className={modalStyles.content}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className={modalStyles.closeButton}
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
