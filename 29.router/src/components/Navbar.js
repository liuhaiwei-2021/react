/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow mb-5'>
      <div className='container'>
        <Link className='navbar-brand'>Management System</Link>
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
            <div className='navbar-nav'>
              <NavLink
                to='/'
                exact
                className='nav-link'
                activeClassName='active'>
                Översikt
              </NavLink>
              <NavLink
                to='/cases'
                exact
                className='nav-link'
                activeClassName='active'>
                Ärender
              </NavLink>
              <NavLink
                to='/customers'
                exact
                className='nav-link'
                activeClassName='active'>
                Kunder
              </NavLink>
            </div>
            <div className='navbar-nav'>
              <NavLink to='' exact className='nav-link' activeClassName='active'>
                <i className="fas fa-cog"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
