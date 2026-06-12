import { useEffect, useState } from 'react'
import {
  REDIRECT_DELAY_SECONDS,
  WHATSAPP_URL
} from '../constants/constants.config'

export function useWhatsAppRedirect() {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY_SECONDS)

  useEffect(() => {
    if (secondsLeft <= 0) {
      window.location.href = WHATSAPP_URL
      return
    }

    const timer = window.setTimeout(() => {
      setSecondsLeft(current => current - 1)
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [secondsLeft])

  const toastMessage =
    secondsLeft > 0
      ? `En ${secondsLeft} segundo${secondsLeft === 1 ? '' : 's'} vas a ser redireccionado a WhatsApp`
      : 'Redireccionando a WhatsApp...'

  return { secondsLeft, toastMessage }
}
