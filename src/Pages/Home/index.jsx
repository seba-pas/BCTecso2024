import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../auth/authSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);

  const handleLogOut = () => {
    dispatch(logout());  
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <Container
      fluid className="d-flex justify-content-center align-items-center"
    >
      <Card bg="dark" text="white" className="p-4" style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Bienvenido al Home</Card.Title>
          <Card.Text className="text-center">
            Click para cerrar sesión:
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button onClick={handleLogOut} variant="primary">
              Logout
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
