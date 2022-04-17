import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="my-5 text-center pb-5 pt-5">
      <h2 className="fs-3 fw-bold text-info text center">SERVICES</h2>
      <div className="container mx-auto mb-5">
        <div className="card-group">
          <div className="card">
            <img src={require('../../../Asset/images/online-checkup.png')} className="card-img-top p-2 rounded w-75 mx-auto" alt="service" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-info w-100 rounded-pill fw-bold ">Select Service</button>
            </div>
          </div>
          <div className="card">
            <img src={require('../../../Asset/images/chamber-checkup.png')} className="card-img-top p-2 rounded w-75 mx-auto" alt="service" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-info w-100 rounded-pill fw-bold ">Select Service</button>
            </div>
          </div>
          <div className="card">
            <img src={require('../../../Asset/images/teaching.png')} className="card-img-top p-2  rounded w-75 mx-auto" alt="service" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-info w-100 rounded-pill fw-bold ">Select Service</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
