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
        <NavLink to='/usereducer' exact className='nav-link'>
          useReducer-counter
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/todos' exact className='nav-link'>
          Todos
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/products' exact className='nav-link'>
          Products
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
