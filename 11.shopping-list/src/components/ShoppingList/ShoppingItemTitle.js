/** @format */

import React from "react";

const ShoppingItemTitle = ({ shopping, toggleCompleteCallback }) => {
  return (
    <div>
      <h4
        onClick={() => toggleCompleteCallback(shopping.id)}
        className={`shopping-title ${shopping.completed ? "complete" : ""}`}
        key={shopping.id}>
        {shopping.title}
      </h4>
    </div>
  );
};

export default ShoppingItemTitle;
