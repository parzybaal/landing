import { WHATSAPP_URL } from '../constants/constants.config'

export function useWhatsAppRedirect() {
  const startRedirect = () => {
    window.location.href = WHATSAPP_URL
  }

  return { startRedirect }
}
