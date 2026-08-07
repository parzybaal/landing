import type { MouseEvent } from 'react'
import {
  getWhatsAppUrl,
  LANDING_CONTENT
} from '../constants/constants.config'
import { useWhatsAppRedirect } from '../hooks/useWhatsAppRedirect'
import WhatsAppIcon from './WhatsAppIcon'

function LandingPage() {
  const { startRedirect } = useWhatsAppRedirect()
  const {
    brand,
    motivational,
    bonus,
    form,
    steps,
    trustBadges,
    legal
  } = LANDING_CONTENT

  const handleRedirect = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    startRedirect()
  }

  return (
    <>
      <main>
        <section
          className="container"
          aria-label="Win Big plataforma de juegos"
        >
          <header className="logo">
            <div className="hotBadge">{brand.hotBadge}</div>
            <h1 className="logoText">{brand.title}</h1>
            <p className="logoSubtext">{brand.subtitle}</p>
          </header>

          <p className="motivationalText">
            <span>{motivational.highlight}</span>
          </p>

          <div className="bonusBanner">
            <span className="bonusBannerTitle">
              {bonus.banner}
              <br />
              {bonus.bannerSecondLine}
            </span>
          </div>

          <section className="form" aria-label="Crear usuario por WhatsApp">
            <h2 className="formTitle">{form.title}</h2>
            <p className="lead">{form.lead}</p>

            <div className="quickInfo">
              {form.quickInfo.map(item => (
                <div key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            <a className="button" href={getWhatsAppUrl()} onClick={handleRedirect}>
              <WhatsAppIcon />
              {form.buttonLabel}
            </a>
          </section>

          <section className="steps" aria-label={steps.title}>
            <h2 className="stepsTitle">{steps.title}</h2>
            <ol className="stepsList">
              {steps.items.map(item => (
                <li className="step" key={item.num}>
                  <span className="stepNum">{item.num}</span>
                  <div className="stepBody">
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="trustBadges">
            {trustBadges.map(badge => (
              <div className="trustBadge" key={badge.label}>
                <span className="badgeIcon">{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          <footer className="legalFooter">
            <a className="legalLink" href={legal.privacyHref}>
              {legal.privacyLabel}
            </a>
          </footer>
        </section>
      </main>
    </>
  )
}

export default LandingPage
