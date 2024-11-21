import React, { useState, useEffect, useCallback } from "react";
import "../assets/styles/home.css";
import MySlider from "../components/MySlider";
import Header from "../components/Header/Header";
import Filters from "../components/Filters/Filters";
import { useNavigate } from "react-router-dom";
import { getPets, getShelters } from "../api/setupAxios";
import { useSelector, useDispatch } from "react-redux";
import CardPet from "../components/Cards/CardPet";
import CardProtective from "../components/Cards/CardProtective";
import { getDataHome } from "../features/home/homeData";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataHome = useSelector((state) => state.home);
  const token = useSelector((state) => state.auth.token);

  // Cargar las imágenes dinámicamente desde las carpetas
  const loadPetsFromAPI = useCallback(() => {
    try {
      if (token) dispatch(getDataHome(token));
    } catch (error) {
      console.error("Error al cargar las mascotas desde el backend:", error);
    }
  }, []);
  useEffect(() => {
    if (token) loadPetsFromAPI();
  }, []);

  const views = (value) => {
    if (value === "pets") {
      navigate("/all_pets");
    } else if (value === "shelters") {
      navigate("/all_shelters");
    }
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
                <p className="fw-semibold">Animales</p>
                <a onClick={() => views("pets")} style={{ textDecoration: "none", color: "#017179" }}>
                  Ver todos
                </a>
              </div>
              <MySlider>
                {dataHome.pets.map((image, index) => (
                  <CardPet image={image} key={index} />
                ))}
              </MySlider>
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
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">{dataHome.shelters.length === 0 ? <p>No hay protectoras registradas actualmente</p> : dataHome.shelters.map((image, index) => <CardProtective key={index} image={image} index={index} />)}</div>
        </section>
      </main>
    </div>
    </div>
  );
};

export default Home;
