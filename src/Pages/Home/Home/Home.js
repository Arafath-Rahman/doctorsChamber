import React from "react";
import { Button } from "react-bootstrap";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container banner-bg pb-5 overflow-hidden">
        <div id="home" className="container row mx-auto mb-5">
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
                <Button
                  id="btn-appointment"
                  className="text-dark rounded-pill px-5 py-3 mt-3 border-0"
                >
                  Make Appointment
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="col col-md-5 order-md-2 order-1">
            <div className="mt-1">
              <img
                src={require("../../../Asset/images/bappi-1.png")}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>
      <Services></Services>
      <div>
      <h2 className="text-info text-center fw-bold text-decoration-underline">User Reviews</h2>
        <div>
        <div className="card mx-auto my-5" style={{ maxWidth: "400px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={require("../../../Asset/images/chamber-checkup.png")}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ahmed Alam</h5>
                <p className="card-text">
                  Bappi is an Amazing doctor. He listen your problem carefully and treat you well. Chamber Service Recommened.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto my-5" style={{ maxWidth: "400px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={require("../../../Asset/images/teaching.png")}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Shoriful Islam</h5>
                <p className="card-text">
                  I got admission in Medical after taking guidance from vaiya. He is an wonderful teacher and a great human being. Tuition Service Recommened.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto my-5" style={{ maxWidth: "400px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={require("../../../Asset/images/online-checkup.png")}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Miraz Faruk</h5>
                <p className="card-text">
                  In this corona pandemic i took his online service. He listen your problem carefully and treat you well. Online Service Recommened.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
