/** @format */

import React from "react";
// import Navbar from "../components/Navbar";
import {Link } from 'react-router-dom'

const Customers = ({ customers }) => {
  return (
    <>
      <div className='container'>
        {customers.map((customer) => {
          return (
            <Link to={`/customers/customer/${customer.id}`} className='d-block btn my-3 border p-2' key={customer.id}>
              <h3>{customer.name}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Customers;
