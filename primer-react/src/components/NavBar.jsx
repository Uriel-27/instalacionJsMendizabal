import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget"; 
import { Link } from "react-router-dom";

export default function NavBar() {

  const linkStyle = {
    textDecoration: "none",
    color: "cyan",
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to={`/`} style={linkStyle}>Il Cioccolato</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link to={`/category/chocolates`} style={linkStyle}> Chocolates </Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={`/category/bebidas`} style={linkStyle}>Bebidas</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={`/category/helados`} style={linkStyle}>Helados</Link></NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Iniciar sesión</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                <CartWidget />
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}