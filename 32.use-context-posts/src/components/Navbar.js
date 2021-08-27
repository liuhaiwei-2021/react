/** @format */

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ title }) => {
  const { isLight, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLight ? dark : light;
  return (
    <nav className='navbar'>
      <div className='container d-flex justify-contents-between '>
        <Link to='/' className='nav-title'>
          <h1>{title}</h1>
        </Link>
        <ul className='nav-links d-flex  justify-contents-center '>
          <li>
            <NavLink exact to='/' activeClassName='active-link'>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/create' activeClassName='active-link'>
              NewPost
            </NavLink>
          </li>
          <button
            onClick={toggleTheme}
            className='btn btn-sm btn-dark shadow'
            style={{ background: theme.ui, color: theme.text }}>
            {isLight ? "Dark" : "Light"}
          </button>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Posts",
};
export default Navbar;
