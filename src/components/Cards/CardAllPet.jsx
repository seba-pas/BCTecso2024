import React from "react";
import { useNavigate } from "react-router-dom";
import iconSex from "../../assets/images/icons/sexo.png";

const CardAllPet = ({ index, image }) => {
  const navigate = useNavigate();
  return (
    <div key={index} className="pb-5" onClick={() => navigate(`/pet_details/${image.id}`)}>
      <div className="card ms-3" style={{ width: "10rem", height: "16rem", border: "none", boxShadow: "-4px 14px 17px -3px rgba(0,0,0,0.25)" }}>
        <i className="bi bi-heart fs-6 text-danger pets-wishList"></i>
        <img src={image.fotos[0]} className="card-img-top pet-img pet-size-image" alt={`image-${index}`} />
        <div className="card-body pt-2">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title pet-name">{image.nombre}</h5>
            <img src={iconSex} style={{ width: "23px" }} alt="Sexo" />
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <i className="bi bi-geo-alt fs-6" style={{ color: "#99DBD6" }}></i>
            <p className="card-text ms-2">{image.ciudad}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAllPet;
