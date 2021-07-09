import actiontypes from "../actiontypes";

const initialState = {
    posts: [],
    loading: null,
    error: undefined    
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes().posts.loading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().posts.getPostsSueccess:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        case actiontypes().posts.getPostsFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            
        default:
            return state
    }
}



export default postsReducer