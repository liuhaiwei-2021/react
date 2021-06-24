/** @format */

import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter1: state.counter1 + 1,
        counter2: state.counter2 + 1,
      };
    case "DECREMENT":
      return {
        counter1: state.counter1 - 1,
        counter2: state.counter2 - 1,
      };
    case "INCREMENTBY10":
      return {
        counter1: state.counter1 + 10,
        counter2: state.counter2 + 10,
      };
    default:
      return {
        counter1: state.counter1 ,
        counter2: state.counter2 ,
      };
  }
};

function Counter() {
  const [{counter1,counter2}, dispatch] = useReducer(reducer, {
    counter1: 1,
    counter2: 2,
  });

  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center'>
        <div>
          <small>useReducer</small>
          <h1>Counter1:{counter1}</h1>
          <h1>Counter2:{counter2}</h1>
          <div className='d-flex mt-5'>
            <button
              onClick={() => {
                dispatch({ type: "INCREMENT" });
              }}
              className='btn btn-outline-dark px-5 me-2'>
              +
            </button>
            <button
              onClick={() => {
                dispatch({ type: "DECREMENT" });
              }}
              className='btn btn-outline-dark px-5 me-2'>
              -
            </button>
            <button
              onClick={() => {
                dispatch({ type: "INCREMENTBY10" });
              }}
              className='btn btn-outline-dark px-5 me-2'>
              +10
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
