import React, { useState, useEffect } from "react";
import { Col, Form, Button, Row, Alert, Carousel } from "react-bootstrap";
import { Formik } from "formik";
import Select from "../elements/Select";
import Input from "../elements/Input";
import Check from "../elements/Check";
import { inputs, selects, inputs2, checks } from "../../data/FormPetPage";
import moment from "moment-timezone";
import { useParams, useNavigate } from "react-router-dom";
import { GetGeneral, PostGeneral } from "../../api/setupAxios";
import UploadFile from "../elements/UploadFile";
import { MyCarousel } from "../index";
import Modal from "../Modal";
import FormDeletePet from "../FormDeletePet";

//QUEDA PREGUNTAR PARA REALIZAR EL TEMA FOTOS.

const FormPetPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [modalShow, setmodalShow] = useState(false);
  const closeModal = () => setmodalShow(false);
  const openModal = () => setmodalShow(true);
  const [checked, setchecked] = useState({ 0: false, 1: false });
  const [images, setImages] = useState([]);
  const [errorsMessages, setErrorsMessages] = useState([]);
  const [alert, setAlert] = useState("<div></div>");
  const [petData, setpetData] = useState({
    id: 0,
    nombre: "",
    tipoAnimal: "",
    raza: "",
    descripcion: "",
    sexo: "",
    tamano: "",
    temperamentoConAnimales: "",
    temperamentoConPersonas: "",
    edad: 0,
    estado: "",
    ciudad: "",
    mesAnioNacimiento: "",
    protectoraId: 0,
    fotos: [],
  });
  let action = localStorage.getItem("action");
  const [combos, setCombos] = useState({
    raza: [{ label: "Raza*", value: "raza" }],
    tipoAnimal: [{ label: "Tipo*", value: "tipo" }],
    tamano: [
      { label: "Pequeño", value: "Pequeño" },
      { label: "Mediano", value: "Mediano" },
      { label: "Grande", value: "Grande" },
    ],
    temperamentoConAnimales: [
      { label: "Buenito", value: "Buenito" },
      { label: "Maldito", value: "Maldito" },
    ],
    temperamentoConPersonas: [
      { label: "Buenito", value: "Buenito" },
      { label: "Maldito", value: "Maldito" },
    ],
    protectoraId: [
      { label: "Protectora 1", value: 1 },
      { label: "Protectora 2", value: 2 },
    ],
  });
  const valueManagement = (values) => {
    const errors = {};
    let hoy = moment();
    if (!values.nombre) errors.nombre = "Campo requerido";
    else if (!values.raza) errors.raza = "Campo requerido";
    else if (!values.tamano) errors.tamano = "Campo requerido";
    else if (!values.temperamentoConAnimales) errors.temperamentoConAnimales = "Campo requerido";
    else if (!values.temperamentoConPersonas) errors.temperamentoConPersonas = "Campo requerido";
    else if (!values.protectoraId) errors.protectoraId = "Campo requerido";
    else if (!values.ciudad) errors.ciudad = "Campo requerido";
    else if (!values.mesAnioNacimiento) errors.mesAnioNacimiento = "Campo requerido";
    else if (!moment(values.mesAnioNacimiento, "DD/MM/YYYY", true).isValid) errors.mesAnioNacimiento = "Ingrese una fecha valida";
    else if (moment(values.mesAnioNacimiento).isAfter(hoy)) errors.mesAnioNacimiento = "Ingrese una fecha anterior al día de hoy";
    else if (!values.sexo) errors.sexo = "Campo requerido";
    return errors;
  };
  const submitForm = async (values, setSubmitting) => {
    try {
      setSubmitting(true);
      let valuesMassage = ["raza", "tipoAnimal", "tamano", "temperamentoConAnimales", "temperamentoConPersonas", "protectoraId"];
      values.edad = moment().diff(moment(values.mesAnioNacimiento), "years");
      for (const key in values) {
        if (valuesMassage.includes(key)) values[key] = values[key].value;
        if (key === "mesAnioNacimiento") values[key] = moment.tz(values[key], "America/Argentina/Buenos_Aires").format("YYYY-MM");
        if (key === "fotos") values[key] = images;
      }
      await PostGeneral("Mascotas/registro", values);
      setSubmitting(false);
      navigate("/success_submit_pet");
    } catch (error) {
      let errors = error.response.data;
      if (Array.isArray(errors)) setErrorsMessages(errors);
      else if (!errors) setErrorsMessages(["Hubo un error al ingresar su animal, intente mas tarde."]);
      else if (!Array.isArray(errors.errors)) setErrorsMessages(Object.values(errors.errors).map((error) => error[0]));
      setSubmitting(false);
    }
  };
  const returnButtons = (action, isSubmitting) => {
    switch (action) {
      case "m":
        return (
          <div>
            <Button className="background-button-muma w-100" type="submit" disabled={isSubmitting}>
              Guardar Cambios
            </Button>
            <Button variant="outline-danger" className="w-100 mt-2 mb-2" onClick={openModal} disabled={isSubmitting}>
              Dar de baja
            </Button>
          </div>
        );
      default:
        return (
          <Button className="background-button-muma w-100 mb-2" type="submit" disabled={isSubmitting}>
            Cargar animal
          </Button>
        );
    }
  };
  const deleteImage = (key) => {
    let deleteImg = images.filter((value, k) => k !== key);
    setImages(deleteImg);
  };

  useEffect(() => {
    //Se manejara el llenado byid para la modificacion.
    if (id) {
      setpetData({
        nombre: "Leandro",
        raza: { label: "Perro", value: "Perro" },
        tipoAnimal: { label: "Tipo*", value: "tipo" },
        tamano: { label: "Chiquito", value: "Chiquito" },
        temperamentoConAnimales: { label: "Bueno", value: "Bueno" },
        temperamentoConPersonas: { label: "Malo", value: "Malo" },
        protectoraId: { label: "Protectora 1", value: 1 },
        ciudad: "Formosa 1780, Quilmes",
        mesAnioNacimiento: "2000-09-10",
        descripcion: "Un perro muy lindo",
        sexo: "Macho",
        fotos: ["https://firebasestorage.googleapis.com/v0/b/pagina-lg-simulacion.appspot.com/o/mascota.jfif?alt=media&token=de20c011-e973-4b51-9227-7a7bb37b679a"],
      });
    }
    GetGeneral("Protectoras", {}).then((protectoras) => {
      let combosProtectoras = protectoras.map((protectora) => ({ label: protectora.nombreProtectora, value: protectora.id }));
      setCombos({
        ...combos,
        protectoraId: combosProtectoras,
      });
    });
    /* return () => localStorage.removeItem("action"); */
  }, [id]);
  return (
    <div>
      <Modal show={modalShow} onHide={closeModal}>
        <FormDeletePet title="Dar de baja" onClose={closeModal} description={`¿Estás seguro de que querés dar de baja a ${petData.nombre}?`} />
      </Modal>
      <Formik enableReinitialize={true} initialValues={petData} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
        {({ handleSubmit, isSubmitting, errors, touched, setFieldValue, values }) => {
          const setCheckedLocal = (setFieldValue, key, value) => {
            setFieldValue("sexo", value);
            setchecked({ ...checked, [key]: !checked[key] });
          };
          return (
            <Form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
              {inputs.map((input, key) => (
                <Col xs={12} key={key}>
                  <Input type={input.type} name={input.name} placeholder={input.placeholder} />
                </Col>
              ))}
              {selects.map((select, key) => (
                <Col xs={12} key={key}>
                  <Select name={select.name} type={select.type} placeholder={select.placeholder} options={combos[select.name]} noOption={select.noOption} />
                </Col>
              ))}
              {inputs2.map((input, key) => (
                <Col xs={12} key={key}>
                  <Input type={input.type} name={input.name} placeholder={input.placeholder} />
                </Col>
              ))}
              <Row className="mt-2 mb-2">
                {checks.map((check, key) => (
                  <Col key={key} md={6} className="d-flex justify-content-center">
                    <Check onChange={(e) => setCheckedLocal(setFieldValue, key, e.target.value)} id={check.id} label={check.label} value={check.value} checked={checked[key]} type={check.type} name={check.name} />
                  </Col>
                ))}
                <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.sexo && touched.sexo && errors.sexo}</p>
              </Row>
              <Row>
                <UploadFile images={images} setImages={setImages} setError={setAlert} />
                <p className="text-danger m-0 p-0 fs-12 ms-2">{errors.fotos && touched.fotos && errors.fotos}</p>
                <Row className="d-flex">{images?.length ? <MyCarousel images={images} deleteImage={deleteImage} /> : null}</Row>
              </Row>
              {errorsMessages?.map((error, key) => (
                <Alert variant="danger" key={key}>
                  {error}
                </Alert>
              ))}
              <div dangerouslySetInnerHTML={{ __html: alert }}></div>
              {returnButtons(action)}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormPetPage;
