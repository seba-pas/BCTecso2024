import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import Select from "../elements/Select";
import Input from "../elements/Input";
import { inputs, selects, inputs2 } from "../../data/FormPetPage";
import moment from "moment-timezone";

//QUEDA PREGUNTAR PARA REALIZAR EL TEMA FOTOS.

const FormPetPage = ({ action }) => {
  const [combos, setCombos] = useState({ raza: [{ label: "Raza*", value: "" }], tipoAnimal: [{ label: "Tipo*", value: "" }], tamano: [{ label: "Tamaño*", value: "" }], temperamentoConAnimales: [{ label: "Caracter con animales*", value: "" }], temperamentoConPersonas: [{ label: "Caracter con personas*", value: "" }] });
  const valueManagement = (values) => {
    const errors = {};
    if (!values.nombre) errors.nombre = "Campo requerido";
    else if (!values.raza) errors.raza = "Campo requerido";
    else if (!values.tamano) errors.tamano = "Campo requerido";
    else if (!values.temperamentoConAnimales) errors.temperamentoConAnimales = "Campo requerido";
    else if (!values.temperamentoConPersonas) errors.temperamentoConPersonas = "Campo requerido";
    else if (!values.ciudad) errors.ciudad = "Campo requerido";
    else if (!values.mesAnioNacimiento) errors.mesAnioNacimiento = "Campo requerido";
    return errors;
  };
  const submitForm = (values, setSubmitting) => {
    values.mesAnioNacimiento = moment.tz(values.mesAnioNacimiento, "America/Argentina/Buenos_Aires").format("YYYY-MM");
    console.log("VALORES", values);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };
  const returnTextButton = (action) => {
    switch (action) {
      case "m":
        return "Modificar mascota";
      default:
        return "Agregar mascota";
    }
  };
  return (
    <Formik initialValues={{ nombre: "", tipoAnimal: "", raza: "", descripcion: "", sexo: "", tamano: "", temperamentoConAnimales: "", temperamentoConPersonas: "", ciudad: "", mesAnioNacimiento: "", protectora: "", fotos: [] }} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
      {({ handleSubmit, isSubmitting }) => {
        return (
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            {inputs.map((input, key) => (
              <Col xs={12} key={key}>
                <Input type={input.type} name={input.name} placeholder={input.placeholder} />
              </Col>
            ))}
            {selects.map((select, key) => (
              <Col xs={12} key={key}>
                <Select name={select.name} type={select.type} placeholder={select.placeholder} options={combos[select.name]} noOption={select.noOption} />
              </Col>
            ))}
            {inputs2.map((input, key) => (
              <Col xs={12} key={key}>
                <Input type={input.type} name={input.name} placeholder={input.placeholder} />
              </Col>
            ))}
            <Button className="background-button-muma w-100" type="submit" disabled={isSubmitting}>
              {returnTextButton(action)}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormPetPage;
