import puppeteer from 'puppeteer';
import { mkdir, readFile } from 'fs/promises';

// Leer QR desde public/qr.png
const qrBuffer = await readFile('public/qr.png');
const QR_DATA = 'data:image/png;base64,' + qrBuffer.toString('base64');

const data = {
  es: {
    name: 'Mauricio Cruz',
    title: 'Desarrollador Full Stack',
    email: 'olympocruz@gmail.com',
    phone: '+504 3301 2826',
    location: 'Santa Rosa de Copán, Honduras',
    linkedin: 'https://www.linkedin.com/in/mauricio-cruz-garcia-939b61370',
    website: 'https://olympohn.com',
    summary: 'Soy desarrollador Full Stack con 4+ años convirtiendo ideas en software real. Me apasiona escribir código limpio que otros puedan entender y mantener — no solo que funcione hoy, sino que escale mañana. Trabajo con Clean Architecture y DDD porque creo que la estructura importa tanto como la funcionalidad. Aprendo rápido, me adapto mejor, y disfruto tanto el backend como el frontend.',
    experience: [
      {
        role: 'Desarrollador Full Stack | Fundador',
        company: 'Inversiones Olympo',
        location: 'Santa Rosa de Copán, Honduras',
        start: 'Ene 2024', end: 'Actualidad',
        bullets: [
          'Desarrollo de soluciones Full Stack con enfoque en rendimiento, Clean Architecture y DDD en sistemas de producción.',
          'Implementación de CI/CD, testing automatizado, auditoría de seguridad y optimización de bases de datos.',
          'Gestión de proyectos bajo metodologías ágiles con equipos multidisciplinarios.',
        ]
      },
      {
        role: 'Desarrollador de Software',
        company: 'DIPROMA',
        location: 'Santa Rosa de Copán, Honduras',
        start: 'Ene 2022', end: 'Dic 2023',
        bullets: [
          'Desarrollo y mantenimiento de sistemas internos para gestión de procesos administrativos y operativos.',
          'Implementación de módulos de reportería, automatización de flujos y migración de procesos manuales a digitales.',
          'Soporte técnico y documentación de sistemas legados bajo metodologías ágiles.',
        ]
      },
    ],
    education: [
      {
        degree: 'Ingeniería en Sistemas',
        institution: 'Universidad Cristiana Evangélica Nuevo Milenio',
        location: 'Santa Rosa de Copán, Honduras',
        period: 'Ene 2022 – Sep 2026'
      }
    ],
    skills: [
      { cat: 'Lenguajes', items: 'PHP · JavaScript · TypeScript · C# · C++ · Python · SQL' },
      { cat: 'Frameworks & Librerías', items: 'Laravel · Filament · Inertia.js · Livewire · React · Vue · Flutter · Node.js · Express.js' },
      { cat: 'Bases de Datos', items: 'MySQL · PostgreSQL · Firebase' },
      { cat: 'DevOps & Infraestructura', items: 'Git · GitHub · Docker · Nginx · AWS · CI/CD' },
      { cat: 'Estilos & UI', items: 'Tailwind CSS · Bootstrap · Vite' },
      { cat: 'Metodologías', items: 'Clean Architecture · DDD · Metodologías Ágiles · QA Testing' },
      { cat: 'IA & Automatización', items: 'OpenAI API · Claude API · Prompt Engineering · LLM Integration · n8n' },
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio (B2)' },
      { name: 'Italiano', level: 'Básico (B1)' },
    ],
    projects: [
      { name: 'Sistema Hozana', client: 'Hozana · 2025', desc: 'Gestión de bodegas y facturación con centralización y distribución via API REST. Arquitectura multi-punto con sincronización en tiempo real y reportes financieros automatizados.', stack: 'Laravel 12 · Filament v4 · MySQL · REST API' },
      { name: 'Sist. Inv. Milagros', client: 'Inversiones Milagros · 2024', desc: 'Plataforma para empresa distribuidora con módulos de inventario, facturación electrónica, rutas de distribución y dashboard de métricas gerenciales.', stack: 'Laravel · Filament · MySQL' },
      { name: 'Orthodontic Clinic', client: 'Orthodontic Clinic · 2024', desc: 'Sistema clínico dental con agendamiento inteligente, historial médico de pacientes, seguimiento de tratamientos y recordatorios automáticos de citas.', stack: 'Laravel · Filament · MySQL' },
      { name: 'Sistema Cellmania', client: 'Cellmania · 2024', desc: 'POS e inventario para tienda de telefonía y accesorios. Control de stock multi-categoría, facturación e historial de ventas.', stack: 'Laravel · Filament · MySQL' },
      { name: 'Sistema DIPROMA', client: 'DIPROMA · 2023', desc: 'Plataforma administrativa para empresa de mantenimiento y venta de equipos. Órdenes de servicio, inventario de piezas y módulo de facturación.', stack: 'Laravel · Filament · MySQL' },
    ],
    labels: { exp: 'Experiencia', edu: 'Educación', skills: 'Habilidades', projects: 'Proyectos', lang: 'Idiomas', qr: 'Ver CV online' },
  },
  en: {
    name: 'Mauricio Cruz',
    title: 'Full Stack Developer',
    email: 'olympocruz@gmail.com',
    phone: '+504 3301 2826',
    location: 'Santa Rosa de Copán, Honduras',
    linkedin: 'https://www.linkedin.com/in/mauricio-cruz-garcia-939b61370',
    website: 'https://olympohn.com',
    summary: "I'm a Full Stack developer with 4+ years turning ideas into real software. I care deeply about writing clean code that others can understand and maintain — not just code that works today, but scales tomorrow. I work with Clean Architecture and DDD because I believe structure matters as much as functionality. I learn fast, adapt better, and enjoy both backend and frontend equally.",
    experience: [
      {
        role: 'Full Stack Developer | Founder',
        company: 'Inversiones Olympo',
        location: 'Santa Rosa de Copán, Honduras',
        start: 'Jan 2024', end: 'Present',
        bullets: [
          'Full Stack development focused on performance, Clean Architecture and DDD in production systems.',
          'CI/CD implementation, automated testing, security auditing and database optimization.',
          'Agile project management with multidisciplinary teams.',
        ]
      },
      {
        role: 'Software Developer',
        company: 'DIPROMA',
        location: 'Santa Rosa de Copán, Honduras',
        start: 'Jan 2022', end: 'Dec 2023',
        bullets: [
          'Development and maintenance of internal systems for administrative and operational process management.',
          'Reporting modules, workflow automation and migration of manual processes to digital solutions.',
          'Technical support and documentation of legacy systems under agile methodologies.',
        ]
      },
    ],
    education: [
      {
        degree: 'Systems Engineering',
        institution: 'Universidad Cristiana Evangélica Nuevo Milenio',
        location: 'Santa Rosa de Copán, Honduras',
        period: 'Jan 2022 – Sep 2026'
      }
    ],
    skills: [
      { cat: 'Languages', items: 'PHP · JavaScript · TypeScript · C# · C++ · Python · SQL' },
      { cat: 'Frameworks & Libraries', items: 'Laravel · Filament · Inertia.js · Livewire · React · Vue · Flutter · Node.js · Express.js' },
      { cat: 'Databases', items: 'MySQL · PostgreSQL · Firebase' },
      { cat: 'DevOps & Infrastructure', items: 'Git · GitHub · Docker · Nginx · AWS · CI/CD' },
      { cat: 'Styling & UI', items: 'Tailwind CSS · Bootstrap · Vite' },
      { cat: 'Methodologies', items: 'Clean Architecture · DDD · Agile · QA Testing' },
      { cat: 'AI & Automation', items: 'OpenAI API · Claude API · Prompt Engineering · LLM Integration · n8n' },
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Intermediate (B2)' },
      { name: 'Italian', level: 'Basic (B1)' },
    ],
    projects: [
      { name: 'Hozana System', client: 'Hozana · 2025', desc: 'Warehouse management and invoicing with centralized data distribution via REST API. Multi-point architecture with real-time sync and automated financial reports.', stack: 'Laravel 12 · Filament v4 · MySQL · REST API' },
      { name: 'Inversiones Milagros', client: 'Inversiones Milagros · 2024', desc: 'Platform for distribution company with inventory, electronic invoicing, route tracking and executive metrics dashboard.', stack: 'Laravel · Filament · MySQL' },
      { name: 'Orthodontic Clinic', client: 'Orthodontic Clinic · 2024', desc: 'Dental clinical system with smart scheduling, patient medical records, treatment tracking and automated appointment reminders.', stack: 'Laravel · Filament · MySQL' },
      { name: 'Cellmania System', client: 'Cellmania · 2024', desc: 'POS and inventory for mobile phone and accessories store. Multi-category stock control, invoicing and sales history.', stack: 'Laravel · Filament · MySQL' },
      { name: 'DIPROMA System', client: 'DIPROMA · 2023', desc: 'Administrative platform for computer maintenance and sales company. Service orders, parts inventory and billing module.', stack: 'Laravel · Filament · MySQL' },
    ],
    labels: { exp: 'Experience', edu: 'Education', skills: 'Skills', projects: 'Projects', lang: 'Languages', qr: 'View CV online' },
  }
};

