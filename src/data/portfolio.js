import profilePhoto from '../assets/profile.png'

/** Update LinkedIn and project links when you have the final URLs. */
export const profile = {
  name: 'Nada Tayebi',
  title: 'Ingénieure logiciel',
  titleEn: 'Software engineer',
  tagline:
    'Développement full-stack, APIs et données — de Laravel et .NET à React, FastAPI et Spring Boot.',
  email: 'nadatayebiios@gmail.com',
  phone: '+212 665693120',
  photo: profilePhoto,
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/anonymnd/Nada-Tayebi-Portfolio',
}

export const about =
  'Étudiante en ingénierie logicielle (Master en cours), je conçois des backends structurés, des applications web full-stack et des modules d’analyse de données. Récemment chef d’équipe sur SoussFlow (hackathon Ramadan AI) et développeuse sur une plateforme de portfolios dynamiques Laravel / React.'

export const education = [
  {
    school: 'FSA — Centre d’excellence, Agadir',
    degree: 'Master — Ingénierie logicielle',
    period: 'Octobre 2025 — en cours',
  },
  {
    school: 'FSA — Centre d’excellence, Agadir',
    degree: 'Licence — Ingénierie logicielle',
    period: 'Octobre 2024 — Juillet 2025',
  },
  {
    school: 'École supérieure de technologie, Fès',
    degree: 'DUT — Génie informatique',
    period: 'Octobre 2021 — Juillet 2023',
  },
]

export const experience = [
  {
    role: 'Chef d’équipe — Projet SoussFlow',
    org: 'Hackathon Ramadan AI',
    location: 'Agadir — Rabat',
    period: 'Février 2026 — Mars 2026',
    bullets: [
      'Pilotage d’une équipe pour le développement d’une plateforme de monitoring agricole basée sur IoT.',
      'Conception et développement d’un backend structuré pour la gestion des fermes, zones et équipements.',
      'Mise en place d’un système de collecte et de simulation de données capteurs (humidité, température, etc.).',
      'Développement d’API pour la gestion et l’exploitation des données agricoles.',
      'Contribution à l’intégration d’un module d’analyse pour la détection d’anomalies.',
      'Conception d’une architecture modulaire (routes, services, base de données).',
    ],
  },
  {
    role: 'Développeuse Full Stack',
    org: 'École Polytechnique des Génies — projet académique',
    location: 'Fès',
    period: 'Avril 2023 — Juillet 2023',
    bullets: [
      'Développement d’une application web de portfolios dynamiques avec Laravel et React.js.',
      'Mise en place de fonctionnalités de publication en temps réel.',
      'Conception d’interfaces modernes et responsives (UI/UX).',
      'Gestion des échanges de données via API entre frontend et backend.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Langages',
    items: ['Java', 'Python', 'JavaScript', 'C#'],
  },
  {
    title: 'Frameworks & bibliothèques',
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
    title: 'Outils',
    items: ['Git', 'VS Code', 'GitHub'],
  },
  {
    title: 'Bases de données',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle'],
  },
]

export const projects = [
  {
    name: 'SoussFlow',
    stack:
      'Python, FastAPI, Streamlit, Scikit-learn (Isolation Forest), Pandas, NumPy',
    description:
      'Système de monitoring agricole IoT : collecte et traitement de données capteurs (humidité du sol, température) via une API backend, visualisation en temps réel avec Streamlit et modèles ML (Isolation Forest) pour détecter les anomalies d’irrigation.',
    link: null,
  },
  {
    name: 'fastsourcingbrothers',
    stack: 'Laravel, Blade, MySQL, Python',
    description:
      'Participation au développement d’une plateforme web de sourcing et de gestion des achats, avec contribution à la gestion des fournisseurs, des produits et des processus d’approvisionnement.',
    link: null,
  },
]

export const certifications = [
  {
    title: 'Java / J2EE avec le framework Spring Boot',
    issuer: 'InnovCenter Maroc Training & Consulting',
  },
]
