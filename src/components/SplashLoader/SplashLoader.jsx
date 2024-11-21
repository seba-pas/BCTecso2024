import React, { useEffect, useState } from 'react';
import '../../assets/styles/splashLoader.css'; 
import isologotipo from '../../assets/images/isologotipo.png'; 

const SplashLoader = () => {
  const [footprints, setFootprints] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setFootprints((prev) => (prev < 9 ? prev + 1 : prev));
    }, 500); //le doy el tiempo que va a a durar el intervalo

  }, []);

  return (
    <div className="">
      <div className="footprints position-absolute">
          {Array.from({ length: footprints }).map((_, index) => (
            <div key={index} className={`footprint footprint-${index + 1}`}></div>
          ))}
        </div>
      <div className="d-flex justify-content-center align-items-end splash-container vh-100">
        <div className="text-center logo-container">
          <img src={isologotipo} alt="muma mundo de mascotas" className="logo img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;
