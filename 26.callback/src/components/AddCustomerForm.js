/** @format */

import { useState, useRef } from "react";

const AddCustomerForm = ({ addCustomerCallback }) => {
  const customerName = useRef();
  const [name, setName] = useState("");

  const addCustomer = (e) => {
    e.preventDefault();
    if (name === "") return;
    addCustomerCallback(name);
    setName("");
    customerName.current.focus();
  };

  return (
    <form className='container py-5 my-2'>
      <h4 className='text-center mb-4'>Add a new customer</h4>
      <div className='row'>
        <div className='col-md-6b mx-auto'>
          <div className='input-group'>
            <input
              ref={customerName}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='form-control'
              placeholder='Add your customer name'
            />
            <button onClick={addCustomer} className='btn btn-primary'>
              ADD
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCustomerForm;
