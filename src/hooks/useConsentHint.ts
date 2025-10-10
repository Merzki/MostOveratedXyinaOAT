import { useCallback, useEffect, useRef, useState } from 'react'
import { jokes } from '../utils/Modals/showJokes'

export function useConsentHint() {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [key, setKey] = useState(0)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
  }

  const onAttempt = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()

    clearTimer()

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    setMessage(randomJoke)

    setKey((k) => k + 1)

    setVisible(true)
    hideTimerRef.current = setTimeout(() => setVisible(false), 5000)
  }, [])

  useEffect(() => () => clearTimer(), [])

  return {
    visible,
    message,
    key,
    onAttempt,
  }
}

export default useConsentHint
