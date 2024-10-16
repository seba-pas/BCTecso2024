import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { login } from "../features/auth/authSlice"; 
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); 
  const [rememberMe, setRememberMe] = useState(false); 
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  // Accedo al estado de autenticación y de carga de Redux
  const { loading, isAuthenticated, error } = useSelector((state) => state.auth);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Si existe el mail lo cargo ene el localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []); 

  // Si está autenticado redirige al home.
  useEffect(() => {
    if (isAuthenticated && user) {
      const tipoRegistro = Number(user.idTipoRegistro);
      if (tipoRegistro === 2) {
        navigate("/home");
      } else if (tipoRegistro === 1) {
        navigate("/home_shelter");
      } 
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-4">
        <div className="text-center mb-4">
          <img className="logo mb-5" src={logo} alt="Logo" />
        </div>

        <Formik
          initialValues={{ email: email, password: "" }} 
          enableReinitialize 
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "El email no es valido";
            }
            if (!values.password) {
              errors.password = "Ingrese una contraseña";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            dispatch(login(values));  

            if (rememberMe) {
              localStorage.setItem("savedEmail", values.email);  
            } else {
              localStorage.removeItem("savedEmail");
            }
            setSubmitting(false);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`}
                  placeholder="Email*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="form-group mb-4 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`}
                  placeholder="Contraseña*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {values.password && values.password.length > 0 && (
                  <span className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: "pointer" }} onClick={togglePasswordVisibility}>
                    {showPassword ? "🙈" : <i className="bi bi-eye"></i>}
                  </span>
                )}
                {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="d-flex justify-content-between mb-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label">Recordarme</label>
                </div>
                <a href="" className="text-decoration-none">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button type="submit" className="btn btn-warning w-100 mb-3" disabled={isSubmitting || loading}>
                {loading ? "Cargando..." : "Ingresar"}
              </button>

              <button type="button" className="btn btn-outline-warning w-100" onClick={() => navigate("/user_select")}>
                Crear cuenta
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
