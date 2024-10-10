import { useNavigate } from "react-router-dom";
import {  Button } from "react-bootstrap";

import Registered from "../../assets/registered-mail/registered-mail.png"
import "../../sass/pages/success.scss"

const RegisteredMail = () => {

    const navigate = useNavigate();

    const handleSubmitRegisteredMail = () =>{
        navigate("/login")

    };



    return(
        
        <div className="container-success">
            <img className="img-success" src={Registered} alt="Registered Mail" />
            <div className="container-text">
                <h1 className="title-main"> 
                    Este e-mail ya se encuentra registrado.
                </h1>
                <p className="paragraph-main">
                    Si no recordás tu contraseña podés 
                    cambiarla desde el login ingresando en
                    el enlace “Olvidé mi contraseña”.
                </p>
            </div>
            
            <Button className="btn-login"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmitRegisteredMail}
                >
                  Ir al login
              </Button>

        </div>
    );
};


export default RegisteredMail; 