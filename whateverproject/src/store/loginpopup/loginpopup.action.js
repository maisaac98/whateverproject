import { createAction } from "../../utils/reducer/reducers.utils"
import { LOGINPOPUP_ACTION_TYPES } from "./loginpopup.types";

export const setSignupOpen = () => {
    return createAction(LOGINPOPUP_ACTION_TYPES.SET_SIGNUP_OPEN);
}