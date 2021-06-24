/** @format */

import React from "react";

function Todos() {
  return (
    <div className='container'>
      {/* Add todos form */}
      <div className='d-flex justify-content-center'>
        <div className='card shadow bg-light w-50'>
          <div className='card-body'>
            <form>
              <input
                className='form-control'
                placeholder='Enter your todo text...'></input>
            </form>
          </div>
        </div>
      </div>

      {/* Todos counter */}
      <div className='d-flex justify-content-center mt-2'>
        <small className='text-muted'>You currently have 0 todos!</small>
      </div>

      {/* Todos list */}
      <div className='d-flex justify-content-center mt-5 '>
      <ul class='list-group w-75'>
        <li class='list-group-item d-flex justify-content-between align-items-center'>
          A list item
          <div>
            <span class='badge bg-secondary rounded-pill'>1 minutes ago</span>
            <i className='fas fa-trash ms-4 remove'></i>
          </div>
        </li>
          </ul>
          </div>  
    </div>
  );
}

export default Todos;
