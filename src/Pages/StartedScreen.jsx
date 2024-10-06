import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import image01 from '../assets/started-screen/image01.png';
import image02 from '../assets/started-screen/image02.png';
import dot01 from '../assets/started-screen/dots/dot01.png';
import dot02 from '../assets/started-screen/dots/dot02.png';

const StartedScreen = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <a>
          <img
            src={dot02}
            alt="dot"
            style={{ width: '15px', height: '5px' }}
          />
        </a>
      );
    },
    appendDots: dots => (
      <ul style={{ margin: "0px" }}> {dots} </ul>
    ),
    dotsClass: "slick-dots custom-dots",
  
  };


  return (
    <div className='vh-100 vw-100 d-flex align-items-center'>
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              <div className="slide">
                <div className="slide-image d-flex justify-content-center">
                  <img className="img-fluid img-size" src={image01} alt="image" />
                </div>
                <h2 className="slide-title text-center mb-2 mt-4">Se parte del equipo</h2>
                <p className="slide-text text-center px-3">Ayudalos a volver a casa difundiendo información y colaborando con las protectoras para encontrarles un hogar.</p>
              </div>
              <div className="slide">
                <div className="slide-image d-flex justify-content-center">
                  <img className="img-fluid img-size" src={image02} alt="image" />
                </div>
                <h2 className="slide-title text-center mb-2 mt-4">Encontrá a tu mejor amigo</h2>
                <p className="slide-text text-center px-4">Si estas pensando en sumar un integrante más a tu familia <br /> ¿Por que no adoptando?</p>
              </div>
            </Slider>
            <div className="d-flex flex-column align-items-center">
              <Button variant="primary" className="mt-4 w-75 py-2">Siguiente</Button>
              <Button variant="primary" className="mt-4 w-75 py-2">Omitir</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StartedScreen;