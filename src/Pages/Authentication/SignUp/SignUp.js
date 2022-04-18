import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import Social from "../Social/Social";
import "./SignUp.css";

const SignUp = () => {
  let loadingElement;
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, signUpUser, signUpLoading, signUpError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUpSubmit = (data) => {
    const { name, email, password } = data;
    console.log(name, email, password);
    createUserWithEmailAndPassword(email, password);
  };
  
  if (signUpLoading) {
    loadingElement = <LoadingSpinner></LoadingSpinner>;
  }
  if (signUpUser) {
    toast.success('SignUp Successful.', {
      toastId: 'success1',
    });
    reset();
    navigate("/#home");
  }

  return (
    <div className="auth-container container d-flex flex-column w-50 border rounded-3 mb-5 p-5">
      {loadingElement}
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
        <p className="p-error text-danger">{errors.password?.message || signUpError?.message}</p>
        <p className="my-2">
          Already have an account? <Link to="/login">Login here.</Link>
        </p>
        {}
        <input type="submit" id="submit" value="SIGNUP" />
      </form>
      <div className="d-flex align-items-center justify-content-center mt-4">
        <div style={{height: '1px'}} className="bg-info w-25 mx-3"></div>
        <span>Or</span>
        <div style={{height: '1px'}} className="bg-info w-25 mx-3"></div>
      </div>
      <Social></Social>
    </div>
  );
};

export default SignUp;
