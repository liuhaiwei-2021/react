/** @format */

import React from "react";
import ShoppingItemTitle from "./ShoppingItemTitle";
import { useState } from "react";
import ChangeItem from "./ChangeItem";
import Model from "./Model";

const ShoppingItem = ({
  shopping,
  changeShoppingItem,
  toggleCompleteCallback,
  removeShoppingCallback,
}) => {
  const [change, setChange] = useState(false);
  const [model, setmodel] = useState(false);
  const toggleChange = () => {
    setChange((prev) => !prev);
  };
  const changeShopping = (text) => {
    changeShoppingItem(shopping.id, text);
    setChange(false);
  };
  const handleDelete = () => {
    if (shopping.completed) {
      removeShoppingCallback(shopping.id);
    }     
    setmodel(true);
  };
  return (
    <>
      <div className='shopping-item d-flex justify-content-between'>
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
          <button className='btn btn-delete' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {model && <Model text='you must buy the item first' visiable={setmodel} />}
    </>
  );
};

export default ShoppingItem;
