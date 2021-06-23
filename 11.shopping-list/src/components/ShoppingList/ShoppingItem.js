/** @format */

import React from "react";
import ShoppingItemTitle from "./ShoppingItemTitle";
import { useState } from "react";
import ChangeItem from "./ChangeItem";

const ShoppingItem = ({
  shopping,
  changeShoppingItem,
  toggleCompleteCallback,
  removeShoppingCallback,
}) => {
  const [change, setChange] = useState(false);
  const toggleChange = () => {
    setChange((prev) => !prev);
  };
  const changeShopping = (text) => {
    changeShoppingItem(shopping.id, text);
    setChange(false);
    };
    const handleDelete = () => {
        if(shopping.completed)
        removeShoppingCallback(shopping.id)        
    }
  return (
    <div className='shopping-item'>
      <div className='d-flex justify-content-between'>
        {change ? (
          <ChangeItem shopping={shopping} changeShopping={changeShopping} />
        ) : (
          <ShoppingItemTitle
            shopping={shopping}
            toggleCompleteCallback={toggleCompleteCallback}
          />
        )}

        <div>
          <button className='btn btn-change' onClick={toggleChange}>
            Change
          </button>
          <button
            className='btn btn-delete'
            onClick={handleDelete}>
            Delete
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
