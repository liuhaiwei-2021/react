/** @format */

import React from "react";

const Post = ({ post }) => {
  return (
    <div className='post'>
      <h2 key={post.id}>{post.title}</h2>
      <div>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
