import { combineReducers } from "redux";
import quantityReducer from "./quantityReducer";
import counterReducer from "./counterReducer";


export default combineReducers({
     counter:counterReducer,
    quantity:quantityReducer
})