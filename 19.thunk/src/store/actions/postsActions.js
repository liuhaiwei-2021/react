/** @format */

import actiontypes from "../actiontypes";
import axios from "axios";

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(loading(true));
    try {
      const res = await axios.get("http://localhost:9999/posts");
      setTimeout(() => {
        dispatch(getPostsSuccess(res.data));
      }, 1000);
    } catch (err) {
      dispatch(getPostsFailure(err.message));
    }
  };
};

export const loading = (payload) => {
  return {
    type: actiontypes().posts.loading,
    payload,
  };
};
export const getPostsSuccess = (posts) => {
  return {
    type: actiontypes().posts.getPostsSuccess,
    payload: posts,
  };
};

export const getPostsFailure = (err) => {
  return {
    type: actiontypes().posts.getPostsFailure,
    payload: err,
  };
};
