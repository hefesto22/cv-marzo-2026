// ============================================================
// cv.en.ts — CV content in ENGLISH
// Mirror of cv.es.ts — keep both in sync when updating
// ============================================================

import type { CV } from './types';

export const cvEn: CV = {
  personal: {
    name: 'Mauricio Cruz',
    title: 'Full Stack Developer',
    location: 'Santa Rosa de Copán, Honduras',
    email: 'olympocruz@gmail.com',
    phone: 'https://wa.me/50433012826',
    linkedin: 'https://www.linkedin.com/in/mauricio-cruz-garcia-939b61370',
    website: 'https://olympohn.com',
    summary:
      "I'm a Full Stack developer with 4+ years turning ideas into real software. I care deeply about writing clean code that others can understand and maintain — not just code that works today, but scales tomorrow. I work with Clean Architecture and DDD because I believe structure matters as much as functionality. I learn fast, adapt better, and enjoy both backend and frontend equally.",
  },

  experience: [
    {
      role: 'Full Stack Developer | Founder',
      company: 'Inversiones Olympo',
      location: 'Santa Rosa de Copán, Honduras',
      startDate: 'January 2024',
      endDate: null,
      description: [
        'Full Stack development covering backend and frontend with a focus on performance and user experience.',
        'Applied Clean Architecture and Domain-Driven Design (DDD) in production systems.',
        'Implemented version control (Git), continuous integration, automated testing, and technical documentation.',
        'Database optimization, legacy code refactoring, and security auditing.',
        'Agile project management with multidisciplinary teams.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'DIPROMA',
      location: 'Santa Rosa de Copán, Honduras',
      startDate: 'January 2022',
      endDate: 'December 2023',
      description: [
        'Development and maintenance of internal systems for administrative and operational process management.',
        'Implementation of reporting modules and workflow automation.',
        'Collaboration with multidisciplinary teams under agile methodologies.',
        'Technical support and documentation of legacy systems.',
        'Participation in migrating manual processes to digital solutions.',
      ],
    },
  ],

  education: [
    {
      degree: 'Systems Engineering',
      institution: 'Universidad Cristiana Evangélica Nuevo Milenio',
      location: 'Santa Rosa de Copán, Honduras',
      startDate: 'January 2022',
      endDate: 'September 2026',
    },
  ],

  skills: [
    {
      category: 'Languages',
      skills: ['PHP', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Python', 'SQL'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Laravel', 'Filament', 'Inertia.js', 'Livewire', 'React', 'Vue', 'Flutter', 'Node.js', 'Express.js'],
    },
    {
      category: 'Styling & UI',
      skills: ['Tailwind CSS', 'Bootstrap', 'Vite'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Firebase'],
    },
    {
      category: 'DevOps & Infrastructure',
      skills: ['Git', 'GitHub', 'Docker', 'Nginx', 'AWS', 'CI/CD'],
    },
    {
      category: 'Methodologies',
      skills: ['Clean Architecture', 'DDD', 'Agile', 'QA Testing'],
    },
    {
      category: 'Artificial Intelligence & Automation',
      skills: ['OpenAI API', 'Claude API', 'Prompt Engineering', 'LLM Integration', 'n8n'],
    },
  ],

  projects: [
    {
      name: 'Hozana System',
      client: 'Hozana',
      description:
        'Comprehensive warehouse management and invoicing system with centralized data distribution via REST API. Multi-point architecture with real-time synchronization, branch-level inventory control, and automated financial report generation.',
      stack: ['Laravel 12', 'Filament v4', 'MySQL', 'REST API', 'Tailwind CSS'],
      url: null,
      year: '2025',
    },
    {
      name: 'Inversiones Milagros System',
      client: 'Inversiones Milagros',
      description:
        'Operational management platform for a product distribution company. Modules for inventory control, electronic invoicing, distribution route tracking, and a real-time metrics dashboard for executive decision-making.',
      stack: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
      url: null,
      year: '2024',
    },
    {
      name: 'Orthodontic Clinic — Clinical System',
      client: 'Orthodontic Clinic',
      description:
        'Clinical management system for a specialized dental orthodontics practice. Smart scheduling with availability control, complete patient medical records, active treatment tracking, clinical image management, and automated appointment reminders.',
      stack: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
      url: null,
      year: '2024',
    },
    {
      name: 'Cellmania System',
      client: 'Cellmania',
      description:
        'Point-of-sale and inventory system for a mobile phone and accessories retail store. Product catalog management, multi-category stock control, invoicing, customer sales history, and profitability reports by product line.',
      stack: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
      url: null,
      year: '2024',
    },
    {
      name: 'DIPROMA System',
      client: 'DIPROMA',
      description:
        'Administrative platform for a technology services company specializing in computer maintenance, sales, and repairs. Includes service order management, parts and components inventory, repair tracking, and a billing module.',
      stack: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
      url: null,
      year: '2023',
    },
  ],

  languages: [
    {
      name: 'Spanish',
      level: 'Native',
      code: 'es',
    },
    {
      name: 'English',
      level: 'Intermediate (B2)',
      code: 'en',
    },
    {
      name: 'Italian',
      level: 'Basic (B1)',
      code: 'it',
    },
  ],
};