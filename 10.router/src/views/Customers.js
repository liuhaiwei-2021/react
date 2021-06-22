/** @format */

import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Customers = ({ customers }) => {
  return (
    <>
      <NavBar />
      <div className='container'>
        {customers.map((customer) => (
          <Link
            to={`customers/customer/${customer.id}`}
            key={customer.id}
            className='btn d-block border my-3'>
            <div>{customer.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Customers;
