import Isologo from "../../assets/images/icons/Isologo.jpg";
import { useState } from "react";
import { Container, Col, Row, Image, Form, Button, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import "../../assets/styles/PetOwner/PetOwner.css";
const PetRegistration = () => {
  const [showPassword, setshowPassword] = useState({ password: false, confirm_password: false });
  const valueManagement = (values) => {
    const errors = {};
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.name_and_lastname) errors.name_and_lastname = "Campo requerido";
    else if (!values.email) errors.email = "Campo requerido";
    else if (!regex.test(values.email)) errors.email = "Ingresá un correo válido";
    else if (!values.password) errors.password = "Campo requerido";
    else if (!values.confirm_password) errors.confirm_password = "Campo requerido";
    else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Las contraseñas no coinciden";
      errors.password = "Las contraseñas no coinciden";
    }
    return errors;
  };
  const submitForm = (values, setSubmitting) => {
    setSubmitting(true);
    try {
      //subimos el formulario
      setTimeout(() => {
        console.log("ACA");
        setSubmitting(false);
      }, 2000);
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
  return (
    <Container as="div" className="vh-100">
      <Row>
        <Col className="d-flex justify-content-center" xs={12}>
          <Image src={Isologo} alt="Isologo" />
        </Col>
        <Col xs={12}>
          <Formik initialValues={{ email: "", name_and_lastname: "", password: "", confirm_password: "" }} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Control className="input-muma" placeholder="Nombre y Apellido*" type="text" name="name_and_lastname" onChange={handleChange} onBlur={handleBlur} value={values.name_and_lastname} />
                <p className="text-danger m-0 p-0">{errors.name_and_lastname && touched.name_and_lastname && errors.name_and_lastname}</p>
                <Form.Control className="input-muma" placeholder="Email*" type="text" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                <p className="text-danger m-0 p-0">{errors.email && touched.email && errors.email}</p>
                <InputGroup>
                  <Form.Control className="input-muma" placeholder="Contraseña*" type={!showPassword.password ? "password" : "text"} name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                  <InputGroup.Text className="pointer input-muma" onClick={togglePasswordVisibility} data-input="password">
                    <i className={`bi ${!showPassword.password ? "bi-eye-slash" : "bi-eye"} color-orange-muma`} data-input="password"></i>
                  </InputGroup.Text>
                </InputGroup>
                <p className="text-danger m-0 p-0">{errors.password && touched.password && errors.password}</p>
                <InputGroup>
                  <Form.Control className="input-muma" placeholder="Confirmar contraseña*" type={!showPassword.confirm_password ? "password" : "text"} name="confirm_password" onChange={handleChange} onBlur={handleBlur} value={values.confirm_password} />
                  <InputGroup.Text className="pointer input-muma" onClick={togglePasswordVisibility} data-input="confirm_password">
                    <i className={`bi ${!showPassword.confirm_password ? "bi-eye-slash" : "bi-eye"} color-orange-muma`} data-input="confirm_password"></i>
                  </InputGroup.Text>
                </InputGroup>
                <p className="text-danger m-0 p-0">{errors.confirm_password && touched.confirm_password && errors.confirm_password}</p>
                <Button className="background-button-muma w-100" type="submit" disabled={isSubmitting}>
                  Registrarme
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default PetRegistration;
