import React, { useState, useEffect } from "react";
import "../assets/styles/allPets.css";
import Header from "../components/Header/Header";
import Filters from "../components/Filters/Filters";
import iconSex from "../assets/images/icons/sexo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../api/setupAxios";

const AllPets = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [petsImages, setPetsImages] = useState([]);
  const [logosImages, setLogosImages] = useState([]);
/*   const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (token && user?.id) {
      const fetchUserData = async () => {
        try {
          const data = await getUser(user.id, token);
          setUserData(data); 
          console.log(userData);
        } catch (error) {
          console.error("Error al obtener los datos del usuario", error);
        }
      };

      fetchUserData();
    }
  }, [token, user?.id]); */



  // Cargar las imágenes dinámicamente desde las carpetas
  useEffect(() => {
    const loadImagesFromFolder = async (folderPath) => {
      let imagesObject;

      if (folderPath === "pets") {
        imagesObject = import.meta.glob("../assets/images/pets/*.{png,jpg,jpeg,svg}");
      } else if (folderPath === "protectors") {
        imagesObject = import.meta.glob("../assets/images/protectors/*.{png,jpg,jpeg,svg}");
      }

      const imagePromises = Object.entries(imagesObject).map(async ([path, resolver]) => {
        const image = await resolver();
        return { path, image: image.default };
      });

      const loadedImages = await Promise.all(imagePromises);
      return loadedImages;
    };

    const loadImages = async () => {
      const pets = await loadImagesFromFolder("pets");
      const logos = await loadImagesFromFolder("protectors");
      console.log("Pets Images:", pets);
      console.log("Logos Images:", logos);
      setPetsImages(pets);
      setLogosImages(logos);
    };

    loadImages();
  }, []);


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
                          <h5 className="card-title pet-name">Nombre</h5>
                          <img src={iconSex} style={{ width: "23px" }} alt="Sexo" />
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                          <i className="bi bi-geo-alt fs-6" style={{ color: "#99DBD6" }}></i>
                          <p className="card-text ms-2">Ubicación</p>
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
