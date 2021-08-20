/** @format */

import { useState,useEffect } from "react";

const Register = ({ setLogIn, registerUser, error,cleanError }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({
      firstName,
      lastName,
      email,
      password,
    });
  };

  useEffect(() => {
    return () => {        //CLEANUP | körs när komponenten blir unmounted
      console.log('cleaning')
      cleanError()
    }
  }, []) // eslint-disable-line
  return (
    <div className='card w-50'>
      <div className='card-header text-center'>
        <h1>Register</h1>
        <small className='text-danger'>{error}</small>
      </div>
      <div className='card-body p-4'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName'>FirstName:</label>
            <input
              type='text'
              className='form-control'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName'>lastName:</label>
            <input
              type='text'
              className='form-control'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
            Already a member?{" "}
            <span className='text-primary click' onClick={() => setLogIn(true)}>
              Sign In
            </span>
          </p>
          <button className='btn btn-primary w-100'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
