import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import Select from "react-select";

import { customStyles } from "../../assets/styles/elements/Select/selectCustomStyle";

const SelectGeneral = ({ options, customOnChange = () => {}, placeholder, noOption = "Seleccione una provincia", ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (selectedOption) => {
    helpers.setValue(selectedOption); // Establece el valor seleccionado en Formik
    if (customOnChange) {
      customOnChange(selectedOption);
    }
  };

  const customNoOptionsMessage = () => <div>{noOption}</div>;
  const styles = {
    ...customStyles,
    control: (provided) => ({
      ...customStyles.control(provided),
      border: meta.touched && meta.error ? "1px solid var(--system-error)" : "none",
      "&:hover": {
        border: meta.touched && meta.error ? "1px solid var(--system-error)" : "none", // Cambia el color de la flecha
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: meta.touched && meta.error ? "var(--system-error)" : "var(--brand-primary-01)", // Cambia el color de la flecha
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
      paddingRight: "16px",
      paddingLeft: "16px",
      "&:hover": {
        color: meta.touched && meta.error ? "var(--system-error)" : "var(--brand-primary-01)", // Cambia el color de la flecha
      },
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

SelectGeneral.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  customOnChange: PropTypes.func,
};

export default SelectGeneral;
