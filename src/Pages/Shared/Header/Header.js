import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar className="color-nav" variant="light" expand={"md"}>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 fw-bolder text-dark">
            <img
              alt=""
              src={require('../../../Asset/images/logo-2.png')}
              height="40"
              className="d-inline-block align-top rounded-3"
            />{" "}
            BAPPI's CHAMBER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" mx-auto ">
              <Nav.Link className="me-3" href="#home" active={true}>Home</Nav.Link>
              <Nav.Link className="me-3" href="#services">Services</Nav.Link>
              <Nav.Link className="me-3" href="#about">About</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-start gap-2">
              <div className="vr bg-white d-sm-none d-md-block me-2" />
              <Nav.Link href="#login">Login</Nav.Link>
              <img
              alt=""
              src={require('../../../Asset/images/user.png')}
              height="40"
              className="d-inline-block align-top"
            />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
