/** @format */

import { useEffect } from "react";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost } from "../store/actions/postActions";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOnePost(id));
  }, [dispatch, id]);

  const loading = useSelector((state) => state.post.loading);
  const post = useSelector((state) => state.post.post);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const deleteOnePost = () => {
    axios.delete(`http://localhost:9999/posts/${id}`).then(history.push("/"));
  };
  return (
    <div >
      {loading && <Loader />}
      {post && (
        <div className='post detail'>
          {isAuth && (
            <i className='fas fa-times delete-btn' onClick={deleteOnePost}></i>
          )}
          <h2>{post.title} </h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
