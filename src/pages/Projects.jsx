// ===============================
// Página: Projects
// Descripción: Página de proyectos con lógica de hover y filtrado
// ===============================
import { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { projectsData } from "../data/projects";
import "../styles/Projects.css";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Funciones para manejar hover de proyectos
  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  // Validar si un proyecto tiene demo válido
  const validateDemo = (demo) => {
    return (
      demo && demo !== "#" && demo !== "" && demo !== null && demo !== undefined
    );
  };

  // Validar si un proyecto tiene GitHub válido
  const validateGithub = (github) => {
    return (
      github &&
      github !== "#" &&
      github !== "" &&
      github !== null &&
      github !== undefined
    );
  };

  return (
    <div className="projects">
      <div className="container">
        <header className="projects-header">
          <h1>Mis Proyectos</h1>
          <p>Una colección de mis trabajos más destacados</p>
        </header>
        {/* Grid de proyectos con lógica de validación */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
              hasValidDemo={validateDemo(project.demo)}
              hasValidGithub={validateGithub(project.github)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
