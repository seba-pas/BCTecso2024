import Isologo from "../../assets/images/icons/Isologo.jpg";
import { Container, Col, Row, Image } from "react-bootstrap";
import {Formik} from "formik";
const RegistroDeMascotero = () => {
  const valueManagement = () =>{
    const errors = {}
    let regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if(!values.email) errors.email = "Campo requerido";
    else if(regex.test(values.email)) errors.email = "Ingresá un correo válido";
    else if(!values.name_and_lastname)
  }
  return (
    <Container as="div" className="vh-100">
      <Row>
        <Col>
          <Image src={Isologo} alt="Isologo" />
        </Col>
        <Col>
          <Formik
          initialValues={{email:"",password:"",name_and_lastname:""}}
          validate={values=>valueManagement(values)}
          >

          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistroDeMascotero;
