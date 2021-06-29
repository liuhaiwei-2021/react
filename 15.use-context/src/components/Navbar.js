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
          Props
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
