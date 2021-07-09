
import actiontypes from "../actiontypes";

const initialState = {
    post: null,
    loading: null,
    error: undefined    
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes().post.loading:
            return {
                ...state,
                loading: action.payload
            }
        case actiontypes().post.getOnePostSueccess:
            return {
                ...state,
                loading: false,
                post: action.payload,
            }
        case actiontypes().post.getOnePostFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            
        default:
            return state
    }
}



export default postReducer