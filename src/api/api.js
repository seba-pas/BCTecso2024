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

export const RegisterPet = async (path, body) => {
  try {
    const response = await instance.post(path, body);
    return response.data;
  } catch (error) {
    throw error.response.data.errors[0];
  }
};

export const SendEmail = async (emailto, form) => {
  try {
    const response = await fetch("/netlify/functions/sendEmail.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailto, form }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error("Error:", JSON.stringify(error));
  }
};
