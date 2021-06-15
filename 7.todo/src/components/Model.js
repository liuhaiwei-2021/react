/** @format */

import React from "react";

const Model = ({ text, visible }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) visible(false);
  };
  return (
    <div className='model' onClick={handleClick}>
      <div className='card'>
        <h3>{text}</h3>
        <button className='btn delete-btn' onClick={handleClick}>
          CLOSE
        </button>
      </div>
    </div>
  );
};
Model.defaultProps = {
  text: "yammy text",
};

export default Model;
