import {
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { resumeData } from "../data/resume";
import "../styles/Resume.css";

const Resume = () => {
  const { contact } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume">
      <div className="container">
        <header className="resume-page-header">
          <div>
            <p className="resume-eyebrow">Currículum profesional</p>
            <h1>Mi Currículum</h1>
          </div>
          <button className="btn btn-primary resume-print-button" onClick={handlePrint}>
            <Download size={20} aria-hidden="true" />
            Guardar como PDF
          </button>
        </header>

        <article className="resume-document" aria-label={`Currículum de ${contact.name}`}>
          <header className="resume-identity">
            <div>
              <h1>{contact.name}</h1>
              <p className="resume-role">{contact.title}</p>
            </div>

            <address className="resume-contact-list">
              <span>
                <MapPin size={15} aria-hidden="true" />
                {contact.location}
              </span>
              <a href={`tel:${contact.phone.replace(/\s|-/g, "")}`}>
                <Phone size={15} aria-hidden="true" />
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail size={15} aria-hidden="true" />
                {contact.email}
              </a>
              <a href={contact.github.url} target="_blank" rel="noopener noreferrer">
                <Github size={15} aria-hidden="true" />
                {contact.github.label}
              </a>
              <a
                href={contact.portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={15} aria-hidden="true" />
                {contact.portfolio.label}
              </a>
              <a
                href={contact.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={15} aria-hidden="true" />
                {contact.linkedin.label}
              </a>
            </address>
          </header>

          <section className="resume-block" aria-labelledby="resume-profile">
            <h2 id="resume-profile">Perfil profesional</h2>
            <p>{resumeData.profile}</p>
          </section>

          <section className="resume-block" aria-labelledby="resume-education">
            <h2 id="resume-education">Formación académica</h2>
            {resumeData.education.map((education) => (
              <div className="resume-entry resume-education-entry" key={education.degree}>
                <div className="resume-entry-heading">
                  <div>
                    <h3>{education.degree}</h3>
                    <p className="resume-entry-subtitle">{education.institution}</p>
                  </div>
                  <p className="resume-period">{education.period}</p>
                </div>
                <p>{education.details}</p>
              </div>
            ))}
          </section>

          <section className="resume-block" aria-labelledby="resume-projects">
            <h2 id="resume-projects">Proyectos destacados</h2>
            <div className="resume-project-list">
              {resumeData.projects.map((project) => (
                <article className="resume-project" key={project.name}>
                  <div className="resume-entry-heading">
                    <div>
                      <h3>{project.name}</h3>
                      <p className="resume-entry-subtitle">
                        {project.type} · {project.technologies}
                      </p>
                    </div>
                    <div className="resume-project-links" aria-label={`Enlaces de ${project.name}`}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                          <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-block" aria-labelledby="resume-skills">
            <h2 id="resume-skills">Habilidades técnicas</h2>
            <dl className="resume-skill-groups">
              {resumeData.skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <dt>{skillGroup.category}</dt>
                  <dd>{skillGroup.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="resume-bottom-grid">
            <section className="resume-block" aria-labelledby="resume-languages">
              <h2 id="resume-languages">Idiomas</h2>
              <ul className="resume-compact-list">
                {resumeData.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </section>

            <section className="resume-block" aria-labelledby="resume-professional">
              <h2 id="resume-professional">Habilidades profesionales</h2>
              <p>{resumeData.professionalSkills.join(" · ")}</p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Resume;
