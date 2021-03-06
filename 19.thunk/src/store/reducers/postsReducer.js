/** @format */

import actiontypes from "../actiontypes";

const initialState = {
  list: [],
  loading: null,
  error: undefined,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes().posts.loading:
      return {
        ...state,
        loading: action.payload,
      };
    case actiontypes().posts.getPostsSuccess:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: undefined,
      };
    case actiontypes().posts.getPostsFailure:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default postsReducer;
