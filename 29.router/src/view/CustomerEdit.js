/** @format */

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomerEdit = ({ customer, setCustomerCallback }) => {
  const { id } = useParams();

  useEffect(() => {
    setCustomerCallback(id);
  });

  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <div>
          <h1>{customer.name}</h1>
          <small>Kundnr. {customer.id}</small>
        </div>
      </div>
    </div>
  );
};

export default CustomerEdit;
