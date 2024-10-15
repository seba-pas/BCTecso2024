import React, { useState, useEffect } from "react";
import "../assets/styles/allPets.css";
import Header from "../components/Header/Header";
import Filters from "../components/Filters/Filters";
import iconSex from "../assets/images/icons/sexo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPets } from "../api/setupAxios";

const AllPets = () => {
  const navigate = useNavigate();
  const [petsImages, setPetsImages] = useState([]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const loadPetsFromAPI = async () => {
      try {
        if (token) {
          const petsData = await getPets(token);  
          console.log("Pets from API:", petsData);
          setPetsImages(petsData);  
        }
      } catch (error) {
        console.error("Error al cargar las mascotas desde el backend:", error);
      }
    };
    loadPetsFromAPI();  
  }, [token]);
   
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
              <div className="d-flex justify-content-between ms-4 me-4 ">
                <p>Animales</p>
              </div>
              <section className="d-flex flex-wrap justify-content-center">
                {petsImages.map((image, index) => (
                  <div key={index} className="pb-5 ">
                    <div className="card ms-3" style={{ width: "10rem", height: "16rem", border: "none", boxShadow: "-4px 14px 17px -3px rgba(0,0,0,0.25)" }}>
                      <i className="bi bi-heart fs-6 text-danger pets-wishList"></i>
                      <img src={image.image} className="card-img-top pet-img" alt="..." />
                      <div className="card-body pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title pet-name">{image.nombre}</h5>
                          <img src={iconSex} style={{ width: "23px" }} alt="Sexo" />
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                          <i className="bi bi-geo-alt fs-6" style={{ color: "#99DBD6" }}></i>
                          <p className="card-text ms-2">{image.ciudad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} 
              </section>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AllPets;
