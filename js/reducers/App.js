import {RECEIVE_PICTURE} from "../constants/ActionTypes";
import {PUSH_BACK_PICTURE} from "../constants/ActionTypes";
import {SET_TITLE} from "../constants/ActionTypes";
import {SET_PARAGRAPHS} from "../constants/ActionTypes";
import {SET_HREF} from "../constants/ActionTypes";
import {SET_LINK_TEXT} from "../constants/ActionTypes";

let defaultState = {
  pictureCards: [],
  title: '',
  paragraphs: [],
  href: '',
  linkText: '',
};

export default function(state = defaultState, action) {
  const { payload, type } = action;
  switch (type) {
    case PUSH_BACK_PICTURE:
      var pictureCards = [...state.pictureCards];
      // pictureCards.unshift(pictureCards.pop());
      pictureCards.push(pictureCards.shift());
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
    case SET_TITLE:
      return {
        ...state,
        title: payload.title
      };
    case SET_PARAGRAPHS:
      return {
        ...state,
        paragraphs: payload.paragraphs
      };
    case SET_HREF:
      return {
        ...state,
        href: payload.href
      };
    case SET_LINK_TEXT:
      return {
        ...state,
        linkText: payload.linkText
      };
    default:
      return state;
  }
}
