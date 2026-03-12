// ============================================================
// types.ts — Contrato de datos del CV
// Agregar una nueva sección = agregar la interfaz aquí
// ============================================================

export interface Personal {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    website: string;
    summary: string;
  }
  
  export interface Experience {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | null; // null = "Present" / "Actualmente"
    description: string[];
  }
  
  export interface Education {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
  }
  
  export interface SkillCategory {
    category: string;
    skills: string[];
  }
  
  export interface Project {
    name: string;
    client: string;
    description: string;
    stack: string[];
    url: string | null;
    year: string;
  }
  
  export interface Language {
    name: string;
    level: string;
    code: string; // ISO 639-1
  }
  
  // Interfaz principal — agregar secciones futuras aquí
  export interface CV {
    personal: Personal;
    experience: Experience[];
    education: Education[];
    skills: SkillCategory[];
    projects: Project[];
    languages: Language[];
    // Futuras secciones (descomentar cuando las necesites):
    // certifications?: Certification[];
    // publications?: Publication[];
    // awards?: Award[];
  }