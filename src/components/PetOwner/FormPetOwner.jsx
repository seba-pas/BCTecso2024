import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { SendEmail } from "../../api/api";
import { useState } from "react";
import { Formik } from "formik";
const FormPetOwner = () => {
  const [showPassword, setshowPassword] = useState({ password: false, confirm_password: false });
  const [borderDanger, setborderDanger] = useState({ name_and_lastname: "", email: "", password: "", confirm_password: "" });
  const valueManagement = (values) => {
    const errors = {};
    let classDanger = "border border-danger text-danger placeholder-danger";
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(passwordRegex.test(values.password));
    if (!values.name_and_lastname) {
      errors.name_and_lastname = "Campo requerido";
      setborderDanger({ ...borderDanger, name_and_lastname: classDanger });
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
  const submitForm = (values, setSubmitting) => {
    setSubmitting(true);
    try {
      let HTML = "<p>ASDFG</p>";
      //subimos el formulario
      SendEmail(values.email, HTML);
      setSubmitting(false);
    } catch (error) {
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
    <Formik initialValues={{ email: "", name_and_lastname: "", password: "", confirm_password: "" }} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        const handleInputChange = (e) => {
          handleChange(e);
          removeDangerClass(e.target.name);
        };
        return (
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            <Form.Control className={`input-muma ${borderDanger.name_and_lastname}`} placeholder="Nombre y Apellido*" type="text" name="name_and_lastname" onChange={handleInputChange} onBlur={handleBlur} value={values.name_and_lastname} />
            <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.name_and_lastname && touched.name_and_lastname && errors.name_and_lastname}</p>
            <Form.Control className={`input-muma ${borderDanger.email}`} placeholder="Email*" type="text" name="email" onChange={handleInputChange} onBlur={handleBlur} value={values.email} />
            <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.email && touched.email && errors.email}</p>
            <InputGroup className={`${borderDanger.password} rounded`}>
              <Form.Control className="input-muma" placeholder="Contraseña*" type={!showPassword.password ? "password" : "text"} name="password" onChange={handleInputChange} onBlur={handleBlur} value={values.password} />
              <InputGroup.Text className="pointer input-muma" onClick={togglePasswordVisibility} data-input="password">
                <i className={`bi ${!showPassword.password ? "bi-eye-slash" : "bi-eye"} color-orange-muma`} data-input="password"></i>
              </InputGroup.Text>
            </InputGroup>
            <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.password && touched.password && errors.password}</p>
            <InputGroup className={`${borderDanger.confirm_password} rounded`}>
              <Form.Control className="input-muma" placeholder="Confirmar contraseña*" type={!showPassword.confirm_password ? "password" : "text"} name="confirm_password" onChange={handleInputChange} onBlur={handleBlur} value={values.confirm_password} />
              <InputGroup.Text className="pointer input-muma" onClick={togglePasswordVisibility} data-input="confirm_password">
                <i className={`bi ${!showPassword.confirm_password ? "bi-eye-slash" : "bi-eye"} color-orange-muma`} data-input="confirm_password"></i>
              </InputGroup.Text>
            </InputGroup>
            <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.confirm_password && touched.confirm_password && errors.confirm_password}</p>
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
