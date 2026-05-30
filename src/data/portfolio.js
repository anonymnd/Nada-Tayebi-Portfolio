import profilePhoto from '../assets/profile.png'

/** Update LinkedIn and project GitHub links when you have the final URLs. */
export const profile = {
  name: 'Nada Tayebi',
  title: 'Étudiante en Master d’Excellence Ingénierie Logicielle',
  specialties: [
    'Développement Backend',
    'DevOps Junior',
    'Data & IA appliquée',
  ],
  email: 'nadatayebiios@gmail.com',
  phone: '+212 665693120',
  photo: profilePhoto,
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/anonymnd/Nada-Tayebi-Portfolio',
}

export const about =
  'Étudiante en Master d’Excellence en Ingénierie Logicielle, avec un profil orienté développement full stack, backend, DevOps et data & IA. Je possède une base solide en conception d’applications, développement web, APIs, bases de données relationnelles et automatisation des environnements logiciels. Mes projets m’ont permis de travailler avec Spring Boot, Laravel, Python, Docker, Kubernetes, Jenkins, SQL Server, Oracle et des outils de Business Intelligence. Rigoureuse, curieuse et autonome, je m’adapte facilement aux nouveaux outils techniques et je suis capable de passer de l’analyse fonctionnelle à la conception puis à la réalisation d’une solution structurée.'

export const education = [
  {
    school: 'Faculté des Sciences — Université Ibn Zohr, Agadir',
    degree: 'Master d’Excellence — Ingénierie Logicielle',
    period: 'Octobre 2025 — en cours',
  },
  {
    school: 'Faculté des Sciences — Université Ibn Zohr, Agadir',
    degree: 'Licence — Ingénierie Logicielle',
    period: 'Octobre 2024 — Juillet 2025',
  },
  {
    school: 'École Supérieure de Technologie, Fès',
    degree: 'DUT — Génie Informatique',
    period: 'Octobre 2021 — Juillet 2023',
  },
]

