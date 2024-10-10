
import { useNavigate } from "react-router-dom";
import {  Button } from "react-bootstrap";

import AccountV from "../../assets/account-validation/account-validation.png"
import "../../sass/pages/success.scss"

const AccountValidation = () => {

    const navigate = useNavigate();

    const handleSubmitValidation = () =>{
        navigate("/login")
    };

    return(
        
        <div className="container-success">
            <img className="img-account" src={AccountV} alt="Account Validation" />
            <div className="container-text">
                <h1 className="title-main">Te enviamos un correo!</h1>
                <p className="paragraph-main">
                    Revisa tu correo, te va a llegar un mensaje 
                    de validación y deberás confirmar tu cuenta
                    para finalizar con el registro

                    *Recordá revisar en tu casilla de Spam o 
                    de Correo no deseado, a veces llega ahí
                </p>
            </div>
            
            <Button className="btn-sm"
                variant="primary"
                type="submit"
                onClick={handleSubmitValidation}
            >
                Abrir Correo
            </Button>

        </div>
    );
};


export default AccountValidation; 