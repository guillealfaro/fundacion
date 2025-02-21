import React from "react";
import Copy from "../components/Copy";
import Return from "../components/Return";
import "../styles/contactenos.scss";
import pic from "../assets/contact-1.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

const Contactenos = () => {
  return (
    <div className="contact-container">
      <Return />

      <div className="contact-content">
        <div className="contact-info">
          <div className="image-container">
            <img className="image-contact" src={pic} alt="Contact" />
          </div>
          <div className="info-grid">
            <div className="info-item">
              <FaLocationDot className="icon" />
              <div>
                <h4>Dirección</h4>
                <p>San José, Pavas, contiguo a DEMASA</p>
              </div>
            </div>
            <div className="info-item">
              <BsFillTelephoneFill className="icon" />
              <div>
                <h4>Teléfono</h4>
                <p>2220 1049</p>
              </div>
            </div>
            <div className="info-item">
              <MdEmail className="icon" />
              <div>
                <h4>Correo</h4>
                <p>creciendofelizabc@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <AiFillLike className="icon" />
              <div>
                <h4>Redes Sociales</h4>
                <p>Facebook | Instagram </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <label>Nombre:</label>
            <input type="text" placeholder="Escriba su nombre" />
            <label>Email:</label>
            <input type="email" placeholder="Escriba su email" />
            <label>Teléfono:</label>
            <input type="text" placeholder="Escriba su teléfono" />
            <label>Tu mensaje:</label>
            <textarea placeholder="Escriba su consulta aquí..."></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Ubicación Fundación"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d982.4520052318392!2d-84.14366073038308!3d9.949925320318155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTYnNTkuNyJOIDg0wrAwOCczNC45Ilc!5e0!3m2!1sen!2scr!4v1738305525772!5m2!1sen!2scr"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <Copy />
    </div>
  );
};

export default Contactenos;
