import axios from "axios";
import emailjs from "@emailjs/browser";
const { VITE_API_URL_GENERAL, VITE_API_SERVICE_ID, VITE_API_TEMPLATE_ID, VITE_API_PUBLIC_KEY } = import.meta.env;
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

export const RegisterPet = async (path, body) => {
  try {
    const response = await instance.post(path, body);
    return response.data;
  } catch (error) {
    throw error.response.data.errors;
  }
};

export const SendEmail = async (form) => {
  try {
    let response = await emailjs.sendForm(VITE_API_SERVICE_ID, VITE_API_TEMPLATE_ID, form, VITE_API_PUBLIC_KEY);
    return response;
  } catch (error) {
    throw error;
  }
};
