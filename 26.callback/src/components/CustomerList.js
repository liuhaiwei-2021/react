/** @format */

import React from "react";
import CustomerRow from "./CustomerRow";

const CustomerList = ({ customers,removeCustomerCallback }) => {
  return (
    <table className='table container'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <CustomerRow key={customer.id} customer={customer} removeCustomerCallback={removeCustomerCallback} />
        ))}
      </tbody>
    </table>
  );
};

export default CustomerList;
