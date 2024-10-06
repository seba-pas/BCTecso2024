import { Formik, Form } from "formik";
import { registerNewShelter } from "../../api/setupAxios";
import { useAddress } from "../hooks";
import { RegisterShelterInput, RegisterShelterSelect, initialValues, validationSchema, inputs1, inputs2 } from "../";
import { useNavigate } from "react-router-dom";

export const RegisterShelterForm = () => {
  const navigate = useNavigate();

  const { provinces, cities, setSelectedProvinces } = useAddress();
  const provinceOptions = provinces.map(({ id, nombre }) => ({
    value: JSON.stringify({ id, nombre }),
    label: nombre,
  }));
  const cityOptions = cities.map(({ id, nombre, idProvincia }) => ({
    value: JSON.stringify({ id, nombre, idProvincia }),
    label: nombre,
  }));
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          await registerNewShelter(values);
          resetForm();
          navigate("/validation_email");
        } catch (error) {
          navigate("/email_registered");
          console.log(error);
        }
      }}
    >
      {({ setFieldValue }) => {
        return (
          <Form noValidate className="w-100 mx-auto" style={{ maxWidth: "1280px" }}>
            <div className="d-flex flex-column " style={{ gap: "16px" }}>
              {inputs1.map((props) => (
                <RegisterShelterInput key={props.name} {...props} />
              ))}
              <RegisterShelterSelect
                name="idProvincia"
                placeholder="Provincia*"
                options={provinceOptions}
                customOnChange={(selectedOption) => {
                  if (selectedOption) {
                    const selectedProvince = JSON.parse(selectedOption.value);
                    setSelectedProvinces(selectedProvince.id);
                    setFieldValue("idProvincia", selectedOption);
                    setFieldValue("idCiudad", null);
                  } else {
                    setSelectedProvinces("");
                    setFieldValue("idProvincia", null);
                  }
                }}
              />
              <RegisterShelterSelect
                name="idCiudad"
                placeholder="Ciudad*"
                options={cityOptions}
                customOnChange={(selectedOption) => {
                  if (selectedOption) {
                    setFieldValue("idCiudad", selectedOption);
                  } else {
                    setFieldValue("idCiudad", null);
                  }
                }}
              />
              {inputs2.map((props) => (
                <RegisterShelterInput key={props.name} {...props} />
              ))}
            </div>
            <button type="submit" className="w-100 rounded-3 border-0 py-3 mt-4" style={{ color: "var(--background-lightmode-secondary)", backgroundColor: "var(--brand-primary-01)" }}>
              Registrarme
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
