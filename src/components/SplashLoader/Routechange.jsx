import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SplashLoader from './SplashLoader'; 

const RouteChangeLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Aca detecto los cambios de ruta

  //aca muestro el loader y dejo de mostrarlo despues de cumplido el tiempo
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2300);

    //Limpio el time out cada vez que cambia de ruta
    return () => clearTimeout(timeout);
  }, [location]); 

  return (
    <>
      {loading && <SplashLoader />} 
      {!loading && children} 
    </>
  );
};

export default RouteChangeLoader;
