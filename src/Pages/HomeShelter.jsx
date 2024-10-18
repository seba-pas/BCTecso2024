import React, { useState, useEffect, useCallback } from "react";
import "../assets/styles/home.css";
import Header from "../components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Filters from "../components/Filters/Filters";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardPetShelter from "../components/Cards/CardPetShelter";
import { getDataHome } from "../features/home/homeData";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const dataHome = useSelector((state) => state.home);
  const renderTooltip = (props) => (
    <Tooltip id="tooltip-add-pet" {...props}>
      Agregar un animal
    </Tooltip>
  );
  // Cargar las imágenes dinámicamente desde las carpetas
  const loadPetsFromAPI = useCallback(() => {
    try {
      if (token) dispatch(getDataHome(token));
    } catch (error) {
      console.error("Error al cargar las mascotas desde el backend:", error);
    }
  }, []);
  useEffect(() => {
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

  const views = () => {
    navigate("/form_pet");
  };
  const goToEdit = (id, action) => {
    localStorage.setItem("action", action);
    navigate(`/form_pet/${id}`);
  };

  return (
    <div className="d-flex justify-content-center">
       <div className="home-container">
        <Header />
        <main className="vh-100">
          <Filters />
          <section>
            {dataHome.pets.length === 0 ? (
              <div className="d-flex align-items-center justify-content-center" style={{ height: "75vh" }}>
                <p>No hay animales registrados actualmente</p>
              </div>
            ) : (
              <div>
                <div className="d-flex justify-content-between ms-4 me-4">
                  <p className="fw-semibold" style={{ fontSize: "22px", fontFamily: '"Poppins", sans-serif', color: "#5F5B5B" }}>
                    Animales
                  </p>
                </div>
                <section className="d-flex flex-wrap">
                  {dataHome.pets.map((image, index) => (
                    <CardPetShelter image={image} key={index} index={index} goToEdit={goToEdit} />
                  ))}
                </section>
              </div>
            )}
          </section>
          <a className="d-flex justify-content-center align-items-center" onClick={views} style={{ borderRadius: "50%", backgroundColor: "#F08318", width: "50px", height: "50px",position: "-webkit-sticky", position: "sticky", bottom: "1rem", left: "85rem" }}>
            <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
              <i className="bi bi-plus-lg fs-3 pointer" style={{ color: "white" }}></i>
            </OverlayTrigger>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
