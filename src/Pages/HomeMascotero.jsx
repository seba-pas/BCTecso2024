import React, { useState, useEffect } from "react";
import "../assets/styles/home.css";
import Header from "../components/Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Filters from "../components/Filters/Filters";
import { useNavigate } from "react-router-dom";
import { getPets, getShelters } from "../api/setupAxios";
import { useSelector } from "react-redux";
import CardPet from "../components/Cards/CardPet";
import CardProtective from "../components/Cards/CardProtective";
import { Container } from "react-bootstrap";
import MyModal from "../components/Modal";

const Home = () => {
  const navigate = useNavigate();
  const [petsImages, setPetsImages] = useState([]);
  const [logosImages, setLogosImages] = useState([]);
  const token = useSelector((state) => state.auth.token);

  // Cargar las imágenes dinámicamente desde las carpetas
  useEffect(() => {
    const loadPetsFromAPI = async () => {
      try {
        if (token) {
          const petsData = await getPets(token);
          const shelterData = await getShelters(token);
          setPetsImages(petsData);
          setLogosImages(shelterData);
        }
      } catch (error) {
        console.error("Error al cargar las mascotas desde el backend:", error);
      }
    };

    if (token) {
      loadPetsFromAPI();
    }
  }, []);

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

  const views = (value) => {
    if (value === "pets") {
      navigate("/all_pets");
    } else if (value === "shelters") {
      navigate("/all_shelters");
    }
  };
  const goToEdit = (id, action) => {
    localStorage.setItem("action", action);
    navigate(`/form_pet/${id}`);
  };
  return (
    <div>
      <Header />
      <main className="vh-100">
        <Filters />
        <section>
          {petsImages.length === 0 ? (
            <div className="d-flex align-items-center justify-content-center" style={{ height: "75vh" }}>
              <p>No hay animales registrados actualmente</p>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-between ms-4 me-4">
                <p className="fw-semibold">Animales</p>
                <a onClick={() => views("pets")} style={{ textDecoration: "none", color: "#017179" }}>
                  Ver todos
                </a>
              </div>
              <Slider {...settings}>
                {petsImages.map((image, index) => (
                  <CardPet image={image} key={index} goToEdit={goToEdit} />
                ))}
              </Slider>
            </div>
          )}
        </section>
        <section>
          <div>
            <div className="d-flex justify-content-between ms-4 me-4">
              <p className="fw-semibold">Protectoras</p>
              <a onClick={() => views("shelters")} style={{ textDecoration: "none", color: "#017179" }}>
                Ver todas
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">{logosImages.length === 0 ? <p>No hay protectoras registradas actualmente</p> : logosImages.map((image, index) => <CardProtective key={index} image={image} index={index} />)}</div>
        </section>
      </main>
    </div>
  );
};

export default Home;
