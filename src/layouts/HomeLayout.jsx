import { Container, Col, Form, Row, Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import profile from "../assets/home-layout/profile.png";
import menu from "../assets/home-layout/menu.png";
import search from "../assets/home-layout/search.png";
import catFace from "../assets/home-layout/Cat-Face.png";
import dogFace from "../assets/home-layout/Dog-Face.png";
import rabbitFace from "../assets/home-layout/Rabbit-Face.png";
import hamster from "../assets/home-layout/Hamster.png";
import "./home-layout.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeLayout = ({children}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 3840,
        settings: "unslick"
      },
      {
        breakpoint: 450,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="container p-3 layout-container">
        <header className="d-flex justify-content-between align-items-center my-2">
          <Button className="p-0" variant="none" onClick={handleShow}>
            <img src={menu} alt="menu" />
          </Button>

          <img className="img-profile" src={profile} alt="profile"/>
        </header>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Muma</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>Desarrollado por Hilda y Seba</p>
          </Offcanvas.Body>
        </Offcanvas>

        <Container >
          <Form inline>
            <Row>
              <Col className="d-flex position-relative p-0">
                <Form.Control
                  type="text"
                  placeholder="Nombre, estado, protectora y sexo"
                  className="input-search"
                />
                <Button className="position-absolute top-50 end-0 translate-middle-y h-100 btn-search p-0" type="submit">
                  <img src={search} alt="search" />
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>

        <div className="container categories">
          <h2 className="my-4 categories__title">Categorias</h2>
          <div className="slider-container">
            <Slider {...settings} style={{width: "450px"}}>
              <div className="slide">
                <Button className="btn-categories">
                  <img src={catFace} alt="cat-face" className="me-2" style={{width: '18px', height: '18px'}}/>
                  Gato
                </Button>
              </div>
              <div className="slide">
                <Button className="btn-categories">
                  <img src={dogFace} alt="dog-face" className="me-2" style={{width: '18px', height: '18px'}}/>
                  Perro
                </Button>
              </div>
              <div className="slide">
                <Button className="btn-categories">
                  <img src={hamster} alt="hamster-face" className="me-2" style={{width: '18px', height: '18px'}}/>
                  Hamster
                </Button>
              </div>
              <div className="slide">
                <Button className="btn-categories">
                  <img src={rabbitFace} alt="rabbit-face" className="me-2" style={{width: '18px', height: '18px'}}/>
                  Conejo
                </Button>
              </div>
            </Slider>
          </div>
        </div>

        <div className="mt-3">
          {children}
        </div>
      </div>
    </>
  )
}

export default HomeLayout