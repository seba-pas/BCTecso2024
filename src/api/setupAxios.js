import axios from "axios";
const { VITE_API_URL_GENERAL } = import.meta.env;
const instance = axios.create({
  baseURL: VITE_API_URL_GENERAL,
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

export const GetGeneral = async (path) => {
  try {
    const respuesta = await instance.get(path);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

export const PostGeneral = async (path, body) => {
  try {
    const respuesta = await instance.post(path, body);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

//Configuracion axios login.
export const login = async (values) => {
  try {
    const response = await instance.post(`Authentication/token`, {
      user: values.email,
      password: values.password,
    });
    if (response.data && response.data.token) {
      const token = response.data.token;
      localStorage.setItem("token", token);
    } else {
      throw new Error("No se recibio el token");
    }
  } catch (error) {
    throw error;
  }
};

export const registerNewShelter = async (values) => {
  delete values.password2;
  const { idProvincia, idCiudad, calle, numero, piso, departamento, password1: password, ...rest } = values;

  const dataToSend = {
    ...rest,
    password,
    direccion: {
      idCiudad: JSON.parse(idCiudad.value).id,
      calle: calle,
      numero: numero,
      piso: piso,
      departamento: departamento,
      provincia: JSON.parse(idProvincia.value),
      ciudad: JSON.parse(idCiudad.value),
    },
  };

  try {
    const response = await instance.post(`Protectoras/registro`, dataToSend);
    return response.data;
  } catch (error) {
    console.error("Error al registrar protectora:", error);
  }
};

export const getProvinces = async () => {
  try {
    const response = await instance.get("Combos/Provincias");
    return response.data;
  } catch (error) {
    console.error("Error al pedir provincias:", error);
  }
};
export const getCities = async (province) => {
  try {
    const response = await instance.get(`Combos/Ciudades/${province}`);
    return response.data;
  } catch (error) {
    console.error("Error al pedir ciudades:", error);
  }
};
