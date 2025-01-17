import React from "react";
import pic1 from "../assets/about1.jpg";
import pic2 from "../assets/about2.jpg";
import pic3 from "../assets/about3.jpg";

const AboutUsComp = () => {
  return (
    <div className="bg-customBlue min-h-screen">
      <div className="p-8 text-center text-white mx-auto max-w-[calc(80%-80px)] ">
        <h1 className="text-6xl font-black">Nuestro Compromiso</h1>
        <p className="text-2xl my-16 mx-20 ">
          Nos comprometemos a enriquecer la vida de estos niños a través de un
          currículo centrado en el desarrollo de habilidades blandas, utilizando
          el arte y la creatividad como nuestras principales herramientas de
          enseñanza. Creemos firmemente en el poder de un ambiente de apoyo para
          transformar la educación infantil y preparar a los niños para un
          futuro exitoso.
        </p>
        <div className="flex justify-center mt-8 space-x-6 mx-20">
          <img
            src={pic1}
            alt=" 1"
            className="w-1/3 object-cover rounded-full"
          />
          <img
            src={pic2}
            alt=" 2"
            className="w-1/3 object-cover rounded-full"
          />
          <img
            src={pic3}
            alt=" 3"
            className="w-1/3 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsComp;
