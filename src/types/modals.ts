import type { ReactNode } from 'react'

export interface BaseModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  ariaLabel?: string
  allowBackdropClose?: boolean
  showCloseButton?: boolean
}

export interface ConsentModalProps {
  open: boolean
  onClose: () => void
}

export interface ObjectModalProps {
  open: boolean
  onClose: () => void
}
