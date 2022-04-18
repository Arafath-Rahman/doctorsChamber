import React from "react";
import { Button } from "react-bootstrap";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner-bg pb-5">
        <div className="container row mx-auto mb-5">
          <div className="col col-md-7 mt-3 mt-md-0 order-md-1 order-2 d-flex flex-column align-items-center justify-content-end">
            <div className="">
              <p className="fs-3 text-muted fw-light mb-0">
                I am here for you.
              </p>
              <h1 className="fs-1 text-wrap fw-bolder text-info mb-3">
                Your Health is my Priority
              </h1>
              <p className="m">
                <small>
                  I am Mohammad Nazmush Shakib Bappi, completed my MBBS degree
                  from the renowned medical college of Bangladesh named "Sir
                  Salimullah Medical College (SSMC)". Currently I'm doing my
                  internship over there.
                </small>
              </p>
              <div className="text-center">
                <Button id='btn-appointment' className="text-dark rounded-pill px-5 py-3 mt-3 border-0">Make Appointment</Button>{" "}
              </div>
            </div>
          </div>
          <div className="col col-md-5 order-md-2 order-1">
            <div className="mt-1">
              <img src={require("../../../Asset/images/bappi-1.png")} alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
