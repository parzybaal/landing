export const LANDING_CONFIG = {
  whatsapp: {
    phone: '5491130085226',
    message: 'Hola, quiero crear mi usuario y cargar saldo en Win Big.'
  },
  redirectDelaySeconds: 5,
  content: {
    ticker: {
      label: 'Cargas activas',
      highlight: '24/7'
    },
    brand: {
      hotBadge: '🔥 EN VIVO',
      title: 'WIN BIG',
      subtitle: 'CASINO'
    },
    motivational: {
      prefix: '✨ Tu suerte te espera,',
      highlight: '¡Este es tu momento!',
      suffix: '✨'
    },
    form: {
      title: 'Carga de Saldo',
      lead: 'Habla con un cajero oficial para crear tu cuenta y cargar saldo.',
      buttonLabel: 'Crea tu usuario',
      quickInfo: [
        { label: 'Carga minima', value: '$ 3.000' },
        { label: 'Retiro minimo', value: '$ 6.000' }
      ]
    },
    operationsInfo: {
      summary: 'Informacion sobre cargas y retiros',
      tiers: [
        {
          conditionLines: ['Si cargas menos', 'De $ 30.000'],
          withdrawalLabel: 'Retiros hasta',
          amount: '$ 100.000',
          period: 'POR DIA'
        },
        {
          conditionLines: ['Si cargas mas', 'De $ 30.000'],
          withdrawalLabel: 'Retiros hasta',
          amount: '$ 200.000',
          period: 'POR DIA'
        }
      ],
      paymentMethodLines: [
        'Cargas por transferencia bancaria',
        'O cualquier cryptomoneda'
      ]
    },
    trustBadges: [
      { icon: '🔒', label: 'Retiros Asegurados' },
      { icon: '⚡', label: 'Pagos Instantaneos' },
      { icon: '🎁', label: 'Bonos Exclusivos' }
    ]
  } as const
}

export const WHATSAPP_PHONE = LANDING_CONFIG.whatsapp.phone

export const WHATSAPP_MESSAGE = LANDING_CONFIG.whatsapp.message

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export const REDIRECT_DELAY_SECONDS = LANDING_CONFIG.redirectDelaySeconds

export const LANDING_CONTENT = LANDING_CONFIG.content
