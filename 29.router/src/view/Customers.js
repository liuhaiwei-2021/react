/** @format */

import React from "react";
// import Navbar from "../components/Navbar";

const Customers = ({ customers }) => {
  return (
    <>
      <div className='container'>
        {customers.map((customer) => {
          return (
            <div className='my-3 border p-2'>
              <h3>{customer.name}</h3>
              <p>Nr: {customer.id}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Customers;
