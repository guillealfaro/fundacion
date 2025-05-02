import React from "react";
import Copy from "../components/Copy";
import Return from "../components/Return";
import StepsIMAS from "../components/StepsIMAS";
import StepsPANI from "../components/StepsPANI";
import "../styles/admisiones.scss";

const Admisiones = () => {
  return (
    <div>
      <Return />
      <StepsIMAS />
      <StepsPANI />
      <Copy />
    </div>
  );
};

export default Admisiones;
