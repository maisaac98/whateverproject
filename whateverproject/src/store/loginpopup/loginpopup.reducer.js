import { LOGINPOPUP_ACTION_TYPES } from "./loginpopup.types";

const INITIAL_STATE = {
    isPopupOpen: false,
    isSignupOpen: false,
    isSigninOpen: false,
    isEmailSignupOpen: false,
    isEmailSigninOpen: false,

}

export const loginPopupReducer = (state = INITIAL_STATE, action) => {
    const {type} = action;

    switch(type){
        case LOGINPOPUP_ACTION_TYPES.SET_SIGNUP_OPEN:
            return { isPopupOpen: true, isSignupOpen: true, isSigninOpen: false, isEmailSigninOpen: false, isEmailSignupOpen: false };
        case LOGINPOPUP_ACTION_TYPES.SET_SIGNIN_OPEN:
            return { isPopupOpen: true, isSignupOpen: false, isSigninOpen: true, isEmailSigninOpen: false, isEmailSignupOpen: false };
        case LOGINPOPUP_ACTION_TYPES.SET_EMAIL_SIGNIN_OPEN:
            return { isPopupOpen: true, isSignupOpen: false, isSigninOpen: false, isEmailSigninOpen: true, isEmailSignupOpen: false };
        case LOGINPOPUP_ACTION_TYPES.SET_EMAIL_SIGNUP_OPEN:
            return { isPopupOpen: true, isSignupOpen: false, isSigninOpen: false, isEmailSigninOpen: false, isEmailSignupOpen: true };
        case LOGINPOPUP_ACTION_TYPES.CLOSE_POPUP:
            return { isPopupOpen: false, isSignupOpen: false, isSigninOpen: false, isEmailSigninOpen: false, isEmailSignupOpen: false };
        default:
            return state; //since the actions will fire into every reducer but switch cases will not match i.e. nothing will change here 
    }

}

//this example is how the useReducer hook was being used, but now the root-reducer will provide the dispatch 
// export const UserProviderEx = ({children}) => {
//     const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
// }