import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

const Login = () => {
  const credentialSuccess = (response) => {
    console.log(response);
  };

  const credentialFailure = () => {
    console.log("Login Failed");
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} width="130px" alt="logo" />
        </div>
        <div className="shadow-2xl">
          <GoogleLogin
            // cookiePolicy={"single_host_origin"}
            // render={(renderProps) => (
            //   <button
            //     type="button"
            //     onClick={renderProps.onClick}
            //     disabled={renderProps.disabled}
            //     className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            //   >
            //     <FcGoogle className="mr-4" /> Sign in with Google
            //   </button>
            // )}
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            onSuccess={credentialSuccess}
            onError={credentialFailure}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
