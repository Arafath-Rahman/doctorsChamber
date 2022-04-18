import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  return (
    <div className="">
      <div className="card" style={{ width: "18rem", height: "31rem" }}>
        <img
          src={img}
          style={{ width: "88%", height: "220px" }}
          className="card-img-top mx-auto rounded-3 border mt-3"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h4 className="card-title price">BDT. {price}</h4>
          <p className="card-text">
            <small>
              {description.length < 150
                ? description
                : description.slice(0, 150)+"..."}
            </small>
          </p>
        </div>
        <div className="card-footer">
          <Link
            className="btn text-decoration-none text-dark fw-bold"
            to={`/checkout/${name}`}
            id="btn-select"
          >
            Select Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
