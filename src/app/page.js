import {
  nav,
  hero,
  stats,
  properties,
  bankLinks,
  team,
  craft,
  howItWorks,
  renovations,
  whyUs,
  learn,
  cta,
  footer,
} from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <div className="mark">匠</div>
          Takumi House
        </div>
        <ul className="nav-links">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          {nav.cta}
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">{hero.eyebrow}</div>
          <h1 className="hero-title">
            {hero.line1}
            <br />
            <em>{hero.line2}</em>
            <br />
            {hero.line3}
          </h1>
          <p className="hero-desc">{hero.desc}</p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn-primary">
              {hero.primary}
            </a>
            <a href="#renovations" className="btn-ghost">
              {hero.ghost}
            </a>
          </div>
          <div className="scroll-hint">
            <div className="scroll-line" />
            <span className="scroll-text">{hero.scroll}</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-inner">
            <div className="hero-img-top">
              <span className="hero-img-label">{hero.before}</span>
            </div>
            <div className="hero-img-bottom">
              <span className="hero-img-label hero-img-label-dark">{hero.after}</span>
            </div>
          </div>
          <div className="hero-divider">
            <div className="hero-divider-line" />
            <div className="hero-divider-badge">{hero.badge}</div>
            <div className="hero-divider-line" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PROPERTIES */}
      <section id="properties" className="section properties">
        <div className="section-inner">
          <div className="section-eyebrow">{properties.eyebrow}</div>
          <h2 className="section-title">
            {properties.title1}
            <br />
            <em>{properties.title2}</em>
          </h2>
          <p className="prop-lead">{properties.lead}</p>

          <div className="prop-sub-eyebrow">{properties.curatedLabel}</div>

          <div className="prop-grid">
            <div className="prop-card">
              <div className="prop-tag">{properties.card.tag}</div>
              <div className="prop-name">{properties.card.name}</div>
              <div className="prop-desc">{properties.card.desc}</div>
              <div className="prop-foot">
                <div>
                  <div className="prop-price-label">{properties.card.priceLabel}</div>
                  <div className="prop-price">{properties.card.price}</div>
                </div>
                <a href="#contact" className="btn-outline-sm">
                  {properties.card.enquire}
                </a>
              </div>
            </div>
            <div className="prop-card-empty">
              <div>
                <div className="mark">匠</div>
                <div className="note">{properties.empty}</div>
              </div>
            </div>
            <div className="prop-card-empty">
              <div>
                <div className="mark">匠</div>
                <div className="note">{properties.empty}</div>
              </div>
            </div>
          </div>

          <div className="banks">
            <div className="banks-eyebrow">{properties.banksLabel}</div>
            <p className="banks-lead">{properties.banksLead}</p>

            <div className="banks-grid">
              {bankLinks.map((region) => (
                <div className="bank-col" key={region.region}>
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
                <div className="link-banner-title">{properties.bannerTitle}</div>
                <div className="link-banner-desc">{properties.bannerDesc}</div>
              </div>
              <a href="#contact" className="btn-solid">
                {properties.bannerCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section team">
        <div className="section-inner">
          <div className="section-eyebrow">{team.eyebrow}</div>
          <h2 className="section-title">
            {team.title1}
            <br />
            <em>{team.title2}</em>
          </h2>
          <div className="team-grid">
            {team.cards.map((c) => (
              <div className="team-card" key={c.company}>
                <div className="team-role">{c.role}</div>
                <div className="team-company">{c.company}</div>
                <div className="team-name">{c.name}</div>
                <div className="team-divider" />
                <div className="team-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT STRIP */}
      <div className="craft-strip">
        <div className="craft-strip-text">{craft.text}</div>
        <div className="craft-strip-kanji">{craft.kanji}</div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="section hiw">
        <div className="section-inner">
          <div className="hiw-grid">
            <div className="hiw-left">
              <div className="section-eyebrow">{howItWorks.eyebrow}</div>
              <h2 className="section-title">
                {howItWorks.title1}
                <br />
                <em>{howItWorks.title2}</em>
              </h2>
              <p className="hiw-desc">{howItWorks.desc}</p>
              <a href="#contact" className="btn-primary" style={{ fontSize: 12, padding: "12px 28px" }}>
                {howItWorks.cta}
              </a>
            </div>
            <div className="hiw-steps">
              {howItWorks.steps.map((s, i) => (
                <div className="step" key={s.title}>
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
          <div className="section-eyebrow">{renovations.eyebrow}</div>
          <h2 className="section-title">
            {renovations.title1}
            <br />
            <em>{renovations.title2}</em>
          </h2>
        </div>
        <div className="reno-grid">
          {renovations.cards.map((c, i) => (
            <div className="reno-card" key={c.title}>
              <div className={`reno-card-bg reno-card-bg-${i + 1}`} />
              <div className="reno-card-content">
                <div className="reno-card-tag">{c.tag}</div>
                <div className="reno-card-title">{c.title}</div>
                <div className="reno-price-row">{c.price}</div>
                <div className="reno-card-meta">{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section diff">
        <div className="section-inner">
          <div className="section-eyebrow">{whyUs.eyebrow}</div>
          <h2 className="section-title">
            {whyUs.title1}
            <br />
            <em>{whyUs.title2}</em>
          </h2>
          <div className="diff-grid">
            {whyUs.cards.map((c) => (
              <div className="diff-card" key={c.title}>
                <div className="diff-icon" aria-hidden="true">
                  {c.icon}
                </div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARN */}
      <section id="learn" className="section">
        <div className="section-inner">
          <div className="section-eyebrow">{learn.eyebrow}</div>
          <h2 className="section-title">
            {learn.title1}
            <br />
            <em>{learn.title2}</em>
          </h2>
          <div className="learn-grid">
            <div className="learn-card learn-card-featured">
              <div className="learn-card-tag">{learn.featured.tag}</div>
              <h4>{learn.featured.title}</h4>
              <p>{learn.featured.body}</p>
              <a href="#contact" className="learn-read-more">
                {learn.featured.cta}
              </a>
            </div>
            {learn.cards.map((c) => (
              <div className="learn-card" key={c.title}>
                <div className="learn-card-tag">{c.tag}</div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
                <a href="#contact" className="learn-read-more">
                  {c.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">
        <div className="cta-inner">
          <div className="cta-eyebrow">{cta.eyebrow}</div>
          <h2 className="cta-title">
            {cta.title1}
            <em>{cta.em}</em>
            <br />
            {cta.title2}
          </h2>
          <p className="cta-sub">{cta.sub}</p>
          <ContactForm placeholder={cta.placeholder} button={cta.button} />
          <p className="cta-note">{cta.note}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Takumi House</div>
            <p className="footer-tagline">{footer.tagline}</p>
          </div>
          {footer.cols.map((col) => (
            <div className="footer-col" key={col.heading}>
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
          <span className="footer-copy">{footer.copy}</span>
          <div className="footer-legal">
            <a href="#">{footer.privacy}</a>
            <a href="#">{footer.terms}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
