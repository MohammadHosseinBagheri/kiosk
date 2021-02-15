import { combineReducers } from "redux";
import products from "./products";
import sideDrawer from './sideDrawer'

export default combineReducers({
  products,
  showsideDrawer: sideDrawer
});
