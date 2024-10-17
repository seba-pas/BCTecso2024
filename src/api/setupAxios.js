import axios from "axios";
import emailjs from "@emailjs/browser";
const { VITE_API_URL_GENERAL, VITE_API_SERVICE_ID, VITE_API_TEMPLATE_ID, VITE_API_PUBLIC_KEY, VITE_API_URL_CLOUDINARY, VITE_API_UPLOAD_PRESET } = import.meta.env;
const instance = axios.create({
  baseURL: VITE_API_URL_GENERAL,
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

const instanceCloudinary = axios.create({
  baseURL: VITE_API_URL_CLOUDINARY,
  timeout: 3000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

//Con este interceptor si el token expiro automaticamente redirige al login
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

const returnConfigToken = () => ({ headers: { Authorization: `bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" } });

export const GetGeneral = async (path) => {
  // eslint-disable-next-line no-useless-catch
  try {
    let config = returnConfigToken();
    const respuesta = await instance.get(path, config);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

export const PostGeneral = async (path, body) => {
  // eslint-disable-next-line no-useless-catch
  try {
    let config = returnConfigToken();
    const respuesta = await instance.post(path, body, config);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

export const PutGeneral = async (path, body) => {
  try {
    let config = returnConfigToken();
    const respuesta = await instance.put(path, body, config);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

// Configuracion axios login.
export const login = async (values) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await instance.post(`Authentication/token`, {
      user: values.email,
      password: values.password,
    });
    if (response.data && response.data.token) {
      const token = response.data.token;
      const user = response.data.usuario;
      return { token, user };
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
    throw error;
  }
};

//Configuaracion de get User axios.
export const getUser = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get(`Mascoteros/${id}`, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al buscar mascotero:", error);
    throw error;
  }
};

//Configuracion de get Pets axios

export const getPets = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get(`Mascotas`, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al buscar mascotas:", error);
    throw error;
  }
};

export const getShelters = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get(`Protectoras`, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al buscar mascotas:", error);
    throw error;
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
export const RegisterPet = async (path, body) => {
  try {
    const response = await instance.post(path, body);
    return response.data;
  } catch (error) {
    throw error.response.data.errors;
  }
};

export const SendEmail = async (form) => {
  // eslint-disable-next-line no-useless-catch
  try {
    let response = await emailjs.sendForm(VITE_API_SERVICE_ID, VITE_API_TEMPLATE_ID, form, VITE_API_PUBLIC_KEY);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createImageCloudinary = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", VITE_API_UPLOAD_PRESET);
    let response = await instanceCloudinary.post("image/upload", formData);
    let secureUrl = response.data.secure_url;
    return secureUrl;
  } catch (error) {
    throw error;
  }
};

//GetById de mascota

export const getPetById = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get(`Mascotas/${id}`, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error al buscar mascota:", error);
    throw error;
  }
};
