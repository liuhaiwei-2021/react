/** @format */

import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { PostsContext } from "../contexts/PostsContext";
import actiontypes from "../reducers/actiontypes";

const Post = ({ post }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  // const { removePost } = useContext(PostsContext);
  const { dispatch } = useContext(PostsContext);
  return (
    <div
      className='post'
      style={{ background: theme.ui, color: theme.text }}
      onClick={()=>dispatch({type:actiontypes().posts.deletePost, id:post.id})}>
      <h2 key={post.id}>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
