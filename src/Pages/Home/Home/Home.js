import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner-bg">
        <div className="container row mx-auto">
          <div className="col col-md-7 mt-3 mt-md-0 order-md-1 order-2 d-flex flex-column align-items-center justify-content-center">
            <div className="">
              <p className="fs-3 text-muted fw-light mb-0">
                I am here for you.
              </p>
              <h1 className="fs-1 text-wrap fw-bolder text-info mb-3">
                Your Health is my Priority
              </h1>
              <p>
                <small>
                  I am Mohammad Nazmush Shakib Bappi, completed my MBBS degree
                  from the renowned medical college of Bangladesh named "Sir
                  Salimullah Medical College (SSMC)". Currently I'm doing my
                  internship over there.
                </small>
              </p>
              <div className="text-center">
                <Button className="fw-bold rounded-pill px-3 py-2" variant="outline-success">Make Appointment</Button>{" "}
              </div>
            </div>
          </div>
          <div className="col col-md-5 order-md-2 order-1">
            <div className="banner-img-bg">
              <img src={require("../../../Asset/images/bappi-1.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <p>Page Content..</p>
    </div>
  );
};

export default Home;
