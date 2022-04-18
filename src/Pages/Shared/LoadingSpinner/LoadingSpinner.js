import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      style={{ height: "100vh" }}
      class="w-100 d-block d-flex justify-content-center"
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
