import React from "react";
import success_register from "../assets/images/process_email/image_succes_register.jpg";
import ScreenPostCreate from "../components/ScreenPostCreate/ScreenPostCreate";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SuccesScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ScreenPostCreate image={success_register} title="¡Que bueno que estes aca!">
        <div>
          <p className="p-muma">¡Listo ya ! Ya puedes empezar a usar tu cuenta.</p>
          <div className="w-100 d-flex justify-content-center">
            <Button className="background-button-muma w-75 mt-4" onClick={() => navigate("/")}>
              Ir al login
            </Button>
          </div>
        </div>
      </ScreenPostCreate>
    </div>
  );
};

export default SuccesScreen;
