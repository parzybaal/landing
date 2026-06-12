export const LANDING_CONFIG = {
  whatsapp: {
    phone: '5491130085226',
    message: 'Hola, quiero juegar en su plataforma, puedes crear un usuario?'
  },
  redirectEnabled: true,
  redirectDelaySeconds: 5,
  showOperationsInfo: false,
  content: {
    ticker: {
      label: 'Cargas activas',
      highlight: '24/7'
    },
    brand: {
      hotBadge: '🔥 EN VIVO',
      title: 'WIN BIG',
      subtitle: 'Divertite con nosotros'
    },
    motivational: {
      prefix: '✨ Tu suerte te espera,',
      highlight: '¡Este es tu momento!',
      suffix: '✨'
    },
    bonusBanner: '🎉 BONOS EXCLUSIVOS PARA NUEVOS USUARIOS 🎉',
    form: {
      title: 'Carga de Saldo',
      lead: 'Habla con un asesor para crear tu cuenta y jugar con nosotros.',
      buttonLabel: 'Crea tu usuario',
      quickInfo: [
        { label: 'Carga minima', value: '$ 2.000' },
        { label: 'Retiro minimo', value: '$ 5.000' }
      ]
    },
    // operationsInfo: {
    //   summary: 'Informacion sobre cargas y retiros',
    //   tiers: [
    //     {
    //       conditionLines: ['Si cargas menos', 'De $ 30.000'],
    //       withdrawalLabel: 'Retiros hasta',
    //       amount: '$ 100.000',
    //       period: 'POR DIA'
    //     },
    //     {
    //       conditionLines: ['Si cargas mas', 'De $ 30.000'],
    //       withdrawalLabel: 'Retiros hasta',
    //       amount: '$ 200.000',
    //       period: 'POR DIA'
    //     }
    //   ],
    //   paymentMethodLines: [
    //     'Cargas por transferencia bancaria',
    //     'O cualquier cryptomoneda'
    //   ]
    // },
    // trustBadges: [
    //   { icon: '🔒', label: 'Retiros Asegurados' },
    //   { icon: '⚡', label: 'Pagos Instantaneos' },
    //   { icon: '🎁', label: 'Bonos Exclusivos' }
    // ]
  } as const
}

export const WHATSAPP_PHONE = LANDING_CONFIG.whatsapp.phone

export const WHATSAPP_MESSAGE = LANDING_CONFIG.whatsapp.message

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export const REDIRECT_ENABLED = LANDING_CONFIG.redirectEnabled
export const REDIRECT_DELAY_SECONDS = LANDING_CONFIG.redirectDelaySeconds
export const SHOW_OPERATIONS_INFO = LANDING_CONFIG.showOperationsInfo

export const LANDING_CONTENT = LANDING_CONFIG.content
