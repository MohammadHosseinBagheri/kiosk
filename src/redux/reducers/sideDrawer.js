import * as types from "./../../constants/actionTypes";

const sideDrawer = (state = false, action) => {
    switch (action.type) {
        case types.SIDE_DRAWER_CLOSED:
            return false;
        case types.SIDE_DRAWER_TOGGLE:
            return !state;

        default:
            return state;
    }
};

export default sideDrawer;