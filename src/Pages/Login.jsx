import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ingresar un email")
    .required("Email is required"),
  password: Yup.string()
    .matches(/\d.*\d/, "El password debe contener dos numeros")
    .required("Password is required"),
});

function Login() {
  // const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    axios
      .post("http://localhost:8080/api/Authentication/token", {
        user: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // navigate("/home");
  };

  return (
    <div className="bg-dark vh-100 justify-content-center align-items-center">
      <Container
        className="bg-dark text-white rounded-2 py-4 align-self-center"
        style={{
          maxWidth: "400px",
          paddingTop: "50px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Login</h2>
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
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.email && touched.email}
                />
                {errors.email && touched.email && (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.password && touched.password}
                />
                {errors.password && touched.password && (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <div className="justify-content-center w-100">
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-4 align-self-center"
                  disabled={isSubmitting}
                >
                  Login
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
