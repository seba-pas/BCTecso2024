import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FormPetPage from "../components/FormPetPage";

const CreatePet = ({ action = "c" }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col sm={8} md={6}>
          <FormPetPage action={action} />
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePet;
