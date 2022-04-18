import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUpSubmit = (data) => {
    const { name, email, password } =  data;
    console.log(name, email, password);
    createUserWithEmailAndPassword(email, password);
    if (user) {
      toast.success('Signup Successful!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        reset();
    }
    
  };

  return (
    <div className="auth-container container d-flex flex-column w-50 border rounded-3 mb-5 p-5">
      <h2 className="text-center mb-5">SignUp</h2>
      <form onSubmit={handleSubmit(onSignUpSubmit)}>
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
        <p className="p-error text-danger">{errors.email?.message}</p>
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
        <p className="p-error text-danger">{errors.password?.message}</p>
        <p className="my-2">
          Already have an account? <Link to="/login">Login here.</Link>
        </p>
        <input type="submit" id="submit" value="SIGNUP" />
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

export default SignUp;
