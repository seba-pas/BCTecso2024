import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export const MyCarousel = ({ images = [], deleteImage }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-dark">
      {images.map((image, key) => (
        <Carousel.Item key={key}>
          <div className="d-flex justify-content-center align-items-center w-100">
            <div>
              <img className="w-100 h-200px object-fit-contain" src={image} alt={`image-${key}`} />
            </div>
            <Carousel.Caption hidden={!deleteImage}>
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
