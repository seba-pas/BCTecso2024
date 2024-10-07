import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FormPetPage from "../components/FormPetPage/FormPetPage";

const PetPage = ({ action = "c", title = "Agregar animal" }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col sm={8} md={6}>
          <h3>{title}</h3>
          <FormPetPage action={action} />
        </Col>
      </Row>
    </Container>
  );
};

export default PetPage;
