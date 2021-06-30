/** @format */

import React from "react";
import Post from "../components/Post";
import { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Posts = () => {
  const { posts } = useContext(PostsContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='posts'>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <h5 style={{ color: theme.text }}>No posts left!</h5>
      )}
    </div>
  );
};

export default Posts;
