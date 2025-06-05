// ===============================
// Componente: Navbar
// Descripción: Barra de navegación del portafolio (solo presentación)
// Props: isOpen, toggleMenu, currentPath
// ===============================
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ isOpen, toggleMenu, currentPath, theme, toggleTheme }) => {
  // Array de navegación (datos estáticos)
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Currículum", path: "/resume" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo del portafolio */}
        <Link to="/" className="nav-logo">
          &lt;Joel Jaquez&gt;
        </Link>

        {/* Menú de navegación */}
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${
                currentPath === item.path ? "active" : ""
              }`}
              onClick={() => toggleMenu(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          {/* Botón de cambio de tema */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Cambiar a tema ${
              theme === "dark" ? "claro" : "oscuro"
            }`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Botón hamburguesa para móvil */}
          <div className="nav-toggle" onClick={() => toggleMenu(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
