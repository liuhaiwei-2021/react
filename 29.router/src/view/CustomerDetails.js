/** @format */

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomerDetails = ({ customers, setCustomerCallback, customer }) => {
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
        <div>
          <Link to={`/customers/customer/edit/${customer.id}`}>
            <i className='fas fa-edit'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
