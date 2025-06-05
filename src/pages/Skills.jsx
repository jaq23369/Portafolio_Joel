// ===============================
// Página: Skills
// Descripción: Página de habilidades con lógica de animación de barras
// ===============================
import { useState, useEffect } from "react";
import SkillCard from "../components/skills/SkillCard";
import { skillsData } from "../data/skills";
import "../styles/Skills.css";

const Skills = () => {
  // Estado para las habilidades y progreso de animación
  const [skills, setSkills] = useState({});
  const [skillProgress, setSkillProgress] = useState({});

  // Cargar habilidades al montar el componente
  useEffect(() => {
    setSkills(skillsData);
  }, []);

  // Animar barras de progreso cuando se cargan las skills
  useEffect(() => {
    if (Object.keys(skills).length > 0) {
      // Crear objeto con progreso inicial en 0
      const initialProgress = {};
      Object.entries(skills).forEach(([category, categorySkills]) => {
        categorySkills.forEach((skill) => {
          initialProgress[skill.name] = 0;
        });
      });
      setSkillProgress(initialProgress);

      // Animar después de 500ms
      const timer = setTimeout(() => {
        const finalProgress = {};
        Object.entries(skills).forEach(([category, categorySkills]) => {
          categorySkills.forEach((skill) => {
            finalProgress[skill.name] = skill.level;
          });
        });
        setSkillProgress(finalProgress);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [skills]);

  return (
    <div className="skills">
      <div className="container">
        <header className="skills-header">
          <h1>Mis Habilidades</h1>
          <p>Tecnologías y herramientas que domino</p>
        </header>

        {/* Skills categories sin clases de scroll animation */}
        <div className="skills-categories">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    progress={skillProgress[skill.name] || 0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
