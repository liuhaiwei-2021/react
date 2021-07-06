/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../store/actions/authenticate";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(login());
    history.push("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <button onclick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
