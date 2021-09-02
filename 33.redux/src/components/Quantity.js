/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions/quantityActions";

const Quantity = () => {
  const dispatch = useDispatch();
    const quantity = useSelector((state) => state.quantity);

  return (
    <div>
      <h1>Quantity={quantity}</h1>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(increment(10))}>+10</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
    </div>
  );
};

export default Quantity;
