import { useState, useCallback } from 'react'

export function useCTA() {
  const [consentOpen, setConsentOpen] = useState(false)
  const [objectOpen, setObjectOpen] = useState(false)

  const openConsent = useCallback(() => setConsentOpen(true), [])
  const closeConsent = useCallback(() => setConsentOpen(false), [])

  const openObject = useCallback(() => setObjectOpen(true), [])
  const closeObject = useCallback(() => setObjectOpen(false), [])

  return {
    consentOpen,
    objectOpen,
    openConsent,
    closeConsent,
    openObject,
    closeObject,
  }
}

export default useCTA
