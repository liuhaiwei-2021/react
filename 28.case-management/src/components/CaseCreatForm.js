/** @format */

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CaseCreatForm = ({ categories, customers, addCaseCallback }) => {
  const [category, setCategory] = useState("0");
  const [customer, setCustomer] = useState("0");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleClear = () => {
    setCategory("0");
    setCustomer("0");
    setSubject("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      category !== "" &&
      customer !== "" &&
      subject !== "" &&
      description !== ""
    ) {
      let _case = {
        id: uuidv4(),
        category,
        customer,
        subject,
        description,
        created,
      };
      addCaseCallback(_case);
    }
    handleClear();

  };

  return (
    <div className='case-create-form card shadow'>
      <div className='card-body'>
        <form className='m-3'>
          <h4 className='mb-4 display-6 title'>Create New Case</h4>
          {/* category */}
          <div className='mb-3'>
            <select
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='form-select text-muted'>
              <option value='0'>Select a category...</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {/* customer */}
          <div className='mb-3'>
            <select
              id='customer'
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className='form-select text-muted'>
              <option value='0'>Select a custom...</option>
              {customers.map((customer) => (
                <option key={customer.value} value={customer.value}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
          {/* subject */}
          <div className='mb-3'>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              id='subject'
              type='text'
              className='form-control'
              placeholder='Enter a subject...'
            />
          </div>
          {/* description */}
          <div className='mb-3'>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id='description'
              className='form-control form-textarea'
              placeholder='Enter a description'></textarea>
          </div>
          <div className='d-flex gap-2 justify-content-end'>
            <button onClick={handleClear} type='reset' className='btn btn-link'>
              Clear
            </button>
            <button
              onClick={handleSubmit}
              type='submit'
              className='btn btn-secondary'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseCreatForm;