export const experience = [
  {
    role: 'Développeuse Laravel / Blade',
    org: 'Fast Sourcing Brothers',
    location: null,
    period: '2026',
    type: 'Non académique',
    bullets: [
      'Contribution au développement d’une plateforme web de sourcing et de gestion des achats.',
      'Participation à la mise en place de fonctionnalités liées aux fournisseurs, produits et processus d’approvisionnement.',
      'Utilisation de Laravel, Blade, MySQL et Python dans un contexte web réel.',
    ],
  },
  {
    role: 'Cheffe d’équipe / Backend & IA appliquée',
    org: 'Hackathon Ramadan AI — Projet SoussFlow',
    location: 'Agadir — Rabat',
    period: 'Février 2026 — Mars 2026',
    type: null,
    bullets: [
      'Pilotage d’une équipe pour le développement d’une plateforme de monitoring agricole basée sur l’IoT.',
      'Conception d’un backend structuré pour la gestion des fermes, zones, équipements et données capteurs.',
      'Intégration d’un module de détection d’anomalies basé sur le machine learning.',
    ],
  },
  {
    role: 'Développeuse Full Stack',
    org: 'École Polytechnique des Génies — projet académique',
    location: 'Fès',
    period: 'Avril 2023 — Juillet 2023',
    type: 'Académique',
    bullets: [
      'Développement d’une application web de portfolios dynamiques avec Laravel et React.js.',
      'Mise en place de fonctionnalités de publication en temps réel et d’interfaces modernes et responsives.',
      'Gestion des échanges de données via API entre le frontend et le backend.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Langages',
    items: ['Java', 'Python', 'JavaScript', 'PHP', 'C#', 'SQL'],
  },
  {
    title: 'Développement Backend',
    items: ['Spring Boot', 'JEE', 'Laravel', 'FastAPI', 'Java RMI'],
  },
  {
    title: 'Développement Frontend',
    items: [
      'React.js',
      'Blade',
      'Thymeleaf',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    title: 'DevOps',
    items: [
      'Docker',
      'Docker Compose',
      'Kubernetes',
      'Jenkins',
      'Git',
      'GitHub',
      'CI/CD',
    ],
  },
  {
    title: 'Bases de données',
    items: [
      'MySQL',
      'PostgreSQL',
      'SQL Server',
      'Oracle',
      'T-SQL',
      'PL/SQL',
      'Modélisation relationnelle',
    ],
  },
  {
    title: 'Administration BD',
    note: 'Notions en administration Oracle et SQL Server : utilisateurs, rôles, privilèges, sauvegarde, restauration et sécurité.',
  },
  {
    title: 'ORM & Persistance',
    note: 'SGBD objet, modélisation objet-relationnelle, ORM, JPA/Hibernate, intégration avec Spring Boot.',
  },
  {
    title: 'Data / IA',
    items: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Machine Learning basics',
      'Data Mining basics',
    ],
  },
  {
    title: 'IA Générative',
    note: 'Agents IA, RAG, mémoire conversationnelle, intégration de LLMs et Prompt Engineering avec Python.',
  },
  {
    title: 'Business Intelligence',
    items: [
      'Power BI',
      'Excel',
      'Talend Open Studio',
      'ETL',
      'Data Warehouse',
      'Reporting',
      'Tableaux de bord',
    ],
  },
  {
    title: 'Conception',
    items: [
      'UML',
      'Architecture logicielle',
      'Analyse fonctionnelle',
      'Documentation technique',
    ],
  },
]

export const projects = [
  {
    name: 'Distributed Online Auction System',
    stack: 'Java RMI, Spring Boot, MySQL, Railway, Thymeleaf, Tailwind CSS',
    type: 'Académique',
    link: null,
    bullets: [
      'Conception d’un système d’enchères en ligne distribué basé sur une architecture multi-serveurs.',
      'Services séparés pour l’authentification, les utilisateurs et la gestion des enchères.',
      'Java RMI pour la communication distante et Spring Boot pour la logique applicative.',
    ],
  },
  {
    name: 'Application DevOps avec CI/CD',
    stack: 'Jenkins, Docker, Docker Compose, Kubernetes, GitHub',
    type: 'Académique',
    link: null,
    bullets: [
      'Application DevOps avec conteneurisation, orchestration et automatisation du pipeline.',
      'Workflow CI/CD avec Jenkins et GitHub.',
      'Déploiement et exécution de services avec Docker Compose et Kubernetes.',
    ],
  },
  {
    name: 'SoussFlow',
    stack: 'Python, FastAPI, Streamlit, Scikit-learn, Pandas, NumPy',
    type: 'Non académique',
    link: null,
    bullets: [
      'Plateforme de monitoring agricole basée sur l’IoT et la visualisation en temps réel.',
      'Exploitation des données capteurs et intégration d’un modèle de détection d’anomalies.',
    ],
  },
  {
    name: 'Prédiction Maladie de Parkinson (ANN)',
    stack: 'Python, Pandas, NumPy, Scikit-learn, Machine Learning',
    type: 'Académique',
    link: null,
    bullets: [
      'Projet d’apprentissage automatique : prédiction de la maladie de Parkinson par réseau de neurones (ANN).',
    ],
  },
  {
    name: 'Projet Business Intelligence — comptoirDB',
    stack: 'Talend Open Studio, Power BI, Excel, ETL, Data Warehouse',
    type: 'Académique',
    link: null,
    bullets: [
      'Schéma décisionnel et transformation d’une base opérationnelle en modèle R-OLAP.',
      'Tables de dimensions, table de faits et tableaux de bord pour l’analyse décisionnelle.',
    ],
  },
  {
    name: 'Smart OS Restaurant',
    stack: 'Application web, gestion de restaurant',
    type: 'Académique',
    link: null,
    bullets: [
      'Application web orientée gestion intelligente des opérations d’un restaurant.',
      'Fonctionnalités autour de la gestion, du suivi et de l’amélioration du service.',
    ],
  },
]

export const hackathons = [
  'Winners 2ème place — Hackathon Ramadan AI 2026, projet SoussFlow.',
  'Winners 3ème place — Tech for Hope Hackathon 2026, solution technologique orientée inclusion.',
  'Winners 2ème place — Hackathon Info Days 2026, ENSA Agadir.',
  'Participation — NEXORI Guided CTF Series 2026, compétition cybersécurité régionale.',
]

export const languages = [
  { name: 'Arabe', level: 'Langue maternelle' },
  { name: 'Français', level: 'Bon niveau' },
  { name: 'Anglais', level: 'Niveau technique' },
]

export const certifications = [
  {
    title: 'Java / J2EE avec le framework Spring Boot',
    issuer: 'InnovCenter Maroc Training & Consulting',
  },
]
