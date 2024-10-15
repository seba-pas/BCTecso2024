import React from "react";
import { createImageCloudinary } from "../../api/setupAxios";
import imgnaranja from "../../assets/images/img_naranja.png";
import "../../assets/styles/elements/UploadFile/UploadFile.css";

const UploadFile = ({ images, setImages }) => {
  const changeImage = async (event) => {
    try {
      let file = event.target.files ? event.target.files[0] : null;
      if (file) {
        let url_image = await createImageCloudinary(file);
        setImages([...images, url_image]);
      } else throw new Error("No se encontro la imagen.");
    } catch (error) {
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
