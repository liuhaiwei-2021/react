/** @format */

import React from "react";

const Modal = ({ text, visiable }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget)
      // figure out the difference between target and currentTarget
      visiable(false);
  };

  return (
    <div className='modal' onClick={handleClick}>
      <div className='card'>
        <h3>{text}</h3>
        <button className='btn delete-btn' onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  tetx: "tips",
};

export default Modal;
