import { useState } from "react";
import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import { EyeIcon } from "./EyeIcon";

import style from "../style/RegisterShelterInput.module.css";

export const RegisterShelterInput = (props) => {
  const [field, meta] = useField(props);
  const errorClassname = meta.error && meta.touched ? style.registerShelterError : "";
  const [showPassword, setShowPassword] = useState(false);

  return props.type === "password" ? (
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
  ) : (
    <div className={` ${errorClassname}`}>
      {props.type === "textarea" ? (
        <textarea
          className={`p-3 w-100 ${style.registerShelterTextarea}`}
          style={{
            height: "70px",
          }}
          value={field.value || ""}
          {...field}
          {...props}
          type={props.type === "password" ? (showPassword ? "text" : "password") : props.type}
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
      {props.type === "password" && (
        <button type="button" onClick={() => setShowPassword((prev) => !prev)} className={style.registerShelterEyeButton}>
          <EyeIcon show={showPassword} className={style.registerShelterSvg} error={!!errorClassname} />
        </button>
      )}
      <ErrorMessage name={props.name} component="span" className={style.registerShelterSpan} />
    </div>
  );
};

RegisterShelterInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