function buildHTML(d, qr) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; font-size: 8.5pt; color: #1C1C28; background: white; line-height: 1.5; }

  .page {
    width: 210mm;
    min-height: 297mm;
    padding: 9mm 11mm;
    display: grid;
    grid-template-rows: auto auto 1fr;
  }

  /* HEADER */
  .header { display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 7px; margin-bottom: 7px; border-bottom: 2px solid #D4A843; }
  .name { font-family: 'Playfair Display', serif; font-size: 20pt; font-weight: 700; color: #0A0A0F; letter-spacing: -0.02em; line-height: 1; }
  .title { font-size: 6pt; letter-spacing: 0.18em; text-transform: uppercase; color: #94A3B8; margin-top: 3px; }
  .header-right { text-align: right; }
  .contact { font-size: 6.5pt; color: #64748B; line-height: 1.8; }
  .contact a { color: #64748B; text-decoration: none; }
  .contact-gold { color: #D4A843; font-weight: 500; font-size: 6.5pt; }

  /* SUMMARY */
  .summary { font-size: 7pt; color: #555; line-height: 1.55; padding: 5px 8px 5px 10px; border-left: 2px solid #D4A843; margin-bottom: 9px; background: #FAFAF7; }

  /* MAIN LAYOUT: columna izquierda ancha + columna derecha lateral */
  .body-cols {
    display: grid;
    grid-template-columns: 1fr 150px;
    gap: 14px;
    align-items: start;
  }
  .col-left { display: flex; flex-direction: column; gap: 9px; }
  .col-right { display: flex; flex-direction: column; gap: 9px; }

  /* SECTION */
  .section { }
  .section-header { display: flex; align-items: center; gap: 5px; padding-bottom: 2px; border-bottom: 1px solid #E8E4DC; margin-bottom: 5px; }
  .section-num { font-family: 'JetBrains Mono', monospace; font-size: 5.5pt; color: #D4A843; }
  .section-title { font-family: 'Playfair Display', serif; font-size: 8.5pt; font-weight: 600; color: #0A0A0F; }

  /* EXPERIENCE */
  .exp-item { display: grid; grid-template-columns: 62px 1fr; gap: 8px; margin-bottom: 7px; }
  .exp-dates { font-family: 'JetBrains Mono', monospace; font-size: 5.5pt; color: #94A3B8; text-align: right; padding-top: 1px; line-height: 1.6; }
  .exp-current { color: #D4A843; display: block; font-weight: 500; }
  .exp-role { font-size: 7.5pt; font-weight: 600; color: #0A0A0F; margin-bottom: 1px; }
  .exp-company { font-size: 6.5pt; color: #94A3B8; margin-bottom: 3px; }
  .exp-bullets { list-style: none; }
  .exp-bullets li { font-size: 6.5pt; color: #555; padding-left: 9px; position: relative; margin-bottom: 2px; line-height: 1.45; }
  .exp-bullets li::before { content: '›'; position: absolute; left: 0; color: #D4A843; font-size: 9pt; line-height: 1.1; }

  /* SKILLS */
  .skills-table { width: 100%; border-collapse: collapse; }
  .skills-table tr { border-bottom: 1px solid #F5F5F0; }
  .skills-table td { padding: 2.5px 0; vertical-align: top; }
  .skill-cat { font-family: 'JetBrains Mono', monospace; font-size: 5pt; letter-spacing: 0.1em; text-transform: uppercase; color: #D4A843; width: 90px; padding-right: 8px; white-space: nowrap; }
  .skill-items { font-size: 6.5pt; color: #555; }

  /* PROJECTS — 2 columnas dentro del col-left */
  .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
  .project-card { border: 1px solid #ECE8E0; border-top: 2px solid #D4A843; padding: 5px 7px; background: #FAFAF7; }
  .project-name { font-size: 6.5pt; font-weight: 600; color: #0A0A0F; margin-bottom: 1px; }
  .project-client { font-size: 5.5pt; color: #94A3B8; margin-bottom: 3px; }
  .project-desc { font-size: 5.5pt; color: #555; line-height: 1.45; margin-bottom: 3px; }
  .project-stack { font-family: 'JetBrains Mono', monospace; font-size: 5pt; color: #D4A843; border-top: 1px solid #ECE8E0; padding-top: 3px; }

  /* EDUCATION */
  .edu-item { padding-left: 7px; border-left: 2px solid rgba(212,168,67,0.4); margin-bottom: 5px; }
  .edu-period { font-family: 'JetBrains Mono', monospace; font-size: 5.5pt; color: #94A3B8; margin-bottom: 1px; }
  .edu-degree { font-size: 7pt; font-weight: 600; color: #0A0A0F; margin-bottom: 1px; }
  .edu-inst { font-size: 6pt; color: #64748B; line-height: 1.4; }

  /* LANGUAGES */
  .lang-item { display: flex; justify-content: space-between; align-items: center; padding: 3px 6px; margin-bottom: 3px; background: #FAFAF7; border: 1px solid #ECE8E0; }
  .lang-name { font-size: 6.5pt; font-weight: 500; color: #0A0A0F; }
  .lang-level { font-family: 'JetBrains Mono', monospace; font-size: 5.5pt; color: #D4A843; }

  /* QR al fondo del col-right */
  .qr-block {
    margin-top: auto;
    border: 1px solid #ECE8E0;
    border-top: 2px solid #D4A843;
    padding: 6px;
    background: #FAFAF7;
    text-align: center;
  }
  .qr-block img { width: 70px; height: 70px; display: block; margin: 0 auto 3px; }
  .qr-label { font-family: 'JetBrains Mono', monospace; font-size: 5.5pt; color: #94A3B8; }
  .qr-url { font-family: 'JetBrains Mono', monospace; font-size: 5.5pt; color: #D4A843; display: block; margin-top: 2px; font-weight: 500; }
</style>
</head>
<body>
<div class="page">

  <div class="header">
    <div>
      <div class="name">${d.name}</div>
      <div class="title">${d.title}</div>
    </div>
    <div class="header-right">
      <div class="contact">
        <a href="mailto:${d.email}">${d.email}</a><br/>
        ${d.phone} &nbsp;·&nbsp; ${d.location}<br/>
        <a href="${d.linkedin}" class="contact-gold">LinkedIn</a>
        &nbsp;·&nbsp;
        <a href="${d.website}" class="contact-gold">olympohn.com</a>
      </div>
    </div>
  </div>

  <div class="summary">${d.summary}</div>

  <div class="body-cols">

    <!-- COLUMNA IZQUIERDA -->
    <div class="col-left">

      <div class="section">
        <div class="section-header">
          <span class="section-num">01</span>
          <span class="section-title">${d.labels.exp}</span>
        </div>
        ${d.experience.map(exp => `
          <div class="exp-item">
            <div class="exp-dates">
              ${exp.start}<br/>—<br/><span class="exp-current">${exp.end}</span>
            </div>
            <div>
              <div class="exp-role">${exp.role}</div>
              <div class="exp-company">${exp.company} &nbsp;·&nbsp; ${exp.location}</div>
              <ul class="exp-bullets">
                ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-num">04</span>
          <span class="section-title">${d.labels.skills}</span>
        </div>
        <table class="skills-table">
          ${d.skills.map(s => `
            <tr>
              <td class="skill-cat">${s.cat}</td>
              <td class="skill-items">${s.items}</td>
            </tr>
          `).join('')}
        </table>
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-num">05</span>
          <span class="section-title">${d.labels.projects}</span>
        </div>
        <div class="projects-grid">
          ${d.projects.map(p => `
            <div class="project-card">
              <div class="project-name">${p.name}</div>
              <div class="project-client">${p.client}</div>
              <div class="project-desc">${p.desc}</div>
              <div class="project-stack">${p.stack}</div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- COLUMNA DERECHA -->
    <div class="col-right">

      <div class="section">
        <div class="section-header">
          <span class="section-num">02</span>
          <span class="section-title">${d.labels.edu}</span>
        </div>
        ${d.education.map(e => `
          <div class="edu-item">
            <div class="edu-period">${e.period}</div>
            <div class="edu-degree">${e.degree}</div>
            <div class="edu-inst">${e.institution}</div>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <div class="section-header">
          <span class="section-num">03</span>
          <span class="section-title">${d.labels.lang}</span>
        </div>
        ${d.languages.map(l => `
          <div class="lang-item">
            <span class="lang-name">${l.name}</span>
            <span class="lang-level">${l.level}</span>
          </div>
        `).join('')}
      </div>

      <div class="qr-block">
        <img src="${qr}" alt="QR CV online"/>
        <span class="qr-label">${d.labels.qr}</span>
        <span class="qr-url">olympohn.com</span>
      </div>

    </div>

  </div>

</div>
</body>
</html>`;
}

const browser = await puppeteer.launch();
const page = await browser.newPage();
await mkdir('public/downloads', { recursive: true });

await page.setContent(buildHTML(data.es, QR_DATA), { waitUntil: 'domcontentloaded', timeout: 60000 });
await new Promise(r => setTimeout(r, 2000));
await page.pdf({ path: 'public/downloads/cv-mauricio-cruz-es.pdf', format: 'A4', printBackground: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
console.log('✓ PDF español generado');

await page.setContent(buildHTML(data.en, QR_DATA), { waitUntil: 'domcontentloaded', timeout: 60000 });
await new Promise(r => setTimeout(r, 2000));
await page.pdf({ path: 'public/downloads/cv-mauricio-cruz-en.pdf', format: 'A4', printBackground: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
console.log('✓ PDF inglés generado');

await browser.close();
console.log('✓ Ambos PDFs en public/downloads/');