import type { MouseEvent } from 'react'
import { LANDING_CONTENT, WHATSAPP_URL } from '../constants/constants.config'
import { useWhatsAppRedirect } from '../hooks/useWhatsAppRedirect'
import WhatsAppIcon from './WhatsAppIcon'

function LandingPage() {
  const { startRedirect } = useWhatsAppRedirect()
  const {
    ticker,
    brand,
    motivational,
    bonus,
    form,
    steps,
    trustBadges,
    secondaryCta,
    legal
  } = LANDING_CONTENT

  const handleRedirect = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    startRedirect()
  }

  return (
    <>
      <div className="jackpotTicker">
        {ticker.label} <span>{ticker.highlight}</span>
      </div>

      <main>
        <section
          className="container"
          aria-label="Win Big cajeros por WhatsApp"
        >
          <header className="logo">
            <div className="hotBadge">{brand.hotBadge}</div>
            <h1 className="logoText">{brand.title}</h1>
            <p className="logoSubtext">{brand.subtitle}</p>
          </header>

          <p className="motivationalText">
            {motivational.prefix} <span>{motivational.highlight}</span>{' '}
            {motivational.suffix}
          </p>

          <div className="bonusBanner">
            <span className="bonusBannerTitle">{bonus.banner}</span>
            <span className="bonusBannerExample">{bonus.example}</span>
          </div>

          <section className="form" aria-label="Cargar saldo por WhatsApp">
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

            <a className="button" href={WHATSAPP_URL} onClick={handleRedirect}>
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

          {/* operationsInfo comentado temporalmente
          <details
            className="liveStats"
            open
            aria-label="Informacion de operaciones"
          >
            <summary>{operationsInfo.summary}</summary>
            <div className="statsContent">
              {operationsInfo.tiers.map(tier => (
                <div className="stat" key={tier.amount}>
                  <div className="statValue">
                    {tier.conditionLines.map(line => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                  <div className="statLabel">
                    {tier.withdrawalLabel}
                    <span className="statAmount">{tier.amount}</span>
                    <small>{tier.period}</small>
                  </div>
                </div>
              ))}
              <div className="paymentStat">
                {operationsInfo.paymentMethodLines.map(line => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          </details>
          */}

          <div className="trustBadges">
            {trustBadges.map(badge => (
              <div className="trustBadge" key={badge.label}>
                <span className="badgeIcon">{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          <a
            className="button buttonSecondary"
            href={WHATSAPP_URL}
            onClick={handleRedirect}
          >
            <WhatsAppIcon />
            {secondaryCta}
          </a>

          <p className="legalFooter">
            <span className="legalAge">{legal.age}</span> {legal.text}
          </p>
        </section>
      </main>
    </>
  )
}

export default LandingPage
