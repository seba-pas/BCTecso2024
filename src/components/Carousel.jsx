import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export const MyCarousel = ({ images = [], deleteImage }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-dark min-h-200px">
      {images.map((image, key) => (
        <Carousel.Item key={key}>
          <div className="d-flex justify-content-center align-items-center w-100 vh-100">
            <img className="img-fluid" src={image} alt={`image-${key}`} />
            <Carousel.Caption>
              <button className="btn btn-danger btn-sm" onClick={() => deleteImage(key)}>
                Eliminar
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
