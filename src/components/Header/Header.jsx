import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import avatar from '../../assets/images/avatar.png';
import { BiMenuAltLeft } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const goHome = () => {
    navigate("/home");
  };

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{border:'none'}}>
            <BiMenuAltLeft style={{fontSize:'35px'}} />
            </Navbar.Toggle>
            <Navbar.Brand href="#" ><img src={avatar} alt="" style={{height:'35px'}}/></Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Muma
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={goHome}>Home</Nav.Link>
                  <Nav.Link onClick={logOut}>logout</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;