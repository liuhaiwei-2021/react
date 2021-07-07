/** @format */

const actiontypes = () => {
  return {
    auth: {
      login: "LOGIN",
      logout: "LOGOUT",
    },
    posts: {
      loading: "POSTS_LOADING",
      getPostsSuccess: "GET_POSTS_SUCCESS",
      getPostsFailure: "GET_POSTS_FAILURE",
    },
    post: {
      loading: "POST_LOADING",
      getOnePostsSuccess: "GET_ONE_POSTS_SUCCESS",
      getOnePostsFailure: "GET_ONE_POSTS_FAILURE",
      clearPost: "CLEAR_POST"
    },
  };
};
export default actiontypes;
