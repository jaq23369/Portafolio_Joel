// ===============================
// Hook personalizado: useTheme
// Descripción: Maneja el tema (oscuro/claro) del portafolio y lo guarda en el navegador
// ===============================
import { useState, useEffect } from "react";

// Valor inicial: "dark" (el portafolio empieza en tema oscuro)
export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  // Buscar en el almacenamiento del navegador si hay un tema guardado
  // localStorage.getItem() busca un valor guardado con la clave "portfolio-theme"
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Se ejecuta CADA VEZ que el tema cambia
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // Guardar el tema actual en el navegador para la próxima visita
    // localStorage.setItem() guarda permanentemente el valor
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Alternar entre tema oscuro y claro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  // Esto permite que otros componentes usen: const { theme, toggleTheme } = useTheme()
  return { theme, toggleTheme };
};
