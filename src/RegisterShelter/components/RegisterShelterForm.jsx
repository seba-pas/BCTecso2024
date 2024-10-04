import { Formik, Form } from "formik";
import { RegisterShelterInput, initialValues, validationSchema, inputs } from "../";

export const RegisterShelterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form noValidate className="w-100">
          <div className="d-flex flex-column " style={{ gap: "16px" }}>
            {inputs.map((props) => (
              <RegisterShelterInput key={props.name} {...props} />
            ))}
          </div>
          <button type="submit" className="w-100 rounded-3 border-0 py-3 mt-4" style={{ color: "var(--background-lightmode-secondary)", backgroundColor: "var(--brand-primary-01)" }}>
            Registrarme
          </button>
        </Form>
      )}
    </Formik>
  );
};
