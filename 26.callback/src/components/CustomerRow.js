/** @format */

import React from "react";

const CustomerRow = ({ customer, removeCustomerCallback }) => {
  return (
    <tr>
      <th scope='row'>{customer.id}</th>
      <td>{customer.name}</td>
      <td>
        <button
          onClick={() => removeCustomerCallback(customer.id)}
          className='btn btn-danger btn-sm'>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CustomerRow;
