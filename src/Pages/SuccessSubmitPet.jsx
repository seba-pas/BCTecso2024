import React from "react";
import success_register from "../assets/images/success_pet.jpg";
import ScreenPostCreate from "../components/ScreenPostCreate/ScreenPostCreate";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SuccessSubmitPet = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ScreenPostCreate image={success_register} title="Listo!" classImg="mb-4">
        <div>
          <p className="p-muma">Agregaste una nueva mascota con éxito. Entre todos podemos encontrarles un hogar.</p>
          <div className="w-100 d-flex justify-content-center">
            <Button className="background-button-muma w-75 mt-4" onClick={() => navigate("/home_shelter")}>
              Ir al Home
            </Button>
          </div>
        </div>
      </ScreenPostCreate>
    </div>
  );
};

export default SuccessSubmitPet;
