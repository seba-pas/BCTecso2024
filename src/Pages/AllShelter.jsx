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
      const logos = await loadImagesFromFolder("protectors");
      console.log("Pets Images:", pets);
      console.log("Logos Images:", logos);
      setPetsImages(pets);
      setLogosImages(logos);
    };

    loadImages();
  }, []);

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
    <div>
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
                    <img src={image.image} className="card-img-top protector-img" alt={`Protectora ${index}`} />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="card-title" style={{ fontSize: "9px" }}>
                        Nombre de la Protectora
                      </h5>
                      <p className="card-text" style={{ fontSize: "7px" }}>
                        Descripción de la protectora
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

export default AllPets;
