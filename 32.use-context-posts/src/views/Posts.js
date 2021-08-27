/** @format */

import React from "react";
import Post from "../components/Post";


const Posts = ({ posts }) => {
  return (
    <div className='posts'>
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <h2>No posts found</h2>
      )}
    </div>
  );
};

export default Posts;
