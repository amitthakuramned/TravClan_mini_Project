import passReducers from "./passReducers";
import todoReducers from "./todoReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  todoReducers,
  passReducers,
});

export default rootReducers;
