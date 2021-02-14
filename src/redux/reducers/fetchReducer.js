import { FetchState } from "../../constants";
import {
  FAILUR_FETCHING,
  START_FETCHING,
  SUCCESS_FETCHING,
} from "../../constants/actionTypes";

const fetchReducer = (state = FetchState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        isFetching: true,
        success: false,
        data: [],
        error: false,
      };
    case SUCCESS_FETCHING:
      return {
        isFetching: false,
        success: true,
        data: action.payload,
        error: false,
      };
    case FAILUR_FETCHING:
      return {
        isFetching: false,
        error: true,
        data: [],
        success: false,
      };
    default:
      return state;
  }
};
export { fetchReducer };
