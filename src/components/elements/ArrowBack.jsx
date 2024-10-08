import React from "react";
import { Col, Image } from "react-bootstrap";
import arrowBack from "../../assets/images/arrow-left.jpg";
import { useNavigate } from "react-router-dom";

const ArrowBack = ({ className, path }) => {
  const navigate = useNavigate();
  const returnToHome = () => navigate(path);
  return (
    <Col className={className}>
      <Image onClick={returnToHome} className="pointer" src={arrowBack} alt="arrow_back" />
    </Col>
  );
};

export default ArrowBack;
