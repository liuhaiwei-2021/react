/** @format */

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar({ title }) {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  return (
    <nav className='navbar'>
      <div className='container'>
        <Link to='/'>
          <h1>{title}</h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <NavLink exact to='/' activeClassName='active-link'>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/create' activeClassName='active-link'>
              Create
            </NavLink>
          </li>
          <button
            className='btn btn-dark'
            onClick={toggleTheme}
            style={{ color: theme.text, background: theme.ui }}>
            {isLightTheme ? "Dark" : "Light"}
          </button>
        </ul>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "En title",
};

export default Navbar;
