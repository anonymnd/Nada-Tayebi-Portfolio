import './App.css'
import {
  profile,
  about,
  education,
  experience,
  skillGroups,
  projects,
  certifications,
} from './data/portfolio.js'
import { Reveal } from './hooks/useReveal.jsx'

function Nav() {
  const links = [
    ['À propos', '#about'],
    ['Formation', '#education'],
    ['Expérience', '#experience'],
    ['Compétences', '#skills'],
    ['Projets', '#projects'],
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
        <p className="hero-tagline animate-hero" style={{ '--i': 3 }}>
          {profile.tagline}
        </p>
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

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Section id="about" title="À propos">
          <Reveal delay={80}>
            <p className="prose">{about}</p>
          </Reveal>
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
        <Section id="experience" title="Expérience">
          <div className="cards">
            {experience.map((job, i) => (
              <Reveal key={job.role + job.period} delay={i * 100}>
                <article className="card hover-lift">
                  <header className="card-head">
                    <h3 className="card-title">{job.role}</h3>
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
        <Section id="skills" title="Compétences">
          <div className="skill-grid">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="skill-block hover-lift">
                  <h3 className="skill-block-title">{g.title}</h3>
                  <ul className="skill-tags">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
        <Section id="projects" title="Projets">
          <div className="cards">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className="card project-card hover-lift">
                  <div className="project-top">
                    <h3 className="card-title">{p.name}</h3>
                    {p.link ? (
                      <a
                        className="project-link"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Voir
                      </a>
                    ) : null}
                  </div>
                  <p className="project-stack">{p.stack}</p>
                  <p className="prose tight">{p.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
