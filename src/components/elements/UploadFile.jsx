import React from "react";
import { createImageCloudinary } from "../../api/setupAxios";
import imgnaranja from "../../assets/images/img_naranja.png";
import "../../assets/styles/elements/UploadFile/UploadFile.css";
import Notiflix from "notiflix";

const UploadFile = ({ images, setImages, setError }) => {
  const changeImage = async (event) => {
    try {
      let file = event.target.files ? event.target.files[0] : null;
      if (file) {
        let url_image = await createImageCloudinary(file);
        setImages([...images, url_image]);
        Notiflix.Notify.success("Imagen cargada con exito.");
      } else throw new Error("No se encontro la imagen.");
    } catch (error) {
      setError && setError("<div class='alert alert-danger' role='alert'>Hubo un error al cargar su imagen</div>");
      throw error;
    }
  };
  return (
    <div className="w-100">
      <input className="custom-file-input" id="fileInput" type="file" accept="image/*" onChange={changeImage} />
      <label htmlFor="fileInput" className="custom-file-label">
        <p className="p-muma m-0">Carga imágenes</p>
        <img src={imgnaranja} alt="img_naranja" />
      </label>
    </div>
  );
};

export default UploadFile;
