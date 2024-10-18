import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import forget from "../assets/images/forget.png";
import forget2 from "../assets/images/forget2.png";
import "../assets/styles/startedScreen.css";

export const StartedScreen = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login", { replace: true });
    localStorage.setItem("started", true);
  };

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
    <section className="w-100 min-vh-100 mx-auto d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: "640px" }}>
      <div className="started-slider d-flex flex-column justify-content-center " style={{ width: "100%" }}>
        <Slider {...settings} className="pb-4">
          <div className="h-400px p-4 text-center ">
            <img src={forget} alt="pet-image-2" className="w-100 max-h-400px object-fit-contain" style={{ objectPosition: "top" }} />
            <h4 className="mt-4 mb-3" style={{ color: "var(--brand-neutro-01)", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "22px" }}>
              Se parte del equipo
            </h4>
            <p style={{ color: "var(--brand-neutro-02)", fontFamily: "Montserrat, sans-serif", fontWeight: 400, fontSize: "14px" }}>Ayudalos a volver a casa difundiendo información y colaborando con las protectoras para encontrarles un hogar.</p>
          </div>
          <div className="h-400px p-4 text-center ">
            <img src={forget2} alt="pet-image-2" className="w-100 max-h-400px object-fit-contain" style={{ objectPosition: "top" }} />
            <h4 className="mt-4 mb-3" style={{ color: "var(--brand-neutro-01)", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "22px" }}>
              Encontrá tu mejor amigo
            </h4>
            <p style={{ color: "var(--brand-neutro-02)", fontFamily: "Montserrat, sans-serif", fontWeight: 400, fontSize: "14px" }}>Si estas pensando en sumar un integrante más a tu familia ¿Por que no adoptando?</p>
          </div>
        </Slider>
        <button className="rounded-3 border-0 py-3 w-100 mx-auto mt-3" style={{ maxWidth: "200px", color: "var(--background-lightmode-secondary)", backgroundColor: "var(--brand-primary-01)", fontFamily: "Montserrat, sans-serif" }} onClick={() => onClick()}>
          Comenzar
        </button>
        <button className="rounded-3 border-0 py-3 w-100 mx-auto" style={{ maxWidth: "200px", color: "var(--brand-secondary-01)", backgroundColor: "transparent", fontFamily: "Montserrat, sans-serif" }} onClick={() => onClick()}>
          Omitir
        </button>
      </div>
    </section>
  );
};
