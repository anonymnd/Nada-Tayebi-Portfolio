import './App.css'
import {
  profile,
  education,
  experience,
  skillGroups,
  projects,
  certifications,
} from './data/portfolio.js'

function Nav() {
  const links = [
    ['About', '#about'],
    ['Education', '#education'],
    ['Experience', '#experience'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="site-header">
      <a className="logo" href="#top">
        {profile.name.split(' ')[0]}
        <span className="logo-dot">.</span>
      </a>
      <nav className="nav-links" aria-label="Primary">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={`mailto:${profile.email}`}>
        Email me
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            Selected work
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
        <div className="photo-frame">
          <img
            src={profile.photo}
            alt={`${profile.name}, professional portrait`}
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
        <h2 className="section-title">{title}</h2>
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
        <Section id="about" title="About">
          <p className="prose">
            I am a software engineering student and developer with hands-on
            experience across backend APIs, full-stack web apps, and data-heavy
            features. Recent work spans hackathon leadership on an agricultural
            IoT platform and academic projects pairing Laravel with React.
          </p>
        </Section>
        <Section id="education" title="Education">
          <ul className="timeline">
            {education.map((e) => (
              <li key={e.degree + e.period}>
                <div className="timeline-marker" aria-hidden />
                <div className="timeline-card">
                  <p className="timeline-period">{e.period}</p>
                  <h3 className="timeline-heading">{e.degree}</h3>
                  <p className="timeline-meta">{e.school}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
        <Section id="experience" title="Experience">
          <div className="cards">
            {experience.map((job) => (
              <article className="card" key={job.role + job.period}>
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
            ))}
          </div>
        </Section>
        <Section id="skills" title="Skills">
          <div className="skill-grid">
            {skillGroups.map((g) => (
              <div className="skill-block" key={g.title}>
                <h3 className="skill-block-title">{g.title}</h3>
                <ul className="skill-tags">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        <Section id="projects" title="Projects">
          <div className="cards">
            {projects.map((p) => (
              <article className="card project-card" key={p.name}>
                <div className="project-top">
                  <h3 className="card-title">{p.name}</h3>
                  {p.link ? (
                    <a
                      className="project-link"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  ) : null}
                </div>
                <p className="project-stack">{p.stack}</p>
                <p className="prose tight">{p.description}</p>
              </article>
            ))}
          </div>
        </Section>
        <Section id="certifications" title="Certifications">
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c.title}>
                <span className="cert-title">{c.title}</span>
                <span className="cert-issuer">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </Section>
        <footer className="footer" id="contact">
          <div className="footer-inner">
            <h2 className="footer-title">Let’s talk</h2>
            <p className="footer-lead">
              Open to internships, projects, and collaborations.
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
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
