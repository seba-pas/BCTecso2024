import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import FormPetPage from "../components/FormPetPage/FormPetPage";

import { HeaderButton } from "../components";
import arrow from "../assets/images/arrow-left.jpg";

const PetPage = () => {
  let action = localStorage.getItem("action");
  const returnTitle = () => {
    switch (action) {
      case "m":
        return "Modificar animal";
      default:
        return "Agregar animal";
    }
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col sm={8} md={6}>
          <HeaderButton to="/home_shelters">
            <Image src={arrow} alt="back-button" />
          </HeaderButton>
          <h5 className="mt-2 mb-2">{returnTitle()}</h5>
          <FormPetPage action={action} />
        </Col>
      </Row>
    </Container>
  );
};

export default PetPage;
