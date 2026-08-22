import ContactForm from "@/components/ContactForm";
import { ICONS } from "./icons";

/**
 * 英語版・日本語版で共通のページ構造。
 * props で渡された content オブジェクトを描画するだけなので、
 * ここを直せば両方の言語に自動で反映される。
 */
export default function SiteBody({ c }) {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <div className="mark">匠</div>
          Takumi House
        </div>
        <ul className="nav-links">
          {c.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          {c.nav.cta}
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">{c.hero.eyebrow}</div>
          <h1 className="hero-title">
            {c.hero.line1}
            <br />
            <em>{c.hero.line2}</em>
            <br />
            {c.hero.line3}
          </h1>
          <p className="hero-desc">{c.hero.desc}</p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn-primary">
              {c.hero.primary}
            </a>
            <a href="#renovations" className="btn-ghost">
              {c.hero.ghost}
            </a>
          </div>
          <div className="scroll-hint">
            <div className="scroll-line" />
            <span className="scroll-text">{c.hero.scroll}</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-inner">
            <div className="hero-img-top">
              <span className="hero-img-label">{c.hero.before}</span>
            </div>
            <div className="hero-img-bottom">
              <span className="hero-img-label hero-img-label-dark">{c.hero.after}</span>
            </div>
          </div>
          <div className="hero-divider">
            <div className="hero-divider-line" />
            <div className="hero-divider-badge">{c.hero.badge}</div>
            <div className="hero-divider-line" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {c.stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PROPERTIES */}
      <section id="properties" className="section properties">
        <div className="section-inner">
          <div className="section-eyebrow">{c.properties.eyebrow}</div>
          <h2 className="section-title">
            {c.properties.title1}
            <br />
            <em>{c.properties.title2}</em>
          </h2>
          <p className="prop-lead">{c.properties.lead}</p>

          <div className="prop-sub-eyebrow">{c.properties.curatedLabel}</div>

          <div className="prop-grid">
            <div className="prop-card">
              <div className="prop-tag">{c.properties.card.tag}</div>
              <div className="prop-name">{c.properties.card.name}</div>
              <div className="prop-desc">{c.properties.card.desc}</div>
              <div className="prop-foot">
                <div>
                  <div className="prop-price-label">{c.properties.card.priceLabel}</div>
                  <div className="prop-price">{c.properties.card.price}</div>
                </div>
                <a href="#contact" className="btn-outline-sm">
                  {c.properties.card.enquire}
                </a>
              </div>
            </div>
            <div className="prop-card-empty">
              <div>
                <div className="mark">匠</div>
                <div className="note">{c.properties.empty}</div>
              </div>
            </div>
            <div className="prop-card-empty">
              <div>
                <div className="mark">匠</div>
                <div className="note">{c.properties.empty}</div>
              </div>
            </div>
          </div>

          <div className="banks">
            <div className="banks-eyebrow">{c.properties.banksLabel}</div>
            <p className="banks-lead">{c.properties.banksLead}</p>

            <div className="banks-grid">
              {c.bankLinks.map((region, i) => (
                <div className="bank-col" key={i}>
                  <h5>{region.region}</h5>
                  <div className="bank-links">
                    {region.items.map((item) => (
                      <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
                        <span className="arrow">→</span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="link-banner">
              <div>
                <div className="link-banner-title">{c.properties.bannerTitle}</div>
                <div className="link-banner-desc">{c.properties.bannerDesc}</div>
              </div>
              <a href="#contact" className="btn-solid">
                {c.properties.bannerCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section team">
        <div className="section-inner">
          <div className="section-eyebrow">{c.team.eyebrow}</div>
          <h2 className="section-title">
            {c.team.title1}
            <br />
            <em>{c.team.title2}</em>
          </h2>
          <div className="team-grid">
            {c.team.cards.map((card, i) => (
              <div className="team-card" key={i}>
                <div className="team-role">{card.role}</div>
                <div className="team-company">{card.company}</div>
                <div className="team-name">{card.name}</div>
                <div className="team-divider" />
                <div className="team-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT STRIP */}
      <div className="craft-strip">
        <div className="craft-strip-text">{c.craft.text}</div>
        <div className="craft-strip-kanji">{c.craft.kanji}</div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="section hiw">
        <div className="section-inner">
          <div className="hiw-grid">
            <div className="hiw-left">
              <div className="section-eyebrow">{c.howItWorks.eyebrow}</div>
              <h2 className="section-title">
                {c.howItWorks.title1}
                <br />
                <em>{c.howItWorks.title2}</em>
              </h2>
              <p className="hiw-desc">{c.howItWorks.desc}</p>
              <a href="#contact" className="btn-primary" style={{ fontSize: 12, padding: "12px 28px" }}>
                {c.howItWorks.cta}
              </a>
            </div>
            <div className="hiw-steps">
              {c.howItWorks.steps.map((s, i) => (
                <div className="step" key={i}>
                  <div className="step-num">{String(i + 1).padStart(2, "0")} —</div>
                  <div className="step-content">
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                    {s.note && <span className="step-note">{s.note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RENOVATIONS */}
      <section id="renovations" className="section renovations">
        <div className="section-inner">
          <div className="section-eyebrow">{c.renovations.eyebrow}</div>
          <h2 className="section-title">
            {c.renovations.title1}
            <br />
            <em>{c.renovations.title2}</em>
          </h2>
        </div>
        <div className="reno-grid">
          {c.renovations.cards.map((card, i) => (
            <div className="reno-card" key={i}>
              <div className={`reno-card-bg reno-card-bg-${i + 1}`} />
              <div className="reno-card-content">
                <div className="reno-card-tag">{card.tag}</div>
                <div className="reno-card-title">{card.title}</div>
                <div className="reno-price-row">{card.price}</div>
                <div className="reno-card-meta">{card.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section diff">
        <div className="section-inner">
          <div className="section-eyebrow">{c.whyUs.eyebrow}</div>
          <h2 className="section-title">
            {c.whyUs.title1}
            <br />
            <em>{c.whyUs.title2}</em>
          </h2>
          <div className="diff-grid">
            {c.whyUs.cards.map((card, i) => {
              const Icon = ICONS[card.icon];
              return (
                <div className="diff-card" key={i}>
                  <div className="diff-icon" aria-hidden="true">
                    {Icon ? <Icon /> : null}
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARN */}
      <section id="learn" className="section">
        <div className="section-inner">
          <div className="section-eyebrow">{c.learn.eyebrow}</div>
          <h2 className="section-title">
            {c.learn.title1}
            <br />
            <em>{c.learn.title2}</em>
          </h2>
          <div className="learn-grid">
            <div className="learn-card learn-card-featured">
              <div className="learn-card-tag">{c.learn.featured.tag}</div>
              <h4>{c.learn.featured.title}</h4>
              <p>{c.learn.featured.body}</p>
              <a href="#contact" className="learn-read-more">
                {c.learn.featured.cta}
              </a>
            </div>
            {c.learn.cards.map((card, i) => (
              <div className="learn-card" key={i}>
                <div className="learn-card-tag">{card.tag}</div>
                <h4>{card.title}</h4>
                <p>{card.body}</p>
                <a href="#contact" className="learn-read-more">
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">
        <div className="cta-inner">
          <div className="cta-eyebrow">{c.cta.eyebrow}</div>
          <h2 className="cta-title">
            {c.cta.title1}
            <em>{c.cta.em}</em>
            <br />
            {c.cta.title2}
          </h2>
          <p className="cta-sub">{c.cta.sub}</p>
          <ContactForm placeholder={c.cta.placeholder} button={c.cta.button} />
          <p className="cta-note">{c.cta.note}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Takumi House</div>
            <p className="footer-tagline">{c.footer.tagline}</p>
          </div>
          {c.footer.cols.map((col, i) => (
            <div className="footer-col" key={i}>
              <h5>{col.heading}</h5>
              <ul className="footer-links">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">{c.footer.copy}</span>
          <div className="footer-legal">
            <a href="#">{c.footer.privacy}</a>
            <a href="#">{c.footer.terms}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
