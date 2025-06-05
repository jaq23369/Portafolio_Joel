// ===============================
// Componente: SkillCard
// Descripción: Tarjeta de habilidad (solo presentación)
// Props: skill, progress (viene calculado desde la página)
// ===============================
const SkillCard = ({ skill, progress }) => {
  // Obtener el componente de icono
  const IconComponent = skill.icon;

  return (
    <div className="skill-card">
      {/* Header con icono y nombre */}
      <div className="skill-header">
        <div className="skill-icon">
          {IconComponent && (
            <IconComponent
              size={24}
              style={{ color: skill.color || "var(--primary)" }}
            />
          )}
        </div>
        <h4>{skill.name}</h4>
      </div>

      {/* Barra de progreso */}
      <div className="skill-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="progress-text">{skill.level}%</span>
      </div>
    </div>
  );
};

export default SkillCard;
