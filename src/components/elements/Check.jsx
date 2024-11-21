import { Form } from "react-bootstrap";
import { useField } from "formik";

const Check = (props) => {
  const [field] = useField(props);
  return <Form.Check type={props.type} id={props.id} label={props.label} checked={props.checked} onChange={props.onChange} {...field} />;
};

export default Check;
