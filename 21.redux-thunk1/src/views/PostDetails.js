/** @format */

import { useEffect } from "react";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost } from "../store/actions/postActions";
import { useParams } from "react-router";

const PostDetails = () => {
  const id = useParams().id;
    const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(getOnePost(id));
  }, [dispatch, id]);
    
  const loading = useSelector((state) => state.post.loading);
  const post = useSelector((state) => state.post.post);
  return (
    <div className='post detail'>
      {loading && <Loader />}
      {post && (
        <div>
          <h2>{post.title} </h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
