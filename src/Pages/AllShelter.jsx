import React, { useState, useEffect } from "react";
import "../assets/styles/allPets.css";
import Header from "../components/Header/Header";
import Filters from "../components/Filters/Filters";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getShelters } from "../api/setupAxios";
import protectora from "../assets/images/protectors/Protectora-Animalistas.png";


const AllShelter = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
 
  const [logosImages, setLogosImages] = useState([]);

  useEffect(() => {
    const loadPetsFromAPI = async () => {
      try {
        if (token) {
          const shelterData = await getShelters(token)
          console.log("Shelters from API:",shelterData);
          setLogosImages(shelterData);
        }
      } catch (error) {
        console.error("Error al cargar las protectoras desde el backend:", error);
      }
    };

    loadPetsFromAPI();  
  }, [token]);

  const settings = {
    dots: false,
    infinite: true,
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
      { breakpoint: 700, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const allPets = () => {
    navigate("/all_pets")
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="home-container">
        <Header />
        <main className="vh-100">
          <Filters />
          <section>
            <div>
              <div className="d-flex justify-content-between ms-4 me-4">
                <p>Protectoras</p>
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
                        <h5 className="card-title" style={{ fontSize: "9px" }}>
                          {image.nombreProtectora}
                        </h5>
                        <p className="card-text" style={{ fontSize: "7px" }}>
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
    </div>
  );
};

export default AllShelter;
