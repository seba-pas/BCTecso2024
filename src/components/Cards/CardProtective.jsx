import React from "react";
import protectora from "../../assets/images/protectors/Protectora-Animalistas.png";
import "../../assets/styles/Cards.css";

const CardProtective = ({ image, index }) => {
  return (
    <div key={index}>
      <div className="card card-protective">
        <img src={protectora} className="card-img-top protector-img" alt={`Protectora ${index}`} />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title fs-18">{image.nombreProtectora}</h5>
          <p className="card-text fs-12">{image.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProtective;
