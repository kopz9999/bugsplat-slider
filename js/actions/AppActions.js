import { createAction } from 'redux-actions';
import {PUSH_BACK_PICTURE} from "../constants/ActionTypes";

let pushBackPicture = createAction(PUSH_BACK_PICTURE);
export { pushBackPicture };
