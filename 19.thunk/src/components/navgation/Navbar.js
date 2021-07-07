/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useState } from "react";

const Navbar = () => {
  const isAuth = useSelector(state=>state.auth.isAuthenticated)

    // const [isAuth, setIsAuth] = useState(false)
  return (
    <nav className='navbar'>
      <div className='container'>
        <NavLink exact to='/' className='nav-brand'>
          LOGO
        </NavLink>
        <ul className="nav-links">
          <li><NavLink exact to='/' className='nav-link' activeClassName='active-link'>News</NavLink></li>
                  {
                      isAuth
                      ? <li><NavLink exact to='/creat ' className='nav-link'  activeClassName='active-link'>Creat</NavLink></li>
                      : <li><NavLink exact to='/login'  className='nav-link'  activeClassName='active-link'>Login</NavLink></li>
                  }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
