// ===============================
// Componente: ProjectCard
// Descripción: Tarjeta de proyecto (solo presentación)
// Props: project, isHovered, onMouseEnter, onMouseLeave
// ===============================
import { Github, ExternalLink, Eye } from "lucide-react";

const ProjectCard = ({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  hasValidDemo,
  hasValidGithub,
}) => {
  return (
    <div
      className="project-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Imagen del proyecto */}
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        {/* Overlay que aparece al hacer hover */}
        <div className={`project-overlay ${isHovered ? "visible" : ""}`}>
          <div className="project-actions">
            {/* Botón GitHub - solo visible si tiene link válido */}
            {hasValidGithub && (
              <a
                href={project.github}
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
                title="Ver código en GitHub"
              >
                <Github size={20} />
              </a>
            )}

            {/* Botón Demo - condicional según validez */}
            {hasValidDemo ? (
              <a
                href={project.demo}
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
                title="Ver demo en vivo"
              >
                <ExternalLink size={20} />
              </a>
            ) : (
              /* Botón deshabilitado cuando no hay demo */
              <div
                className="project-btn project-btn-disabled"
                title="Demo no disponible"
              >
                <Eye size={20} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Información del proyecto */}
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* Tecnologías utilizadas */}
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Indicador visual si no tiene demo */}
        {!hasValidDemo && <p className="no-demo-text">Demo no disponible</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
