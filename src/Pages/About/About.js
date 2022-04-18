import React from "react";
import "./About.css";

const About = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="container mx-auto border mb-5"
    >
      <h2 className="text-center my-3 text-decoration-underline fw-bold text-info">
        About Me
      </h2>
      <div className="">
        <div className="card mx-auto my-5" style={{ maxWidth: "600px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={require("../../Asset/images/bappi-1.png")}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mohammad Nazmush Shakib Bappi</h5>
                <p className="card-text">
                  I am Mohammad Nazmush Shakib Bappi, completed my MBBS degree
                  from the renowned medical college of Bangladesh named "Sir
                  Salimullah Medical College (SSMC)". Currently I'm doing my
                  internship over there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className=" font-monospace text-center my-5 fw-light text-success text-decoration-underline">
          About the Developer
        </h3>
      </div>
      <div className="card mx-auto my-5" style={{ maxWidth: "600px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={require("../../Asset/images/developer.png")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Md. Arafath Rahman Khan</h5>
              <p className="card-text">
                I have recently graduated in BSc in CSE from United International University. Currently I'm doing a bootcamp "Complete Web Development with Jhankar Mahbub". I dream to be a full stack web Developer. In programming hero they are very helpful and supportive. Their content and teaching pattern is beyond upto the mark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
