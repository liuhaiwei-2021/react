/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authenticate";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = () => {
    dispatch(login());
    history.push("/");
  };
  return (
    <div>
      <h1>Log In</h1>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default Login;
