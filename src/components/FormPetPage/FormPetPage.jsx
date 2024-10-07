import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import Select from "../elements/Select";

const FormPetPage = ({ action }) => {
  const [borderDanger, setborderDanger] = useState({ nombre: "", tipoAnimal: "", raza: "", descripcion: "", sexo: "", tamano: "", temperamentoConAnimales: "", temperamentoConPersonas: "", ciudad: "", mesAnioNacimiento: "", protectora: "", fotos: [] });
  const [combos, setCombos] = useState({ razas: [{ label: "Raza*", value: "" }], tipo: [{ label: "Tipo*", value: "" }], tamano: [{ label: "Tamaño*", value: "" }], caracterConAnimales: [{ label: "Caracter con animales*", value: "" }], caracterConPersonas: [{ label: "Caracter con personas*", value: "" }] });
  const valueManagement = (values) => {
    const errors = {};
    let classDanger = "border border-danger text-danger placeholder-danger";
    if (!values.name) {
      errors.name = "Campo requerido";
      setborderDanger({ ...borderDanger, name: classDanger });
    } else if (!values.raza) {
      errors.raza = "Campo requerido";
      setborderDanger({ ...borderDanger, raza: classDanger });
    }
    return errors;
  };
  const submitForm = (values, setSubmitting) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };
  return (
    <Formik initialValues={{ nombre: "", tipoAnimal: "", raza: "", descripcion: "", sexo: "", tamano: "", temperamentoConAnimales: "", temperamentoConPersonas: "", ciudad: "", mesAnioNacimiento: "", protectora: "", fotos: [] }} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        const handleInputChange = (e) => {
          handleChange(e);
          removeDangerClass(e.target.name);
        };
        const removeDangerClass = (name) => {
          setborderDanger((prevState) => ({
            ...prevState,
            [name]: "",
          }));
        };
        return (
          <Form onSubmit={handleSubmit}>
            <Col xs={12}>
              <Form.Control className={`input-muma ${borderDanger.name}`} style={{ transition: "none" }} placeholder="Nombre del animal*" type="text" name="name" onChange={handleInputChange} onBlur={handleBlur} value={values.name} />
              <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.name && touched.name && errors.name}</p>
            </Col>
            <Col xs={12}>
              {/* <Form.Control className={`input-muma ${borderDanger.name}`} style={{ transition: "none" }} placeholder="Nombre del animal*" type="text" name="name" onChange={handleInputChange} onBlur={handleBlur} value={values.name} /> */}
              <Select options={combos.razas} placeholder="Raza*" />
              <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.raza && touched.raza && errors.raza}</p>
            </Col>
            <Button className="background-button-muma w-100 mt-5" type="submit" disabled={isSubmitting}>
              Agregar mascota
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormPetPage;
