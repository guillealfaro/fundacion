import React from "react";
import { Link } from "react-router-dom";
import Copy from "../components/Copy";
import Return from "../components/Return";
import "../styles/servicios.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imagehero from "../assets/hero-image1.png";

import img1 from "../assets/slider/7.png";
import img2 from "../assets/slider/1.JPG";
import img3 from "../assets/slider/2.JPG";
import img5 from "../assets/slider/4.JPG";
import img6 from "../assets/slider/5.JPG";
import img7 from "../assets/slider/6.JPG";

const Servicios = () => {
  return (
    <div>
      <Return />

      <div className="Servicios">
        <div className="texto">
          <h4>Ven a divertirte con nosotros</h4>
          <p>
            Conoce mas de nuestros servicios y actividades que tenemos para tus
            hijos, donde aprenderan y se divertiran al mismo tiempo.
          </p>
          <p>¿Porque escogernos como institucion?</p>
          <Link to="/Contactenos">
            <button>Contactanos</button>
          </Link>
        </div>
        <div className="fun-image">
          <img src={imagehero} alt="" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30} /* Adjust spacing */
        slidesPerView={1} /* Ensure only one slide per view */
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Niños jugando" className="swipe-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Clase de arte" className="swipe-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Actividad educativa" className="swipe-image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img5} alt="Actividad educativa" className="swipe-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Actividad educativa" className="swipe-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Actividad educativa" className="swipe-image" />
        </SwiperSlide>
      </Swiper>

      <Copy />
    </div>
  );
};

export default Servicios;
