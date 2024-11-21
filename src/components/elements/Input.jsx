import { useState } from "react";
import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import { EyeIcon } from "./EyeIcon";
import style from "../../assets/styles/elements/Input/Input.module.css";
import { InputGroup, Form } from "react-bootstrap";

const Input = (props) => {
  const [field, meta] = useField(props);
  const errorClassname = meta.error && meta.touched ? style.registerShelterError : "";
  const [showPassword, setShowPassword] = useState(false);
  //Permite abrir el modal para seleccionar fecha desde todo el elemento HTML y no solo desde su icono.
  const handleDateClick = (e) => e.target.showPicker();
  //Retorna el tipo de input dependiendo determinados parametros.
  const returnInput = () => {
    if (props.type === "password") {
      return (
        <div>
          <div className={`position-relative ${errorClassname}`}>
            <input
              className={`px-3 w-100 ${style.registerShelterInput}`}
              style={{
                height: "50px",
              }}
              value={field.value || ""}
              {...field}
              {...props}
              type={props.type === "password" ? (showPassword ? "text" : "password") : props.type}
            />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className={style.registerShelterEyeButton}>
              <EyeIcon show={showPassword} className={style.registerShelterSvg} error={!!errorClassname} />
            </button>
          </div>
          <ErrorMessage name={props.name} component="span" className={style.registerShelterSpan} />
        </div>
      );
    } else if (props.name === "ciudad") {
      return (
        <InputGroup className={`d-flex ${errorClassname}`}>
          <InputGroup.Text className="col-1 border-0">
            <i className="bi bi-geo-alt-fill" style={{ color: "#f08318" }}></i>
          </InputGroup.Text>
          <input
            className={`px-3 col-11 ${style.registerShelterInput}`}
            style={{
              height: "50px",
            }}
            value={field.value || ""}
            {...field}
            {...props}
            type={props.type}
          />
        </InputGroup>
      );
    } else if (props.name === "mesAnioNacimiento") {
      return (
        <div className={` ${errorClassname}`}>
          <input
            className={`px-3 w-100 ${style.registerShelterInput}`}
            style={{
              height: "50px",
            }}
            value={field.value || ""}
            {...field}
            {...props}
            onClick={handleDateClick}
            type="date"
          />
          <ErrorMessage name={props.name} component="span" className={style.registerShelterSpan} />
        </div>
      );
    } else {
      return (
        <div className={` ${errorClassname}`} style={{ flex: "1" }}>
          {props.type === "textarea" ? (
            <textarea
              className={`p-3 w-100 ${style.registerShelterTextarea}`}
              style={{
                height: "70px",
              }}
              value={field.value || ""}
              {...field}
              {...props}
            />
          ) : (
            <input
              className={`px-3 w-100 ${style.registerShelterInput}`}
              style={{
                height: "50px",
              }}
              value={field.value || ""}
              {...field}
              {...props}
              type={props.type}
            />
          )}
          <ErrorMessage name={props.name} component="span" className={style.registerShelterSpan} />
        </div>
      );
    }
  };

  return returnInput();
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
