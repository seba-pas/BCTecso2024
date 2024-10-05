import React, { useRef } from "react";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import { SendEmail, RegisterPet } from "../../api/api";
import { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
const FormPetOwner = () => {
  const navigate = useNavigate();
  const refForm = useRef(null);
  const [showPassword, setshowPassword] = useState({ password: false, confirm_password: false });
  const [borderDanger, setborderDanger] = useState({ name: "", lastname: "", email: "", password: "", confirm_password: "" });
  const valueManagement = (values) => {
    const errors = {};
    let classDanger = "border border-danger text-danger placeholder-danger";
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!values.name) {
      errors.name = "Campo requerido";
      setborderDanger({ ...borderDanger, name: classDanger });
    } else if (!values.lastname) {
      errors.lastname = "Campo requerido";
      setborderDanger({ ...borderDanger, lastname: classDanger });
    } else if (!values.email) {
      errors.email = "Campo requerido";
      setborderDanger({ ...borderDanger, email: classDanger });
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Ingresá un correo válido";
      setborderDanger({ ...borderDanger, email: classDanger });
    } else if (!values.password) {
      errors.password = "Campo requerido";
      setborderDanger({ ...borderDanger, password: classDanger });
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "La contraseña debe contener una longitud de 8 caracteres, una letra minúscula, mayuscula, un número, un caracter especial.";
      setborderDanger({ ...borderDanger, password: classDanger });
    } else if (!values.confirm_password) {
      errors.confirm_password = "Campo requerido";
      setborderDanger({ ...borderDanger, confirm_password: classDanger });
    } else if (values.password.length && values.confirm_password.length && values.password !== values.confirm_password) {
      errors.confirm_password = "Las contraseñas no coinciden";
      errors.password = "Las contraseñas no coinciden";
      setborderDanger({ ...borderDanger, password: classDanger });
      setborderDanger({ ...borderDanger, confirm_password: classDanger });
    }
    return errors;
  };
  const submitForm = async (values, setSubmitting) => {
    setSubmitting(true);
    try {
      let sendBody = { nombre: values.name, apellido: values.lastname, email: values.email, password: values.password };
      await RegisterPet("Mascoteros/registro", sendBody);
      await SendEmail(refForm.current);
      navigate("/validation_email");
      setSubmitting(false);
    } catch (error) {
      if (error.includes("Ya existe un usuario registrado con esa dirección de email")) navigate("/email_registered");
      setSubmitting(false);
      throw new Error(error);
    }
  };
  const togglePasswordVisibility = (e) => {
    const inputName = e.target.getAttribute("data-input");
    setshowPassword({
      ...showPassword,
      [inputName]: !showPassword[inputName],
    });
  };
  const removeDangerClass = (name) => {
    setborderDanger((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };
  return (
    <Formik initialValues={{ lastname: "", email: "", name: "", password: "", confirm_password: "" }} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        const handleInputChange = (e) => {
          handleChange(e);
          removeDangerClass(e.target.name);
        };
        return (
          <Form ref={refForm} onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            <Row className="gap-2 justify-content-center">
              <Col xs={12}>
                <Form.Control className={`input-muma ${borderDanger.name}`} style={{ transition: "none" }} placeholder="Nombre*" type="text" name="name" onChange={handleInputChange} onBlur={handleBlur} value={values.name} />
                <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.name && touched.name && errors.name}</p>
              </Col>
              <Col xs={12}>
                <Form.Control className={`input-muma ${borderDanger.lastname}`} placeholder="Apellido*" type="text" name="lastname" onChange={handleInputChange} onBlur={handleBlur} value={values.lastname} />
                <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.lastname && touched.lastname && errors.lastname}</p>
              </Col>
              <Col xs={12}>
                <Form.Control className={`input-muma ${borderDanger.email}`} placeholder="Email*" type="text" name="email" onChange={handleInputChange} onBlur={handleBlur} value={values.email} />
                <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.email && touched.email && errors.email}</p>
              </Col>
              <Col xs={12}>
                <InputGroup className={`${borderDanger.password} rounded`}>
                  <Form.Control className="input-muma" placeholder="Contraseña*" type={!showPassword.password ? "password" : "text"} name="password" onChange={handleInputChange} onBlur={handleBlur} value={values.password} />
                  <InputGroup.Text className="pointer input-muma" onClick={togglePasswordVisibility} data-input="password">
                    <i className={`bi ${!showPassword.password ? "bi-eye-slash" : "bi-eye"} color-orange-muma`} data-input="password"></i>
                  </InputGroup.Text>
                </InputGroup>
                <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.password && touched.password && errors.password}</p>
              </Col>
              <Col xs={12}>
                <InputGroup className={`${borderDanger.confirm_password} rounded`}>
                  <Form.Control className="input-muma" placeholder="Confirmar contraseña*" type={!showPassword.confirm_password ? "password" : "text"} name="confirm_password" onChange={handleInputChange} onBlur={handleBlur} value={values.confirm_password} />
                  <InputGroup.Text className="pointer input-muma" onClick={togglePasswordVisibility} data-input="confirm_password">
                    <i className={`bi ${!showPassword.confirm_password ? "bi-eye-slash" : "bi-eye"} color-orange-muma`} data-input="confirm_password"></i>
                  </InputGroup.Text>
                </InputGroup>
                <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.confirm_password && touched.confirm_password && errors.confirm_password}</p>
              </Col>
            </Row>
            <Button className="background-button-muma w-100 mt-5" type="submit" disabled={isSubmitting}>
              Registrarme
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormPetOwner;
