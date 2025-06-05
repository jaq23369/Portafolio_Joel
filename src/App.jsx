// ===============================
// src/App.jsx
// Componente: App
// Descripción: Componente principal con lógica de navegación
// ===============================
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { useTheme } from "./hooks/useTheme";

// Componente interno para acceder a useLocation
function AppContent() {
  // LÓGICA: Estado para el menú móvil del navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  // LÓGICA: Hook personalizado para manejo de tema
  const { theme, toggleTheme } = useTheme();

  // LÓGICA: Obtener la ruta actual
  const location = useLocation();

  // LÓGICA: Función para toggle del menú
  const handleNavToggle = (value) => {
    if (typeof value === "boolean") {
      setIsNavOpen(value);
    } else {
      setIsNavOpen(!isNavOpen);
    }
  };

  return (
    <div className="App" data-theme={theme}>
      {/* Navbar recibe props con la lógica del tema */}
      <Navbar
        isOpen={isNavOpen}
        toggleMenu={handleNavToggle}
        currentPath={location.pathname}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer es estático */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
