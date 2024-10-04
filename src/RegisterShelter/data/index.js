import * as Yup from "yup";

export const inputs = [
  {
    name: "shelderName",
    placeholder: "Nombre de Protectora*",
  },
  {
    name: "shelderDescription",
    placeholder: "Descripción*",
  },
  {
    name: "shelderEmail",
    placeholder: "Email*",
    type: "email",
  },
  {
    name: "shelderPassword1",
    placeholder: "Contraseña*",
    type: "password",
  },
  {
    name: "shelderPassword2",
    placeholder: "Confirmar Contraseña*",
    type: "password",
  },
  {
    name: "shelderCity",
    placeholder: "Ciudad*",
  },
  {
    name: "shelderStreet",
    placeholder: "Calle",
  },
  {
    name: "shelderNumber",
    placeholder: "Número",
  },
  {
    name: "shelderFloor",
    placeholder: "Piso",
  },
  {
    name: "shelderDepartment",
    placeholder: "Departamento",
  },
  {
    name: "shelderWebSite",
    placeholder: "Sitio Web",
  },
  {
    name: "shelderInstagram",
    placeholder: "Instagram",
  },
  {
    name: "shelderFacebook",
    placeholder: "Facebook",
  },
];

export const validationSchema = Yup.object({
  shelderName: Yup.string().required("El campo nombre de protectora es requerido"),
  shelderDescription: Yup.string().required("El campo descripción es requerido"),
  shelderEmail: Yup.string().email("El email no tiene un formato válido").required("El campo email es requerido"),
  shelderPassword1: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("El campo contraseña es requerido"),
  shelderPassword2: Yup.string()
    .oneOf([Yup.ref("shelderPassword1"), null], "Las contraseñas deben coincidir")
    .required("El campo confirmar contraseña es requerido"),
  shelderCity: Yup.string().required("El campo ciudad es requerido"),
  shelderStreet: Yup.string(),
  shelderNumber: Yup.string(),
  shelderFloor: Yup.string(),
  shelderDepartment: Yup.string(),
  shelderWebSite: Yup.string().url("Formato de URL inválido"),
  shelderInstagram: Yup.string(),
  shelderFacebook: Yup.string(),
});

export const initialValues = {
  shelderName: "",
  shelderDescription: "",
  shelderEmail: "",
  shelderPassword1: "",
  shelderPassword2: "",
  shelderCity: "",
  shelderStreet: "",
  shelderNumber: "",
  shelderFloor: "",
  shelderDepartment: "",
  shelderWebSite: "",
  shelderInstagram: "",
  shelderFacebook: "",
};
