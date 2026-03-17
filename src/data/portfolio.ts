// src/data/portfolio.ts

export interface Experience {
  year: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  year: string;
  degree: string;
  institution: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}

export const personalInfo = {
  name: 'Francisco Ortiz',
  title: 'Software Engineer',
  subtitle: 'Information Systems Engineer',
  description:
    'Proficient in both front-end and back-end development, my goal is to create impactful digital experiences that solve real problems.',
  email: 'franxiscortiz@gmail.com',
  phone: '+506 6469 4072',
  location: 'Costa Rica',
  github: 'https://github.com/francisco10-dev',
  linkedin: 'https://www.linkedin.com/in/fraanciscortiz/?locale=en_US',
  cvEs: '/documents/CV-ES.pdf',
  cvEn: '/documents/CV-EN.pdf',
};

export const experiences: Experience[] = [
  {
    year: '2024',
    title: 'Systems Engineer',
    company: 'Yaipan (DECSA Costa Rica)',
    period: 'Dec. 2024 – Present',
    description:
      'Software development with Java, Hibernate, React, and TypeScript. Building enterprise-grade solutions for real-world business needs.',
  },
  {
    year: '2024',
    title: 'Software Developer (Internship)',
    company: 'PEOPLE APPS INC',
    period: 'Jul. 2024 – Nov. 2024',
    description:
      'Software development using .NET and Angular. Contributed to scalable product features in a professional environment.',
  },
  {
    year: '2023',
    title: 'Software Developer (Internship)',
    company: 'ACIB FUNIN',
    period: 'Feb. 2023 – Jun. 2024 · 1 yr 4 mos',
    description:
      'Designed and developed an information system to optimize Human Resources department processes, digitalizing previously manual workflows.',
  },
];

export const educations: Education[] = [
  {
    year: '2024',
    degree: "Bachelor's Degree in Information Systems Engineering",
    institution: 'National University of Costa Rica (UNA)',
  },
  {
    year: '2024',
    degree: 'Scrum Foundation Professional Certification',
    institution: 'CERTIPROF',
  },
  {
    year: '2024',
    degree: 'Diploma in Computer Applications Programming',
    institution: 'National University of Costa Rica (UNA)',
  },
  {
    year: '2017',
    degree: 'High School Diploma',
    institution: 'Experimental Bilingual High School of Santa Cruz, Guanacaste',
  },
];

export const projects: Project[] = [
  {
    title: 'HR Administrative System',
    description:
      'Full-stack administrative system for human resources management. Features employee records, time tracking, and reporting.',
    tech: ['ReactJS', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/francisco10-dev',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with React and TypeScript. Features smooth animations, multilingual support, and responsive design.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    github: 'https://github.com/francisco10-dev/francisco10-dev.github.io',
    live: 'https://www.franciscortiz.com',
  },
  {
    title: 'Enterprise Java App',
    description:
      'Backend system built for enterprise-grade operations using Java and Hibernate ORM, integrated with React frontend.',
    tech: ['Java', 'Hibernate', 'React', 'TypeScript'],
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'HTML / CSS', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: '.NET', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Hibernate', category: 'backend' },
  { name: 'C++', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Postman', category: 'tools' },
];
