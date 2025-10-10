import { useEffect, useRef, useState } from 'react'
import BaseModal from './BaseModal'
import { useConsentRitual } from '../../hooks/useConsentRitual'
import type { ConsentModalProps } from '../../types/modals'
import { consentText } from '../../utils/Modals/consentConfig'
import { consentStyles } from '../../utils/Modals/styles'
import { jokes } from '../../utils/Modals/showJokes'
import CheckboxHint from '../atoms/CheckboxHint'

export default function ConsentModal({ open, onClose }: ConsentModalProps) {
  const {
    submitting,
    done,
    handleSubmit,
    allowBackdropClose,
    showCloseButton,
  } = useConsentRitual({ open, onClose })

  const [hintVisible, setHintVisible] = useState(false)
  const [hintMessage, setHintMessage] = useState('')
  const [hintKey, setHintKey] = useState(0)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current)
        hideTimerRef.current = null
      }
    }
  }, [])

  const handleCheckboxAttempt = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    setHintMessage(randomJoke)

    setHintKey((k) => k + 1)

    setHintVisible(true)
    hideTimerRef.current = setTimeout(() => setHintVisible(false), 5000)
  }

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      ariaLabel={consentText.ariaLabel}
      allowBackdropClose={allowBackdropClose}
      showCloseButton={showCloseButton}
    >
      {!done ? (
        <div className={consentStyles.card}>
          <div className="space-y-6 relative">
            <header className="text-center">
              <h3 className={consentStyles.headerTitle}>{consentText.title}</h3>
              <p className={consentStyles.headerSubtitle}>{consentText.subtitle}</p>
            </header>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest">{consentText.nameLabel}</span>
                <input
                  type="text"
                  placeholder={consentText.namePlaceholder}
                  className={consentStyles.input}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest">{consentText.hoursLabel}</span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder={consentText.hoursPlaceholder}
                  className={consentStyles.input}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest">{consentText.lookingLabel}</span>
                <input
                  type="text"
                  placeholder={consentText.lookingPlaceholder}
                  className={consentStyles.input}
                />
              </label>

              <label className="flex items-start gap-2 relative">
                <input
                  type="checkbox"
                  checked
                  required
                  onClick={handleCheckboxAttempt}
                  className="mt-1 h-4 w-4 accent-black cursor-not-allowed"
                  readOnly
                />
                <span className="text-xs font-semibold leading-snug">
                  {consentText.checkboxLabel}
                </span>

                <CheckboxHint key={hintKey} message={hintMessage} visible={hintVisible} />
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className={consentStyles.submitButton}
                >
                  {submitting ? consentText.submittingLabel : consentText.submitLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className={consentStyles.doneOverlay}>
            <div className="relative mx-6 max-w-2xl text-center text-yellow-100">
              <p className={consentStyles.doneTitle}>{consentText.doneTitle}</p>
              <p className={`${consentStyles.doneSubtitle} [animation-delay:300ms]`}>{consentText.doneSubtitle1}</p>
              <p className={`${consentStyles.doneSubtitle} [animation-delay:600ms]`}>{consentText.doneSubtitle2}</p>
              <div className={consentStyles.doneFooter}>
                {consentText.doneFooter}
              </div>
            </div>
          </div>
        </div>
      )}
    </BaseModal>
  )
}
