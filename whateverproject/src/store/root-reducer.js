import { combineReducers } from "redux";
import { loginPopupReducer } from "./loginpopup/loginpopup.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    loginPopup: loginPopupReducer,
})