import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import avatar from "../../assets/images/avatar.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../../features/auth/authSlice";
import { getUser } from "../../api/setupAxios";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(null);
  const logOut = () => {
    dispatch(logoutAction());
    navigate("/");
  };
  const goHome = () => {
    let url = user.tipoRegistro.id === 1 ? "/home_shelter" : "/home"
    navigate(url);
  };

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ border: "none" }}>
              <BiMenuAltLeft style={{ fontSize: "35px" }} />
            </Navbar.Toggle>
            <Navbar.Brand onClick={goHome}>
              <img src={avatar} alt="" style={{ height: "35px" }} />
            </Navbar.Brand>
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Bienvenida {user?.nombre + " " + user?.apellido + "!"}</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-space-between align-items-center flex-grow-1 pe-3">
                  <p className="d-none d-lg-block" style={{ textAlign: "center", marginBottom: "0" }}>
                    Bienvenida {user.nombre + " " + user.apellido + "!"}
                  </p>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link onClick={goHome}>Home</Nav.Link>
                    <Nav.Link onClick={logOut}>logout</Nav.Link>
                  </Nav>
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
