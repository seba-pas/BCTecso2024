import { Formik, Form } from "formik";
import { RegisterShelterInput, initialValues, validationSchema, inputs1, inputs2 } from "../";
import { RegisterShelterSelect } from "./RegisterShelterSelect";
import { registerNewShelter } from "../../api/setupAxios";
import { useAddress } from "../hooks";

export const RegisterShelterForm = () => {
  const { provinces, cities, setSelectedProvinces } = useAddress();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        registerNewShelter(values);
      }}
    >
      {({ setFieldValue, values }) => {
        console.log({ values });

        return (
          <Form noValidate className="w-100 mx-auto" style={{ maxWidth: "1280px" }}>
            <div className="d-flex flex-column " style={{ gap: "16px" }}>
              {/*//! Primeros inputs */}
              {inputs1.map((props) => (
                <RegisterShelterInput key={props.name} {...props} />
              ))}

              {/*//! Selects provincias*/}
              <RegisterShelterSelect
                name="idProvincia"
                label="Provincia"
                value={values.idProvincia ? JSON.stringify(values.idProvincia) : ""}
                onChange={({ target }) => {
                  if (target.value) {
                    const selectedProvince = JSON.parse(target.value);
                    setSelectedProvinces(selectedProvince.id);
                    setFieldValue("idProvincia", selectedProvince);
                  } else {
                    setSelectedProvinces("");
                    setFieldValue("idProvincia", null); // O un objeto vacío, según tu lógica
                  }
                }}
              >
                <option value="">Seleccione una provincia</option>
                {provinces &&
                  provinces.map(({ id, nombre }) => (
                    <option key={id} value={JSON.stringify({ id, nombre })}>
                      {nombre}
                    </option>
                  ))}
              </RegisterShelterSelect>
              {/*//! Selects ciudades*/}
              <RegisterShelterSelect
                name="idCiudad"
                label="Ciudad"
                value={values.idCiudad ? JSON.stringify(values.idCiudad) : ""}
                onChange={({ target }) => {
                  if (target.value) {
                    const selectedCitie = JSON.parse(target.value);
                    setFieldValue("idCiudad", selectedCitie);
                  } else {
                    setFieldValue("idCiudad", null); // O un objeto vacío, según tu lógica
                  }
                }}
              >
                <option value="">Seleccione una provincia</option>
                {cities &&
                  cities.map(({ id, nombre, idProvincia }) => (
                    <option key={id} value={JSON.stringify({ id, nombre, idProvincia })}>
                      {nombre}
                    </option>
                  ))}
              </RegisterShelterSelect>
              {/*//! Segundos inputs */}
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
