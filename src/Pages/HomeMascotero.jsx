import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/styles/home.css";
import Header from "../components/Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconSex from "../assets/images/icons/sexo.png";
import Filters from "../components/Filters/Filters";
import protectora from "../assets/images/protectors/Protectora-Animalistas.png";
import { useNavigate } from "react-router-dom";
import { getPets,getShelters } from "../api/setupAxios";
import { useSelector } from "react-redux";



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
          console.log("Pets from API:", petsData);
          console.log("Shelters from API:", shelterData);
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
      { breakpoint: 700, settings: { slidesToShow: 5} },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const views = (value) => {
    if(value === "pets"){
      navigate("/all_pets")
    }else if(value === "shelters"){
      navigate("/all_shelters")
    }
    
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
                <p>Animales</p>
                <a onClick={() => views("pets")} style={{ textDecoration: "none", color: "#017179" }}>
                  Ver todos
                </a>
              </div>
              <Slider {...settings}>
                {petsImages.map((image, index) => (
                  <div key={index} className="pb-5">
                    <div className="card ms-3" style={{ width: "18rem", height: "22rem", border: "none", boxShadow: "-4px 14px 17px -3px rgba(0,0,0,0.25)" }}>
                      <i className="bi bi-heart fs-3 text-danger pets-wishList"></i>
                      <img src={image.fotos} className="card-img-top pet-img" alt="..." />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{image.nombre}</h5>
                          <img src={iconSex} style={{ width: "30px" }} alt="Sexo" />
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                          <i className="bi bi-geo-alt fs-3" style={{ color: "#99DBD6" }}></i>
                          <p className="card-text ms-2">{image.ciudad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </section>
        <section>
          <div>
            <div className="d-flex justify-content-between ms-4 me-4">
              <p>Protectoras</p>
              <a onClick={() => views("shelters")} style={{ textDecoration: "none", color: "#017179" }}>
                Ver todas
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
            {logosImages.length === 0 ? (
              <p>No hay protectoras registradas actualmente</p>
            ) : (
              logosImages.map((image, index) => (
                <div key={index}>
                  <div className="card" style={{ width: "10rem", boxShadow: "-4px 14px 17px -3px rgba(0,0,0,0.25)" }}>
                    <img src={protectora} className="card-img-top protector-img" alt={`Protectora ${index}`} />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="card-title" style={{ fontSize: "18px" }}>
                        {image.nombreProtectora}
                      </h5>
                      <p className="card-text" style={{ fontSize: "12px" }}>
                        {image.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
