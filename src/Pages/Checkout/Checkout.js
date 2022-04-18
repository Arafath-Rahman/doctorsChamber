import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "./Checkout.css";

const Checkout = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCheckoutSubmit = (data) => {
    toast.success("Thank you for Booking!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
  };

  return (
    <div className="auth-container container d-flex flex-column w-50 border rounded-3 mb-5 p-5">
      <h2 className="text-center mb-5">Checkout</h2>
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
          type="password"
          {...register("password", {
            required: "*Password is required",
            minLength: {
              value: 6,
              message: "*Password must be at-least 6 characters long",
            },
          })}
          placeholder="Password"
          id="password"
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
