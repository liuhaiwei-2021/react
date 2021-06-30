/** @format */

import { createContext,useState } from "react";
export const PostsContext = createContext();

const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "first", body: "This is the first post" },
    { id: 2, title: "second", body: "This is the second post" },
    { id: 3, title: "third", body: "This is the third post" },
  ]);
  const addPost = (title, body) => {
    let post = {
      id: Date.now().toString(),
      title,
      body,
    };
    setPosts((prevposts) => {
      return [...prevposts, post];
    });
  };
  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, removePost }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
