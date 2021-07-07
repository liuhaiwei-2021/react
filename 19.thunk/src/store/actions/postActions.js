/** @format */

import actiontypes from "../actiontypes";
import axios from "axios";

export const getOnePost = (id) => {
  return async (dispatch) => {
    dispatch(loading(true));
    try {
      const res = await axios.get(`http://localhost:9999/posts/${id}`);
      setTimeout(() => {
        dispatch(getOnePostsSuccess(res.data));
      }, 1000);
    } catch (err) {
      dispatch(getOnePostFailure(err.message));
    }
  };
};

export const loading = (payload) => {
  return {
    type: actiontypes().post.loading,
    payload,
  };
};
export const getOnePostsSuccess = (posts) => {
  return {
    type: actiontypes().post.getOnePostsSuccess,
    payload: posts,
  };
};

export const getOnePostFailure = (err) => {
  return {
    type: actiontypes().post.getOnePostsFailure,
    payload: err,
  };
};

export const clearPost = () => {
  return {
    type: actiontypes().post.clearPost,
    payload: null,
  };
};
