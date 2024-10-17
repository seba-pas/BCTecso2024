import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    variableWidth: true,
    cssEase: "linear",
    arrows: false,
    draggable: true,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 700, settings: { slidesToShow: 5 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default MySlider;
