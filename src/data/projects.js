// Data: Información acerca de los proyectos del portafolio
// Descripcion: Este archivo contiene los datos de los proyectos que se mostrarán en la sección de proyectos del portafolio. Cada proyecto tiene un ID, título, descripción, imagen, tecnologías utilizadas, enlaces a GitHub y demo, y una categoría.
export const projectsData = [
  {
    id: 1,
    title: "E-commerce App",
    description:
      "Aplicación de comercio electrónico sobre videojuegos con HomePage, DetailPage y CartPage.",
    image: "/publicimagesprojects/E-commerce.jpeg",
    technologies: ["React + Vite"],
    github: "https://github.com/jaq23369/E-commerce-Spawn-Point.git",
    demo: "https://e-commerce-spawn-point.vercel.app",
    category: "web",
  },
  {
    id: 2,
    title: "Technical Support API",
    description:
      "API para gestionar incidentes de soporte técnico, la cual permite a los empleados reportar incidentes.",
    image: "/publicimagesprojects/API Support.jpeg",
    technologies: ["JavaScript", "Flask", "PostgreSQL", "Docker"],
    github: "https://github.com/jaq23369/technical-support-api.git",
    demo: "#",
    category: "web",
  },
  {
    id: 3,
    title: "To Do List",
    description: "Aplicación simple para gestionar tareas pendientes.",
    image: "/publicimagesprojects/ToDoList.jpeg",
    technologies: ["HTML", "React CDN"],
    github: "https://github.com/jaq23369/Introducci-n-a-React-CDN-.git",
    demo: "#",
    category: "web",
  },
];
