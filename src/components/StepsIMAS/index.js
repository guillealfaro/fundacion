import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Calendar,
  UserCheck,
  FileText,
  CheckCircle,
  FolderPlus,
} from "lucide-react";
import PropTypes from "prop-types";
import "../StepsIMAS/stepsIMAS.scss";

export default function StepsIMAS() {
  const containerRef = useRef(null);

  // Datos reales del proceso IMAS
  const imasSteps = [
    {
      icon: <Calendar className="step-icon" />,
      title: "Solicitar cita en IMAS",
      description:
        "Las familias tienen que ir al IMAS, solicitar una cita (normalmente por correo), y esperar a que les llamen.",
    },
    {
      icon: <UserCheck className="step-icon" />,
      title: "Entrevista y verificación",
      description:
        "Les hacen la entrevista y varios procesos de investigación socioeconómica que son gestionados por el IMAS.",
    },
    {
      icon: <FileText className="step-icon" />,
      title: "Obtener carta de cupo",
      description:
        "Una vez aprobados, los padres eligen la institución y solicitan una carta donde confirme que hay espacio para el niño en la guardería.",
    },
    {
      icon: <CheckCircle className="step-icon" />,
      title: "Recoger boleta de aprobación",
      description:
        "Regresan al IMAS con la carta y reciben una boleta que indica la aprobación final e incluye la fecha de inicio.",
    },
    {
      icon: <FolderPlus className="step-icon" />,
      title: "Reunión para expediente",
      description:
        "Agendar reunión para crear el expediente: copia de cédulas, constancia de nacimiento, dictamen médico y fotos tamaño pasaporte.",
    },
  ];

  return (
    <div className="scroll-container">
      {/* Intro sección */}
      <div className="intro-section">
        <h1>Baja para ver paso a paso el proceso de admision</h1>
        <ArrowDown className="arrow-icon" />
      </div>

      {/* Contenedor principal */}
      <div ref={containerRef} className="main-container">
        <div className="content-wrapper">
          <div className="grid-layout">
            {/* Contenido fijo izquierda */}
            <div className="fixed-content">
              <h2>Pasos para matricular con el IMAS</h2>
              <p className="description">
                Para padres y madres de familia, el proceso de la matrícula con
                el IMAS será solo para aquellas familias en las que el niño o
                niña se encuentra cursando el kinder y tiene entre 1 y 6 años.
              </p>
              <div className="scroll-indicator">
                <div className="indicator-line"></div>
                <p>Sigue bajando para conocer los pasos</p>
              </div>
            </div>

            {/* Pasos derechos */}
            <div className="steps-container">
              {imasSteps.map((step, index) => (
                <StepCard
                  key={index}
                  containerRef={containerRef}
                  index={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ containerRef, index, icon, title, description }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.6]
  );

  const initialDelay = index * 0.1;

  return (
    <motion.div
      ref={cardRef}
      className="step-card-wrapper"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: initialDelay }}
      style={{ y, opacity }}
    >
      <div className="step-card">
        <div className="card-header">
          <div className="icon-container">{icon}</div>
          <h3>{title}</h3>
        </div>
        <p className="card-description">{description}</p>
      </div>
    </motion.div>
  );
}

StepCard.propTypes = {
  containerRef: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
