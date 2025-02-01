import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/logo-abc.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="Fundación Creciendo Feliz" />
        </div>
        <nav
          className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
        >
          <Link to="/" className="navbar__link">
            Inicio
          </Link>
          <Link to="/Nosotros" className="navbar__link">
            Nosotros
          </Link>
          <Link to="/Servicios" className="navbar__link">
            Servicios
          </Link>
          <Link to="/Donaciones" className="navbar__link">
            Donaciones
          </Link>
          <Link to="/Admisiones" className="navbar__link">
            Admisiones
          </Link>
          <Link to="/Contactenos" className="navbar__button">
            Contáctenos
          </Link>
        </nav>
        <div className="navbar__menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="navbar__close">&times;</span>
          ) : (
            <span className="navbar__hamburger">&#9776;</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
