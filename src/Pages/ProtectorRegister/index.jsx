
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";



const validationSchema = Yup.object().shape({
  name: Yup.string()
  .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El nombre solo debe contener letras")
  .min(2, "El nombre debe tener al menos 2 caracteres")
  .max(50, "El nombre no puede tener más de 50 caracteres")
  .required("El campo Nombre es requerido"),
  raza: Yup.string() 
  .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "La raza solo debe contener letras")
  .min(4, "La raza debe tener al menos 4 caracteres")
  .max(50, "La raza no puede tener más de 50 caracteres"),
  tipoAnimal: Yup.string()
  .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El tipo de animal solo debe contener letras")
  .min(4, "El tipo de animal debe tener al menos 2 caracteres")
  .max(50, "El tipo de animal no puede tener más de 50 caracteres")
  .required("El campo tipo de animal es requerido"),
  tamaño: Yup.string().required("El tamaño es requerido"),
  caracterAnimales: Yup.string().required("Este campo es obligatorio"),
  caracterPersonas: Yup.string().required("Este campo es obligatorio"),
  nacimiento: Yup.date().required("La fecha de nacimiento es requerida"),
  genero: Yup.string().required("Debes seleccionar un género"),
  descripcion: Yup.string().optional(),
});

const ProtectorRegister = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [imagen, setImagen] = useState(null);

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));
    if (imagen) formData.append("imagen", imagen);

    try {
      const response = await axios.post(
        "http://localhost:8081/api/Mascotas/registro",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Animal agregado:", response.data);
      navigate("/"); 
    } catch (error) {
      console.error("Error al agregar animal:", error);
    }
  };

  return (
    <Container className="container-animal">
      <h2>Agregar animal</h2>
      <Formik
        initialValues={{
          nombre: "",
          raza: "",
          tipo: "",
          tamaño: "",
          caracterAnimales: "",
          caracterPersonas: "",
          nacimiento: "",
          genero: "",
          descripcion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit: formikHandleSubmit,
          isSubmitting,
        }) => (
          <Form ref={form} onSubmit={formikHandleSubmit} encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Nombre del animal*"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.nombre && touched.nombre}
              />
              <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="raza">
              <Form.Control
                type="text"
                name="raza"
                placeholder="Raza*"
                value={values.raza}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.raza && touched.raza}
              />
              <Form.Control.Feedback type="invalid">{errors.raza}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="tipo">
              <Form.Control
                as="select"
                name="tipo"
                value={values.tipo}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.tipo && touched.tipo}
              >
                <option value="">Tipo*</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.tipo}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="tamaño">
              <Form.Control
                as="select"
                name="tamaño"
                value={values.tamaño}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.tamaño && touched.tamaño}
              >
                <option value="">Tamaño*</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.tamaño}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="caracterAnimales">
              <Form.Control
                type="text"
                name="caracterAnimales"
                placeholder="Carácter con animales*"
                value={values.caracterAnimales}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.caracterAnimales && touched.caracterAnimales}
              />
              <Form.Control.Feedback type="invalid">
                {errors.caracterAnimales}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="caracterPersonas">
              <Form.Control
                type="text"
                name="caracterPersonas"
                placeholder="Carácter con personas*"
                value={values.caracterPersonas}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.caracterPersonas && touched.caracterPersonas}
              />
              <Form.Control.Feedback type="invalid">
                {errors.caracterPersonas}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="ubicacion">
              <Form.Control
                type="text"
                name="ubicacion"
                placeholder="Ubicación*"
                value={values.ubicacion}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.ubicacion && touched.ubicacion}
              />
              <Form.Control.Feedback type="invalid">{errors.ubicacion}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="nacimiento">
              <Form.Control
                type="date"
                name="nacimiento"
                value={values.nacimiento}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.nacimiento && touched.nacimiento}
              />
              <Form.Control.Feedback type="invalid">{errors.nacimiento}</Form.Control.Feedback>
            </Form.Group>

       

            <Form.Group className="mb-3" controlId="descripcion">
              <Form.Control
                as="textarea"
                name="descripcion"
                placeholder="Descripción"
                value={values.descripcion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                label="Macho"
                name="genero"
                value="Macho"
                onChange={handleChange}
                checked={values.genero === "Macho"}
              />
              <Form.Check
                type="radio"
                label="Hembra"
                name="genero"
                value="Hembra"
                onChange={handleChange}
                checked={values.genero === "Hembra"}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imagen">
              <Form.Label>Cargar imagen</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Agregar Animal
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default ProtectorRegister;