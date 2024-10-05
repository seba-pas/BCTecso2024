import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";

export const RegisterShelterSelect = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

RegisterShelterSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
