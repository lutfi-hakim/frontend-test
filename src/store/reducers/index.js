import { combineReducers } from "redux";
import product from "./product";
import login from "./login";
export default combineReducers({
  product,
  login,
});
