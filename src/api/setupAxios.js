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
export const login = async(values) =>{
  try {
    const response = await instance.post(`Authentication/token`,{
        user : values.email,
        password: values.password
    });
    if(response.data && response.data.token){
      const token = response.data.token;
      localStorage.setItem('token', token);
    }else{
      throw new Error('No se recibio el token')
    }
  } catch (error) {
    throw(error);
  }
}