import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const FormDeletePet = ({ title, description, onClose }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">{title}</h3>
        </Col>
        <Col xs={12}>
          <p>{description}</p>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <div className="d-flex w-50 justify-content-between">
            <Button variant="outline-danger" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={onClose}>
              Confirmar
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormDeletePet;
