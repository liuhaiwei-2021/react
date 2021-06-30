/** @format */

import React from "react";
import Post from '../components/Post'

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {
        posts.length > 0
        ? posts.map((post) => <Post post={post} />)
        : <h5>No posts</h5>
      }
    </div>
  );
};

export default Posts;
