import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import Carrito from "./Carrito";


export default function Menu() {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">IL CIOCCOLATO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Información</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Helados</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Chocolates</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Franui</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Todos...</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link href="#InciarSesion">
        Iniciar sesion
      </Nav.Link>
      <Nav.Link eventKey={2} href="#Carrito">
        <Carrito/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}

