/** @format */

import React from "react";
import { useHistory } from "react-router-dom";
import auth from "../services/AuthService";

const SignIn = () => {
    const history= useHistory()
    const handleSignIn = () => {
        auth.signIn(() => {
            if (history.location.state)
                history.push(history.location.state.from.pathname)
            else
                history.push('/')
        })
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
          <button onClick={ handleSignIn} className='btn btn-lg btn-outline-secondary'>Logga in</button>
    </div>
  );
};

export default SignIn;
