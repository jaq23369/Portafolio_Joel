// Data: Información acerca de los proyectos del portafolio
// Descripcion: Este archivo contiene los datos de los proyectos que se mostrarán en la sección de proyectos del portafolio. Cada proyecto tiene un ID, título, descripción, imagen, tecnologías utilizadas, enlaces a GitHub y demo, y una categoría.
export const projectsData = [
  {
    id: 4,
    title: "Predictor Inteligente del Mundial 2026",
    description:
      "Aplicación full stack que procesa datos deportivos y combina modelos de clasificación con un modelo Poisson para estimar resultados, marcadores y simular el torneo.",
    image: null,
    technologies: ["Python", "FastAPI", "scikit-learn", "React", "Vite"],
    github: "https://github.com/jaq23369/Predictor_WC2026",
    demo: "https://predictor-wc-2026-sepia.vercel.app/",
    category: "data",
  },
  {
    id: 1,
    title: "E-commerce App",
    description:
      "Aplicación de comercio electrónico sobre videojuegos con HomePage, DetailPage y CartPage.",
    image: "/proyectos/E-commerce.jpeg",
    technologies: ["React + Vite"],
    github: "https://github.com/jaq23369/E-commerce-Spawn-Point.git",
    demo: "https://e-commerce-spawn-point.vercel.app",
    category: "web",
  },
  {
    id: 2,
    title: "Technical Support API",
    description:
      "Backend RESTful desarrollado con Python y Flask para la gestión automatizada de incidentes. Implementa arquitectura MVC, conexión a base de datos PostgreSQL y containerización con Docker para un despliegue escalable.",
    image: "/proyectos/API Support.jpeg",
    technologies: ["Python", "Flask", "PostgreSQL", "Docker"],
    github: "https://github.com/jaq23369/technical-support-api.git",
    demo: "#",
    category: "web",
  },
  {
    id: 3,
    title: "To Do List",
    description: "Aplicación simple para gestionar tareas pendientes.",
    image: "/proyectos/ToDoList.jpeg",
    technologies: ["HTML", "React CDN"],
    github: "https://github.com/jaq23369/Introducci-n-a-React-CDN-.git",
    demo: "#",
    category: "web",
  },
];
