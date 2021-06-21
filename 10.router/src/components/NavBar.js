/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import auth from "../services/AuthService";

const NavBar = () => {
  if (auth.isAuthenticated())
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            Management system
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='d-flex justify-content-between w-100'>
              <div className='navbar-nav '>
                <NavLink
                  to='/'
                  exact
                  className='nav-link '
                  activeClassName='active'
                  aria-current='page'>
                  Översikt
                </NavLink>
                <NavLink to='/cases' className='nav-link'>
                  Ärenden
                </NavLink>
                <NavLink to='/customers' className='nav-link'>
                  Kunden
                </NavLink>
              </div>
              <div className='navbar-nav'>
                <NavLink to='/setting' className='nav-link'>
                  <i className='fas fa-cog'></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  else return <></>;
};

export default NavBar;
