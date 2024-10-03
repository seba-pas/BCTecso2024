import React from "react";
import email_registrado from "../assets/images/process_email/image_email_registrado.jpg";
import ScreenPostCreate from "../components/ScreenPostCreate/ScreenPostCreate";
import { Button } from "react-bootstrap";

const EmailRegistered = () => {
  return (
    <div>
      <ScreenPostCreate image={email_registrado} title="Este e-mail ya se encuentra registrado">
        <div>
          <p className="p-muma">Si no recordás tu contraseña podés cambiarla desde el login ingresando en el enlace “Olvidé mi contraseña”.</p>
          <div className="w-100 d-flex justify-content-center">
            <Button className="background-button-muma w-75 mt-4">Ir al login</Button>
          </div>
        </div>
      </ScreenPostCreate>
    </div>
  );
};

export default EmailRegistered;
