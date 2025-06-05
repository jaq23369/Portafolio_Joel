// ===============================
// Componente: Footer
// Descripción: Pie de página del portafolio (solo presentación)
// ===============================
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Información de copyright */}
          <p>&copy; 2025 Mi Portafolio. Desarrollado con React + Vite</p>

          {/* Enlaces a redes sociales */}
          <div className="social-links">
            <a
              href="https://github.com/jaq23369"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a href="mailto:jjaquezlopez236@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
