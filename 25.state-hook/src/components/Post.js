/** @format */

import { useState } from "react";

const Post = ({ title, body }) => {
  const [isDark, setIsdark] = useState(false);
  const changeTheme = () => {
    setIsdark((prev) => !prev);
  };

  return (
    <div className='post mb-2'>
      <div className={`card ${isDark ? "dark" : ""}`}>
        <h1>{title}</h1>
        <p>{body}</p>
        <button onClick={changeTheme}>
          {isDark ? "change to light" : "change to dark"}
        </button>
      </div>
    </div>
  );
};

export default Post;
