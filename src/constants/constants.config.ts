export const LANDING_CONFIG = {
  whatsapp: {
    phone: '5491127311643',
    message: 'Hola, quiero jug4r en su plat4form4, puedes crear mi usu4ri0 por favor?'
  },
  redirectEnabled: true,
  redirectDelaySeconds: 5,
  showOperationsInfo: false,
  content: {
    ticker: {
      label: 'Carg4s activ4s',
      highlight: '24/7'
    },
    brand: {
      hotBadge: '🔥 EN VIV0',
      title: 'WIN BIG',
      subtitle: 'Div4rtite con nosotros'
    },
    motivational: {
      prefix: '✨ Tu suerte te espera,',
      highlight: '¡Este es tu momento!',
      suffix: '✨'
    },
    bonusBanner: '🎉 B0N0S EXCLUSIVOS PARA NUEV0S USUARI0S 🎉',
    form: {
      title: 'Carg4 de Sald0',
      lead: 'Habla con un ases0r para cre4r tu cuenta y jugar con nos0tros.',
      buttonLabel: 'Crea tu usuari0',
      quickInfo: [
        { label: 'C4rga minima', value: '$ 2.000' },
        { label: 'Retir0 minimo', value: '$ 5.000' }
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
    trustBadges: [
      { icon: '🔒', label: 'Retir0s Asegurad0s' },
      { icon: '⚡', label: 'Pag0s Instantane0s' },
      { icon: '🎁', label: 'Bon0s Exclusiv0s' }
    ]
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
