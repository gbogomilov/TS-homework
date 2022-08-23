import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./toDos";

export default combineReducers({ todos, visibilityFilter });
