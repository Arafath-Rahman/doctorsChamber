import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  
  return (
    <div className="header-bg bg-transparent">
      <Navbar
        className="color-nav top-3 header-bg fixed-top"
        variant="light"
        expand={"lg"}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center gap-2 fw-bolder text-dark"
          >
            <img
              alt=""
              src={require("../../../Asset/images/logo-2.png")}
              height="40"
              className="d-inline-block align-top rounded-3"
            />{" "}
            BAPPI's CHAMBER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-center">
            <Nav className="ms-auto">
              <CustomLink className="text-dark me-3 " to="/">
                Home
              </CustomLink>
              <CustomLink className="text-dark me-3 " to="services">
                Services
              </CustomLink>
              <CustomLink className="text-dark me-3 " to="blogs">
                Blogs
              </CustomLink>
              <CustomLink className="text-dark me-3 " to="about">
                About
              </CustomLink>
              <CustomLink className="text-dark me-3 " to="checkout">
                Checkout
              </CustomLink>
            </Nav>
            <Nav className="d-flex align-items-start gap-2">
              <div className="vr bg-white border border-dark border-2 d-none d-md-block me-2" />
              <div className="d-flex justify-content-center align-items-center mx-auto gap-2">
                {
                  user ? <Link onClick={()=> signOut(auth)} className="text-dark text-decoration-none btn rounded-pill" to="login" id='btn-login'>
                  Sign Out
                </Link> : <Link className="text-dark text-decoration-none btn rounded-pill" to="login" id='btn-login'>
                  Login
                </Link>
                }
                <img
                  alt=""
                  src={require("../../../Asset/images/user.png")}
                  height="40"
                  className="d-inline-block align-top"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Outlet />
      </Navbar>
    </div>
  );
};

export default Header;
