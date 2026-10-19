// ============================================
// 📝 EDITA ESTE ARCHIVO CON TUS DATOS PERSONALES
// ============================================

export const profile = {
  // Información personal
  name: 'Josue Manuel Rosales Garcia',
  title: 'Software Development and Management Engineering',
  tagline: 'Me considero una persona creativa porque siempre busco nuevas formas de resolver problemas y mejorar lo que ya existe. Disfruto diseñar, desarrollar y experimentar con tecnologías que me permitan convertir una idea en un proyecto real y útil.',
  
  // Sobre ti
  about: [
    'Soy estudiante de Software Development and Management Engineering, muy interesado en la tecnología, la innovación y la evolución de la IA. Disfruto transformar mis ideas en proyectos funcionales, explorando nuevas herramientas y tecnologías que me permitan desarrollar aplicaciones útiles, eficientes y centradas en las necesidades de los usuarios..',
    'He participado en diversos proyectos de desarrollo de software y en múltiples eventos y programas relacionados con la tecnología.',
    'Mi trabajo se basa en la creatividad, el aprendizaje continuo y la mejora constante.',
  ],

  // Habilidades técnicas
  skills: [
    { name: 'Programación Full Stack', level: 90 },
    { name: 'Desarrollo Web y Móvil', level: 90 },
    { name: 'Inteligencia Artificial', level: 85 },
    { name: 'Gestión de Proyectos', level: 80 },
    { name: 'Bases de Datos', level: 80 },
    { name: 'Desarrollo de Videojuegos', level: 70 },
  ],

  // Experiencia laboral
  experience: [
    {
      company: 'ALPHA Y OMEGA',
      position: 'Desarrollador de Software',
      period: '2025',
      description: 'Participé en el desarrollo de un sistema de punto de venta, implementando funcionalidades de reportes y optimizando la experiencia de usuario mediante un flujo centralizado.',
    },
  ],

  // Proyectos destacados
  // Para añadir fotos: `images: ['/images/resju/ResJu1.webp', ...]` con rutas dentro de public/.
  // La primera se ve en grande; hasta 4 aparecen como miniaturas (las demás, en la vista completa).
  // También puedes usar { src: '...', alt: '...' } para describir una imagen.
  //
  // Orden por pantalla: `images` se usa en web/escritorio. Si defines `imagesMobile`,
  // ese arreglo (otro orden o incluso otras fotos) se usa en pantallas pequeñas.
  //   images: ['/web-1.webp', '/web-2.webp'],
  //   imagesMobile: ['/movil-1.webp', '/movil-2.webp', '/web-2.webp'],
  projects: [
    {
      title: 'Polin',
      description: 'Gestor de Tiempos para Juegos Mecánicos.',
      // Capturas verticales (app móvil): se muestran completas, sin recortar.
      images: [
        '/images/polin/Polin1.webp',
        '/images/polin/Polin2.webp',
        '/images/polin/Polin3.webp',
        '/images/polin/Polin4.webp',
        '/images/polin/Polin5.webp',
      ],
      technologies: ['Flutter', 'Dart', 'SQLite', 'Desarrollo Offline-First',],
      liveUrl:"https://appetize.io/app/b_5mxc3spjjcz2vmd3pphlp4ii24",
      githubUrl: 'https://github.com/Josue-rg/Polin',
    },
    {
      title: 'ResJu',
      description: 'Plataforma Web de Resolución de Juegos de Destreza.',
      images: [
        '/images/resju/ResJu1.webp',
        '/images/resju/ResJu2.webp',
        '/images/resju/ResJu3.webp',
        '/images/resju/ResJu4.webp',
      ],
      technologies: ['React + Vite', 'FastAPI', 'Axios', 'PostgreSQL', 'JWT', 'OAuth'],
      liveUrl: 'https://res-ju.vercel.app/',
      githubUrl: 'https://github.com/Josue-rg/ResJu',
    },
    {
      title: 'CrimenNet',
      description: 'Sistema de Investigaciones Criminales.',
      images: [
        '/images/crimennet/CrimenNet1.webp',
        '/images/crimennet/CrimenNet2.webp',
        '/images/crimennet/CrimenNet3.webp',
        '/images/crimennet/CrimenNet4.webp',
        '/images/crimennet/CrimenNet5.webp',
        '/images/crimennet/CrimenNet6.webp',
      ],
      technologies: ['React + Vite', 'FastAPI', 'Axios', 'PostgreSQL', 'JWT', ],
      liveUrl: 'https://crimennet.vercel.app/',
      githubUrl: 'https://github.com/Josue-rg/CrimenNet',
    },
    {
      title: 'Shekael',
      description: 'Red Social para tu Comunidad Local.',
      image: '/images/project2.jpg',
      technologies: ['React + Vite', 'Stellar testnet', 'Google OAuth + JWT', 'Supabase', 'Node.js + Express', ],
      liveUrl: 'https://shekael.com/',
      githubUrl: 'https://github.com/kuisser116/Manna',
    },
    {
      title: 'Wordle Full',
      description: 'Aplicación web y movil de Wordle juego',
      image: '/images/project2.jpg',
      technologies: ['React + Vite', 'NestJS', 'TypeScript ', 'React Native', 'Tailwind CSS', ],
      liveUrl: '',
      githubUrl: 'https://github.com/Josue-rg/Full-Stack-Challenge',
    },
    {
      title: 'EduHub',
      description: 'Plataforma de cursos online',
      image: '/images/project2.jpg',
      technologies: [''],
      liveUrl: '',
      githubUrl: 'https://github.com/Josue-rg/EduHub',
    },
    {
      title: 'FakeSteam',
      description: 'Plataforma de venta juegos',
      image: '/images/project2.jpg',
      technologies: ['React + Vite', 'FastAPI', 'Axios', 'PostgreSQL', 'JWT', ],
      liveUrl: '',
      githubUrl: 'https://github.com/Josue-rg/FakeSteam',
    },
    {
      title: 'Comite-Ambiental',
      description: 'Sistema de Investigaciones Criminales.',
      image: '/images/project2.jpg',
      technologies: ['React + Vite', 'FastAPI', 'Axios', 'PostgreSQL', 'JWT', ],
      liveUrl: '',
      githubUrl: 'https://github.com/Loreley100/Comite-Ambiental',
    },
    {
      title: 'Tickets',
      description: 'Sistema de Investigaciones Criminales.',
      image: '/images/project2.jpg',
      technologies: ['React + Vite', 'FastAPI', 'Axios', 'PostgreSQL', 'JWT', ],
      liveUrl: 'https://crimennet.vercel.app/',
      githubUrl: 'https://github.com/kuisser116/Manna',
    },
  ],

  // Redes sociales y contacto
  social: {
    github: 'https://github.com/Josue-rg',
    linkedin: 'https://www.linkedin.com/in/josue-rosales-53451038b/',
    email: 'rosalesgarciajosuemanuel@gmail.com',
  },

  // Configuración del sitio
  site: {
    description: 'Portafolio de Josue Manuel Rosales García, desarrollador de software enfocado en desarrollo full stack',
    keywords: 'portafolio, desarrollador, diseñador, profesional',
    author: 'Josue Manuel Rosales Garcia',
  },
};

export default profile;
