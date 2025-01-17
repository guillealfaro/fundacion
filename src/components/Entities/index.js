import React from "react";
import "../Entities/entities.scss";
import imas from "../../assets/Logo-IMAS.png";
import pani from "../../assets/logo-pani.png";

const Entities = () => {
  return (
    <section className="collaboration-section">
      <div className="content-container">
        {/* Left Side: Logos */}
        <div className="logos">
          <img src={imas} alt="Logo IMAS" className="logo imas" />
          <img src={pani} alt="Logo PANI" className="logo" />
        </div>

        {/* Right Side: Text */}
        <div className="text">
          <h2 className="title">Nuestro Compromiso con las Familias</h2>
          <p className="description">
            En Fundación Creciendo Feliz, trabajamos en alianza con{" "}
            <strong>IMAS</strong> y <strong>PANI</strong> para brindar acceso a
            educación, cuidado y apoyo a las familias de nuestra comunidad. Este
            respaldo nos permite crear un entorno donde los niños puedan
            aprender, crecer y soñar en grande.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Entities;
