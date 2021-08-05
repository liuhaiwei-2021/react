/** @format */

import React from "react";

const Navbar = ({title}) => {
  return (
    <nav className='navbar navbar-dark  bg-primary'>
      <div className='container-fluid'>
              <span className='navbar-brand mx-auto'>{title}</span>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
    title: 'React APP'
}

export default Navbar;
