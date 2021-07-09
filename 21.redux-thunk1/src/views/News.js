/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/actions/postsActions";
import Loader from "../components/Loader";
import Post from "../components/Post";

const News = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.posts.loading);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className='posts'>
      {loading && <Loader />}
          {posts && posts.map((post) => <Post key={post.id} post={post}/>)}
    </div>
  );
};

export default News;
