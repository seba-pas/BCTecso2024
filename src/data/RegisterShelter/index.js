import * as Yup from "yup";

export const inputs1 = [
  {
    name: "nombreUsuario",
    placeholder: "Nombre de Usuario*",
  },
  {
    name: "apellidoUsuario",
    placeholder: "Apellido de Usuario*",
  },
  {
    name: "nombreProtectora",
    placeholder: "Nombre de Protectora*",
  },
  {
    name: "descripcion",
    placeholder: "Descripción*",
    type: "textarea",
  },
  {
    name: "cantidadDeMascotas",
    placeholder: "Cantidad de Mascotas*",
    type: "number",
  },
  {
    name: "email",
    placeholder: "Email*",
    type: "email",
  },
  {
    name: "password1",
    placeholder: "Contraseña*",
    type: "password",
  },
  {
    name: "password2",
    placeholder: "Confirmar Contraseña*",
    type: "password",
  },
];

export const inputs2 = [
  // {
  //   name: "calle",
  //   placeholder: "Calle*",
  // },
  // {
  //   name: "numero",
  //   placeholder: "Número*",
  // },
  // {
  //   name: "piso",
  //   placeholder: "Piso",
  // },
  {
    name: "departamento",
    placeholder: "Departamento",
  },
  {
    name: "sitioWeb",
    placeholder: "Sitio Web",
  },
  {
    name: "instagram",
    placeholder: "Instagram",
  },
  {
    name: "facebook",
    placeholder: "Facebook",
  },
];

export const validationSchema = Yup.object({
  nombreUsuario: Yup.string().required("El campo nombre de usuario es requerido"),
  apellidoUsuario: Yup.string().required("El campo apellido de usuario es requerido"),
  nombreProtectora: Yup.string().required("El campo nombre de protectora es requerido"),
  idProvincia: Yup.object()
    .shape({
      value: Yup.string().required("Selecciona una provincia").notOneOf([""], "Selecciona una provincia"),
      label: Yup.string().required("Selecciona una provincia"),
    })
    .required("El campo provincia es requerido"),
  idCiudad: Yup.object()
    .shape({
      value: Yup.string().required("Selecciona una ciudad").notOneOf([""], "Selecciona una ciudad"),
      label: Yup.string().required("Selecciona una ciudad"),
    })
    .required("El campo ciudad es requerido"),
  descripcion: Yup.string().required("El campo descripción es requerido"),
  email: Yup.string().email("El email no tiene un formato válido").required("El campo email es requerido"),
  password1: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("El campo contraseña es requerido"),
  password2: Yup.string()
    .oneOf([Yup.ref("password1"), null], "Las contraseñas deben coincidir")
    .required("El campo confirmar contraseña es requerido"),
  cantidadDeMascotas: Yup.number().typeError("Debe ser un número").min(0, "La cantidad de mascotas debe ser un número positivo").required("El campo cantidad de mascotas es requerido"),
  calle: Yup.string().required("El campo calle es requerido"),
  numero: Yup.string().required("El campo número es requerido"),
  piso: Yup.string(),
  departamento: Yup.string(),
  sitioWeb: Yup.string().url("Formato de URL inválido"),
  instagram: Yup.string(),
  facebook: Yup.string(),
});

export const initialValues = {
  nombreUsuario: "",
  apellidoUsuario: "",
  nombreProtectora: "",
  descripcion: "",
  email: "",
  password1: "",
  password2: "",
  idProvincia: null,
  idCiudad: null,
  calle: "",
  numero: "",
  piso: "",
  departamento: "",
  sitioWeb: "",
  instagram: "",
  facebook: "",
  cantidadDeMascotas: "",
};
