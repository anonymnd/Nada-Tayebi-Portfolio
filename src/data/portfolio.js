/** Update social and project links when you have the final URLs. */
export const profile = {
  name: 'Nada Tayebi',
  title: 'Software engineer',
  tagline:
    'Full-stack developer focused on APIs, data, and thoughtful interfaces — from Laravel and .NET to React and Python.',
  email: 'nadatayebiios@gmail.com',
  phone: '+212 665693120',
  photo: '/profile.png',
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/anonymnd/Nada-Tayebi-Portfolio',
}

export const education = [
  {
    school: 'FSA — Centre d’excellence, Agadir',
    degree: 'Master — Software engineering',
    period: 'October 2025 — present',
  },
  {
    school: 'FSA — Centre d’excellence, Agadir',
    degree: 'Bachelor (Licence) — Software engineering',
    period: 'October 2024 — July 2025',
  },
  {
    school: 'École supérieure de technologie, Fès',
    degree: 'DUT — Computer engineering (Génie informatique)',
    period: 'October 2021 — July 2023',
  },
]

export const experience = [
  {
    role: 'Team lead — SoussFlow',
    org: 'Ramadan AI Hackathon',
    location: 'Agadir — Rabat',
    period: 'February 2026 — March 2026',
    bullets: [
      'Led a team building an IoT-based agricultural monitoring platform.',
      'Designed and implemented a structured backend for farms, zones, and equipment.',
      'Built sensor data collection and simulation (humidity, temperature, and related metrics).',
      'Developed APIs for managing and using agricultural data.',
      'Contributed an analysis module for anomaly detection.',
      'Delivered a modular architecture (routes, services, database).',
    ],
  },
  {
    role: 'Full-stack developer',
    org: 'École polytechnique des génies — academic project',
    location: 'Fès',
    period: 'April 2023 — July 2023',
    bullets: [
      'Built a dynamic portfolio web app with Laravel and React.',
      'Implemented real-time publishing features.',
      'Designed modern, responsive UI/UX.',
      'Integrated frontend and backend via REST APIs.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'C#'],
  },
  {
    title: 'Frameworks & libraries',
    items: [
      '.NET',
      'Spring Boot',
      'JEE',
      'Laravel',
      'React',
      'FastAPI',
      'Flask',
      'Django',
      'Vue.js',
      'Angular',
      'Next.js',
    ],
  },
  {
    title: 'Tools',
    items: ['Git', 'VS Code', 'GitHub'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle'],
  },
]

export const projects = [
  {
    name: 'SoussFlow',
    stack:
      'Python, FastAPI, Streamlit, Scikit-learn (Isolation Forest), Pandas, NumPy',
    description:
      'IoT agricultural monitoring: sensor data through a backend API, Streamlit dashboards, and Isolation Forest models to spot irrigation anomalies and support decisions.',
    link: null,
  },
  {
    name: 'fastsourcingbrothers',
    stack: 'Laravel, Blade, MySQL, Python',
    description:
      'Sourcing and procurement platform: supplier, product, and purchasing workflows.',
    link: null,
  },
]

export const certifications = [
  {
    title: 'Java / J2EE with Spring Boot',
    issuer: 'InnovCenter Maroc Training & Consulting',
  },
]
