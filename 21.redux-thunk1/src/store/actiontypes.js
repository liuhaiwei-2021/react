/** @format */

const actiontypes = () => {
  return {
    auth: {
      login: "LOGIN",
      logout: "LOGOUT",
    },
    posts: {
      loading: "LOADING",
      getPosts: "GET_POSTS",
      getPostsSueccess: "GET_POSTS_SUECCESS",
      getPostsFailure: "GET_POSTS_FAILURE",
    },
    post: {
      loading: "LOADING",
      getOnePost: "GET_ONE_POST",
      getOnePostSueccess: "GET_ONE_POST_SUECCESS",
      getOnePostFailure: "GET_ONE_POST_FAILURE",
    },
  };
};

export default actiontypes;
