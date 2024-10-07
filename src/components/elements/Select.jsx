import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import Select from "react-select";

import { customStyles } from "../../assets/styles/elements/Select/selectCustomStyle";

const SelectGeneral = ({ options, customOnChange = () => {}, placeholder, ...props }) => {
  console.log(placeholder);
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
      ...customStyles.control(provided),
      border: meta.touched && meta.error ? "1px solid var(--system-error)" : "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: meta.touched && meta.error ? "var(--system-error)" : "var(--brand-primary-01)", // Cambia el color de la flecha
    }),
  };

  return <Select {...field} {...props} options={options} onChange={handleChange} value={field.value || null} noOptionsMessage={customNoOptionsMessage} styles={styles} placeholder={placeholder} />;
};

SelectGeneral.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  customOnChange: PropTypes.func,
};

export default SelectGeneral;
