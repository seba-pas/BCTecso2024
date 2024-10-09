import { useNavigate } from "react-router-dom";
import {  Button } from "react-bootstrap";

import Success from "../../assets/success/success.svg"; 
import "../../sass/pages/success.scss"

const SuccessScreen = () => {

    const navigate = useNavigate();

    const handleSubmitLogin = () =>{
        navigate("/login")

    };



    return(
        
        <div className="container-success">
            <img className="img-success" src={Success} alt="Success" />
            <div className="container-text">
                <h1 className="title-main">¡Qué bueno que estés acá!</h1>
                <p className="paragraph-main">¡Listo ya ! Ya puedes empezar a usar tu cuenta.</p>
            </div>
            
            <Button className="btn-login"
                  variant="primary"
                  type="submit"
                  onClick={handleSubmitLogin}
                >
                  Ir al login
              </Button>

        </div>
    );
};


export default SuccessScreen; 