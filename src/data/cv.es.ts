// ============================================================
// cv.es.ts — Contenido del CV en ESPAÑOL
// Este es el único archivo que editas para actualizar el CV
// ============================================================

import type { CV } from './types';

export const cvEs: CV = {
  personal: {
    name: 'Mauricio Cruz',
    title: 'Desarrollador Full Stack',
    location: 'Santa Rosa de Copán, Honduras',
    email: 'olympocruz@gmail.com',
    phone: 'https://wa.me/50433012826',
    linkedin: 'https://www.linkedin.com/in/mauricio-cruz-garcia-939b61370',
    website: 'https://olympohn.com',
    summary:
      'Soy desarrollador Full Stack con 4+ años convirtiendo ideas en software real. Me apasiona escribir código limpio que otros puedan entender y mantener — no solo que funcione hoy, sino que escale mañana. Trabajo con Clean Architecture y DDD porque creo que la estructura importa tanto como la funcionalidad. Aprendo rápido, me adapto mejor, y disfruto tanto el backend como el frontend.',
  },

  experience: [
    {
      role: 'Desarrollador Full Stack | Fundador',
      company: 'Inversiones Olympo',
      location: 'Santa Rosa de Copán, Honduras',
      startDate: 'Enero 2024',
      endDate: null,
      description: [
        'Desarrollo de soluciones Full Stack abarcando backend y frontend con enfoque en rendimiento y experiencia de usuario.',
        'Aplicación de Clean Architecture y Domain-Driven Design (DDD) en sistemas de producción.',
        'Implementación de control de versiones (Git), integración continua, testing automatizado y documentación técnica.',
        'Optimización de bases de datos, refactorización de código legado y auditoría de seguridad.',
        'Gestión de proyectos bajo metodologías ágiles con equipos multidisciplinarios.',
      ],
    },
    {
      role: 'Desarrollador de Software',
      company: 'DIPROMA',
      location: 'Santa Rosa de Copán, Honduras',
      startDate: 'Enero 2022',
      endDate: 'Diciembre 2023',
      description: [
        'Desarrollo y mantenimiento de sistemas internos para gestión de procesos administrativos y operativos.',
        'Implementación de módulos de reportería y automatización de flujos de trabajo.',
        'Colaboración con equipos multidisciplinarios bajo metodologías ágiles.',
        'Soporte técnico y documentación de sistemas legados.',
        'Participación en la migración de procesos manuales a soluciones digitales.',
      ],
    },
  ],

  education: [
    {
      degree: 'Ingeniería en Sistemas',
      institution: 'Universidad Cristiana Evangélica Nuevo Milenio',
      location: 'Santa Rosa de Copán, Honduras',
      startDate: 'Enero 2022',
      endDate: 'Septiembre 2026',
    },
  ],

  skills: [
    {
      category: 'Lenguajes',
      skills: ['PHP', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Python', 'SQL'],
    },
    {
      category: 'Frameworks & Librerías',
      skills: ['Laravel', 'Filament', 'Inertia.js', 'Livewire', 'React', 'Vue', 'Flutter', 'Node.js', 'Express.js'],
    },
    {
      category: 'Estilos & UI',
      skills: ['Tailwind CSS', 'Bootstrap', 'Vite'],
    },
    {
      category: 'Bases de Datos',
      skills: ['MySQL', 'PostgreSQL', 'Firebase'],
    },
    {
      category: 'DevOps & Infraestructura',
      skills: ['Git', 'GitHub', 'Docker', 'Nginx', 'AWS', 'CI/CD'],
    },
    {
      category: 'Metodologías',
      skills: ['Clean Architecture', 'DDD', 'Metodologías Ágiles', 'QA Testing'],
    },
    {
      category: 'Inteligencia Artificial & Automatización',
      skills: ['OpenAI API', 'Claude API', 'Prompt Engineering', 'LLM Integration', 'n8n'],
    },
  ],

  projects: [
    {
      name: 'Sistema Hozana',
      client: 'Hozana',
      description:
        'Sistema integral de gestión de bodegas y facturación con centralización y distribución de datos mediante API REST. Arquitectura multi-punto con sincronización en tiempo real, control de inventario por sucursal y generación automatizada de reportes financieros.',
      stack: ['Laravel 12', 'Filament v4', 'MySQL', 'REST API', 'Tailwind CSS'],
      url: null,
      year: '2025',
    },
    {
      name: 'Sistema Inversiones Milagros',
      client: 'Inversiones Milagros',
      description:
        'Plataforma de gestión operativa para empresa distribuidora de productos. Módulos de control de inventario, facturación electrónica, seguimiento de rutas de distribución y dashboard de métricas en tiempo real para toma de decisiones gerenciales.',
      stack: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
      url: null,
      year: '2024',
    },
    {
      name: 'Orthodontic Clinic — Sistema Clínico',
      client: 'Orthodontic Clinic',
      description:
        'Sistema de gestión clínica para consultorio dental especializado en ortodoncia. Módulo de agendamiento inteligente con control de disponibilidad, historial médico completo por paciente, seguimiento de tratamientos activos, gestión de radiografías e imágenes clínicas y recordatorios automáticos de citas.',
      stack: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
      url: null,
      year: '2024',
    },
    {
      name: 'Sistema Cellmania',
      client: 'Cellmania',
      description:
        'Sistema de punto de venta e inventario para tienda especializada en telefonía móvil y accesorios. Gestión de catálogo de productos, control de stock multi-categoría, facturación, historial de ventas por cliente y reportes de rentabilidad por línea de producto.',
      stack: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
      url: null,
      year: '2024',
    },
    {
      name: 'Sistema DIPROMA',
      client: 'DIPROMA',
      description:
        'Plataforma administrativa para empresa de servicios tecnológicos dedicada a mantenimiento, venta y reparación de equipos de cómputo. Incluye gestión de órdenes de servicio, control de inventario de piezas y componentes, seguimiento de reparaciones y módulo de facturación.',
      stack: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
      url: null,
      year: '2023',
    },
  ],

  languages: [
    {
      name: 'Español',
      level: 'Nativo',
      code: 'es',
    },
    {
      name: 'Inglés',
      level: 'Intermedio (B2)',
      code: 'en',
    },
    {
      name: 'Italiano',
      level: 'Básico (B1)',
      code: 'it',
    },
  ],
};