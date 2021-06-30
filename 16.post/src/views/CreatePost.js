/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const onSub = (e) => {
    e.preventDefault();
    addPost(title, body);
    setTitle("");
    setBody("");
    history.push("/");
  };
  return (
    <form className='create-post container' onSubmit={onSub}>
      <div className='input-group'>
        <label htmlFor='title' className='input-label'>
          Title:
        </label>
        <input
          type='text'
          id='title'
          className='form-control'
          value={title}
          onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div className='input-group'>
        <label htmlFor='body' className='input-label'>
          Body:
        </label>
        <textarea
          id='body'
          className='form-control'
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
      </div>
      <button className='btn-form'>CREATE</button>
    </form>
  );
};

export default CreatePost;
