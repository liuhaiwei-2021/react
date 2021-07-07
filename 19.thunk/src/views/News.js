/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../store/actions/postsActions";
import Loader from "../components/Loader";
import Post from "../components/Post";

const News = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.posts.loading);
  const posts = useSelector((state) => state.posts.list);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      {/* {posts && posts.map((post) => <h3>Post</h3>)} */}
    </div>
  );
};

export default News;
