import axios from "axios";
import * as action from "./action";
import { API_ENDPOINT_URL } from "../../global.config";

/**
 * @function initiateMoviesDetailsApi
 * @description Will initiate MoviesDetails api listing from endpoint to store in global state.
 */
export function initiateMoviesDetailsApi(id) {
  return dispatch => {
    dispatch(action.requestMoviesDetailsApi());
    return axios.get(`${API_ENDPOINT_URL}/${id}`).then(
      json => {
        console.log('asdsad:')
        if (json.status === 200 && json.data && !json.data.error) {
          dispatch(action.receiveMoviesDetailsApi(json.data));
        } else {
          dispatch(action.failureMoviesDetailsApi(json.data.error));
        }
      },
      err => {
        dispatch(action.failureMoviesDetailsApi(err));
      }
    );
  };
}
