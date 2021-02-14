import {
  FAILUR_FETCHING,
  START_FETCHING,
  SUCCESS_FETCHING,
} from "../../constants/actionTypes";

const fetchStartAction = () => {
  return {
    type: START_FETCHING,
  };
};
const fetchSuccessAction = (data) => {
  return {
    type: SUCCESS_FETCHING,
    payload: data,
  };
};

const fetchFailurAction = () => {
  return {
    type: FAILUR_FETCHING,
  };
};

export { fetchStartAction, fetchSuccessAction, fetchFailurAction };
