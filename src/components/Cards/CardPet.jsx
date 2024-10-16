import React from "react";
import { useState } from "react";
import iconSex from "../../assets/images/icons/sexo.png";
import { MyCarousel } from "../index";
import { useNavigate } from "react-router-dom";

const CardPet = ({ image, key = 0, goToEdit = () => {} }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div key={key} className="pb-5">
      <div className="card ms-3 card-pet">
        <i className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"} fs-3 text-danger pets-wishList pointer`} onClick={handleWishlistClick}></i>
        <img src={image.fotos[0]} className="card-img-top pet-img pointer" alt={`image-${image.id}`} onClick={() => navigate(`/pet_details/${image.id}`)} />
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
