import './App.css'
import {
  profile,
  about,
  education,
  experience,
  skillGroups,
  projects,
  hackathons,
  languages,
  certifications,
} from './data/portfolio.js'
import { Reveal } from './hooks/useReveal.jsx'

function Nav() {
  const links = [
    ['Profil', '#about'],
    ['Expérience', '#experience'],
    ['Compétences', '#skills'],
    ['Projets', '#projects'],
    ['Formation', '#education'],
    ['Distinctions', '#distinctions'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="site-header animate-header">
      <a className="logo" href="#top">
        {profile.name.split(' ')[0]}
        <span className="logo-dot">.</span>
      </a>
      <nav className="nav-links" aria-label="Navigation principale">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={`mailto:${profile.email}`}>
        M&apos;écrire
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow animate-hero" style={{ '--i': 0 }}>
          Portfolio
        </p>
        <h1 id="hero-title" className="animate-hero" style={{ '--i': 1 }}>
          {profile.name}
        </h1>
        <p className="hero-role animate-hero" style={{ '--i': 2 }}>
          {profile.title}
        </p>
        <ul className="hero-specialties animate-hero" style={{ '--i': 3 }}>
          {profile.specialties.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="hero-actions animate-hero" style={{ '--i': 4 }}>
          <a className="btn primary" href="#projects">
            Mes projets
          </a>
          <a
            className="btn ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="photo-frame animate-photo">
          <img
            src={profile.photo}
            alt={`Portrait professionnel de ${profile.name}`}
            width={400}
            height={400}
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, children, className = '' }) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

function TypeBadge({ type }) {
  if (!type) return null
  return <span className="type-badge">{type}</span>
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Section id="about" title="Profil">
          <Reveal delay={80}>
            <p className="prose">{about}</p>
          </Reveal>
        </Section>
        <Section id="experience" title="Expérience">
          <div className="cards">
            {experience.map((job, i) => (
              <Reveal key={job.role + job.period} delay={i * 100}>
                <article className="card hover-lift">
                  <header className="card-head">
                    <div className="card-title-row">
                      <h3 className="card-title">{job.role}</h3>
                      <TypeBadge type={job.type} />
                    </div>
                    <p className="card-sub">
                      {job.org}
                      {job.location ? ` · ${job.location}` : ''}
                    </p>
                    <p className="card-period">{job.period}</p>
                  </header>
                  <ul className="bullet-list">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
        <Section id="skills" title="Compétences techniques">
          <div className="skill-grid">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <div className="skill-block hover-lift">
                  <h3 className="skill-block-title">{g.title}</h3>
                  {g.note ? (
                    <p className="skill-note">{g.note}</p>
                  ) : (
                    <ul className="skill-tags">
                      {g.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
        <Section id="projects" title="Projets">
          <div className="cards">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="card project-card hover-lift">
                  <div className="project-top">
                    <div className="card-title-row">
                      <h3 className="card-title">{p.name}</h3>
                      <TypeBadge type={p.type} />
                    </div>
                    {p.link ? (
                      <a
                        className="project-link"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                  <p className="project-stack">{p.stack}</p>
                  <ul className="bullet-list">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
        <Section id="education" title="Formation">
          <ul className="timeline">
            {education.map((e, i) => (
              <Reveal as="li" key={e.degree + e.period} delay={i * 90}>
                <div className="timeline-marker" aria-hidden />
                <div className="timeline-card hover-lift">
                  <p className="timeline-period">{e.period}</p>
                  <h3 className="timeline-heading">{e.degree}</h3>
                  <p className="timeline-meta">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>
        <Section id="distinctions" title="Hackathons & distinctions">
          <ul className="award-list">
            {hackathons.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 80}>
                {item}
              </Reveal>
            ))}
          </ul>
        </Section>
        <Section id="certifications" title="Certifications">
          <ul className="cert-list">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 90}>
                <span className="cert-title">{c.title}</span>
                <span className="cert-issuer">{c.issuer}</span>
              </Reveal>
            ))}
          </ul>
        </Section>
        <Section id="languages" title="Langues">
          <ul className="lang-list">
            {languages.map((lang, i) => (
              <Reveal as="li" key={lang.name} delay={i * 80}>
                <span className="lang-name">{lang.name}</span>
                <span className="lang-level">{lang.level}</span>
              </Reveal>
            ))}
          </ul>
        </Section>
        <footer className="footer" id="contact">
          <Reveal className="footer-inner">
            <h2 className="footer-title">Discutons</h2>
            <p className="footer-lead">
              Ouverte aux stages, projets et collaborations.
            </p>
            <div className="footer-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span className="footer-sep" aria-hidden>
                ·
              </span>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                {profile.phone}
              </a>
            </div>
            <div className="footer-social">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <p className="footer-copy">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </Reveal>
        </footer>
      </main>
    </>
  )
}

export default App
