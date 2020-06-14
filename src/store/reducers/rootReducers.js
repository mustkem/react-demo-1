import { combineReducers } from "redux";

import movies from "./products";

const rootReducer = combineReducers({
  movies,
});
export default rootReducer;
