import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El nombre solo debe contener letras")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres")
    .required("El campo Nombre es requerido"),
  lastName: Yup.string()
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El apellido solo debe contener letras")
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede tener más de 50 caracteres")
    .required("El campo Apellido es requerido"),
  email: Yup.string("Debe ingresar su usuario")
    .email("Debe ingresar un email")
    .required("El campo Usuario es requerido"),
  password: Yup.string()
    .matches(/^\d+$/, "El password debe ser numérico")
    .required("El campo Password es requerido"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Confirmación de contraseña es requerida"),
});

function PetterRegister() {
  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      return "SUCCESS";
    } catch (error) {
      console.log(error)
      return error.text;
    }
  };
  
  const handleSubmit = (values) => {
    console.log("Nombre:", values.name);
    console.log("Apellido:", values.lastName);
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    console.log("Confirmation Password:", values.confirmPassword);
    
    axios
      .post("http://localhost:8081/api/Mascoteros/registro", {
        nombre: values.name,
        apellido: values.lastName,
        email: values.email,
        password: values.password,
      })
      .then(async (response) => {
        console.log("Response:", response);
  
        // Llamar a sendEmail y esperar su respuesta
        const emailStatus = await sendEmail();
        
        if (emailStatus === "SUCCESS") {
          navigate("/register/account-validation");
        } else {
          console.error("Error al enviar el email:", emailStatus);
        }
  
      })
      .catch((error) => {
        console.log('el error es: ' + error)
        const response = JSON.parse(error.request.response);
        console.log('la respuesta es: ' + response)
  
        if (response.errors && response.errors.includes("Ya existe un usuario registrado con esa dirección de email")) {
          navigate("/register/refused");
        } else {
          console.error("Error:", response.errors);
        }
      });
  };
  

  return (
    <div className="vh-100 justify-content-center align-items-center">
      <Container
        className="bg-dark text-white rounded-2 py-4 align-self-center"
        style={{
          maxWidth: "400px",
          paddingTop: "50px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit: formikHandleSubmit,
            isSubmitting,
          }) => (
            <Form ref={form} onSubmit={formikHandleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.name && touched.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Apellido*</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.lastName && touched.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="emial"
                  name="email"
                  placeholder="Ingrese su usuario"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.email && touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Contraseña*</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Ingrese su password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.password && touched.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
                <Form.Label>Confirmar Contraseña*</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Ingrese su password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.confirmPassword && touched.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>


              <div className="justify-content-center w-100">
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-4 align-self-center"
                  disabled={isSubmitting}
                >
                  Registrarme
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default PetterRegister;