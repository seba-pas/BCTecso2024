import React, { useState, useEffect } from "react";
import "../assets/styles/allPets.css";
import Header from "../components/Header/Header";
import Filters from "../components/Filters/Filters";
import CardAllPet from "../components/Cards/CardAllPet";
import { getDataHome } from "../features/home/homeData";
import { useSelector, useDispatch } from "react-redux";

const AllPets = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.home.pets);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const loadPetsFromAPI = async () => {
      try {
        if (token) dispatch(getDataHome(token));
      } catch (error) {
        console.error("Error al cargar las mascotas desde el backend:", error);
      }
    };
    loadPetsFromAPI();
  }, [token]);

  return (
    <div className="d-flex justify-content-center">
      <div className="home-container">
        <Header />
        <main className="vh-100">
          <Filters />
          <section>
            {pets.length === 0 ? (
              <div className="d-flex align-items-center justify-content-center" style={{ height: "75vh" }}>
                <p>No hay animales registrados actualmente</p>
              </div>
            ) : (
              <div>
                <div className="d-flex justify-content-between ms-4 me-4 ">
                  <p>Animales</p>
                </div>
                <section className="d-flex flex-wrap justify-content-center gap-4">
                  {pets.map((image, index) => (
                    <CardAllPet index={index} image={image} key={index} />
                  ))}
                </section>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default AllPets;
