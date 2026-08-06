import { getWhatsAppUrl } from '../constants/constants.config'

export function useWhatsAppRedirect() {
  const startRedirect = () => {
    window.location.href = getWhatsAppUrl()
  }

  return { startRedirect }
}
