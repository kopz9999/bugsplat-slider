import {REQUEST_PICTURE} from "../constants/ActionTypes";
import {RECEIVE_PICTURE} from "../constants/ActionTypes";

let defaultState = {};

import { handleActions } from 'redux-actions';

const picture = handleActions({
  REQUEST_PICTURE: (state) => ({
    ...state,
    isFetching: true,
  }),
  RECEIVE_PICTURE: (state, action) => ({
    ...state,
    isFetching: false,
    picture: action.payload.picture,
  })
}, { isFetching: false });

export default function(state = defaultState, action) {
  const { payload, type } = action;
  switch (type) {
    case RECEIVE_PICTURE:
    case REQUEST_PICTURE:
      return {
        ...state,
        [payload.id]: picture(state[payload.id], action)
      };
    default:
      return state;
  }
}
