import { combineReducers } from "redux";
import {
  allProducts,
  newestProducts,
  bestProducts,
  freeProducts,
} from "./products";
import sideDrawer from "./sideDrawer";
import {
  homeUrlParams,
  appUrlParams,
  cartUrlParams,
  aboutUrlParams,
} from "./urlParams";
import comments from "./comments";
import { users, loginedUser } from "./users";
import cartProducts from "./cartProducts";

export default combineReducers({
  allProducts,
  newestProducts,
  bestProducts,
  freeProducts,
  showsideDrawer: sideDrawer,
  homeUrlParams,
  appUrlParams,
  cartUrlParams,
  aboutUrlParams,
  comments,
  users,
  loginedUser,
  cartProducts,
});
