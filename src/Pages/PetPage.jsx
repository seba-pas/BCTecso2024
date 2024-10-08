import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import FormPetPage from "../components/FormPetPage/FormPetPage";
import ArrowBack from "../components/elements/ArrowBack";

const PetPage = ({ action = "c", title = "Agregar animal" }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col sm={8} md={6}>
          <ArrowBack className="mb-4" path="/home" />
          <h5 className="mt-2 mb-2">{title}</h5>
          <FormPetPage action={action} />
        </Col>
      </Row>
    </Container>
  );
};

export default PetPage;
