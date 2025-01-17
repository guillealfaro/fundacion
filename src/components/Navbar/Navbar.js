import React, { useState } from "react";
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
          <a href="/" className="navbar__link">
            Inicio
          </a>
          <a href="/donaciones" className="navbar__link">
            Donaciones
          </a>
          <a href="/nosotros" className="navbar__link">
            Nosotros
          </a>
          <a href="/informacion" className="navbar__link">
            Información
          </a>
          <button className="navbar__button">Contáctenos</button>
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
