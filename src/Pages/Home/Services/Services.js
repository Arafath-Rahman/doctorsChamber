import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="my-5 text-center py-5">
      <h2 className="fs-3 fw-bold text-info text center">SERVICES: {services.length}</h2>
      <div className="container mx-auto mb-5 d-flex flex-column flex-md-row justify-content-md-around align-items-center gap-3">
        {
          services.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
