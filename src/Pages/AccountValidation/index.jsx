
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import AccountV from "../../assets/account-validation/account-validation.png"
import "../../sass/pages/success.scss"

const AccountValidation = () => {

    const navigate = useNavigate();

    return (
      <div className='vh-100 vw-100 d-flex align-items-center fade-in'>
        <Container>
          <Row>
            <Col className="p-0 d-flex justify-content-center">
              <div className="container-box d-flex flex-column align-items-center">
                <div className="box">
                  <div className="box-image d-flex justify-content-center align-items-center flex-column position-relative">
                    <img className="img-fluid img-size img-dog" src={AccountV} alt="image" />
                  </div>
                  <h2 className="box-title text-start m-0 px-4">Te enviamos un correo!</h2>
                  <p className="box-text text-start px-4 mb-2">
                    Revisa tu correo, te va a llegar un mensaje de validación
                    y deberás confirmar tu cuentapara finalizar con el registro
                  </p>
                  <p className="box-text text-start px-4 mb-2">
                    *Recordá revisar en tu casilla de Spam o 
                    de Correo no deseado, a veces llega ahí
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center area-button">
                  <Button variant="primary" className="mt-2 btn-sm" onClick={() => navigate('/login')}>Abrir correo</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};


export default AccountValidation; 