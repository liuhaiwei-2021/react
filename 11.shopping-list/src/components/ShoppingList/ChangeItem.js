/** @format */

import React from "react";
import { useState,useEffect } from "react";

const ChangeItem = ({ shopping,changeShopping }) => {
    const [text, setText] = useState("");
    useEffect(() => {
        setText(shopping.title)
    },[shopping.title])
    const handleSubmit = e => {
        e.preventDefault()
        changeShopping(text)
    }
  return (
    <form className='change-item' onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}></input>
      <button>OK</button>
    </form>
  );
};

export default ChangeItem;
