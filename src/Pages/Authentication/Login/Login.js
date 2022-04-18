import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="auth-container container d-flex flex-column w-50 border rounded-3 mb-5 p-5">
    <h2 className="text-center mb-5">Login</h2>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <input
          type="email"
          {...register("email", {
            required: "*Email is required",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: '*Provide an valid email'
            },
          })}
          placeholder="Email"
          id="email"
        />{" "}
        <br />
        <p className="p-error text-danger">{errors.email?.message}</p>
        <input
          type="password"
          {...register("password", {
            required: "*Password is required",
            minLength: {
              value: 6,
              message: "*Password must be atleast 6 characters long",
            },
          })}
          placeholder="Password"
          id="password"
        />{" "}
        <br />
        <p className="p-error text-danger">{errors.password?.message}</p>
        <p className="my-2">Need an account? <Link to='/signup'>SignUp here.</Link></p>
        <input type="submit" id="submit" value="Login" />
      </form>

    </div>
  );
};

export default Login;
