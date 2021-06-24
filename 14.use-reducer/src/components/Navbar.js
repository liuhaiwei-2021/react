/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul
      className='nav justify-content-center align-items-center bg-light shadow mb-5 '
      style={{ height: "50px" }}>
      <li className='nav-item'>
        <NavLink to='/' className='nav-link' exact activeClassName='active'>
          useState-counter
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/usereducer' exact className='nav-link' exact>
          useReducer-counter
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/todos' exact className='nav-link' exact>
          useReducer-todos
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
