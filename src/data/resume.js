export const resumeData = {
  contact: {
    name: "Joel Antonio Jaquez López",
    title: "Estudiante de Ingeniería en Ciencias de la Computación",
    email: "jjaquezlopez236@gmail.com",
    phone: "+502 3079-3526",
    location: "San Lucas Sacatepéquez, Guatemala",
    github: {
      label: "github.com/jaq23369",
      url: "https://github.com/jaq23369",
    },
    portfolio: {
      label: "portafolio-joel.vercel.app",
      url: "https://portafolio-joel.vercel.app/",
    },
    linkedin: {
      label: "linkedin.com/in/joel-jaquez-659b92263",
      url: "https://www.linkedin.com/in/joel-jaquez-659b92263",
    },
  },
  profile:
    "Estudiante de Ingeniería en Ciencias de la Computación con experiencia práctica en proyectos de desarrollo web, APIs y análisis de datos deportivos. He trabajado con Python, JavaScript, React, bases de datos y modelos estadísticos para construir soluciones de principio a fin. Busco una oportunidad de primer empleo, práctica o pasantía donde pueda aportar capacidad analítica, aplicar mis conocimientos y continuar desarrollándome junto a un equipo de tecnología.",
  education: [
    {
      degree: "Ingeniería en Ciencias de la Computación",
      institution: "Universidad del Valle de Guatemala",
      period: "Enero 2023 – Graduación prevista en 2028",
      details:
        "Formación en algoritmos, estructuras de datos, bases de datos y desarrollo de software.",
    },
  ],
  projects: [
    {
      name: "Predictor Inteligente del Mundial 2026",
      type: "Proyecto personal",
      technologies:
        "Python, FastAPI, scikit-learn, React, Vite, modelos de clasificación y Poisson",
      github: "https://github.com/jaq23369/Predictor_WC2026",
      demo: "https://predictor-wc-2026-sepia.vercel.app/",
      bullets: [
        "Desarrollé una aplicación full stack para estimar resultados, goles esperados y marcadores probables de partidos del Mundial 2026.",
        "Construí un flujo de preparación de datos deportivos con rankings FIFA, Elo, resultados históricos y estadísticas disponibles antes de cada partido.",
        "Entrené y comparé modelos de Regresión Logística, Random Forest, Extra Trees e Hist Gradient Boosting, e integré un modelo Poisson para la predicción de marcadores.",
        "Implementé una simulación Monte Carlo de fase de grupos, mejores terceros, eliminatorias y campeón, expuesta mediante una API FastAPI y una interfaz en React.",
      ],
    },
    {
      name: "Technical Support API",
      type: "Desarrollo de APIs",
      technologies: "Python, Flask, PostgreSQL, Docker, Postman",
      github: "https://github.com/jaq23369/technical-support-api",
      bullets: [
        "Desarrollé una API REST para registrar y administrar incidentes de soporte técnico.",
        "Implementé operaciones CRUD, validación de datos, estados de incidentes y respuestas HTTP para casos de error.",
        "Integré PostgreSQL para la persistencia y preparé el entorno con Docker Compose para ejecutar la aplicación y la base de datos.",
      ],
    },
    {
      name: "Spawn Point — E-commerce de videojuegos",
      type: "Proyecto de desarrollo web",
      technologies: "React, Vite, JavaScript, CSS",
      github: "https://github.com/jaq23369/E-commerce-Spawn-Point",
      demo: "https://e-commerce-spawn-point.vercel.app/",
      bullets: [
        "Construí una tienda web de videojuegos mediante componentes reutilizables en React.",
        "Implementé navegación entre catálogo y detalle de productos, además de un carrito de compras.",
        "Diseñé una interfaz responsiva y preparé la aplicación para su despliegue web con Vite.",
      ],
    },
  ],
  skills: [
    {
      category: "Lenguajes",
      items: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Desarrollo web",
      items: ["React", "Vite", "Flask", "FastAPI", "APIs REST"],
    },
    {
      category: "Datos y bases de datos",
      items: [
        "PostgreSQL",
        "Preparación de datos",
        "Modelos de clasificación",
        "Modelo Poisson",
      ],
    },
    {
      category: "Herramientas",
      items: ["Git", "GitHub", "Docker", "Postman", "Visual Studio Code"],
    },
    {
      category: "Conocimientos",
      items: [
        "Estructuras de datos y algoritmos",
        "Programación orientada a objetos",
        "Control de versiones",
        "Desarrollo de software",
      ],
    },
  ],
  languages: ["Español — Nativo", "Inglés — Intermedio-Avanzado"],
  professionalSkills: [
    "Resolución de problemas",
    "Pensamiento analítico",
    "Aprendizaje continuo",
    "Adaptabilidad",
  ],
};
