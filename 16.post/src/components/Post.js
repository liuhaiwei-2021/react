/** @format */

import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { PostsContext } from "../contexts/PostsContext";

const Post = ({ post }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { removePost } = useContext(PostsContext);
  return (
    <div
      className='post'
      style={{ background: theme.ui, color: theme.text }}
      onClick={() => removePost(post.id)}>
      <h2 key={post.id}>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
