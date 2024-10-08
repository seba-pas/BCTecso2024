import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import FormPetPage from "../components/FormPetPage/FormPetPage";
import ArrowBack from "../components/elements/ArrowBack";

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
          <ArrowBack className="mb-4" path="/home" />
          <h5 className="mt-2 mb-2">{returnTitle()}</h5>
          <FormPetPage action={action} />
        </Col>
      </Row>
    </Container>
  );
};

export default PetPage;
