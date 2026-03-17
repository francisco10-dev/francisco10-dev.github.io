export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      hire: 'Email',
    },
    hero: {
      available: 'Available',
      role: 'Software Engineer',
      description:
        'Proficient in both front-end and back-end development, my goal is to create impactful digital experiences that solve real problems.',
      cta: 'Get in touch',
      work: 'See my work',
    },
    about: {
      label: 'About me',
      heading: 'Crafting code that',
      headingAccent: 'makes an impact.',
      body1:
        "I'm a Software Engineer based in Costa Rica, specialized in building full-stack web applications. I combine a strong foundation in both front-end and back-end development to deliver complete digital solutions.",
      body2:
        'Currently working at Yaipan (DECSA), I focus on creating clean, maintainable, and performant software. I thrive in collaborative environments and enjoy turning complex problems into elegant solutions.',
      cards: {
        location: 'Location',
        focus: 'Focus',
        focusVal: 'Software development',
        status: 'Status',
        statusVal: 'Open to work',
        experience: 'Experience',
        experienceVal: '2+ years',
      },
    },
    experience: {
      label: 'Experience',
      heading: "Where I've worked",
      items: [
        {
          year: '2024',
          title: 'Software Engineer',
          company: 'Yaipan (DECSA Costa Rica)',
          period: 'Dec. 2024 – Present',
          description:
            'Design and implement new backend functionalities for existing enterprise information systems using Java. ' + 
            'Develop RESTful APIs and web services to enable integration between internal and external systems.',
        },
        {
          year: '2024',
          title: 'Software Developer (Internship)',
          company: 'PEOPLE APPS INC',
          period: 'Jul. 2024 – Nov. 2024',
          description:
            'Contributed to the development of new features for an existing information system called TeamCore using .NET Core, Angular, and TypeScript. ' +
            'Resolved bugs and maintained system stability, ensuring reliable performance.',
        },
        {
          year: '2023',
          title: 'Software Development (Project)',
          company: 'ACIB FUNIN',
          period: 'Feb. 2023 – Jun. 2024 · 1 yr 4 mos',
          description:
            'Designed and developed an information system to optimize Human Resources department processes, digitalizing previously manual workflows.',
        },
      ],
    },
    projects: {
      label: 'Projects',
      heading: "Things I've built",
      items: [
        {
          title: 'HR Administrative System',
          description:
            'Full-stack administrative system for human resources management. Features employee records, time tracking, and reporting.',
          tech: ['ReactJS', 'Node.js', 'Express', 'MySQL'],
        },
        {
          title: 'Portfolio Website',
          description:
            'Personal portfolio built with React and TypeScript. Features smooth animations, multilingual support, and responsive design.',
          tech: ['React', 'TypeScript', 'Vite', 'CSS'],
        },
        {
          title: 'Enterprise Java App',
          description:
            'Backend system built for enterprise-grade operations using Java and Hibernate ORM, integrated with React frontend.',
          tech: ['Java', 'Hibernate', 'React', 'TypeScript'],
        },
      ],
    },
    skills: {
      label: 'Skills',
      heading: 'Tools of the trade',
    },
    education: {
      label: 'Education',
      heading: 'Academic background',
      items: [
        {
          year: '2024',
          degree: "Bachelor's Degree in Information Systems Engineering",
          institution: 'Universidad Nacional de Costa Rica (UNA)',
        },
        {
          year: '2024',
          degree: 'Scrum Foundation Professional Certification',
          institution: 'CERTIPROF',
        },
        {
          year: '2024',
          degree: 'Diploma in Computer Applications Programming',
          institution: 'Universidad Nacional de Costa Rica (UNA)',
        },
        {
          year: '2017',
          degree: 'High School Diploma',
          institution: 'Experimental Bilingual High School of Santa Cruz, Guanacaste',
        },
      ],
    },
    contact: {
      label: 'Contact',
      heading: "Let's build",
      headingAccent: 'something great.',
      sub: "Feel free to leave a message.",
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      copy: 'copy',
      copied: 'copied!',
      send: 'Send a message',
      github: 'GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with React + TypeScript',
    },
  },

  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
      hire: 'Contáctame',
    },
    hero: {
      available: 'Disponible',
      role: 'Ingeniero de Software',
      description:
        'Con dominio en desarrollo front-end y back-end, mi objetivo es crear experiencias digitales de impacto que resuelvan problemas reales.',
      cta: 'Contáctame',
      work: 'Ver mi trabajo',
    },
    about: {
      label: 'Sobre mí',
      heading: 'Código que',
      headingAccent: 'genera impacto.',
      body1:
        'Soy un Ingeniero de Software en Costa Rica, especializado en el desarrollo de aplicaciones web full-stack. Combino una sólida base en desarrollo front-end y back-end para entregar soluciones digitales completas.',
      body2:
        'Actualmente trabajo en Yaipan (DECSA), donde me enfoco en crear software limpio, mantenible y de alto rendimiento. Disfruto los entornos colaborativos y convertir problemas complejos en soluciones mantenibles.',
      cards: {
        location: 'Ubicación',
        focus: 'Enfoque',
        focusVal: 'Desarrollo de software',
        status: 'Estado',
        statusVal: 'Disponible',
        experience: 'Experiencia',
        experienceVal: '2+ años',
      },
    },
    experience: {
      label: 'Experiencia',
      heading: 'Dónde he trabajado',
      items: [
        {
          year: '2024',
          title: 'Ingeniero de software',
          company: 'Yaipan (DECSA Costa Rica)',
          period: 'Dic. 2024 – Presente',
          description:
            'Diseñar e implementar nuevas funcionalidades de backend para sistemas de información empresariales existentes utilizando Java. ' +
            'Desarrollar API RESTful y servicios web para permitir la integración entre sistemas internos y externos.',
        },
        {
          year: '2024',
          title: 'Desarrollador de Software (Pasantía)',
          company: 'PEOPLE APPS INC',
          period: 'Jul. 2024 – Nov. 2024',
          description:
            'Contribuí al desarrollo de nuevas funcionalidades para un sistema de información existente llamado TeamCore utilizando .NET Core, Angular y TypeScript. '+
            'Resolución de bugs y mantenimiendo de la estabilidad del sistema, garantizando un rendimiento fiable.',
        },
        {
          year: '2023',
          title: 'Desarrollo de Software (Proyecto)',
          company: 'ACIB FUNIN',
          period: 'Feb. 2023 – Jun. 2024 · 1 año 4 meses',
          description:
            'Diseño y desarrollo de un sistema de información para optimizar los procesos del departamento de Recursos Humanos, digitalizando flujos de trabajo que antes se realizaban manualmente.',
        },
      ],
    },
    projects: {
      label: 'Proyectos',
      heading: 'Cosas que he construido',
      items: [
        {
          title: 'Sistema Administrativo de RRHH',
          description:
            'Sistema administrativo full-stack para gestión de recursos humanos. Incluye registros de empleados, control de tiempo y reportes.',
          tech: ['ReactJS', 'Node.js', 'Express', 'MySQL'],
        },
        {
          title: 'Sitio Web de Portafolio',
          description:
            'Portafolio personal construido con React y TypeScript. Incluye animaciones fluidas, soporte multilenguaje y diseño responsivo.',
          tech: ['React', 'TypeScript', 'Vite', 'CSS'],
        },
        {
          title: 'Aplicación Java Empresarial',
          description:
            'Sistema backend para operaciones empresariales usando Java con Hibernate ORM, integrado con un frontend en React.',
          tech: ['Java', 'Hibernate', 'React', 'TypeScript'],
        },
      ],
    },
    skills: {
      label: 'Habilidades',
      heading: 'Stack',
    },
    education: {
      label: 'Educación',
      heading: 'Formación académica',
      items: [
        {
          year: '2024',
          degree: 'Bachillerato en Ingeniería en Sistemas de Información',
          institution: 'Universidad Nacional de Costa Rica (UNA)',
        },
        {
          year: '2024',
          degree: 'Certificación Scrum Foundation Professional',
          institution: 'CERTIPROF',
        },
        {
          year: '2024',
          degree: 'Diplomado en Programación de Aplicaciones Informáticas',
          institution: 'Universidad Nacional de Costa Rica (UNA)',
        },
        {
          year: '2017',
          degree: 'Diploma de Bachillerato en Educación Media',
          institution: 'Colegio Experimental Bilingüe de Santa Cruz, Guanacaste',
        },
      ],
    },
    contact: {
      label: 'Contacto',
      heading: 'Manos',
      headingAccent: 'a la obra.',
      sub: 'Deja un mensaje.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      copy: 'copiar',
      copied: '¡copiado!',
      send: 'Enviar mensaje',
      github: 'GitHub',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      built: 'Hecho con React + TypeScript',
    },
  },
} as const;

export type Translations = typeof translations.en;
