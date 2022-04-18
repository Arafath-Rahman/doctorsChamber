import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="container mx-auto mb-5"
    >
      <div>
        <h1 className="text-center fw-bold text-danger">
          404 - Not Found
        </h1>
        <div className="text-center">
          <img className="w-50" src={require('../../../Asset/images/NotFound.jpg')} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
