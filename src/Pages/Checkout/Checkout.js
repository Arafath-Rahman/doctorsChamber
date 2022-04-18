import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./Checkout.css";

const Checkout = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const onCheckoutSubmit = async (data) => {
    toast.success("Thank you for Booking!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    await reset();
    navigate('/')
  };

  return (
    <div className="auth-container container d-flex flex-column w-50 border rounded-3 mb-5 p-5">
      <h2 className="text-center mb-5">Checkout : {serviceName || "Select a Service"}</h2>
      <form onSubmit={handleSubmit(onCheckoutSubmit)}>
        <input
          type="text"
          {...register("name")}
          placeholder="Your Name"
          id="name"
        />{" "}
        <br />
        <input
          type="email"
          {...register("email", {
            required: "*Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "*Provide an valid email",
            },
          })}
          placeholder="Email"
          id="email"
        />{" "}
        <br />
        <input
          type="text"
          {...register("address")}
          placeholder="Your Address"
          id="name"
        />{" "}
        <br />
        <input type="submit" id="submit" value="Book Now" />
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Checkout;
