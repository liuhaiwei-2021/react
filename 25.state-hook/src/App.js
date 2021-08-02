/** @format */

import "./App.css";
import { useState } from "react";
import Post from "./components/Post";

function App() {
  const [post, setPost] = useState([
    {
      id: 1,
      title: "post 1",
      body: "this is post 1",
    },
    {
      id: 2,
      title: "post 2",
      body: "this is post 1",
    },
    {
      id: 1,
      title: "post  3",
      body: "this is post 3",
    },
  ]);

  const [loggedIn, setLoggedIn] = useState(true);
  const login = () => {
    setLoggedIn((previous) => !previous);
  };

  return (
    <div className='container'>
      {loggedIn ? (
        <h1 className='text-center mt-5'>Posts</h1>
      ) : (
        <h1 className='text-center mt-5'>Please login</h1>
      )}

      <Post title='this is post' body='hello' />

      <div className='text-center'>
        <button className='btn-lg mt-5' onClick={login}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default App;
