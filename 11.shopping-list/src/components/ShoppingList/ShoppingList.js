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
  );
};

export default ShoppingList;
