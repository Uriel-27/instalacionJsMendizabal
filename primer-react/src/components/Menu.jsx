import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import CartWidget from "./CartWidget";


export default function Menu() {
    return (
        <>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">IL CIOCCOLATO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Información</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Helados</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Chocolates</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Franui</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Todos...</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav.Link className="text-right" eventKey={2} href="#link">
        Iniciar sesion
        <CartWidget/>
      </Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}