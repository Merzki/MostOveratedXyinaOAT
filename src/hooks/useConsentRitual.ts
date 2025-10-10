import { useEffect, useRef, useState } from 'react'
import { consentTimings } from '../utils/Modals/consentConfig'

export interface UseConsentRitualArgs {
  open: boolean
  onClose: () => void
}

export function useConsentRitual({ open, onClose }: UseConsentRitualArgs) {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const ritualTimer = useRef<number | null>(null)
  const closeTimer = useRef<number | null>(null)

  const cleanupTimers = () => {
    if (ritualTimer.current) window.clearTimeout(ritualTimer.current)
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    ritualTimer.current = null
    closeTimer.current = null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    ritualTimer.current = window.setTimeout(() => {
      setDone(true)
      closeTimer.current = window.setTimeout(() => onClose(), consentTimings.autoCloseMs)
    }, consentTimings.ritualMs)
  }

  useEffect(() => {
    if (open) {
      setSubmitting(false)
      setDone(false)
    }
    return () => {
      cleanupTimers()
    }
  }, [open])

  useEffect(() => () => cleanupTimers(), [])

  const allowBackdropClose = !submitting && !done
  const showCloseButton = !done

  return {
    submitting,
    done,
    handleSubmit,
    allowBackdropClose,
    showCloseButton,
  }
}

export default useConsentRitual
