import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import Select from "react-select";

import { customStyles } from "../style/selectCustomStyle";

export const RegisterShelterSelect = ({ options, customOnChange, placeholder, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (selectedOption) => {
    helpers.setValue(selectedOption); // Establece el valor seleccionado en Formik
    if (customOnChange) {
      customOnChange(selectedOption);
    }
  };

  const customNoOptionsMessage = () => <div>Seleccione una provincia</div>;

  const styles = {
    ...customStyles,
    control: (provided) => ({
      ...customStyles.control(provided), // Llama a tu función de estilos personalizada
      border: meta.touched && meta.error ? "1px solid var(--system-error)" : "none",
    }),
  };

  return (
    <div>
      <Select {...field} {...props} options={options} onChange={handleChange} value={field.value || null} noOptionsMessage={customNoOptionsMessage} styles={styles} placeholder={placeholder} />
      <ErrorMessage
        name={props.name}
        component="span"
        style={{
          color: "var(--system-error)",
          paddingLeft: "16px",
        }}
      />
    </div>
  );
};

RegisterShelterSelect.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  customOnChange: PropTypes.func,
};
