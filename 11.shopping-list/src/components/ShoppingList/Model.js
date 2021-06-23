/** @format */

import React from "react";

const Model = ({ text, visiable }) => {
    const handleClick = (e) => {
      if (e.target === e.currentTarget) 
          visiable(false);
  };
  return (
    <div className='model' onClick={handleClick}>
      <div className='card'>
        <h3>{text}</h3>
        <button className='btn btn-delete'onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};

Model.defaultProps = {
  text: "Default text",
};
export default Model;
