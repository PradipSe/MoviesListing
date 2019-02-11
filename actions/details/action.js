import {
  DETAILS_FAILURE,
  DETAILS_REQUEST,
  DETAILS_SUCCESS
} from "./actionType";

export function failureMoviesDetailsApi(error) {
  return {
    type: DETAILS_FAILURE,
    error
  };
}

export function requestMoviesDetailsApi() {
  return {
    type: DETAILS_REQUEST
  };
}

export function receiveMoviesDetailsApi(authResponse) {
  return {
    type: DETAILS_SUCCESS,
    detailsInfo: authResponse
  };
}
