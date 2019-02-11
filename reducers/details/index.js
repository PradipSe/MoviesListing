import Immutable from "seamless-immutable";
import {
  DETAILS_FAILURE,
  DETAILS_REQUEST,
  DETAILS_SUCCESS
} from "../../actions/details/actionType";

const initialState = Immutable({
  error: false,
  detailsInfo: []
});

export function detailInfoReducer(state = initialState, action) {
  switch (action.type) {
    case DETAILS_FAILURE:
      return state.merge({
        detailsInfo: { data: action.error, isFetching: false, isError: true }
      });

    case DETAILS_REQUEST:
      return state.merge({ detailsInfo: { isFetching: true } });

    case DETAILS_SUCCESS:
      return state.merge({
        detailsInfo: {
          data: action.detailsInfo,
          isFetching: false,
          isError: false
        }
      });

    default:
      return state;
  }
}

export default detailInfoReducer;
