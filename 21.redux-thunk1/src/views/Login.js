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
    try {
      history.push(history.location.state.from.pathname);
    } catch {
      history.push("/");
    }
  };
  return (
    <div>
      <h1>Log In</h1>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default Login;
