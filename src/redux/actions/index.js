import * as types from "./../../constants/actionTypes";

export const receiveProducts = (products) => ({
  products,
  type: types.RECEIVE_PRODUCTS,
});

export const sideDrawerClosed = () => ({
  type: types.SIDE_DRAWER_CLOSED
})

export const sideDrawerClosed = () => ({
  type: types.SIDE_DRAWER_TOGGLE
})
