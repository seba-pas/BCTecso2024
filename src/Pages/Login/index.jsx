
import {useState} from "react"
//libraries
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import { Form, Button, Container } from "react-bootstrap";
import login from "../../assets/login.png";
import eye from "../../assets/eye.png";
import hidden from "../../assets/Vector.png"
//styles
import "./login.scss"

const validationSchema = Yup.object().shape({
  email: Yup.string("Debe ingresar su usuario")
    .email("Debe ingresar un email")
    .required("Usuario es requerido"),
  password: Yup.string()
    .matches(/^\d+$/, "El password debe ser numérico")
    .required("Password es requerido"),
});

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    axios
      .post("http://localhost:8081/api/Authentication/token", {
        user: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log("Response:", response.data?.token);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="body">
      <Container className="container-login">
        <img className="logo-login" src={login} />
        <div>
          
        </div>
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
            <Form onSubmit={formikHandleSubmit}>
              <Form.Group  controlId="formBasicEmail">

                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email*"
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
               <div className="container-pass">
                      <Form.Control

                          type={passwordVisible ? 'text' : 'password'}
                          name="password"
                          placeholder="Contraseña*"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!errors.password && touched.password}
                        />
                       
                      
                          <span className="toggle-visibility" onClick={togglePasswordVisibility}>
                                  {passwordVisible ? (
                                    <img src={eye} alt="Ocultar contraseña" />
                                  ) : (
                                    <img src={hidden} alt="Mostrar contraseña" />
                                  )}
                                
                            </span>
                          
                          
                            <Form.Control.Feedback type="invalid">
                                      {errors.password}
                            </Form.Control.Feedback>
                     
                       

               </div>

              </Form.Group>
              <div className="actions">
                  <div className="container-recordarme">
                    <input className="recordame"  type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Recordarme</label>
                  </div>

                  <a href="/forgot-password" className="forgot-password">¿Olvidaste tu contraseña?</a>
              </div>
          <div className="bnt-container">
              <Button className="btn-primary"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                 Ingresar
              </Button>
              <Button className="btn-create"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={()=>navigate("/select-user")}
                >
                  Crear Cuenta
              </Button>
              
          </div>
              
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Login;
