/** @format */

import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const reducer = (state, action) => {
  switch (action.type) {
    case "add-product":
      return {
        products: [
          { id: uuidv4(), text: action.payload, created: new Date() },
          ...state.products,
        ],
      };
    case "remove-product":
      return {
        products: state.products.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};

function Products() {
  const [{ products }, dispatch] = useReducer(reducer, {
    products: [],
  });
  const [input, setInput] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    dispatch({ type: "add-product", payload: input });
    setInput("");
  };
  return (
    <div className='container'>
      {/* Add products form */}
      <div className='d-flex justify-content-center'>
        <div className='card shadow bg-light w-50'>
          <div className='card-body'>
            <form onSubmit={addProduct}>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className='form-control'
                placeholder='Enter your product text...'></input>
            </form>
          </div>
        </div>
      </div>

      {/* Todos counter */}
      <div className='d-flex justify-content-center mt-2'>
        <small className='text-muted'>
          {products.length > 0
            ? `You currently have ${products.length} products!`
            : "You currently have 0 products!"}
        </small>
      </div>

      {/* Todos list */}
      <div className='d-flex justify-content-center mt-5 '>
        <ul className='list-group w-75'>
          {products.map((product) => (
            <li
              key={product.id}
              className='list-group-item d-flex justify-content-between align-items-center'>
              {product.text}
              <div>
                <span className='badge bg-secondary rounded-pill'>
                  1 minutes ago{" "}
                </span>
                <i
                  onClick={() =>
                    dispatch({ type: "remove-product", payload: product.id })
                  }
                  className='fas fa-trash ms-4 remove'></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;

