import { createAction } from 'redux-actions';
import {PUSH_BACK_PICTURE} from "../constants/ActionTypes";
import {SET_TITLE} from "../constants/ActionTypes";
import {SET_PARAGRAPHS} from "../constants/ActionTypes";
import {SET_HREF} from "../constants/ActionTypes";
import {SET_LINK_TEXT} from "../constants/ActionTypes";

let pushBackPicture = createAction(PUSH_BACK_PICTURE);
let setTitle = createAction(SET_TITLE);
let setParagraphs = createAction(SET_PARAGRAPHS);
let setHref = createAction(SET_HREF);
let setLinkText = createAction(SET_LINK_TEXT);
export { pushBackPicture, setTitle, setParagraphs, setHref, setLinkText };
