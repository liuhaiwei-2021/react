/** @format */

import React from "react";

const Post = ({ title, body }) => {
  return (
    <div className='post'>
      <h1 className="text-center">{title}</h1>
      <p className="text-center">{body}</p>
    </div>
  );
};

export default Post;
