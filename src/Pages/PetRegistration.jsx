import Isologo from "../assets/images/icons/Isologo.jpg";
import { Container, Col, Row, Image } from "react-bootstrap";
import FormPetOwner from "../components/PetOwner/FormPetOwner";
import "../assets/styles/PetOwner/PetOwner.css";
const PetRegistration = () => {
  return (
    <Container as="div" className="vh-100 pet-owner-width">
      <Row>
        <Col className="d-flex justify-content-center pt-5 pb-5" xs={12}>
          <Image src={Isologo} alt="Isologo" />
        </Col>
        <Col xs={12}>
          <FormPetOwner />
        </Col>
      </Row>
    </Container>
  );
};

export default PetRegistration;
