/** @format */

import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import Register from "../components/Register";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";

const Login = ({ setUser, userToken }) => {
  const [logIn, setLogIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const history = useHistory();

  const cleanError = () => {
    setError(undefined);
  };

  const registerUser = (user) => {
    setLoading(true);
    axios
      .post("http://localhost:3000/register", user)
      .then((res) => {
        setTimeout(() => {
          setUser(res.data.accessToken);
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  const loginUser = (user) => {
    setLoading(true);
    axios
      .post("http://localhost:3000/login", user)
      .then((res) => {
        setTimeout(() => {
          setUser(res.data.accessToken);
          setLoading(false);
        }, 500);
        history.push("/posts");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (userToken) {
      try {
        history.push(history.location.state.from.pathname);
      } catch {
        history.push("/home");
      }
    }
  }, [userToken, history]);

  return (
    <div className='wrapper bg-primary d-flex justify-content-center align-items-center'>
      {logIn ? (
        <LoginForm
          setLogIn={setLogIn}
          error={error}
          cleanError={cleanError}
          loginUser={loginUser}
        />
      ) : (
        <Register
          setLogIn={setLogIn}
          error={error}
          cleanError={cleanError}
          registerUser={registerUser}
        />
      )}
      {loading && <Loading />}
    </div>
  );
};

export default Login;
