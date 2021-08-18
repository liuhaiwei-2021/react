/** @format */

import React from "react";
import auth from "../services/AuthServices";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory(); 
  const handleSignIn = () => {
    auth.signIn(() => {
      if (history.location.state)
        history.push(history.location.state.from.pathname);
      else history.push("/");
    });
  };
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <button onClick={handleSignIn} className='btn btn-light btn-lg'>
        LogIn
      </button>
    </div>
  );
};

export default SignIn;
