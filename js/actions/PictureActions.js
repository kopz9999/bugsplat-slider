import { createAction } from 'redux-actions';
import {REQUEST_PICTURE} from "../constants/ActionTypes";
import {RECEIVE_PICTURE} from "../constants/ActionTypes";

let requestPicture = createAction(REQUEST_PICTURE);
let receivePicture = createAction(RECEIVE_PICTURE);
export { requestPicture, receivePicture };
