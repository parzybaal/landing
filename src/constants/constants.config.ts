// =============================================================
//  CONFIGURACIÓN DE LA LANDING — WIN BIG
//  Editá ACÁ todos los textos del sitio. Están en orden de
//  aparición (de arriba hacia abajo en la página).
// =============================================================
export const LANDING_CONFIG = {
  // --- WhatsApp: teléfono y mensaje precargado del botón ---
  whatsapp: {
    phone: '5491127311643',
    message:
      'Hola, quiero crear mi usuario en WIN BIG y activar el bono de bienvenida del 50%. Vi que la carga mínima es de $2.000 y el retiro mínimo es de $10.000'
  },

  // --- Comportamiento ---
  redirectDelaySeconds: 4, // segundos del cartel antes de ir a WhatsApp
  showOperationsInfo: false, // mostrar/ocultar la sección de cargas y retiros

  // --- Título de la pestaña / SEO ---
  meta: {
    title: 'Carga de Fichas | Win Big',
    description: 'Win Big: cargas, retiros y atención por WhatsApp con cajeros.'
  },

  // =================== TEXTOS DE LA PÁGINA ===================
  // (en orden de aparición)
  content: {
    // 1) Cartelito de la esquina superior
    ticker: {
      label: 'Cargas activas',
      highlight: '24/7'
    },

    // 2) Encabezado / marca
    brand: {
      hotBadge: '🔥 En vivo',
      title: 'WIN BIG',
      subtitle: 'Divertite y ganá'
    },

    // 3) Frase motivacional (el "highlight" se muestra resaltado en dorado)
    motivational: {
      prefix: '✨ Tu mejor jugada empieza acá,',
      highlight: '¡este es tu momento!',
      suffix: '✨'
    },

    // 4) BONO de bienvenida
    bonus: {
      banner: '🎁 Bono de bienvenida del 50%',
      bannerSecondLine: 'para nuevos usuarios',
      example: ''
    },

    // 5) Formulario / CTA principal
    form: {
      title: 'Creá tu usuario',
      lead: 'Un asesor te crea tu cuenta y ya podes jugar con nosotros',
      buttonLabel: 'Crear usuario por WhatsApp',
      quickInfo: [
        { label: 'Carga mínima', value: '$ 2.000' },
        { label: 'Retiro mínimo', value: '$ 10.000' }
      ]
    },

    // 6) Pasos para empezar
    steps: {
      title: 'En 3 pasos ya podes jugar',
      items: [
        {
          num: '1',
          title: 'Escribís por WhatsApp',
          text: 'Tocás el botón y nos mandás el mensaje.'
        },
        {
          num: '2',
          title: 'Creamos tu usuario',
          text: 'Un asesor te crea tu cuenta al instante.'
        },
        {
          num: '3',
          title: 'Jugas en la plataforma',
          text: 'Activa tu bono y empeza a divertirte'
        }
      ]
    },

    // 7) (Opcional) Info de cargas y retiros — desactivada con "showOperationsInfo"
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

    // 8) Insignias de confianza
    trustBadges: [
      { icon: '🔒', label: 'Plataforma segura' },
      { icon: '⚡', label: 'Cargas y retiros rápidos' },
      { icon: '📲', label: 'Atención 24 hs' },
      { icon: '🎁', label: 'Bono de bienvenida' }
    ],

    // 9) Cartel de redirección (aparece al tocar un botón)
    //     En "counting": {seconds} = número y {unit} = segundo/segundos
    redirectToast: {
      icon: '💬',
      counting: 'En {seconds} {unit} vas a ser redireccionado a WhatsApp',
      unitSingular: 'segundo',
      unitPlural: 'segundos',
      redirecting: 'Redireccionando a WhatsApp...'
    },

    // 11) Pie legal
    legal: {
      age: '',
      text: ''
    }
  } as const
}

// ---------- Derivados (no hace falta editar) ----------
export const WHATSAPP_PHONE = LANDING_CONFIG.whatsapp.phone

export const WHATSAPP_MESSAGE = LANDING_CONFIG.whatsapp.message

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export const REDIRECT_DELAY_SECONDS = LANDING_CONFIG.redirectDelaySeconds
export const SHOW_OPERATIONS_INFO = LANDING_CONFIG.showOperationsInfo
export const PAGE_META = LANDING_CONFIG.meta

export const LANDING_CONTENT = LANDING_CONFIG.content
