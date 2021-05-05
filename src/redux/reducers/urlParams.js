import * as types from "./../../constants/actionTypes";

export const homeUrlParams = (state = {}, action) => {
  if (action.type === types.HOME_URL_PARAMS) {
    return action.homeUrlParams;
  } else {
    return state;
  }
};

export const appUrlParams = (state = {}, action) => {
  if (action.type === types.APP_URL_PARAMS) {
    return action.appUrlParams;
  } else {
    return state;
  }
};

export const cartUrlParams = (state = {}, action) => {
  if (action.type === types.CART_URL_PARAMS) {
    return action.cartUrlParams;
  } else {
    return state;
  }
};

export const aboutUrlParams = (state = {}, action) => {
  if (action.type === types.ABOUT_URL_PARAMS) {
    return action.aboutUrlParams;
  } else {
    return state;
  }
};
