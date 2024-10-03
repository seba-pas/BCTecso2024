import React, { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import {login} from '../api/setupAxios';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-4">
        <div className="text-center mb-4">
          <img className="logo mb-5" src={logo} alt="Logo" />
        </div>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'El email no es valido';
            }
            if (!values.password) {
                errors.password = 'Ingrese una contraseña';
              }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, setFieldError }) => {
            try {
              await login(values);
              navigate('/home');
            } catch (error) {
              setFieldError('general', 'Credenciales incorrectas');
            } finally {
              setSubmitting(false);
            }
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
            <form onSubmit={handleSubmit}>
              {errors.general && (<Alert variant = "danger">{errors.general}</Alert>)}
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                  placeholder="Email*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-group mb-4 position-relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                  placeholder="Contraseña*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
               {values.password && values.password.length > 0 && (
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: 'pointer' }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </span>
                )}
                {/* Mostrar mensaje de error si hay errores y el campo esta vacio */}
                {errors.password && touched.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <div className="d-flex justify-content-between mb-5">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="rememberMe" />
                  <label className="form-check-label">
                    Recordarme
                  </label>
                </div>
                <a href="/forgot-password" className="text-decoration-none">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button type="submit" className="btn btn-warning w-100 mb-3" disabled={isSubmitting}>
                Ingresar
              </button>

              <button
                type="button"
                className="btn btn-outline-warning w-100"
                onClick={() => navigate('/create-account')}
              >
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
