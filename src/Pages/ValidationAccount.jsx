import React from "react";
import { Button } from "react-bootstrap";
import ScreenPostCreate from "../components/ScreenPostCreate/ScreenPostCreate";
import validation_email from "../assets/images/process_email/image_validation_email.jpg";
const { VITE_API_URL_GMAIL } = import.meta.env;

const ValidationAccount = () => {
  const redirectToGmail = () => window.open(VITE_API_URL_GMAIL, "_blank");
  return (
    <div>
      <ScreenPostCreate image={validation_email} title="Te enviamos un correo!" classImg="mb-4">
        <div>
          <p className="p-muma">Revisa tu correo, te va a llegar un mensaje de validación y deberás confirmar tu cuenta para finalizar con el registro</p>
          <p className="p-muma">*Recordá revisar en tu casilla de Spam o de Correo no deseado, a veces llega ahí</p>
          <div className="w-100 d-flex justify-content-center">
            <Button className="background-button-muma w-75" onClick={redirectToGmail}>
              Abrir correo
            </Button>
          </div>
        </div>
      </ScreenPostCreate>
    </div>
  );
};

export default ValidationAccount;
