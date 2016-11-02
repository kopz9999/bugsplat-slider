import {RECEIVE_PICTURE} from "../constants/ActionTypes";
import {PUSH_BACK_PICTURE} from "../constants/ActionTypes";

let defaultState = {
  pictureCards: []
};

export default function(state = defaultState, action) {
  const { payload, type } = action;
  switch (type) {
    case PUSH_BACK_PICTURE:
      var pictureCards = [...state.pictureCards];
      pictureCards.unshift(pictureCards.pop());
      return {
        ...state,
        pictureCards
      };
    case RECEIVE_PICTURE:
      return {
        ...state,
        pictureCards: [
          ...state.pictureCards,
          payload.picture
        ]
      };
    default:
      return state;
  }
}
