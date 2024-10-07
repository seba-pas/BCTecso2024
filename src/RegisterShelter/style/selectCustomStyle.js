export const customStyles = {
  control: (provided) => ({
    ...provided,
    color: "var(--brand-primary-01)",
    fontWeight: 400,
    outline: "none",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "var(--background-lightmode-secondary)",
    boxShadow: "none",
    padding: "none",
    paddingLeft: "8px",
    height: "50px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    // backgroundColor: "var(--background-lightmode-secondary)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    color: state.isSelected ? "var(--brand-primary-01)" : "var(--selected-color)",
    padding: "10px", // Asegura que el padding sea similar a los inputs
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--brand-neutro-01)",
    fontWeight: 400,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--brand-primary-01)",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "var(--brand-primary-01)", // Cambia el color de la flecha
    paddingRight: "16px",
  }),
  indicatorSeparator: () => ({
    display: "none", // Oculta la línea entre el input y la flecha
  }),
};
