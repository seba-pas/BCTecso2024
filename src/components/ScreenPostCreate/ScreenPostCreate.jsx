import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ScreenPostCreate = ({ image, title, children, classImg = "" }) => {
  return (
    <Container>
      <Row className="align-items-center aling-items-center">
        <Col xs={12} sm={6} className={"d-flex justify-content-center mt-4 " + classImg}>
          <Image src={image} />
        </Col>
        <Row className="d-flex flex-column gap-2">
          <Col xs={12} sm={6}>
            <h1 className="title-muma">{title}</h1>
          </Col>
          <Col xs={12} sm={6}>
            {children}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ScreenPostCreate;
