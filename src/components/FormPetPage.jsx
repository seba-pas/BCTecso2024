import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";

const FormPetPage = ({ action }) => {
  const [borderDanger, setborderDanger] = useState({ name: "", idraza: 0, idtipo: 0, idtamano: 0, idcaracter: 0, ubicacion: "", nacimiento: "", description: "", idgenero: 0 });
  const valueManagement = (values) => {
    const errors = {};
    let classDanger = "border border-danger text-danger placeholder-danger";
    if (!values.name) {
      errors.name = "Campo requerido";
      setborderDanger({ ...borderDanger, name: classDanger });
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
    <Formik initialValues={{ name: "", idraza: 0, idtipo: 0, idtamano: 0, idcaracter: 0, ubicacion: "", nacimiento: "", description: "", idgenero: 0 }} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
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
