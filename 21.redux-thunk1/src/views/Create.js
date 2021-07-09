/** @format */

import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const addPost = async (post) => {
    axios.post("http://localhost:9999/posts", post);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
      created: Date.now(),
    };
    addPost(post).then(history.push("/"));
  };
  return (
    <form onSubmit={handleSubmit} className='create-form'>
      <h1>Create</h1>
      <div className='input-group'>
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div className='input-group'>
        <label htmlFor='title'>Body:</label>
        <textarea
          id='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
      </div>
      <button>ADD POST</button>
    </form>
  );
};

export default Create;
