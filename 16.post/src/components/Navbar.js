/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className='navbar'>
      <div className='container'>
        <Link to='/'>
          <h1>{title}</h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <NavLink exact to='/' activeClassName="active-link">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/create' activeClassName="active-link">
              Create
            </NavLink>
          </li>
          <button className='btn btn-dark'>Dark</button>
        </ul>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "En title",
};

export default Navbar;
