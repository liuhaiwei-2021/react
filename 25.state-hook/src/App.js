/** @format */

import "./App.css";
import { useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "post 1",
      body: "this is post 3wghhqäpjhopjqhphipriehpperhpjwphjojsljhlsjlhjoajhospjhoprtjs",
    },
    {
      id: 2,
      title: "post 2",
      body: "this is post 3wghhqäpjhopjqhphipriehpperhpjwphjojsljhlsjlhjoajhospjhoprtjs",
    },
    {
      id: 1,
      title: "post  3",
      body: "this is post 3wghhqäpjhopjqhphipriehpperhpjwphjojsljhlsjlhjoajhospjhoprtjs",
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

      <div>
        {posts.map((post) =>
          loggedIn ? <Post title={post.title} body={post.body} /> : ""
        )}
      </div>

      <div className='text-center'>
        <button className='btn-lg mt-5' onClick={login}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default App;
