/** @format */

import { useState, useEffect } from "react";

const LoginForm = ({ setLogIn, loginUser, error, cleanError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email,
      password,
    });
  };

  useEffect(() => {
    return () => {
      //CLEANUP | körs när komponenten blir unmounted
      console.log("cleaning");
      cleanError();
    };
  }, []); // eslint-disable-line

  return (
    <div className='card'>
      <div className='card-header text-center'>
        <h1>Log In</h1>
        <small className='text-danger'>{error}</small>
      </div>
      <div className='card-body p-4'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password:</label>
            <input
              type='paddword'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Not a member?
            <span
              className='text-primary click'
              onClick={() => setLogIn(false)}>
              Register
            </span>
          </p>
          <button className='btn btn-primary w-100'>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
