/**
 * Global state root reducer
 */
import { combineReducers } from "redux";
import listingInfoReducer from "../reducers/app";
import detailInfoReducer from "../reducers/details";

export default () => {
  const rootReducer = combineReducers({
    listingInfo: listingInfoReducer,
    detailsInfo: detailInfoReducer
  });

  return rootReducer;
};
