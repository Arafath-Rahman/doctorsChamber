import React from "react";
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="h-auto w-100 bg-dark text-light text-center pb-2">
      <div className="container d-flex justify-content-between pt-3">
        <div className="d-flex flex-column align-items-start ">
          <p className="fw-bold fs-5 m-0 text-decoration-underline">Legal</p>
          <Link to='/' className="text-white text-decoration-none me-2">Privacy</Link>
          <Link to='/' className="text-white text-decoration-none me-2">FAQs</Link>
          <Link to='/' className="text-white text-decoration-none me-2">Pricing</Link>
        </div>
        <div>
          <button className="btn btn-outline-light border border-1 rounded-pill me-2">
            <Instagram color="#bc2a8d" size={17}></Instagram>
          </button>
          <button className="btn btn-outline-light border border-1 rounded-pill me-2">
            <Facebook color="#3b5998" size={17}></Facebook>
          </button>
          <button className="btn btn-outline-light border border-1 rounded-pill me-2">
            <Youtube color="#c4302b" size={17}></Youtube>
          </button>
        </div>
      </div>
      <hr className="container mx-auto " />
      <p className="mx-auto">
        &copy; {new Date().getFullYear()} | Bappi's Chamber. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
