/** @format */

import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({
  shoppingList,
  changeShoppingItem,
  toggleCompleteCallback,
  removeShoppingCallback,
}) => {
  return (
    <div className='container'>
      <div className='shopping-list'>
        {shoppingList.map((shopping) => (
          <ShoppingItem
            key={shopping.id}
            shopping={shopping}
            changeShoppingItem={changeShoppingItem}
            toggleCompleteCallback={toggleCompleteCallback}
            removeShoppingCallback={removeShoppingCallback}
          />
        ))}
      </div>
      {!shoppingList.length && (
        <h2 className='shopping-item text-center'>No shopping item left!</h2>
      )}
    </div>
  );
};

export default ShoppingList;
