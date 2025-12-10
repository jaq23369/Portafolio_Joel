// ===============================
// Página: Resume (Currículum)
// Descripción: Currículum con diseño BLANCO y LIMPIO (1 página)
// ===============================
import { Download, Mail, Phone, MapPin, Github } from "lucide-react";
import "../styles/Resume.css";

// --- DATOS DEL CURRÍCULUM ---
const resumeData = {
  header: {
    name: "Joel Antonio Jaquez López",
    title: "Estudiante de Ingeniería en Ciencias de la Computación",
    email: "jjaquezlopez236@gmail.com",
    phone: "+502 3079-3526",
    location: "San Lucas Sacatepéquez, Guatemala",
    github: "github.com/jaq23369",
    portfolio: "https://portafolio-joel-1.vercel.app/",
  },
  summary:
    "Estudiante de 3er año apasionado por el desarrollo de software. Busco una primera oportunidad profesional para aplicar mis conocimientos y así contribuir al crecimiento de equipos de desarrollo y aprender de desarrolladores experimentados.",
  education: [
    {
      degree: "Ingeniería en Ciencias de la Computación",
      school: "Universidad del Valle de Guatemala",
      year: "",
      details:
        "Promedio destacado. Siempre buscando aprender, entender el porqué de las cosas y mejorar mis habilidades técnicas.",
    },
  ],
  projects: [
    {
      name: "Technical Support API",
      tech: "Python, Flask, Docker",
      desc: "API RESTful para gestión de incidentes con base de datos PostgreSQL.",
    },
    {
      name: "E-commerce App",
      tech: "React, Vite, CSS",
      desc: "Plataforma de compras con carrito y diseño responsivo.",
    },
    {
      name: "Task Manager",
      tech: "JavaScript, LocalStorage",
      desc: "Aplicación de gestión de tareas optimizada.",
    },
  ],
  skills: {
    frontend: ["React", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind"],
    backend: ["Python", "Flask", "PostgreSQL", "API REST"],
    tools: ["Git & GitHub", "Docker", "VS Code", "Postman"],
  },
  languages: ["Español (Nativo)", "Inglés (Intermedio-Avanzado)"],
};

const Resume = () => {
  const handleDownload = () => {
    if (window.print) {
      const printWindow = window.open("", "_blank");

      // HTML ESTRUCTURADO PARA PDF (Diseño BLANCO)
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>CV - ${resumeData.header.name}</title>
          <style>
            @page { margin: 0; size: auto; }
            body { 
              font-family: 'Helvetica', 'Arial', sans-serif; 
              margin: 0; 
              padding: 0; 
              color: #333; 
              background: #fff;
              display: grid;
              grid-template-columns: 30% 70%; /* Estructura de columnas */
              min-height: 100vh;
            }

            /* --- COLUMNA IZQUIERDA (AHORA BLANCA) --- */
            .sidebar {
              background-color: #ffffff; /* Fondo blanco */
              color: #333; /* Texto oscuro */
              padding: 30px 20px;
              text-align: left;
              border-right: 2px solid #00ff88; /* Línea separadora verde */
            }
            
            .profile-container { text-align: center; margin-bottom: 25px; }
            .profile-img { 
              width: 100px; height: 100px; 
              border-radius: 50%; border: 3px solid #00ff88; 
              object-fit: cover;
              margin-bottom: 10px;
            }
            .sidebar h1 { 
              font-size: 18px; 
              margin: 0 0 5px 0; 
              text-transform: uppercase; 
              letter-spacing: 0.5px; 
              color: #000;
            }
            .sidebar h2 { 
              font-size: 11px; 
              font-weight: bold; 
              color: #00cc6a; /* Verde un poco más oscuro para leerse bien en blanco */
              margin-bottom: 20px; 
            }

            .contact-info { margin-bottom: 30px; }
            .contact-item { margin-bottom: 12px; display: flex; flex-direction: column; }
            .contact-label { color: #00cc6a; font-weight: bold; font-size: 10px; text-transform: uppercase; margin-bottom: 2px; }
            .contact-value { color: #444; text-decoration: none; word-break: break-word; font-size: 11px; font-weight: 500;}

            .section-title-side { 
              font-size: 14px; border-bottom: 2px solid #00ff88; 
              padding-bottom: 3px; margin-bottom: 12px; text-transform: uppercase; 
              letter-spacing: 1px; color: #000; font-weight: bold;
            }
            
            .skill-group { margin-bottom: 15px; }
            .skill-group-title { color:#00cc6a; font-size:11px; margin-bottom:4px; font-weight:bold; }
            .skill-tag { 
              display: inline-block; background: #f0f0f0; color: #333; /* Etiqueta gris claro */
              padding: 3px 8px; border-radius: 3px; font-size: 10px; 
              margin: 0 4px 6px 0; border: 1px solid #ddd;
            }

            /* --- COLUMNA DERECHA (BLANCA) --- */
            .main-content {
              padding: 30px 30px;
              background-color: #fff;
            }

            .section-title-main {
              font-size: 16px; color: #000; 
              border-bottom: 2px solid #00ff88; 
              padding-bottom: 3px; margin-bottom: 15px; margin-top: 20px;
              text-transform: uppercase; letter-spacing: 1px; font-weight: bold;
            }
            .section-title-main:first-child { margin-top: 0; }

            .summary-text { font-size: 12px; line-height: 1.5; color: #444; margin-bottom: 20px; text-align: justify; }

            .exp-item, .edu-item { margin-bottom: 15px; }
            .item-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
            .item-title { font-weight: bold; font-size: 14px; color: #000; }
            .item-subtitle { color: #00cc6a; font-weight: bold; font-size: 11px; text-transform: uppercase;}
            .item-date { font-size: 11px; color: #666; font-style: italic; }
            .item-desc { font-size: 12px; color: #555; margin-top: 3px; line-height: 1.4; }
            
            /* Ajustes finales para impresión */
            @media print {
               body { -webkit-print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          <div class="sidebar">
            <div class="profile-container">
              <img src="/imagenes/JoelJ.jpeg" class="profile-img" />
              <h1>Joel Jaquez</h1>
              <h2>${resumeData.header.title}</h2>
            </div>

            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-label">Correo:</span>
                <span class="contact-value">${resumeData.header.email}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Teléfono:</span>
                <span class="contact-value">${resumeData.header.phone}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Ubicación:</span>
                <span class="contact-value">${resumeData.header.location}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">GitHub:</span>
                <span class="contact-value">${resumeData.header.github}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Portafolio:</span>
                <span class="contact-value">${
                  resumeData.header.portfolio
                }</span>
              </div>
            </div>

            <h3 class="section-title-side">Habilidades</h3>
            <div class="skill-group">
              <div class="skill-group-title">BACKEND</div>
              ${resumeData.skills.backend
                .map((s) => `<span class="skill-tag">${s}</span>`)
                .join("")}
            </div>
            <div class="skill-group">
              <div class="skill-group-title">FRONTEND</div>
              ${resumeData.skills.frontend
                .map((s) => `<span class="skill-tag">${s}</span>`)
                .join("")}
            </div>
             <div class="skill-group">
              <div class="skill-group-title">HERRAMIENTAS</div>
              ${resumeData.skills.tools
                .map((s) => `<span class="skill-tag">${s}</span>`)
                .join("")}
            </div>

            <h3 class="section-title-side">Idiomas</h3>
            ${resumeData.languages
              .map(
                (l) =>
                  `<div style="font-size:11px; margin-bottom:4px; color:#444;">• ${l}</div>`
              )
              .join("")}
          </div>

          <div class="main-content">
            <h3 class="section-title-main">Perfil Profesional</h3>
            <p class="summary-text">${resumeData.summary}</p>

            <h3 class="section-title-main">Proyectos Destacados</h3>
            ${resumeData.projects
              .map(
                (proj) => `
              <div class="exp-item">
                <div class="item-header">
                  <span class="item-title">${proj.name}</span>
                </div>
                <div class="item-subtitle">${proj.tech}</div>
                <p class="item-desc">${proj.desc}</p>
              </div>
            `
              )
              .join("")}

            <h3 class="section-title-main">Educación</h3>
            ${resumeData.education
              .map(
                (edu) => `
              <div class="edu-item">
                <div class="item-header">
                  <span class="item-title">${edu.school}</span>
                  <span class="item-date">${edu.year}</span>
                </div>
                <div class="item-subtitle">${edu.degree}</div>
                <p class="item-desc">${edu.details}</p>
              </div>
            `
              )
              .join("")}
          </div>
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
        <header className="resume-header">
          <h1>Mi Currículum</h1>
          <div className="resume-actions">
            <button className="btn btn-primary" onClick={handleDownload}>
              <Download size={20} />
              Descargar PDF
            </button>
          </div>
        </header>

        {/* VISTA WEB */}
        <div className="resume-content">
          <div className="resume-header-section">
            <div className="profile-section">
              <img
                src="/imagenes/JoelJ.jpeg"
                alt="Joel Jaquez"
                className="profile-photo"
              />
              <div className="profile-info">
                <h1>{resumeData.header.name}</h1>
                <h2>{resumeData.header.title}</h2>
                <div className="contact-grid">
                  <div className="contact-item">
                    <Mail size={16} /> <span>{resumeData.header.email}</span>
                  </div>
                  <div className="contact-item">
                    <Github size={16} /> <span>{resumeData.header.github}</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={16} /> <span>GUA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h2>Acerca de Mí</h2>
            <p>{resumeData.summary}</p>
          </div>

          <div className="resume-section">
            <h2>Proyectos</h2>
            {resumeData.projects.map((proj, index) => (
              <div key={index} className="project-item">
                <h3>{proj.name}</h3>
                <p className="project-tech">{proj.tech}</p>
                <p>{proj.desc}</p>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h2>Habilidades</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Backend (Python)</h4>
                <ul className="skill-list">
                  {resumeData.skills.backend.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul className="skill-list">
                  {resumeData.skills.frontend.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
