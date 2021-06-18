/** @format */

import React from "react";
import "./CaseCreateForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CaseCreateForm = ({ categories, customers, callback }) => {
  const [category, setCategory] = useState("2");
  const [customer, setCustomer] = useState("2");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleClear = () => {
    setCategory("1");
    setCustomer("2");
    setSubject("");
    setDescription("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //   Current time
    let today = new Date();
    let year = today.getFullYear();
    let month =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    let date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    let hour =
      today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    let mins =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    let sec =
      today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    let created = `${year}-${month}-${date} ${hour}:${mins}:${sec}`;
    if (
      category !== "0" &&
      customer !== "0" &&
      subject !== "" &&
      description !== ""
    ) {
      const _case = {
        id: uuidv4(),
        category,
        customer,
        subject,
        description,
        created,
      };
      callback(_case);
      handleClear();
    }
  };
  return (
    <div className='case-create-form card shadow'>
      <div className='card-body'>
        <form className='m-3'>
          <h4 className='mb-3 title text-muted'>Create case </h4>
          <div className='mb-3'>
            <select
              id='category'
              className='form-select text-muted'
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value='0'>Select a category...</option>
              {categories.map((category) => (
                <option value={category.value} key={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-3'>
            <select
              id='customer'
              value={customer}
              className='form-select text-muted'
              onChange={(e) => setCustomer(e.target.value)}>
              <option value='0'>Select a customer...</option>
              {customers.map((customer) => (
                <option value={customer.id} key={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-3'>
            <input
              onChange={(e) => setSubject(e.target.value)}
              id='subject'
              value={subject}
              type='text'
              className='form-control mb-3'
              placeholder='Enter a subjuct'></input>
          </div>
          <div className='mb-3'>
            <input
              onChange={(e) => setDescription(e.target.value)}
              id='description'
              value={description}
              type='textera'
              className='form-textera form-control mb-3'
              placeholder='Enter your description...'></input>
          </div>
          <div className='d-flex gap-2 justify-content-end form-control border-0 '>
            <button onClick={handleClear} type='reset' className='btn btn-link'>
              Clear
            </button>
            <button
              onClick={handleSubmit}
              type='submit'
              className='btn btn-secondary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseCreateForm;
