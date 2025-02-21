import React from "react";
import "../Return/return.scss";
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import logo from "../../assets/logo-abc.png";

const Return = () => {
  const location = useLocation();

  // Definir los nombres de página según la ruta
  const pageTitles = {
    "/Donaciones": "Donaciones",
    "/Nosotros": "Nosotros",
    "/Admisiones": "Admisiones",
    "/Contactenos": "Contactenos",
    "/Servicios": "Servicios",
  };

  const currentPage = pageTitles[location.pathname] || "Inicio";
  return (
    <nav className="return">
      <div className="left">
        <Link to="/" className="backLink">
          <BsArrowLeft className="icon" />
          <span>Inicio | {currentPage}</span>
        </Link>
      </div>
      <div className="right">
        <Link to="/">
          <img src={logo} alt="Fundación Creciendo Feliz" className="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Return;
