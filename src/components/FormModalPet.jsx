import React from "react";
import { useNavigate } from "react-router-dom";

const FormModalPet = ({ accion, datosPet }) => {
  const navigate = useNavigate();
  const returnNavigateText = (accion) => {
    localStorage.removeItem("action");
    return accion === "s" ? "/home_shelter" : "/success_submit_pet";
  };
  const returnTitle = (accion) => (accion === "s" ? "Animal modificado con éxito." : "Animal cargado con éxito.");
  return (
    <div className="text-center">
      <h3>{returnTitle(accion)}</h3>
      <p>
        Id: <strong>{datosPet.id}</strong> Nombre: <strong>{datosPet.nombre}</strong>
      </p>
      <button className="w-100 btn background-button-muma btn-sm text-light rounded" onClick={() => navigate(returnNavigateText(accion))}>
        Continuar
      </button>
    </div>
  );
};

export default FormModalPet;
