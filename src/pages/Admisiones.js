import React from "react";
import Copy from "../components/Copy";
import Return from "../components/Return";
import StepsIMAS from "../components/StepsIMAS";
import "../styles/admisiones.scss";

const Admisiones = () => {
  return (
    <div>
      <Return />
      <StepsIMAS/>
      <Copy />
    </div>
  );
};

export default Admisiones;
