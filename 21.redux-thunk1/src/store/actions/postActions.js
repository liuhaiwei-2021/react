/** @format */

import actiontypes from "../actiontypes";
import axios from "axios";

export const getOnePost = (id) => {
  return async (dispatch) => {
    dispatch(loading(true));

    try {
      const res = await axios.get(`http://localhost:9999/posts/${id}`);
      setTimeout(() => {
        dispatch(getOnePostSuccess(res.data));
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

export const getOnePostSuccess = (post) => {
  return {
    type: actiontypes().post.getOnePostSueccess,
    payload: post,
  };
};

export const getOnePostFailure = (err) => {
  return {
    type: actiontypes().post.getOnePostFailure,
    payload: err,
  };
};
