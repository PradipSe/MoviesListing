import axios from "axios";
import * as action from "./action";
import { API_ENDPOINT_URL } from "../../global.config";

/**
 * @function initiateMoviesApi
 * @description Will initiate Movies api listing from endpoint to store in global state.
 */
export function initiateMoviesApi() {
  return dispatch => {
    dispatch(action.requestMoviesApi());
    return axios.get(API_ENDPOINT_URL).then(
      json => {
        if (json.status === 200 && json.data && !json.data.error) {
          dispatch(action.receiveMoviesApi(json.data));
        } else {
          dispatch(action.failureMoviesApi(json.data.error));
        }
      },
      err => {
        dispatch(action.failureMoviesApi(err));
      }
    );
  };
}
