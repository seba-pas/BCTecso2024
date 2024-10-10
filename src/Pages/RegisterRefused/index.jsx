import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Registered from "../../assets/registered-mail/registered-mail.png"
import Blur from "../../assets/registered-mail/blur.png"
import "../../sass/pages/success.scss"

const RegisterRefused = () => {

    const navigate = useNavigate();

    return (
      <div className='vh-100 vw-100 d-flex align-items-center fade-in'>
        <Container>
          <Row>
            <Col className="p-0 d-flex justify-content-center">
              <div className="container-box d-flex flex-column align-items-center">
                <div className="box">
                  <div className="box-image d-flex justify-content-center align-items-center flex-column position-relative">
                    <img className="img-fluid img-size img-dog" src={Registered} alt="Success" />
                    <img className="position-absolute img-blur" src={Blur} alt="Blur" />
                  </div>
                  <h2 className="box-title text-start mb-2 mt-3 px-4">Este email ya se encuentra registrado.</h2>
                  <p className="box-text text-start px-4">Si no recordás tu contraseña podés cambiarla desde el login ingresando en el enlace “Olvidé mi contraseña”.</p>
                </div>
                <div className="d-flex flex-column align-items-center area-button">
                  <Button variant="primary" className="mt-2 btn-sm" onClick={() => navigate('/login')}>Ir al login</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};


export default RegisterRefused; 