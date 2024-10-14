import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user.token, 'aca esta el token');

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <Container
      fluid
      className="d-flex vh-100 vw-100 bg-dark text-white align-items-center justify-content-center"
    >
      <Card bg="dark" text="white" className="p-4" style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Bienvenido al Home</Card.Title>
          <Card.Text className="text-center">
            Click para ir hacia el login:
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button onClick={goToLogin} variant="primary">
              Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
