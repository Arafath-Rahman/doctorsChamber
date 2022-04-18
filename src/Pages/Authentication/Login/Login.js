import React from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  let loadingElement;
  // const [email, setEmail] = useState('');
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = async ({ email, password }) => {
    await signInWithEmailAndPassword(email, password);
    await reset();
  };

  if (signInLoading) {
    loadingElement = <LoadingSpinner></LoadingSpinner>;
  }

  if (signInUser) {
    toast.success("Login Successful.", {
      toastId: "success1",
    });
    navigate(from, { replace: true });
  }

  const handleResetPassword = async () => {
    const email = document.getElementById("email").value;
    if (email === "") {
      toast("Provide an email first.");
      return;
    }
    await sendPasswordResetEmail(email);
    toast('Password reset link sent to email.');
    await reset();
  };

  return (
    <div className="auth-container container d-flex flex-column w-50 border rounded-3 mb-5 p-5">
      {loadingElement || ""}
      <h2 className="text-center mb-5">Login</h2>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
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
              message: "*Password must be atleast 6 characters long",
            },
          })}
          placeholder="Password"
          id="password"
        />{" "}
        <br />
        <p className="p-error text-danger">
          {errors.password?.message || signInError?.message}
        </p>
        <p className="my-2">
          Need an account? <Link to="/signup">SignUp here.</Link>
        </p>
        <p className="my-2">
          Forgot Password?
          <button onClick={handleResetPassword} className="btn btn-link">
            Reset Now.
          </button>
        </p>
        <input type="submit" id="submit" value="Login" />
      </form>
      <div className="d-flex align-items-center justify-content-center mt-4">
        <div style={{ height: "1px" }} className="bg-info w-25 mx-3"></div>
        <span>Or</span>
        <div style={{ height: "1px" }} className="bg-info w-25 mx-3"></div>
      </div>
      <Social></Social>
    </div>
  );
};

export default Login;
