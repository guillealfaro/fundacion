import React from "react";
import "../Hero/hero.scss";
import logo from "../../assets/kids-hero.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Left Section */}
        <div className="hero-text">
          <h1>
            Construyendo <br /> Futuros <br /> Brillantes
          </h1>
          <p>
            En Fundación Creciendo Feliz, ofrecemos un refugio educativo y lleno
            de cuidado para los niños y niñas. Nos asociamos con instituciones
            como PANI y la red de Cuido IMAS para asegurar que cada día sea una
            oportunidad de aprendizaje y crecimiento para los hijos de madres y
            padres trabajadores.
          </p>
          <button className="hero-button">Más información</button>
        </div>

        {/* Right  Section */}
        <div className="hero-image">
          <img src={logo} alt="Decorative Hero Graphic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
