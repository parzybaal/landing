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
    title: 'Plataforma de juegos | Win Big',
    description:
      'Win Big: plataforma de juegos.'
  },

  // =================== TEXTOS DE LA PÁGINA ===================
  // (en orden de aparición)
  content: {
    // 1) Cartelito de la esquina superior
    ticker: {
      label: 'Usuarios activos',
      highlight: '24/7'
    },

    // 2) Encabezado / marca
    brand: {
      hotBadge: '🔥 En vivo',
      title: 'WIN BIG',
      subtitle: 'Plataforma de juegos'
    },

    // 3) Frase motivacional (el "highlight" se muestra resaltado en dorado)
    motivational: {
      highlight: '¡ESTE ES TU MOMENTO!'
    },

    // 4) BONO de bienvenida
    bonus: {
      banner: '🎁 Bono de bienvenida del 50%',
      bannerSecondLine: 'para nuevos usuarios'
    },

    // 5) Formulario / CTA principal
    form: {
      title: 'Creá tu usuario',
      lead: 'Un asesor te crea tu cuenta y ya podés empezar a jugar',
      buttonLabel: 'Crear usuario por WhatsApp',
      quickInfo: [
        { label: 'Carga mínima', value: '$ 2.000' },
        { label: 'Retiro mínimo', value: '$ 10.000' }
      ]
    },

    // 6) Pasos para empezar
    steps: {
      title: 'En 3 pasos ya podés jugar',
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
          title: 'Jugás en la plataforma',
          text: 'Activá tu bono y empezá a divertirte'
        }
      ]
    },

    trustBadges: [
      { icon: '🔒', label: 'Plataforma segura' },
      { icon: '⚡', label: 'Acceso rápido' },
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
