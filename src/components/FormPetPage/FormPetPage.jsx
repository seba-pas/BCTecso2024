import React, { useState, useEffect } from "react";
import { Col, Form, Button, Row,Alert } from "react-bootstrap";
import { Formik } from "formik";
import Select from "../elements/Select";
import Input from "../elements/Input";
import Check from "../elements/Check";
import { inputs, selects, inputs2, checks } from "../../data/FormPetPage";
import moment from "moment-timezone";
import { useParams, useNavigate } from "react-router-dom";
import {PostGeneral} from "../../api/setupAxios";

//QUEDA PREGUNTAR PARA REALIZAR EL TEMA FOTOS.

const FormPetPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [checked, setchecked] = useState({ 0: false, 1: false });
  const [errorRegister,seterrorRegister] = useState(false)
  const [petData, setpetData] = useState({ nombre: "", tipoAnimal: "", raza: "", descripcion: "", sexo: "", tamano: "", temperamentoConAnimales: "", temperamentoConPersonas: "", ciudad: "", mesAnioNacimiento: "", protectora: "", fotos: [] });
  let action = localStorage.getItem("action");
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
    else if (!values.sexo) errors.sexo = "Campo requerido";
    return errors;
  };
  const submitForm = async(values, setSubmitting) => {
    try {
      setSubmitting(true);
      values.mesAnioNacimiento = moment.tz(values.mesAnioNacimiento, "America/Argentina/Buenos_Aires").format("YYYY-MM");
      await PostGeneral("Mascotas/registro",values);
      setSubmitting(false);
      navigate("/success_submit_pet");
    } catch (error) {
      seterrorRegister(true)
    }
  };
  const returnTextButton = (action) => {
    switch (action) {
      case "m":
        return "Modificar mascota";
      default:
        return "Agregar mascota";
    }
  };
  useEffect(() => {
    //Se manejara el llenado byid para la modificacion.
    if (id)
      setpetData({
        nombre: "Leandro",
        raza: { label: "Perro", value: "Perro" },
        tamano: { label: "Chiquito", value: "Chiquito" },
        temperamentoConAnimales: { label: "Bueno", value: "Bueno" },
        temperamentoConPersonas: { label: "Malo", value: "Malo" },
        ciudad: "Formosa 1780, Quilmes",
        mesAnioNacimiento: "2000-09-10",
        descripcion: "Un perro muy lindo",
        sexo: "Macho",
      });
  }, []);
  return (
    <Formik enableReinitialize={true} initialValues={petData} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
      {({ handleSubmit, isSubmitting, errors, touched, setFieldValue, values }) => {
        const setCheckedLocal = (setFieldValue, key, value) => {
          setFieldValue("sexo", value);
          setchecked({ ...checked, [key]: !checked[key] });
        };
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
            <Row className="mt-2 mb-2">
              {checks.map((check, key) => (
                <Col key={key} md={6} className="d-flex justify-content-center">
                  <Check onChange={(e) => setCheckedLocal(setFieldValue, key, e.target.value)} id={check.id} label={check.label} value={check.value} checked={checked[key]} type={check.type} name={check.name} />
                </Col>
              ))}
              <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.sexo && touched.sexo && errors.sexo}</p>
            </Row>
            <Button className="background-button-muma w-100" type="submit" disabled={isSubmitting}>
              {returnTextButton(action)}
            </Button>
            {errorRegister && <Alert variant="danger">Huno un error al intentar registrar su animal.</Alert>}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormPetPage;
