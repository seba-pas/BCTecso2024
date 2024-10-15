import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Success from "../../assets/success/success.svg"; 
import "../../sass/pages/success.scss"

const SuccessScreen = () => {

    const navigate = useNavigate();

    return (
      <div className='vh-100 vw-100 d-flex align-items-center fade-in'>
        <Container>
          <Row>
            <Col className="p-0">
              <div className="box">
                <div className="box-image d-flex justify-content-center">
                  <img className="img-fluid img-size" src={Success} alt="Success" />
                </div>
                <h2 className="box-title text-center mb-2 mt-4">¡Qué bueno que estés acá!</h2>
                <p className="box-text text-center px-3">¡Listo! Ya puedes empezar a usar tu cuenta.</p>
              </div>
              <div className="d-flex flex-column align-items-center area-button">
                <Button variant="primary" className="mt-4 btn-sm" onClick={() => navigate('/login')}>Ir al login</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};


export default SuccessScreen;