/** @format */

import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const NewPosts = ({ addPostCallback }) => {
  const { isLight, light, dark, toggleIsLight } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    addPostCallback(title, body);
    setTitle("");
    setBody("");
    history.push("/");
  };

  return (
    <form className='new-post mt-5'>
      <div className='input-group d-grid mb-3'>
        <label htmlFor='title' className='input-label mb-2'>
          Title:
        </label>
        <input
          type='text'
          id='title'
          className='form-control w-100 border-0 border-bottom'
          placeholder='Enter your title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{background:theme.bg,color:theme.text}}
        />
      </div>
      <div className='input-group d-grid mt-5'>
        <label htmlFor='body' className='input-label mb-2'>
          Body:
        </label>
        <textarea
          type='text'
          id='body'
          className='form-control w-100 rounded p-2 '
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} className='btn btn-lg mt-4 w-25'>
        CREATE
      </button>
    </form>
  );
};

export default NewPosts;
