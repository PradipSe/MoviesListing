import {
  LISTING_FAILURE,
  LISTING_REQUEST,
  LISTING_SUCCESS
} from "./actionType";

export function failureMoviesApi(error) {
  return {
    type: LISTING_FAILURE,
    error
  };
}

export function requestMoviesApi() {
  return {
    type: LISTING_REQUEST
  };
}

export function receiveMoviesApi(authResponse) {
  return {
    type: LISTING_SUCCESS,
    listingInfo: authResponse
  };
}
