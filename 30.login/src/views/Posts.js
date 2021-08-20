/** @format */

import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container">
      {posts.map((post) => (
        <div className='card mb-2' key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
