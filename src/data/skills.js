// Data: Skills que se mostrarán en la sección de habilidades del portafolio
// Descripción: Este archivo contiene los datos de las habilidades que se mostrarán en la sección de habilidades del portafolio. Cada habilidad tiene un nombre, nivel de habilidad, icono y color asociado.
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFlask,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiPostman,
  SiDocker,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const skillsData = {
  Frontend: [
    {
      name: "HTML5",
      level: 70,
      icon: SiHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS",
      level: 60,
      icon: SiCss3,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      level: 55,
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "React",
      level: 70,
      icon: SiReact,
      color: "#61DAFB",
    },
  ],
  Backend: [
    {
      name: "Flask",
      level: 40,
      icon: SiFlask,
      color: "#FFFFFF",
    },
    {
      name: "PostgreSQL",
      level: 60,
      icon: SiPostgresql,
      color: "#4169E1",
    },
  ],
  Herramientas: [
    {
      name: "Git",
      level: 80,
      icon: SiGit,
      color: "#F05032",
    },
    {
      name: "VS Code",
      level: 70,
      icon: VscCode,
      color: "#007ACC",
    },
    {
      name: "Figma",
      level: 60,
      icon: SiFigma,
      color: "#F24E1E",
    },
    {
      name: "Postman",
      level: 40,
      icon: SiPostman,
      color: "#FF6C37",
    },
    {
      name: "Docker",
      level: 70,
      icon: SiDocker,
      color: "#2496ED",
    },
  ],
};
