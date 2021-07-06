/** @format */

import actiontypes from "../actiontypes";
import axios from "axios";


export const getPosts = () => {
    return async dispatch => {
        dispatch(loading(true))
    }
}

export const loading=(payload) => {
    return {
        type:actiontypes().posts.loading
    }
}