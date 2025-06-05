// ===============================
// Página: Resume (Currículum)
// Descripción: Currículum profesional con funcionalidad de descarga PDF
// ===============================
import { useState } from "react";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import "../styles/Resume.css";

const Resume = () => {
  // Función para generar PDF limpio del currículum
  const handleDownload = () => {
    if (window.print) {
      // Crear una ventana temporal para imprimir
      const printWindow = window.open("", "_blank");

      // Obtener SOLO el contenido sin el header con foto
      const resumeSections = document.querySelectorAll(".resume-section");
      let sectionsHTML = "";

      // Concatenar todas las secciones sin el header
      resumeSections.forEach((section) => {
        sectionsHTML += section.outerHTML;
      });

      // Crear documento HTML limpio para PDF
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>CV - Joel Jaquez</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 30px; 
              color: #333; 
              line-height: 1.6;
            }
            
            /* Header simple para PDF */
            .pdf-header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 3px solid #00ff88;
              padding-bottom: 20px;
            }
            .pdf-header h1 {
              margin: 0;
              font-size: 2rem;
              color: #333;
            }
            .pdf-header h2 {
              margin: 5px 0 15px 0;
              color: #666;
              font-weight: normal;
              font-size: 1.1rem;
            }
            .pdf-contact {
              display: flex;
              justify-content: center;
              gap: 30px;
              margin-top: 15px;
              font-size: 0.9rem;
            }
            
            /* Estilos para secciones */
            .resume-section { 
              margin-bottom: 25px; 
              page-break-inside: avoid;
            }
            .resume-section h2 { 
              color: #00ff88; 
              border-bottom: 2px solid #ddd; 
              padding-bottom: 8px;
              margin-bottom: 15px;
              font-size: 1.4rem;
            }
            
            /* Elementos de experiencia y educación */
            .education-item, .project-item { 
              margin-bottom: 20px;
              padding: 15px;
              background: #f8f9fa;
              border-radius: 8px;
              border-left: 4px solid #00ff88;
            }
            .education-item h3, .project-item h3 {
              margin-bottom: 8px;
              color: #333;
              font-size: 1.1rem;
            }
            .institution, .project-tech { 
              color: #00ff88; 
              font-weight: bold;
              margin-bottom: 10px;
            }
            
            /* Listas */
            ul { 
              margin: 10px 0; 
              padding-left: 20px; 
            }
            li {
              margin-bottom: 5px;
            }
            
            /* Skills grid */
            .skills-grid { 
              display: grid; 
              grid-template-columns: repeat(3, 1fr); 
              gap: 20px; 
            }
            .skill-category h4 { 
              color: #00ff88; 
              margin-bottom: 10px; 
              font-size: 1rem;
            }
            .skill-list { 
              list-style: none; 
              padding: 0; 
            }
            .skill-list li { 
              margin-bottom: 6px;
              padding-left: 15px;
              position: relative;
            }
            .skill-list li::before {
              content: "▶";
              position: absolute;
              left: 0;
              color: #00ff88;
              font-size: 0.8rem;
            }
            
            /* Responsive para impresión */
            @media print {
              body { margin: 15px; }
              .skills-grid { grid-template-columns: repeat(2, 1fr); }
            }
          </style>
        </head>
        <body>
          <!-- Header simple para PDF -->
          <div class="pdf-header">
            <h1>Joel Antonio Jaquez López</h1>
            <h2>Estudiante de Desarrollo Web | Universidad del Valle de Guatemala</h2>
            <div class="pdf-contact">
              <span>📧 jjaquezlopez236@gmail.com</span>
              <span>📱 +502 3079-3526</span>
              <span>📍 San Lucas Sacatepéquez, Guatemala</span>
            </div>
          </div>
          
          <!-- Contenido del currículum -->
          ${sectionsHTML}
        </body>
        </html>
      `);

      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    }
  };

  return (
    <div className="resume">
      <div className="container">
        {/* Header con botón de descarga */}
        <header className="resume-header">
          <h1>Mi Currículum</h1>
          <div className="resume-actions">
            <button className="btn btn-primary" onClick={handleDownload}>
              <Download size={20} />
              Descargar PDF
            </button>
          </div>
        </header>

        {/* Contenido del currículum para vista web */}
        <div className="resume-content">
          {/* Header con foto SOLO para web */}
          <div className="resume-header-section">
            <div className="profile-section">
              <img
                src="/imagenes/JoelJ.jpeg"
                alt="Joel Jaquez"
                className="profile-photo"
              />
              <div className="profile-info">
                <h1>Joel Antonio Jaquez López</h1>
                <h2>
                  Ingeniería en Ciencias de la Computación y Tecnologías de la
                  Información | Universidad del Valle de Guatemala
                </h2>
                <div className="contact-grid">
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>jjaquezlopez236@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} />
                    <span>+502 3079-3526</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={16} />
                    <span>San Lucas Sacatepéquez, Guatemala</span>
                  </div>
                  <div className="contact-item">
                    <Github size={16} />
                    <span>github.com/jaq23369</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estas secciones SÍ van al PDF */}
          <div className="resume-section">
            <h2>Acerca de Mí</h2>
            <p>
              Tengo 20 años y soy una persona apasionada por la tecnología y el
              aprendizaje continuo. Mi aspiración es convertirme en un
              desarrollador competente que pueda crear soluciones innovadoras y
              contribuir significativamente al crecimiento de equipos de
              desarrollo. Me motiva la resolución de problemas, hallar el por
              qué de las cosas y el constante avance de las tecnologías web.
            </p>
            <p>
              Busco una primera oportunidad profesional donde pueda aplicar mis
              conocimientos académicos, aprender de desarrolladores
              experimentados y aportar mi entusiasmo y perspectiva fresca a
              proyectos desafiantes.
            </p>
          </div>

          <div className="resume-section">
            <h2>Objetivo Profesional</h2>
            <p>
              Busco oportunidades de prácticas profesionales o posiciones junior
              donde pueda aplicar mis habilidades técnicas, contribuir al
              crecimiento de la empresa y continuar mi desarrollo profesional en
              un entorno colaborativo de aprendizaje continuo.
            </p>
          </div>

          <div className="resume-section">
            <h2>Educación</h2>
            <div className="education-item">
              <h3>
                Ingeniería en Ciencias de la Computación y Tecnologías de la
                Información
              </h3>
              <p className="institution">Universidad Del Valle de Guatemala</p>
              <p className="details">
                Estudiante de 3er año | Enfoque en Desarrollo de Software
              </p>
              <ul>
                <li>
                  Cursos relevantes: Programación Orientada a Objetos,
                  Estructuras de Datos, Bases de Datos
                </li>
                <li>Proyectos académicos con tecnologías web modernas</li>
                <li>
                  Participación activa en grupos de estudio de programación
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h2>Proyectos Destacados</h2>

            <div className="project-item">
              <h3>Sistema E-commerce</h3>
              <p className="project-tech">React + Vite</p>
              <ul>
                <li>
                  Desarrollo de aplicación web completa para comercio
                  electrónico de videojuegos
                </li>
                <li>Implementación de carrito de compras</li>
                <li>Diseño responsivo y experiencia de usuario optimizada</li>
              </ul>
            </div>

            <div className="project-item">
              <h3>API de Gestión de Incidentes</h3>
              <p className="project-tech">Flask, PostgreSQL, Docker</p>
              <ul>
                <li>API para reporte y seguimiento de incidentes</li>
                <li>Containerización con Docker para deployment</li>
                <li>Documentación completa de endpoints</li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Aplicación To-Do List</h3>
              <p className="project-tech">React CDN, HTML, Local Storage</p>
              <ul>
                <li>Aplicación web para gestión de tareas personales</li>
                <li>Interfaz simple</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h2>Habilidades Técnicas</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul className="skill-list">
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul className="skill-list">
                  <li>Flask (Python)</li>
                  <li>PostgreSQL</li>
                  <li>API REST</li>
                  <li>Base de Datos</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Herramientas</h4>
                <ul className="skill-list">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h2>Competencias Adicionales</h2>
            <ul>
              <li>
                <strong>Idiomas:</strong> Español (nativo), Inglés
                (intermedio-avanzado)
              </li>
              <li>
                <strong>Metodologías:</strong> Conocimientos básicos en
                metodologías ágiles
              </li>
              <li>
                <strong>Soft Skills:</strong> Trabajo en equipo, resolución de
                problemas, aprendizaje autónomo
              </li>
              <li>
                <strong>Disponibilidad:</strong> Tiempo completo para prácticas,
                medio tiempo para trabajo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
