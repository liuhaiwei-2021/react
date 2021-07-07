/** @format */

import actiontypes from "../actiontypes";

const initialState = {
  post: null,
  loading: null,
  error: undefined,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes().post.loading:
      return {
        ...state,
        loading: action.payload,
      };
    case actiontypes().post.getOnePostsSuccess:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: undefined,
      };
    case actiontypes().posts.getOnePostsFailure:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actiontypes().post.clearPost:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
