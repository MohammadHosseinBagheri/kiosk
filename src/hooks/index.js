import { useReducer, useEffect } from "react";
import { FetchState } from "../constants";
import { START_FETCHING } from "../constants/actionTypes";
import {
  fetchFailurAction,
  fetchStartAction,
  fetchSuccessAction,
} from "../redux/actions/fetchAction";
import { fetchReducer } from "../redux/reducers/fetchReducer";
const useFetch = (url, params = null) => {
  const [state, dispatch] = useReducer(fetchReducer, FetchState);
  useEffect(() => {
    dispatch(fetchStartAction());
    fetch(url)
      .then((data) => data.json())
      .then((dataJson) => dispatch(fetchSuccessAction(dataJson)))
      .catch((error) => {
        dispatch(fetchFailurAction());
      });
  }, []);
  return state;
};
export default useFetch;
