/** @format */

import actiontypes from "./actiontypes";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case actiontypes().posts.addPost:
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    case actiontypes().posts.deletePost:
      return state.filter((post) => post.id !== action.id);

    default:
      return state;
  }
};
