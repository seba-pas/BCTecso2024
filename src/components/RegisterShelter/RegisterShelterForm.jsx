import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import { Input, SelectGeneral } from "../";
import { useFetchAddress } from "../../hooks/";
import { registerNewShelter } from "../../api/setupAxios";

import { initialValues, validationSchema, inputs1, inputs2 } from "../../data/RegisterShelter";

export const RegisterShelterForm = () => {
  const navigate = useNavigate();

  const { provinces, cities, setSelectedProvinces } = useFetchAddress();
  const provinceOptions =
    provinces &&
    provinces.map(({ id, nombre }) => ({
      value: JSON.stringify({ id, nombre }),
      label: nombre,
    }));
  const cityOptions =
    cities &&
    cities.map(({ id, nombre, idProvincia }) => ({
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
          <Form noValidate className="w-100 mx-auto" style={{ maxWidth: "640px" }}>
            <div className="d-flex flex-column " style={{ gap: "16px" }}>
              {inputs1.map((props) => (
                <Input key={props.name} {...props} />
              ))}
              <SelectGeneral
                name="idProvincia"
                placeholder="Provincia*"
                options={provinceOptions}
                customOnChange={(selectedOption) => {
                  console.log(selectedOption);
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
              <SelectGeneral
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

              <Input name="calle" placeholder="Calle*" />
              <div className="d-flex w-100" style={{ gap: "8px" }}>
                <Input name="numero" placeholder="Número*" />
                <Input name="piso" placeholder="Piso" />
              </div>

              {inputs2.map((props) => (
                <Input key={props.name} {...props} />
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
