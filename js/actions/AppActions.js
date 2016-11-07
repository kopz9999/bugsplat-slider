import { createAction } from 'redux-actions';
import {PUSH_BACK_PICTURE} from "../constants/ActionTypes";
import {SET_TITLE} from "../constants/ActionTypes";
import {SET_PARAGRAPHS} from "../constants/ActionTypes";
import {SET_HREF} from "../constants/ActionTypes";
import {SET_LINK_TEXT} from "../constants/ActionTypes";
import {SET_CHANGE_INTERVAL} from "../constants/ActionTypes";
import {SET_ENTER_TIMEOUT} from "../constants/ActionTypes";

let pushBackPicture = createAction(PUSH_BACK_PICTURE);
let setTitle = createAction(SET_TITLE);
let setParagraphs = createAction(SET_PARAGRAPHS);
let setHref = createAction(SET_HREF);
let setLinkText = createAction(SET_LINK_TEXT);
let setChangeInterval = createAction(SET_CHANGE_INTERVAL);
let setEnterTimeout = createAction(SET_ENTER_TIMEOUT);

export {
  pushBackPicture,
  setTitle,
  setParagraphs,
  setHref,
  setLinkText,
  setChangeInterval,
  setEnterTimeout
};
