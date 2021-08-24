/** @format */

import React from "react";

const Todos = () => {
  return (
    <div className='container mt-5'>
      {/* add form */}
      <div className='d-flex justify-content-center align-items-center'>
        <div class='card bg-light w-50'>
          <div class='card-body'>
            <form>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your Todo....'
              />
            </form>
          </div>
        </div>
      </div>

      {/* todo counter */}
      <div className='d-flex justify-content-center mt-2  text-muted'>
        <small>You currently have 0 todo!</small>
      </div>

      {/* todo list */}
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <ul class='list-group w-75'>
          <li class='list-group-item d-flex justify-content-between align-items-center'>
            A list item
            <div className='d-flex justify-content-center'>
              <span class='badge bg-primary rounded-pill'>1 minutes ago</span>
              <i className='ms-4 fas fa-trash'></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todos;
