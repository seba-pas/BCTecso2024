import React from "react";
import iconSex from "../../assets/images/icons/sexo.png";
import { MyCarousel } from "../index";

const CardPet = ({ image, key = 0, goToEdit = () => {} }) => {
  return (
    <div key={key} className="pb-5">
      <div className="card ms-3" style={{ width: "18rem", height: "auto", border: "none", boxShadow: "-4px 14px 17px -3px rgba(0,0,0,0.25)" }}>
        <i className="bi bi-heart fs-3 text-danger pets-wishList z-3 pointer" onClick={() => goToEdit(image.id, "m")}></i>
        <MyCarousel images={image.fotos} />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{image.nombre}</h5>
            <img src={iconSex} style={{ width: "30px" }} alt="Sexo" />
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <i className="bi bi-geo-alt fs-3" style={{ color: "#99DBD6" }}></i>
            <p className="card-text ms-2">{image.ciudad}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPet;
