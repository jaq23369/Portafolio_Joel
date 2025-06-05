// ===============================
// Página: Home (Inicio)
// Descripción: Página principal del portafolio con presentación personal
// ===============================
import { Link } from "react-router-dom";
import { ChevronDown, Code, Rocket, GraduationCap, User } from "lucide-react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Sección principal con hero */}
      <section className="hero">
        <div className="hero-container">
          {/* Contenido  */}
          <div className="hero-content">
            {/* Información personal */}
            <div className="hero-text">
              <h1 className="hero-title">
                Hola, soy <span className="highlight">Joel Jaquez</span>
              </h1>
              <h2 className="hero-subtitle">
                Estudiante de Ciencias de la computación | Universidad del Valle
                de Guatemala
              </h2>
              <p className="hero-description">
                Estudiante de 3er año apasionado por crear soluciones digitales.
                Desde 2023 construyendo proyectos con Python, Java, Android
                Studio, React, JavaScript, PostgreSQL y Docker. Busco mi primera
                oportunidad profesional para aplicar mis conocimientos y crecer
                como desarrollador.
              </p>

              {/* Estadísticas visuales */}
              <div className="hero-stats">
                <div className="stat-item">
                  <GraduationCap size={20} />
                  <span>3er Año UVG</span>
                </div>
                <div className="stat-item">
                  <Code size={20} />
                  <span>2+ Años Programando</span>
                </div>
                <div className="stat-item">
                  <User size={20} />
                  <span>Disponible para Prácticas</span>
                </div>
              </div>

              {/* Botones de navegación */}
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  <Rocket size={20} />
                  Ver Mis Proyectos
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <Code size={20} />
                  Contáctame
                </Link>
              </div>
            </div>

            {/* Foto de perfil */}
            <div className="hero-image">
              <div className="image-placeholder">
                <img
                  src="/publicimages/JoelJ.jpeg"
                  alt="Joel Jaquez - Estudiante de Desarrollo Web"
                />
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="scroll-indicator">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* Sección "Acerca de Mí" */}
      <section className="about-preview">
        <div className="container">
          <h3>Acerca de Mí</h3>
          <p>
            Soy estudiante de 3er año en la Universidad del Valle de Guatemala,
            especializado en desarrollo web. Desde 2023 he construido una base
            sólida en tecnologías frontend y backend, creando proyectos que
            demuestran mi capacidad para resolver problemas reales con código
            limpio.
          </p>
          <p>
            Ofrezco conocimientos actuales en tecnologías modernas como React,
            JavaScript, PostgreSQL y Docker, combinados con una mentalidad de
            aprendizaje continuo y adaptabilidad. Busco oportunidades para
            contribuir en equipos de desarrollo, aportando código limpio,
            perspectiva fresca y la energía de alguien comprometido con crecer
            profesionalmente en el mundo de la tecnología.
          </p>
          <Link to="/skills" className="learn-more">
            Conoce mis habilidades técnicas →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
