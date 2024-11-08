import { combineReducers } from "redux";
import TodoReducer from "./todoReducer";

const reducer = combineReducers({
    tasks: TodoReducer
})

export default reducer;