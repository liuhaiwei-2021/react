/** @format */

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Post = ({ post }) => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  return (
    <div className='post' style={{ background: theme.ui, color: theme.text }}>
      <h1 className='post-title'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
