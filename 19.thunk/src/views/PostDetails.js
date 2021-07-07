/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost, clearPost } from "../store/actions/postActions";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const PostDetails = () => {
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnePost(id));
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, id]);

  const loading = useSelector((state) => state.post.loading);
  const post = useSelector((state) => state.post.post);

  return (
    <div>
      {loading && <Loader />}
      {post && (
        <div className='post details'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
