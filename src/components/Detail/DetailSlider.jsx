import Slider from "react-slick";
import "./DetailSlider.css";

export const DetailSlider = ({ pet }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: () => (
      <div
        style={{
          width: "15px",
          height: "5px",
        }}
      ></div>
    ),
  };

  return (
    <div className="detail-slider" style={{ width: "100%" }}>
      <Slider {...settings}>
        {pet.fotos &&
          pet.fotos.map((image, index) => (
            <div key={index} className="h-400px">
              <img src={image} alt={`pet-image-${index}`} className="object-fit-contain w-100 max-h-400px" style={{ objectPosition: "top" }} />
            </div>
          ))}
      </Slider>
    </div>
  );
};
