// =============================================================
//  CONFIGURACIÓN DE LA LANDING — WIN BIG
//  Editá ACÁ todos los textos del sitio. Están en orden de
//  aparición (de arriba hacia abajo en la página).
// =============================================================
export const LANDING_CONFIG = {
  // --- WhatsApp: endpoint público del botón ---
  whatsapp: {
    endpoint:
      'https://win-big.digital/api/public/w/u8xm0P4DMMNxJAOMpZz4z4wbXxqIM2ZC'
  },

  // --- Comportamiento ---
  redirectDelaySeconds: 4, // segundos del cartel antes de ir a WhatsApp

  // --- Título de la pestaña / SEO ---
  meta: {
    title: 'Plataforma de jueg0s | Win Big',
    description:
      'Win Big: plataforma de juegos.'
  },

  // =================== TEXTOS DE LA PÁGINA ===================
  // (en orden de aparición)
  content: {
    // 1) Cartelito de la esquina superior
    ticker: {
      label: 'Usuarios activ0s',
      highlight: '24/7'
    },

    // 2) Encabezado / marca
    brand: {
      hotBadge: '🔥 En vivo',
      title: 'WIN BIG',
      subtitle: 'Plataform4 de jueg0s'
    },

    // 3) Frase motivacional (el "highlight" se muestra resaltado en dorado)
    motivational: {
      highlight: '¡ESTE ES TU MOMENT0!'
    },

    // 4) BONO de bienvenida
    bonus: {
      banner: '🎁 Bon0 de bienven1da del 5O%',
      bannerSecondLine: 'para nuevos usuari0s'
    },

    // 5) Formulario / CTA principal
    form: {
      title: 'Creá tu usuari0',
      lead: 'Un asesor te crea tu cuent4 y ya podes empezar a jug4r',
      buttonLabel: 'Crear usu4rio por WhatsApp',
      quickInfo: [
        { label: 'C4rga mínima', value: '$ 2.000' },
        { label: 'Retir0 mínim0', value: '$ 10.000' }
      ]
    },

    // 6) Pasos para empezar
    steps: {
      title: 'En 3 pasos ya podes jug4r',
      items: [
        {
          num: '1',
          title: 'Escribís por WhatsApp',
          text: 'Tocás el botón y nos mandás el mensaje.'
        },
        {
          num: '2',
          title: 'Creamos tu usu4rio',
          text: 'Un asesor te crea tu cuent4 al instante.'
        },
        {
          num: '3',
          title: 'Jug4s en la plataforma',
          text: 'Act1va tu b0no y empeza a divertirte'
        }
      ]
    },

    trustBadges: [
      { icon: '🔒', label: 'Plataforma segura' },
      { icon: '⚡', label: 'Acceso rápido' },
      { icon: '📲', label: 'Atención 24 hs' },
      { icon: '🎁', label: 'B0no de bienvenida' }
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

    // 10) Pie / privacidad
    legal: {
      privacyLabel: 'Política de privacidad',
      privacyHref: '/privacidad.html'
    }
  } as const
}

// ---------- Derivados (no hace falta editar) ----------
export const WHATSAPP_URL = LANDING_CONFIG.whatsapp.endpoint

export function getWhatsAppUrl() {
  const ref = new URLSearchParams(window.location.search).get('fp_ref')

  if (ref === null || ref === '') {
    return WHATSAPP_URL
  }

  return `${WHATSAPP_URL}?fp_ref=${encodeURIComponent(ref)}`
}

export const REDIRECT_DELAY_SECONDS = LANDING_CONFIG.redirectDelaySeconds
export const PAGE_META = LANDING_CONFIG.meta

export const LANDING_CONTENT = LANDING_CONFIG.content
