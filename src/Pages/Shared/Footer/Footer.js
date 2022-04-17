import React from "react";
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="h-25 w-100 bg-dark text-light text-center">
      <div className="container d-flex justify-content-between pt-3">
        <div className="">
          <p>Legal</p>
          <span>Privacy</span>
          <span>FAQs</span>
          <span>Pricing</span>
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
