import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ScreenPostCreate = ({ image, title, children, classImg = "" }) => {
  return (
    <Container fluid className="d-flex justify-content-center">
      <Row xs={12} className="pet-owner-width align-items-center justify-content-center">
        <Col xs={12} className={"d-flex justify-content-center mt-4 " + classImg}>
          <Image src={image} />
        </Col>
        <Row className="d-flex flex-column gap-2">
          <Col xs={12}>
            <h1 className="title-muma">{title}</h1>
          </Col>
          <Col xs={12}>{children}</Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ScreenPostCreate;
