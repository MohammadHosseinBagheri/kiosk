import * as types from "./../../constants/actionTypes";

const users = (state = [], action) => {
  switch (action.type) {
    case types.RECIEVE_USERS:
      return action.users;
    case types.ADD_USER:
      return [...state, action.user];
    default:
      return state;
  }
};

const loginedUser = (state = {}, action) => {
  if (action.type === types.RECIEVE_LOGINED_USER) {
    return action.name;
  }
  return state;
};

export { users, loginedUser };
