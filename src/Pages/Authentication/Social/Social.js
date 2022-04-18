import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import "./Social.css";

const Social = () => {
  let loadinElement;
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleSignInUser, googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth, { sendEmailVerification: true });
  // const [signInWithGithub, githubSignInUser, githubSignInLoading, githubSignInError] = useSignInWithGithub(auth);
  // const [signInWithFacebook, facebookSignInUser, facebookSignInLoading, facebookSignInError] = useSignInWithFacebook(auth);

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  }
  // const handleGithubSignIn = () => {
  //   signInWithGithub();
  // }
  // const handleFacebookSignIn = () => {
  //   signInWithFacebook();
  // }

  if(googleSignInUser){
    toast.success('Login Successful.', {
      toastId: 'success1',
    });
    navigate(from, { replace: true });
  }

  if(googleSignInError) {
    toast.error(googleSignInError?.message, {
      toastId: 'success1',
    });
  }

  if(googleSignInLoading){
    loadinElement = <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="my-4 d-flex flex-column mx-auto w-100 align-items-center">
      {loadinElement}
      <div onClick={handleGoogleSignIn} className="btn d-flex align-items-center justify-content-center gap-1 fw-bold rounded-pill w-50 border mb-2 py-1 btn-social-google">
        <img src={require("../../../Asset/images/icons/google.png")} alt="" />
        <span>SignIn with Google</span>
      </div>
      {/* <div onClick={handleGithubSignIn} className="btn d-flex align-items-center justify-content-center gap-1 fw-bold rounded-pill w-50 border mb-2 py-1 btn-social-github">
        <img src={require("../../../Asset/images/icons/github.png")} alt="" />
        <span>SignIn with Github</span>
      </div>
      <div onClick={handleFacebookSignIn} className="btn d-flex align-items-center justify-content-center gap-1 fw-bold rounded-pill w-50 border mb-2 py-1 btn-social-facebook">
        <img src={require("../../../Asset/images/icons/facebook.png")} alt="" />
        <span>SignIn with Facebook</span>
      </div> */}
    </div>
  );
};

export default Social;